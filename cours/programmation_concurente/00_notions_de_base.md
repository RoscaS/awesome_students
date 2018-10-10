---
title: Overview de la notion de thread
date: 2018-09-01
author:  Sol
sidebar: auto
---

##  Notions de base

* Un **programme** est une suite d'instructions (notion statique). On peut le voir comme une classe.
* Un **processus** c'est l'image du contenu des registres et de la mémoire (notion dynamique). On peut le voir comme une instance de classe.

La définition exacte d'un processus c'est:
> Un programme en cours d'exécution auquel est associé un environnement processeur et un environnement mémoire.

* **Espace d'adressage**: Ensemble d'adresses mémoire dans lesquelles un processus peut lire et écrire. Cet espace est divisé en trois parties:
    * Le **segment texte**: code du programme
    * Le **tas** binaire (*heap*, segment de données): les variables dynamiques
    * La **pile**: (*stack*) variables statiques

<Media
    src="https://i.imgur.com/NYpNcTl.png"
    caption="La pile empiète sur le 'trou' de manière automatique et l'extension du segment de données commence lors d'une allocation dynamique. Le segment de texte (le code), quant à lui, ne bouge pas."
    center="true"
    width=450
/>

Lorsqu'un processus est lancé, le système doit gérer la mémoire et l'allocation du processeur lui étant accordée. Il fait appel à l'ordonnanceur (*Scheduler*).

Un système gère le multi tâche de façon:
* **Préemptive**: Lorsqu'il peut arrêter (mettre en stand-by) à tout moment n'importe quelle application pour passer à la suivante (XP, 7, GNU/Linux).
* **Coopérative**: Quand il permet à plusieurs applications de fonctionner et d'occuper la mémoire en leurs laissant le soin de se gérer elles mêmes (95, 98, Millenium).

::: warning Info
Les systèmes basés sur Unix sont des systèmes préemptifs.
:::

On parle de:
* **Pseudo-parallélisme**: (monocoeur)Quand le processeur passe d'un programme à un autre en quelques ms, ce qui donne à l'utilisateur une impression de simultanéité.
* **Parallélisme**: (multi-coeur) Quand plusieurs programmes s'éxécutent réellement en même temps.

### Processus sous Unix

Sur la majorité des OS à l'exception des systèmes Unix, **processus = nouveau programme**. Autrement dit, la majorité des OS offrent un seul appel-sytème pour exécuter un nouveau programme. Unix en possède deux `fork` et `exec`.

<Spoiler>

Sous Unix:
* **PID**: Process IDentifier: Unique dans le système, sert à identifier un processus.
A la création d'un nouveau processus, on utilise une fonction qui permet de duppliquer le processus appelant. On distingue alors les deux processus par leur **PID**. Dans le contexte du nouveau processus le processus père est noté **PPID** (Parent PID).

* **UID** (User IDentifier): ID de l'user qui a lancé un processus.
> Conventionnellement, plus l'UID est bas, plus l'utilisateur a des privilèges. `/etc/passwd` permet de consulter les UID des utilisateurs de la machine.

</Spoiler>

Les processus sont organisés en hiérarchie. **Chaque processus doit être lancé par un autre**. La racine de cette hiérarchie est le **programme initial**

Le **Processus inactif du système** (System idle process) il a le PID 0. C'est le processus que le noyau exécute tant qu'il n'y a pas d'autres processus en cours d'éxecution. C'est lui qui est en charge de lancer le premier processus que le noyau exécute: Le **programme initial**. Généralement appelé **init** et de PID 1 sur les systèmes Unix.

::: tip Tip
Si l'utilisateur indique au noyau le programme initial à exécuter, celui-ci tente alors de le faire avec quatre exécutables, dans l'ordre suivant : `/sbin/init`, `/etc/init` puis `/bin/init`.

Le premier de ces processus qui existe est exécuté en tant que programme initial. 
Si les quatre programmes n'ont pas pu être exécutés, le système s'arrête : **panique du noyau**...
:::

Après son chargement, le programme initial gère le reste du démarrage: Initialisation du système, lanchement du programme de connexion... Il se charge également de lancer les <Def def="Processus qui est constamment en activité et fournit des services au système.">daemons</Def>. 

Les différents états d'un processus sont les suivants:

* **Exécution** (**R**unning)
* **Sommeil** (**S**leeping): Dans un multitâche coopératif, quand il rend la main ou dans un multitâche préemptif, quand il est interrompu au bout d'un quantum de temps.
* **Arrêt** (s**T**opped): Temporairement arrêté par un signal. Il ne s'exécute plus et ne réagira qu'à un signal de redémarrage.
* **Zombie** (**Z**ombie): Le processus s'est terminé mais son père n'as pas encore lu son code de retour.

Sur Unix, un processus peut évoluer dans deux modes différents: Le mode **noyau** et le mode **utilisateur**. Généralement un processus utilisateur entre dans le mode noyau quand il effectue un appel-système.

<Media
    src="https://i.imgur.com/BIQKn6w.png"
    caption="diagramme d'états des processus sous Unix."
    center="true"
/>

<Spoiler>

* `$ ps`: Affiche ses propres processus en cours d'exécution
    * `-a`: processus de tous les utilisateurs
    * `-u`: affichage détaillé
    * `-x`: daemons


            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            sol       2615  0.0  0.0  16420     4 pts/1    Ss+  Oct08   0:00 /bin/zsh
            sol       2785  0.0  0.0  16532     4 pts/2    Ss   Oct08   0:00 /bin/zsh

        > **command** correspond au chemin complet de la commande lancée

</Spoiler>

Pour implémenter les processus, l'os utilise un tableau de <Def def="Oui, oui, C">structures</Def> appelé **table des processus**. Cette dernière comprend une entrée par processus allouée dynamiquement qui correspond au processus associé à ce programme. C'est le **Bloc de controle du processus** (**PCB** Process Control Block) qui contient:

* PID, PPID, UID et <Def def="Group ID">GID</Def> du processus
* état du process
* fichiers ouverts par le processus
* répertoire courant du processus
* le terminal attaché au processus
* les signaux reçus par le processus
* le contexte processeur et mémoire du processus (l'état des registres et des données mémoire du processus)

> Grace à ces informations, un processus bloqué poura redémarrer ulterieurement avec les mêmes caractéristiques.

## Fonction fork
Pour créer un nouveau processus à partir d'un <Def def="dans le code">programme</Def>, on utilise la fonction `fork` (appel-système).
Le processus père et le nouveau processus créé (processus fils) qui possède un nouveau PID. **Les deux ont le même code source**. C'est la valeur retournée par `fork` qui nous permet de savoir si l'on est dans le processus père ou fils. Ceci permet de faire deux choses différentes en fonction de dans quel process on se trouve (via structure de condition `if`, `switch`).

Lors de l'exécution de l'appel système `fork`, le noyau effectue les opérations suivantes:

* Alloue un bloc de controle dans la table des processus
* Copie les informations contenues dans le bloc de controle du père dans celui du fils (sauf les identificateurs PID, PPID, ...)
* Alloue un PID au fils
* Associe au processus fils un segment de texte dans son espece d'adressage. Le segment de données (tas) ne lui seront attribués que lorsque celui-ci tentera de les modifier. Cette technique est nommée **Copie on write** et permet de réduire le temps nécessaire à la création du processus
* L'état du processus est mis à l'état *exécution*

Plus de détails programmatiques concernant le fork 

::: danger Attention
Il est essentiel de comprendre le lien entre les précédentes notions et les notions programmatiques rattachées. C est au coeur du système. Plus d'informations [ici](http://www.commentcamarche.net/faq/10611-que-fait-un-fork). Ainsi qu'en seconde partie de ce [lien](https://openclassrooms.com/fr/courses/1513891-la-programmation-systeme-en-c-sous-unix/1514339-les-processus)
:::

<Spoiler>

#### Exemple d'implémentation
Un programme qui crée un fils. Le père affiche "je suis père" et le fils afiche "Je suis fils":

```C
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <errno.h>
#include <sys/wait.h>
#include <sys/types.h>

int main(int argc, int **argv) {
    pid_t pid_fils;

    do {
        pid_fils = fork();
    } while ((pid_fils == -1) && (errno == EAGAIN));

    if (pid_fils == -1) {
        perror("fork");
    } else if (pid_fils == 0) {
        printf("Je suis le fils\n");
    } else {
        printf("Je suis le père \n");

        if (wait(NULL) == -1) {
            perror("wait: ");
        }
    }
    return EXIT_SUCCESS;
}
```

</Spoiler>

## Thread

Dans la majorité des systèmes d'exploitation, **chaque processus** possède un espace d'adressage et un **thread** de contrôle unique, le **thread principal**. Du point de vue programmation, c'est le **thread principal** qui exécute le main.

En général le système réserve un processus à chaque application sauf quelques  exceptions. Beaucoup de programmes exécutent plusieurs activités en parallèle (pseudo-parallélisme ou vrai parallélisme).

::: tip Info
Le terme "thread" peut se traduire par "fil d'exécution". L'appellation de "processus léger" est également utilisée.
:::

### Avantages

Vis à vis d'un processus les avantages d'un thread sont:

* La facilité et la rapidité de leur création. Tous les threads d'un même processus partagent le même espace d'adressage, et donc toutes les variables.
Évite l'allocation de tous ces espaces lors de la création. 
> Sur de nombreux systèmes la création d'un thread est environs 100 fois plus rapide.

* La superposition de l'exécution des activités dans une même application permet une importante accélération quand au fonctionnement de cette dernière.
* La communication entre threads est plus aisée que celle entre les processus (les processus communiquent via pipes (`|`)).

De plus les threads ont les avantages suivants:

* Optimisation de l'utilisation du/des coeur
* Évite de bloquer sur les in/out
* Tire profit du multi coeur
* Permet le parallélisme (Répartition des calculs)
* Attente sur plusieurs entrées
* Permet l'utilisation de programmes multitâche (ex: Un thread gère l'affichage et un autre écoute sur un socket réseau)



### Inconvénients
Avec les threads, toutes les variables sont partagées (concepte de **mémoire partagée**) et ça pose problème quand:

* **Deux** threads cherchent à modifier **deux** variables en même temps
* Un thread lit une variable alors qu'un autre la modifie

Il est donc nécessaire d'utiliser des mécanismes de synchronisation pour gérer ces situations (voir Mutex plus bas).

De façon générale les incovénients des threads sont les suivants:

* Partage des ressources et leur gestion
* Difficulté à synchroniser les taches
* Le contrôle de l'ordre d'exécution des taches est très important
* Programme moins prédictible...
* ... et reproductible


## Implémentation d'un thread en C

Les fonctions relatives aux threads sont incluses dans le fichier d'en-tête `<pthread.h>` et dans la bibliothèque `libthread.a` (soit `-lpthread` à la compilation et include de `<pthread.h>`):

```shell
gcc -pthread main.c -o main.c
```

Il y a 3 étapes principales à la mise en place d'un thread:
1. Création d'un identifiant
2. Définition de la tâche à éffectuer par le thread
3. Création du thread

### Identifiant

Déclaration d'une variable de type `pthread_t`. Cette variable contiendra l'identifiant du thread qu'on va créér.
> Sur la majorité des systèmes ce type est un `typedef` d'un `unsigned long int`)

```C{4}
#include <pthread.h>

int main(int argc, char **argv) {
    pthread_t thread;
    return EXIT_SUCCESS;
```

### Tâche à éxecuter

Définition d'une fonction qui contient la tâche à éxécuter par le thread. 
Cette fonction doit avoir la signature suivante: `void* maFonction(void *data)` et la ligne qui la cloture doit être de la forme suivante: `pthread_exit(NULL);` dans le cas où rien n'est retourné.

```C{1,3}
void* func(void *arg) {
    printf("Bonjour monde d'un thread");
    pthread_exit(NULL);
}
```
### Création du thread
La créaction du thread se fait via la fonction `pthread_create` qui a la signature suivante:

```c
int pthread_create(
    pthread_t* thread, 
    pthread_attr_t * attr,
    void *(*start_routine) (void*),
    void *arg
)
```

* La fonction renvoie une valeur de type `int` : 0 si la création est un succès, et une autre valeur si il y a erreur
* Le premier argument est un pointeur vers l'identifiant du thread (valeur de type `thread_t`)
* Le second argument désigne les attributs du thread (état joignable (par défaut) ou détaché, et  sa politique d'ordonnancement (usuelle, temps-réel...), ou... NULL)
* Le troisième argument est un pointeur vers la fonction à exécuter par le thread.
* Le quatrième argument est l'argument à passer au thread.

```C{3}
int main(int argc, char *argv[]) {
    pthread_t thread;
    pthread_create(&thread, NULL, func, NULL);
    return EXIT_SUCCESS;
}
```

Il est de bonne pratique de wrapper `pthread_create` dans un test:

```c
if (pthread_create(&thread, NULL, func, NULL) != 0) {
    perror("thread creation error");
    return EXIT_FAILURE;
}
```

Tout ensemble:

<Spoiler>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void* func(void *arg) {
    printf("Dans le thread\n");
    pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
    pthread_t thread;
    printf("Avant la création du thread\n");
    if (pthread_create(&thread, NULL, func, NULL) != 0) {
        perror("thread creation error");
        return EXIT_FAILURE;
    }
    printf("Fin du main\n");
    return EXIT_SUCCESS;
}
```
</Spoiler>

Le résultat de ce code est variable. Dans certains cas il affichera le message du thread, dans d'autres cas il non. C'est normal, cela veut dire que le return du main thread s'exécute avant que le thread n'arrive au `printf`. **Sans qu'on ne lui dise explicitement, le main thread n'attend pas les autres threads pour se terminer.**

### Join

La fonction `pthread_join` suspend l'éxécution du thread appelant jusqu'à ce que le thread cible se termine. Voici la signature de cette fonction:

```c
int pthread_join(pthread_t thread, void** thread_return);
```
 * Le premier paramètre est l'identifiant du thread
 * Le second, un pointeur qui permet de récupérer une éventuelle valeur retournée par `pthread_exit`.

Notre main va donc ressembler à

```c    
int main(int argc, char *argv[]) {
    pthread_t thread;
    printf("Avant la création du thread\n");
    if (pthread_create(&thread, NULL, func, NULL) != 0) {
        perror("thread creation error");
        return EXIT_FAILURE;
    }
    pthread_join(thread, NULL);
    printf("Fin du main\n");
    return EXIT_SUCCESS;
}
```

Et maintenant l'output sera toujours le même:

    Avant la création du thread
    Dans le thread
    Fin du main


### Exemples complets
Le code suivant illustre une utilisation plus avancée avec un argument passés à la fonction qui exécute le thread ainsi qu'une valeur de retour:

<Spoiler>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void* func(void *arg) {
    printf("Dans le thread\n");

    char *msg = (char *) arg;
    printf("%s\n", msg);

    char *return_msg = "Str declaree dans le thread.";

    pthread_exit(return_msg);
}

int main(int argc, char *argv[]) {
    pthread_t t_msg;
    char *msg = "Str declaree dans le main.";

    printf("Avant la création du thread\n");
    if (pthread_create(&t_msg, NULL, func, msg) != 0) {
        perror("t_msg error");
        return EXIT_FAILURE;
    }
    char* return_value;

    pthread_join(t_msg, (void**)&return_value);
    printf("Fin de l'execution du thread, retour dans le main.\n");

    printf("%s\n", return_value);

    printf("Fin du main\n");

    return EXIT_SUCCESS;
}

```
Output:

    Avant la création du thread
    Dans le thread
    Str declaree dans le main.
    Fin de l'execution du thread, retour dans le main.
    Str declaree dans le thread.
    Fin du main
    
</Spoiler>

Le code suivant illustre comment gérer **plusieurs arguments** ainsi que **plusieurs valeurs de retour** sans utiliser de variables globales:

<Spoiler>

```C{16,38}
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

typedef struct data {
    char* msg;
    int value;
} data;

void* func(void *arg) {
    printf("Dans le thread\n");

    data *passed_stuff = (data*) arg;
    printf("%s\t%d\n", passed_stuff->msg, passed_stuff->value);

    data *stuff = malloc(sizeof(data));
    stuff->msg = "Str declaree dans le thread.";
    stuff->value = 5678;

    pthread_exit(stuff);
}

int main(int argc, char *argv[]) {
    pthread_t t_data;

    data stuff;
    stuff.msg = "Str declaree dans le main.";
    stuff.value = 1234;

    printf("Avant la création du thread\n");
    if (pthread_create(&t_data, NULL, func, &stuff) != 0) {
        perror("t_data error");
        return EXIT_FAILURE;
    }

    data *returned_stuff;

    pthread_join(t_data, (void**)&returned_stuff);
    printf("Fin de l'execution du thread, retour dans le main.\n");

    printf("%s\t%d\n", returned_stuff->msg, returned_stuff->value);

    printf("Fin du main\n");
    
    return EXIT_SUCCESS;
}
```
Output:

    Avant la création du thread
    Dans le thread
    Str declaree dans le main.      1234
    Fin de l'execution du thread, retour dans le main.
    Str declaree dans le thread.    5678
    Fin du main

::: danger Attention
L'utilisation du `malloc` en ligne 16 est indispensable. Elle permet de déplacer la struct `data` de la pile au tas ce qui fait que la référence n'est pas perdue à la fin du contexte de `func`. En ligne 18 on récupère donc un pointeur sur un pointeur dont la référence éxiste toujours.
:::

</Spoiler>

## Les mutex
Pour palier aux inconvénients que pourrait causer un accès simultanné aux mêmes ressources nous avons plusieurs outils. 

Le **mutex** est un outil qui permet l'**exclusion mutuelle**. Concrètement en C, un **mutex** est une variable de type `pthread_mutex_t` qui nous sert de **verrou** pour protéger des données. Ce verrou peut prendre deux états:

* **Disponible**
* **Vérouillé**

> Quand un thread a accès à une variable protégée par un mutex, on dit qu'il *tient le mutex*. Il est évident qu'il ne peut y avoir qu'un seul thread qui tient le mutex en même temps.

Il faut que le mutex soit accesible en même temps que la variable et pour tout le fichier (comme les différents threads s'exécutent dans différentes fonctions). Il existe plusieurs solutions pour permettre ça:

* Déclarer le mutex en variable globale
* Déclarer le mutex dans une structure avec la donnée à protéger et passer cette structure en paramêtre à nos threads via la fonction `pthread_create`

Exemple de mutex dans un struct:

```c
typedef struct data {
    int var;
    pthread_mutex_t mutex;
} data;
```

#### Initialiser un mutex
La convention voudrait qu'on initialise un mutex avec la valeur de la constante `PTHREAD_MUTEX_INITIALIZER` déclarée dans `pthread.h`

```c
#include <stdlib.h>
#include <pthread.h>

typedef struct data {
    int var;
    pthread_mutex_t mutex;
} data;

int main(int argc, int** argv) {
    data new_data;
    new_data.mutex = PTHREAD_MUTEX_INITIALIZER;

    return EXIT_SUCCESS;
}
```

#### Vérouiller un mutex
L'étape suivante consiste à établire une **zone critique**, c'est à dire une zone où plusieurs threads ont l'occasion de modifier ou de lire une même variable en même temps. Une fois cela fait, on vérouille le mutex via la fonction suivante:

```c
int pthread_mutex_lock(pthread_mutex_t* mut);
```

#### Déverouiller un mutex
À la fin de la zone critique, il suffit de déverrouiller le mutex.
à l'aide de la fonction suivante:

```c
int pthread_mutex_unlock(pthread_mutex_t* mut);
```

#### Détruire un mutex
Une fois le travail du mutex terminé on peut le détruire avec:

```c
int pthread_mutex_destroy(pthread_mutex_t *mut);
```

### Les conditions
Lorsqu'un thread doit patienter jusqu'à ce qu'un événement survienne dans un autre thread, on emploie une technique appelée "la condition".

Quand un thread est en attente d'une condition, il reste bloqué tant que celle-ci n'est pas réalisée par un autre thread.

Comme avec les mutex, on déclare la condition en variable globale de la façon suivante:

```c
pthread_cond_t nomCondition = PTHREAD_COND_INITIALIZER;
```

Pour attendre une condition, il faut utiliser un mutex:

```c
int pthread_cond_wait(pthread_cond_t* nomCondition, pthread_mutex_t* nomMutex);
```

Pour réveiller un thread en attente d'une condition, on utilise la fonction:

```c
int pthread_cond_signal(pthread_cont_d* nomCondition);
```

### Exemple

Dans ce code on crée un premier thread qui incrémente une variable compteur par un nombre tiré au hasard entre 0 et 10, et l'autre qui affiche un message lorsque la variable compteur dépasse 20.

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

pthread_cond_t condition = PTHREAD_COND_INITIALIZER; // creation de la condition
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER; // creation du mutex

void* threadAlarme(void* arg);
void* threadCompteur(void* arg);

int main(int argc, int** argv) {
    pthread_t monThreadCompteur;
    pthread_t monThreadAlarme;

    pthread_create(&monThreadCompteur, NULL, threadCompteur, (void*)NULL);
    pthread_create(&monThreadAlarme, NULL, threadAlarme, (void*)NULL);

    pthread_join(monThreadCompteur, NULL);
    pthread_join(monThreadAlarme, NULL);

    return 0;
}

void* threadCompteur(void* arg) {
    int compteur = 0;
    int nombre = 0;
    srand(time(NULL));

    while(1) {
        nombre = rand()%10; // randint(0,10)
        compteur += nombre;
        printf("\n%d", compteur);

        if (compteur >= 20) {
            pthread_mutex_lock(&mutex); // on verouille le mutex
            pthread_cond_signal(&condition); // on délivre le signal: condition remplie
            pthread_mutex_unlock(&mutex); // on déverouille le mutex
            compteur = 0; // reset du compteur
        }
        sleep(1);
    }
    pthread_exit(NULL); // fin du thread
}

void* threadAlarme (void* arg) {
    while(1) {
        pthread_mutex_lock(&mutex); // on verouille le mutex
        pthread_cond_wait(&condition, &mutex); // on attend que la condition soit remplie
        printf("\nCOMPTEUR >= 20.");
        pthread_mutex_unlock(&mutex); // on déverouille le mutex
    }
    pthread_exit(NULL); // fin du thread
}
```

output:

    2
    2
    3
    12
    21
    COMPTEUR >= 20.
    9
    9
    16
    17
    22
    COMPTEUR >= 20.
    8
    12
    20
    COMPTEUR >= 20.
    ...

### À retenir

* `pthread_create`
* `pthread_exit`
* `pthread_join`: pour que le main attende que les threads soient finits avant d'exit.
* `PTHREAD_MUTEX_INITIALIZER`:
* `pthread_mutex_lock`
* `pthread_cond_wait`

