---
title: "Notes: cours de Java"
date: 2018-09-25
sidebar: auto
author: Sol
---


<Media
  src="https://i.imgur.com/5SIneKH.png"
  center="true"
  width=250
/>

<br>

<Card header="Workspace" max-width="550">

* `git clone ssh://javab@157.26.83.27/home/javab/git/WCoursJava.git`
* **capitaleEnDe2018**

</Card>


## Sources

* Quelques points de java (Recap cours Java He-Arc)
* [Baeldung](https://www.baeldung.com/start-here)
* [Learn x in y](https://learnxinyminutes.com/docs/java/)
* [Développons en Java](https://www.jmdoudoux.fr/java/dej/index.htm)
* [JavaPoint](https://www.javatpoint.com)
* [GeeksForGeeks](https://www.geeksforgeeks.org)
* [Comprehension de la JVM](https://soat.developpez.com/tutoriels/java/jvm/decouverte-machine-virtuelle-java/)
* [Comprendre le fonctionnement de la JVM 1/2](https://blog.xebia.fr/2013/05/27/comprendre-le-fonctionnement-de-la-jvm-article-1/)
* [openclassRoom](https://openclassrooms.com/fr/courses/26832-apprenez-a-programmer-en-java)
* [developpez.net](https://www.developpez.net/forums/d881739/java)
* [Wikipedia Jar](https://en.wikipedia.org/wiki/JAR_(file_format))
* [maps](https://www.testingexcellence.com/4-different-ways-iterate-map-java/)
* [Collections overview](https://www.journaldev.com/1260/collections-in-java-tutorial)
* [Collections practical](http://www.vogella.com/tutorials/JavaCollections/article.html)
* [Iterator](https://www.baeldung.com/java-iterator)
* [Looping, performances analysis](https://www.geeksforgeeks.org/iterator-vs-foreach-in-java/)

## Lexique

* **Immutable:** Un objet qui ne peut être modifier. Par exemple si on change la valeur d'un objet de type `Long` affecté à une variable, en réalité un nouvel objet est créé et est assigné à cette variable. Si l'objet initial était affecté à d'autres variables, elles référencent toujours l'objet initial. Les objets de type `String` et les Wrappers sont des exemples d'objets immutables. [Plus d'info](https://www.developpez.net/forums/d881739/java/general-java/langage/c-quoi-objet-immutable/)
* **Inaltérable:** dans le contexte, synonyme d'immutable ou encore immuable.
* **Iterable**: Collection qui implémente l'interaface `Iterable`.

## Culture générale

### Introduction

Java est un langage haut niveau, orienté objet, avec un typage statique fort dont la syntaxe est proche du C++. Il est multi-plateformes et guidé par le principe du WORA (Write once, Run Anywhere). 

### Déclinaisons de Java

1. **Java SE** (Standard Edition)
2. Java EE (entreprise Edition)
3. Java ME (Micro Edition)
4. Java FX (Orienté web)

### Types d'applications Java

1. Applications Standalone: Des applications de bureau comme des lecteurs vidéo, des éditeurs de texte, des logiciels de retouche d'image, antivirus, ... Les frameworkds **AWT** et **Swing** sont spécialisés dans ce domaine.

2. Applications Web: Des application qui tournent coté serveur et créent des pages dynamiques. Les frameworks **Servlet**, **JSP**, **Struts**, **Spring**, **Hibernate** sont les plus utilisés pour ce domaine.

3. Applications d'entreprise: Une application qui est dite _distribuée_, comme une application de banque, gestion de personnel, ... Dans ce domaine le framework **EJB** est la référence.

4. Applications Mobiles: Pour ce type d'applications, c'est principalement **Android** (Davlik JVM) et **Java ME** qui sont utilisés.

### C++ vs Java

| Comparaison                 | C++                                              | Java                                                                                                                                          |
| --------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Dépendant de la plateforme  | Oui                                              | Non                                                                                                                                           |
| Utilisation principale      | Programmation système                            | Programmation d'applications                                                                                                                  |
| `goto`                      | Oui                                              | Non                                                                                                                                           |
| Héritage multiple           | Oui                                              | Pas via classes mais via interfaces                                                                                                           |
| Surcharge d'oppérateurs     | Oui                                              | Non                                                                                                                                           |
| Pointeurs                   | Oui (explicites)                                 | Oui (<Def def="Le programmeur ne s'en charge pas.">implicite</Def>)                                                                           |
| Compilateur et interpreteur | Seulement compilateur                            | Compilateur et interpreteur, Le code source Java est converti en bytecode au moment de la compilation et un interpreteur exécute ce bytecode. |
| Appel par valeur/référence  | Les deux                                         | **Par valeur uniquement**                                                                                                                     |
| Threading                   | Via third-party                                  | Built-in                                                                                                                                      |
| Doc                         | Non                                              | Oui (`/** ... */`)                                                                                                                            |
| `virtual`                   | Oui, permet d'autoriser l'override d'une methode | Non. Override de toutes les methodes non statiques est le comportement par défaut.                                                            |
| Arbre d'héritage            | Non                                              | Toutes les classes sont descendantes de la classe `Object`                                                                                    |

* Java ne supporte pas les arguments par défaut contrairement à C++
* Java n'utilise pas de fichiers headers comme C++, et utilise le mot clé `import` pour inclure différentes classes et methodes

### JDK, JRE et JVM

#### JDK (Java Development Kit)

C'est un environment de développement et d'exécution pour des programmes Java. Ce kit (ou package) inclut deux choses:
* Le JRE (Java Runtime Environment) 
* Des outils de développement 
  * Un interpreteur (java)
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

<br><br>
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
* Des langages existants ont été réimplémentés pour utiliser la JVM pour profiter de ces optimisations (Jython, JRuby, ...)
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

### Import

* Importer une classe spécifique:

```java
import java.util.ArrayList;
```

* Importer toutes les classes qui se trouvent dans un package:

```java
import java.util.*
```

### Sorties et entrées

* Afficher du texte dans la console:

```java
// Retour à la ligne automatique:
System.out.println("Bonjour monde !");
System.out.println("Qtité: " + 10 + "\nPrix: " + 9.99 + "chf");

// Sans retour à la ligne:
System.out.print("Bonjour");
System.out.print(" monde !");

// Formater les données:
System.out.printf("pi = %.5f", Math.PI); // => pi = 3.14159
```

* Capturer une entrée au clavier:

```java
Scanner scanner = new Scanner(System.in);

String s = scanner.next();
```

### Variables

Identifiée par un nom, elle permet d'accéder à la valeur contenue dans l'adresse mémoire qu'elle référence. 

* Une variable est **le nom d'une adresse en mémoire**
* Le contenu d'une variable peut être changé en cours d'exécution

<Container type="danger">

**Le chapitre suivant explique ce qu'est un type primitif et un type non-primitif**

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

#### Déclaration et initialisation

```java
// Déclaration:
int x;
int a, b, c;

// Initialisation:
x = 5;
a = b = c = 2;

// Déclaration + initialisation:
int y = 12;
```

#### Variables final

Une variable `final` ressemble à une variable `const` en c++ à la différence qu'en Java, il n'est pas obligatoire de lui assigner une valeur lors de la déclaration:

```java
final int VALEUR_CONSTANTE = 100;
final int VALEUR_ETRANGE;
VALEUR_ETRANGE = 12;
```

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

* Un tableau Java est un objet qui contient un nombre définit d'éléments de même type arrangés de façon contigue en mémoire. On accède à ces éléments par leur index.
* Un tableau peut être 1D ou $n$D

#### Déclaration, instanciation, initialisation
```java
int[] tab1 = new int[3];
tab1[0] = 2;
tab1[1] = 3;
tab1[2] = 91;

// Shortcut
int[] tab2 = {2, 3, 91};
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

### Conditions

Identiques à celles du C:

```java
int x = 10;
if (x == 10) {
    System.out.println("J'aime la viande");
} else if (x > 10) {
    System.out.println("Je n'aime pas la viande");
} else {
    System.out.println("Où suis-je ?");
}          
```

Le switch-case existe aussi:

```java
int mois = 3;
String s;
switch (mois) {
    case 1: s = "Janvier";
            break;
    case 2: s = "Fevrier";
            break;
    case 3: s = "Mars";
            break;
    default: s = "Un autre mois";
            break;
}
```


### Boucles

Les boucles `while` et `do while` sont les mêmes que celles du C. La famille des `for` a quelques particularités interessantes:

#### for

For classique similaire à celle du C:

```java
String[] lst = {"Poule", "Cochon", "Poney", "Meuh"};
List<String> arr = new ArrayList<>(Arrays.asList(lst));

for (int i = 0; i < lst.length; i++) {
    lst[i] = lst[i] + "POW";
    arr.set(i, arr.get(i) + "POW");
}
System.out.println(Arrays.toString(lst));
// => [PoulePOW, CochonPOW, PoneyPOW, MeuhPOW]
System.out.println(arr);
// => [PoulePOW, CochonPOW, PoneyPOW, MeuhPOW]
```

<br>

<Container type="info">

Java permet d'initialiser plusieurs variables (du même type) dans la même `for`:

```java
for (int i = 0, j = 10; i < 10; i++, j += 10) {
    // du code
}
```

</Container>

#### for-each

Simplifie le parcours d'un iterable en permetant de directement utiliser une référence vers l'objet courant.

* **Methode privilégiée pour parcourir un iterable qui ne doit pas être modifié.**

##### Syntaxe:

```java
for (Type element: collection) {
    // du code qui utilise la variable `element`
}
```

##### Est équivalent à:

```java
for (int i = 0; i < collection.length; i++) {
    Type element = collection[i];
    // du code qui utilise la variable `element`
}
```

Il en découle les limitations suivantes:

1. **Une for-each ne permet pas de modifier l'iterable parcouru**
2. Une for-each ne donne pas l'indice de l'élément courant
3. Il n'est pas possible de modifier le sens de l'itération ou le pas (step)

#### Iterable.forEach()

Java 8 (celui utilisé en cours) permet de parcourir un iterable avec une syntaxe similaire à celle de la `forEach` JavaScript:

##### Syntaxe:

```java
iterable.forEach(e -> System.out.println(e));
```

##### Est équivalent à:

```java
for (Type e: iterable) {
    System.out.println(e)
}
```

**Les limitations sont les mêmes que pour la for-each.**

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

* <st c="g">TreeMap garanti l'ordre des éléments.</st>
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

En Java, un itérateur est un objet qui nous permet de traverser (itérer sur) une collection qui implémente l'interface `Iterable` (c'est le cas de tous les éléments du framework `Collection`).

L'utilisation d'un itérateur a le grand avantage de donner la **possibilité d'altérer/supprimer des objets de la collection en cours d'itération** ce qui **n'est pas le cas de la forEach**.

### Interface Iterator

Pour utiliser un itérateur, on commence par obtenir un `Itérateur` spécifique à la collection que l'on veut itérer:

```java {2}
List<Integer> lst = // ...
Iterator<Integer> i = lst.iterator();
```

L'iterface `Iterator` a trois methodes principales: 

| methode     | description                                                    |
| ----------- | -------------------------------------------------------------- |
| `hasNext()` | permet de vérifier si il reste des éléments sur lequels itérer |
| `next()`    | fait "avancer" l'itérateur                                     |
| `remove()`  | retire l'élément courant de la collection                      |


**Une façon de voir un itérateur est comme un curseur qui se déplace entre les indices d'un itérable.** Cette façon de voir les choses simplifie la compréhension du choix du nom des methodes. 

Sur les schéma suivants, la première ligne représente l'itérateur, la seconde ligne les indices de l'itérable et la dernière la valeurs des éléments. La situation initiale est celle qui suit les déclarations suivantes:

```java
List<Integer> lst = new ArrayList<>(Arrays.asList(7, 4, 8));
Iterator<Integer> i = lst.iterator();
```

<Col proportions="4/8" vAlign="20">
<template slot="left">

```
|
 [0] [1] [2] 
  7   4   8  
```

</template>
<template slot="right">

* `i.hasNext()` retourne `true`
* `i.next()` déplace le curseur et retourne `7`

</template>
</Col>


<Col proportions="4/8" vAlign="20">
<template slot="left">

```
    |
 [0] [1] [2] 
  7   4   8  
```

</template>
<template slot="right">

* `i.hasNext()` retourne `true`
* `i.next()` déplace le curseur et retourne `4`

</template>
</Col>


<Col proportions="4/8" vAlign="20">
<template slot="left">

```
        |
 [0] [1] [2] 
  7   4   8  
```

</template>
<template slot="right">

* `i.hasNext()` retourne `true`
* `i.next()` déplace le curseur et retourne `8`

</template>
</Col>


<Col proportions="4/8" vAlign="20">
<template slot="left">

```
            |
 [0] [1] [2] 
  7   4   8  
```

</template>
<template slot="right">

* `i.hasNext()` retourne `false`
* `i.next()` déclanche une exception "NoSuchElementException"

</template>
</Col>


Les itérateurs sont généralement utilisés avec une boucle `while` de la façon suivante:

```java {5}
String a[] = {"One", "Two", "Three"};
List<String> lst = new ArrayList<>(Arrays.asList(a))
Iterator<String> i = lst.iterator();

while (i.hasNext()) {
    String s = i.next();
    System.out.print(s + " ");
}
// => One Two Three
```

Il est également possible de les utiliser avec une `for`. Ainsi le code qui suit est équivalent au précédent:

```java {4}
String a[] = {"One", "Two", "Three"};
List<String> lst = new ArrayList<>(Arrays.asList(a));

for (Iterator<String> i = lst.iterator(); i.hasNext(); ) {
    String s = i.next();
    System.out.print(s + " ");
}
// => One Two Three
```


### Interface ListIterator

`ListIterator` est une extension qui rend les itérateurs plus flexibles:

```java
ListIterator<String> i = lst.listIterator(lst.size());
```

Noter qu'un argument (optionnel) spécifiant un indice de départ a été passé à la methode `listIterator`.

L'interface `ListIterator` donne accès aux mehtodes suivantes:

| methode           | description                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| `hasPrevious()`   | équivalent de `hasNext()` mais pour une itération inversée                                                  |
| `previous()`      | équivalent de `next()` mais pour une itération inversée                                                     |
| `nextIndex()`     | permet de récupérer l'indice qui suit                                                                       |
| `previousIndex()` | permet de récupérer l'indice précédent                                                                      |
| `add()`           | ajoute un élément avant l'élément qui serait retourné par `next()` et après celui retourné par `previous()` |
| `set()`           | remplace la valeur de l'élément courant                                                                     |

<br>

 <Container type="info">
 
 `set()` ne peut être call que si lors de l'itération courante, aucun call de `add()` ou de `remove()` n'a été fait.
 
 </Container>

 ### Itérer avec des lambda

 L'utilisation de `Iterator` ou `ListIterator` est particulièrement verbeuse. Il est possible de simplifier la syntaxe **si il n'est pas nécessaire de modifier les éléments** en utilisant une `forEach` spéciale:

 ```java {4,7}
List<Integer> lst = new ArrayList<>();
IntStream.range(0, 10).forEach(i -> lst.add(i));

lst.iterator().forEachRemaining(j -> System.out.println(j));

// Ou encore plus simplement en utilisant les references de fonction:
lst.iterator().forEachRemaining(System.out::println)
 ```

 ### Iterator Vs for-each

 #### Contexte

* **Iterator** est l'interface du framework collection qui permet de parcourir une collection en fournissant un accès séquentiel aux éléments de la collection:

```java
// iteration sur la collection `c` avec Iterator
for (Iterator i = c.iterator(); i.hasNext; ) {
    System.out.println(i.next);
}
```

* La **for-each**: est fait pour parcourir les objets d'une collection:

```java
// iteration sur la collection `c` avec une for-each
for (Element e: c) {
    System.out.println(e);
}

// equivalent à:
c.forEach( e -> System.out.println(e) );
```

#### Différences

 Dans une for-each, il n'est pas possible de modifier la collection contrairement à une itération faite avec un itérateur. Modifier une collection veut dire:

 * Retirer un élément de la collection
 * Ajouter un élément à la collection
 * Changer le contenu d'un objet (ou la valeur d'un élément primitif) de la collection 

Même si la boucle for-each crée implicitement un itérateur en interne, ce dernier **n'est pas** exposé à l'utilisateur et il n'est donc pas possible de modifier l'élément courant.

#### Utilisation optimale

* Pour modifier une collection <Fa fa="arrow-right"/> **itérateur**
* Tous les autres cas <Fa fa="arrow-right"/> **for-each**

#### Performances Vs For classique

* Les temps pour parcourir une liste avec une for-each ou un itérateur sont identiques. 

* En fonction du type collection, un parcours avec une for classique est sensiblement plus long:

```java
// iteration sur la collection `c`
for (int i = 0; i < c.length; i++) {
    System.out.println(c.get(i))
}
```

* Si `c` est de type `ArrayList` (comme pour un tableau classique, les éléments sont contigus en mémoire) la complexité temporelle en accès est $O(1)$
* Si `c` est de type `LinkedList`, comme l'accès direct à un élément quelconque n'est pas possible (les éléments ne sont pas contigus en mémoire), il est toujours nécessaire de traverser une partie de la liste avant d'accéder à un élément particulier, la complexité temporelle en accès est de $O(n)$.

**Les itérateurs et les for-each sont plus rapides que les for classiques pour les collections où les éléments ne sont pas contigus en mémoire.**

**Si les éléments d'une collection sont contigus en mémoire, alors les itérateurs, for-each et for classique ont des performances comparables.**


## Notions importantes

### Garbage Collector

* Il s'active automatiquement et **de façon imprévisible** pour nettoyer la mémoire des objets qui n'ont plus de références. Il n'est donc pas nécessaire en Java de `delte` à la main (comme en C++) pour libérer la mémoire qu'occupe un objet.
* Il défragmente le tas (<st c="r">les adresses des objets encore référencés changent !</st>).


### Références

En Java <Def def="Du moins de façon visible">les pointeurs n'existent pas</Def>. À cause du **GC**, les variables peuvent changer de place dans la mémoire en cours d;exécution. **En Java, on parle de références**.

Quand on dit qu'en Java "tout est objet" ce n'est pas tout à fait la vérité. **En Java tout est référence sur un "objet"** est plus approprié.

<Container type="info" header="Rappel">

* **Pointeur**: Adresse
* **Référence**: Valeur permettant l'accès à une donnée (Information sur la localisation de la donnée).

</Container>

#### Algèbre de références
Via des opérateurs simples (`==`, `+`, `-`, ...)

```java
String a = new String("A");
String b = new String("A");

System.out.println(a == b); // => false
```
`false` car les deux objets de type String n'ont **pas la même référence**.

<br>

```java
String a = new String("A");
String b = a;

System.out.println(a == b); // => true
```
`true` car en ligne 2 on assigne à la variable `b` la référence de `a`. Les deux variables contiennent donc la même références.

**Dans les deux cas, nous travaillons uniquement sur les références des variables `s1` et `s2` et non pas sur leur contenu.**

#### Algèbre de contenu
Via des méthodes.

```java
String a = new String("A");
String b = new String("A");

System.out.println(a.equals(b)); // => true
```
`true` car la méthode `equals` nous permet de faire une **comparaison de contenu** (des objets référencés). Même si les références sont différentes, le contenu de l'objet pointé est égale.


#### Passage d'arguments

<Container type="danger">

En java tous les passages d'arguments se font par **valeur**.

</Container>

* Les types simples se passent par valeur
* Les références se passent par valeur

Tous les passages par valeur font une **copie** de la valeur à passer.


### Copies et Clones

Deux types de copie:

1. **Copie superficielle** (light): Ce type de copie **porte uniquement sur la référence** de l'objet à copier. Après une copie superficielle, la référence initiale et la référence copiée pointent sur le même objet.

```java
String a = new String("a");
String b = a;

System.out.println(a == b);      // => true
System.out.println(a.equals(b)); // => true
```

<br>

2. **Copie profonde** (deep): Ce type de copie sert à **cloner un élément en mémoire**. Contrairement à la copie superficielle, la copie prodonfe clone le contenu de l'objet référencé.

```java
String a = new String("a");
String b = new String(a);

System.out.println(a == b);      // => false
System.out.println(a.equals(b)); // => true
```


### Types des références

Une référence possède deux types:
* **Effectif**: définit à l'instanciation et ne change jamais
* **Local**: donné par le typage local vu par le compilateur

```java
`Set s = new TriSet<Double>()`
```
* Le type de `s` effectif est `TriSet`
* Le type local de `s` est `Set` mais égallement `Object` qui est la classe dont tous les objects en java dérivent.

### Classe Object

En Java, toutes les classes héritent automatiquement de la classe `Object` qui implémente entre autres les methodes suivantes:
* `equals`: Comparaison **superficielle** (comparaison de références)
* `clone`: Copie **superficielle** (copie les références)
* `toString`: Implémentation de base qui affiche dans la console le nom de la classe ainsi que sa référence.

Ces comportements ne sont généralement pas les comportements souhaités et la meilleure chose à faire est de définir des **nouvelles methodes** (avec un nom différent) qui font le travail souhaité. Suggestions:
* `isEqual()`
* `cloneOf()`

De cette façon, si on utilise `isEqual()` ou `cloneOf`, on est certain qu'elle a été ré implémentée correctement. La méthode `toString` peut être override car elle n'a pas de comortement autre que cosmétique.

<Container type="info">

On peut également override `equals()` et `clone()` pour les faire appeller `isEqual()` et `cloneOf()` pour leur donner le bon comportement.

</Container>

### mot clé "final"

Le mot clé final peut être utilisé devant:

| quoi            | comportement                                                                            |
| --------------- | --------------------------------------------------------------------------------------- |
| classe          | La classe ne peut pas être dérivée                                                      |
| attribut        | L'attribut devient une constante et doit être définit au plus tard dans le constructeur |
| variable locale | Constante                                                                               |
| methode         | La methode ne peut pas être redéfinie dans une classe enfant                            |


## OOP

### Base

* Déclaration d'une classe: 
  * `<public/private/protected> class <Nom de la classe> { }`

```java
public class Bicycle {
    // Attributs et variables de la classe Bicycles
    public int cadence; // public: accessible depuis n'importe où
    private int speed;  // private: accessible depuis la classe
    protected int gear; // protected: accessible depuis la classe et sous ses sous-classes
    String name;        // default: Uniquement accessible depuis le package

    private Wheel[] wheels;
    
    static String className; // variable de classe

    // Bloc static:
    // Java ne possède pas d'implémentation pour les constructeurs statiques mais
    // possède le bloc static qui peut être utilisé pour initialiser les 
    // variables de classe qui est appelé lors du chargement de la classe.
    static {
        className = "Bicycle";
    }

    // Les constructeurs servent à l'initialisation de l'objet courant
    public Bicycle() {
        gear = 1;
        cadence = 50;
        speed = 5;
        name = "Bontrager";
    }

    // On peut surcharger un constructeur
    public Bicycle(int cadence, int speed, int gear, String name, Wheel[] wheels) {
        this.gear = gear;
        this.cadence = cadence;
        this.speed = speed;
        this.name = name;
        this.wheels = wheels;
    }

    // Constructeur de copie
    // this doit nécessairement être la 1ere ligne du constructeur de copie
    public Bicycle(Bicycle source) {
        this(
            source.gear,
            source.cadence,
            source.speed,
            source.name,
            clone(source.wheels),
        )
    }

    // Syntaxe d'une méthode:
    // <public/private/protected> <type de retour> <nom de la methode>(<arguments>)

    // Accesseurs: (getters et mutators) servent à retourner/changer les valeurs
    // des attributs d'une instance:

    public int getCadence() {
        return cadence;
    }

    // Les méthodes void ne retournent aucune valeur
    public void setCadence(int newValue) {
        cadence = newValue;
    }
    public void setGear(int newValue) {
        gear = newValue;
    }
    public void speedUp(int increment) {
        speed += increment;
    }
    public void slowDown(int decrement) {
        speed -= decrement;
    }
    public void setName(String newName) {
        name = newName;
    }
    public String getName() {
        return name;
    }

    // Override de la methode `toString` de la classe Object 
    @Override
    public String toString() {
        return "gear: " + gear + 
        " cadence: " + cadence + 
        " speed: " + speed +
        " name: " + name;
    }

	public Bicycle cloneOf() {
        // return new Bicycle(this);
		return this; // Autorisé tant que Bicycle est inaltérable
    }

    public Boolean isEqual(Bicycle source) {
        if (this == source) {
            return true;
        } else if (!this.cadence.equals(source.cadence)) {
            return false;
        } else if (!this.cadence.gear(source.gear)) {
            return false;
        } else if (!this.cadence.speed(source.speed)) {
            return false;
        } else if (!this.cadence.name(source.name)) {
            return false;
        } else if (this.wheels.length != source.wheels.length) {
            return false;
        } else {
            for (int i = 0; i < this.wheels; i++) {
                if (!this.wheels[i].isEqual(source.wheels[i])) {
                    return false;
                }
            }
        }
        return true;
    }

    // Override de la methode `clone` de la classe Object 
	@Override
	protected Bicycle clone() throws CloneNotSupportedException {
		return cloneOf();
    }

    // Override de la methode `equals` de la classe Object 
    @Override
    public boolean equals(Object source) {
        return source instanceof Bicycle ? isEqual((Bicycle) source) : false;
    }

    // Override de la methode `hashCode` de la classe Object 
    @Override
    public int hashCode() {
        // Attention : a.equals(b) => a.hascode() == b.hascode() mais pas reciproque
        return name.hashCode() + wheels.hashCode();
    }

    // Pour cloner un objet qui a pour attribut une collection, 
    // il faut implémenter une méthode statique `clone()` qui 
    // va parcourir la collection et cloner chaque case de la collection.
    // Statique car elle est appellée durant la construction d'un objet qui
    // n'existe pas encore.
    private static Wheel[] clone(Wheel[] wheels) {
        int n = wheels.length;
        Wheel[] wheelsClone = new Wheel[n];

        for (int i = 0; i < n; i++) {
            wheelsClone[i] = new Wheel(wheels[i]);
        }
        return wheelsClone;
    }
}
```

### Héritage

* Une classe hérite d'une autre classe via le mot clé `extends`.
* Une classe ne peut hériter que d'une seule classe.
* Si aucun constructeur n'est défini dans la classe fille, la JVM en créera un et appellera automatiquement le constructeur de la classe mère.
* La classe fille hérite de toutes les propriétés et méthodes `public` et `protected` de la classe mère.
* Les propriétés et méthodes `private` d'une classe mère ne sont pas accessibles dans la classe fille.
* On peut redéfinir (override) une méthode héritée, c'est à dire changer son comportement (mais pas sa signature).
* **Si on change la signature d'une methode héritée, ce n'est pas de l'override mais de la surcharge.**
* On peut utiliser le comportement d'une classe mère via `super()`.

<br>

<Def def="Les Penny Farthings sont des bicyclette avec une grande roue avant. Il n'y a pas de roue libre, le cycliste est obligé de pédaler en permanence.">PennyFarthing</Def> est une sous-classe de Bicycle:

```java
class PennyFarthing extends Bicycle {
    public PennyFarthing(int cadence, int speed) {
        // super() sert ici à call le constructeur parent
        super(cadence, speed, 0, "PennyFarthing");
    }

    // Override de la methode setGear() de la classe mère
    @Override
    public void setGear(int gear) {
        this.gear = 0;
    }
}
```

### Polymorphisme

Le polymorphisme complète l'héritage, il permet de manipuler des objets sans en connaitre le type.

<Container type="danger">

Attention à ne pas confondre **surcharge de méthode** avec une **méthode polymorphe**:
* **Une méthode surchargée** diffère de la méthode originale par le nombre ou le type de paramètres qu'elle prend en entrée.
* **Une méthode polymorphe** prend les mêmes paramètres que la méthode de base mais traite les choses différemment. Cette methode se trouve dans une autre classe (et donc dans une autre isntance de cette autre classe).

</Container>

Comme la classe `PennyFarthing` héritent de la classe `Bicycle`, on peut dire qu'un `PennyFarthing` est un `Bicycle` et écrire : `Bicycle bicycle = new PennyFarthing();`. **Le polymorphisme est la capacité d'un objet de se faire passer pour un autre**.




### Classes abstraites

* Une classe peut hériter d'une classe abstraite (`extends`).
* Une classe abstraite **ne peut pas** être instanciée.
* Une classe abstraite n'est pas obligée de contenir de méthodes abstraites.
* Si une classe contient une méthode abstraite, cette classe doit alors être déclarée abstraite.
* Une methode abstraite n'a pas de corp.
* Les méthodes abstraites d'une classe abstraite dont hérite une classe fille doivent être implémentées.
* Une classe abstraites peut avoir une méthode main.
* Les variables d'une classe abstraite sont implicitement (par défaut) déclarées comme final. 
* Déclaration d'une classe abstraite: 
  * `<niveau d'accès> abstract class <nom classe> {}`

```java
public abstract class Animal {
    public abstract void makeSound();

    // Les methodes peuvent avoir une implémentation dans 
    // une classe abstraite.
    public void eat() {
        age = 30;
        System.out.println("I'm eating.");
    }

    // On n'a pas besoin d'initialiser les variables dans une
    // classe abstraite. Cependant, dans une interface, les variables
    // sont implicitement déclarées comme final et doivent être
    // initialisées.
    private int age;

    public void printAge() {
        System.out.println(age);
    }

    // Les classes abstraites peuvent avoir une fonction main.
    public static void main(String[] args) {
        System.out.println("I'm abstract");
    }
}

public class Dog extends Animal {
    // On doit utiliser l'annotation @Override lors de l'override
    // d'une methode abstraite d'une classe abstraite.
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}
```

### Interfaces


* Une interface est une classe 100% abstraite (aucune de ses methodes n'a de corp).
* Une interface sert à définir un _super-type_ et à permettre le polymorphisme.
* Les méthodes dans le corp d'une interfaces ne peuvent pas être implémentées à l'exception des méthodes static. 
* Une classe peut implémenter ("hériter de") plusieurs interfaces.
* Une classe qui implémente une interface doit en implémenter toutes les methodes.
* Déclaration d'une interface: 
  * `<niveau d'accès> interface <nom interface> extends <éventuelle interface mère> {}`


Toute nourriture peut être mangée et digérée différemment, l'interface `Edible` (comestible) décrit l'action de manger:

```java
public interface Edible_I {
    // Toute classe qui implémente cette interface doit implémenter
    // cette méthoed:
    public void eat(); 
}
```

L'interface Digestible décrit l'action de digérer:

```java
public interface Digestible_I {
    public void digest();

    // Les interfaces peuvent avoir des methodes par défaut
    public void defaultMethod() {
        System.out.println("Salut d'une methode par défaut");
    }
}
```

Il est possible de maintenant créer une classe qui implémente chacune de ces interfaces:

```java
public class Fruit implements Edible_I, Digestible_I {
    @Override
    public void eat() {
        // ...
    }

    @Override
    public void digest() {
        // ...
    }
}
```

<st c="r">En Java on peut hériter d'une unique classe mais on peut implémenter plusieurs interfaces:</st>

```java
public class ExampleClass extends ExempleClassParent implements Interface_I {
    @Override
    public void interfaceMethod() {
        // ...
    }
}
```

<br>

<Container type="info" header="Nommage d'interface">

On suffixe le nom de l'interface avec `_I` (underscore "i" majuscule).

</Container>

### Class finale

Les classes déclarées comme `final` ne peuvent pas avoir de classes fille.

* Déclaration d'une classe finale:
  * `<niveau d'accès> final <nom de la classe finale> {}`

```java
public final class SaberToothedCat extends Animal {
    @Overried
    public void makeSound() {
        System.out.println("Roar");
    }
}
```

### Methode finale

Les methodes déclarées comme `final` ne peuvent pas être override par une classe fille et en sont donc l'implémentation finale.

```java
public abstract class Mammal() {
    public final boolean isWarmBlooded() {
        return true;
    }
}
```

### Classe à double représentation

<st c="r">TODO</st>

## Généricité

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

* Plus d'info: [openClassRoom](https://openclassrooms.com/fr/courses/26832-apprenez-a-programmer-en-java/22404-la-genericite-en-java)

## Tests JUnit

<st c="r">TODO</st>

## Deploy

<st c="r">TODO</st>

## En vrac

* Chaque fichier .java doit contenir une classe public portant le même nom que le fichier.

* Pour exécuter un programme Java, ce dernier doit posséder une methode `main` qui fournit un point d'entrée

* `String.format()` permet de formater du texte:
  * `String.format("%d poules %s", 4, "rouge");`

* Un objet est dit **inaltérable** quand il ne peut plus changer de valeur après instanciation (String, Wrapper,...)

* Les blocs **if** sont le marteau du developpeur, en utiliser le moins possible est un gage de qualité du code.

* En C, C++ et Java, il y a un **double déréférencement** entre la mémoire logique et physique: Pointeur sur un secteur de mémoire _logique_, Si le système swap, le pointeur garde la même valeur, mais l'emplacement est différent. Double déréférencement entre la mémoire logique et physique. <st c="r">A compléter</st>.

* Pour tester un double (`0.9999 == 1`) il est nécessaire de définir une certaine précision ($E$). 
$$ E \geq |\frac{a-b}{a}| $$


<br>

* Types de classes:
  * **Pojo** (Plain Old Java Object, n'implémente pas d'interface spécifique)
  * **Runnable** (potentiel délai entre le call et la fin de l'éxecution des méthodes)
  * **Plain**
  * **classic** (mélange des autres)

<br>

* Types de polymorphisme en Java:
  * Polymorphisme objet
  * Polymorphisme interface

<br>

* Contrats:
  * Comment faire un contrat? **faire une interface**
  * Comment valider un contrat **implementer le contrat**

## Special tactics

```java
System.out.println(Double.valueOf("12.4")); // => 12.4
```

Les méthodes pour oppérer sur les tableaux sont regroupées dans la classe `Arrays`:

```java
int tab[] = {1,2,3,4,5};
System.out.println(Arrays.toString(tab));
System.out.println(Arrays.toString(Arrays.copyOfRange(tab, 0, 2)));
```