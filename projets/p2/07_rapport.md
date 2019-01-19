---
title: Rapport
date: 2019-08-02
author: "Nathan, Michael, Sol"
sidebar: auto
project: true
---



## Abstract

## Introduction

Fight for the game of life est une adaptation multijoueur du célèbre automate cellulaire "Game of life imaginé en 1970 par John Horton Conway. C'est dans le cadre du projet P2 que nous vous proposons cette nouvelle version du jeu où deux joueurs s'affrontent pour assurer la pérennité de leur colonie de cellules. Cette implémentation est écrite en C++ couplé au framework Qt.

Ces règles modélisent un processus de cycle de vie basique et justifient le nom du jeu. La règle 1 représente la mort de solitude, la règle 2 la continuation de la vie, la règle 3 la mort par surpopulation et la règle 4 représente la naissance. L'état initial de la partie est la genèse après quoi chaque cellule est mise à jour en lui appliquant les règles. Un tour de jeu peut être vu comme une génération.

## Inspiration

### Game of life

Game Of Life est une automation cellulaire et un jeu sans joueurs. Le cadre de jeu est une grille en deux dimensions de taille variable et potentiellement infinie dans laque les cases (cellules) peuvent être "vivantes" ou "mortes". Un set de règles définit l'état d'une cellule en fonction des cellules adjacentes. Une fois une paterne mise en place et lancée, la grille évolue automatiquement sans nécessiter d'interaction supplémentaire. Popularisé dans les années 1970 le jeu est un succès dans la communauté scientifique car il exemplifie à merveille le concept de "comportement spontané d'auto organisation". Malgré que les règles simples au nombre de trois soient spécifiées au plus bas niveau c'est à dire au niveau de la cellule, il en résulte des arrangements complexes à plus haut niveau.

### Fonctionnalités de base

Dans sa forme standard théorisée, une partie se déroule sur un grille de taille infinie composée de cellules on/off. La partie se déroule dans un système à temps discret avec l'état d'une cellule à un temps **t** est déterminé par son propre état ainsi que celui de ses voisines immédiates au temps **t-1** en se basant sur les règles suivantes:

1. Toute cellule **on** au temps **t-1** avec moins de 2 cellules **on** voisines au temps **t-1** passe à l'état *off** à au temps **t**.
2. Toute cellule **on** au temps **t-1** avec 2 ou 3 cellules **on** voisines au temps **t-1** reste **on** au temps **t**.
3. Toute cellule **on** au temps **t-1** avec plus de 3 cellules **on** voisines au temps **t-1** passe à l'état **off** au temps **t**.
4. Toute cellule **off** au temps **t-1** avec exactement 3 cellules **on** voisines au temps **t-1** passe à l'état **on** au temps **t**.

<br>

Ces règles modélisent un processus de cycle de vie basique et justifient le nom du jeu. La règle 1 représente la mort de solitude, la règle 2 la continuation de la vie, la règle 3 la mort par surpopulation et la règle 4 représente la naissance. L'état initial de la partie est la genèse après quoi chaque cellule est mise à jour en lui appliquant les règles. Un tour de jeu peut être vu comme une génération.

Ces règles sont le fruit de nombreuses expérimentations et testes de balance et sont justifiées par le respect stricte de trois critères suivants:

1. Il ne doit pas exister de situation de départ **reconnaissable** dans laquelle la croissance de population sans limites se produit.
2. Il doit exister des paternes de départ où une croissance de population sans limite se produit.
3. Il doit y avoir des des paternes initiales simples qui grandissent et changent au fur et à mesure du temps avant d'arriver à une fin qui se caractérise de 3 façons:
   1. Dépopulation progressive complète (suite à une surpopulation ou une trop forte dispersion)
   2. Stabilisation dans une situation stable et statique qui restera inchangée.
   3. Entrée dans phase d'oscillation entre plusieurs phases qui se répètent infiniment sur deux ou plusieurs tours de jeu.

Game of life génère ce que l'informaticien Stephen Wolfram catégorise comme une automation cellulaire de classe 4 c'est à dire une automation qui a un comportement qui n'est n'y entièrement aléatoire mais pas complètement répétitive non plus.

### Nouveautés apportées

Fight For The Game Of Life (FFTGOL) reprend le cadre du jeu original pour lui apporter une dimension multijoueurs qui se joue au tour par tour entre deux joueurs. L'initialisation de la partie commence par le placement d'un nombre arbitraire mais équivalent de cellules par chaque joueur de son coté de la grille. Une zone tampon centrale de taille arbitraire sépare les deux camps et permet de doser l'agressivité en début de partie. Une fois la partie initialisée, alternativement chaque joueur doit:

1. Amener une cellule à la vie
2. Tuer une cellule adverse

Une fois qu'un joueur a fait ses deux actions, la simulation avance d'une génération avant de passer la main au joueur adverse. Dans ce mode de jeu, les r

la partie se termine quand:




## Planification
### Analyse
#### Objectifs
##### Principaux
##### Secondaires
#### Spécifications
#### Tâches
#### Planning

### Conception
#### Architecture logicielle

Pour permettre la mitigation du manque initial de connaissances techniques du framework Qt, la logique de l'application est séparée de sa présentation. Cette architecture présente plusieurs autres avantages notables:

* Une facilitation de la répartition des Tâches.
* Une plus forte modularité.
* Un code plus facilement maintenable.

La logique écrite en C++ pure est totalement découplée de la présentation et expose des méthodes de haut niveau sous forme d'une API qui peut être consommée par un autre programme qui se charge de la présentation. Dans le cadre de ce projet la présentation utilise Qt mais cette architecture présente l'avantage de pouvoir utiliser la logique avec n'importe quels outils graphiques de l'écosystème C++. On peut également imager une utilisation purement statistique sans framework graphique dans le cadre d'une étude des d'automates cellulaires.

<br>

>Pour faciliter la communication interne, l'utilisation abusive des terme **backend** et **frontend** a été faite pour décrire respectivement la partie logique et présentation du projet en référence aux similitudes avec le développement web. Pour la suite de ce document le même abus de langage sera utilisé.

<br>

##### Backend

Le moteur du jeu est implémenté dans la classe abstraite `Game`. Cette classe a pour vocation d'abstraire tous les éléments logiques du jeu et d'exposer une API accessible via ses spécialisations `GameMulti`et `GameSim`. Ces deux spécialisations permettent de renforcer l'aspect générique de leur mère en se chargeant de surcharger certains de ses comportements pour les adapter à des besoins plus spécifique. En l’occurrence, `GameMulti` se charge de modifier le traitement de la logique qui implémente l'application des règles du jeu pour adapter ce dernier à une version multijoueurs. `GameSim` quant à elle est la concrétisation instanciable de `Game`. 

Ce sont les deux spécialisations actuellement implémentés mais de part la généricité de l'architecture il est aisé d'imaginer d'autres variantes qui pourraient combler des besoins spécifiques à d'autres utilisation. Par exemple, sur une branche du répo git se trouve l'ébauche d'une spécialisation qui a vocation à analyser en profondeur de nombreuses simulations afin de dresser des collections de données statistiques. Un autre cas envisageable serait celui d'une spécialisation dédiée à interfacer avec un autre langage. Cette spécialisation pourrait par exemple utiliser la bibliothèque Boost et ainsi permettre à Python via Boost.python de profiter de la rapidité de traitement de C++ pour afficher une grande quantité de données statistiques du jeu sur une page web via Django. _Et tout cela pour seulement 4.95$ par mois si vous commandez maintenant_ !

Cet accent sur la généricité du moteur du jeu a été initié par le désire de pouvoir aisément implémenter des éléments de gameplay dans la version multijoueurs du programme.

![Image](https://i.imgur.com/65OQAZC.png)

<div style="display: none">

```
[<frame> [<package>Backend| [Game]<:-[GameSim]; [Game]<:-[GameMulti]; [Grid]-+[Game]; [Grid]+-[Cell]] ]
```

</div>








##### Frontend
#### Diagramme de classes
#### Maquettes
#### Convention de nommage

## Developpement
### Choix des technologies
### Tests / Validation
### Installeur
### Objectifs atteints
### Problèmes rencontrés
### Améliorations possibles

## Conclusion
## Bibliographie

## Annexes
### Cahier des charges
### Diagramme de Gantt


### Moteur du jeu

### Interface graphique




* Strategiquement les situation compactes sont avantageuses
* Strategiquement les situation statiques sont avantageuses




* Memoriser les patternes semi complexes qui disparaissent au tour suivant

```
    #
# # #
    #

```



* Petite partie dynamique sur 5 tours. Le gagnant est celui qui a le plus de de cellules à la fin


### A observer
* Où la prochaine génération va poser des cellules pour le joueur adverse (tenter de contrer)



### Notes

* fondamentalement une cellule adverse est considéré comme un obstacle pour nos cellules


