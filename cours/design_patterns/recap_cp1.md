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

>Les patterns sont des généralisations de solutions spécifiques, fréquemment utilisées.

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

## Q&A

* Q: On dit que les design patterns sont une façon de réutiliser. Qu'est-ce qu'on réutilise?
* A: Les associations d'objets (architecture et design).

<br>

* Q: Qu'est-ce qui fait que les objets des DP aient un couplement faible ?
* A: Utilisation intensive des interfaces.

<br>

* Q: Exemple de stratégie orienté objet : "les composants doivent avoir forte cohésion et faible couplement". Expliquer pourquoi les design patterns ne sont pas des stratégies.
* A: Les stratégies sont des idées générales. On les retrouve dans les patterns. Les patterns sont des généralisations de solutions spécifiques, fréquemment utilisées.

<br>

* Q: Est-ce qu’une table de hash (HasMap en Java) est un design pattern ?
* A: Hash table est une structure de données, plus spécifique qu’un pattern.

<br>

* Q: Vous faites un nouveau programme qui contient une solution nouvelle et efficiente pour un problème de design. Est-ce que l'on peut dire que vous avez créé un nouveau pattern ?
* A: Non. Un pattern est identifié par sa présence fréquente dans nos designs. Une solution utilisée une fois n’est pas un pattern.

<br>

* Q: Vous avez un ensemble de classes d'enregistrement de "logs" avec l'interface suivante :

```java
interface Logger {
    void error(String message);
    void warning(String message);
    void info(String message);
    void debug(String message);
}
```
Selon le cas d’utilisation, vous avez besoin d'avoir plusieurs types de Logger, avec des
différents formats de sortie (syslog, XML, simple). Pour chaque programme exécuté, vous
n'avez qu'un Logger à utiliser, choisi au début de l'exécution selon un fichier de
configuration. Quels patterns utiliseriez-vous dans ce contexte ?

* A: Un Logger est un objet décoré par un Decorator. On créera des Loggers avec des AbstractFactory, selon la décoration souhaitée. Un seul Logger existe : c’est un Sigleton.

<Spoiler tag="formats">

```
# Format syslog
Mon May 9 22:35:13.037 <warning> AirPort_Brcm43xx::platformWoWEnable: WWEN[enable]
Mon May 9 22:35:13.037 <error> AirPort_Brcm43xx::syncPowerState: WWEN[enabled]
Mon May 9 22:35:14.212 <info> AirPort_Brcm43xx::platformWoWEnable: WWEN[disable]
Mon May 9 22:47:26.523 <info> wl0: setup_keepalive: interval 900, retry_interval 30, retry_count 10
Mon May 9 22:47:26.523 <warning> wl0: setup_keepalive: Local IP: 192.168.0.12

# Format XML
<log>
<timestamp>Mon May 9 22:35:13.037</timestamp>
<severity>warning</severity>
<message>AirPort_Brcm43xx::platformWoWEnable: WWEN[enable]</message>
</log>
<log>
<timestamp>Mon May 9 22:35:13.037</timestamp>
<severity>error</severity>
<message>AirPort_Brcm43xx::syncPowerState: WWEN[enabled]</message>
</log>
...

# Format simple
warning: AirPort_Brcm43xx::platformWoWEnable: WWEN[enable]
error: AirPort_Brcm43xx::syncPowerState: WWEN[enabled]
info: AirPort_Brcm43xx::platformWoWEnable: WWEN[disable]
info: wl0: setup_keepalive: interval 900, retry_interval 30, retry_count 10
warning: wl0: setup_keepalive: Local IP: 192.168.0.12
```

</Spoiler>



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

* [refactoring.guru](https://refactoring.guru/design-patterns/factory-method)

Paterne de <st c="b">création</st> qui fournit une façon de déléguer la logique d'instanciation aux classes enfant.

### Objectif


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


### Schéma

![Image](https://i.imgur.com/zuMqpTm.png)

1. The **Product** declares the interface, which is common to all objects that can be produced by the creator and its subclasses.
2. **Concrete Products** are different implementations of the product interface.
3. The **Creator** class declares the factory method that returns new product objects. It’s important that the return type of this method matches the product interface. <br><br> You can declare the factory method as abstract to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type. <br><br> Note, despite its name, product creation is <st c="r">not</st> the primary responsibility of the creator. Usually, the creator class already has some core business logic related to products. The factory method helps to decouple this logic from the concrete product classes. Here is an analogy: a large software development company can have a training department for programmers. However, the primary function of the company as a whole is still writing code, not producing programmers.
4. **Concrete Creators** override the base factory method so it returns a different type of product. <br><br> Note that the factory method doesn’t have to **create** new instances all the time. It can also return existing objects from a cache, an object pool, or another source.


### Exemple


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

* [refactoring.guru](https://refactoring.guru/design-patterns/abstract-factory)

### Objectif

Paterne de <st c="b">création</st> qui offre un moyen d'encapsuler un groupe de Factory individuelles qui ont un thème commun sans spécifier leurs classes concrètes.

### Schéma



* **AbstractFactory**: Interface qui déclare la façon de créér des produits abstraits.
* **ConcreteFactory**: Implémente les opérations de création des produits concrèts.
* **Product**: Déclare les produits créés par les factory correspondantes (souvent implémenté sous forme de Factory method)
* **Client**: Utilise les classes AbstractFactory et AbstractProduct

### Exemple





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
* **Abstract factory** se mélange bien avec **Bridge** quand certaines abstractions définies par **Bridge** ne peuvent fonctionner qu'avec des implémentations spécifiques. Dans ce cas, 
* **Abstract factory** encapsule les relations et cache la complexité au code client.

<Container type="warning">

**Abstract factory**, **Builders** et **Prototypes** peuvent tous trois être implémentés sous forme de **Singleton**.

</Container>




## Prototype

* [refactoring.guru](https://refactoring.guru/design-patterns/prototype)

Paterne de <st c="b">création</st> qui permet de créer un objet sur base d'un objet déja existant.

### Objectif

* Créer des objets à partir d’un exemple

### Motivation

* Définition des nouveaux objets en fonction de leur état ou de leur composition (et non pas en fonction de la classe)
* Moins d'héritage
* Définition plus dynamique

### Schéma

![Image](https://i.imgur.com/L8qTQav.png)


### Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

* <st c="g">Création d'objets sans avoir accès à la classe de l'objet (couplage faible)</st>
* <st c="g">Possibilité de ne plus répéter des constructions d'objets "standards" (clonage d'un objet prototypé pré construit)</st>
* <st c="g">Facilite la création d'objets complexes</st>
* <st c="g">You get an alternative to inheritance when dealing with configuration presets for complex objects.</st>

</template>
<template slot="right">

* <st c="r">Clonage d'objet complexes avec des références circulaires est tricky</st>

</template>
</Col>

### Relations avec d'autres paternes

* Designs that make heavy use of **Composite** and **Decorator** can often benefit from using **Prototype**. Applying the pattern lets you clone complex structures instead of re-constructing them from scratch.
* **Prototype** isn’t based on inheritance, so it doesn’t have its drawbacks. On the other hand, **Prototype** requires a complicated initialization of the cloned object. Factory Method is based on inheritance but doesn’t require an initialization step.
* Sometimes **Prototype** can be a simpler alternative to **Memento**. This works if the object, the state of which you want to store in the history, is fairly straightforward and doesn’t have links to external resources, or the links are easy to re-establish.


## Builider

* [refactoring.guru](https://refactoring.guru/design-patterns/builder)

Buil der is a <st c="b">creational</st> design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

### Objectif

* Séparer la construction d’un objet de sa représentation

### Motivation

* Un objet a une façon très compliquée de se construire
* La construction n’a rien à voir avec le métier

### Cas d'utilisation

* L’algo de création est indépendant des parties qui forment l’objet
* L’algo de création supporte plusieurs représentations de l’objet

### Schéma

![Image](https://i.imgur.com/IXvmT6e.png)

* **Builder**: Spécifie une interface abstraite pour créer l'objet
* **ConcreteBuilder**:
  * Construit (assemble) le Produit
  * Implémente Builder
  * Retourne le Product
* **Director**: Construit (via Builder) le Porduct
* **Product**: Représente l'objet complexe en construction

1. Le client crée le Director et le configure
2. Director intéragit avec le Builder pour construire le Product
3. Le client récupère le Product

### Conséquences

* **Product** peut avoir plusieurs structures très différentes
* Isole la construction de la représentation
* Donne un contrôle plus fin au processus de création

### Pour et contre


<Col proportions="6/6" vAlign="0">
<template slot="left">

 * <st c="g">You can construct objects step-by-step, defer construction steps or run steps recursively.</st>
 * <st c="g">You can reuse the same construction code when building various representations of products.</st>
 * <st c="g">Single Responsibility Principle. You can isolate complex construction code from the business logic of the product.</st>

</template>
<template slot="right">

* <st c="r"> The overall complexity of the code increases since the pattern requires creating multiple new classes.</st>

</template>
</Col>


### Relations avec d'autres paternes

* **Builder** focuses on constructing complex objects step by step. **Abstract Factory** specializes in creating families of related objects. **Abstract Factory** returns the product immediately, whereas **Builder** lets you run some additional construction steps before fetching the product.
* You can use **Builder** when creating complex **Composite** trees because you can program its construction steps to work recursively.
* You can combine **Builder** with **Bridge**: the director class plays the role of the abstraction, while different builders act as implementations.







## Proxy

* [refactoring.guru](https://refactoring.guru/design-patterns/proxy)

Prox y is a <st c="g">structural</st> design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

<br>

> Proxy is invaluable when you have to add some additional behaviors to a class which code you can’t change.

<br>

### Objectif

Fournir un objet qui représente un autre objet.

### Motivation

Le vrai objet n’est pas accessible directement
* Pas encore crée
* Distant (réseau)
* Ajouter du traitement avant et/ou après l'appel d'une methode de l'objet

### Cas d'utilisation

Cas d’utilisation
* Protéger un objet
* Simuler un objet (pour retarder sa création ou son accès)
* Accéder à distance

### Schéma

![Image](https://i.imgur.com/wIrV4Am.png)

* **Participants**
  * **Proxy**
    * Maintient une référence à l'objet représenté
    * Offre la même interface
    * Controle l'accès
* **Subject**
  * Définit l'interface de l'objet représenté
* **RealSubject**
  * L'objet représenté

Le Proxy renvoie au RealSubject les appels (si nécessaire).

<Spoiler tag="Complément">

![Image](https://i.imgur.com/m4paxoa.png)

1. The **Service Interface** declares the interface of the Service. The proxy must follow this interface to be able to disguise itself as a service object.
2. The **Service** is a class that provides some useful business logic.
3. The **Proxy** class has a reference field that points to a service object. After the proxy finishes its processing (e.g., lazy initialization, logging, access control, caching, etc.), it passes the request to the service object. Usually, proxies manage the full lifecycle of their service objects.
4. The **Client** should work with both services and proxies via the same interface. This way you can pass a proxy into any code that expects a service object.

</Spoiler>


### Conséquences

* Création d'un niveau d'indirection
* Optimisation (lazy creation, copy on write)

### Implémentation

* Surcharge de toutes les méthodes d'accès
* On peut masquer ceraines méthodes (corp vide)
* Proxy ne connait pas forcément le vrai type de l'objet représenté

### Pour et contre


<Col proportions="6/6" vAlign="0">
<template slot="left">

Colonne de gauche (ne pas supprimer les lignes vides!)

</template>
<template slot="right">

Collonne de droite (ne pas supprimer les lignes vides!)

</template>
</Col>


### Relations avec d'autres paternes

<Container type="warning">

* **Adapter** provides a different interface to the wrapped object.
* **Proxy** provides it with the same interface.
* **Decorator** provides it with an enhanced interface.

</Container>

* **Facade** is similar to **Proxy** in that both buffer a complex entity and initialize it on its own. Unlike **Facade**, **Proxy** has the same interface as its service object, which makes them interchangeable.

* **Decorator** and **Proxy** have similar structures, but very different intents. Both patterns are built on the composition principle, where one object is supposed to delegate some of the work to another. The difference is that a **Proxy** usually manages the life cycle of its service object on its own, whereas the composition of **Decorators** is always controlled by the client.



## Decorator

* [refactoring.guru](https://refactoring.guru/design-patterns/decorator)

Decorator is a <st c="b">structural</st> design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

> A constructor that takes an instance of the same abstract class. That's the recognition key of the decorator pattern (this also applies to constructors taking an instance of the same interface).

### Objectif 

* Rajouter dynamiquement des responsabilités
* Spécialisation dynamique

### Motivation

* Augmenter les repsponsabilités d'un objet **et non pas de toute la classe**

### Cas d'utilisation

* Rajouter des responsabilités à des objets individuels
* Les responsabilités peuvent être supprimées
* Les cas où la spécialisation n'est pas pratique

### Structure 

![Image](https://i.imgur.com/6KcANdW.png)


1. The **Component** declares the common interface for both wrappers and wrapped objects.
2. **Concrete Component** is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.
3. The **Base Decorator** class has a field for referencing a wrapped object. The field’s type should be declared as the component interface so it can contain both concrete components and decorators. The base decorator delegates all operations to the wrapped object.
4. **Concrete Decorators** define extra behaviors that can be added to components dynamically. Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.
5. The **Client** can wrap components in multiple layers of decorators, as long as it works with all objects via the component interface.

### Conséquences
* Plus de flexibilité que l'héritage statique
  * choix fait au moment de l'exécution
* les classes élevées (dans la hierarchie) sont moins chargées
* Le Décorator et le Component ne sont pas identiques
  * Impossible de choisir un comportement en fonction de l'identité
* Création de nombreux petits objets

### Relations avec d'autres paternes

* **Composite** and **Decorator** have similar structure diagrams since both rely on recursive composition to organize an open-ended number of objects.
* A **Decorator** is like a **Composite** but only has one child component. There’s another significant difference: **Decorator** adds additional responsibilities to the wrapped object, while Composite just “sums up” its children’s results.
* However, the patterns can also cooperate: you can use **Decorator** to extend the behavior of a specific object in the Composite tree.



## Command

* [refactoring.guru](https://refactoring.guru/design-patterns/command)

Command is a <st c="r">behavioral</st> design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.

### Objectif

* Encapsuler une requête dans un objet
  * Construire des requêtes configurables
  * Mettre des opérations dans une queue, temporiser leur exécution, les éxécuter de l'autre coté d'un réseau
  * Implémenter un système d'undo

### Motivation

Lancer une requête sans rien connaitre sur comment la gestion de la requête est faite ni même sur qui la traite.

### Cas d'utilisation

* Enregistrer une opération quelque part qui sera appelée plus tard
* Créer des queues de taches à exécuter
* Généraliser la possiblité de "undo"

### Schéma

![Image](https://i.imgur.com/3yrl2sX.png)

* **Command** déclare l'interface pour exécuter une opération
* **ConcreteCommand** concrétise les opérations pour un type de **Receiver** donné
* **Receiver** est l'objet sur lequel les opérations seront faites
* **Client** crée le **ConcreteCommand** (et y rajoute la référence au **Receiver**)
* **Invoker** est celui qui appelle des **Commands** sans savoir ce qu'elles font

<Spoiler tag="Complément">

![Image](https://i.imgur.com/djAe5NH.png)

1. The **Sender** class (aka **invoker**) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
2. The **Command** interface usually declares just a single method for executing the command.
3. **Concrete Commands** implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged.
4. Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.
5. The **Receiver** class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
6. The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.

</Spoiler>


### Conséquences

* Déconnection de l'objet qui déclenche une action de celui qui l'exécute
* Les **Command** sont des objets parametrable et non plus juste des appels de methode
* Un **Command** peut être un ensemble de commandes (**Composite pattern**)
* Il est simple de rajouter de nouvelles **Command**

### Implémentation

* Le **Command** peut:
  * Tout déléguer au **Receiver**
  * Tout faire lui-même
* Pour supporter undo et redo:
  * Le **Command** doit enregistrer l'état du **Receiver** après chaque commande
  * Garder une liste historique des Commandes exécutées (associées à un état dans le Reciever)

### Exemple

![Image](https://i.imgur.com/g9TDjQY.png)


### Pour et contre


<Col proportions="6/6" vAlign="0">
<template slot="left">

 * <st c="g">Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform these operations.</st>
 * <st c="g">Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.</st>
 * <st c="g">You can implement undo/redo.</st>
 * <st c="g">You can implement deferred execution of operations.</st>
 * <st c="g">You can assemble a set of simple commands into a complex one.</st>

</template>
<template slot="right">

* <st c="r">The code may become more complicated since you’re introducing a whole new layer between senders and receivers.</st>

</template>
</Col>


### Relations avec d'autres paternes

<Container type="warning">

**Chain of Responsibility**, **Command**, **Mediator** and **Observer** address various ways of connecting senders and receivers of requests:
* **Chain of Responsibility** passes a request sequentially along a dynamic chain of potential receivers until one of them handles it.
* **Command** establishes unidirectional connections between senders and receivers.
* **Mediator** eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object.
* **Observer** lets receivers dynamically subscribe to and unsubscribe from receiving requests.

</Container>

* You can use **Command** and **Memento** together when implementing “undo”. In this case, **commands** are responsible for performing various operations over a target object, while **mementos** save the state of that object just before a command gets executed.

<Container type="warning">

**Command** and **Strategy** may look similar because you can use both to parameterize an object with some action. However, they have very different intents.

* You can use **Command** to convert any operation into an object. The operation’s parameters become fields of that object. The conversion lets you defer execution of the operation, queue it, store the history of commands, send commands to remote services, etc.
* On the other hand, **Strategy** usually describes different ways of doing the same thing, letting you swap these algorithms within a single context class.

</Container>

* **Prototype** can help when you need to save copies of **Commands** into history.
* You can treat **Visitor** as a powerful version of the **Command** pattern. Its objects can execute operations over various objects of different classes.


## Memento

* [refactoring.guru](https://refactoring.guru/design-patterns/memento)

Memento is a <st c="r">behavioral</st> design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

<br>

>The Memento pattern delegates creating the state snapshots to the actual owner of that state, the originator object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state.

<br>

### Objectif

* Externaliser l'état d'un objet pour (éventuellement) le remettre plus tard, sans pour autant exposer cet état

### Motivation

* L'état d'un objet ne doit pas être visible de l'extérieur

### Cas d'utilisation

* When you want to produce snapshots of the object's state to be able to restore a previous state of the object.
  * The Memento pattern lets you make full copies of an object’s state, including private fields, and store them separately from the object. While most people remember this pattern thanks to the “undo” use case, **it’s also indispensable when dealing with transactions** (i.e., if you need to roll back an operation on error).
* When direct access to the object's fields/getters/setters violates its encapsulation.
  * The Memento **makes the object itself responsible for creating a snapshot of its state**. No other object can read the snapshot, making the original object’s state data safe and secure.

### Schéma

![Image](https://i.imgur.com/1piTv9d.png)

* Participants:
  * **Memento** stocke un état
  * **Originator** a un état à stocker/récupérer
  * **CareTaker** décide quels états stocker/récupérer
* Collaboration
  * **Memento** Stocke l'état de l'**Originator**
  * **Originator**
    * Crée un Memento pour stocker son état
    * Récupère son état du Memento
  * **Caretaker**:
    * Décide quand récupérer un Memento de l'Originator
    * Ne regarde jamais le contenu du Memento

<Spoiler tag="Complément">

![Image](https://i.imgur.com/T3Mm3GI.png)

1. The **Originator** class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
2. The **Memento** is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
3. The **Caretaker** knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored. A caretaker can keep track of the originator’s history by storing a stack of mementos. When the originator has to travel back in history, the caretaker fetches the topmost memento from the stack and passes it to the originator’s restoration method.
4. In this implementation, the memento class is nested inside the originator. This lets the originator access the fields and methods of the memento, even though they’re declared private. On the other hand, the caretaker has very limited access to the memento’s fields and methods, which lets it store mementos in a stack but not tamper with their state.

</Spoiler>

### Conséquences

* L'encapsulation de l'Originator est préservée
* L'Originator debient plus simple
  * Sauvegarde / récupération a une interface bien définie
* Mementos peuvent être très couteux
* Il peut être implssible de cacher le Memento du Caretaker
* Caretaker n'a pas le moyen de savoir si un Memento est grand ou petit

<Container type="warning">

* Plusieurs implémentations possible en fonction d'à quel point le langage est dynamique.
* Pour toutes les implémentations on peut utiliser deux types d'interfaces
  * Ample: stocke l'état en entier
  * Restreinte: stocke des "delta" de l'état

</Container>

### Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

 * <st c="g">You can produce snapshots of the object’s state without violating its encapsulation.</st>
 * <st c="g">You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.</st>

</template>
<template slot="right">

 * <st c="r">The app might consume lots of RAM if clients create mementos too often.</st>
 * <st c="r">Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.</st>
 * <st c="r">Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.</st>

</template>
</Col>


### Relations avec d'autres paternes

* You can use **Command** and **Memento** together when implementing “undo”. In this case, commands are responsible for performing various operations over a target object, while mementos save the state of that object just before a command gets executed.
* You can use **Memento** along with **Iterator** to capture the current iteration state and roll it back if necessary.
* Sometimes **Prototype** can be a simpler alternative to **Memento**. This works if the object, the state of which you want to store in the history, is fairly straightforward and doesn’t have links to external resources, or the links are easy to re-establish.


<!-- ## Titre

### Objectif

### Motivation

### Cas d'utilisation

### Schéma

### Pour et contre


<Col proportions="6/6" vAlign="0">
<template slot="left">

Colonne de gauche (ne pas supprimer les lignes vides!)

</template>
<template slot="right">

Collonne de droite (ne pas supprimer les lignes vides!)

</template>
</Col>


### Relations avec d'autres paternes -->

