---
title: "TP-1:  Librairie POSIX"
date: 2018-10-19
author:  Sol
sidebar: auto
---

https://www.intra.jrosk.ch/cours/programmation_concurente/05_tp1-posix.html

## Meta
* Élèves: Kneuss Michael, Latino Nathan, Rosca Sol
* [Répo git](https://github.com/RoscaS/prog-conc_Labo1)


## Objectifs
* Prise en main des threads POSIX
* Réalisation d'un programme utilisant la librairie Pthread
* Comparaison de resultats selon différentes aproches

## Description
Ce laboratoire nous permet de montrer les problème que l'on peut rencontrer lors d'utilisation de plusieurs threads qui incrémente simultanément une même valeur.

Nous verrons différentes technique pour éviter les erreurs d'utilisation de plusieurs threads.

Nous pourrons aussi comparer les techniques pour savoir qu'elle est la meilleure technique.


##  Programme sans systême de blocage:
Dans cette exemple aucune protection n'est mis en place. Le programme à peu de chance de rendre le numéro voulu.

![](https://i.imgur.com/m6BGs29.png)

On peut voir une incrémentation C en instructions assembleur. Si le processeur reprend un autre thread en plein execution de ces commandes, il se peut que l'incrémentation est une erreur.

![](https://i.imgur.com/L5SlFbd.png)

### Diagramme

<Spoiler>

![](https://i.imgur.com/HGYovoh.png)

</Spoiler>

### Implémentation

<Spoiler>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define DEFAULT_VALUE 1000

typedef struct {
    pthread_t *threads_tab;
    int increments;
    int total_threads;
    int count;
} DataStore;

void *thread(void *arg) {
    DataStore *data = arg;
    for (int i = 0; i < data->increments; i++) {
        data->count++;
    }
    pthread_exit(NULL);
}

DataStore init(int argc, char *argv[]) {
    DataStore data;
    if (argc != 3){
        printf("usage: labo_1 [number of threads] [increments/thread]\n");
        printf("default values (1000, 1000) set\n");
        data.increments = data.total_threads = DEFAULT_VALUE;
    } else {
        data.total_threads = (int) strtol(argv[1], NULL, 10);
        data.increments = (int) strtol(argv[2], NULL, 10);
    }
    data.threads_tab = malloc(sizeof(pthread_t) * data.total_threads);
    data.count = 0;

    return data;
}

void stats(DataStore* data) {
    int expected = data->increments * data->total_threads;
    int delta = expected - data->count;
    double ratio = (double) data->count/expected ;
    printf("\nThreads created:\t\t%d\n", data->total_threads);
    printf("Incrementation/thread:\t%d\n", data->increments);
    printf("Expected count value:\t%d\n", expected);
    printf("Actual count value:\t\t%d\t", data->count);
    delta > 0 ? printf("(missing %d)\n", delta)
              : printf("(excess: %d)\n", delta);
    printf("Ratio expected/count:\t%.3f\n", ratio);
}

int main(int argc, char *argv[]) {

    DataStore data = init(argc, argv);

    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_create(&data.threads_tab[i], NULL, thread, &data) != 0) {
            perror("pthread_create error");
            return EXIT_FAILURE;
        }
    }
    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_join(data.threads_tab[i], NULL) != 0) {
            perror("pthread_join error");
            return EXIT_FAILURE;
        }
    }
    stats(&data);
    return EXIT_SUCCESS;
}
```

</Spoiler>

### Output

![](https://i.imgur.com/Y27Qgyv.png)


## Programme avec système de blocage (simple)
Nous allons voir un verrouillage de thread. Il permet de bloquer le code des autres threads pendant le moment critique du thread. Une boucle while doit bloquer les autres threads pendant la modification de la variable par un thread. Après la modification de la variable, le thread libère la modification de la variable. Cette technique n'est pas optimale et le problème de changement de contexte n'est pas correctement géré.

### Diagramme
<Spoiler>

![](https://i.imgur.com/GQcWCYD.png)

</Spoiler>


### Implémentation

<Spoiler>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define DEFAULT_VALUE 1000

typedef struct {
    pthread_t *threads_tab;
    int increments;
    int total_threads;
    int count;
    int verrou;
} DataStore;

void *thread(void *arg) {
    DataStore *data = arg;
    for (int i = 0; i < data->increments; i++) {
        while(data->verrou != 0){}
        data->verrou = 1;
        data->count++;
        data->verrou = 0;
    }
    pthread_exit(NULL);
}

DataStore init(int argc, char *argv[]) {
    DataStore data;
    if (argc != 3){
        printf("usage: labo_1 [number of threads] [increments/thread]\n");
        printf("default values (1000, 1000) set\n");
        data.increments = data.total_threads = DEFAULT_VALUE;
    } else {
        data.total_threads = (int) strtol(argv[1], NULL, 10);
        data.increments = (int) strtol(argv[2], NULL, 10);
    }
    data.threads_tab = malloc(sizeof(pthread_t) * data.total_threads);
    data.count = 0;
    data.verrou = 0;

    return data;
}

void stats(DataStore* data) {
    int expected = data->increments * data->total_threads;
    int delta = expected - data->count;
    double ratio = (double) data->count / expected;
    printf("\nThreads created:\t\t%d\n", data->total_threads);
    printf("Incrementation/thread:\t%d\n", data->increments);
    printf("Expected count value:\t%d\n", expected);
    printf("Actual count value:\t\t%d\t", data->count);
    delta > 0 ? printf("(missing %d)\n", delta)
              : printf("(excess: %d)\n", delta);
    printf("Ratio expected/count:\t%.3f\n", ratio);
}

int main(int argc, char *argv[]) {

    DataStore data = init(argc, argv);

    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_create(&data.threads_tab[i], NULL, thread, &data) != 0) {
            perror("pthread_create error");
            return EXIT_FAILURE;
        }
    }
    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_join(data.threads_tab[i], NULL) != 0) {
            perror("pthread_join error");
            return EXIT_FAILURE;
        }
    }
    stats(&data);
    return EXIT_SUCCESS;
}
```

</Spoiler>



### Output
![](https://i.imgur.com/tCi7T2O.png)


## Programme avec système de blocage (shed_yield)
`shed_yield` (sched.h) permet de modifier la file d'attente des thread. Au moment de l'appel de cette fonction, le thread se met à la fin de la file d'attente et permet de gérer les priorités des threads.

Cette methode donne les même résultat que celui du verrouillage.

### Diagramme

<Spoiler>

![](https://i.imgur.com/aLc6t2d.png)

</Spoiler>

### Implementation
<Spoiler>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <sched.h>

#define DEFAULT_VALUE 1000

typedef struct {
    pthread_t *threads_tab;
    int increments;
    int total_threads;
    int count;
} DataStore;

void *thread(void *arg) {
    sched_yield();
    DataStore *data = arg;
    for (int i = 0; i < data->increments; i++) {
        data->count++;
    }
    pthread_exit(NULL);
}

DataStore init(int argc, char *argv[]) {
    DataStore data;
    if (argc != 3){
        printf("usage: labo_1 [number of threads] [increments/thread]\n");
        printf("default values (1000, 1000) set\n");
        data.increments = data.total_threads = DEFAULT_VALUE;
    } else {
        data.total_threads = (int) strtol(argv[1], NULL, 10);
        data.increments = (int) strtol(argv[2], NULL, 10);
    }
    data.threads_tab = malloc(sizeof(pthread_t) * data.total_threads);
    data.count = 0;

    return data;
}

void stats(DataStore* data) {
    int expected = data->increments * data->total_threads;
    int delta = expected - data->count;
    double ratio = (double) data->count / expected;
    printf("\nThreads created:\t\t%d\n", data->total_threads);
    printf("Incrementation/thread:\t%d\n", data->increments);
    printf("Expected count value:\t%d\n", expected);
    printf("Actual count value:\t\t%d\t", data->count);
    delta > 0 ? printf("(missing %d)\n", delta)
              : printf("(excess: %d)\n", delta);
    printf("Ratio expected/count:\t%.3f\n", ratio);
}

int main(int argc, char *argv[]) {

    DataStore data = init(argc, argv);

    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_create(&data.threads_tab[i], NULL, thread, &data) != 0) {
            perror("pthread_create error");
            return EXIT_FAILURE;
        }
    }
    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_join(data.threads_tab[i], NULL) != 0) {
            perror("pthread_join error");
            return EXIT_FAILURE;
        }
    }
    stats(&data);
    return EXIT_SUCCESS;
}
```


</Spoiler>


### Output

![](https://i.imgur.com/USBNXXl.png)


## Programme avec système de blocage (Mutex)

Mutex(Mutual Exclusion), est un système de verrou donnant une garantie sur la viabilité des données manipulées par les threads. En effet, il arrive très souvent que plusieurs threads doivent accéder en lecture et/ou en écriture aux mêmes variables. Si un thread possède le verrou, seulement celui-ci peut lire et écrire sur les variables étant dans la portion de code protégée. Lorsque le thread a terminé, il libère le verrou et un autre thread peut le prendre à son tour.

La technique mutex est celle qui a donnée le meilleur résultat.

### Diagramme

<Spoiler>

![](https://i.imgur.com/DZpesf1.png)

</Spoiler>


### Implémentation

<Spoiler>

```c
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define DEFAULT_VALUE 1000

typedef struct {
    pthread_t *threads_tab;
    int increments;
    int total_threads;
    int count;
    pthread_mutex_t mutex_count;
} DataStore;


void *thread(void *arg) {
    DataStore *data = arg;
    for (int i = 0; i < data->increments; i++) {
        pthread_mutex_lock(&data->mutex_count);
        data->count++;
        pthread_mutex_unlock(&data->mutex_count);
    }
    pthread_exit(NULL);
}


DataStore init(int argc, char *argv[]) {
    DataStore data;
    if (argc != 3){
        printf("usage: labo_1 [number of threads] [increments/thread]\n");
        printf("default values (1000, 1000) set\n");
        data.increments = data.total_threads = DEFAULT_VALUE;
    } else {
        data.total_threads = (int) strtol(argv[1], NULL, 10);
        data.increments = (int) strtol(argv[2], NULL, 10);
    }
    pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER;
    data.threads_tab = malloc(sizeof(pthread_t) * data.total_threads);
    data.mutex_count = lock;
    data.count = 0;

    return data;
}


void stats(DataStore* data) {
    int expected = data->increments * data->total_threads;
    int delta = expected - data->count;
    double ratio = (double) data->count/expected ;
    printf("\nThreads created:\t\t%d\n", data->total_threads);
    printf("Incrementation/thread:\t%d\n", data->increments);
    printf("Expected count value:\t%d\n", expected);
    printf("Actual count value:\t\t%d\t", data->count);
    delta > 0 ? printf("(missing %d)\n", delta)
              : printf("(excess: %d)\n", delta);
    printf("Ratio expected/count:\t%.3f\n", ratio);
}


int main(int argc, char *argv[]) {

    DataStore data = init(argc, argv);

    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_create(&data.threads_tab[i], NULL, thread, &data) != 0) {
            perror("pthread_create error");
            return EXIT_FAILURE;
        }
    }
    for (int i = 0; i < data.total_threads; i++) {
        if (pthread_join(data.threads_tab[i], NULL) != 0) {
            perror("pthread_join error");
            return EXIT_FAILURE;
        }
    }
    stats(&data);
    return EXIT_SUCCESS;
}
```

</Spoiler>

### Output

![](https://i.imgur.com/64kpV0w.png)


## conclusion

Mutex est la meilleur méthode pour cette utilisation des threads. Il offre un ratio de 1. Les autres techniques sont beaucoup plus hasardeux et n'offre pas une réussite à 100%.