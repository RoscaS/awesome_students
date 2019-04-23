---
title: "Programmation concurrente tp4: Smart city"
date: 2019-04-22
author:  "Nathan, Sol"
sidebar: auto
project: true
hide: false
---

# Project 4 : Smart City

## Objectifs
* Réalisation d’un programme utilisant Java et java.util.concurrent
* Résolution d’un problème de concurrence à travers les variables de condition et les moniteurs
* Simulation de la gestion des bornes de location de vélo dans une ville intelligente
* Deux version du programme: Une utilisant _reentrantlock_ et une autre qui utilise les sémaphores.

## Introduction

Il est demandé de simuler la gestion des sites d'emprunt de vélos d'une ville intelligente à l'aide d'un programme Java. Cette ville possède plusieurs sites équipés d'un même nombre fix de bornes pouvant accueillir un nombre également fix de vélos.

Une ville intelligente nécessite un monitoring des individus qui utilisent ses infrastructures. Dans ce laboratoire **chaque individu est représenté par un thread** et a la capacité de se déplacer entre chaque site en utilisant un des vélo mis à disposition par la ville.

Il existe également un service d'entretient **lui aussi représenté par un thread** qui tourne entre les sites pour équilibrer le nombre de vélo de chaque site.

Ces propriétés impliquent une utilisation concurrente de certaines ressources et il est donc demandé de résoudre ce problème de deux façons différentes:
* Une soltion utilisant `ReentrantLock`
* Une solution utilisant `Semaphore`

## Conception

### Comportements

Les acteurs principaux du présent scénario sont les habitants ainsi que le service d'entretient qui possèdent les comportements suivant:

#### Habitant

Un habitant possède un point de départ ainsi qu'une destination attribué de façon aléatoire excluant que les deux points soient identiques. Il répète ensuite indéfiniment l'algorithme suivant:

* Si un vélo est disponible, entame le trajet vers la destination.
* Si non, attends qu'un vélo se libère.
 
<br>

*  Effectue le trajet d'une durée aléatoire.

<br>

* Si la destination possède une borne libre, dépose le vélo.
* Si non attends qu'une place se libère.

<br>

* S'occupe sur le nouveau site pendant un temps aléatoire.
* Une nouvelle destination est attribuée.

#### Service d'entretient

Le service d'entretient a comme point de départ un site particulier qu'il est le seul à pouvoir visiter: Le dépôt. Contrairement aux habitants, ses destinations ne sont pas aléatoires et consistent en une tournée déterministe de chaque site et répète indéfiniment l'algoritme suivant:

* Prendre un certain nombre de vélos du dépôt.
* Pour chaque site de la ville:
    * Si le nombre de vélos $n$ est inférieur ou suppérieur à un nombre idéal $i$ de vélos sur un site et si la quantité de vélos tranportés le permet, tenter de faire tendre $n$ vers $i$.
* Retourner au dépôt.
* Vider le camion.
* Faire une pause d'une durée aléatoire.
 
## Réalisation

### Architecture

Avant l'implémentation des deux programmes, le code a été réécrit pour tirer profit de l'OOP, rester DRY et se l'approprier.

La nouvelle structure est décrite par le diagramme suivant:


<Media
    src="https://i.imgur.com/ARUPElk.png"
    caption="Architecture"
    center="true"
/>


* Une classe abstraite `Entity` a été créée avec des fonctionnalités de base de `Truck` et `Person`.
* l'interface `Site` a été remplacée par une classe abstraite pour permettre une implémenation des méthodes communes de `Place` et `Depot`.
* Une classe abstraite `BaseJob` a été ajoutée pour pouvoir séparer la partie qui met à jour le rendu visuel et la logique des deux autres classes thread `PersonJob` et `TruckJob`.
* Une «classe static» `Settings` a été créée pour permettre l'accès aux valeurs par défaut et aux constantes utiles à travers tout le programme. Cette dernière contient également la logique qui gère l'user input et son traitement.

 
### ReentrantLock
Le Reetranlock permet une meilleure performance et une meilleure gestion que l'utilisation d'un bloc `sychronized`. Il permet également de donner certaines conditions ainsi que des attentes passives avec des signaux.

Dans notre projet, chaque `Place` détient un `ReetrantLock` avec deux `Condition`:
* La première condition permet de bloquer quand une personne attend un vélo avec `await()`. Il envoie un signal à la deuxième condition quand celui-ci a pris un vélo. 
* La seconde permet le blocage d'une personne qui attend de pouvoir déposer son vélo et se charge également de l'envoie d'un signal au premier `await()`

Les personnes sont traitées dans l'ordre d'arrivée par l'utilisation du `fair` du `ReetranLock`. 

La camionnette n'a pas besoin d'attendre, elle peut directement agir sur les sites sauf si un autre thread modifie et/ou lit la variable `availableBikes` qui est protéger par `AtomicInteger`. Cette dernière contient le nombre de vélo détenus par un site et est un `AtomicInteger` ce qui permet d'éviter les problèmes de concurrence.


Pour ces deux implémentations, nous avons commencé par la méthode `ReentrantLock` et ensuite nous l'avons adapté pour l'implémentation du `Semaphore`.


### Semaphore

Deux `Semaphore` sont déclarés dans la classe `Place` initialisés avec la taille des slots de chaque place. Le premier est en charge du nombre de vélo utilisable et le second se charge du nombre de place libres.

Tout comme le `ReentrantLock`, `Semaphore` a aussi la possibilité d'être `fair` et de donc de donner la priorité au premier thread mis en attente. Pour cette version du code, la variable `availableBikes` est toujours un `AtomicInteger`.

## Utilisation

```shell
$ java -jar <versionName>.jar <sites> <citizen> <slots> <bikes>
```

::INFO

Les arguments sont passés au programme à la ligne de commande et validés par des membres de la classe `Settings`. En cas d'input invalide l'usage est affiché:

```shell
usage: SmartCity <sites> <citizen> <slots> <bikes>
	sites:   	Number of sites       	integer [2; 15]
	citizen: 	Number of citizen   	integer [1; 15]
	slots:   	Slots per site        	integer > 4
	bikes:   	total number of bikes 	bikes >= sites*(slots - 2) + 3
```

::

## Logging

Tout le long de l'exécution un log des activités défile dans la console dont voici un extrait:

```
Oliver	current state: BIKE	journey: [MAGASIN -> BOUCHERIE]
Guille	current state: BIKE	journey: [BOUCHERIE -> TRAVAIL]
Louise	current state: BIKE	journey: [TRAVAIL -> ECOLE]
Marcel	current state: BIKE	journey: [TRAVAIL -> ECOLE]
Margee	current state: BIKE	journey: [BOUCHERIE -> ECOLE]
Noelle	current state: BIKE	journey: [PISCINE -> ECOLE]
Robert	current state: BIKE	journey: [BOUCHERIE -> PISCINE]
Benben	current state: BIKE	journey: [TRAVAIL -> PISCINE]
Adrien	current state: BIKE	journey: [MAGASIN -> BOUCHERIE]
Hedvis	current state: WAIT	journey: [BOUCHERIE -> MAGASIN]    /!\ waiting

 <TRUCK>	leave DEPOT	(6/6)	 has: 2/4 bikes loaded

Benben	current state: WORK	journey: [TRAVAIL -> PISCINE]
Adrien	current state: WORK	journey: [MAGASIN -> BOUCHERIE]
Hedvis	current state: BIKE	journey: [BOUCHERIE -> MAGASIN]
Louise	current state: WORK	journey: [TRAVAIL -> ECOLE]
Noelle	current state: WORK	journey: [PISCINE -> ECOLE]
Robert	current state: WORK	journey: [BOUCHERIE -> PISCINE]
Adrien	current state: WAIT	journey: [BOUCHERIE -> MAGASIN]    /!\ waiting
Marcel	current state: WAIT	journey: [TRAVAIL -> ECOLE]        /!\ waiting
Margee	current state: WAIT	journey: [BOUCHERIE -> ECOLE]      /!\ waiting
Guille	current state: WORK	journey: [BOUCHERIE -> TRAVAIL]
Oliver	current state: WORK	journey: [MAGASIN -> BOUCHERIE]
Adrien	current state: BIKE	journey: [BOUCHERIE -> MAGASIN]
Benben	current state: BIKE	journey: [PISCINE -> MAGASIN]
Louise	current state: BIKE	journey: [ECOLE -> PISCINE]
Marcel	current state: WORK	journey: [TRAVAIL -> ECOLE]

 <TRUCK>	leave ECOLE	(1/6)	 has: 4/4 bikes loaded

Hedvis	current state: WORK	journey: [BOUCHERIE -> MAGASIN]
Guille	current state: BIKE	journey: [TRAVAIL -> MAGASIN]
Robert	current state: BIKE	journey: [PISCINE -> ECOLE]
Adrien	current state: WORK	journey: [BOUCHERIE -> MAGASIN]
Marcel	current state: BIKE	journey: [ECOLE -> BOUCHERIE]
Margee	current state: WORK	journey: [BOUCHERIE -> ECOLE]

 <TRUCK>	leave TRAVAIL	(2/6)	 has: 1/4 bikes loaded

Margee	current state: BIKE	journey: [ECOLE -> TRAVAIL]
Oliver	current state: WAIT	journey: [BOUCHERIE -> TRAVAIL]    /!\ waiting
Benben	current state: WORK	journey: [PISCINE -> MAGASIN]
Noelle	current state: BIKE	journey: [ECOLE -> MAGASIN]
Louise	current state: WORK	journey: [ECOLE -> PISCINE]
Robert	current state: WORK	journey: [PISCINE -> ECOLE]
Benben	current state: BIKE	journey: [MAGASIN -> TRAVAIL]
Hedvis	current state: BIKE	journey: [MAGASIN -> BOUCHERIE]
Guille	current state: WORK	journey: [TRAVAIL -> MAGASIN]
Marcel	current state: WORK	journey: [ECOLE -> BOUCHERIE]
Oliver	current state: BIKE	journey: [BOUCHERIE -> TRAVAIL]
```

## Conclusion
Dans le contexte de cette application, les deux approchent sont identiques tant au niveau des performances que du rendu final. La nouvelle architecture du programme met en évidence leur utilisation fort similaire ce qui rend difficile le choix d'une approche favorite. 

De manière générale, l'approche `ReetrantLock` permet beaucoup de flexibilité via un panel riche de méthodes et de fonctionnalités mais se révèle verbeux d'utilisation.

Le sémaphore est moins invasif mais son utilisation implique la répétition d'une variable déjà instanciée et induit donc une certaine redondance.

Ces deux méthodes sont une meilleure approche que l'utilisation de `synchonized` qui lui a un impacte non négligeable sur les performances du programme.

## Sources

* Cours du Prof. Rizzotti (He-Arc Neuchâtel)
* [baeldung](https://www.baeldung.com)
* [paumard.org](http://blog.paumard.org)
* et google :)
