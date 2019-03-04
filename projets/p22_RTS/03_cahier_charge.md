---
title: Cahier des charges
date: 2019-02-25
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: true
hide: false
---

## introduction
Dans le cadre du cours de projet P2.2 à l'HE-Arc, le developpement d'un projet en Java est demandé. Ce projet doit contenir de l'animation et/ou gestion d'image. Le choix se porte sur un jeu de stratégie en temps réel (RTS).

## Objectifs

L'objectif principal est d'avoir un moteur fonctionnel. Dans un premier temps les aspects ludiques et esthétiques ne seront pas considérés.

* **Menu principal**
* **Jeu**
  * Deux joueurs
  * Layout (ce que le joueur voit)
    * aggrégation de cellules (cases composant l'air de jeu)
    * Une cellule peut être naturellement:
      * vide
      * obstacle naturel
      * ressource (épuisable, la cellule devient vide une fois épuisée)
    * Un joueur peut influencer sur une cellule avec des:
      * **Entités statiques** (occupe un certain nombre de cellules):
        * bâtiment 
          * Permet de produire des unités
      * **Entité mobile** (se déplace sur une cellule):
        * unité(s) offensive(s) (Mobile)
          * Peut attaquer les unités ennemies
          * Peut attaquer les batiments ennemis
        * unité(s) utilitaire(s) (Mobile)
          * Permet de récolter des ressources
          * Permet de construire des bâtiments
* **Interface utilisateur (donne des informations sur le jeu)**
  * Mini map
  * Affichage des ressources
  * Affichage de la population
  * Action spéciale
    * En fonction de l'entité selectionnée
      * affiche ce qu'elle peut construire, entrainer, améliorer
  * Curseur intelligent
    * clic gauche selectionne une élément de la carte
    * si une unité alliée est selectionnée, quand le curseur se pose sur une cellule vide de la carte, un clique droit permet d'y déplacer l'unité.
    * si une unité alliée est selectionnée, quand le curseur se pose sur une entité ennemie, le curseur change de forme et l'action d'attaquer en cliquant avec le bouton droit est activée.
  * Cadre de selection (selection multiple d'unités)
* **Menu d'options**
  * settings
    * resolution
    * username
  * lobby (liste des parties)
  * exit
* **Network**
  * 1v1 (pvp)
  * client**s** / serveur


## Objectifs secondaires

* Donner une âme au jeu:
  * Aspect esthétique
  * Contexte du jeu
  * Bruitages
* Rendre le jeu fun à jouer via:
  * Ajout de nouvelles unités
  * Ajout de nouveaux batiments
  * Ajout de nouveaux mécanismes
    * Brouillard de guère
    * ...