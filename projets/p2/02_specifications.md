---
title: "P2 (Analyse): Spécifications"
date: 2018-10-12
author: "Michael, Nathan, Sol"
sidebar: auto
---

## Elements de base

### Cellule

L'élément de base du jeu est la cellule. Elle représente une "case" de la grille et a deux états possibles: "Vivante" **ou** "Morte". L'état de chaque cellule de le grille est affecté par l'état des cellules adjacentes (8 voisines).

#### État
Une couleur particulière renseigne sur l'état de la cellule.

#### Attributs
Une cellule connait :
* sa position
* son état

### Grille
L'ensemble des cellules forment une grille de forme rectangulaire. Chaque extremité communique avec le coté opposé.

## Mode simulation

### Règles
1. Toute cellule avec moins de deux cellules adjacentes meurt de "solitude"
2. Toute cellule avec 2 ou 3 cellules adjacentes survit une génération de plus
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "surpopulation"
4. Une cellule morte devient vivante si elle a exactement trois cellules vivantes adjacentes

### Interaction
L'utilisateur peut forcer un changement d'état d'une cellule en cliquant sur cette dernière.
* Une cellule vivante est affectée par les règles 1, 2 et 3.
* Une cellule morte est affectée par la règle 4.


<Container type="warning" header="Point chaud">

##### Forme et taille de la grille :

Implications et contraintes qu'impose le fait d'avoir des grilles de formes diverses.

</container>

### Tours
Une fois la simulation activée, une mise à jour de l'état de la grille se fait à interval régulier et chaque mise à jour applique les règles du jeu à chacune des cellules qui forment la grille.

### Interval de mise à jour
L'interval est définie par un timer et l'utilisateur peut modifier la valeur de ce timer (bornes à définir).

<Container type="warning" header="Point chaud">

##### Timing de mise à jour de la grille :

Au moment de la mise à jour de $t_n$ vers $t_{n+1}$ les changements doivent s'effectuer de façon concurrente (à un niveau logique) pour toutes les cellules. En effet, sans ça, une cellule déjà modifiée (donc en $t_{n+1}$) pourrait influencer l'état d'une cellule toujours en $t_0$.

</container>

### Fin de partie
La simulation s'arrête lorsque les cellules ne peuvent plus changer d'état.

## Mode 2 joueurs

### Description
* La grille est divisée en deux région de même taille chacune.
* Choix du nombre de cellules de départ.
* Lors de l'initialisation chaque joueur place ses cellules de son côté de la grille.
* Possibilité d'ajouter une zone tampon, qui empêche la création de cellules dans cette zone (dosage de l'aggressivité en début de partie).

### Grille
Contrairement au mode simulation, les bords ne sont pas communiquants.


### Initialisation du jeu
* Choix de couleur pour chaque joueur
* Choix du nombre de tours max avant la fin de la partie
* Choix de la taille de la grille
* Choix éventuel d'une zone tampon

### Phase jeu

#### cellules
* Une cellule vivante avec moins de deux voisines **alliées** vivantes meurt (solitude)
* Une cellule vivante avec deux ou trois voisines **alliées** vivantes vit la génération suivante
* Une cellule vivante avec plus de trois voisines vivantes meurt (surpopulation)
* Une cellule morte avec exactement trois voisines **alliées** vivantes devient vivante a la génération suivante(reproduction)

#### Déroulement d'un tour
Le joueur place une cellule **alliée** dans une case "vide" et en tue une **adverse**.

#### Fin de partie
La partie se termine lorsque les cellules d'un des deux joueurs ne peuvent plus changer d'état ou lorsqu'un certain nombre de tour est atteint (le gagnant de ce cas de figure est celui qui possède le plus de cellules vivantes).

## Interface

* grille

* settings
    * Modification des règles de base :
        * Solitude : lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle n°1
        * Surpopulation : lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle n°3
        * Reproduction
    * Couleur de la cellule
    * Taille de la grille
    * Mode simulation ou multijoueurs
    * Choix d'une situation de départ



### Champ instructions (2 joueurs)
Affiche en fonction du tour, les instructions de jeu pour le joueur concerné (ex : tuer une cellule adverse, donner vie à une cellule, etc.)

### Champ données de jeu (2 joueurs)
Affiche :
* le nombre de cellules vivantes de chaque joueur
* le nombre de cellules créées et tuées par chaque joueur
* le tour actuel
* le nombre de tours restants si celui-ci à été défini.
Lorsque la partie est terminée, affiche le gagnant ainsi que la condition de victoire (ex : "joueur 1 a gagné grâce à 20 cellules vivantes de plus que joueur 2")