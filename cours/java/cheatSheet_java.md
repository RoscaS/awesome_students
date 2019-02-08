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

* [Développons en Java](https://www.jmdoudoux.fr/java/dej/index.htm)
* [JavaPoint](https://www.javatpoint.com)
* [GeeksForGeeks](https://www.geeksforgeeks.org)
* [Comprehension de la JVM](https://soat.developpez.com/tutoriels/java/jvm/decouverte-machine-virtuelle-java/)
* [Comprendre le fonctionnement de la JVM 1/2](https://blog.xebia.fr/2013/05/27/comprendre-le-fonctionnement-de-la-jvm-article-1/)
* [Wikipedia Jar](https://en.wikipedia.org/wiki/JAR_(file_format))

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
|-----------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
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

## Langage

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
|-----------------------|---------------|
| Integer               | int           |
| Long                  | long          |
| Float                 | float         |
| Double                | double        |

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

### Collections

Une collection regroupe dans une entité un groupe d'objets. Java fournit le framework `Collection` qui définit un certain nombre de classes et d'interfaces qui permettent ce regroupement.
* Les deux principales interfaces pour manipuler les classes de `Collection` sont `java.util.Collection` et `java.util.Map`. 
* L'avantage de cette hiérarchie est de fournir une utilisation (syntaxe) unifiée pour manipuler ces objets.

<Spoiler tag="Collections: sous le capot">

<Media
    src="https://i.imgur.com/l4z5cQB.png"
    caption="https://www.javatpoint.com/collections-in-java"
    center="true"
/>


#### Interface: Iterable

* Racine de toutes les classes de `Collection`.
* `Collection` _extends_ l'interface `Iterable` et donc toutes les sous-classes de `Collection` implémentent l'interface `Iterable`.
* `Iterable` ne contient qu'une seul méthode abstraite: `Iterator<T> iterator()` qui retourne un itérateur sur l'élément de type `T`.

<br>

#### Interface: Collection

* Interface qu'implémentent toutes les classes du framework collection.
* Déclare les methodes que toutes les collections exposent.

<br>

* [Plus d'informations sur les methodes et imlpémentations du framework](https://www.javatpoint.com/collections-in-java)

<br>

</Spoiler>



### Collections usuelles

<br>

![Image](https://i.imgur.com/kDt0RjF.png)


#### List

_Collection linéaire_
* **Interface**: `List`
* **Implémentations**:
  * `LinkedList`
  * `ArrayList`

Privilégier `LinkedList` pour de nombreuses insertions/suppressions.

```java
List<Integer> arrayList = new ArrayList<>();
List<Integer> linkedList = new LinkedList<>();
```

<br>

<Container type="info" header="Inférence de type">

Le compilateur est capable de déduire le type dans les chevrons à droite du signe `=`. Il n'est pas nécessaire de l'écrire une seconde fois.

</Container>

#### Set

_Unicité des éléments_
* **Interface**: `Set`
* **Implémentations**:
  * `HashSet`
  * `TreeSet`

`TreeSet` garanti également l'**ordre** des éléments.

```java
Set<Integer> treeSet = new TreeSet<>();
Set<Integer> hashSet = new HashSet<>();
```


#### Map

_Key value pair_
* **Interface**: `Map`
* **Implémentations**:
  * `HashMap<k,v>`
  * `TreeMap<k,v>`

`TreeMap` garanti également l'**ordre** des éléments.

```java
Map<String, Integer> hashMap = new HashMap<>();
Map<String, Integer> treeMap = new TreeMap<>();
```

<br>

<Container type="info" header="Choix entre Hash et Tree">

* **Hash**Map/Set: pas de relation d'ordre, performant
  * <Fa fa="arrow-right"/> À privilégier
* **Tree**Map/Set: relation d'ordre, peu performant   
  * <Fa fa="arrow-right"/> À éviter si l'ordre n'est pas important

</Container>

### Boucles

