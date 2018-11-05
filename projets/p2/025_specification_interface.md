---
title: "P2 (Analyse): Spécifications de l'interface"
date: 2018-10-12
author: "Michael, Nathan, Sol"
sidebar: auto
---

### Interface





L'interface de base contient :  

* la grille contenant les cellules
* une sidebar avec les différentes intéractions possibles avec le jeu
    * Un champ (modifiable) qui gère la taille de la grille (bornes à définir)
    * Un bouton pour lancer, arrêter et reset la simulation
    * Un champ pour modifier la fréquence du timer gérant la simulation
    * Un bouton permettant de charger une configuration (taille de la grille, fréquence, règles)
    * Un bouton permettant de sauvegarder la configuration actuelle
    * Un bouton de configuration qui appelle un dialogue permettant de modifier les règles de bases
        * Un bouton reset permettant de revenir à la configuration initiale du jeu
* Une case à cocher débloquant les options d'une partie à deux joueurs
    * Bouton donnant accès à la sélection d'une couleur pour chaque joueur
    * Un bouton start particulier à ce mode de jeu (l'autre bouton est grisé si la case "multijoueurs" est cochée)
    * miniatures sélectionnables pour choisir une situation initiale