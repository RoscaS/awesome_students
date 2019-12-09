---
title: Recapitulatif cp1
date: 2019-12-06
author: Sol
sidebar: auto
project: false
hide: false
---

## Glossaire

* **JEE** : Java Enterprise Edition
* **JVM** : Java Virtual Machine
* **JSP** : Java Server Pages
* **JSF** : Java Server Faces
* **JPA** : Java Persistance API
* **EJB** : Enterprise Java Bean
* **JMS** : Java Messaging Service
* **SOA**: Service Oriented Architecture
* **WOA**: Web Oriented Architecture
* **REST**: Representational State Transfert
* **JSON**: Javascript Object Notation

## Architectures

### Architectures logicielles
Une **architecture logicielle** consiste à définir pour un système informatique **les éléments qui le composent, les liens qui les relient, les interfaces de ces éléments et l'organisation qui les gère**.

Une architecture logicielle d'un programme ou d'un système d'information **est la structure ou les structures de ce système incluant les composants logiciels, leurs interfaces visibles et les relations** qui les relient.

### Typologie d'architecture

* [Best explanation ever](https://medium.com/swlh/dismantling-the-monolith-how-microservices-works-8a5ad8d136b4)

<br>

![Image](https://i.imgur.com/nzZlXYL.png)

#### Monolithe
* Un unique livrable
* Transactionnel
* Simple jusqu'à un certain volume

#### Distributée
* Plusieurs livrables
* Communications entre composants complexifiée
* Permet un partage du travail
* **Principe de responsabilité unique**






## Architecture évènementielle

- Publih/subscribe
- Asynchrone
- Couplage faible

## Applications réparties

- Distribution des données
- Distribution du contrôle
- Distribution des utilisateurs
- Le Web : une combinaison de tout ça

WOA -> Web Oriented Architecture

## La répartition

- Besoins propres des applications
  - Intégration d'applications existantes initialement séparées (legacy)
  - Intégration massive de ressources
  - Pénétration de l'informatique dans des domaines nouveaux d'application
  - Surveillance et commande d'installations
- Possibilités techniques
  - Coût et performances des machines et des communications
  - Interconnexion généralisée

### Solutions techniques

- Client-serveur
  - Exécution synchrone
  - Serveurs coopérants, service discontinu
- Objets partagés
- Flots de communication
- Agents
  - Programme agissant pour le compte d'une entité cliente
  - Agents fixes ou mobiles, statiques ou adaptifs
  - Coopération entre agents

## JVM

Permet de faire abstraction de l'architecture

### Heap

Le tas, mémoire active

- gère les instances de classe
- les tableaux
- Continuellement assaini par un mécanisme automatique (garbage collector)

Connaitre (un peu) le schéma

### Non Heap Memory

- Structure des classes
- données des champs et méthodes
- code des méthodeset des constructeurs

### Other

Le reste...

### Servlet
Le servlets joue le rôle du contrôleur.
Le servlet lit les donnàes envoyées par un client web (transmises par le serveur)

Servlet est un composant java, s'exécute dans un container à servlet (Tomcat est le plus connu)


Servlet vu comme une variable, commence par par une majuscule.

Sur le projet clic droit -> run as -> Run on server

Attention les urls sont prefixés par le nom du projet.

Une servlet n'est pas adapté à la production de page. (out.append trop nombreux)


## Test à blanc
### Donnez une définition en une phrase du concept d'architecture logicielle
Une architecture logicielle consiste à définir pour un système informatique les éléments qui le composent, les liens qui les relient, les interfaces de ces éléments et l'organisation qui les gère
* Eléments et interactions
* Liens qui les relient
* Organisation qui les gèrent

### Qu'est ce qui définit une architecture SOA, donnez une définition en une phrase
* Système fournissant une forte cohérence interne
* Couplage externe lâche, fournissant des interfaces de comunications

### Quelles sont les différences entre le modèle d'exécution bloquant et le modèle non bloquant
* Bloquant
  * 1 thread par requête
  * Appels synchrones bloquants
  * Utilisations de pool de ressources limitée
  * Single Point Of Failure sur la db
  * Gaspillage de ressources
  * Utilisation de verrou
* Non bloquant
  * 1 thread "orchestrateur"
  * Appels asynchrones non bloquants
  * Pas de pool de ressources
  * Optimisation de l'utilisation des ressources
  * Pas de SPOF
  * Pas (peu) de verrous

### Qu'est ce que la JVM
* JVM : Machine virtuelle destinée à exécuter des programmes Java
* Une machine virtuelle (VM) est une architecture abstraite
* Elle fait abstraction du système d'exploitation du serveur
* Permet d'écrire des programmes java portables sur différents systèmes d'exploitation
* Spécifications élaborées par Sun
* Différentes implémentations de JVM existent

## Schématiser l'architecture interne de la JVM, min Heap, Non-Heap, Eden, Young et Old generation
> Toutes les unes à côtés des autres

Eden, s0, s1, Old Memory, Perm
s0 et s1 communiquent entre eux

La minor GC est composée de Eden

Major GC est composée de Old Memory

Young-Gen composée de Eden, S0 et S1
JVM Heap Composée de Eden, s0, s1, Old Memory

### Décrivez succintement 2 des 4 stratégies Garbage Collecting étudiées
* Serial Garbage Collector
  * Uniquement utilisé par les petites applications (1 CPU)
  * Single Thread
  * GC Bloquant
* Parallel Garbage Collector
  * Collecteur par défaut pour la JVM
  * Bloquant comme serial mais multithreadé
* CMS Garbage Collector
  * Multiple thread en même temps pour GC
  * Rarement bloquant
* G1 Garbage Collector
  * Depuis java 7
  * Optimiser pour les grosses heap
  * Compactage de la heap libre

### Qu'est ce qu'on appelle Servlet en JEE
* Une classe héritant de HttpServlet
* Permet la programmation d'applications coté serveur
* Permet l'extension d'un serveur Web en java
* Permet la construction d'application Web dynamique
* Equivalent des CGI en java

### Requête
* ContectPath
  * /MyApp
* ServletPath
  * /test
* PathInfo
  * /info?id=2

### Expliquez la différence entre paramètres de requête et attributs de requêtes
* Les paramètres d'une requête sont le ou les paramètres envoyés par le client au serveur
  * Toujours de type chaine de caractère
  * Immuable, le serveur ne peut pas les modifier
* Les attributs de requête sont des objets Java utilisé uniquement côté serveur (servlet, JSP)
  * De n'import quelle type Java (sérialisable)

### Qu'est ce qu'une JSP
* Page html
* Extension .jsp
* Contient des balises web standards et des balises Java (scriplet)
* Compilé par le serveur en servlet
* Du coup une jsp fournit les objets hérités de HttpServlet

### Différences
* request.getRequestDispatcher("/test,jsp").forward(request, response)
  * Fournit la suite du traitement à une servlet ou une page jsp
* response.sendRedirect("/logout")
  * Effecture une demande de redirection au navigateur (réponde en 2 temps)

## Notes révision
### Répartition
Besoins : intégration d'app existante,  integration massive de ressources, pénétration d'informatique dans de nouveaux domaines, surveillance d'installations

### SOA vs WOA
SOA
* Modélisation par opération
* modèle prog. distribué par un proxy
* toolkit interprété
* consommé par des serveurs
* protocole spécifique

WOA
* Modélisation par ressources
* Modèle distribuée basé sur WWW
* Consommé par tout type de terminal

### Web services
Composant logiciel, accessible sur le réseau, invoquer (SOAP, HTTP, ...), décrit (WSDL, JSON), publié et recherchable, peut être composé avec d'autres Web Services

### n-tiers
3 tiers : présentation, application, données

Serveur web : spécialisé rendu page web
Serveur app JEE : Maintient le contrôle et fournit des service réutilisables
Composant JEE : logiciel réutilisable, assemblé dans un serveur d'app
Framework : cadre de travail fournit par un environnement d'exécution

Modèle JEE :
client-tier : s'exécutent sur la machine cliente
web-tier : s'exécutent sur un web server
business-tier : sur java EE server
Entreprise Information System s'exécutent sur EIS server

servlet joue le rôle de contrôleur

JEE vs Spring
JEE
Nécessite des spéc définies par Oracle
Serveur d'app
Plusieurs fournisseur
Moins flexible, dépendances offertes par le serveur d'app

Spring
Ensemble de bibliothèques Jar
nécessite pas serveur d'app
Un seul fournisseur
Licenses Open source
Très flexible, tous les jars dans une archive

JVM Machine Virtuelle pour exécuter des programmes Java, architecture abstraite, abstraction de l'OS, programmes portables

HEAP, le tas gère les instances de classe et les tableaux, créer au démarrage de la JVM, default 64MO, assaini par le GC, taille fixe ou variable suivant la strat du GC
* Young generation
  * Eden tous objets créés dans les méthodes et les classes
  * Survivor Objets en utilisation ayant survécu à un GC SWAP
* Old generation
  * Objets référencés depuis longtemps
  * Très gros objets

GC, Garbage Collector=Ramasse-miettes
Fonctionnalité de la JVM, gère la mémoire en libérant celle des objets qui ne sont plus utilisés
Améliore la productivité

Créer dans eden, déplacé dans survivor, si survécu plusieurs fois dans survivor, déplacé dans Old Generation

Mark & sweep
chaque cycle GC :
Phase Mark : instanciation d'un objet marqué false, parcours des instances et marquage des éléments atteignables true
Phase Sweep : parcours du Heap, suppression des false, element réstants marquées false

Servlet est un composant java, s'exécute dans un container, conformer à une interface, container qui décide de l'instantiation (container style tomcat)
Servlet à un nom et un urlPatterns (via @WebServlet), étend HttpServlet et override doGet et doPost

Filtre morceau de code exécuté entre la requête et le servlet, permet de faire du pre et post-processing sur une requête
Lire la requête ou la modifier, modifier la réponse, retourner des erreurs au client
Init/doFilter/destroy


## Spring - présentation
Spring permet de faire les app
Spring boot permet de diviser par 10 le nombre de ligne de code
Spring boot permet de se baser sur des conventions et d'automatiser bon nombre de choses.


## Devops
Confusion entre développeur et le réseau pour le déploiement

SpringBoot propose de générer un jar et on déploie notre jar.

### SOA Service Oriented Architecture
Architecture orientée service, service fournis à l'extérieur : servir des données

### SOP
## TODO

## Le controleur Spring
* Intercepte les requêtes entrantes

## Certains éditeur font de la réflexion
Il ajoute automatiquement des setters.

`@Autowired` injection de dépendances

## Sécurité et authentification
Authentification basé sur les rôles gentillement remplacé par l'authentification par attribut. Du type fait partis du département de x son boss est ...


## Test
On test que le test est faux, puis on mets le code qui va faire marcher notre test et on retest.