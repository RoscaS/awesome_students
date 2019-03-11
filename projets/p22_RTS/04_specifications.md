---
title: Spécifications
date: 2019-03-04
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: false
hide: false
---

## Introduction

Le jeu de stratégie en temps réel (STR ou RTS pour la dénomination du genre en anglais : real-time strategy) est un type de jeu vidéo de stratégie particulier qui notamment et par opposition au jeu de stratégie au tour par tour n’utilise pas un découpage arbitraire du temps en tours de jeu, ce n’est toutefois pas le seul élément qui fait d’un jeu de stratégie un STR.

Le principe de base des jeux de stratégie en temps réel est défini par le concept du _récolter_, _construire_, _détruire_ et par les règles.

Le joueur doit gérer des ressources, développer des bases et créer des unités pour combattre l’adversaire. 
L’action se déroulant en temps réel, le joueur ne dispose que d’un temps limité pour gérer ses ressources et 
ses bases et contrôler ses unités, ce qui introduit les notions de rapidité et de micromanagement en plus de la 
dimension stratégique. Le contrôle se fait à la souris et au clavier.

* sourcer (wikipedia)

## Spécifications détaillées

Le but étant de réaliser un moteur viable dans un temps limité, seul les éléments essentiels du genre seront impléntés.

### Jeu
* **Meta**:
  * Plateforme: desktop
  * Langage de programmation: Java
  * Framework: libGDX
  * Joueurs: 1 joueur humain (dans un premier temps)
  * Contexte scénaristique: Aucun (le jeu sera dans un premier temps générique)
* **Caractéristiques**:
  * Population limitée
    * Nécessité de construire des "maisons" pour augmenter la limite
  * **Ressources**:
    * Un type de ressource unique
    * Sert à finnancer la production de batiments et d'unités
    * Recoltable sur la carte en quantité limité


### Carte
La carte est l'air de jeu. C'est une aggrégation de cellules sur un plan orthonormé d'une certaine taille. C'est sur la carte que se passe l'action du jeu.

* **Cellule**:
  * Est repérée par une position x/y
  * Une cellule est un conteneur
  * Une cellule peut contenir un unique élément parmis plusieurs types d'entités:
    * Du vide
    * Un obstacle naturel
    * Une ressource
    * Une entité appartenant à un joueur
  * Un joueur peut influencer sur une cellule avec des:
    * Entités statiques
    * Entités mobiles

### Entités

* Naturelles
  * **Interactives**
    * Un élément qui peut être récolté (une ressource)
      * Une ressource possède une quantité définie non rechargeable de points de cette ressource que les joueurs doivent récolter.
  * **Décor**
    * Un élément figé, il n'est pas destructible ou collectible
    * C'est principalement un obstacle, une zone où la contruction et le déplacement sont impossible
* Créées par le joueur
  * **Statique**
    * Batiments
      * Appartient à un joueur
      * Possède un nombre de points de vie
      * Peuvent être de deux types:
        * De productions: production d'unités
        * Utilitaires: Augmente la population maximum
      * 
      
  * **Mobile**


### Déroulement d'une partie


