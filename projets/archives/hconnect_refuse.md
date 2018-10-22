---
title: "HConnect: Refusé"
date: 2018-10-22
author: Michael, Nathan, Sol
sidebar: auto
---

# QT projet HConnect

Interface graphique pour se connecter au VPN de l'école sous linux.

## Collaborateurs

* Kneuss Michael
* Latino Nathan
* Rosca Sol


## Contexte

L'utilisation de Cisco Anyconnect est un problème pour de nombreux utilisateurs Linux. [OpenConnect](http://www.infradead.org/openconnect/) est une aternative open source qui semble avoir globalement de meilleurs résultats en plus d'être conseillée par M. Schaefer.

Il existe une démarche pour utiliser ce client au sein de l'école mais la procédure est fastidieuse, légèrement dépréciée et dépendante du système. Nous pensons que de nombreux utilisateurs débutants qui veulent tenter l'aventure Linux plus que via machine virtuelle se retrouvent découragés par cette procédure qui demande une certaine habitude du combo recherche/bricolage caractéristique des systèmes Linux.

À l'heure actuelle il n'existe pas d'interface graphique pour ce client et nous pensons que c'est un projet qui nous serait non seulement personnellement utile mais qui pourrait profiter à la communauté internet si l'HE-Arc nous autorise à la distribuer.

## Argumentation
Nous choisissons ce projet car nous aimons l'idée de créer un outil utile, potentiellement aboutit et délivrable d'ici la fin de l'échéance. Il nous est difficile de juger les difficultés sur le chemin, nous savons que c'est possible mais il n'existe pas d'API toute faite du coté d'OpenConnect pour nous faciliter la tâche.
Nous comprenons vos attentes pour ce projet P2, une application avec de l'animation et gestion des widgets QT. En effet, dans ce contexte un jeu serait plus adapté mais permettez nous de défendre notre idée en avançant les points suivants:

1. Même s'il est évident que ce projet se basera moins sur les parties graphiques qu'offre Qt, nous comptons utiliser d'autres modules et classes de l'écosystème Qt probablement moins utilisées traditionnellement par les élèves comme: Qt Network et Qt Charts.
2. Notre objectif principal est d'avoir une interface standard, propre et intuitive qui interface les divers programmes que nous devrons écrire pour proposer les fonctionnalités fixées dans la partie "Objectif" de ce document. Toute la partie UI/UX est à notre avis un point crucial largement mis en avant dans vos cours et teste notre capacité à faire abstraction de nos goûts et préférences pour satisfaire à des standards. 
3. L'échelle de ce projet n'est peut-être pas la même que celle d'un jeu mais nous pensons pouvoir délivrer un projet finit et exploitable par le monde au terme de l'échéance. Cette perspective nous semble difficilement atteignable avec un jeu.
4. Nous proposons des objectifs plus axés sur de l'animation et de l'esthétique une fois nos objects principaux atteints. Nous n'en faisons pas une priorité car il est à notre avis essentiel d'avoir une interface solide avant d'ajouter une couche de complexité esthétique.


## Fonctionnalités

### MVP (minimum viable project)
* Connexion au VPN de l'école (de l'extérieur)
* Authentification sur le réseau de l'école (de l'intérieur)
* Choix des lecteurs à mount + hot plug
* Système d'authentification (QAuthenticator)
* Interface dynamique en fonction du status (connecté/déconnecté)


### Objectif
MVP ainsi que les points suivants:

* Widgets animés qui réagissent à l'état du réseau avec possibilité de changer le "thème". Quelques idées:
    * Type Jauges (couleurs, animation de remplissage)
    * Type compteur
* Monitoring (plus complet que les widgets) avec un affichage réglable des données (text, plot, les deux)
    * Cashing des données réglable par l'utilisateur 
    * Affichages de statistiques
* Réduction de l'application dans la zone de notifications 
    * Icone dynamique par rapport à l'état du réseau


### Fonctionnalités supplémentaires
* Connexion possible à tout VPN
* Personnalisation (thème)
    * Palettes à choix
    * Edition de palettes
    * Style général

* Animations du menu
    * Fade des textes qui changent en fonction de l'état de l'application
    * Transition des éléments d'interface

* Fichier de configuration éditable à partir de l'interface avec possibilité d'export/import
