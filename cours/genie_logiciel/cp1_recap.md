---
title: Recap CP1
date: 2019-01-08
author: Sol
sidebar: auto
project: false
---

> Le **Génie logiciel** est l'ingénierie du developpement logiciel. 

<br>

C'est l'**application des principes d'ingénierie** à la conception de logiciels; l'établissement et l'application d'approches **méthodiques** et **quantifiables** au développement, à l'opération et à la maintenance des logiciels dnas le but d'**obtenir des systèmes logiciels économiques, fiables et efficaces** dans un **contexte de fonctionnement pratique**.

## Gestion de projet logiciel

### Vue d'ensemble

#### Motivations

* Des améliorations:
  * **Téchniques:** (performances, fonctoinnalités obsolescence) 
  * **Commerciales:** (couts, rendements) 
  * **Procédurales:** (mode d'utilisation, mise à jour, facilité de configuration)  
* Mais pas pour 
  * **Suivre une mode** 
  * **Tester une nouvelle technologie**

Lors de l’initiation, on procède à des **études de faisabilités technique, économique et organisationnelle** ainsi qu’à l’**identification de la valeur ajoutée commerciale**s que le projet apporterait. On **établit aussi un plan de travail**, on **définit les ressources**, les **standards et les procédures**, on **identifie les risques**.

#### Demande de projet 

Il est important de savoir **qui finance le projet** afin de créer ensuite une demande de projet formelle qui sera transmise aux commissions ou comités qui décideront de l'avenir du projet.

Comporte:
* Nom du projet
* Initiateur du projet
* Services demandés
* Fonctionnalités
* Apports attendus
  * Tangibles
  * Non tangibles
* Contraintes et autres

#### Étude de faisabilité technique

* **Faisabilité technique**
  * Connaissance du domaine d'application
  * Connaissance des technologies utilisées
  * Taille tu projet
* **Faisabilité économique**
  * Coûts du developpement
  * Coûts opérationnels par année
  * Bénéfices par année (économies, gains, ...)
  * Bénéfices non tangibles
* **Faisabilité organisationnelle**
  * Initiation et suivi du projet
  * Intégration du système dans le workflow actuel
  * Définition des intervenants, de leurs engagements, apports, ...
  * Utilisateurs

<Container type="info" header="Full Value Case">

La faisabilité économique peut être réalisé en utilisant un Full Value Case. Des modèles sont trouvables sur le net.

</Container>

### disciplines nécessaires dans un projet

!!!

## Planification du projet

### Découpage en tâches

* **Le but est de découper le projet en tâches:**
  * Plus précises
  * Moins complexes
  * Plus faciles à estimer
* **Ces tâches doivent être:**
  * Détaillées
  * Sans être des notions d'implémentation
* **Et sont divisées selon leur type:**
    * Fonctionnalités
    * Sous-ensembles physiques
    * Sous-traitance
    * Spécialité technique
    * Maintenance

<Container type="info" header="Breakdown Structure">

C'est un format et une représentation hierarchisée des tâches. Ces dernières sont regroupées dans des Work packages.

</Container>

Il est important d'**intégrer la notion de gestion de projet comme étant une tâche** à part entière dans la vie du projet. On ajoute aussi des tâches pour la conception, le déploiement et la documentation.

### Estimation d'un projet

Cette phase permet de **prendre conscience de l'envergure du projet**. On va **estimer la taille et la durée de réalisation du projet, les ressources nécessaires** pour finalement **donner un coût** à ce dernier.

#### Charge d'un projet
* Quantité de travail nécessaire
* Indépendant du nombre de personnes 
* S'exprime en: jours/homme, mois/homme ou années/homme

#### Durée
* Temps consommé par le projet
* Dépend du nombre de personnes
* **Ne** représente **pas** la productivité
  * Ne prend pas en compte le nombre de personnes

#### Répartition du temps

* **Par analogie**
  * Repose sur les expériences passées et est une variante de la méthode <Def def="Prévisions réalisées par des experts">Delphi</Def>.
* **Par points fonctionnels**
  * Estimation de la taille du projet en se basant sur:
    * Le nombre et la complexité des entrées/sorties
    * Les requêtes
    * Les interfaces utilisateur
  * On calcule ensuite un facteur d'ajustement basé sur la complexité
  * Un tableau de correspondance permet de définir le nombre de lignes de code en prenant en compte le langage et le nombre de points donctionnels identifiés.

#### PERT
