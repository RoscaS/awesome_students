---
title: "Cahier des charges"
date: 2019-09-20
author:  "Nathan, Sol"
sidebar: auto
project: false
hide: false
---

## Préambule

Pour cette première version, l'idée serait de faire en sorte d'avoir toutes les fonctions vitales de l'application sous forme d'un MVP. En effet, il est certain que certains aspects comme la protection des données, l'identification des utilisateurs (connexion avec un compte Google sur Android sync avec Auth0 pour l'application web) et la monétisation ajouterait un paquet d'overhead tout en n'étant pas essentiels à une démonstration d'évaluation du concept du projet. Ces points sont donc volontairement écartés du cahier des charges.

## Android

### Service

##### Technologies
* Java
* Kotlin

##### Objectifs principaux

* Tourne en arrière plan
* Accès aux swipes de l'utilisateur
* Enregistre les swipes de l'utilisateur (`Swipe`)
* Expose une API
  * `getSwipes()`
  * `clearSwipes()`

##### Modèles
* `Swipe`: 
  * created_at, distance

<br>

---

### Application

##### Technologies
* Java
* Kotlin

##### Objectifs principaux

* En charge de l'installation du service
* Nécessite les permissions suivantes:
  * Draw over other apps (service)
  * Location (app)
* Utilise l'API du service pour:
  * Peupler ses activités
  * Mettre à jour l'état du serveur (voir application web)
* Lors de la première utilisation:
  * Création d'un `User`
  * Geolocalisation et création des points d'intéret (5 pour le moment):
    * Place principale de la localité
    * Gare ou Église
    * Première grande ville proche
    * Capitale du pays
    * Antipodes
* L'application mémorise localement:
  * Les informations concernant les points d'intéret
  * La localisation exacte de l'utlisateur au moment de l'activation
  * Ces donnée ne sont pas sync avec le serveur
* L'application comporte $x$ activités pour l'affichage des informations suivantes:
  * Km swipés
  * "Succès atteints" (chaque point d'intéret atteint en distance de swipe)
  * Une carte affichant la progression entre le point de départ et le prochain point d'intéret
  * Un plot des km swipés "cette semaine", "ce mois", "total".
  * Le "record" du plus de km swipés en une journée.
* L'application comporte une activité contenant des settings:
  * Update nickname
  * Options concernant les notifications
* Lors de chaque connexion à internet, l'app s'authentifie (JWT) avec le backend ensuite:
    * L'application envoie les `Swipes` de l'utilisateur au backend
    * Réitère toutes les $x$ minutes tant que l'appareil est connecté à internet
* L'application notifie l'utilisateur lorsque ce dernier atteint un point d'interet.

##### Modèles
* `User`: ID, nickname, distance_swept, created_at, start_point, city, area, country
* `InterestPoint`: name, distance_from_start, achieved

#### Objectifs secondaires

* Option d'affichage permantent des km swipés dans la barre de tâches

## Web

### Backend

Ne contient que des données et n'est en charge d'aucune logique autre que de la création automatique de certaines entités de la BDD (`City`, `Area`, `Country`) en fonction des données des champs `city`, `area`, `country` envoyées lors de la première utilisation de l'app par l'utilisateur et si les entités correspondantes à ces champs n'existent pas encore.

Pour pouvoir tester correctement le projet, il serait interessant (nécessaire) de la déployer sur un serveur externe à la HE-Arc pour permettre aux Smartphones de contacter le serveur. Github For Education met à disposition 50$ de crédit Digital Ocean ainsi que plusieurs registrar pour des noms de domaines (1 an gratuit). 

##### Technologies
* Laravel
* Apache

##### Objectifs principaux

* API REST exposant des données à l'usage de l'application mobile et du site web
* Centralise les données des utilisateurs de l'application
* Authentification simple (pas d'utilisation d'Auth0) mais sécurisée avec JWT pour les utilisateurs de l'application Android.
* **Modèles**:
  * `User`
    * ID, km_swept, created_at, last_update, area(fk), city(fk), country(fk)
    * Création lors de l'activation de l'application Android
  * `City`
    * ID, name, area(fk), country(fk)
    * Création lors de la création d'un `User` et si cette `City` n'existe pas
  * <Def def="À discuter.">Area</Def> 
    * ID, name, country(fk)
    * Création lors de la création d'un `User` et si cette `Area` n'existe pas
  * `Country`
    * ID, name
    * Création lors de la création d'un `User` et si ce `Country` n'existe pas
  * `Swipe` 
    * ID, user(fk), distance, created_at
* **Endpoints**:

<Spoiler tag="endpoints">

<br>

* **api/auth**:
  * POST: <st c="r">Se renseigner sur l'auth à partir d'un téléphone</st>.
    * retourne: SecretKey & Refresh
* **api/users**
  * GET: `User` list
  * POST: Create `User` 
    * Ne peut être appelé que de l'app Android ()
* **api/users/pk**
  * GET: `User`
  * PATCH: Update `User` data 
    * Ne peut être appelé que de l'app Android
  * DELETE: Remove `User` 
    * Ne peut être appelé que de l'app Android
* **api/cities**
  * GET: `City` list
* **api/cities/pk**
  * GET: `City`
* **api/areas**
  * GET: `Area` list
* **api/areas/pk**
  * GET: `Area`
* **api/countries**
  * GET: `Country` list
* **api/countries/pk**
  * GET: `Country`
* **api/swipes/**
  * GET: Summary (<st c="r">À discuter, singleton?, mass computing?, ...</st>)
* **api/swipes/user/pk**
  * GET: `Swipe` list (<st c="r">À discuter</st>) 
  * POST: Bulk create `Swipe` entities
    * Reçois un `array` d'objets `Swipe`
    * Ne peut être appelé que de l'app Android
* **api/swipes/city/pk**
  * GET: `Swipe` list (<st c="r">À discuter, summary?, list?, both?</st>) 
* **api/swipes/area/pk**
  * GET: `Swipe` list (<st c="r">À discuter, summary?, list?, both?</st>) 
* **api/swipes/country/pk**
  * GET: `Swipe` list (<st c="r">À discuter, summary?, list?, both?</st>) 


<br>

</Spoiler>

* **Serializers**:

<Spoiler tag="serializers">

* <st c="r">todo</st>

</Spoiler>


### Application web

Application qui met en forme les données récoltées sur le serveur.

##### Technologies
* [Nuxt](https://nuxtjs.org/) (framework VueJS)
* [Vuetify](https://vuetifyjs.com/) (material design)
* [ApexChartsJS](https://apexcharts.com/) (data visualization)

##### Objectifs principaux

* Site web de consultation des données 
  * Pas de modification de l'état
  * N'est pas axé sur un utilisateur
* Landing:
  * Bref présentation du concepte
  * Mise en avant de certaines statistiques
* Page des classements:
  * Par: Villes / Régions / Pays / Monde
  * Quantité de données: Journalier / Hebdomadaire / Mensuel / annuel
* Page de statistiques (plots)
  * Affiche la progression du total de swipe en fonction du temps pour:
    * Utilisateur / Ville / Région / Pays / Monde
    * Quantité de données: Journalier / Hebdomadaire / Mensuel / annuel

##### Objectifs secondaires

* Amener le concepte des points d'intéret au site web
  * Point d'intéret "scale" sur la quantité d'utilisateurs
    * "Aujourd'hui l'humanité a swipé jusqu'à Vénus"
    * "Les habitants de Monbled ont traversé la Russie à coup de swipe"
    * ...
  * Infographies correspondantes