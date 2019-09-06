---
title: "SNASE Cahier des chargers"
date: 2019-08-19
author:  "Sol"
sidebar: auto
project: false
hide: true
---

## Vue d'ensemble

Site applicatif clé en main administrable:
* **Applicatif**: Application dynamique, les utilisateurs créent et modifient du
contenu mis à jour dynamiquement.
* **Clé en main**: Le site livré est autonome, le contenu des parties
statiques est modifiable sans nécéssiter de maintenance de la part du
développeur.
* **Administrable**: Le contenu dynamique est moderable et modifiable par un
ou plusieurs administrateurs. Un super administrateur a la possibilité
d’ajouter des permissions à des utilisateurs.

Le site sert de **plateforme de coordination** pour la Section Neuchâteloise de l'Association Suisse des Ergothérapeutes (SNASE). Les visiteurs y trouvent des informations sous forme d'**articles** répartis dans des **catégories** et rédigées par les **modérateurs** du site. Les visiteurs peuvent également consulter la base de données des érgothérapeutes et des associations du canton via une **fonction de recherche**. La partie publique du site possède une accessibilitée accrue en proposant à tout moment d'augmenter la taille du contenu. Il est également possible de passer la partie publique site en mode "**high contrast**". La page d'arrivée du site (landing) contient une **section "Bienvenue"** avec une brève description de ce qu'est la SNASE, une **Section highlight** qui contient les articles "vedette" selectionnés par les modérateurs et un **formulaire de contact**.

Les différents rôles des membres de l'application sont:
* Administrateur (unique)
* Chef d'association (modérateur, un par association)
* Ergothérapeute (membre)

La base de donnée contient des **ergothérapeutes** qui peuvent appartenir à un **groupe** (association d'ergothérapeutes). Les deux sont des entités distinctes de la base de donnée. Chaque groupe possède un **modérateur** qui est en charge de la page publique du groupe. Ce dernier peut **inviter** les membres de son association par email qui deviennent membres (ergothérapeute) du site. Il peut également **supprimer** un membre de son groupe. Un ergothérapeute qui ne possède pas de groupe possède sa propre page publique qu'il est en charge d'administrer. Il peut faire la **demande** à l'administrateur du site pour créer un groupe dont il sera automatiquement le modérateur. Si la demande est acceptée, la page publique de l'ergothérapeute ne sera plus accessible et il lui sera nécessaire de créer la page publique du groupe nouvellement créé.

La fonction de recherche ne retourne un ergothérapeute que si il est indépendant (ne fait pas partie d'un groupe). Si ce dernier fait partie d'un groupe, c'est son groupe qui est retourné.

Une **partie privée** du site doit permettre à l'administrateur du site de **gérer les articles** ainsi que les membres du site (voir spécifications pour plus de détails). L'administrateur est également en charge de la composition des **newsletters** qu'il peut envoyer à des groupes spécifiques où a la totalité des membres du site.
Les modérateurs ont accès à une partie privée réduite qui leur permet de gérer les informations de leur groupe ainsi que leurs membres.

> Les spécifications contiennent les détails de la présente vue d'ensemble.


## Récapitulatif

* Accessibilité (partie publique)
  * Taille des polices dynamiques
  * Option high contrast
* Recherche avancée
  * Filtres
  * Autocompletion
* CMS (Catégories et articles)
  * Éditeur markdown intégré
  * Ajout, édition, suppression 
* Administration
  * Gestion des membres
  * Gestin des groupes
  * Gestion des zones de traitement (voir spécifications)
  * Gestion des spécialités des ergothérapeutes (voir spécifications)