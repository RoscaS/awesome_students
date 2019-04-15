---
title: Graphs
date: 2019-04-15
author: Sol
sidebar: auto
project: false
hide: false
---

## Vocabulaire

* $N$: Ensemble des noeuds d'un graph
* $A$: Ensemble des arêtes
* $G$: Le graphe $G$ est définit comme $G = (N, A)$

La représentation d'un graphe importe peu. Par exemple, les deux graphes qui suivent sont isomorphes:

![Image](https://i.imgur.com/vOmutKn.png)

* Une **boucle** est une arête qui relie un noeud à lui même.
* Un **lien double** caractérise l'existence de plusieurs arêtes entre deux noeuds donnés.
    * Un graphe possédant l'une ou l'autre de ces caractéristiques est di **multigraphe**.
    * Un graph ne possédant aucun des deux est dit **graph simple**.


<Media
    src="https://i.imgur.com/znRLV7x.png"
    caption="Multigraphe avec une boucle en bleue et les liens double en rouge"
    center="true"
    width=450
/>



##  Intro

Un graphe est un arbre s'il vérifie les propriétés suivantes : il est acyclique, non orienté, et connexe. 

* Nombre d'arcs d'un graph complet vaut 1/2 * A * (A-1)
  * Chaque somment parent (A-1) arcs et chacun est compté deux fois
* Un graphe ayant plus de A-1 arcs comporte au moins un circuit. 
* Un graphe ayant moins de A-1 arcs n'est pas connexe.

## Graphviz

* [python](https://graphviz.readthedocs.io/en/stable/manual.html)