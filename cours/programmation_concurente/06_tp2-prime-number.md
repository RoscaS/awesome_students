---
title: "TP-2: Nombres premiers"
date: 2018-10-31
author:  "Nathan, Michael, Sol"
sidebar: auto
project: true
---

## Objectifs
* Vérifier si un nombre est premier de manière sequentielle et multi-threadée.
* Comparer les performances (temps d'execution) et trouver le nombre de thread pour une exécution optimale.

<Container type="info">

Ces comparaisons se font sur un processeur Intel® Core™ i7-4710HQ (3.50 GHz, 4 coeurs, 8 threads), OS : Ubuntu 18.04.1 LTS

</Container>

## Contexte
> Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs: 1 et lui-même.

<br>

Pour tester si un nombre $n$ entré par l'utilisateur est un nombre premier, les programmes de ce rapport tentent de diviser $n$ par un nombre $x, \{x \in \mathbb{N} | 2 \leq x \leq \sqrt{n}\}$. Si le résultat de cette opération est un nombre entier, alors $n$ n'est pas premier.

## Utilisation des programmes
```shell
// sequentielle.c
gcc -pthread -lm sequentielle.c -o sequentielle && ./sequentielle <n>

// multiThread.c
gcc -pthread -lm multiThread.c -o multiThread && ./multiThread <n> <n_threads>
```

## Premier programme: sequentiel
Cette première implémentation est triviale et se base sur la technique décrite dans le [contexte](https://www.intra.jrosk.ch/cours/programmation_concurente/06_tp2-prime-number.html#contexte) pour vérifier si un nombre est premier.
Les valeurs proposées dans la consigne retournent les résultats suivants sur un moyenne de 50 itérations du programme.


| $n$               | Temps (sec) | Est premier |
|-------------------|-------------|-------------|
| 99194853094755497 | 3.053615    | Oui         |
| 18014398241046527 | 1.300335    | Oui         |
| 70368760954879    | 0.083977    | Oui         |
| 4398050705407     | 0.021344    | Oui         |
| 68720001023       | 0.002695    | Oui         |
| 2971215073        | 0.000657    | Oui         |
| 433494437         | 0.000234    | Oui         |
| 433494438         | 0.000013    | Non         |


Si un nombre est premier, le programme doit tester toutes les valeurs comprises dans l'interval $i = [2, \sqrt{n}]$ ce qui est le cas de presque tous les valeurs proposées dans la consigne mis à part le dernier. Les résultats indiquent que plus l'interval $i$ est grand plus le temps d'exécution est long. Si un nombre n'est pas premier l'execution s'arrête dés que le test de la condition en ligne 29 échoue (cliquer sur la balise _spoiler_ suivante pour afficher l'implémentation).

### Première implémentation

<Spoiler>

```cpp{29}
#define DEFAULT_VALUE 433494437

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



## Second programme: multi-thread

Cette seconde implémentation est une version multi-thread du premier programme. 
Le nombre $n$ entré par l'utilisateur est partitionné de façon _presque_ équitable entre les différents thdreads qui se chargent de tester une plage de valeurs de façon concurente. Si l'un d'eux passe avec succès la condition en ligne 98 (voir prochaine [implémantation](https://www.intra.jrosk.ch/cours/programmation_concurente/06_tp2-prime-number.html#seconde-implementation)), un flag permet de stoper l'exécution de tous les threads à l'exception du `main` qui reprend la main pour terminer le programme.

Pour la plus petite valeur ainsi que la plus grande valeur donnés dans la consigne, par nombre de threads (de 1 à 20) le temps enregistré correspond à la moyenne de 10 executions du programme.

### Première valeur (grande)

**$n$ = 99 194 853 094 755 497**

<br>

| Threads | Temps (s) | Threads | Temps (s) |
|---------|-----------|---------|-----------|
| 1       | 2.861176  | 11      | 0.486498  |
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

Dans cette première situation, le temps d'execution diminue en fonction du nombre de threads utilisés et se stabilise une fois que les 8 threads du processeur sont solicités. Une seconde observation remarquable est le fait que le temps d'exécution sur un thread est plus faible que sur le programme séquentiel pour la même valeur malgré une complexité plus elevée. 

<Container type="warning">

La seconde observation nécessiterait des tests particuliers pour être confirmée, elle ne sera donc pas prise en compte dans la conclusion.

</Container>


<br>

### Seconde valeur (petite)

**$n$ = 433 494 437**


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

Dans cette seconde situation, l'amplitude entre les résultats semble plus grande entre les différents nombre de threads utlisés mais les écarts sont en réalité très faibles et il est difficile de juger si ces écarts sont significatifs. La tendance semble être la même que lors du test sur un grand nombre jusque 6 threads.


### Seconde implémentation

<Spoiler>

```cpp{98}
typedef unsigned long int uli;

static bool isPrime = true;

int threads_count;
uli value;

struct timeval tv1, tv2;

typedef struct {
    pthread_t id;
    uli       start;
    uli       end;
    uli       max;
    uli       value;
}   T_data;


void *thread(void* );
int capture(int, char**);
void init_T_data_objects(T_data*, uli, uli);
void recap();


int main(int argc, char **argv) {
    capture(argc, argv);

    T_data *threads_tab = malloc(sizeof(T_data) * threads_count);
    uli    length       = (uli) ceil(sqrt(value));
    uli    range        = (uli) ceil(length / threads_count) + 1;

    init_T_data_objects(threads_tab, range, length);

    // Timed opperations START
    gettimeofday(&tv1, NULL);

    for (int i = 0; i < threads_count; i++) {
        if (pthread_create(&threads_tab[i].id, NULL, thread, &threads_tab[i]) != 0) {
            perror("pthread_create error");
            return EXIT_FAILURE;
        }
    }

    for (int i = 0; i < threads_count; i++) {
        if (pthread_join(threads_tab[i].id, NULL) != 0) {
            perror("pthread_join error");
            return EXIT_FAILURE;
        }
    }

    // Timed opperations END
    gettimeofday(&tv2, NULL);
    recap();
    return EXIT_SUCCESS;
}

int capture(int argc, char **argv) {
    if (argc < 3) {
        printf("usage: main <value> <threads number>");
        exit(1);
    }
    value         = (uli) strtol(argv[1], NULL, 10);
    threads_count = (int) strtol(argv[2], NULL, 10);
}

void init_T_data_objects(T_data* threads_tab, uli range, uli length) {
    printf(
        "Value: %lu\nsqrt(value): %lu\nThreads: %d\nRanges: %lu\n",
        value, length, threads_count, range
    );
    for (int i = 0; i < threads_count; i++) {
        pthread_t id;
        T_data    t;

        t.id    = id;
        t.start = (uli) (i * range < 2 ? 2 : i * range);
        t.end   = (uli) ((i + 1) * range);
        t.max   = length;
        t.value = value;

        threads_tab[i] = t;
    }
}

void recap() {
    printf(
        "\n%lu%s\nTotal time: %f s\n",
        value,
        isPrime ? " is prime" : " isn't prime",
        (double) (tv2.tv_usec - tv1.tv_usec) / 1000000 +
        (double) (tv2.tv_sec - tv1.tv_sec)
    );
}

void *thread(void *arg) {
    T_data   *t = arg;
    for (uli i  = t->start; ((i < t->end) && (i <= t->max)) && isPrime != false; i++) {
        if (t->value % i == 0) {
            isPrime = false;
            break;
        }
    }
    pthread_exit(NULL);
}
```

</Spoiler>

### Implémentation de test
<Spoiler>
```cpp{98}
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

double testMulti(uli value, int threads_count) {

    struct timeval tv1, tv2;

    isPrime = true;
    T_data *t_tab = malloc(sizeof(T_data) * threads_count);
    uli length = (uli) ceil(sqrt(value));
    uli range = (uli) ceil(length / threads_count) + 1;


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

    gettimeofday(&tv2, NULL);

    double temps = (double) (tv2.tv_usec - tv1.tv_usec) / 1000000 +
                   (double) (tv2.tv_sec - tv1.tv_sec);

    return temps;
}

int main(int argc, char *argv[]) {
    uli value = 4398050705407;
    int threadMax = 20;
    int testMax = 10;
    for(int i = 1; i <= threadMax; i++) {
        double temps = 0;
        for(int j = 0; j < testMax; j++) {
            temps += testMulti(value,i);
        }
        temps = temps/testMax;
        printf("%f, ",temps);

    }

    return EXIT_SUCCESS;
}

```
</Spoiler>

# Conclusion
Ces résultats nous indiquent **une différence importante** entre le temps d'exécution de la version séquentielle du programme et celle multi-thread. Pour le même nombre $n$(le plus grand) on passe d'un temps de $\approx 3.05$ secondes en version séquentielle à un temps de $\approx 0.48$ sur 8 threads. 

<br>

Il est également notable que le temps d'éxécution diminue en fonction du nombre de threads utilisés pour **atteindre son plein potentiel sur le nombre maximum de thdreads de la machine** si le nombre à tester est suffisament grand pour laisser au processeur le temps d'atteindre sa vitesse maximum.

<br>

La conclusion de ce travail est que la programmation concurrente peut être un choix juticieux et facile à implémenter pour optimiser l'éfficacité des algorithmes ne nécéssitant pas d'accès concurent aux mêmes données.


<script>
export default {
    data: () => ({
        y1: [ 2.861176, 1.364409, 0.930129, 0.706613, 0.669448, 0.572811, 0.497749, 0.467328, 0.647309, 0.529038, 0.486498, 0.538177, 0.567060, 0.480755, 0.510905, 0.506464, 0.477538, 0.513075, 0.458260, 0.454990 ],

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
