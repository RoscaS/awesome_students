---
title: "P2 (Analyse): Spécifications"
date: 2018-10-12
author: "Michael, Nathan, Sol"
sidebar: auto
---

## Elements communs aux deux modes

### Cellule

* L'élément de base du jeu est la cellule. Elle représente une "case" de la grille et a deux états possibles: "Vivante" ou "Morte". 
* L'état de chaque cellule de le grille est affecté par l'état des cellules adjacentes (8 cellules voisines).
* L'état est représenté par une couleur spécifique

### Grille
* L'ensemble des cellules forment une grille 
* La grille est de forme rectangulaire 
* La taille de la grille est variable

## Mode simulation

### Règles
1. Une cellule avec moins de deux cellules adjacentes meurt (**solitude**) 
2. Une cellule avec 2 ou 3 cellules adjacentes survit une génération de plus (**survie**)
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "surpopulation" (**surpopulation**)
4. Une cellule morte avec exactement trois cellules vivantes adjacentes devient vivante (**reproduction**)

### Grille
Chaque bord communique avec le coté opposé.


<Container type="warning" header="Point chaud">

##### Forme et taille de la grille :

Implications et contraintes imposées par des grilles de formes diverses.

</container>

### Phase simulation
Une fois la simulation activée, une mise à jour de l'état de la grille se fait à interval régulier et chaque mise à jour applique les règles du jeu à chacune des cellules qui forment la grille.

#### Interval de mise à jour
L'interval est défini par un timer règlable par l'utilisateur (bornes limitées)

<Container type="warning" header="Point chaud">

##### Timing de mise à jour de la grille :

Au moment de la mise à jour de $t_n$ vers $t_{n+1}$ les changements doivent s'effectuer de façon concurrente (à un niveau logique) pour toutes les cellules. En effet, sans ça, une cellule déjà modifiée (donc en $t_{n+1}$) pourrait influencer l'état d'une cellule toujours en $t_0$.

</container>

#### Fin de simulation
La simulation s'arrête lorsque les cellules ne peuvent plus changer d'état ou lorsque l'utilisateur décide de la stopper.

### Interactions
* L'utilisateur peut mettre en pause ou réinitaliser la simulation
* L'utilisateur peut forcer un changement d'état d'une cellule en cliquant sur cette dernière (quel que soit l'état de la simulation)

## Mode 2 joueurs

### Règles
1. Une cellule vivante avec moins de deux cellules adjacentes **alliées** vivantes meurt (**solitude**)
2. Une cellule vivante avec deux ou trois cellules adjacentes **alliées** vivantes vit la génération suivante (**survie**)
3. Une cellule vivante avec plus de trois cellules adjacentes (**alliées ou énnemies) vivantes meurt (**surpopulation**)
4. Une cellule morte avec exactement trois cellules adjacentes **alliées** vivantes devient vivante (**reproduction**)

### Grille
* Contrairement au mode simulation, les bords ne sont pas communiquants.
* La grille est divisée en deux régions de même taille.

### Initialisation de la partie
* Choix de nom et couleur pour chaque joueur
* Choix d'une éventuelle limite de tours avant la fin de la partie
* Choix de la taille de la grille
* Choix du nombre de cellules de départ.
* Possibilité d'ajouter une zone tampon entre les deux jours, qui empêche la création de cellules dans cette zone:
    * Permet le dosage de l'aggressivité en début de partie.
    * Si le tampon est nul, il n'y a plus de région de départ spécifique (les joueurs peuvent poser des cellules sur toute la carte)
* Choix concernant la méthode d'initialisation des cellules des joueurs
    * Manuel (chaque joueur place ses cellules comme il le souhaite) 
    * Aléatoire
    * Scénario de départ prédéfinit 

<Container type="warning" header="Point chaud">

Dans le cas d'un placement manuel, il faut trouver un système pour ne pas qu'un des joueurs attende des heures pour que l'autre se décide. Quelques idées:
* Timer
* "Pièce touchée pièce bougée", un joueur qui place une cellule ne peut pas changer d'avis

</Container>

### Phase jeu
Au tour par tour les joueurs sont guidés par le "guide de jeu" qui leur spécifie:
* Le joueur qui doit éffectuer une action
* L'action à effectuer

#### Déroulement d'un tour
Le joueur qui a la main doit:
* Donner la vie à une **cellule morte**
* Tuer une cellule **adverse**

#### Fin de partie
La partie se termine soit:
* Quand un des deux joueurs n'a plus de cellules 
    * Le joueur à qui il reste des cellules gagne
* Un certain nombre de tours prédéfinit en début de partie est atteint
    * Le joueur ayant le plus de cellules gagne

## Interface

* Grille
* Panneau de controle:
    * **Commun au deux modes**:
        * Selection du mode (simulation ou multijoueurs)
        * Modification des règles de base :
            * Solitude : Lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle 1
            * Survie : Lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle 2
            * Surpopulation : Lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle 3
            * Reproduction: Lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle 4
    * **Simulation**:
        * Controle de la simulation (start/pause, reset)
        * Choix d'une situation de départ
        * Taille de la grille (longueur et largeur)
        * Couleur des cellule vivante
    * **Multijoueur**:
        * Lancement de la partie
            * Entraine les actions nécessaire à l'initialisation d'une partie        
* (multi) Guide de jeu: 
    * Indication concernant la prochaine action attendue ainsi que le joueur qui doit l'effectuer
    * Informations clé concernant la partie
        * Partie commence
        * Partie terminée
        * Vainqueur ainsi que la raison de la victoire
* (multi) Curseur intelligent: En fonction de l'action attendue, le curseur highlight les cases d'une façon et/ou d'une couleur spécifique
* (multi) Metrics de la partie
    * Nombre de cellules vivantes de chaque joueur
    * Nombre de cellules créées par chaque joueur
    * Nombre de cellules tuées par chaque joueur
    * Le numéro du tour courant
    * Le nombre de tours restants (si définit)
