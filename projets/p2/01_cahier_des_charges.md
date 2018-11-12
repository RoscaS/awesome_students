---
title: "P2 (Analyse): Cahier des charges"
date: 2018-10-11
author: "Michael, Nathan, Sol"
sidebar: auto
---

<br>
<br>
<br>

## Objectif

### Deux modes
* **Simulation** (classic Conway's Game of life)
* **Mode deux joueurs** (sur la même machine)


#### Simulation
* Deux états possible pour les cellules (Vivant/Mort respectivement Blanc/Noir)
* Choix de la taille de la grille (longueur/largeur)
* Mise à jour de l'état des céllules (cycles de jeu) en fonction des règles qui suivent:
    * Une cellule vivante avec deux ou trois voisinnes vivantes reste en vie
    * Une cellule vivante avec moins de deux voisinnes vivantes meurt 
    * Une cellule vivante avec plus de trois voisinnes vivantes meurt
    * Une cellule morte avec exactement trois voisinnes vivantes devient vivante

#### Deux joueurs
* Chaque joueur possède des cellules vivantes
* Les cellules de chaque joueur ont une couleur spécifique
* Au tour par tour, un joueur **doit** :
    * Tuer une cellule adverse
    * Donner la vie à une cellule morte (peut être la cellule adverse qu'il vient de tuer)
* Après le tour d'un joueur, l'univers avance d'un cycle
* Un joueur gagne la partie lorsque le joueur adverse n'a plus de cellules vivantes

### Interface graphique
* Grille comprenant les cellules
* Paneau de controle comprenant les controles et options spécifique aux deux modes
* Interaction avec la grille via le curseur
* (multi) "Guide de jeu" basique indiquant à qui le tour et quel type d'action est attendu
* (multi) Curseur "intélligent" en fonction de l'action attendue (multi)

## Fonctionnalités supplémentaires
* Mode deux joueurs en reseau
* Mode multi joueurs (> 2)
* (multi) "Guide de jeu" avancé:
    * animations des fenêtres de dialogue comprenant les actions à effectuer 
    * variations dans le type de message (le même message mais exprimé différament donnant petit coté "RP")
    * bruitages à l'apparition des fenêtres de dialogue
    * bruitage en fonction de l'état du joueur (gagne/perd)
* (Sim & multi) Obstacles entravant l'expension des cellules sur la grille
* Système de races pour les cellules: Possibilité de choisir une règle parmis une sélection de règles supplémentaires prédéfinies pour les cellules d'un joueur

