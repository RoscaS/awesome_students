---
title: MVC Orienté object (php)
date: 2018-12-21
author:  "Sol, Michael"
sidebar: auto
project: true
---

# Framework MVC (PHP)

## ATTENTION !
* Sur la branche *master* (ainsi que *app*) se trouve l'application *Tasks* faite à l'aide du framework.
* Sur la branche *framework* se trouve le framework "bare bones" prêt à accueillir une application.

Pour tester l'application il est nécessaire d'avoir une base de donnée (SQL) comportant le schéma suivant:
![Image](https://i.imgur.com/1meVyHc.png)

* Un dump d'une BDD valide pour l'application se trouve à la racine.
  * Utilisateur: **sol**
  * mdp: **poule**

##  Consignes
* À rendre le **dimanche 13 janvier à 23h59** (sera évalué). 
* Exercice d'intégration MVC / POO PHP
  * Par groupe de 2
  * Travailler dans le repo GIT et faire souvent des commit/push avec des messages de commit utiles

Détail des consignes [ici](https://ssl.horus.ch/~schaefer/bin/view/HEArc/RenduMVCPOOPHP)

## Conventions
* **Nommage**
  * Fonctions et variables: camelCase
  * Classes: CapWords
* **Langue**
  * Le framework ainsi que tous les noms de fichiers sont écrits en anglais
  * Les messages d'erreur sont écrits en anglais 
  * Les commentaires et la documentation sont temporairement en français


## Git flow

master <- staging <- WIP-branches


## Navigation & Interactions

<Card header="root" :title="true" max-width="700">

* `/`: 
  * redirect sur `/register/login` si pas connecté et pas de possibilter d'identifier via session/cookie
  * redirect sur `/tasks` si connecté


* `/home` 
  * redirect sur `/`

</Card>

<Card header="register" :title="true" max-width="700">

* `/register` 
  * redirect sur `/register/login`


* `/register/login` _loginAction_

* `/register/logout` _logoutAction_ **protégé**
  * redirect sur `/register/login` si pas connecté et pas possible d'identifier via session/cookie


</Card>


<Card header="taks" :title="true" max-width="700">

* `/tasks` `index` **protégé**
  * redirect sur `/register/login` si pas connecté et pas possible d'identifier via session/cookie


* `/tasks/add` _addAction_ **protégé**
  * redirect sur `/tasks` après l'action


* `/tasks/update` _updateAction_ **protégé**
  * redirect sur `/tasks` après l'action


* `/tasks/delete` _deleteAction_ **protégé**
  * redirect sur `/tasks` après l'action

</Card>



