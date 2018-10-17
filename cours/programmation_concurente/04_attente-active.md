---
title: Attente active
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
Selon [Edsger Wybe Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (11 mai 1930 – 6 aout 2002), tout algorithme d'exclusion mutuelle devrait satisfaire les propriétés suivantes:
* **Exclusion mutuelle**: Un seul thread à la fois est autorisé à exécuter le code de la section critique
* **Absence d'interblocage**: Aucun thread ne doit se retrouver bloqué indéfiniment
* **Absence de famine**: Tout thread tentant d'entrer en section critique doit éventuellement y entrer
* **Equité**: Aucun thread ne jouit de role privilégié. La solution est la même pour tous

Illustrons ces conditions par des exemples où plusieurs threads tentent d'accéder à une section critique.

### Exclusion mutuelle

<Col spacer="1" proportions="4/6" vAlign="0">
<template slot="left">

```C
bool busy = false;

void *t0(void *arg) {
    while (true) {
        while (busy) { }
        busy = true;
        // section critique
        busy = false;
        // fin de section critique
    }
}

void *t1(void *arg) {
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

* `t0` lit `busy` à `false`

---

* `t1` lit `busy` à `false`
* `t1` met `busy` à `true`
* `t1` entre dans la section critique

---

* `t0` met `busy` à `true`
* `t0` **entre aussi** en section critique

<st c="r">Les deux threads se trouvent en section critique</st>
<st c="g">Les deux threads se trouvent en section critique</st>
<st c="b">Les deux threads se trouvent en section critique</st>
<!-- <s>lala</s> -->

</template>
</Col>






