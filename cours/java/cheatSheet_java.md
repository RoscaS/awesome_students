---
title: CheatSheet Java
date: 2018-09-25
sidebar: auto
author: Sol
---


<Media
  src="https://i.imgur.com/5SIneKH.png"
  center="true"
  width=250
/>



## Liens

* [Baeldung](https://www.baeldung.com/start-here)
* [Développons en Java](https://www.jmdoudoux.fr/java/dej/index.htm)
* [JavaPoint](https://www.javatpoint.com)
* [GeeksForGeeks](https://www.geeksforgeeks.org)
* [Comprehension de la JVM](https://soat.developpez.com/tutoriels/java/jvm/decouverte-machine-virtuelle-java/)
* [Comprendre le fonctionnement de la JVM 1/2](https://blog.xebia.fr/2013/05/27/comprendre-le-fonctionnement-de-la-jvm-article-1/)
* [Wikipedia Jar](https://en.wikipedia.org/wiki/JAR_(file_format))
* [maps](https://www.testingexcellence.com/4-different-ways-iterate-map-java/)
* [Collections overview](https://www.journaldev.com/1260/collections-in-java-tutorial)
* [Collections practical](http://www.vogella.com/tutorials/JavaCollections/article.html)
* [iterators](https://www.baeldung.com/java-iterator)
* [zip](https://www.baeldung.com/java-collections-zip)

## Culture générale

### Introduction

Java est un langage haut niveau, orienté objet, avec un typage statique et fort dont la syntaxe est proche du C++. Il est multi-plateformes et guidé par le principe du WORA (Write once, Run Anywhere). 

### Déclinaisons de Java

1. Java SE (Standard Edition)
2. Java EE (entreprise Edition)
3. Java ME (Micro Edition)
4. Java FX (Orienté web)

### Types d'applications Java

1. Applications Standalone: Des applications de bureau comme des lecteurs vidéo, des éditeurs de texte, des logiciels de retouche d'image, antivirus, ... Les frameworkds **AWT** et **Swing** sont spécialisés dans ce domaine.

2. Applications Web: Une application qui tourne coté serveur et crée une page dynamique est appellée application web. Les frameworks **Servlet**, **JSP**, **Struts**, **Spring**, **Hibernate** sont les plus utilisés pour ce domaine.

3. Applications d'entreprise: Une application qui est dite "distribuée", comme une application de banque, gestion de personnel, ... Dans ce domaine le framework **EJB** est la référence.

4. Applications Mobiles: Pour ce type d'applications, c'est principalement **Android** (Davlik JVM) et **Java ME** qui sont utilisés.

### C++ vs Java

| Comparaison                 | C++                                              | Java                                                                                                                                         |
| --------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Dépendant de la plateforme  | oui                                              | non                                                                                                                                          |
| Utilisation principale      | Programmation système                            | Programmation d'applications                                                                                                                 |
| `goto`                      | oui                                              | non                                                                                                                                          |
| Héritage multiple           | oui                                              | Pas via classe mais via interface                                                                                                            |
| Surcharge d'oppérateurs     | oui                                              | non                                                                                                                                          |
| Pointeurs                   | oui (explicites)                                 | oui (implicite, on ne les écrit pas)                                                                                                         |
| Compilateur et interpreteur | seulement compilateur                            | Compilateur et interpreteur, Le code source Java est converti en bytecode au moment de la compilation et un interpreteur exécute ce bytecode |
| Appel par valeur/référence  | les deux                                         | Par valeur uniquement                                                                                                                        |
| Threading                   | via third-party                                  | built-in                                                                                                                                     |
| Doc                         | non                                              | oui (`/** ... */`)                                                                                                                           |
| `virtual`                   | oui, permet d'autoriser l'override d'une methode | non. On peut override toutes les methodes non statiques par défaut                                                                           |
| Inheritance tree            | non                                              | toutes les classes sont descendantes de la classe `Object`                                                                                   |

* Java ne supporte pas les arguments par défaut contrairement à C++
* Java n'utilise pas de fichiers headers comme C++, Java utilise le mot clé `import` pour inclure différentes classes et methodes

### JDK, JRE et JVM

#### JDK (Java Development Kit)

C'est un environment de développement et d'exécution pour des programmes Java. Ce kit (ou package) inclut deux choses:
* Le JRE (Java Runtime Environment) 
* Des outils de développement 
  * Un interpreteur (Java)
  * Un compilateur (javac)
  * Un compresseur (jar)
  * Un générateur de documents (Javadoc)
  * D'autre outils nécessaires au développement Java

<br>

<Container type="warning">

Uniquement utile aux développeurs Java !

</Container>

#### JRE (Java Runtime Environment)

Fournit l'environment minimum nécessaire à uniquement faire tourner des applications Java. Le JRE est donc principalement destiné à l'end user.
* Une JVM (Java Virtual Machine)
* Les classes core de Java

<br>
<vs-card class="cardx java-diag-card">
<vs-row> 
<vs-col vs-type="flex" vs-align="center" vs-w="6"> 
<span class="Java-diag-text">
Java Runtime environment
</span> 
</vs-col> 
</vs-row>
<vs-row>
<vs-col vs-type="flex" vs-align="center" vs-w="8">
<vs-row class="java-diag-box external-box">
<vs-col vs-type="flex" vs-align="center" vs-w="7">
<div class="Java-diag-text">
<div class="java-diag-box inner-box">
Java Virtual Machine
</div>
</div>
</vs-col>
<vs-col vs-type="flex" vs-align="center" vs-w="5">
<span class="Java-diag-text">
Library Classes
</span>
</vs-col>
</vs-row>
</vs-col>
<vs-col vs-type="flex" vs-align="center" vs-w="4">
<span class="Java-diag-text">
Development Tools
</span>
</vs-col>
</vs-row>
</vs-card>

<style>
.java-diag-card { background-color: #F3F5F7; border: 3px solid black; padding-left: 20px; }
.external-box { background-color: rgba(124, 213, 241, 0.49); } .inner-box { background-color: #FDF6E3; }
.Java-diag-text { font-size: 18px; font-weight: bold; color: #2C3E50; position: relative; padding: 30px 25px; }
.java-diag-box { border-radius: 8px; border: 3px solid black; padding: 15px 15px; text-align: center; }
</style>
<br>

#### JVM (Java Virtual Machine)


C'est une spécification qui décrit la la machine virtuelle où le bytecode Java peut interprété et éxécuté. Des implémentations existent pour de nombreuses plateformes. La JVM, contrairement à Java, est dépendante de la plateforme qui la fait tourner. La JVM s'occupe des actions suivantes:

* Mise à disposition d'un environment d'exécution
* Chargement du code
* Vérification du code
* Interpretation du code
* Exécution du code

### Compilation et exécution

#### Compilation

Chaque application Java est constituée de fichiers source (.java) qui sont compilés en bytcode (sans interaction avec l'OS).

![Image](https://i.imgur.com/RRg6zs6.png)


<Container type="info">

Il est possible d'avoir plusieurs classes dans le même fichier comme l'illustre la figure suivante:

![Image](https://i.imgur.com/BnvXYh8.png)

</Container>

#### Execution

Le bytecode est ensuite utilisé par la JVM et transformée en code natif. Cette séparation entre le langage et la plateforme à de nombreux bénéfices:
* L'optimisation du code Java s'améliore sans avoir à recompiler le code
* Des langages existants ont été réimplémentés pour utiliser la JVM pour profiter de ces optimisations (Jython, JRuby)
* De nouveaux langages ont été développés pour combler les lacunes de Java (Clojure, Scala)

![Image](https://i.imgur.com/xksEoUp.png)

<br>


<Spoiler tag="JVM: Sous le capot">

Lors de l'exécution les étapes suivantes s'enchainent:

<br>

![Image](https://i.imgur.com/Kt4VtKA.png)

<br>


* **Classloader**: Sous-système de la JVM en charge du chargement des fichier _class_.
* **Class Area**: En charge de store le code des mehtodes.
* **Heap**:
  * **Young Generation**: Espace dans lequel tous les objets sont créés.
  * **Old Génération**: Contient les objets ayant une longue durée de vie.
  * Il existe deux autres zones mémoire:
    * **Permanent Generation**: Contient la définition des classes
    * **Code Cache**: Espace dans lequel la JVM stocke et manipule le code optimisé

<br>

<style>
.JVM-heap { font-size: 18px; font-weight: bold; position: relative; left: 20px }
.JVM-memory { padding-top: 10px; padding-bottom: 20px; }
.JVM-diag-box { font-size: 18px; padding:10px; font-weight: bold; color: white; border-radius: 8px; border: 2px solid black; }
.young-gen { background-color: #3eaf7c; margin-right: 20px; }
.old-gen { background-color: #2973b7; }
.perma { background-color: #F92672; margin-right: 20px; }
.cache { background-color: #CCCCCC; }
</style>

<template>
<section class="JVM-memory">
<vs-row>
<vs-row>
<span class="JVM-heap">Heap</span>
</vs-row>
<vs-col vs-type="flex" class="java-diag-box" vs-justify="center" vs-align="center" vs-w="7">
<vs-col class="JVM-diag-box young-gen" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="4">
<span>Young Generation</span>
</vs-col>
<vs-col class="JVM-diag-box old-gen" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="7">
<span>Old <br> Generation</span>
</vs-col>
</vs-col>
<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">
<vs-col class="JVM-diag-box perma" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
<span>Permanent Generation</span>
</vs-col>
<vs-col class="JVM-diag-box cache" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
<span >Code Cache</span>
</vs-col>
</vs-col>
</vs-row>
</section>
</template>

<br>

* **Stack**: Contient les variables locales et les résultats partiels. A également un role dans l'appel des methodes ainsi que les returns.
* **Program Counter Register**: Contient l'adresse de l'instruction JVM en cours d'exécution.
* **Native Method Stack**: Contient les methodes natives utilisées par l'application
* **Execution Engine**: Contient:
  * Un processeur virtuel
  * Un interpreteur: qui lit le bytecode et en exécute les instructions
  * Un compilateur **JIT** (Just In Time): Sert à améliorer les performances. Tout au long de l’exécution d’une application, la JVM maintient des compteurs qui lui permettent de détecter le code souvent exécuté. C’est sur ce code que les optimisations vont être le plus utiles.
* **Java Native Interface (JNI)**: Framework qui fournit une interface pour communiquer avec une autre application écrite dans un autre langage comme C, C++, Assembleur, ... Java se sert du JNI pour écrire sur les flux de sortie ou interagir avec les librairies de l'OS.




</Spoiler>


### Fichier Jar (Java Archive)

Un fichier JAR est un fichier ZIP utilisé pour **distribuer** un ensemble de classes Java. Ce format est utilisé pour stocker les définitions des classes ainsi que des métadonnées constituant l'ensemble d'un programme.

Les fichiers JAR sont créés et extraits à l'aide de la commande `jar` incluse dans le JDK.

<Container type="info">

On peut renommer les .jar avec l'extension .zip et les manipuler avec les outils zip. La classe java `jarFile` du package `java.util.jar` hérite de `ZipFile`.

</Container>

## Base du Langage

### Variables

Identifiée par un nom, elle permet d'accéder à la valeur contenue dans l'adresse mémoire sur laquelle elle pointe. 

* Une variable est **le nom d'une adresse en mémoire**
* Le contenu d'une variable peut être changé en cours d'exécution

<Container type="danger">

* Pour un type primitif, on peut simplement effectuer une opération sur la variable pour affecter la valeur.
* Pour un type non-primitif, une opération effectuée sur la variable affecte l'adresse mémoire et non l'objet contenu à cette adresse.

</Container>

* Une variable est utilisable dans le bloc où elle est définie:
  * **locale**: dans le corp d'une methode
  * **instance**: attribut membre d'une instance de classe (déclarée en dehors du corp d'une methode)
  * **statique**: déclarée `static`, elle ne peut pas être déclarée dans le corp d'une methode et est partagée entre toutes les instances de sa classe.

<Media
    src="https://i.imgur.com/athCLIP.png"
    url="https://bit.ly/2Brjbwl"
    center="true"
/>


### Types de données

<Media
    src="https://i.imgur.com/OBOeOyp.png"
    url="https://bit.ly/2Gu3lEi"
    center="true"
/>

Spécifie la taille et la valeur qui peuvent être stockées dans une variable.
* Le type d'une variable peut être 
  * **primitif:** boolean, char, byte, short int, long, float et double
  * **non-primitif (objets):** les classes, interfaces et tableaux

<br>

<Container type="info" header="Autoboxing (boxing/unboxing)">

Transforme automatiquement une variable de type primitf en un objet du type wrapper correspondant:

| Wrapper correspondant | type primitif |
| --------------------- | ------------- |
| Integer               | int           |
| Long                  | long          |
| Float                 | float         |
| Double                | double        |

```java
int i = new Integer(12);         //Est équivalent à int i = 12
double d = new Double(12.2586);  //Est équivalent à double d = 12.2586
Double d = 12.0;
Character c = 'C';
al = new ArrayList();
//Avant Java 5 il fallait faire al.add(new Integer(12))
//Depuis Java 5 il suffit de faire
al.add(12); 
```

</Container>

### Tableaux

* Un tableau Java est un objet qui contient un nombre définit d'éléments de même type arrangé de façon contigue en mémoire. On accède à ces éléments par leur index.
* Un tableau peut être 1D ou $n$D

#### Déclaration, instanciation, initialisation
```java
int[] tab1 = new int[5];
tab1[0] = 2;
tab1[1] = 3;
tab1[2] = 9;
tab1[3] = 2;
tab1[4] = 5;

// Shortcut
int[] tab2 = {2, 3, 9, 2, 5};
```

#### Opérations usuelles

##### Copie

```java
char[] source = {'a', 'b', 'c'};
char[] dest = new char[source.length];

System.arraycopy(source, 0, dest, 0, dest.length)
```

##### Sort in place

```java
double[] tab = {1.2, -2.7, 0.4, 3.1};
Array.sort(tab); // tab = {-2.7, 0.4, 1.2, 3.1}
```

##### Pretty print

```java
int[] tab = {1, 2, 3, 7};
String s = Arrray.toString(tab); // s = "[1, 2, 3, 7]"
```

##### Fill

```java
float[]tab = new float[3];
Arrays.fill(tab, (float)3.14); // tab = {3.14, 3.14, 3.14}
```

#### Tableaux 2D

Les tableaux 2D n'existent pas en tant que structure de donnée mais il est possible de les utiliser comme en C et Cpp via de simples tableaux où chaque case du tableau contient une référence vers un autre tableau. 

```java
public class Tab2D {
    public static double[][] regular(int n, int m) {
        return new double[n][m];
    }

    public static double[][] jagged(int n) { // triangulaire
        double[][] tabExterne = new double[n][];
        for (int i = 0; i < n; i++) {
            tabExterne[i] = new double[i + 1];
        }
        return tabExterne;
    }

    public static double[][] heterogenous(int[] colPerLine) {
        double[][] tabExterne = new double[colPerLine.length][];
        for (int i = 0; i < n; i++) {
            tabExterne[i] = new double[colPerLine[i]];
        }
        return tabExterne;
    }
}
```

### Boucles


## Collections

Une collection regroupe dans une unité un groupe d'objets. Java fournit le framework `Collection` qui définit un certain nombre de classes et d'interfaces qui standardise l'utilisation de ses collections. Ce framework est constitué des élements suivants:

1. **Interfaces**: Fournissent le type de données abstrait pour représenter des collections.
2. **Classes qui implémentent les interfaces**
3. **Algorithmes**: Des methodes pour des actions mondaines comme chercher une valeur, trier ou mélanger une collection, ...


<Media
    src="https://i.imgur.com/l4z5cQB.png"
    caption="Framework Collection. https://www.javatpoint.com/collections-in-java"
    center="true"
/>

<br>

Typiquement, Java fournit une interface comme `List` et une ou plusieurs implémentations pour ces interfaces:

<br>

![Image](https://i.imgur.com/kDt0RjF.png)

La classe statique `Collections` nous fournit 4 méthodes particulièrement utiles:

| Methode                        | Description                         |
| ------------------------------ | ----------------------------------- |
| `Collections.copy(list, list)` | Copie une collection dans une autre |
| `Collections.reverse(list)`    | Flip une collection                 |
| `Collections.shuffle(list)`    | Melange une collection              |
| `Collections.sort(list)`       | Trie une collection                 |


### List

L'interface `List` est l'interface de base pour des collections qui nous permettent de **stocker des objets dans un conteneur de taille dynamique**.

_Collection linéaire_, "tableaux" à taille dynamique. on y récupère une valeur via son indice.
* **Interface**: `List`
* **Implémentations**:
  * `LinkedList`
  * `ArrayList`

#### ArrayList & LinkedList

* Contrairement aux `LinkedList`, les `ArrayList` sont rapides en lecture mais cependant plus lentes si on veut ajouter ou supprimer des données en milieu de liste.
* <st c="g">Privilégier `LinkedList` pour de nombreuses insertions/suppressions.</st>


```java
List<Integer> arrayList = new ArrayList<>();
List<Integer> linkedList = new LinkedList<>();
```

<br>

| Methode                    | Description                                                       |
| -------------------------- | ----------------------------------------------------------------- |
| `add()`                    | Ajouter un élément                                                |
| `get(int index)`           | Retourne l'élément à l'indice `index`                             |
| `remove(int index)`        | Efface l'entrée à l'indice `index`                                |
| `isEmpty()`                | Retourne `true` si l'objet est vide                               |
| `removeAll()`              | Efface tout le contenu de la liste                                |
| `contains(Object element)` | Retourne `true` si l'élément passé en paramètre est dans la liste |


#### Special tactics

##### Arrays.asList()
```java
List<Integer> l1 = new ArrayList<>();
l1.add(3);
l1.add(2);
l1.add(21);
System.out.println(l1); // => [3, 2, 21]
l1.add(12)
System.out.println(l1); // => [3, 2, 21, 12]

// Equivalent à :
List<Integer> l2 = new ArrayList<>();
l2.addAll(Arrays.asList(3, 2, 21));
System.out.println(l2); // => [3, 2, 21]
l1.add(12)
System.out.println(l2); // => [3, 2, 21, 12]

// N'est PAS équivalent à :
List<Integer> l3 = Arrays.asList(3, 2, 21);
l3.add(3); // => Erreur !
```

##### Python like Range, LC, LCIE
```java
// Basic
List<Integer> lst = new ArrayList<>();
IntStream.range(0, 5).forEach(lst::add); // method reference
System.out.println(lst); // => [0, 1, 2, 3, 4]

// List comprehension
List<Integer> lst = new ArrayList<>();
IntStream.range(0, 5).forEach(i -> lst.add(i*i));
System.out.println(lst); // => [0, 1, 4, 9, 16]

// LCIE
List<Integer> lst = new ArrayList<>();
IntStream.range(0, 5).forEach(i -> {
    lst.add(i % 2 == 0 ? i * 2 : -1);
});
System.out.println(lst); // => [0, -1, 4, -1, 8]
```

##### Trier une liste

```java
// Tri in-place simple
String source[] = {"B", "c", "a", "A", "b", "C"};
List<String> lst = new ArrayList<>(Arrays.asList(source));
lst.sort(null);
System.out.println(lst); // => [A, B, C, a, b, c]

// Tri in-place via lambda
String source[] = {"B", "c", "a", "A", "b", "C"};
List<String> lst = new ArrayList<>(Arrays.asList(source));
lst.sort((a, b) -> a.compareToIgnoreCase(b));
System.out.println(lst); // => [a, A, B, b, c, C]

// Equivalent avec reference de methode
String source[] = {"B", "c", "a", "A", "b", "C"};
List<String> lst = new ArrayList<>(Arrays.asList(source));
lst.sort(String::compareToIgnoreCase);
```

##### Retirer des éléments particuliers

```java
String source[] = {"Poule", "Cochon", "Poney", "Meuh"};
List<String> lst = new ArrayList<>(Arrays.asList(source));

lst.removeIf(s -> s.toLowerCase().contains("po"));
System.out.println(lst); // => [Cochon, Meuh]

lst.removeIf(s -> s.length() < 5);
System.out.println(lst); // => [Cochon]
```

### Set

Cette interface nous fournit des collections qui garantissent l'**unicité des éléments** contenus. Particulièrement adaptés à la manipulation de grandes quantité de données malgré des performances amoindries en insertion.


_unicité des éléments_, _pas d'accès aléatoire_
* **Interface**: `Set`
* **Implémentations**:
  * `HashSet`
  * `TreeSet`

#### HashSet & TreeSet

* <st c="g">Privilégier `TreeSet` si la collaction a besoin d'être constament triée. Autrement utiliser `HashSet` qui a un meilleur temps d'acces.</st>

```java
Set<Integer> treeSet = new TreeSet<>();
Set<Integer> hashSet = new HashSet<>();
```

<br>

| Methode                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `add()`                  | ajoute un élément                           |
| `contains(Object value)` | retourne `true` si l'objet contient `value` |
| `isEmpty()`              | retourne `true` si l'objet est vide         |
| `iterator()`             | renvoie un objet de type Iterator           |
| `remove(Object o)`       | retire l'objet o de la collection           |
| `toArray()`              | retourne un tableau d'Object                |

<br>


### Map

L'interface `Map` est l'interface de base pour des collections qui **associent une valeur à une clé**. La clé qui sert à identifier une entrée est unique. La valeur, peut être associée à plusieurs clés. Comme les objets de type `Map` gardent en mémoire une donnée supplémentaire par enrigistrement ce qui fait qu'elles sont moins mémory efficient que les autres structures de données présentées.


_Paire clé valeur_, _unicité des clés_, n'hérite pas de `Collection`
* **Interface**: `Map`
* **Implémentations**:
  * `HashMap<k,v>`
  * `TreeMap<k,v>`

#### HashMap & TreeMap

* <st c="g">TreeMap garanti également l'ordre des éléments.</st>
* À éviter (fort) si l'ordre n'est pas important.

```java
Map<String, Integer> hashMap = new HashMap<>();
Map<String, Integer> treeMap = new TreeMap<>();
```

<br>

| Methode                              | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| `isEmpty()`                          | retourne `true` si l'objet est vide                                           |
| `contains(value)`                    | retourne `true` si la valeur est présente. Identique à `containsValue(value)` |
| `containsKey(key)`                   | retourne `true` si la clé passée en paramètre est présente dans la Hashtable  |
| `put(key, value)`                    | ajoute le couple `key`,`value` dans l'objet                                   |
| `keys()`                             | retourne la liste des clés sous forme d'énumération                           |
| `getOrDefault(key, value)`           | si `key` exite retourne sa valeur, else retourne `value` (int)                |
| `computeIfPresent(key, lambda(k,v))` | applique `lambda` si `key` existe                                             |
| `computeIfAbsent(key, i -> value)`   | si `key` n'existe pas, ajoute l'ajoute et l'initialise à `value`              |

<br>

```java
Map<String, Integer> map = new HashMap<>();
map.put("Un", 1);
map.put("deux", 2);
map.put("trois", 3);

System.out.println(map.get("Un")); // => 1

System.out.println(map); // => {trois=3, Un=1, deux=2}
System.out.println(map.keySet()); // => [trois, Un, deux]
System.out.println(map.values()); // => [3, 1, 2]

List<String> keys = new ArrayList<>(map.keySet());
List<Integer> values = new ArrayList<>(map.values());
System.out.println(keys);    // => [trois, Un, deux]
System.out.println(values);  // => [3, 1, 2]


System.out.println(map.getOrDefault("Dix", -1)); // => -1

map.computeIfAbsent("Dix", i -> 1);
System.out.println(map); // => {Dix=1, trois=1, Un=1, deux=1}

map.computeIfPresent("Un", (k, v) -> v + 1);
System.out.println(map); // => {Dix=1, trois=1, Un=2, deux=1}

// Attention, la ligne suivante ne fonctionne pas !
map.computeIfPresent("Un", (k, v) -> v++);
System.out.println(map); // => {Dix=1, trois=1, Un=2, deux=1}

map.remove("deux");
System.out.println(map); // => {Dix=1, trois=1, Un=2}
```

<br>

<Container type="danger">

`Map` n'hérite pas de l'interface `Collection` ce qui implique qu'il n'hérite pas non plus de `Iterable` et que l'utilisation d'itérateurs (voir prochain chapitre) sur ce type de collection est particulier.

```java
Map<String, Integer> map = new HashMap<>();
map.put("Un", 1);
map.put("deux", 2);
map.put("trois", 3);

Iterator<Entry<String, Integer>> i = map.entrySet().iterator();
```

**Noter l'utilisation de l'interface `Map.Entry` en générique de `Iterator`**

Le déplacement du curseur d'itération utilise également `Map.Entry`:

```java
while (map.hasNext()) {
    Entry<String, Integer> kv = i.next();
    System.out.println(
        "Key: " + kv.getKey() + 
        "\tValue: " + kv.getValue()
    );
}
```

On favorisera l'utilisation de la `foreach` Js arrow function style pour ce genre d'opérations:

```java
map.forEach((k,v) -> System.out.println(
    "Key: " + k + "\tValue: " + v
));
```

</Container>

#### Special tactics

##### Initialisation

```java
Map<String, Integer> map = Stream.of(new Object[][] {
    {"Un", 1}, {"Deux", 1}, {"Trois", 1}, 
}).collect(Collectors.toMap(i -> (String)i[0], i->(Integer)i[1]));
```

##### Split k, v into lists

```java
Map<String, Integer> map = new HashMap<>();
map.put("Un", 1);
map.put("deux", 2);
map.put("trois", 3);

List<String> keys = new ArrayList<>(map.keySet());
List<Integer> values = new ArrayList<>(map.values());
System.out.println(keys);   // => [trois, Un, deux]
System.out.println(values); // => [3, 1, 2]
```

##### Sorted display

```java
// by keys
Map<String, Integer> map = new HashMap<>();
map.put("deux", 2);
map.put("Un", 1);
map.put("trois", 3);

map.entrySet()
    .stream()
    .sorted(Map.Entry.<String, Integer>comparingByKey())
    .forEach(System.out::println);

// by value
Map<String, Integer> map = new HashMap<>();
map.put("deux", 2);
map.put("Un", 1);
map.put("trois", 3);

map.entrySet()
    .stream()
    .sorted(Map.Entry.comparingByValue())
    .forEach(System.out::println);
```



## Itérateurs

En Java, un itérateur est un objet qui nous permet de traverser (itérer sur) une collection qui implémente l'interface `Iterable` (C'est le cas de tous les éléments du framework `Collection`).

L'utilisation d'un itérateur a le grand avantage de donner la **possibilité d'altérer/supprimer des objets de la collection en cours d'itération** ce qui **n'est pas le cas de la boucle** `for(Object i: Collection)`.


### Interface Iterator

Pour utiliser un itérateur, on commence par obtenir un `Itérateur` spécifique à la collection que l'on veut itérer:

```java {4}
List<Integer> lst = new ArrayList<>();
IntStream.range(0, 10).forEach(i -> lst.add(i));

Iterator<Integer> i = lst.iterator();
```

L'iterface `Iterator` a trois methodes principales: `hasNext()`, `next()` et `remove()`

#### hasNext()

Généralement utilisé avec une boucle `while`, `hasNext()` nous permet de vérifier si il reste des éléments sur lequels itérer:

```java
while (i.hasNext()) {
    // ...
}
```

#### next()

Permet de déplacer le curseur sur l'élément suivant pour le récupérer.

```java
Integer next = i.next()
```

<br>

<Container type="warning">

* Utiliser `hasNext()` avant d'appeler `next()`

</Container>

#### remove()

Pour [éviter tout risque d'exception](https://www.baeldung.com/java-iterator), la methode `remove()` est la façon privilégiée de retirer l'élément courant:

```java
i.remove()
```

Tout ensemble:

```java
List<String> lst = new ArrayList<>();
lst.add("One");
lst.add("Two");
lst.add("Three");

while (i.hasNext()) {
    String next = i.next();
    System.out.println(next);
  
    if( "TWO".equals(next)) {
        i.remove();              
    }
}
```

### Interface ListIterator

`ListIterator` est une extension qui rend les itérateurs plus flexibles:

```java
ListIterator<String> i = lst.listIterator(lst.size());
```

Noter qu'un argument (optionnel) spécifiant un indice de départ est passé à la methode `listIterator`.

#### hasPrevious() & previous()

`ListIterator` permet de traverser la collection en commençant par le cul en plus des methodes normales `hasNext()` et `next()`:

```java
while (i.hasPrevious()) {
    String previous = i.previous()
}
```

#### nextIndex() and previousIndex()

Il est égallement possible de récupérer les indices des éléments:

```java
while (i.hasNext()) {
    String s = i.next();
    Integer idx = i.nextIndex() - 1;
}
```

#### add()

Permet d'ajouter un élément **avant l'élément qui serait retourné par `next()` et après celui retourné par `previous()`:

```java
i.add("Poule");
```
 
 #### set()

 Permet de remplacer la valeur de l'élément courant:

 ```java
i.set("Poney");
 ```

<br>

 <Container type="info">
 
 `set()` ne peut être call que si lors de l'itération courante, aucun call de `add()` ou de `remove()` n'a été fait.
 
 </Container>

 ### Itérer avec des lambda

 L'utilisation de `Iterator` ou `ListIterator` est particulièrement verbeuse. Il est possible de simplifier la syntaxe **si il n'est pas nécessaire de modifier les éléments** en utilisant une `foreach` spéciale:

 ```java {4,7}
List<Integer> lst = new ArrayList<>();
IntStream.range(0, 10).forEach(i -> lst.add(i));

lst.iterator().forEachRemaining(j -> System.out.println(j));

// Ou encore plus simplement en utilisant les references de fonction:
lst.iterator().forEachRemaining(System.out::println)
 ```






## Généricité en Java

* [openClassRoom](https://openclassrooms.com/fr/courses/26832-apprenez-a-programmer-en-java/22404-la-genericite-en-java)

Le principe de la généricité est de faire des classes qui n'acceptent qu'un certain type d'objets ou de données de façon dynamique.


### Simple
```java
public class Solo<T> {

    private T value;

    public Solo(T val) { this.value = val; }
    public T getValue() { return this.value; }
}

// Dans le main:
Solo<Integer> s1 = new Solo<>(12);
System.out.println(s1.getValue()); // => 12

Solo<String> s2 = new Solo<>("Poule");
System.out.println(s2.getValue()); // => Poule
```

### Double

```java
public class Duo<T, S> {

    private T v1;
    private S v2;

    public Duo(T v1, S v2) {
        this.v1 = v1;
        this.v2 = v2;
    }

    public T getV1() { return v1; }
    public S getV2() { return v2; }
}

// Dans le main:
Duo<String, Boolean> d1 = new Duo<>("Poule", true);
System.out.println("v1: " + d1.getV1() + "\tv2: " + d1.getV2());
// => v1: Poule	v2: true

Duo<Double, Character> d2 = new Duo<>(12.231, 'c');
System.out.println("v1: " + d2.getV1() + "\tv2: " + d2.getV2());
// => v1: 12.231	v2: c
```


## En vrac
