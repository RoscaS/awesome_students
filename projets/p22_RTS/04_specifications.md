---
title: Spécifications
date: 2019-03-04
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: false
hide: false
---


## Définitions haut niveau

### Classe Map

`Clickable checkPixelInClickables(Position position)`:
```py
for clickable in this.allClickables:
  if position fait partie de clickable:
    # Dans ce cas clickable est une Entity
    return clickable 
  else:
    # la map se retourne elle même
    return this
```

### Classe Joueur

`void leftClickEvent(Event e)`

```py
pos = new Position(e.coords.x, e.coords.y)
clicked = Map.checkPixelInClickables(pos)

if clicked est une Entity:
  this.selectedEntities.add(clicked)
else:
  this.selectedEntities.clear()
```

`void rightClickEvent(Event e)`

```py
pos = new Position(e.coords.x, e.coords.y)
clickable_qui_subit = Map.checkPixelInClickables(pos)

for entity in this.selectedEntities:
  entity.priorityList.add(new ActionMove(clickable_qui_subit))
```


### Classe Entity et ses dérivées

* `watchProximity()` (via lbgdx: ContactListener)
  * Si `qqch` est dans ta range:
    * en fonction de ce `qqch`, ajoute l'action liée à ce que tu dois faire vis à vis de ce `qqch` dans ta liste d'actions à effectuer.

<br>
    
* `watchActions()`
  * il y a qqch dans ta `priorityList` ?
    * si oui, fais la première action
    * si non, `self.WatchActions()`

## Use case

### Joueur clique gauche sur un point de la carte

#### Le point appartient à une entité
* alors: `selectedEntities` de `Joueur` contient une `Entity`

#### Le point n'appartient à aucune `Entity`
* alors: `selectedEntities` de `Joueur` est vidée


### Joueur clique gauche sur un collecteur puis clique droit sur une ressource

**A REFAIRE**


* **Joueur clique gauche sur un collecteur puis clique droit sur une ressource**
  * **Joueur clique gauche sur un collecteur**:
    * Dans `Joueur`
      * `joueur.selectedEntities.add(Collecteur)`
* **Joueur clique droit sur une ressource**:
  * Dans `Joueur`:
    * `pos = new Position(mouse_right_click_event.coords.x, mouse_right_click_event.coords.y)`
    * `entité_qui_subit = Map.checkPixelInClickables(pos)`
    * Dans `Map`:
      * `Clickable checkPixelInClickables(Position)`
        * itère sur `Map.allClickables` à la recherche de `Position`
        * si `Position` appartient à un `Clickable`
          * alors, retourne `Clickable`
        * si non
          * retourne `self`
  * **Dans `Joueur`:
    * nous avons maintenant les deux oppérandes de l'action:
      * Celle qui effectue (admétons qu'il n'y a qu'une unite dans la liste `selectedEntities`)
      * Celle qui subit
    * `selectedEntities.at(0).priorityList.add(new ActionMove(entité_qui_subit))`
  * **Dans `Worker`:
    * la methode `Entity.watchActions()` va call l'action `ActionMove(entité_qui_subit).doAction()`


<br>
<br>



## En vrac

* Joueur selectionne worker
  * unité append liste des entités selectionnées dans `Joueur`
* Joueur clique droit sur une ressource
  * le clique droit retourne le pixel cliqué
  * appel de la methode `Entity Map.test_appartenance(pixel)`
    * `test_appartenance` itère sur toutes les entités et vérifie si le pixel appartient à une entité
    * Si oui, alors retourne l'entité
    * Si non, retourne `nullptr` (et donc un déplacement sera fait)
  * appelle la methode `right_click(entité_retournée_par_test_appartenance)` des entités dans la liste des entités selectionnés de joueur.


### Points chauds

* File de priorité des actions: bouge jusque là, une fois que tu y est, fais cette action
* Range: circulaire? (donc la hitbox peut l'être aussi)

### Idées

* Entity, Map et leur relation avec le client pourrait être une magnifique mise en pratique du patterne composite
* Map et Game serait interessant sous forme de Singleton (global) ?
  * `checkPixelInClickables()` devrait être statique pour pouvoir être call depuis player





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
    * Dans un premier temps une faction adverse sans inteligence sera utilisé pour tester les capacités offensives.
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
  * **Mobile**
    * Unités
      * Appartient à un joueur
      * Possède un nombre de points de vie
      * Se déplacent
      * Peuvent être de deux types:
        * Utilitaire: 
          * Récolte des ressources
          * Construit des batiments
        * Offensif:
          * Peut attaquer 

### Récolte
La ressource récoltable est le nerf de la guerre. Elle se trouve en quantité limité sur la carte dans des cellules contigues dont l'affichage reflète cette état.

Ces cellules possède un certain nombre de points de ressource et sont épuisables. Un click sur la cellule permet d'avoir des information sur sa quantité de ressouce. 

Ces ceullues peuvent être exploitées par une **unité utilitaire** qui peut transporter un nombre finit de ressource. Chaque unité de temps $t$ une resource est transférée de la cellule à l'unité utilitaire. Une fois plein, l'unité utilitaire retourne automatiquement au batiment principal (base) et les ressources qu'elle contient sont transférées au pool de ressource du joueur. 

Pour initier ce méchanisme, le joueur doit selectionner une ou plusieurs unitées utilitaires et cliquer droit sur une cellule contenant des ressources.

Ce méchanisme se poursuit tant que le joueur ne selectionne pas une des unité utilitaire à la tache et ne la déplace sur une cellule sans ressource.

Une fois la ressource épuisee, la cellule devient une cellule vide (sa texture change en conséquant).

### Inputs

* Selections:
  * click gauche sur une entité permet d'afficher des informations la concernant.
  * click gauche maintenu permet de faire un cadre de selection qui selectionne plusieurs entités mobiles crées par le joueur.
  * click droit sur une entité sans selection préalable ne fait rien.
  * click droit sur une entité avec une selection:
    * si l'entité possède des points de vie et n'est pas de l'équipe du joueur, donne l'ordre d'attaquer.
    * si l'entité est amie, elle s'y rend.
    * si l'entité est un élément de décor, ne fait rien.
  * click droit sur une cellule vide avec une selection:
    * la selection s'y rend.
* Déplacement de la camera:
  * avec les touches fléchées du clavier (NSEW + diagonales)
      
### Déroulement d'une partie

Au début d'une partie, le joueur se retrouve au commandement d'un batiment principale ainsi que une petite troupe ($n$ à définir) d'unitées utilitaires. Un certain nombre de crédit (ressource) lui sont alloués. Le batiment principal permet de produire de nouvelles unitées utilitaires qui elles mêmes peuvent construire des batiments de production d'unitées offensives ou des batiments utilitaires pour augmenter la population. Le batiment principal offre une certaine limite de population qu'il est nécessaire de faire augmenter au fur et à mesure de la production d'unitées. Cette augmentation de la population se fait par la construction de nouveau batiments utilitaires ("maisons").

Pour assurer sa pérénité, il est nécessaire que le joueur investisse des unitées utilitaires dans la récolte de ressources qu'il investira dans de nouvelles unitées utilitaires ou des batiments de production d'unitées offensives pour au final amasser une armée suffisante pour détruire le joueur advèrse.