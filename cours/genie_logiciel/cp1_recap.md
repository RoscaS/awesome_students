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

<!-- <Spoiler tag="Matière"> -->

<br>

* Définition de base du Génie logiciel (ingénierie du développement logiciel)

<br>

#### 1. Gestion de projet logiciel
* **1.1 Vue d'ensemble et disciplines nécessaires dans un projet**
* **1.2 Initiation du projet et étude de faisabilité**
* **1.3 Planification projet**
  * identification des tâches
  * estimation des coûts
  * planification
  * ressources (humaines)
  * (_organisation_) ?????????
  * gestion des risques
  * livrables
* **1.4 Suivi et contrôle**
* **1.5 Clôture du projet**

<br> 

#### 2. Cycle de vie logiciel

_le développement proprement dit_

* **2.1 Phase de développement**
* **2.2 Analyse des besoins**
    * types d'exigences
    * capture et formalisation des besoins
    * ... ?
* **2.3 Conception**
    * tâches de la phase de conception
    * stratégies
    * architecture logicielle
    * infrastructure
    * interface utilisateur
    * codage
    * ... ?
* **2.4 Réalisation**
    * réalisation et maintenance
    * codage
* **2.5 Tests**
    * types
    * niveaux techniques de test
    * tests boite blanche et noire
    * tests unitaires
    * tests d'integration
    * tests système 
    * tests de validation

<br> 

#### 3. Pratique

* PERT
* Capture de besoins
* ...

<!-- </Spoiler> -->

# 1. Gestion de projet logiciel

## 1.1 Vue d'ensemble et disciplines

### Vue d'ensemble

![Image](https://i.imgur.com/xLVhp5w.png)

### Disciplines nécessaires

![Image](https://i.imgur.com/25ILuQH.png)

## 1.2 Initiation du projet & faisabilité

### Initiation du projet

* Un projet doit être motivé par:
  * Des améliorations:
    * **Téchniques:** (performances, fonctoinnalités obsolescence) 
    * **Commerciales:** (couts, rendements) 
    * **Procédurales:** (mode d'utilisation, mise à jour, facilité de configuration)  
* Mais pas pour 
  * **Suivre une mode** 
  * **Tester une nouvelle technologie**

Lors de l’initiation, on procède à des **études de faisabilités technique, économique et organisationnelle** ainsi qu’à l’**identification de la valeur ajoutée commerciale** que le projet apporterait. On **établit aussi un plan de travail**, on **définit les ressources**, les **standards et les procédures**, on **identifie les risques**.

### Demande de projet 

<st c="r">Du client vers la société en charge de la réalisation.</st>

Il est important de savoir **qui finance le projet** afin de créer ensuite une demande de projet formelle qui sera transmise aux commissions ou comités qui décideront de l'avenir du projet.

* Une demande de projet comporte:
  * Nom du projet
  * Initiateur du projet
  * Services demandés
  * Fonctionnalités
  * Apports attendus
    * Tangibles
    * Non tangibles
  * Contraintes et autres

### Étude de faisabilité

<st c="r">Réponse à la demande de projet.</st>

* Une étude de faisabilité contient:
    * **Faisabilité technique:**
      * Connaissance du domaine d'application
      * Connaissance des technologies utilisées
      * Taille tu projet
    * **Faisabilité économique:**
      * Coûts du developpement
      * Coûts opérationnels par année
      * Bénéfices par année (économies, gains, ...)
      * Bénéfices non tangibles
    * **Faisabilité organisationnelle:**
      * Initiation et suivi du projet
      * Intégration du système dans le workflow actuel
      * Définition des intervenants, de leurs engagements, apports, ...
      * Utilisateurs

<Container type="info" header="Full Value Case">

Peut être réalisé en faisant un [Full Value Case](https://www.emeraldinsight.com/doi/abs/10.1108/14013381211317266).

</Container>


## 1.3 Planification du projet

### 1.3.1 Identification des tâches

* **Le but est de découper le projet en tâches...**
  * plus précises
  * moins complexes
  * plus faciles à estimer
* **Ces tâches doivent être:**
  * Détaillées
  * Sans être des notions d'implémentation
* **Critères de découpage**
  * Fonctionnalités
  * Sous-ensembles physiques
  * Sous-traitance
  * Spécialité technique (software, hardware)
  * Maintenance

<Spoiler tag="Work Breakdown Structure">

* **WBS**: Work Breakdown Structure: liste hiéarchisée de tâches
* **Work Package**: Groupe de tâches complémentaires

![Image](https://i.imgur.com/y6DXx9v.png)

#### Exemple:

<br> <br>

![Image](https://i.imgur.com/SDYDJgw.png)

<br>

</Spoiler>

<Container type="info" header="Bonnes pratiques">

* Inclure la **gestion de projet** comme première tache (WP0)
* Prevoire au moins une tâche pour la **spécification des besoins**
* Prévoire au moins une tâche pour la **conception**
* Prévoire au moins une tâche pour la **déploiement**
* Prévoire au moins une tâche pour la **documentation**
* Plusieurs tâches pour la réalisation (hard/firm/software)

</Container>

### 1.3.2 Estimation d'un projet

Cette phase permet de prendre conscience de l'envergure du projet. On va estimer la **taille** et la **durée** de réalisation du projet, les **ressources** nécessaires pour finalement donner un **coût** à ce dernier.



* **Charge d'un projet:** Quantité de travail nécessaire, indépendamment du nombre de personnes.
* **Durée:** Temps consommé par le projet
  * Dépend du nombre de personnes
  * Ne représente pas la productivité
    * <st c="r">Ne prend pas en compte le nombre de personnes</st>

<Container type="warning">

100 personnes pendant un mois ne sont pas équivalentes à 1 personne pendant 100 mois (en
terme de productivité)

</Container>


#### Estimation sur base de la planification:

On se base sur le temps passé à réaliser la plannification pour évaluer la durée de l'ensemble du projet. Par exemple:

* Estimations:
  * Planification: **15%**
  * Analyse: **20%**
  * Conception: **35%**
  * Réalisation: **30%** 

Ces pourcentages peuvent être adaptés aux types de projets ou bien peuvent être obtenu par des statistiques internes à la société.

#### Estimation par analogie:
Repose sur les expériences passées et est une variante de la méthode <Def def="Prévisions qui se base sur un consus d'experts">Delphi</Def>.

#### Estimation par points fonctionnels:
* Estimation de la taille du projet en se basant sur: le nombre et la complexité des: 
  * entrées/sorties
  * requêtes
  * fichiers
  * interfaces utilisateur
* On calcule ensuite un facteur d'ajustement basé sur la complexité
* Un tableau de correspondance permet de définir le nombre de lignes de code en prenant en compte le langage et le nombre de points fonctionnels (PF) identifiés.

<Container type="info">

* **Langage C**: 1 PF ajusté correspond à 130 ligne de code
* **Langage Java**: 1 PF ajusté correspond à 55 ligne de code
* **Langage Visual Basic**: 1 PF ajusté correspond à 30 ligne de code

</Container>

### 1.3.3 Techniques de plannification

#### Réseau (graphe) PERT
_Program Evalutation and Review Technique_

* **Représente**:
  * Les contraintes d’enchaînement temporel 
  * la durée des tâches
* **Permet d'obtenir**:
  * les marges des tâches
  * le <Def def="met en évidence les tâches critiques qui risquent de repousser la
fin du projet si elles sont en retard.">chemin critique</Def>

![Image](https://i.imgur.com/1QZcgT5.png)


<Spoiler tag="Complément PERT">

* **Liens**:
  * **fin-début**: Si la tâche B doit commencer après la fin de la tâche A.
  * **fin-fin**: Si les tâches A et B doivent se terminer en même temps. La fin de A commande celle de B.
  * **début-début**: Si A et B doivent commencer en même temps. Le début de A commande le début de B.
  * **début-fin**: Si le début de A marque la fin de B

</Spoiler>

* **Pour chaque tâche on calcule**:
  * Les dates de début et de fin **au plus tot**
  * Les dates de début et de fin **au plus tard**
  * La marge (slack)

<Spoiler tag="Exemple PERT">

| n   | Activité                | Durée | Dépendance |
|-----|-------------------------|-------|------------|
| 1   | Requirements collection | 5     | **/**      |
| 2   | Screen design           | 6     | 1          |
| 3   | Report design           | 7     | 1          |
| 4   | Database design         | 2     | 2, 3       |
| 5   | User documentation      | 6     | 4          |
| 6   | Programming             | 5     | 4          |
| 7   | Testing                 | 3     | 6          |
| 8   | Installation            | 1     | 7, 7       |

<br>

![Image](https://i.imgur.com/1ntGGUW.png)

<br>


<st c="r">Chemin critique:</st>

![Image](https://i.imgur.com/zrCkhR8.png)

<br>

</Spoiler>

#### Diagramme de GANTT

* **Permet:**
  * de passer d'un reseau PERT à un calendrier
  * d'affecter les ressources
  * d'utiliser les marges calculées pour les taches afin d'ajuster l'attribution de ressources et le déroulement du projet

On peut ensuite jalonner le projet de <Def def="définpoint temporel où certains rendus doivent avoir lieuition">Milestones</Def>.

![Image](https://i.imgur.com/QoPIQNM.png)

### 1.3.4 Ressources (humaines)

![Image](https://i.imgur.com/Al7Dh1m.png)

<br>

* **Project Manager**: création et gestion des équipes, gestion du projet et de la planification. 
  * Doit possède des notions techniques pour comprendre les spécifications du projet.
* **Architecte fonctionnel**: Définit ce que le logiciel doit être capable de faire.
* **Business Analyst**:
* **Architecte technique**: Conceptualisation du logiciel (liens entre les composants).
* **Développeur**: Transcrit en code ce que l’architecte souhaite réaliser.
* **Test Manager**: Prévoit les tests à effectuer pour s’assurer de son bon fonctionnement
* **Ingénieur de test**: Réalise les différents tests

### 1.3.5  Gestion des risques

* Un risque est un problème potentiel caractérisé par:
  * Une **probabilité** d'occurence ($P$)
  * Un **impacte** ($I$)
* Ces deux points nous donnent la **criticité** ($C$): $C = PI$

<br>

#### Analyse des risques
* Les facteurs de risque sont issus des **propriétés du projet** comme:
  * La taille (couverture du domaine)
  * La difficulté technique (nouveauté technologique)
  * Degré d'integration (flux, complexité, hétérogénité des acteurs)
* Ou de l'**environement du projet**:
  * Configuration organisationnelle
  * changement potentiels durant la réalisation du projet
  * instabilité de l'équipe

<br>

#### Profile de risque d'un projet

<br>

![Image](https://i.imgur.com/ZOV4Il3.png)

### 1.3.6 Livrables

Élément à fournir au client à la fin des différentes étapes du projet:

* **Initiation:**
  * Full Value Case
  * Faisabilité économique et technique
* **Planification:**
  * Plan de projet comportant:
    * Tâches
    * Coût
    * Echéancier
    * Organisation (ressources humaines)
    * Liste de risques
* **Exécution:**
  * Rapport de suivi
  * Communications
  * Specs/Architecture/Code/Tests
* **Clôture:**
  * Rapport de clôture

## 1.4 Suivi et contrôle

Relevé périodique du statut du projet selon les axes suivants:

1. Taux de complétion des tâches
2. Respect des délais
3. Budgets
4. Evolution des risques
5. Problèmes ouverts (issues)
6. Disponibilité des ressources

<br>

Un rapport est établit et transmis aux acteurs concernés.

## 1.5 Clôture

Arriver à la fin d’un projet, il est utile de faire un bilan sur sa réalisation afin de tirer des leçons sur les potentielles erreurs survenues ainsi que les réussites.

# 2. Cycle de vie logiciel

## 2.1 Phase de développement

<br>

![Image](https://i.imgur.com/Ryamz7A.png)

## 2.2 Analyse des besoins

_Ce que le logiciel doit faire mais pas comment il doit le faire._

### Types d'exigences

* **Fonctionnelle**: les fonctions et les services offerts par le logiciel
* **Non-fonctionnelle**: les contraintes imposées au logiciel ou processus de développement

![Image](https://i.imgur.com/mBT7hMn.png)

### Technique de capture des besoins

* **Interviews**: Technique la plus utilisée. Consiste à poser des questions aux détenteurs des informations recherchées.
* **Conception collective (Joint application design)**: Permet de se focaliser sur les exigences et d'obtenir des spécifications détaillées. On mandate un coordinateur ainsi qu'une assemblée pour définit des exigences.
* **Questionnaires**: Utilisée lorsque le nombre d'utilisateurs est important. Permet de d'obtenir des informations d'utilisateurs externes.
* **Analyse de documents:** Offre une comprégension du système existant et permet de découvrir les exigences futures. On analyse des rapports, des documents de travail, des annotations et ajouts d'utilisateurs ainsi que le workflow.
* Observation: Les utilisateurs ne sont pas toujours capables de décrire leur fonctionnement, il peut donc être utile de se rendre sur place et d'observer ces derniers dans leur "milieu naturel". Cette technique se combine très bien avec les interviews mais elle nécessite une experitise particulière.

<Container type="warning">

Tous ces moyens d'obtenir des information doivent veiller à sélectionner correctement les participants et différents acteurs. Les questions doivent être préparées avec soin afin de garentir les réponses les plus précises possible.

</Container>

### Formalisation des besoins

Sous forme de cahier des charges qui peut être rédigé de plusieurs façons:
* **Langages naturels:**
  * simples, nécessitent aucun apprentissage paticulier
  * Ambiguité, manque de précision, verbeux, ...
* **Langages semi-formels:**
  * diagrammes, tableaux graphiques, réseaux de PERT
  * Synthétique, moins verbeux, dépends de la standardisation
* **Langages formels:**
  * Précision, clarté et absence d'ambiguité
  * Difficile à maitriser, applicable uniquement à des projets spécifiques

## 2.3 Conception

### 2.3.1 Tâches de la phase de conception

Évolution des modèles d’analyse, conceptualisation de l’architecture, des interfaces utilisateurs, et des données persistantes et on détaille les classes