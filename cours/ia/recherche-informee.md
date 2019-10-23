---
title: Recherche informée
date: 2019-10-20
author: Sol
sidebar: auto
project: false
hide: false
---

**Heuristique**: Fonction qui établit des pistes pour orienter vers la solution et élaguer les condidats peu intéressants.


## Méthodes de recherche heuristique

Les algorithmes de recherche aveugle n'exploitent aucune information concernant la structure de l'arbre ou le présence potentielle de noeuds-solution pour optimiser la recherche.
* Recherche "rustique" à travers l'espace jusqu'à trouver une solution
* La plupart des problèmes réels sont susceptibles de provoquer une explosion combinatoire du nombre d'états possibles.
* Un algorithme de recherche heuristique utilise l'information disponible pour rendre le processus de recherche plus efficace.
* Une information heuristique est une règle ou une méthode qui presque toujours améliore le processus de recherche.

## Fonction heuristique

$$h: E\rightarrow R$$

* Fait correspondre à un état $s$ de $E$ (espace d'états) un nombre $h(s)$ de $R$ qui est (généralement) une estimation du rapport cout/bénéfices qu'il y a à étendre le chemin courant en passant par $s$.
* Contrainte: $h(solution) = 0$

**Exemple**:

<Col proportions="6/6" vAlign="0">
<template slot="left">

Le noeud $A$ a 3 successeurs pour lesquels:
* $h(s_1)=0.8$
* $h(s_2)=2.0$
* $h(s_3)=1.6$

</template>
<template slot="right">

![Image](https://i.imgur.com/l5My6yH.png)

</template>
</Col>

* La poursuite de la recherche par $s_1$ est heuristiquement la meilleure

### Admissibilité

Une fonction heuristique est **admissible** si:
* $\forall n, 0 \leq h(n) \leq h^*(n)$ avec $h^*(n) =$ cout optimal réel de $n$ au but.

Autrement dit, **ne suréstime jamais le cout réel**
* Une fonction heuristique admissible est donc toujours optimiste.

### Exemple: Distance de Manhattan

* Taquin à 8 plaquettes
* Suggestion de deux heuristiques possibles:
  * $h1(n) =$ nombre de plaquettes mal placées
  * $h2(n) =$ distance de Manhattan
    * déplacement limités aux direction verticales et horizontales
    * somme des distances de chaque plaquette à sa position finale


<br>
<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

* $h1(n) = 8$
* $h2(n) = 3+1+2+2+...=18$

</template>
<template slot="right">

![Image](https://i.imgur.com/Vls5SAn.png)

</template>
</Col>

* $h1(n) =$ nombre de plaquettes mal placées = 8 <st c="g">Est admissible</st>
* $h2(n) =$ somme des distances de chaque plaquette au but = 18 <st c="g">Est admissible</st>
* $h3(n) =$ (somme des distances de chaque plaquette au but) $+3 \times$ (somme de la **fonction score** de chaque plaquette)
  * fonction score:
    * 2 pour une plaquette non centrale si elle n'est pas suivie par la bonne plaquette (pas la bonne séquence) et $0$ si non.

$h3(n)$: $3+1+3+0+2+1+0+3+3\times(2+2+2+2+2+2+2+2) = 66 <st c="r">N'est pas admissible</st>.

<Container type="warning">

La complexité de la fonction heuristique peut nuire à l'efficacité de la recherche. Il faut trouver un bon compromis.

</Container>