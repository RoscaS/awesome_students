---
title: TB: Generic website for all
date: 2020-01-30
author: Sol
sidebar: auto
project: false
hide: false
---

## Generic website for all

* Buzzwords: **générique**, **modulaire**, **rigide** dans la structure, **flexible** dans le contenu

L'idée est de "porter" un projet existant de VueJS à Nuxt pour pouvoir profiter du SSR et ne plus avoir les problèmes de SAO de Vue tout seul. En effet, le produit visant principalement les petits commerces une bonne visibilité sur les moteurs de recherche est cruciale. De plus le projet actuel étant mon premier projet conséquant sur le frontend VueJS et mon tout premier projet à architecture RESTfull et malgré un certain succès au près des clients qui l'utilisent, il souffre de problèmes dû au manque d'expérience lors de sa conception. Plus qu'un simple portage, l'idée est de ne garder que le concepte et l'esthétique et de refaire le tout sur des bases propres avec maintenabilité et robustesse comme mot d'ordre.

## Les concepts clés

* [Showroom de la version actuelle](https://www.jrosk.ch/)

Des modules pour composer une vitrine/petit site sur mesure pour des petits commerces.

**Modules basiques**
* Bannière
  * Avec logo générique paramétrable dans le cas où le client n'a pas de logo.
  * Affichage du status d'ouverture courant du commerce (ouvert jusque x/ouvre dans n heures)
* Action spéciale (promotion du moment)
* Slideshow
* Présentation
* Hero
* Articles/produits (présentation seulement, pas d'Ecommerce)
* Galerie photo
* Contacts
* Horaires

**Modules avancés (Complexes, petits projets standalone)**
* Blog + éditeur de texte riche en ligne
* Gestion des commandes
* E-commerce (surcouche pour le module Articles/produits)

Les données de certains modules sont utilisées dans d'autres modules, par exemple, l'horaire est utilisé dans la banière pour afficher le status au moment de la visite (ouvert jusque x/ouvre dans n heures, les images de chaque section sont liées et interchangeables, ...)

### Pour l'utilisateur
Site vitrine dynamique ultra simple à utiliser (beaucoup plus simple qu'un cms classique comme Wordpress ou Drupal). Le layout, une fois en place est rigide (possibilité de swaper, retirer, ajouter des modules avec l'aide du développeur) mais la modification des contenu text/informations/media est **très** facile à faire. Pas de menu externe au site, une fois connecté en tant qu'administrateur, il suffit de cliquer sur un texte pour le modifier. La modification se fait en live et la preview est le site en lui même. Les modifications plus complexes comme la gestion des horaires par exemple se font dans des popup light. L'utilisateur ne sort (presque) jamais du site.

La réflection initiale se base sur le fait que malgré que des outils "simples" existent, un commerçant n'est expert que dans son domaine et ne souhaite pas apprendre à utiliser ces outils dits "simples" qui malgré tout ont une courbe d'apprentissage qui peut être perçue comme un mur pour certains. En partant de ce postulat, les axes commerciaux du projet sont:

* Le client veut un produit prêt à l'emploie, autonome et dont il a le contrôle après le premier entretient.
* Le client veut un produit qu'il peut payer et utiliser imédiatement comme n'importe quel autre produit qu'il achète.
* Le client doit pouvoir utiliser 100% de ce qu'offre le produit en n'ayant des skills techniques qui ne dépassent pas ceux nécessaire à utiliser facebook comme un utilisateur lambda.

### Pour le développeur
L'Idée ultime serait de de pouvoir rendre le produit disponible en SaaS (Site as a Service) à travers un site "portail" qui donne au visiteur la possibilité de concevoir son site en ligne.** C'est hors cadre pour ce projet** mais l'idée est là et l'architecture devrait tendre vers cet idéal.

À la fin du TB le site devra pouvoir se concevoir avec le client, en live, en discutant avec lui. "Je veux ça ici... ah non plus par là, oui là c'est bien et avec la galerie endessous...". À la fin de l'entretient il suffit d'attendre que les enregistrement dns se propagent pour que le client puisse se connecter à son nouveau site.

Les mises à jour et correction de bug du site doivent pouvoir se faire simultanément sur tous les sites issu de ce projet. Leur contenu est différent mais le moteur qui les fait tourner est le même et un bug sur l'un est un bug qui peut se manifester sur tous les autres. Il est donc nécessaire de garder tous les sites actifs synchronisés à un site "modèle" qui permette de répliquer et corriger un bug détecté sur une des instances.

