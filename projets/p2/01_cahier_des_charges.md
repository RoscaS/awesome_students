---
title: "P2 (Analyse): Cahier des charges"
date: 2018-10-11
author: "Michael, Nathan, Sol"
sidebar: auto
---

## MVP
* **Interface graphique** :
    * Affichage de la grille (univers)
    * Bouton de lancement
    * Bouton de reset
    * Personnalisation de l'univers de départ (placement des cellules vivantes à la souris)
* **Fonctionnalités de base** :
    * Deux états possible pour les cellules (Vivant/Mort respectivement Blanc/Noir)
    * Choix de la taille de l'univers
    * Gestion des cycles de jeu (mise à jour de l'état des céllules en fonction des règles qui suivent)
* **Règles** :
    * Une cellule vivante avec moins de deux voisinnes vivantes meurt (solitude)
    * Une cellule vivante avec deux ou trois voisinnes vivantes vit la génération suivante
    * Une cellule vivante avec plus de trois voisinnes vivantes meurt (surpopulation)
    * Une cellule morte avec exactement trois voisinnes vivantes devient vivante a la génération suivante(reproduction)


## Objectif
MVP ainsi que les points suivants:

* Interaction avec les cellules via le curseur
    * Possibilité durant l'exécution du jeu de donner vie à des cellules
    * Possibilité durant l'exécution du jeu de tuer des cellules

* Modification des règles
    * Ajout, suppression et modification des règles

* Selection parmis plusieurs scénario de départ prédéfinis

* Mode deux joueurs en local
    * Chaque joueur possède des céllules vivantes
    * Les cellules de chaque joueur ont une couleur spécifique
    * Au tour par tour, un joueur **doit** :
        * Tuer une cellule adverse
        * Donner la vie à une cellule morte (peut être la cellule adverse qu'il vient de tuer)
    * Après le tour d'un joueur, l'univers avance d'un cycle
    * Un joueur gagne la partie lorsque le joueur adverse n'a plus de céllules vivantes

## Fonctionnalités supplémentaires
* Mode deux joueurs en reseau
* Mode multi joueurs (> 2)
* Races: Possibilité de choisir une règle parmis une sélection de règles supplémentaires prédéfinies pour les cellules d'un joueur
* Obstacles
    * ajout d'obstacles entravant l'expansion 
        * mur: infranchissable
        * océan, désert, forêt,... (chaque biome à une règle supplémentaire spécifique)

