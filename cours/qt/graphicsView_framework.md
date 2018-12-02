---
title: GraphicsView Framework
date: 2018-11-29
author: Sol
sidebar: auto
project: false
---

## Intro

Le dessin direct sur les widgets vu dans l'article sur les graphismes 2d possède certaines limitations comme l'affichage et le rafraichissement de nombreux éléments.

GraphicsView est un framework optimisé et basé sur le parardigme MVC. Le développer place des items (`QGraphicsItem`) dans une scène (`QGraphicsScene`), peut modifier leurs attributs et **le rendu se fait automatiquement** dans une vue (`QGraphicsView`), qui permettra également d'interagir avec l'utilisateur.


Même si au final le rendu de la view est fait avec les mêmes outils que pour les widgets (`QPainter`, `QPaintDevice`, ...), cette architecture permet d'optimiser les rendus et donc d'afficher et animer un plus grand nombre d'objets. Le framework fournit également des outils supplémentaires pour l'animation, la gestion de la collision, le drag'n dro, ...


##  Comparaison Widgets/GraphicsView Items

| Widget                 | Item                                   |
| ---------------------- | -------------------------------------- |
| Rectangulaire          | N'importe quelle forme                 |
| Non superposables      | superposables                          |
| Look plateforme native | Optimisé pour les animations et effets |
| Coordonnées entières   | Coordonnées flottantes                 |




