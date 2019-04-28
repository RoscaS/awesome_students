---
title: Recap CP1
date: 2019-04-26
author: Sol
sidebar: auto
project: false
hide: false
---

>Un patron décrit à la fois un **problème** qui se produit très fréquemment dans l’environnement et l’architecture de la **solution** à ce problème de telle façon que l’on puisse **utiliser** cette solution des milliers de fois sans jamais **l’adapter** deux fois de la même manière.

<br>

>Décrire avec succès des types de **solutions** **récurrentes** à des problèmes **communs** dans des types de situations.

<br>

>Une règle tripartite exprimant une relation entre un certain contexte, un certain problème qui apparaît répétitivement dans ce contexte et une certaine configuration logicielle qui permet la résolution de ce problème

<br>

>Design patterns are **typical solutions** to commonly occurring problems in software design. They are like **pre-made blueprints** that you can **customize** to solve a recurring design problem in your code.

<br>

En Bref les Design Patterns...
* C'est...
  * Une description d'une solution classique à un problème récurent
  * Une description d'une partie de la solution avec des relations avec le ssystème et les autres parties
  * Une technique d'architecture logicielle
* Ce n'est pas...
  * Une brique (Une pattern dépend de son environnement)
  * Une règle (Un pattern ne peut pas s'appliquer mécaniquement)
  * Une méthode (Ne guide pas une prise de décision. Un pattern **est** la décision prise !)

## Liens

* Relation entre objets: [ici](/articles/programmation/recap_relations_objets.html) et [la](https://roscas.github.io/prog/Prog-composition-aggregation.html) 
* Principes SOLID: [ici](/articles/programmation/principe_solid.html)

## À connaître

1. Singleton (<st c="b">Création</st>): Une classe qui n'a qu'une instance.
2. Composite (<st c="g">Structural</st>): Une structure hierarchique d'objets simples ou/et composites.
3. Decorator (<st c="g">Structural</st>): Ajoute dynamiquement des responsabilités aux objets.
4. Proxy (<st c="g">Structural</st>): Un objet qui en représente un autre.
5. Prototype (<st c="b">Création</st>): Une instance totalement initialisée à copier et cloner.
6. Builder (<st c="b">Création</st>): Sépare la construction d'un objet de sa représentation.
7. State (<st c="r">Comportement</st>): Altère le comportement d'un objet quand sont état change.
8. Factory method (<st c="b">Création</st>): Crée une instance issue de plusieurs classes dérivées.
9. Abstract Factory (<st c="b">Création</st>): Crée une instance issue de plusieurs familles de classes.
10. Command (<st c="r">Comportement</st>): Encapsule une requête dans un objet.
11. Memento (<st c="r">Comportement</st>): Capture et restore l'état interne d'un objet.

## Glossaire 

* **Modularité**: 
  * Facilité de gestion
* **Cohésion**:
  * Degré avec lequel les tâches réalisées par un seul module sont fonctionnellement reliées.
  * <st c="g">Une forte cohésion est une qualité</st>.
* **Couplage**:
  * Degré d'interaction entre les modules dans le système.
  * <st c="g">Un couplage faible est une qualité</st>

## En vrac

* Préférer la composition d’objet à l’héritage de classes.
  * Le comportement peut changer en cours d'exécution
  * Les classes sont plus focalisées sur une tache
  * Reduction des dépendances d'implémentation

## Introduction

### Catégories de patterns

* **Architectural patterns**: Schémas d'organisation structurelle de logiciels (pipes, filters, brokers, blackboard, MVC, ...)
* **Design patterns**: Caractéristiques clés d'une structure de conception commune à plusieurs applications. **Portée plus limitée que les architectural patterns**.
* **Idioms ou coding patterns**: Solutions liées à un langage particulier.
* **Anti-patterns**: Mauvaise solution.

### Catégories de Design Patterns

Il existe 23 paternes réparties en trois catégories:

* **Création**: Fournissent 


* **Création**:
  * Description de la manière dont un objet ou un ensemble d'objets peuvent être créés, initialisés et configurés.
  * Isolation du code relatif à la création à l'initialisation afin de rentre l'application indépendante de ces aspects.
* **Structure**:
  * Description de la manière dont doivent être connectés des objets de l'application afin de rendre ces connections indépendantes des évolitions futures de l'application.
  * Decouplage de l'interface et de l'implémentation de classes et d'objets.
* **Comportement**:
  * Description de comportement d'interaction entre objets.
  * Gestion des interactions dynamiques entre des classes et des objets.

# Patterns

## Factory method

### Objectif

Paterne de <st c="b">création</st> qui fournit une façon de déléguer la logique d'instanciation aux classes enfant.

### Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

* <st c="g">Faible couplage entre créateur et produit final</st>
* <st c="g">Principe de responsabilité unique: Le code qui sert à la création peut être séparé du reste</st>
* <st c="g">Principe ouvert/fermé: Facile d'introduire de nouveaux types de produits sans casser le code existant</st>

</template>
<template slot="right">

* <st c="rgb">Code complexe du à l'introduction des nombreuses sous classes nécessaires au paterne.</st>

</template>
</Col>      

### Exemple

![](http://www.thejavageek.com/wp-content/uploads/2016/06/factory-method-implementation.png)

### Relations avec d'autres paternes

* De nombreux design commencent par utiliser **Factory method** avant d'évoluer vers **Abstract factory**, **Prototype** ou **Builder** (plus flexible mais plus compliqué)
* **Factory methods** se combine bien avec **Iterator** pour laisser une collection dérivée retourner différents types d'itérateurs compatibles avec la collection.
* **Prototype** n'est pas basé sur de l'héritage et n'a donc pas les soucis induits par l'héritage mais nécessite une initialisation complexe de l'objet cloné.

<br>

<Container type="info">

* If you have an inheritance hierarchy that exercises polymorphism, consider adding a polymorphic creation capability by defining a static factory method in the base class.
* Design the arguments to the factory method. What qualities or characteristics are necessary and sufficient to identify the correct derived class to instantiate?
* Consider designing an internal "object pool" that will allow objects to be reused instead of created from scratch.
* Consider making all constructors private or protected.

</Container>

## Abstract factory

### Objectif

Paterne de <st c="b">création</st> qui offre un moyen d'encapsuler un groupe de Factory individuelles qui ont un thème commun sans spécifier leurs classes concrètes.

### Schéma


<Media
    src="http://www.thejavageek.com/wp-content/uploads/2016/07/DesignPatternClassDiagram.png"
    url="http://www.thejavageek.com/wp-content/uploads/2016/07/DesignPatternClassDiagram.png"
/>

* **AbstractFactory**: Interface qui déclare la façon de créér des produits abstraits.
* **ConcreteFactory**: Implémente les opérations de création des produits concrèts.
* **Product**: Déclare les produits créés par les factory correspondantes (souvent implémenté sous forme de Factory method)
* **Client**: Utilise les classes AbstractFactory et AbstractProduct

### Exemple


<Media
    src="http://www.thejavageek.com/wp-content/uploads/2016/07/BikeExampleDesignPattern-1.png"
    url="http://www.thejavageek.com/wp-content/uploads/2016/07/BikeExampleDesignPattern-1.png"
/>



### Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

* <st c="g">Les produits retournés par une factory sont compatible entre eux</st>  
* <st c="g">Faible couplage entre le code client et les produits concrets</st>
* <st c="g">Principe de responsabilité unique: Le code qui sert à la création peut être séparé du reste</st>
* <st c="g">Principe ouvert/fermé: Facile d'introduire de nouvelles variantes de produits sans casser le code existant</st>

</template>
<template slot="right">

* <st c="rgb">Code complexe du à l'introduction des nombreuses sous classes nécessaires au paterne.</st>

</template>
</Col>

### Relations avec d'autres paternes

* **Abstract factory** est souvent basé sur un groupe de **Factory methods**  mais pas nécessairement, **Prototype** peut être utilisé à la place.
* **Abstract factory** est une bonne alternative à **Facade** quand le but recherché n'est que de cacher la façon dont les objets du sous-système sont créés au client.
* **Abstract factory** se mélange bien avec **Bridge** quand certaines abstractions définies par **Bridge** ne peuvent fonctionner qu'avec des implémentations spécifiques. Dans ce cas, **Abstract factory** encapsule les relations et cache la complexité au code client.

<Container type="warning">

**Abstract factory**, **Builders** et **Prototypes** peuvent tous trois être implémentés sous forme de **Singleton**.

</Container>