---
title: "TP-1:  Librairie POSIX"
date: 2018-19-10
author:  Sol
sidebar: auto
---

## Meta
* Élèves: Kneuss Michael, Latino Nathan, Rosca Sol
* [Répo git](https://github.com/RoscaS/prog-conc_Labo1)


## Objectifs
* Prise en main des threads POSIX
* Réalisation d'un programme utilisant la librairie Pthread
* Comparaison de resultats selon différentes aproches

##  Programme sans attente active:

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
    double ratio = (double) expected / data->count;
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


## Programme avec attente active (Mutex)

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
    double ratio = (double) expected / data->count;
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


