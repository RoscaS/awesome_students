---
title: Paradigmes de programmation
date: 2018-09-26
sidebar: auto
author: Sol
---

## Programmation séquentielle (dépendance causale)
Sur un seul thread, l'execution est :
* séquentielle
* prévisible
* reproductible
* anticipable

## Programmation concurente (indépendance causale)
Ce paradigme tient compte de plusieurs contextes d'execution (**thread**, **processus**, **tache**) matérialisés par une **pile d'exécution (stack)** et des données qui lui sont privées.

::: warning Attention !
Chaque thread a son propre contexte et sa propre pile.
:::

Dans le cas où on a deux ou plusieurs threads qui coopèrent on parle de:
* Application multi-multicontexte (**multi-threaded**)
* Application parallèle
* Appication distribueée

Plusieurs instructions peuvent s'exécuter en même temps.

## Avantages et inconvénients

### Avantages
* Optimisation de l'utilisation du/des processeur
* Evite de bloquer sur les in/out
* Tirer proffit du multi coeur
* Permet le parallélisme (Répartition des calculs)
* Attente sur plusieurs entrées
* Permet l'utilisation de programmes multitache
  * Un thread gère l'affichage
  * Un autre écoute sur un socket réseau

### Inconvénients et problèmes
* Partage des ressources et leur gestion
* Difficulté à synchroniser les taches
  * Le controle de l'ordre d'exécution des taches est très important
* Programme moins prédictible...
* ... et reproductile

## Processus et Threads
### Processus 
Plusieurs procéssus peuvent s'éxecuter en parallèle et sont tous gérés par l'os.
Un procressus possède:
* Un code à exécuter
* Un espace d'adressage
* Une priorité
* Un identifiant
* Un contexte d'exécution (program counter (PC) + registres)

#### Cycle de vie
...