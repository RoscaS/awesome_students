---
title: Recapitulatif cp1
date: 2019-12-05
author:  "Collectif"
sidebar: auto
project: false
hide: false
---

<style>
.q {color: green; font-weight: bold;}
</style>


# Glossaire
(avec moyen mnémotechniques nuls)



# QDL Recap des questions connues
[TOC]

## Assurance qualité

1. <span class="q">Q: Définir ce que sont les Quality Gates (portails de qualité) et spécifier leurs utilité dans le contexte d'assurance qualité.</span>

Les QG sont des concepts de contrôle qualité pour les processus organisés en phases. Leur objectif est de valider la qualité du produit AVANT de passer à la phase suivante de production/développement. **Utilisation des checklists**.

---

2. <span class="q">Définir ce qu'un portail de qualité (quality gate) et en donner deux exemples à travers deux check listes avec chacune au moins 3 questions.</span>

Pour que le processus passe à la prochaine phase il faut remplir une check-list:
* **Avant d'éxécuter un test:**
    * Env. test conforme?
    * Donnée de test cohérentes
    * Pre + post conditions remplies
* **Avant de déployer une app web:**
    * Infrastructure réseau opérationnelle
    * Equipe help desk prête
    * Client prévenu

---

3. <span class="q">Q: Expliquer la différence entre "Assurance qualité" et "Contrôle de qualité".</span>

L'assurance qualité suit le développement du projet, alors que le contrôle qualité survient à la fin.


* **Assurance qualité** : Méthodologie pour garantir un service de qualité. S'applique a des **processus**
* **Contrôle qualité**: Vérification que l'assurance qualité a bien été mené. S'applique aux **produits**

---

4. <span class="q">Q: Définir ce qu'un "processus" (au sens de "gestion") et décrire ses différents éléments constituants.</span>

Un ensemble de tâches, avec des entrées et des sorties, des acteurs (RACI : responsible, accountable, consulted, informed). Les sorties sont mesurées avec les **KPI** (key performance indicator).

Ensemble d'**activités** faites par des **acteurs**. Possède des évenements déclencheurs.

**Ensemble d'activités** effectués par des **acteurs** ayant chacun un rôle précis (RACI).
* Attributs d'un processus:
  * événement déclencheur
  * input + output mesurable avec des KPI.


## Stratégie de l'assurance qualité

1. <span class="q">Décrire brièvement les 4 dimensions à considérer lors de l'élaboration d'une stratégie de l'assurance de qualité</span>

* Dimension **Organisationnelle**: Organisation du point de vue conception et métier.
* Dimension **Humaine**: challenge: garder une équipe motivée et saine
* Dimension **Processus**: Définir plusieurs processus, et s'arranger qu'ils ne s'entrebloquent pas
* Dimension **Technologie**: selenium, jmeter (on part à 4.5 si on mentionne pas les deux)


## Processus assurance qualité

1. <span class="q">Pour une méthodologie de développement en cascade, quelle méthodologie de test utiliseriez vous et pourquoi?</span>

Un processus en V, car il permet de ré-ajuster en milieu de développement.

2. <span class="q">Pour une méthodologie de développement agile comme Scrum, quelle méthodologie de test utiliseriez vous et pourquoi?</span>

Une méthodologie en spirale afin de tester l'essentiel, puis de viser un rendu plus global. Avec
Scrum, on développe par fonctionnalités, donc les tests doivent également être centrés dessus.


## Processus de test

1. <span class="q">Le processus en V est une extension du processus de développement en cascade afin d'aligner le processus de développement et celui d'assurance qualité du logiciel. Schématiser le processus en V et décrire ces étapes principales.</span>

![Image](https://i.imgur.com/OwRj8nh.png)

---

1. <span class="q">Un processus de test constitué de 5 étapes (en confondant les deux premières étapes) a été étudié (en cours). Décrire ces étapes en énumérant les activités principales correspondantes et en spécifiant ses livrables.</span>

* **Conception et planification**
  * Définir les objectifs et la méthodologie de test
  * Return concept de test
  * Périmètre de test, estimer le budget
  * l'équipe de test
  * return plan de test
* **Spécification**
  * Spécifier les cas de tests
  * Spécifier les données de tests
  * Return spécifications détaillées des tests
* **Implémentation et préparation**
  * Implémenter les utilitaires de tests
  * Return env. de test et utilitaires de tests prêts à l'utilisation
* **Exécution**
  * Vérification des préconditions
  * Exécution
  * Vérification des posts-conditions
  * Return rapport d'exec des tests et résultats des tests
* **Analyse et evaluation**
  * Identifier les bugs et les classifier
  * Planifier les re-test
  * Return liste des bugs et tableau de bord sur la qualité du produit

---

3. <span class="q">Expliquez les différentes étapes pour définir le périmètre de tests d'un projet de développement logiciel.</span>

Le périmètre de test est basé sur la fonctionnalité, le niveau de test et le type de test. Il faut donc
définir ce qu'on veut tester, quel type de test on souhaite faire et à quel niveau il s'effectuera.

---

4. <span class="q">Expliquez la méthode "Risk & Requirement based testing" (RRBT)</span>

Il est impossible de tester entièrement un logiciel. Pour ce faire, on choisit de tester tel ou tel
aspect du logiciel en fonction du risque qu'un problème survienne et de l'importance de la
fonctionnalité. Cela permet de concentrer ses efforts sur ce qui mériterait vraiment d'être testé.
__Mot-clé__: Criticité d'un risque (= gravité * probabilité)

---

## Planification de test

1. <span class="q">La phase de planification de test aboutit à un document appelé "Plan de test". Expliqer brièvement (en utilisant des exemples/schémas) chacun des chapitres du ce document. Chaque chapitre traite un aspect important de la planification de tests. Pour rappel, 7 aspects on été approfondis dans le cours.</span>

Dans une phase de planification, la stratégie et le plan sont effectués en parallèle, d'ailleurs, pour des projets de petite et moyenne taille, les deux documents forment un seul document nommé **Plan de test**.
Ce document peut être utilisé dans différentes topologies ou organisations de projets et s'adapter en occurrence.
Le "plan de test" est un document réalisé par le chef de projet en collaboration avec le Test
Manager. Ils définissent :
* **Périmètre du test**
  * Focaliser les tests sur les fonctions critiques
  * Type et niveau de tests
* **Stratégie et approche détaillées de test**
  * Traduire la stratégie de test en une répartition des efforts et des couvertures de test sur les différents objets de test
* **Organisation équipe et communication**
  * Définir la structure de l'équipe de test
  * Préciser pour chaques rôles les responsabilités et les tâches correspondantes
  * Qui doit être informé
* **Infrastructure et logistique de test**
  * Définir l'environnement de tests
* **Gestion des risques**
  * Problème potentiel, impact et probabilité
* **Estimation de l'effort** (budget)
  * Estimer l'effort nécessaire au projet de test
  * Généralement en Jours.Homme
* **Calendrier de test**
  * Elaboration d'un calendrier de tests


## ISO 9126 (NORME)
*ISO 9126 définit 6 caractéristiques principales de qualité du logiciel.*
1. <span class="q">Qu'est-ce que ISO 9126 et à quoi ça sert ?</span>

C'est une norme ( => contraignante) qui atteste de la capacité qu'a une entreprise à fournir de la qualité

* **Norme** qui permet d'évaluer la qualité d'un logiciel.
* **Crédibilise** une entreprise.

---

2. <span class="q">Citer ces 6 caractéristiques et énumérer quelques sous caractéristiqes pour chaque caractéristique principale.</span>


- **Portability**:
   - Facilité d'adaptation
   - Facilité d'installation
   - Interchangeable
- **Maintenability**:
   - Facilité d'analyse
   - Facilité de modification
   - Facilité à tester
- **Fonctionality**:
   - Aptitude
   - Exactitude
   - Conformité
   - Sécurité
   - Interopérabilité
- **Fiability**:
   - Maturité
   - Tolérance aux échecs
   - Capacité de récupération
- **Ergonomy**:
   - Facilité d'apprentissage
   - Facilité de compréhension
   - Facilité d'utilisation/exploitation
- **Efficiency**:
   - Temps de réponse
   - Utilisation des ressources

---

3. <span class="q">Pour quantifier la qualité d'un logiciel, ISO 9126 utilise 3 méthodes de mesure: interne, externe et en utilisation. Décrire chaque méthode de mesure et donner quelques exemples.</span>

* **Interne (statique)**
  * Non visibles aux utilisateurs
  * Lit le code
  * Se structurer, se donner des objectifs
  * Fédérer le personnel, mobiliser les équipes
  * Piloter l'activité via des indicateurs de perf.
  * Renforcer l'écoute client et l'amélioration continue
* **Externe (dynamique)**
  * Visible par l'utilisateur
  * Exécute l'app
  * Attributs de qualité qui impactent le comportement du produit logiciel à l'exécution
  * Outil de reconnaissance via la certification
  * Avantage concurrentiel
  * Apporter des garanties sur des engagements clients clairement définis, suivis, mesurés et contrôlés
* **Utilisation**
  * Expérience utilisateur, il nous donne son avis sur l'ergonomie

## CMMI (STANDARD)
1. <span class="q">Qu'est-ce que CMMI et à quoi ça sert?</span>

Capability Maturity Model Integration
Ensemble de bonnes pratiques relatives au développement, de
maintenance appliquées aux produits et aux services.

>"helps organizations streamline process improvement and encourage productive, efficient behaviors that decrease risks in software, product and service development" - cio.com

* Ensemble de bonnes pratiques relatives aux activités de developpement.
* Basé sur un mode itératif, visant à l'amélioration permanente.
* Ensemble de bonnes pratique à mettre en oeuvre.
* Modèle adaptable.

---

2. <span class="q">Décrire les 5 niveaux de maturité du référentiel CMMI. Pour chaque niveau, citer 1 processus à maitriser.</span>

* **Initial**: Un seul "non-processus": le mode pompier (gestion par crise)
    * Indiscipline généralisé
    * Ensemble de mauvaises pratiques
    * Pas de processus fiables
    * Projets pilotés par les délais
* **Discipline**: Gestion des exigences, Conduite et maîtrise du projet, Production et analyses des indicateurs, assurance quality des processus et des produits, planification du projet, gestion des achats, gestion de la configuration
    * Discipline dans les projets
    * Processus documenté
    * Planification des travaux
* **Standardisation**:  Analyse et prise de décision, Gestion de projet intégré, Focalisation sur les processus organisationnels, solution technique, recette techniqe, formation à l'organisation, développement des exigences, définition du processus organisation, intégration du produit, recette fonctionnelle, gestion des risques
    * Organisation a défini des méthodes, outils et document
    * Approfondissement des processus de gestion de projet
    * Prévention
* **Quantification**:  Objectifs quantitatifs, correction systématique en cas de dépassement des objectifs
    * Métriques mis en place et exploités
    * Retour d'expérience possibles
    * Programme qualité
* **Optimisation**: Innovation organisationnelle, analyse des causes et solution des problèmes
    * Amélioration continue du processus
    * Statistiques utilisées pour les processus standards

## ITIL (STANDARD)
1. <span class="q">Qu'est-ce que ITIL et à quoi ça sert?</span>

 __Information Technology Infrastructure Library__ : Les services sont les éléments constituant d'ITIL.

* **Standard** qui voit les activités d'une entreprise IT comme des services
* Propose des **processus centrés sur les services**
* Ensemble d'**ouvrages** recensant les **bonnes pratiques** du management du système d'information
* Comment **organiser** un système d'information
* Comment **améliorer** l'efficacité du système d'information
* Comment **réduire** les risques
* Comment **augmenter** la qualité des services informatiques



---

2. <span class="q">Décrire les 5 étapes du cycle de vie d'un "service" selon ITIL. Pour chaque phase citer 2 processus qui font partie de la phase en question.</span>

* Service **Strategy**: On décide du catalogue de services que l'entreprise va proposer.
* Service **Design**: On regarde de quoi on a besoin pour implémenter les services.
* Service **Transition**: Implémentation des services + tests.
* Service **Operation**: Mise en production de services + mise en place  de l'infrastructure pour les assurer.
* Amélioration de service continue




# Tests
## Types de test
- Functional
- Performance
- Usability
- Regression
## Niveaux de test
- Unit
- Integration
- System
- User
<br> <br>

---
---
---


## Annexes

### Normes et Standards

* [developpez.net](https://www.developpez.net/forums/d1553080/systemes/reseaux/architecture/difference-entre-norme-standard/)
* [piaf-archives.org](http://www.piaf-archives.org/sites/default/files/bulk_media/m07s04/co/section4_2.html)
* [wikipedia.fr](https://fr.wikipedia.org/wiki/Norme_et_standard_techniques)

La différence est minime mais importante. La confusion est fréquente principalement à cause de la littérature anglophone. Si en France on parle de Norme et de Standard, en anglais, il n’existe que le terme Standard.

* **Une norme** a un caractère légale. Assure un fonctionnement minimum et surtout un minimum de sécurité dans le fonctionnement.

* **Un standard** a un caractère plus orienté commercial, C'est est un ensemble de **recommandations** ou de préférences préconisées par un groupe d’utilisateurs caractéristiques et avisés. Prétend répondre à un cahier des charges établi par l'auteur du standard mais n'en garantie pas forcément la bonne application ou l'application complète. Un standard s'est imposé soit parce qu'il a été un des premiers à être commercialisé, soit parce qu'il est massivement utilisé (ou les 2 bien sûr).
En français, ça se traduirait par "**standard de fait**".


### Norme

* **C'est quoi?**
    * Document établi par consensus et approuvé par un organisme reconnu (lui même agréé par l'état), qui fournit, pour des usages communs et répétés, des règles, des lignes directrices ou des caractéristiques, pour des activités ou leurs résultats, garantissant un niveau d'ordre optimal dans un contexte donné.
    * La norme est un document de référence sur un sujet donné. Il indique l'état de la science, de la technologie et des savoir-faire au moment de la rédaction.
    * C'est un référentiel incontestable commun proposant des solutions techniques et commerciales.
* **Pourquoi?**
    * Les normes sont utilisées pour simplifier les relations contractuelles.
* **Comment?**
    * Pour être considéré comme une norme, le document doit remplir deux conditions:
        * Les moyens et méthodes décrits doivent être reproductibles en utilisant et respectant les conditions qui sont indiquées.
        * Doit être reconnue par les professionnels du milieu concerné.

Selon leur contenu, on distingue quatre types de normes :
* **Les normes fondamentales**: elles donnent les règles en matière de terminologie, sigles, symboles, conventions, métrologie.
* **Les normes de spécifications**: elles indiquent les caractéristiques, les seuils de performance d'un produit ou d'un service.
* **Les normes de méthodes d'essais et d'analyse**: elles indiquent les méthodes et moyens pour la réalisation d'un essai sur un produit.
* **Les normes d'organisation**: elles décrivent les fonctions et les relations organisationnelles à l'intérieur d'une entité.

### Standard

En gros, une norme non officielle qui s'est imposé d'elle même.

* **C'est quoi?**
    * Un standard est un référentiel publié par une entité privée autre qu’un organisme de normalisation national ou international ou non approuvé par un de ces organismes pour un usage national ou international. On ne parle de standard qu'à partir du moment où le référentiel a une diffusion large, on parle alors de standard de facto (standard de fait).


> On peut citer le standard ouvert PostScript publié par la société privée Adobe et les standards publiés par des organismes privés à but non lucratifs comme le W3C (recommandations) ou l'IETF (appels à commentaires).


# Paris sur les questions de demain
Qu'est-ce que iso 9126?
Que signifie CMMI? Citez les différents niveaux
Question sur ITIL
Soit *nom d'entreprise bidon* vendant des CDs, ils décident de *faire un site web*, écrivez: un tableau de XXX (risque / )
4~~2~~0 balles sur la définition d'un processus