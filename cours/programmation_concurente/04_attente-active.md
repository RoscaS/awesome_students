---
title: Exclusion mutuelle (attente active)
date: 2018-10-17
author: Sol
sidebar: auto
---

##  Sources

* Cours de madame Aïcha Rizzotti (He-Arc Neuchâtel)
* [Wikipedia](https://en.wikipedia.org)

## Rappel des définitions

* **Opération atomique**: La séquence d'instructions est garentie d'être exécutée en un seul bloc malgré que les instructions apparaissent comme indivisibles.
* **Section critique**: Section de code accédant à des ressources partagées et ne devant pas être exécutée concurremment par un autre thread.
* **Ressource critique**: Ressource non partageable et accédée par plusieurs threads.
* **Interblocage (deadlock)**: Situation où deux threads ou plus ne peuvent continuer leur exécution car chacun attend sur l'autre.
* **Exclusion mutuelle**: Garantie que si un thread entre dans une section critique accédant à des ressources partagées, alors aucun autre thread ne peut accéder à ces mêmes ressources partagées.
* **Situation de concurrence (race condition)**: Situation où plusieurs threads lisent et écrivent une ressource partagée et le résultat final dépend du timing de l'exécution.
* **Famine (starvation)**: Situation où un thread prêt à être exécuté n'est jamais élu par l'ordonnanceur.

## Algorithme d'exclusion mutuelle
Selon [Edsger Wybe Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (11 mai 1930 – 6 aout 2002), tout algorithme d'**exclusion mutuelle** devrait satisfaire les propriétés suivantes:
* **Exclusion mutuelle**: Un seul thread à la fois est autorisé à exécuter le code de la section critique
* **Absence d'interblocage**: Aucun thread ne doit se retrouver bloqué indéfiniment
* **Absence de famine**: Tout thread tentant d'entrer en section critique doit éventuellement y entrer
* **Equité**: Aucun thread ne jouit de role privilégié. La solution est la même pour tous

Illustrons ces conditions par des exemples où plusieurs threads tentent d'accéder à une section critique.

#### Algorithme 1

<Col spacer="1" proportions="6/5" vAlign="0">
<template slot="left">

```C
bool busy = false;

void *T0(void *arg) {
    while (true) {
        while (busy) { sleep(.1) }
        busy = true;
        // section critique
        busy = false;
        // fin de section critique
    }
}

void *T1(void *arg) {
    while (true) {
        while (busy) { }
        busy = true;
        // section critique
        busy = false;
        // fin de section critique
    }
}
```

</template>
<template slot="right">

Ce code pourrait s'exécuter de la façon suivante:

* `T0` lit `busy` à `false`

<br> <hr> <br>

* `T1` lit `busy` à `false`
* `T1` set `busy` à `true`
* `T1` entre dans la section critique

<br> <hr> <br>

* `T0` set `busy` à `true`
* `T0` **entre aussi** en section critique

<br>
<st c="r">Les deux threads se trouvent en section critique ! </st>
<br>
<br>

Il n'y a donc **pas** exclusion mutuelle.

</template>
</Col>

#### Algorithme 2

<Col spacer="1" proportions="6/5" vAlign="0">
<template slot="left">

```C
int turn = 0;

void *T0(void *arg) {
    while (1) {
        while (turn == 1) { }
        // section critique
        turn = 1;
        // fin de section critique
    }
}

void *T1(void *arg) {
    while (1) {
        while (turn == 0) { }
        // section critique
        turn = 0;
        // fin de section critique
    }
}


```

</template>
<template slot="right">

* `T0` lit `turn` à `0`
* `T0` entre dans la section critique 

<br> <hr> <br>

* `T1` lit `turn` à `0`

<br> <hr> <br>

* `T0` set `turn` à `1` 
* `T0` sort de la section critique
* `t0` lit `turn` à `1`

<br> <hr> <br>

* `T1` lit `turn` à `1`
* `T1` entre dans la section critique
* `T1` set `turn` à `0`
* ...

<br>

* <st c="g">Un seul thread à la fois en section critique!</st>
* <st c="g">Pas d'interblocage!</st>

</template>
</Col>

Cette situation est intéressante. Toutefois, nous observons un phénomène interessant: Le droit d'entrer dans la section critique d'un thread dépend de l'autre thread. Cela s'appelle un **couplage fort** et ce n'est pas forcément idéal.


#### Algorithme 3

<Col spacer="1" proportions="6/5" vAlign="0">
<template slot="left">

```c
bool enter[2] = {false, false};

void *T0(void *arg) {
    while (true) {
        while (enter[1]) { }
        enter[0] = true;
        // section critique
        enter[0] = false;
        // fin de section critique
    }
}

void *T1(void *arg) {
    while (true) {
        while (enter[0]) { }
        enter[1] = true;
        // section critique
        enter[1] = false;
        // fin de section critique
    }
}
```


</template>
<template slot="right">

Ce code identique dans sa logique au premier ne fonctionne pas car il peut se passer un temps arbitrairement long entre l'expression: <br><br>
* `while (enter[1]) {}`

<br>

et l'affectation:

<br>

* `enter[0] = true;`

<br>

Le prochain algorithme tentera de remédier à ce problème en avançant l'affectation pour la placer avant le `while` pour signaler que le thread est en section critique.

</template>
</Col>


#### Algorithme 4

<Col spacer="1" proportions="6/5" vAlign="0">
<template slot="left">

```c
bool enter[2] = {false, false};

void *T0(void *arg) {
    while (true) {
        enter[0] = true;
        while (enter[1]) { }
        // section critique
        enter[0] = false;
        // fin de section critique
    }
}

void *T1(void *arg) {
    while (true) {
        enter[1] = true;
        while (enter[0]) { }
        // section critique
        enter[1] = false;
        // fin de section critique
    }
}
```

</template>
<template slot="right">

`T0` set `enter[0]` à `true`

<br> <hr> <br>

`T1` set `enter[1]` à `true`
`T1` bloque car `enter[0]` est `true`

<br> <hr> <br>

`T[0]` bloque car `enter[1]` est `true`

<br>

* <st c="g">Un seul thread en section critique!</st>
* <st c="r">Interblocage !</st>

<br>

* Chaque thread signale son intention d'entrer en section critique et cela entraine un **interblocage**

</template>
</Col>

Ici, Chaque thread signal son intention d'entrer en section critique mais ça a comme conséquence de potentiellement créér un **interblocage**. Il faudrait donc trouver un moyen de faire _capituler_ un des threads pour décoincer l'autre. Nous pouvons forcer ça avec un mécanisme qui ferait en sorte que chaque thread retire temporairement son intention d'entrer en section critique pendant un court instant.

#### Algorithme 4

<Col spacer="1" proportions="6/5" vAlign="0">
<template slot="left">

```c
bool enter[2] = {false, false};
bool loop = true;

void *T0(void *arg) {
    while (loop) {
        enter[0] = true;
        while (enter[1]) { 
            // temporisation
            enter[0] = false; 
            enter[0] = true;
        }
        // section critique
        enter[0] = false;
        // fin de section critique
    }
}

void *T1(void *arg) {
    while (loop) {
        enter[1] = true;
        while (enter[0]) { 
            // temporisation
            enter[1] = false;
            enter[1] = true; 
        }
        // section critique
        enter[1] = false;
        // fin de section critique
    }
}
```


</template>
<template slot="right">

* `t[0]` set `enter[0]` à `true`

<br> <hr> <br>

* `T1` set `enter[1]` à `true`
* `T1` entre dans la `while`
* `T1` set `enter[1]` à `false`
* <st c="b">`T1` temporise</st>
* `T1` set `enter[1]` à `true

<br> <hr> <br>

* `T0` entre dans la `while`
* `T0` set `enter[0]` à `false`
* <st c="b">`t[0]` temporise</st>
* `T0` set `enter[0]` à `true`

<br> <hr> <br>
* ...

<br>

* <st c="g">Un seul thread en section critique!</st>
* <st c="b">?? Interblocage possible ??</st>
* <st c="r">Nous nous retrouvons avec une situation de famine!</st>

</template>
</Col>

Bien apès ce tour d'horizon, on voit que la situation n'est pas évidente à résoudre. Voyons maintenant deux célèbres algorithmes qui apporte une solution valable dans certains cas.

### Algorithme de Dekker et Peterson
Principe:

* Chaque processus annonce sa candidature à l'autre processus
* En cas de candidature simultanées, le conflit est régé en donnant la priorité à un processus
* Pour une solution équitable, la priorité doit être variable

#### Algorithme de Dekker

```c
typedef enum {enter, leave} intention_t;
intention_t intention[2] = {leave, leave};
int turn = 0;

void *T0(void *arg) {
    while (true){
        intention[0] = enter;
        while(intention[1] == enter){
            if (turn != 0) {
                intention[0] = leave;
                while (turn != 0) { }
                intention[0] = enter;
            }
        }
        // section critique
        turn = 1;
        intention[0] = leave;
        // fin section critique
    }
}

void *T1(void *arg) {
    while (true) {
        intention[1] = enter;
        while (intention[0] == enter) {
            if (turn != 1) {
                intention[1] = leave;
                while (turn != 1) { }
                intention[1] = enter;
            }
        }
        // section critique
        turn = 0;
        intention[1] = leave;
        // fin section critique
    }
}
```

#### Algorithme de Peterson

```c
bool enter[2] = { false, false };
int turn = 0;

void *T0(void *arg) {
    while (true) {
        enter[0] = true;
        turn = 1;
        while (enter[1] && turn == 1) { }
        // section critique
        enter[0] = false;
        // section non critique
    }
}

void *T1(void *arg) {
    while (true) {
        enter[1] = true;
        turn = 0;
        while (enter[0] && turn == 0) { }
        // section critique
        enter[1] = false;
        // section non critique
    }
}
```

Ces deux algorithme sont très bien mais ils peuvent ne pas fonctionner sur des processeurs multi-coeur. Le problème est lié à la mémoire cache de chaque processeur et à l'ordre des accès mémoire. Pour remédier à ce problème on a besoin de **barrières de synchronisation** directement implémentées dans le materiel.

```c
void *thread(void *arg) {
    // protocole d'entrée
    asm("cli"); // masque les interuptions (x86)
    // section critique
    // ...
    // fin section critique
    // protocole de sortie
    asm("sti"); // démasque les interruptions (x86)
}
```

### Instructions matérielles

Les processeurs modernes implémentent diverses instructions matérielles atomique pour palier à ces problème et rendre les alogirthmes d'exclusion mutuelle plus facilement implémentables et robustes:

 * Les instructions **Test And Set (<Def def="Assembleur">TAS</Def>)** testent et modifient de manière atomique une variable
 * Les instructions **Compare And Swap (<Def def="Assembleur">CAS</Def>)** comparent et échange d'une manière atomique deux variables

#### Exclusion mutuelle avec une instruction Test And Set:

```c
int test_and_set (int *verrou) {
    int old = *verrou;
    *verrou = 1;
    return old;
}

int lock = 0;

void *thread(voir *arg) {
    // protocole d'entrée
    while (test_and_set(&lock)) { }
    // section critique
    // ...
    lock = 0;
    // fin section critique
    // protocole de sortie
}
```

### Cohérence séquentielle

Affin d'obtenir du code exécuté plus efficace, le compulateur effectue diverses opérations d'optimisation (variables dans des registres, réordonnancement d'instructions pour éviter des accès mémoire successifs et inutiles, supressions de variables, déplacement de code, etc, ...)

Ces optimisations ne changent pas le comportement du code dans un contexte séquentiel, cependant, dans un contexte concurrent ou parallèle, ce n'est plus nécessairement le cas.

**Le compilateur C analyse le code et le réarrange uniquement dans le cadre d'un contexte séquentiel.** Il est possible de déclarer une variable `volatile` pour signifier au compulateur de n'éffectuer aucune optimisation sur la variable.

```C
volatile int value = 5;
```

## Conclusion

* **Attente active**: Le temps processeur est gaspillé au test d'une condition (boucle) pour bloquer un thread
* **Attente passive**: Un thread est bloqué par le noyau et un autre thread est ordonnancé (processeur reste disponible)
* Les algorithmes précédents utilisent l'attente **active**
* L'attente passive nécessite des constructions spéciales:
    * verrous
    * sémaphores
    * variables de condition
* Ces constructions facilitent la conception d'algorithmes mais n'éliminent pas les risques d'erreur
* Le noyau doit les supporter
