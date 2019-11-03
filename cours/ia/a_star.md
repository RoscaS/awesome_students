---
title: A*
date: 2019-10-25
author: Sol
sidebar: auto
project: false
hide: false
---

* [redblob](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html)

A* combine:
* L'algorithme de **Dijkstra**: Favorise les vertices proches du point de départ
* **Greedy-best-first-search**: Utilisation d'heuristique <Fa fa="arrow-right"/> favorise les vertices <Def def="dans la direction">proches</Def> du but.

<br>

* $g(n)$ représente le coût exacte du chemin entre le points de départ et n'importe quel vertex $n$.
* $h(n)$ représente le coût heuristiquement éstimé entre le vertex $n$ et le but.



<Media
    src="http://theory.stanford.edu/~amitp/game-programming/a-star/a-star-trap.png"
    url="http://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html"
    center="true"
/>

Ici, le jaune ($h$) rerpésente les vertices éloignés du but et ceux en bleu ($g$) les vertices éloignés du point de départ. A* est capable d'équilibrer ces deux informations pendant qu'il se déplace entre les deux points. Lors de chaque itération, il examine le vertex $n$ ayant la plus faible $f(n) = g(n) + h(n)$.

![Image](https://i.imgur.com/3dpkE57.png)

* Dijkstra ($g(n)$) sur chaque case
* Greedy-best-first-search ($h(n)$) sur chaque case
* A* ($f(n) = g(n) + f(n)$) sur chaque case

<Container type="info">

La fonction heuristique $h(n)$ donne à A* une **estimation** du coût minimum entre tout vertex $n$ et le but. Le choix de la fonction heuristique est donc fondamental.

</Container>

## Heuristique de A*

L'heuristique sert à controler le comportement d'A*:

<Container type="danger">

Une heuristique est **admissible** uniquement si elle ne surestime pas le coût entre $n$ et le but. Dans ce cas, pour A*, cela assure le fait de trouver le meilleur chemin (si il existe).

* [Discussion interesante](http://realtimecollisiondetection.net/blog/?p=56) qui montre pourquoi le fait qu'une heuristique ne soit pas admissible peut être avantageux.

</Container>

* Si $h(n) = 0$ alors il n'y a que $g(n)$ qui influence le comportement <Fa fa="arrow-right"/> A* aura le** même comportement que l'algorithme de Dijkstra** (assure de trouver le chemin le plus court).
* Si $h(n)$ est toujours **plus petit ou égale** au coût du déplacement entre $n$ et le but, alors A* assure de toujours trouver le chemin le plus court. Plus la valeur $h(n)$ est basse, plus A* explorera de vertices et le rendra plus lent.
* Si $h(n)$ **est égale** au coût du déplacement entre $n$ et le but, alors l'exploration de A* sera équivalente au meilleur chemin. (*Si A\* est parfaitement informé, son comportement est parfait*)
* Si $h(n)$ est **parfois plus grand** que le coût du déplacement entre $n$ et le but, A* n'assure pas de trouver le chemin le plus court (mais en contrepartie sera plus rapide).
* Si $h(n)$ est très grand vis à vis de $g(n)$ alors, c'est uniquement $h(n)$ qui influence le comportement et A* aura le **même comportement que Greedy-best-first-search** (trouve un chemin plus rapidement que Dijkstra mais pas forcément le plus court).
