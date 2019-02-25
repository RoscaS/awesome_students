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

* **Menu principal**
* Scène de jeu
  * Deux joueurs
  * Layout
    * aggrégation de cellules
      * vide
      * obstacle
      * ressource
        * unique
    * batiment(s)
    * unité(s) offensive(s)
    * unité(s) utilitaire(s) (péon)
* **Interface utilisateur**
  * Mini map
  * Ressources
  * Population
  * Action spéciale
    * En fonction de l'entité selectionnée
      * affiche ce qu'elle peut construire, entrainer, améliorer
  * curseur intelligent
  * cadre de selection
  * Options
    * settings
      * volume
      * resolution
      * username
    * goto lobby (deco)
    * exit
* **Network**
  * 1v1 (pvp)
  * client**s** <Fa fa="arrow-right"/> serveur


## Objectifs secondaires

