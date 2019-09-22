---
title: Overview
date: 2019-09-20
author:  "Nathan, Sol"
sidebar: auto
project: false
hide: false
---

## In a nutshell
SwipeD est une application Android qui a pour but de faire prendre conscience à l'utilisateur de la distance qu'il swipe sur son smartphone.

## Préambule
Ce projet serait un projet commun aux cours d'Android et de Web. Les lignes qui suivent sont le fruit de nos recherches préliminaires concernant le faisabilité de ce projet.

## Android
Un service tournant en background et utilisant [GestureOverlayView](https://www.techotopia.com/index.php/Implementing_Android_Custom_Gesture_Recognition_with_Android_Studio#The_GestureOverlayView_Class) ainsi que `onTouchEvent` pour calculer et sommer la distance que l'utilisateur swipe depuis l'activation de l'application. 

Pour permettre à l'utilisateur de prendre conscience de ce que représente cette valeur, nous avons imaginé un système de gamification:

Idéalement, l'utilisateur devrait activer l'application à partir de son domicile afin de le localiser et à l'aide de [PlacesAPI](https://developers.google.com/places/web-service/intro) trouver des points d'interet tel que l'église du village, la gare, la grande ville la plus proche, la capitale de son pays, ... Ces points d'interets seraient donc des repères lui étant familiers. À l'aide d'une notification, l'application l'averti lorsqu'il atteint une distance équivalante en swipant sur son écran. Cette notification pourrait ressembler à "Félicitation, vous avez atteint $A$ ce qui représente $n$km de swipe. Plus que $m$km avant d'atteindre $B$.

En plus de ces notifications, à tout moment l'utilisateur peut ouvrir l'application et consulter des données plus détaillées:
* Overall
* Today
* Last week
* Charts
* Carte reliant les points d'interets avec un overaly de ce qui a déja été fait
* ...

## Web
Un backend centralise les informations de tous les utilisateurs de l'application et expose une API que l'application Android ainsi qu'une application Web consomment.

L'application web permet aux utilisateurs de consulter plusieurs classements "Région, pays, (amis)" ainsi que des charts plus globales tel que:
* Total swipé par les gens de ma région
* Total swipé par pays
* Heure de la journée la plus/moins swipée
* ...

## Notes
* Il est évident qu'un travail de recherche concernant la confidentialité des données devra être fait. 
* Concernant l'application Android, il existe des applications tournant en arrière plan et ayant accès aux données de swipe existent. Ces applications nécessite une autorisation particulière de l'utilisateur.

## Prototypes

### Androide

#### GestureOverlayView

* <st c="r">Todo</st>
* [It's doable !](https://www.techotopia.com/index.php/Implementing_Android_Custom_Gesture_Recognition_with_Android_Studio)


#### onTouchEvent

Quelques lignes de Java nous permettent d'arriver à ce premier résultat: [vidéo sur imgur](https://imgur.com/lDA0Hpo).
