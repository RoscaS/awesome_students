---
title: Les principes SOLID
date: 2019-04-27
author:  Sol
sidebar: auto
project: false
hide: false
---

* [source](https://blog.xebia.fr/2011/07/18/les-principes-solid/)

La conception orientée objet offre des mécanismes uniques de représentation de notre environnement mixant données et comportement, déclinant des notions génériques en de multiples plus spécialisées.

Outre cette capacité à représenter les choses, la conception orientée objet **offre également des mécanismes de tolérance au changement très puissants**. Cette tolérance est un des facteurs clés du développement logiciel, la maintenance demandant souvent des efforts croissants au fil du temps et de l’évolution du logiciel.

Mais comment caractériser l’intolérance au changement ? En voici les symptômes :

* **La rigidité** : Chaque changement cause une cascade de modifications dans les modules dépendants. 
  * Une intervention simple au premier abord se révèle être un véritable cauchemar.
* **La fragilité** : Tendance d’un logiciel à casser en plusieurs endroits à chaque modification. 
  * La différence avec la rigidité réside dans le fait que les interventions sur le code peuvent avoir des répercussions sur des modules n’ayant aucune relation avec le code modifié. Toute intervention est soumise à un éventuel changement de comportement dans un autre module.
* **L’immobilisme** : Incapacité du logiciel à pouvoir être réutilisé par d’autres projets ou par des parties de lui même. 
  * Il est presque impossible de réutiliser des parties intéressantes  du logiciel. L’effort demandé et les risques encourus sont trop importants.
* **La viscosité** : Il est plus facile de faire un contournement plutôt que de respecter la conception qui a été pensée. 
  * Lorsque nous intervenons sur du code existant, nous avons souvent plusieurs possibilités d’implémentations. Nous allons retrouver des solutions préservant, améliorant le design du code et d’autres qui vont casser ce design. Lorsque cette dernière catégorie est plus simple à mettre en place, nous considérons que le code est visqueux.
* **L’opacité** correspond à la lisibilité et la simplicité de compréhension du code. 
  * La situation la plus courante est un code qui n’exprime pas sa fonction première. Ainsi, plus un code est difficile à lire et à comprendre et plus nous allons considérer que ce dernier est opaque.


## Responsabilité unique

<br>

>Single Responsibilty Principle: A class should have one reason to change.

<br>

Ce principe signifie qu’une classe ne doit posséder qu’une et une seule responsabilité. 

Si une classe a plus d’une responsabilité, ces dernières se retrouveront liées. Les modifications apportées à une responsabilité impacteront l’autre, augmentant la **rigidité** et la **fragilité** du code.

## Ouvert / fermé

<br>

> Open Closed Principle: Classes, methods should be open for extension, but closed for modifications.

<br>

Une classe, une méthode, un module doit pouvoir être étendu, supporter différentes implémentations (Open for extension) sans pour cela devoir être modifié (closed for modification).

Les instanciations conditionnelles dans un constructeur sont de bons exemples de non respect de ce principe. Une nouvelle implémentation aura pour impact l’ajout d’une condition dans la méthode.

<Spoiler tag="Exemple">

```java
Public Car(EngineTypeEnum engineType) {
    if (engineType == EngineTypeEnum.FUEL) {
        Engine = new FuelEngine() ;
    } else if (…) {
        …
    }
}
```

Dans cet exemple nous voyons que l’ajout d’un type d’Engine va entraîner une modification du constructeur. Nous sommes en **violation avec la deuxième partie du principe**: *Closed for modification*.

Plusieurs solutions s’offrent à nous. La première consiste à utiliser l’injection de dépendance dans sa forme la plus simple :

```java
public Car (Engine engine) {
   this.engine = engine ;
}
```

Il sera préférable d’utiliser une fabrique d’objets ou de l’injection de dépendance pour réduire le couplage:

```java
public Car (EngineType engineType) {
   engine = EngineFactory.getEngine(engineType) ;
}

@Inject
Engine engine
```

</Spoiler>


## Substitution de Liskov

<br>

>Liskov Substitution Principle: Subtypes must be substituable for their base types. 

<br>

Les sous classes doivent pouvoir être substituées à leur classe de base sans altérer le comportement de ses utilisateurs. Autrement dit, un utilisateur de la classe de base doit pouvoir continuer de fonctionner correctement si une classe dérivée de la classe principale lui est fournie à la place.

Cela signifie, entre autres, qu’il ne faut pas lever d’exception imprévue, ou modifier les valeurs des attributs de la classe principale d’une manière inadaptée, ne respectant pas le contrat défini par la méthode.

## Ségrégation des interfaces

<br>

>Interface Segregation Principle: Clients should not be forced to depend on methods that they do not use. 

<br>

Le but de ce principe est d’utiliser les interfaces pour définir des contrats, des ensembles de fonctionnalités répondant à un besoin fonctionnel, plutôt que de se contenter d’apporter de l’abstraction à nos classes. Il en découle une réduction du couplage, les clients dépendant uniquement des services qu’ils utilisent.

L’utilisation systématique d’interface de type `MaClasse_I` reprenant les méthodes publiques de la classe `MaClasse` n’est par conséquent pas une bonne pratique car cela lie nos contrats à leur implémentation, rendant délicat la réutilisation et les refactorings à venir.

## Inversion des dépendances

<br>

>Dependency Inversion Principle
> * High level modules should not depend on low level modules. Both should depend on abstractions.
> * Abstractions should not depend on details. Details should depend on abstractions.

<br>

Attardons-nous sur la notion importante de ce principe : Inversion. Le principe de DIP stipule que les modules de haut niveau ne doivent pas dépendre de modules de plus bas niveau. Mais pour quelle raison ? Pour répondre à cette question, prenons la définition à l’envers : les modules de haut niveau dépendent de modules de bas niveau. En règle générale les modules de haut niveau contiennent le cœur – business – des applications. Lorsque ces modules dépendent de modules de plus bas niveau, les modifications effectuées dans les modules « bas niveau » peuvent avoir des répercussions sur les modules "haut niveau" et les "forcer" à appliquer des changements.

A travers cet exemple nous voyons que les modules de haut niveau sont difficilement réutilisables pour de multiples contextes : les modifications d’un contexte donné sont susceptibles d’entraîner des changements dans les autres contextes. Une solution consiste à rendre indépendants les modules de haut et bas niveau.

## SOLID ou pas SOLID ?

### Tolérance au changement et productivité

Nous l’avons vu, la conception objet et le respect de principes simples permettent de rendre un logiciel plus souple, plus évolutif, moins dépendant de son environnement et de ses évolutions. Néanmoins, cela nécessite un niveau d’abstraction élevé qui n’est pas toujours utile. En effet, un autre principe tend à s’opposer à l’application systématique des principes **SOLID** : le fameux **YAGNI** (« You Ain’t Gonna Need It »). Pourquoi mettre en place tout un système de tolérance au changement dans un système statique, avec peu de dépendances externes ? Notre logiciel sera effectivement extrêmement robuste envers des événements qui n’auront pas lieu, ou avec un impact minime. L’investissement effectué s’avère peu productif, avec un retour sur investissement négatif.

La raison, le pragmatisme et l’expérience vont nous permettre d’**arbitrer sur une conception plus ou moins abstraite**,** plus ou moins tolérante au changement**. Un module commun à plusieurs applications sera nécessairement plus abstrait afin de réduire le couplage. Des composants internes à une application ne nécessiteront pas le même effort. Nous n’allons pas rendre toutes les créations d’objet indépendantes des implémentations sous peine d’avoir plus d’interfaces et de factories que de classes concrètes. On peut envisager de commencer une implémentation sans avoir recours à l’ensemble des principes précédents et de les mettre en œuvre quand la nécessité s’en fait sentir (ajout d’un cas particulier, d’une condition, d’une nouvelle implémentation, etc.). L’apparition d’instanciations conditionnelles, de conditions sur le type d’une classe, sont autant de signaux en faveur de SOLID et nécessitent d’engendrer une réflexion sur un éventuel refactoring. Celui-ci fait en effet partie intégrante du développement et il n’est pas choquant d’ajuster les choix de conception au moment où l’on en a besoin. On gagnera ainsi en productivité sans pour autant sacrifier la qualité de l’application.