---
title: Modélisation
date: 2018-10-22
author: Sol
sidebar: auto
---

## Diagrammes entité-association

### Entités
* Entité: une chose, un objet
* **Ensemble d'entité**
    * Collection d'objets similaires (~classe d'objets)
    * Représenté par un rectangle
* **Attribut**: Propriété des éléments de l'ensemble
    * Représenté par un ovale lié par une ligne
    * sont des valeurs simples 

* **Ensemble d'entités: associations**

### Attributs
* Une entité est définie par un ensemble d'attributs
* Chaque attribut a une valeur
  

### Role
* Etiquette sur la ligne 
* Choix multiple

### Identifiants
* Aussi appelé **clé**
* souligné

<Container type="warning">

Dans une hiérarchie (isa), seule la racine définit l'identifiant

</Container>


## Modélisation

* **Type d'entités**: noms communs
    * Les entités sont des objets, des choses

* **Entités**: noms propres
* **Type d'associations**: verbes transitifs
    * Les associations sont des liaisons entre les choses
* **Attribut d'entité**: adjectifs (verte, grande, petite, ...)
* **Attribut d'associations**: adverbes (prudement, rapidement, ...)


### Exemple
* Dans l'entreprise **Duroc**, chaque **employé** _travaille_ dans exactement un **département**.
* Il n'y a pas de restriction par rapport au nombre de personnes qu'un département peut employer.


### Contraintes
* Identifiants
* Cardinalité des associations
* Clés étrangeères (FK)
* Intervalles de domaine (ex. jours du mois)
* Cardinalité des attributs
* Contraintes particulières de l'applicaiton
    * _On les ajoute à la main, (cas de merde)_

### Techniques de conception
* Éviter la redondance
    * Représenter la même information plusieurs fois
    * Gaspillage
    * donner de la marge à l'incohérence
        * Changer une copie sans changer l'autre
    * Limiter l'utilisation d'entités faibles
    * Ne pas utiliser un ensemble d'entités quand un attribut suffisant
