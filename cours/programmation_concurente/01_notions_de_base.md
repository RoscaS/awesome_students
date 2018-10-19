---
title: Introduction aux threads
date: 2018-09-01
author:  Sol
sidebar: auto
---

## Source

* Cours de madame Aïcha Rizzotti (He-Arc Neuchâtel)
* [Openclassrooms](https://openclassrooms.com/)
* [developpez.com](https://franckh.developpez.com/tutoriels/posix/pthreads/)
* [Wikipedia](https://en.wikipedia.org)

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

### Processus

Sur la majorité des OS à l'exception des systèmes Unix, **processus = nouveau programme**. Autrement dit, la majorité des OS offrent un seul appel sytème pour exécuter un nouveau programme à l'exception des systèmes Unix qui en possède deux `fork` et `exec`.

<Spoiler>

Sous Unix:
* **PID**: Process IDentifier: Unique dans le système, sert à identifier un processus.
A la création d'un nouveau processus, on utilise une fonction qui permet de duppliquer le processus appelant. On distingue alors les deux processus par leur **PID**. Dans le contexte du nouveau processus le processus père est noté **PPID** (Parent PID).

* **UID** (User IDentifier): ID de l'user qui a lancé un processus.
> Conventionnellement, plus l'UID est bas, plus l'utilisateur a des privilèges. `/etc/passwd` permet de consulter les UID des utilisateurs de la machine.

</Spoiler>

Les processus sont organisés en hiérarchie. **Chaque processus doit être lancé par un autre**. La racine de cette hiérarchie est le **programme initial**. Plusieurs processus peuvent s'exécuter en parallèle et sont tous gérés par l'os. 

Un processus possède:

* Un espace d'adressage
* Un code à éxecuter (chargé dans le segment texte)
* Un contexte d'exécution
* Une priorité
* Un identifiant

<Spoiler>

Le **Processus inactif du système** (System idle process) il a le PID 0. C'est le processus que le noyau exécute tant qu'il n'y a pas d'autres processus en cours d'éxecution. C'est lui qui est en charge de lancer le premier processus que le noyau exécute: Le **programme initial**. Généralement appelé **init** et de PID 1 sur les systèmes Unix.

::: tip Tip
Si l'utilisateur indique au noyau le programme initial à exécuter, celui-ci tente alors de le faire avec quatre exécutables, dans l'ordre suivant : `/sbin/init`, `/etc/init` puis `/bin/init`.

Le premier de ces processus qui existe est exécuté en tant que programme initial. 
Si les quatre programmes n'ont pas pu être exécutés, le système s'arrête : **panique du noyau**...
:::

Après son chargement, le programme initial gère le reste du démarrage: Initialisation du système, lanchement du programme de connexion... Il se charge également de lancer les <Def def="Processus qui est constamment en activité et fournit des services au système.">daemons</Def>. 

</Spoiler>

### Cycle de vie d'un processus

1. **Prêt**: Le processus est prêt à être exécuté. Cas d'un processus nouvellement créé, débloqué ou, d'un ou plusieurs processus occupant le ou les coeurs disponibles.
2. **En exécution** (**R**unning): Le processus est en cours d'exécution sur un coeur. Plusieurs processus peuvent être en exécution dans le cas d'une machine multicoeur.
3. **Bloqué** (**S**leeping): Le processus est en attente sur une synchronisation ou sur la fin d'une opération d'entrée/sortie.
4. **Zombie** (**Z**ombie): Le processus a terminé son exécution, mais son processus parent doit encore récupérer sa valeur de terminaison.
5. **Terminé (s**T**opped)**: Le processus a terminé son exécution ou a été annulé. Les ressources du processus sont libérées et le processus disparaît.

Sur Unix, un processus peut évoluer dans deux modes différents: Le mode **noyau** et le mode **utilisateur**. Généralement un processus utilisateur entre dans le mode noyau quand il effectue un appel-système.

<Media
    src="https://i.imgur.com/BIQKn6w.png"
    caption="diagramme d'états des processus sous Unix."
    center="true"
/>


* `$ ps`: Affiche ses propres processus en cours d'exécution
    * `-a`: processus de tous les utilisateurs
    * `-u`: affichage détaillé
    * `-x`: daemons


            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            sol       2615  0.0  0.0  16420     4 pts/1    Ss+  Oct08   0:00 /bin/zsh
            sol       2785  0.0  0.0  16532     4 pts/2    Ss   Oct08   0:00 /bin/zsh

        > **command** correspond au chemin complet de la commande lancée


<Spoiler>
#### Implémentation des processus

Pour implémenter les processus, l'os utilise un tableau de <Def def="Oui, oui, C">structures</Def> appelé **table des processus**. Cette dernière comprend une entrée par processus allouée dynamiquement qui correspond au processus associé à ce programme. C'est le **Bloc de controle du processus** (**PCB** Process Control Block) qui contient:

* PID, PPID, UID et <Def def="Group ID">GID</Def> du processus
* état du process
* fichiers ouverts par le processus
* répertoire courant du processus
* le terminal attaché au processus
* les signaux reçus par le processus
* le contexte processeur et mémoire du processus (l'état des registres et des données mémoire du processus)

> Grace à ces informations, un processus bloqué poura redémarrer ulterieurement avec les mêmes caractéristiques.

#### Fonction fork
Pour créer un nouveau processus à partir d'un <Def def="dans le code">programme</Def>, on utilise la fonction `fork` (appel-système).
Le processus père et le nouveau processus créé (processus fils) qui possède un nouveau PID. **Les deux ont le même code source**. C'est la valeur retournée par `fork` qui nous permet de savoir si l'on est dans le processus père ou fils. Ceci permet de faire deux choses différentes en fonction de dans quel process on se trouve (via structure de condition `if`, `switch`).

Lors de l'exécution de l'appel système `fork`, le noyau effectue les opérations suivantes:

* Alloue un bloc de controle dans la table des processus
* Copie les informations contenues dans le bloc de controle du père dans celui du fils (sauf les identificateurs PID, PPID, ...)
* Alloue un PID au fils
* Associe au processus fils un segment de texte dans son espece d'adressage. Le segment de données (tas) ne lui seront attribués que lorsque celui-ci tentera de les modifier. Cette technique est nommée **Copie on write** et permet de réduire le temps nécessaire à la création du processus
* L'état du processus est mis à l'état *exécution*

::: danger Attention
Il est essentiel de comprendre le lien entre les précédentes notions et les notions programmatiques rattachées. C est au coeur du système. Plus d'informations [ici](http://www.commentcamarche.net/faq/10611-que-fait-un-fork). Ainsi qu'en seconde partie de ce [lien](https://openclassrooms.com/fr/courses/1513891-la-programmation-systeme-en-c-sous-unix/1514339-les-processus)
:::


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

Sur la majorité des OS, **chaque processus** possède un espace d'adressage et un **thread** de contrôle unique, le **thread principal**. D'un point de vue programmatique, c'est le **thread principal** qui exécute le `main`, on parle alors de **main thread**.

En général le système réserve **un processus à chaque application**. Beaucoup de programmes exécutent plusieurs activités en **parallèle** (pseudo-parallélisme ou vrai parallélisme) et une ramification de threads apparait. Programmatiquement, **le code qu'éxécute un thread se trouve dans une fonction**. Un processus contient donc généralement plusieurs threads.

* Un thread est une unité d’exécution
* **Les threads s'exécutent en parallèle**
    * Monocoeur: préamptif 
    * Multicoeur: execution parallèle.
        * L'ordonnanceur est responsable de l'ordre d'exécution.

::: tip Info
Le terme "thread" peut se traduire par "fil d'exécution". L'appellation de "processus léger" (lightweigt process) est également utilisée.
:::

### Différences vis à vis d'un processus
* Les threads d'un même processus se partagent l'espace d'adressage du processus
* Ils sont <Def def="rythmés par l'ordonnanceur">ordonnancés</Def>
* Ils possèdent
  * Leur propre pile
  * Leur propre contexte d'exécution (**IP** (Instruction Pointer) + registres)
  
![Image](https://i.imgur.com/ZEWury7.png)

### Avantages

Vis à vis d'un processus les avantages d'un thread sont:

* La facilité et la rapidité de leur création. Tous les threads d'un même processus partagent le même espace d'adressage, et donc toutes les variables.
Évite l'allocation de tous ces espaces lors de la création. 
> Sur de nombreux systèmes la création d'un thread est environs 100 fois plus rapide.

* La superposition de l'exécution des activités dans une même application permet une importante accélération quand au fonctionnement de cette dernière.
* La communication entre threads est plus aisée que celle entre les processus (Sur les systèmes Unix les processus communiquent via pipes (`|`)).

De façon générale les threads ont les avantages suivants:

* Optimisation de l'utilisation du/des coeur
* Évite de bloquer sur les in/out
* Tire profit du multi coeur
* Permet le parallélisme (Répartition des calculs)
* Attente sur plusieurs entrées
* Permet l'utilisation de programmes multitâche (ex: Un thread gère l'affichage et un autre écoute sur un socket réseau)


### Inconvénients
Comme l'espace d'adressage d'un même processus est partagé entre plusieurs threads, des problèmes apparaissent quand:

* **Deux** threads cherchent à modifier **deux** variables en même temps
* Un thread lit une variable alors qu'un autre la modifie

Il sera donc nécessaire d'utiliser des mécanismes de synchronisation pour gérer ces situations.

De façon générale les incovénients des threads sont les suivants:

* Partage des ressources et leur gestion
* Difficulté à synchroniser les taches
* Le contrôle de l'ordre d'exécution des taches est très important
* Programme moins prédictible...
* ... et reproductible
* Cohérence des données en cas de mauvaise terminaison d'un thread

### Design patterns

Comment décomposer un programme en plusieurs threads?

#### Boss & workers
C'est une délégation des taches
* Un thread principal crée les autres threads et leur assigne une tache
* Il peut (mais ne doit pas) attendre jusqu'à ce que la tache soit complétée

<Media
  src="https://i.imgur.com/gDzSllg.png"
  center="true"
/>

Deux approches possibles:
1. Le boss crée pour chaque requête un nouveau thread
2. Le boss crée un pool de threads
   
#### Peer to peer
* Tous les threads ont un status de travail égale
* Un thread pair crée tous les threads nécessaires à une tache mais il ne délègue pas de responsabilités
* Les threads pair peuvent traiter des requêtes d'un simple *input stream* partagé par tous les threads ou avoir chacun leur propre *input stream*

<Media
  src="https://i.imgur.com/nup6mxC.png"
  center="true"
/>

#### Pipeline
* Approche semblable à une ligne de production pour traiter des données par étapes (**stages**)
* Chaque stage est un thread qui fait du travail sur une unité d'entrée. Lorsque l'unité d'entrée passe par tous les stages, le traitement est complété.

<Media
  src="https://i.imgur.com/RNwX1qG.png"
  center="true"
/>

#### Changement de contexte
L'opération de changement de contexte d'un processus ou d'un thread comporte les séquences suivantes:

1. Mise en attente du processus actif dans la liste des processus bloqués ou prêts
2. Sauvegarde de son contexte d'exécution
3. Recherche du processus éligible ayant la plus haute priorité
4. Restauration du contexte d'exécution du processus élu et restauration de la valeur de ses registres lorsqu'il s'exécutait précédemment
5. Activation du processus élu

**Tout se passe comme si le processus préalablement interrompu n'avait pas cessé de s'exécuter.**

## Threads en C

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

* La fonction `pthread_join` suspend l'éxécution du thread appelant jusqu'à ce que le thread cible se termine. 
* Il peut être vu comme une forme de communication entre threads.
* Le thread terminé peut retourner une valeur au thread ayant effectué la jointure


<Media
    src="https://i.imgur.com/nV7fVjS.png"
    center="true"
    width=450
/>



Voici la signature de cette fonction:

```c
int pthread_join(pthread_t thread, void** thread_return);
```
 * Le premier paramètre est l'identifiant du thread
 * Le second, un pointeur qui permet de récupérer une éventuelle valeur retournée par `pthread_exit`.

Il est également de bonne pratique que de wrapper le `pthread_join` dans un test:

```c    
int main(int argc, char *argv[]) {
    pthread_t thread;
    printf("Avant la création du thread\n");

    if (pthread_create(&thread, NULL, func, NULL) != 0) {
        perror("pthread_create error");
        return EXIT_FAILURE;
    }

    if (pthread_join(thread, NULL) != 0) {
        perror("pthread_join error");
        return EXIT_FAILURE;
    }

    printf("Fin du main\n");
    return EXIT_SUCCESS;
}
```

Et maintenant l'output sera toujours le même:

    Avant la création du thread
    Dans le thread
    Fin du main


### Terminaison d'un thread
Il est important de correctement terminer un thread pour ne pas laisser le système dans un état incohérent. 
Il existe deux façon de terminer un thread:

#### Auto terminaison
```c
void pthread_exit(void *value);
```
* Cette fonction met fin au thread et retourne `value` au thread appelant (peut être le main biensur). Le thread appelant récupère la valeur de retour via un join (`pthread_join`)
* Il est également possible d'utiliser le mot clé `return value` de la même façon
* Lorsque `pthread_exit` est appelé depuis le thread principal (main), ce dernier **se bloque et attend que tous ses threads enfants soient terminés avant de se terminer** lui-même.
* La fonction `exit(int status)` permet de terminer le processus, ce qui a pour effet de terminer instantanément tous les threads du processus. **Quel que soit le thread ayant appelé `exit`**

#### Annulation
```c
int pthread_cancel(pthread_t thread);
```
* Cette fonction permet de terminer un thread depuis un autre thread
* `thread` est le thread à terminer
* **Le seul moyen pour savoir si un thread a été annulé est de faire un `pthread_join` puis d'inspecter la valeur de retour du thread. En cas d'annulation cette dernière est alors `PTHREAD_CANCELED`**
* Si la fonction du thread s'est terminée avant l'appel à `pthread_cancel`, alors la valeur `ESRCH` est retournée (thread non trouvé); la constant `ESRCH` est définie dans le header `errno.h`
* La fonction renvoie `0` en cas de succès

```c
#include <errno.h>

void* func(void* arg) {
    int static return_code = 77;
    sleep(3);
    printf("thread finished\n");
    pthread_exit(&return_code);
}

int main(int argc, int** argv) {
    pthread_t th;
    pthread_create(&th, NULL, func, NULL);
    sleep(1);

    int code = pthread_cancel(th);
    if (code == ESRCH) printf("cancel: thread already finished!\n");
    else if (code != 0) perror("cancel: pthread_cancel FAILED");

    int *v;
    pthread_join(th, (void **)&v);

    if (v == PTHREAD_CANCELED) printf("thread canceled\n");
    else printf("thread return code %d\n", *v);

    return EXIT_SUCCESS;
}
```


#### Politique d'annulation
```c
int pthread_setcancelstate(int state, int *oldstate);
```
Cette fonction permet à un thread de définir sa politique d'annulation
* `state` peut prendre les valeurs suivantes:
    * `PTHREAD_CANCEL_ENABLE`: Autorise l'annulation (par défaut)
    * `PTHREAD_CANCEL_DISABLE`: Interdit l'annulation
* `oldstate` contient ensuite l'ancienne politique d'annulation
* Renvoie 0 en cas de succès

Si Le thread autorise l'annulation, il peut alors définir son type d'annulation avec:
```c
int pthread_setcanceltype(int type, int *oldtype);
```

* `type` peut prendre les valeurs suivantes:
    * `PTHREAD_CANCEL_DEFERRED`: Autorise l'annulation en des points précis (par défaut)
    * `PTHREAD_CANCEL_ASYNCHRONOUS`: Autorise l'annulation n'importe quand
* `oldtype` contient ensuite l'ancien type d'annulation
* Renvoie 0 en cas de succès

Un thread peut placer ses points d'annulation avec:
```c
void pthread_testcancel(void);
```

* L'annulation est donc permise en ces points

::: danger Attention !
Certains appels systèmes sont des points d'annulation, en particulier les fonctions d'entrée/sortie car potentiellement bloquantes. Ex: `fopen`, `write`, `fprintf`, ...
:::


```c
#include <errno.h>

int counter = 0;

void *func(void *arg) {
    int old_state, old_type;
    pthread_setcancelstate(PTHREAD_CANCEL_ENABLE, &old_state);
    pthread_setcanceltype(PTHREAD_CANCEL_DEFERRED, &old_type);
    while (counter < 100000) {
        counter++;
        // if (counter == 50000) {
        pthread_testcancel();
        // }
    }
}

int main(int argc, char *argv[]) {
    pthread_t th;
    pthread_create(&th, NULL, func, NULL);
    pthread_cancel(th);
    pthread_join(th, NULL);
    printf("Counter: %d\n", counter);
    return EXIT_SUCCESS;
}
```

### Auto identification
```c
pthread_t pthread_self();
```
Cette fonction appelée depuis la fonction associée à un thread permet d'identier le thread.

* Même valeur d'identifiant que celle retournée en premier argument de la fonction `pthread_create`
* Chaque thread dispose d'un ID unique
* Sur linux (x64) l'ID est un `unsigned long int`
* Il n'est pas garanti que l'identifiant d'un thread soit un entier! Le type est propre à l'implémentation

### Comparaison d'identification
```c
int pthread_equal(pthread_t t1, pthread_t t2);
```
Cette fonction permet de comparer deux identifiants.

* Si `t1` et `t2` sont égaux, alors la fonction renvoie une valeur différente de zéro
* Il est nécessaire d'utiliser cette fonction pour comparer le identifiants, car **rien ne garenti que les types pthread_t soient des valeurs comparable avec l'opérateur d'égalité `=`.**

### Rendre le processeur
```c
#include <sched.h>
int scheld_yield();
```

Cette fonction permet de forcer le thread appelant à relacher le processeur

* Après l'appel à cette fonction, le thread est placé à la fin de la file d'attente des threads en attente du processeur
* Le thread suivant en attente du processeur est alors activité
* Renvoie zéro en cas de succès

### Fonctions async-cancel-safe

Une fonction est dite _async-cancel-safe_ si elle peut être annulée de manière asynchrone (de façon concurrente donc). Si une fonction n'est pas considérée _async-cancel-safe_ peut potentiellement **engendrer un crash du programme!** Parmi toutes les fonctions de la librairie POSIX Threads, seules les 3 fonctions suivantes sont garanties d'être _async-cancel-safe_:
* `pthread_cancel`
* `pthread_setcancelstate`
* `pthread_setcanceltype`


### Exemples complets
Le code suivant illustre une utilisation plus avancée avec un argument passés à la fonction qui exécute le thread ainsi qu'une valeur de retour:

<Spoiler>

```C{13,31}
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void* func(void* arg) {
    printf("Dans le thread\n");

    // Traitement argument 
    char* msg = (char *) arg;
    printf("%s\n", msg);

    // Traitement de la valeur de retour
    char* return_msg = (char *) malloc(sizeof(char));
    return_msg = "Str declaree dans le thread.";

    pthread_exit(return_msg);
}

int main(int argc, char* argv[]) {
    pthread_t t_msg; 
    char* msg = "Str declaree dans le main.";

    printf("Avant la création du thread\n");
    if (pthread_create(&t_msg, NULL, func, msg) != 0) {
        perror("pthread_create error");
        return EXIT_FAILURE;
    }

    char* return_value;

    if (pthread_join(t_msg, (void**)&return_value) != 0) {
        perror("pthread_join error");
        return EXIT_FAILURE;
    }

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
    
::: danger Attention
Noter l'utilisation du `malloc` en ligne 13 . Elle permet de déplacer la le tableau de char de la pile au tas ce qui fait que la référence n'est pas perdue à la fin du contexte de `func`. En ligne 31 on récupère donc un pointeur sur un pointeur dont la référence éxiste toujours.
:::

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

De la même façon que dans le code précédent, notez l'utilisation du `malloc` en ligne 16 ainsi que la gestion de la valeur de retour en ligne 38.

</Spoiler>






## Les mutex TEMPORAIRE EN ATTENTE D UNE REECRITURE
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


