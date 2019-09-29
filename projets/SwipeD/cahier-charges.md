---
title: "Cahier des charges"
date: 2019-09-20
author:  "Nathan, Sol"
sidebar: auto
project: false
hide: false
---

## Android

### Service

##### Objectifs principaux

* Tourne en arrière plan
* Accès aux swipes de l'utilisateur
* Expose une API pour traiter les données récoltées

### Application

##### Objectifs principaux

* Nécessite les permissions suivantes:
  * Draw over other apps (service)
  * Location (app)
* En charge de l'installation du service
* Utilise l'API du service pour:
  * Peupler ses activités
  * Mettre à jour l'état du serveur (voir application web)
* <Def def="En fonction du temps peut être abandé pour un profile anonyme dans la base de données">Identification avec compte google</Def>
* Lors de la première utilisation:
  * Création d'un profile comprenant au minimum une ID référençant l'utilisateur
  * Geolocalisation et création des points d'intéret (5 pour le moment):
    * Place principale de la localité
    * Gare ou Église
    * Première grande ville proche
    * Capitale du pays
    * Antipodes
* L'application garde localement les informations concernant les points d'intéret
* L'application comporte $x$ activités pour l'affichage des informations suivantes:
  * Km swipés
  * "Succès atteints" (chaque point d'intéret atteint en distance de swipe)
  * Une carte affichant la progression entre le point de départ et le prochain point d'intéret
  * Un plot des km swipés "cette semaine", "ce mois", "total".
  * Le "record" du plus de km swipés en une journée.
* L'application met à jours les données sur le serveur lors de chaque connexion à internet et toutes les $x$ minutes à partir du moment de là.
* **Modèles**
  * User:
    * id
    * distance_swept
    * created_at
    * city
    * area
    * country
  * InterestPoint:
    * name
    * distance_from_start
    * achieved

#### Objectifs secondaires

* Option d'affichage permantent des km swipés dans la barre de tâches
* Affichage du classement régional/national/monde dans l'application mobile
* Mise en place d'un modèle économique 
  * Version pro permet un accès aux classements
  * ...

### Web

#### Serveur

Ne contient que des données et n'est en charge d'aucune logique autre que de la création automatique de certaines entités de la BDD (City, Area, Country) en fonction des données des champs City, Area, Country envoyées lors de la première utilisation de l'app par l'utilisateur et si les valeurs de ces champs n'existent pas encore.

* API REST exposant des données à l'usage de l'application mobile et du site web
* Centralise les données des utilisateurs de l'application
* **Modèles**:
  * `User` (Création lors de l'activation de l'application Android)
    * ID, km_swept, created_at, last_update, area(fk), city(fk), country(fk)
  * `City` (Création lors de la création d'un User et si cette ville n'existe pas)
    * ID, name, area(fk), country(fk)
  * <Def def="À discuter.">Area</Def> (Création lors de la création d'un User et si cette région n'existe pas)
    * ID, name, country(fk)
  * `Country` (Création lors de la création d'un User et si ce pays n'existe pas)
    * ID, name
* **Endpoints**:

<Spoiler tag="endpoints">

<br>

* `api/user`
  * GET: User list
  * POST: Create user (protégé et ne peut être appelé que de l'app Android)
* `api/user/pk`
  * GET: User
  * PATCH: Update user data (ne peut être appelé que de l'app Android)
  * DELETE: Remove user (ne peut être appelé que de l'app Android)
* `api/city`
  * GET: city list
* `api/city/pk`
  * GET: city
* `api/area`
  * GET: area list
* `api/area/pk`
  * GET: area
* `api/country`
  * GET: country list
* `api/country/pk`
  * GET: country

<br>

</Spoiler>


