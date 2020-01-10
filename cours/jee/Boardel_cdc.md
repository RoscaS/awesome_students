---
title: Cahier des chargs Board'el
date: 2020-01-10
author:  Sol, Nathan, Erwan
sidebar: auto
project: true
hide: false
---

##  Overview


Notre projet est un forum de discussion (à l'ancienne). Un forum contient des catégories. Dans chaque **catégorie**, un **utilisateur** peut démarrer un fil de discussion en créant un **topic**. Dans chaque topic, d'autres utilisateurs peuvent poster une réponse au fil de discussion. Un **Admin** ou un **Staff** peuvent modérer les disccussions et Admin est le seul à pouvoir créér de nouvelles catégories.

## Architecture

* REST

Si possible d'intégrer VueJS avec Spring sans bricoler une application monolithique sera envisagée dans le cas contraire une achitecture REST sera employée. Les tests seront faits principalement sur le backend et si il reste du temps des tests frontend seront envisagés.

## Technologies

* Backend: Spring (Kotlin)
* Frontend: VueJs + Nuxt (Javascript)
* Style: Vuetify (Material design)

## Methodologie

* Test-Driven: Les tests sont écrits avant l'implémentation d'une feature et ce de façon itérative pour tout le projet.

## Use case

![Image](https://i.imgur.com/rqmaSKJ.png)

## Modèles

Pour implémenter le précédent Use case, il est nécessaire d'au moins avoir les modèles suivants: **Forum**, **Topic**, **Post** et **User**:

![Image](https://i.imgur.com/oQWx9FB.png)


## Wireframe

Ce n'est pas ce à quoi ressemblera le forum mais plus une indication pour se faire une idée. Des champs de recherche seront disponible ainsi que de la pagination.

* /home:
![Image](https://i.imgur.com/Lmros1D.png)

* /boards/category-slug
![Image](https://i.imgur.com/vSHefPm.png)

* /boards/category-slug/create
![Image](https://i.imgur.com/FRl25Nr.png)

* /boards/category-slug/topic/topic-id
![Image](https://i.imgur.com/Pkd7sMT.png)

* /boards/category-slug/topic/topic-id/reply
![Image](https://i.imgur.com/wYI5ku7.png)