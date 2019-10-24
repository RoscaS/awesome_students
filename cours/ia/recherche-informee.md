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

$h3(n)$: 3+1+3+0+2+1+0+3+3 $\times$(2+2+2+2+2+2+2+2) = 66 <st c="r">N'est pas admissible</st>.

<Container type="warning">

La complexité de la fonction heuristique peut nuire à l'efficacité de la recherche. Il faut trouver un bon compromis.

</Container>

## Recherche + Heuristique

L'algorithme **Best-First search** permet d'explorer les noeuds dans l'ordre (meilleur-que) **de leurs valeurs heuristiques**.
Les fonctions heuristiques classiques pour un problème <Def def="Traveling salesman problem">TSP</Def>:
* distance de manhattan
* distance à vol d'oiseau

On utilise deux listes pour garder l'historique et permettre les retours-arrièresL
* `frontier`: **Liste ordonnée** des noeuds à examiner
* `history`: liste des noeuds déjà examinés

<br>

* Stratégie la plus simple des **best-first search**.
* Utilise une fonction heuristique $h(n)$ qui équivaut à une estimation du cout du noeud $n$ jusqu'au but.
* **Recherche avare**, elle minimise le cout estimé pour atteindre le but
  * le noeud qui semble être le plus proche du but sera étendu en priorité
  * en considérant uniquemen l'état actuel, pas l'historique des cours accumulés

<br>

* **Complétude**: <st c="r">Non</st> (si boucle)
* **Optimalité**: <st c="r">Non</st> (on ne tient pas compte de l'histoire du noeud)
* **Temps**: $O(b^m)$ (exponentiel en $m$ = profondeur maximum de l'espace recherché. Une heuristique peut drastiquement améliorer le temps)
* **Espace**: $O(b^m)$ garde tous les noeuds en mémoire

## Uniform cost search

L'algorithme de **recherche en cout uniforme** minimise le cout $g(n)$ depuis l'état initial au noeud $n$


<Spoiler tag="gif">

<Media
    src="https://i.imgur.com/XVzxde0.png"
    center="true"
    width=250
/>

<Media
    src="https://i.imgur.com/nFvOoUF.png"
    center="true"
    width=250
/>

<Media
    src="https://i.imgur.com/MmnUGcY.png"
    center="true"
    width=250
/>

<Media
    src="https://i.imgur.com/pPGrvwG.png"
    center="true"
    width=250
/>

<Media
    src="https://i.imgur.com/XymFe3m.png"
    center="true"
    width=250
/>

<Media
    src="https://i.imgur.com/YKAZPjj.png"
    center="true"
    width=250
/>

</Spoiler>


## A*

* La recherche avare minimise le cout estimé $h(n)$ du noeud $n$ au but, réduisant ainsi considérablement le cout de la recherche, mais il n'est pas optimal et pas complet (en général)
* L'algorithme de recherche en cout uniforme minimise le cout $g(n) depuis l'état initial au noeud $n$
* **Idée**:
  * Combiner les deux algorithmes et minimiser le cout total $f(n)$ du chemin en passant par le noeud $n$

$$f(n) = g(n) + h(n)$$

Si en plus $f(n)$ est telle que:
* $g(n)$ = cout du meilleur hemin jusqu'à $n$
* $h(n)$ = une fonction heuristique **admissible**

<Fa fa="arrow-right"/> L'algorithme "recherche avare" avec la fonction f(n) est appelé algorithme A*

* **Complétude**: <st c="g">Oui</st> Sauf si il y a un nombre infini de noeuds avec une valeur de $f\leq f(but)$
* **Optimalité**: <st c="g">Oui</st> Si $h()$ est admissible (Le fait que A* trouve uniquement le chemin le plus court peut être facilement prouvé)
* **Temps**: Exponentiel
* **Espace**: Garde tous les noeuds en mémoire