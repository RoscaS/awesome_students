---
title: "TP-2: Prime-number"
date: 2018-10-31
author:  "Latino Nathan, Kneuss Michael, Rosca Sol"
sidebar: auto
---


## Meta
* Élèves: Kneuss Michael, Latino Nathan, Rosca Sol


## Objectifs :
* Vérifier si un nombre est premier de manière sequentielle et multi-threadée.
* Comparer les performances (temps d'execution) et trouver le nombre de thread optimale pour l'execution.

<Container type="info">

Ces comparaisons se font sur un processeur Intel® Core™ i7-4710HQ (3.50 GHz, 4 coeurs, 8 threads), OS : Ubuntu 18.04.1 LTS

</Container>

## Sequentielle

Une première implémentation séquentielle nous donne les valeurs suivantes:


| Value             | Temps (sec) | Est premier |
|-------------------|-------------|-------------|
| 99194853094755497 | 3.053615    | Oui         |
| 18014398241046527 | 1.300335    | Oui         |
| 70368760954879    | 0.083977    | Oui         |
| 4398050705407     | 0.021344    | Oui         |
| 68720001023       | 0.002695    | Oui         |
| 2971215073        | 0.000657    | Oui         |
| 433494437         | 0.000234    | Oui         |
| 433494438         | 0.000013    | Non         |


Quand un nombre n'est pas premier l'execution s'arrête immédiatement. Plus la valeur est grande plus le temps d'execution est long.

### Implémentation

<Spoiler>

```cpp
#define DEFAULT_VALUE 433494438

typedef struct {
    unsigned long int value;
    bool nbrPrime;
    float time;
    clock_t start;
} DataStore;

DataStore init(int argc, char *argv[]) {
    DataStore data;
    if (argc != 2){
        printf("usage: labo_2 [nombre premier]\n");
        printf("default values (99194853094755497) set\n");
        data.value = DEFAULT_VALUE;
    } else {
        data.value = strtol(argv[1], NULL, 10);
    }
    data.nbrPrime = true;
    return data;
}


int main(int argc, char *argv[]) {

    DataStore data = init(argc, argv);
    data.start = clock();
    for (int i = 2; i <= sqrt(data.value); i++) {
        if(data.value % i == 0){
            data.nbrPrime = false;
            break;
        }
    }
    data.time =((float)(clock()-data.start))/CLOCKS_PER_SEC;

    data.nbrPrime == true ? printf("%lu est un nombre premier \ntemps d'execution : %fs", data.value, data.time)
                          :  printf("%lu n'est pas un nombre premier \ntemps d'execution : %fs", data.value, data.time);
    return EXIT_SUCCESS;
}
```

</Spoiler>



## Multi-thread

Cette seconde implémentation est une version multi-thread du même code. 
Pour la plus petite valeur ainsi que la plus grande valeur donnée dans le cahier des charge, par nombre de threads (de 1 à 20) le temps enregistré correspond à la moyenne de 10 execution du programme.

### Première valeur (grande)

**Value = 99 194 853 094 755 497**

<br>

| Threads | Temps (s) | Threads | Temps (s) |
|---------|-----------|---------|-----------|
| 1       | 2.661176  | 11      | 0.486498  |
| 2       | 1.364409  | 12      | 0.538177  |
| 3       | 0.930129  | 13      | 0.567060  |
| 4       | 0.706613  | 14      | 0.480755  |
| 5       | 0.669448  | 15      | 0.510905  |
| 6       | 0.572811  | 16      | 0.506464  |
| 7       | 0.497749  | 17      | 0.477538  |
| 8       | 0.467328  | 18      | 0.513075  |
| 9       | 0.647309  | 19      | 0.458260  |
| 10      | 0.529038  | 20      | 0.454990  |

<br>
<br>

<Charts :x="x1" :y="y1" :height="200" label="y = time(threads)"/>


<br>

### Seconde valeur (petite)

**Value = 433 494 437**


| Threads | Temps (s) | Threads | Temps (s) |
|---------|-----------|---------|-----------|
| 1       | 0.000305  | 11      | 0.000224  |
| 2       | 0.000171  | 12      | 0.000252  |
| 3       | 0.000109  | 13      | 0.000240  |
| 4       | 0.000100  | 14      | 0.000220  |
| 5       | 0.000094  | 15      | 0.000241  |
| 6       | 0.000111  | 16      | 0.000244  |
| 7       | 0.000216  | 17      | 0.000270  |
| 8       | 0.001229  | 18      | 0.000266  |
| 9       | 0.000170  | 19      | 0.000270  |
| 10      | 0.000205  | 20      | 0.000286  |

<br>
<br>


<Charts :x="x2" :y="y2" :height="200" label="y = time(threads)"/>


<br>

On peut voir dans la première comparaison l'utilisation des huit threads du processeur est optimale. Plus de thread augmente le temps d'execution et permet en efficacité.

Pour le plus petit nombre premier de la liste, cinq threads sont suffisants pour être optimals.

On peut voir que moins il y a de valeur à tester, moins il y a besoin de thread pour avoir une execution performante.

Une variable global permet d'arrêter tous les thread si la valeur n est divisible par un nombre qui se situe entre 2 et racine de n.

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <stdbool.h>
#include <math.h>

#include <sys/time.h>

typedef unsigned long int uli;

static bool isPrime;

typedef struct {
    pthread_t id;
    uli start;
    uli end;
    uli max;
    uli value;
} T_data;


void *thread(void *arg) {
    T_data *t = arg;
    for (uli i = t->start; (i < t->end); i++) {
        if (t->value % i == 0 || isPrime == false) {
            isPrime = false;
            break;
        }
    }
    pthread_exit(NULL);
}


int main(int argc, char *argv[]) {

    uli value;
    int threads_count;

    if (argc < 3) {
        printf("usage: main <value> <threads number>");
        return EXIT_FAILURE;
    } else {
        value = (uli) strtol(argv[1], NULL, 10);
        threads_count = (int) strtol(argv[2], NULL, 10);
    }

    struct timeval tv1, tv2;
    /* stuff to do! */

    isPrime = true;
    T_data *t_tab = malloc(sizeof(T_data) * threads_count);
    uli length = (uli) ceil(sqrt(value));
    uli range = (uli) ceil(length / threads_count) + 1;

    printf("sqrt(value): %lu\n", length);
    printf("threads: %d\n", threads_count);
    printf("ranges: %lu\n", range);

    for (int i = 0; i < threads_count; i++) {
        pthread_t id;
        T_data t;
        t.id = id;
        t.start = (uli) (i * range < 2 ? 2 : i * range);
        t.end = (uli) ((i + 1) * range);
        t.max = length;
        t.value = value;

        t_tab[i] = t;
    }

    // Timed opperations START
    gettimeofday(&tv1, NULL);

    for (int i = 0; i < threads_count; i++) {
        if (pthread_create(&t_tab[i].id, NULL, thread, &t_tab[i]) != 0) {
            perror("pthread_create error");
            return EXIT_FAILURE;
        }
    }

    for (int i = 0; i < threads_count; i++) {
        if (pthread_join(t_tab[i].id, NULL) != 0) {
            perror("pthread_join error");
            return EXIT_FAILURE;
        }
    }

    // Timed opperations END
    gettimeofday(&tv2, NULL);


    printf("%lu %s\n", value, isPrime ? "est premier" : "n'est pas premier");
    printf(
            "Total time = %f seconds\n",
            (double) (tv2.tv_usec - tv1.tv_usec) / 1000000 +
            (double) (tv2.tv_sec - tv1.tv_sec)
    );


    return EXIT_SUCCESS;
}
```




<script>
export default {
    data: () => ({
        y1: [ 2.661176, 1.364409, 0.930129, 0.706613, 0.669448, 0.572811, 0.497749, 0.467328, 0.647309, 0.529038, 0.486498, 0.538177, 0.567060, 0.480755, 0.510905, 0.506464, 0.477538, 0.513075, 0.458260, 0.454990 ],

        y2: [ 0.000305, 0.000171, 0.000109, 0.000100, 0.000094, 0.000111, 0.000216, 0.000229, 0.000170,0.000205, 0.000224, 0.000252, 0.000240, 0.000220, 0.000241, 0.000244, 0.000270, 0.000266,0.000270, 0.000286 ]
    }),
    computed: {
        x1() {
            return this.range(20);
        },
        x2() {
            return this.range(20);
        }
    },
    methods: {
        range(n) {
            let a = [];
            for (let i of [...Array(n).keys()]) a.push(i + 1);
            return a;
        }
    }
}
</script>
