---
title: Programmation fonctionnelle
date: 2019-10-20
author: Sol
sidebar: auto
project: false
hide: false
---


## En vrac
Accessing a **non-final** variable inside **lambda** expressions will cause the compile-time error. But it doesn’t mean that you should mark every target variable as final.

##  Interfaces fonctionnelles
* Les interfaces fonctionnelles définissent des types qui pourront être implémentés sous la forme d'expressions lambda ou de références de méthodes.
* Une interface fonctionnelle est une interface dans laquelle une seule méthode abstraite est définie. Elle doit respecter certaines contraintes:
    * elle ne doit avoir qu'une seule méthode déclarée abstraite
    * les méthodes définies dans la classe Object ne sont pas prises en compte comme étant des méthodes abstraites
    * toutes les méthodes doivent être public
    * elle peut avoir des méthodes par défaut et static
* Une expression lambda peut être utilisée partout où un objet de type interface fonctionnelle est attendu.

### Interfaces fonctionnelles du package java.util.function
Les interfaces de ce package respectent une convention de nommage selon leur rôle :


| Interface    | methode abstraite | job         | in/out                                                    |
| ------------ | ----------------- | ----------- | --------------------------------------------------------- |
| **Predicat** | `.test()`         | Tester      | Attends un ou plusieurs paramètres et renvoie un booléen. |
| **Consumer** | `.accept()`       | Executer    | Attend un ou plusieurs paramètres et ne renvoie rien.     |
| **Function** | `.apply()`        | Transformer | Attend un ou plusieurs paramètres et renvoie une valeur.  |
| **Supplier** | `get()`           | Fournir     | N'attend pas de paramètre et renvoie une valeur.          |

<Spoiler tag="Toutes les interfaces">

**Predicat**
| Interface fonctionnelle | Description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| `Predicate T`           | prédicat qui attend en paramètre un argument de type T et renvoie un booléen      |
| `BiPredicate<T,U>`      | prédicat qui attend deux paramètres et renvoie un booléen                         |
| `IntPredicate`          | prédicat qui attend en paramètre un argument de type int et renvoie un booléen    |
| `LongPredicate`         | prédicat qui attend en paramètre un argument de type long et renvoie un booléen   |
| `DoublePredicate`       | prédicat qui attend en paramètre un argument de type double et renvoie un booléen |

**Consumer**
| Interface fonctionnelle | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| `Consumer T`            | consommateur d'un unique paramètre qui ne renvoie aucune valeur       |
| `BiConsumer<T,U>`       | opération qui requiert deux objets et ne renvoie aucun résultat       |
| `IntConsumer`           | consommateur d'une valeur de type int                                 |
| `LongConsumer`          | consommateur d'une valeur de type long                                |
| `DoubleConsumer`        | consommateur d'une valeur de type double                              |
| `ObjDoubleConsumer T`   | consommateur qui attend en paramètres un objet de type T et un double |
| `ObjIntConsumer T`      | consommateur qui attend en paramètres un objet de type T et un int    |
| `ObjLongConsumer T`     | consommateur qui attend en paramètres un objet de type T et un long   |

**Function**
| Interface fonctionnelle   | Description                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| `Function<T,R>`           | fonction qui attend un paramètre de type T et renvoie un résultat de type R                 |
| `BiFunction<T,U,R>`       | opération qui requiert deux objets de type T et U et renvoie un résultat de type R          |
| `IntFunction<R>`          | fonction qui attend en paramètre une valeur de type int et renvoie un résultat de type R    |
| `LongFunction<R>`         | fonction qui attend en paramètre une valeur de type long et renvoie un résultat de type R   |
| `DoubleFunction<R>`       | fonction qui attend en paramètre une valeur de type double et renvoie un résultat de type R |
| `IntToDoubleFunction`     | fonction qui attend en paramètre une valeur de type int et renvoie un double                |
| `IntToLongFunction`       | fonction qui attend en paramètre une valeur de type int et renvoie un long                  |
| `DoubleToIntFunction`     | opération qui attend en paramètre un double et renvoie un int comme résultat                |
| `DoubleToLongFunction`    | opération qui attend en paramètre un double et renvoie un long comme résultat               |
| `LongToIntFunction`       | fonction qui attend en paramètre une valeur de type long et renvoie un int                  |
| `LongToDoubleFunction`    | fonction qui attend en paramètre une valeur de type long et renvoie un double               |
| `ToIntFunction T`         | fonction qui attend un paramètre de type T et renvoie un int                                |
| `ToIntBiFunction<T,U>`    | fonction qui attend deux paramètres de type T et U et renvoie un int                        |
| `ToDoubleFunction T`      | fonction qui attend un paramètre de type T et renvoie un double                             |
| `ToDoubleBiFunction<T,U>` | fonction qui attend deux paramètres de type T et U et renvoie un double                     |
| `ToLongFunction T`        | fonction qui attend un paramètre de type T et renvoie un long                               |
| `ToLongBiFunction<T,U>`   | fonction qui attend un paramètre de type T et renvoie un long                               |

Unary **Functions**
| Interface fonctionnelle | Description                                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `UnaryOperator T`       | opération qui attend en paramètre un objet de type T et renvoie une instance de type T. Elle hérite de Function<T, T> |
| `IntUnaryOperator`      | opération qui attend en paramètre un int et renvoie un int comme résultat                                             |
| `DoubleUnaryOperator`   | opération qui attend en paramètre un double et renvoie un double comme résultat                                       |
| `LongUnaryOperator`     | opération qui attend en paramètre un objet de type long et renvoie une valeur de type long                            |

Binary **Functions**
| Interface fonctionnelle | Description                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `BinaryOperator T`      | opération qui attend deux paramètres de type T et renvoie une instance de type T                   |
| `IntBinaryOperator`     | opération qui attend en paramètres deux valeurs de type int et renvoie une valeur de type int      |
| `LongBinaryOperator`    | opération qui attend en paramètres deux valeurs de type long et renvoie une valeur de type long    |
| `DoubleBinaryOperator`  | opération qui attend en paramètre deux valeurs de type double et renvoie une valeur de type double |

**Supplier**
| Interface fonctionnelle | Description                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `Supplier T`            | fournisseur de valeur qui n'attend aucun paramètre et renvoie une instance de type T |
| `IntSupplier`           | fournisseur de valeur qui n'attend aucun paramètre et renvoie un entier de type int  |
| `DoubleSupplier`        | fournisseur d'une valeur de type double                                              |
| `LongSupplier`          | fournisseur de valeur qui n'attend aucun paramètre et renvoie un entier de type long |
| `BooleanSupplier`       | fournisseur d'une valeur booléenne qui n'attend aucun paramètre                      |



</Spoiler>

## Lambda
* Une expression lambda permet d'encapsuler un traitement pour être passé à d'autres traitements.
* Une expression lambda est typée de manière statique. Ce **type** doit être une **interface fonctionnelle**.
* Une expression lambda est l'implémentation d'une interface fonctionnelle.
* Une expression lambda est définie grâce à une interface fonctionnelle : une instance d'une expression lambda qui implémente cette interface est un objet. Cela permet à une expression lambda :
    * de s'intégrer naturellement dans le système de type de Java
    * d'hériter des méthodes de la classe Object
* Une expression lambda sera transformée par le compilateur en une instance du type de son interface fonctionnelle selon le contexte dans lequel elle est définie :
    * soit celle du type à laquelle l'expression est assignée
    * soit celle du type du paramètre à laquelle l'expression est passée
* L'expression lambda ne contient pas elle-même d'information sur l'interface fonctionnelle qu'elle implémente. Cette interface sera déduite par le compilateur en fonction de son contexte d'utilisation.
* Le compilateur associe une expression lambda à une interface fonctionnelle et comme une interface fonctionnelle ne peut avoir qu'une seule méthode abstraite :
    * les types des paramètres doivent correspondre à ceux des paramètres de la méthode
    * le type de retour du corps de l'expression doit correspondre à celui de la méthode
    * toutes les exceptions levées dans le corps de l'expression doivent être compatibles avec les exceptions déclarées dans la clause throws de la méthode

### Portée
Dans le corps d'une expression lambda, il est donc possible d'utiliser:
* les variables passées en paramètre de l'expression
* les variables définies dans le corps de l'expression
* les variables final définies dans le contexte englobant
* les variables effectivement final définies dans le contexte englobant
* Une expression lambda ne définit pas de nouvelle portée. Ainsi, il n'est pas possible de définir deux variables avec le même nom dans un même bloc de code, donc il n'est pas possible de définir une variable dans l'expression lambda si celle-ci est déjà définie dans le contexte englobant.
* `this` fait référence à l'instance courante dans le bloc de code englobant et dans l'expression lambda.

## Références de méthodes
Une expression lambda correspond à une méthode anonyme dont le type est défini par une interface fonctionnelle. Les références de méthodes ont un rôle similaire mais au lieu de fournir une implémentation, une référence de méthode permet d'invoquer une méthode statique ou non ou un constructeur.

**Quatre types de références de méthodes:**

| Type                                                          | Syntaxe                         | Exemple              |
| ------------------------------------------------------------- | ------------------------------- | -------------------- |
| Référence à une méthode statique                              | `NomClasse::nomMethodeStatique` | `String::valueOf`    |
| Référence à une méthode sur une instance                      | `objet::nomMethode`             | `personne::toString` |
| Référence à une méthode d'un objet arbitraire d'un type donné | `NomClasse::nomMethode`         | `Object::toString`   |
| Référence à un constructeur                                   | `nomClasse::new`                | `Personne::new`      |

* La syntaxe d'une référence de méthode est composée de trois éléments :
    * un qualificateur qui précise le nom d'une classe ou d'une instance sur lequel la méthode sera invoquée
    * l'opérateur `::`
    * un identifiant qui précise le nom de la méthode ou l'opérateur new pour désigner un constructeur
* Le qualificateur peut être :
    * un type pour les méthodes statiques et les constructeurs
    * un type ou une expression pour les méthodes non statiques. L'expression doit préciser l'objet sur lequel la méthode est invoquée
* Une référence de constructeur comprend :
    * un qualificateur qui est un type dont il est possible de créer une instance : cela exclut les interfaces et les classes abstraites
    * l'opérateur ::
    * le mot clé new

### Référence à une méthode d'un objet arbitraire d'un type donné
Ce type de référence de méthodes ne précise pas explicitement le récepteur sur lequel la méthode sera invoquée. C'est le premier paramètre de la méthode de l'interface fonctionnelle qui correspond à ce récepteur.
```java
List<String> fruits = Arrays.asList("b", "a", "e", "c", "d");
fruits.sort(String::compareToIgnoreCase);
// Equivalent à:
fruits.sort((a, b) -> a.compareToIgnoreCase(b));
```

## Streams

* Une définition simple d'un Stream pourrait être : "l'application d'un ensemble d'opérations sur une séquence d'éléments issus d'une source dans le but d'obtenir un résultat".
* L'utilisation d'un Stream implique généralement trois choses :
    * **Une source** qui va alimenter le Stream avec les éléments à traiter
    * **Un ensemble d'opérations** intermédiaires qui vont décrire les traitements à effectuer
    * **Une opération terminale** qui va exécuter les opérations et produire le résultat


## Obtention d'un Stream

```java
// SOURCES DE DONNÉES
// à partir d'un tableau
Arrays.stream(new String[]{"a", "b", "c"}).forEach(System.out::println);
// à partir d'une collection
List.of("a", "b", "c").stream().forEach(System.out::println);
Arrays.asList(1, 2, 3,).stream().forEach(System.out::println);


// GENERATEURS
// iterate(seed, UnaryOperator)
Stream.iterate(0, i -> i + 2).limit(n).forEach(System.out::println);
// range(from, to - 1)
IntStream.range(0, n).forEach(System.out::println);
```

## Opérations
Les opérations proposées par un Stream sont des opérations communes :
* Pour **filtrer** des données
* Pour **rechercher** une correspondance avec des éléments
* Pour **transformer** des éléments
* Pour **réduire** les éléments et produire un résultat

Il existe deux types d'opérations
* Opérations intermédiaires
* Opérations terminales

## Opérations intermédiaires
* zéro, une ou plusieurs opérations intermédiaires par Stream.
* Elles peuvent être enchainées car elles renvoient un Stream.
* Elles sont toujours évaluées de manière lazy.

### Filtres
Pour filtrer des données, un Stream propose plusieurs opérations:
* `filter(Predicate)` : renvoie un Stream qui contient les éléments pour lesquels l'évaluation du Predicate passé en paramètre vaut true
* `distinct()` : renvoie un Stream qui ne contient que les éléments uniques (elle retire les doublons). La comparaison se fait grâce à l'implémentation de la méthode equals()
* `limit(n)` : renvoie un Stream que ne contient comme éléments que le nombre fourni en paramètre
* `skip(n)` : renvoie un Stream dont les n premiers éléments sont ignorés

### Transformations (map)
Pour transformer des données, un Stream propose plusieurs opérations:
* `map(Function)` : applique la Function fournie en paramètre pour transformer l'élément en créant un nouveau
* `mapToxxx(Int, Long or Double)`: Renvoye un Stream qui contient le résultat de la transformation de chaque élément de type T en un type primitif xxx
* `flatMap(Function)` : applique la Function fournie en paramètre pour transformer l'élément en créant zéro, un ou plusieurs éléments


## Opérations terminales
* Elles produisent une valeur ou des effets de bord (foreach):
* Renvoyer le résultat, généralement sous la forme d'une instance de type Optional T (elles ne renvoient jamais un Stream)
* Créer une collection qui contient les résultats
* Exécuter des traitements sur les résultats (méthode forEach())
* Aucun traitement n'est effectué lors de l'invocation des méthodes intermédiaires. Ces méthodes sont dites lazy.
* Dès qu'une méthode terminale est invoquée, le Stream est considéré comme consommé et plus aucune méthode intermédiaire ne peut être invoquée.
* L'ensemble des opérations effectuées par un Stream est appelé pipeline d'opérations (operation pipeline).

### Reductions
Pour réduire les données et produire un résultat, un Stream propose plusieurs opérations:
* `reduce(identity, BinaryOperator)` : applique une Function pour combiner les éléments afin de produire le résultat
* `collect()` : permet de transformer un Stream qui contiendra le résultat des traitements de réduction dans **un conteneur mutable**
* `toArray()`: Renvoyer un tableau contenant les éléments du Stream
* `min(Comparator)`: Renvoyer le plus petit élément du Stream selon le Comparator fourni
* `max(Comparator)`: Renvoyer le plus grand élément du Stream selon le Comparator fourni
* `count()`: Renvoyer le nombre d'éléments contenu dans le Stream (long)

### Correspondances
Pour rechercher une correspondance avec des éléments, un Stream propose plusieurs opérations:
* `anyMatch(Predicate)` : renvoie un booléen qui précise si l'évaluation du Predicate sur au moins un élément vaut true
* `allMatch(Predicate)` : renvoie un booléen qui précise si l'évaluation du Predicate sur tous les éléments vaut true
* `noneMatch(Predicate)` : renvoie un booléen qui précise si l'évaluation du Predicate sur tous les éléments vaut false
* `findAny()` : renvoie un objet de type Optional qui encapsule un élément du Stream s'il existe
* `findFirst()` : renvoie un objet de type Optional qui encapsule le premier élément du Stream s'il existe



## Collector

* Une des surcharges de la méthode `collect()` attend en paramètre un objet de type Collector. Les traitements à appliquer sont alors définis par l'interface Collector.
* La classe java.util.stream.Collectors propose un ensemble de fabriques qui renvoient des implémentations de Collector pour des opérations de réduction communes.
* Collector<T,A,R> possède trois types génériques :
    * **T** : le type des éléments utilisé par l'opération de réduction
    * **A** : le type de l'objet mutable utilisé par l'opération de réduction
    * **R** : le type du résultat de l'opération de réduction

### Collectors

* La classe Collectors propose des fabriques pour obtenir des instances de Collector qui réalisent des agrégation communes telles que l'ajout des éléments dans une collection, la concaténation de chaînes de caractères, des réductions, des calculs numériques et statistiques, des groupements, ...
* Elle propose des méthodes statiques qui sont des fabriques pour renvoyer des instances de type Collector fournies en standard dans l'API permettant de répondre aux principaux besoins courants :

```java
List<Employe> employesMasculins = employes
    .stream()
    .filter(e -> e.getGenre() == Genre.HOMME)
    .collect(Collectors.toList());

Set<Employe> employesMasculins = employes
    .stream()
    .filter(e -> e.getGenre() == Genre.HOMME)
    .collect(Collectors.toSet());
```

```java
List<Integer> list = List.of(1, 2, 3, 4);

// standard
Integer sum = list.stream().mapToInt(Integer::intValue).sum();
// collect : sans variable
Integer sum = list.stream().collect(Collectors.reducing(0, Integer::sum));
// collect : avec variable
Collector<Integer, ?, Integer> reducing = Collectors.reducing(0, Integer::sum);
Integer sum = list.stream().collect(reducing);
```

**Reducing**:
```java
int n = 5;
List<Maison> list = MaisonTools.create(n);

// collect : sans variable
Integer sum = list.stream().collect(Collectors.reducing(0, Maison::getPrix, Integer::sum));
// collect : avec variable
Collector<Maison, ?, Integer> reducePrix = Collectors.reducing(0, Maison::getPrix, Integer::sum);
Integer sum = list.stream().collect(reducePrix);// collect emploie un collector
```

**summingInt**:
```java
List<Integer> list = List.of(1, 2, 3, 4);

// collect : sans variable
int sum = list.stream().collect(Collectors.summingInt(Integer::intValue));
// collect : avec variable
ToIntFunction<Integer> mapper = i -> i;
Collector<Integer, ?, Integer> summingInt = Collectors.summingInt(mapper);
int sum = list.stream().collect(summingInt);// collect emploie un collector


List<Maison> list = MaisonTools.create(n);
// standard
int sum = list.stream().mapToInt(Maison::getPrix).sum();
// collect : sans variable
int sum = list.stream().collect(Collectors.summingInt(Maison::getPrix));
```

**Counting**:
```java
List<Integer> list = List.of(1, 2, 3, 4);

// standard
long count = list.stream().count();
// collect : sans variable
long count = list.stream().collect(Collectors.counting());
// collect : avec variable
Collector<Integer, ?, Long> counting = Collectors.counting();
long count = list.stream().collect(counting);// collect emploie un collector
```

**Grouping** (crée une map):
```java

String[] tab = {"Bob", "Alice", "Bernard", "Ariane", "Claire", "Alfred", "Alice"};
Function<String, Character> classifier = s -> s.charAt(0);

// LIST
Collector<String, ?, Map<Character, List<String>>> groupingBy = Collectors.groupingBy(classifier);
Map<Character, List<String>> mapLettreName = Arrays.stream(tab).collect(groupingBy);
// {A=[Alice, Ariane, Alfred, Alice], B=[Bob, Bernard], C=[Claire]}

// SET
Collector<String, ?, Set<String>> valueCollector = Collectors.toSet();
Collector<String, ?, Map<Character, Set<String>>> groupingBy = Collectors.groupingBy(classifier, valueCollector);
Map<Character, Set<String>> mapLettreName = Arrays.stream(tab).collect(groupingBy);
// {A=[Ariane, Alice, Alfred], B=[Bob, Bernard], C=[Claire]}

// COUNTING
Collector<String, ?, Long> count = Collectors.counting();
Map<Character, Long> mapLettreCount = Arrays.stream(tab).collect(Collectors.groupingBy(classifier, count));
// {A=4, B=2, C=1}


// MAP REDUCING
// regrouper des personnes par sex, et obtenir la somme des ages des deux groupes
// => map de type {false=538, true=96}
int n = 10;
List<Personne> listPersonne = PersonneTools.create(n);

Function<Personne, Boolean> classifierSex = Personne::isFeminin;
Collector<Personne, ?, Integer> valueCollectorSommeAge = Collectors.summingInt(Personne::getAge);
Collector<Personne, ?, Map<Boolean, Integer>> groupingBySexSommeAge = Collectors.groupingBy(classifierSex, valueCollectorSommeAge);
Map<Boolean, Integer> map = listPersonne.stream().collect(groupingBySexSommeAge);
// {A=4, B=2, C=1}
```



## Sorted

* L'opération `sorted()` permet de trier les éléments du Stream : elle renvoie donc un Stream dont les éléments sont triés. Elle utilise un tampon qui doit avoir tous les éléments avant de pouvoir effectuer le tri.
* Par défaut, la méthode `sorted()` sans paramètre utilise l'ordre naturel des éléments.

```java
List<String> prenoms = Arrays.asList("andre", "benoit", "albert", "thierry", "alain");

List<String> a = prenoms.stream().sorted().collect(Collectors.toList());
System.out.println(a);
// [alain, albert, andre, benoit, thierry]

List<String> b = prenoms.stream()
        .sorted(Comparator.reverseOrder())
        .collect(Collectors.toList());
System.out.println(b);
// [thierry, benoit, andre, albert, alain]

List<String> c = prenoms.stream()
        .sorted(Comparator.comparingInt(String::length)
                        .thenComparing(Comparator.naturalOrder())
                        .reversed())
        .collect(Collectors.toList());
System.out.println(c);
// [thierry, benoit, albert, andre, alain]
```

## Map & flatMap

* L'opération `flatMap()` transforme chaque élément en un Stream d'autres éléments : ainsi chaque élément va être transformé en zéro, un ou plusieurs autres éléments. Le contenu des Streams issus du résultat de la transformation de chaque objet est agrégé pour constituer le Stream retourné par la méthode `flatMap()`.
* L'opération `flatMap()` attend en paramètre une Function qui renvoie un Stream. La Function est appliquée sur chaque élément qui produit chacun un Stream. Le résultat renvoyé par la méthode est un Stream qui est l'agréation de tous les Streams produits par les invocations de la Function.

```java
List<Integer> numbers = Arrays.asList(1, 3, 5, 7, 9);

List<List<Integer>> tuples = numbers.stream()
        .map(i -> Arrays.asList(i - 1, i))
        .collect(Collectors.toList());

System.out.println(tuples);
// [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]

List<Integer> flatten = tuples.stream()
        .flatMap(i -> i.stream())
        // .flatMap(Collection::stream) // equivalent
        .collect(Collectors.toList());

System.out.println(flatten);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```