---
title: Graphs
date: 2019-04-15
author: Sol
sidebar: auto
project: false
hide: false
---

Un **graphe** est une structure formée d'un ensemble de **sommets** et d'un ensemble d'arêtes. Un **sommet** (vertex) peut servir à représenter un objet. Un **arc** représente une relation entre deux sommets appelés alors **extrémités** de l'arête. L'**étiquette** (label) d'un sommet, tout comme l'**attribut** d'une arrête, est l'information (poids, valeur) associée au sommet ou à l'arête. Le **nom** d'un sommet l'identifie de manière distincte.

## Vocabulaire

### Notation

* $N = S$: Ensemble des **noeuds** d'un graphe.
* $A$: Ensemble des **arêtes** d'un graphe.
* $G$: Le graphe $G$ est définit comme $G = (N, A)$

La représentation d'un graphe importe peu. Par exemple, les deux graphes qui suivent sont isomorphes:


<Media src="https://i.imgur.com/vOmutKn.png" />

* Un **chemin** d'un **sommet source** à un **sommet destination** est une suite de sommets pour lesquels chacun d'eux est relié au suivant par une arête.
* Un chemin est dit **simple** si il ne comporte que des sommets distincts.
* La **longueur** d'un chemin est le nombre d'arêtes qu'il contient ($N - 1$).

### Graphe simple ou multigraphe

* **Boucle**: Une arête qui relie un noeud à lui même.
* **Lien double** Caractérise l'existence de plusieurs arêtes entre deux noeuds donnés.

<Media
    src="https://i.imgur.com/KP5aFY2.png"
    caption="Multigraphe avec une boucle en bleue et les liens double en rouge."
    width=250
/>

### Connexité

* **Connexe**: Il exsite un chemin entre toute paire de noeuds. 
* **Composante connexe** (d'un graphe): Sous-graphe connexe de ce graphe.

<Media
    src="https://zestedesavoir.com/media/galleries/912/69efbede-6af0-49be-bf23-4d04310f355a.gif.960x960_q85.png"
    url="https://zestedesavoir.com/media/galleries/912/69efbede-6af0-49be-bf23-4d04310f355a.gif.960x960_q85.png"
    caption="Graphe simple avec 3 composantes connexes"
    width=450
/>

* Un graphe ayant **plus** de $N-1$ arcs comporte au moins un circuit.
* Un graphe ayant **moins** de de $N-1$ arcs n'est pas connexe.


### Orientation

* **Graphe orienté**: Les arêtes sont à sens unique et représentées par une flèche. Deux noeuds peuvent être reliés dans les deux sens et sont représentés par deux arcs.

<Container type="info" header="Le poulet">
Dans le cas d'un graphe orienté, on ne parle plus d'arête, mais d'**arc**. Cette distinction est importante, car nombre d'algorithmes ne fonctionnent tout simplement pas sur des graphes orientés.

</Container>

### Pondération

* **Graphe pondéré**: Une valeur est associée à chaque arête.

<br>

<Media
    src="https://i.imgur.com/3zvER1d.png"
    caption="Les trois catégories de graphes"
/>

### Graphe cyclique

* **Cycle**: Un chemin qui permet de relier un noeud à lui même sans jamais passer deux fois par la même arête.
* **Graphe cyclique**: Comporte au moins un cycle. Il peut être orienté ou non.

### Densité

* **Densité**: Rapport du nombre d'arêtes sur le nombre total d'arêtes possibles ($d \in [0; 1]$).
* **Fortement connexe**: Un graphe dense.
* **Graphe complet**: Chaque noeud du graphe est relié à chaque autre noeud.

* **Graphe orienté** de $N$ noeuds: Chaque noeud ne peut être relié qu'à ses $N - 1$ voisins au maximum soit un total de $N(N-1) = N^2-N$ arcs.
* **Graphe non-orienté** de $N$ noeuds: $\frac{1}{2}(N^2-N)$ arête.

### Degré d'un noeud

* **Degré d'un noeud**: Nombre d'arêtes reliées à ce noeud.
* **Degré entrant**: Dans le cas d'un graphe orienté, le nombre d'arcs qui aboutissent à ce noeud.
* **Degré sortant**: Dans le cas d'un graphe orienté, le nombre d'arcs qui partent de ce noeud.

<Container type="info">

* Lorsque le nombre d'arêtes d'un graphe est de l'ordre de $N$, le graphe est dit **creux**. Le degré moyen de ses noeuds est une constante.
* Lorsque le nombre d'arêtes est de l'ordre de $N^2$, le graphe est dit **dense**. Le degré moyen de ses noeuds est de l'ordre de $N$.

</Container>

### Arbres

Un graphe est un **arbre** si il vérifie les propriétés suivantes:
* **Acyclique**
* **Non orienté**
* **Connexe**

Il découle de ces propriétés qu'il n'existe qu'un seul chemin entre deux noeuds donnés.
Si le graphe (l'arbre dans le cas présent) n'est **pas connexe** mais qu'il possède les propriétés précédentes, alors chacun des sous-graphes connexe est un arbre et l'ensemble forme une **forêt**.


<Media
    src="http://zestedesavoir.com/media/galleries/912/91147208-07e3-4311-b71b-a5de49bada57.jpg.960x960_q85.jpg"
    caption="Forêt d'arbres"
/>



### Spanning tree

Un **arbre recouvrant**  d'un graphe connexe est un sous-graphe contenant tous les sommets du graphe et uniquement les arcs nécessaires pour former un arbre. Si le graphe n'est pas connexe, on parle de **forêt recouvrante** (spanning forest). Il est possible de de définir plusieurs arbres recouvrants pour un même graphe:


<Media
    src="https://i.imgur.com/pGrNqs8.png"
    center="true"
/>



## Représentation et stockage

Deux représentations couramment utilisées:
* **Matrice de contiguité**
* **Liste d'adjacence**

Alors que la matrice est statique, les listes permettent une réalisation dynamique. Certains algorithmes conviennent mieux à l'une des deux représentations.


<!-- 
##  Intro

Un graphe est un arbre s'il vérifie les propriétés suivantes : il est acyclique, non orienté, et connexe. 

* Nombre d'arcs d'un graph complet vaut 1/2 * A * (A-1)
  * Chaque somment parent (A-1) arcs et chacun est compté deux fois
* Un graphe ayant plus de A-1 arcs comporte au moins un circuit. 
* Un graphe ayant moins de A-1 arcs n'est pas connexe.

## Graphviz

* [python](https://graphviz.readthedocs.io/en/stable/manual.html) -->