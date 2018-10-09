---
title: Overview de la notion de thread
date: 2018-09-01
author:  Sol
sidebar: auto
---

##  Notions de base

* Un **programme** est une suite d'instructions (notion statique). On peut le voir comme une classe.
* Un **processus** c'est l'image du contenu des registres et de la mémoire (notion dynamique). On peut le voir comme une instance de classe.

La définition exacte d'un processus c'est:
> Un programme en cours d'exécution auquel est associé un environnement processeur et un environnement mémoire.

* **Espace d'adressage**: Ensemble d'adresses mémoire dans lesquelles un processus peut lire et écrire. Cet espace est divisé en trois parties:
    * Le **segment texte**: code du programme
    * Le **tas** binaire (*heap*, segment de données): les variables dynamiques
    * La **pile**: (*stack*) variables statiques

<Media
    src="https://i.imgur.com/NYpNcTl.png"
    caption="La pile empiète sur le 'trou' de manière automatique et l'extension du segment de données commence lors d'une allocation dynamique. Le segment de texte (le code), quant à lui, ne bouge pas."
    center="true"
    width=450
/>

Lorsqu'un processus est lancé, le système doit gérer la mémoire et l'allocation du processeur lui étant accordée. Il fait appel à l'ordonnanceur (*Scheduler*).

Un système gère le multi tache de façon:
* **Préemptive**: Lorsqu'il peut arrêter (mettre en stand-by) à tout moment n'importe quelle application pour passer à la suivante (XP, 7, GNU/Linux).
* **Coopérative**: Quand il permet à plusieurs applications de fonctionner et d'occuper la mémoire en leurs laissant le soin de se gérer elles mêmes (95, 98, Millenium).

::: warning Info
Les systèmes basés sur Unix sont des systèmes préemptifs.
:::

On parle de:
* **Pseudo-parallélisme**: (monocoeur)Quand le processeur passe d'un programme à un autre en quelques ms, ce qui donne à l'utilisateur une impression de simultanéité.
* **Parallélisme**: (multi-coeur) Quand plusieurs programmes s'éxécutent réellement en même temps.

Sur la majorité des OS à l'exception des systèmes Unix, **processus = nouveau programme**. Autrement dit, la majorité des OS offrent un seul appel-sytème pour exécuter un nouveau programme. Unix en possède deux `fork` et `exec`.

<Spoiler>

Sous Unix:
* **PID**: Process IDentifier: Unique dans le système, sert à identifier un processus.
A la création d'un nouveau processus, on utilise une fonction qui permet de duppliquer le processus appelant. On distingue alors les deux processus par leur **PID**. Dans le contexte du nouveau processus le processus père est noté **PPID** (Parent PID).

* **UID** (User IDentifier): ID de l'user qui a lancé un processus.
> Conventionnellement, plus l'UID est bas, plus l'utilisateur a des privilèges. `/etc/passwd` permet de consulter les UID des utilisateurs de la machine.

</Spoiler>

Les processus sont organisés en hiérarchie. **Chaque processus doit être lancé par un autre**. La racine de cette hiérarchie est le **programme initial**

Le **Processus inactif du système** (System idle process) il a le PID 0. C'est le processus que le noyau exécute tant qu'il n'y a pas d'autres processus en cours d'éxecution. C'est lui qui est en charge de lancer le premier processus que le noyau exécute: Le **programme initial**. Généralement appelé **init** et de PID 1 sur les systèmes Unix.

::: tip Tip
Si l'utilisateur indique au noyau le programme initial à exécuter, celui-ci tente alors de le faire avec quatre exécutables, dans l'ordre suivant : `/sbin/init`, `/etc/init` puis `/bin/init`.

Le premier de ces processus qui existe est exécuté en tant que programme initial. 
Si les quatre programmes n'ont pas pu être exécutés, le système s'arrête : **panique du noyau**...
:::

Après son chargement, le programme initial gère le reste du démarrage: Initialisation du système, lanchement du programme de connexion... Il se charge également de lancer les <Def def="Processus qui est constamment en activité et fournit des services au système">daemons</Def>.


<Media
    src="https://i.imgur.com/BIQKn6w.png"
    caption="diagramme d'états des processus sous Unix."
    center="true"
/>





## Gestion des processus sous Unix

 Une des particularités de la gestion des processus sous Unix consiste à séparer la création d'un processus et l'exécution d'une image binaire. Cette division a permis d'avoir **plusieurs processus pour un même programme**.






## Thread

Dans la majorité des systèmes d'exploitation, chaque processus possède un espace d'adressage et un **thread** de contrôle unique, le **thread principal**. Du point de vue programmation, c'est le **thread principal** qui exécute le main.




