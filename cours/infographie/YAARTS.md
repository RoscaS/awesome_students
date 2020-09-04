---
title: YAARTS
date: 2020-03-19
author: Sol
sidebar: auto
project: false
hide: false
---

## Développeurs

* Nathan Latino
* Tristan Seuret
* Sol Rosca

## Sujet

YAARTS: Yet Again Another Real Time Strategy (Game). Ce projet est une tentative d'aller le plus loin possible dans le développement d'un jeu de stratégie en temps réel (Dune 2, Command & Conqueres, Warcraft, Starcraft, ...). Le projet est partagé entre les cours d'infographie et de .NET. La partie infographie se concentre sur la partie visuelle ainsi que l'utilisation du moteur Uity 3D et la partie .NET sur la qualité du code C#.

## Technologies

* Unity 3D
* C#

## Cahier des charges

### MVP

* Une carte ("plateau de jeu") sur lequel se passe l'action (prototype)
* Deux factions symétriques
* Entités:
    * Batiments de production
    * Unités de production/récolte
    * Unités offensives
* IA des entités:
    * Pathfinding
    * Collision avoidance (gestion des obstacles mobiles dans le pathfinding)
    * Etats: Idle, moving, engaging, engaged, dead en fonction du contexte
    * Gestion de la ligne de vue et de la portée
* Mecanisme de selection des entités (simple et multiple)
* Gestion des ressources
* Brouillard de guère
* GUI (prototype)
    * Menu principale
    * Une interface utilisateur qui contient les éléments suivants:
        * Une mini carte
        * Affichage des ressources
        * Affichage de la population
        * Panneau de selection
        * Panneau des actions de la selection
        * Curseur intelligent dont la forme dépend du contexte

### Si le temps le permet

* IA qui joue l'adversaire
* Diversifications des cartes de jeu
* Génération procédurale de cartes
* Éléments de gameplay (technoogies, amélioration des unités, variété dans les unités)
* GUI moins prototype

## Base de travail

Nathan Latino et Sol Rosca on fait une première tentative d'implémentation d'un RTS (YARTS) en 2e année en utilisant Java et Libgdx. Bien que YARTS (avec un "A") était entièrement 2D en vue topdown, une base de réflexion concernant les points chauds existe déjà. Le rapport de ce projet est accèssible [ici](https://github.com/nathanlatino/yarts/blob/master/doc/Rapport-YARTS.pdf).

LibGDX n'étant pas un moteur de jeu mais un framework, les philosophies de ces deux technologies ne sont pas comparables. LibGDX ne comporte aucune interface et est relativement bas niveau, particulièrement bas niveau en comparaison avec Unity. Dans ces circonstances il est ardu de pouvoir spécifier ce qui vient directement de ce premier projet autrement que le nom ainsi qu'une première expérience dans le développement d'un jeu video.

Depuis l'introduction à Unity, de nombreux petits prototypes de mécanismes ont été mis en place pour servir de base concrète lors de la familiarisation avec Unity. Le projet actuel utilise les connaissances acquises lors de ces expérimentations mais reppart de zero. En effet, les premiers prototypes n'ont pas été pensés pour pouvoir s'intégrer dans une architecture complète et les reprendre en tant que tel aurait posé de nombreux problèmes.

## Assets utilisés

