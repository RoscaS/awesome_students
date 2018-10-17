---
title: Corruption des données
date: 2018-10-16
author:  Sol
sidebar: auto
---

Cet article vise à introduire la **corruption de données** qui est un problème clé de la programmation concurrente.

## Source

* Cours de madame Aïcha Rizzotti (He-Arc Neuchâtel)
* [Wikipedia](https://en.wikipedia.org)


##  Problématique

```C
void *func1(void *arg) {
    for(int i = 0; i < COUNT; i++) {
        n++;
    }
    printf("T1 terminated.\n");
    return NULL;
}

void *func2(void *arg) {
    for(int i = 0; i < COUNT; i++) {
        n++;
    }
    printf("T2 terminated.\n");
    return NULL;
}

int main (int argc, char* argv[]) {
    pthread_t t1, t2;
    pthread_create(&t1, NULL, func1, NULL);
    pthread_create(&t2, NULL, func2, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    printf("n= %d\n", n);
    return EXIT_SUCCESS;
}
```
L'issue de ce programme n'est pas déterministe et variera en fonction des processeurs qui l'exécutent.

### Explication
On pourrait se dire que comme nous avons 2 threads qui gonflent la même variable 10 000 fois, la valeur finale de `n` serait 20 000 mais ça ne sera pas toujours le cas.

L'instruction `n++` est composée de 3 instructions distinctes en langage machine:

```assembly
mov1 n, eax
addl 1, eax
mov1 eax, n
```

* ligne 1: Copie de la valeur de la mémoire commune désignée par `n` dans le registre `eax`
* ligne 2: Ajoute `1` au registre
* ligne 3: Stocke le contenu du registre `eax` à l'adresse de `n`

Donc comme cette instruction C est en réalité 3 instructions distinctes pour le processeur voilà ce qu'il peut arriver:

![Image](https://i.imgur.com/xzEVWVk.png)

* L'exemple d'exécution précédent montre que la variable `n` ne peut pas être utilisée comme compteur.
* Pour résoudre ce problème l'instruction `n++` doit s'exécuter de manière **atomique**, c'est à dire que les deux accès à la variable `n` doivent s'effectuer de façon indivisible.
* Une portion de code qui doit s'exécuter de manière atomique est appelée une **section critique (sc)**.
* Une solution consiste à inclure et protéger la section critique à l'aide d'un verrou.
* Un tel verrou s'appelle un **Mutex** dans le jargon des threads.

### Atomicité
Une opération atomique signifie que la séquence d'instructions est indivisible. Elle est garantie d'être exécutée en un seul bloc.

* Une instruction unique en C n'est pas forcément atomique en langage machine.
* Le mécanisme d'atomicité est nécessaire dans le cas d'accès cucurrents à des données comme par exemple:
    * Atomicité des transactions dans une base de données
    * Atomicité au niveau des opérations du système de fichiers
    * Concurrence dans les systèmes d'exploitation
    * ...

### Thread-Safe
Une **fonction** est dite thread-safe (ou MT-safe) si elle peut être appelée simultanément par plusieurs threads et qu'elle retourne toujours un même résultat.

* Dans un contecte concurrent, toute fonction non thread-safe doit être protégée par un mécanisme approprié comme un verrou.
* La plupart des fonctions de la librairie POSIX Threads sont thread-safe et celles qui ne le sont pas sont listées dans le manuel (`man pthreads`)

### Ressource critique
Une ressource critique est une ressource non partageable et accédée par plusieurs threads. Par exemple:
* Une variable globale (ressource logique) accédée en lecture et en écriture par plusieurs threads.
* Une ressource physique (périphérique) accédée par plusieurs threads.

```C
int iterations = 10000;
int global = 0;

void *func(void *arg) {
    for(int i = 0; i < iterations; i++) {
        global++;
    }
    printf("Fin du thread %d\n", (int)arg);
    return NULL;
}

int main (int argc, char* argv[]) {
    pthread_t t1, t2;
    if (pthread_create(&t1, NULL, func, (void *) 1) == 0) {
        if (pthread_create(&t2, NULL, func, (void *) 2) == 0) {
            pthread_join(t1, NULL);
            pthread_join(t2, NULL);
            printf("Fin des thread: global = %d (%d)\n", global, 2*iterations);
            return EXIT_SUCCESS;
        }
        fprintf(stderr, "main: Error pthread_create\n");
    }
    fprintf(stderr, "main: Error pthread_create\n");
    return EXIT_FAILURE;
}
```
Ce programme est essentiellement le même que le premier et est tout autant indéterministe. Exemples d'output sur ma machine:

    Fin du thread 2
    Fin du thread 1
    Fin des thread: global = 17406 (20000)
    =======================================
    Fin du thread 1
    Fin du thread 2
    Fin des thread: global = 20000 (20000)
    =======================================
    Fin du thread 1
    Fin du thread 2
    Fin des thread: global = 18311 (20000)

## Conclusion
Nous voici face à un des problèmes de la programmation concurrente: **La corruption de données**.

Les prochains articles détailleront comment gérer cette situation.


