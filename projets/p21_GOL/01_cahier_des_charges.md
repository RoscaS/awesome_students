---
title: "P2 (Analyse): Cahier des charges"
date: 2018-10-11
author: "Michael, Nathan, Sol"
sidebar: auto
---

## Objectif

### Deux modes
* **Simulation** (classic Conway's Game of life)
* **Mode deux joueurs** (sur la même machine)


#### Simulation
* Deux états possible pour les cellules (Vivant/Mort)
* Choix de la taille de la grille (longueur/largeur)
* Choix de la taille de la grille
* Mise à jour de l'état des cellules (cycles de jeu) en fonction des règles qui suivent:
    * Une cellule vivante avec deux ou trois voisines vivantes reste en vie
    * Une cellule vivante avec moins de deux voisines vivantes meurt 
    * Une cellule vivante avec plus de trois voisines vivantes meurt
    * Une cellule morte avec exactement trois voisines vivantes devient vivante

#### Deux joueurs
* Chaque joueur possède des cellules vivantes
* Les cellules de chaque joueur ont une couleur spécifique
* Au tour par tour, un joueur **doit** :
    * Tuer une cellule adverse
    * Donner la vie à une cellule morte (peut être la cellule adverse qu'il vient de tuer)
* Après le tour d'un joueur, l'univers avance d'un cycle
* Un joueur gagne la partie lorsque le joueur adverse n'a plus de cellules vivantes ou qu'il a plus de cellules vivantes que son opposant à la fin d'un certain nombre de tours

### Interface graphique
* Grille comprenant les cellules
* Paneau de contrôle comprenant les contrôles et options spécifiques aux deux modes
* Interaction avec la grille via le curseur
* (multi) "Guide de jeu" basique indiquant qui doit jouer et quel type d'action est attendu
* (multi) Curseur "intelligent" en fonction de l'action attendue (multi)

## Fonctionnalités supplémentaires
* (Sim & multi) Obstacles entravant l'expension des cellules sur la grille
* "Guide de jeu" avancé:
    * animations des fenêtres de dialogue comprenant les actions à effectuer 
    * variations dans le type de message (le même message mais exprimé différemment donnant un petit coté "RP")
    * bruitages à l'apparition des fenêtres de dialogue
    * bruitage en fonction de l'état du joueur (gagne/perd)
* Système de races pour les cellules: Possibilité de choisir parmi des races prédéfinies
    * Chaque race à son propre set de règles et d'interactions avec les cellules adverses
* Mode deux joueurs en reseau
* Mode multi joueurs (> 2)
* Mode multi joueur contre IA (PVE)

