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
* [Comprehension de la JVM](https://soat.developpez.com/tutoriels/java/jvm/decouverte-machine-virtuelle-java/)
* [Comprendre le fonctionnement de la JVM 1/2](https://blog.xebia.fr/2013/05/27/comprendre-le-fonctionnement-de-la-jvm-article-1/)

## Culture générale

### Introduction

Java est un langage haut niveau, orienté objet, dynamique et fortement typé dont la syntaxe est proche du C++. Il est multi-plateformes et guidé par le principe du WORA (Write once, Run Anywhere). 

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

## JDK, JRE et JVM

### JDK (Java Development Kit)

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

### JRE (Java Runtime Environment)

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

### JVM (Java Virtual Machine)


C'est une spécification qui décrit la la machine virtuelle où le bytecode Java peut interprété et éxécuté. Il en existe pour de nombreuses plateformes. La JVM, contrairement à Java, est dépendante de la plateforme qui la fait tourner. La JVM s'occupe des actions suivantes:

* Mise à disposition d'un environment d'exécution
* Chargement du code
* Vérification du code
* Interpretation du code
* Exécution du code

## Compilation et exécution

### Compilation

Chaque application Java est constituée de fichiers source (.java) qui sont compilés en bytcode (sans interaction avec l'OS).

![Image](https://i.imgur.com/RRg6zs6.png)

### Execution

Le bytecode est ensuite utilisé par la JVM et transformée en code natif. Cette séparation entre le langage et la plateforme à de nombreux bénéfices:
* L'optimisation du code Java s'améliore sans avoir à recompiler le code
* Des langages existants ont été réimplémentés pour utiliser la JVM pour profiter de ces optimisations (Jython, JRuby)
* De nouveaux langages ont été développés pour combler les lacunes de Java (Clojure, Scala)

![Image](https://i.imgur.com/xksEoUp.png)

C'est la JVM qui gère la mémoire en segmentant le heap en plusieurs sections:
* **Young Generation**: Espace dans lequel tous les objets sont créés.
* **Old Génération**: Contient les objets ayant une longue durée de vie

Il existe deux autres zones mémoire:
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

Tout au long de l’exécution d’une application, la JVM maintient des compteurs qui lui permettent de détecter le code souvent exécuté. C’est sur ce code que les optimisations vont être le plus utiles et c’est donc sur celui-ci que la JVM travaille (**Just-In-Time** Optimisation).

Lors de l'exécution les étapes suivantes s'enchainent:

<Col proportions="4/8" vAlign="40">
<template slot="left">


<Media
    src="https://i.imgur.com/3cGksRZ.png"
    width=220
    center="true"
/>

</template>
<template slot="right">

* **ClassLoader**: Le sous système de la machine virtuelle Java qui s'occupe du chargement des fichiers _class_.
* **Vérification du ByteCode**: Assure qu'il n'y a pas de fragments de code qui violent les droits d'acces aux objets.

</template>
</Col>

<Container type="info">

Il est possible d'avoir plusieurs classes dans le même fichier comme l'illustre la figure suivante:

![Image](https://i.imgur.com/BnvXYh8.png)

</Container>








## En vrac

* Un objet est dit **inaltérable** quand il ne peut plus changer de valeur après instanciation (String, Wrapper,...)
* Les blocs **if** sont le marteau du developpeur, en utiliser le moins possible est un gage de qualité du code.
* En C, C++ et Java, il y a un **double déréférencement** entre la mémoire logique et physique: Pointeur sur un secteur de mémoire _logique_, Si le système swap, le pointeur garde la même valeur, mais l'emplacement est différent. Double déréférencement entre la mémoire logique et physique. <st c="r">A compléter</st>.

```java
System.out.println(Double.valueOf("12.4")); // => 12.4
```

----------

Les méthodes pour oppérer sur les tableaux sont regroupées dans la classe `Arrays`:
```java
int tab[] = {1,2,3,4,5};
System.out.println(Arrays.toString(tab));
System.out.println(Arrays.toString(Arrays.copyOfRange(tab, 0, 2)));
```

----------
Pour tester un double (`0.9999 == 1`) il est nécessaire de définir une certaine précision ($E$). 
$$ E \geq |\frac{a-b}{a}| $$

----------

* Préfixer les classes de test par "Test"
* Préfixer les classes contenant un main par "Use"

----------

Types de classes:

* **Pojo** (Plain Old Java Object, n'implémente pas d'interface spécifique)
* **Runnable** (potentiel délai entre le call et la fin de l'éxecution des méthodes)
* **Plain**
* **classic** (mélange des autres)

----------

Contrats:

* Comment faire un contrat? **faire une interface**
* Comment valider un contrat **implementer le contrat**

----------

Types de polymorphisme en Java:

* Polymorphisme objet
* Polymorphisme interface

----------

Ramification:

```shell
└── Wxxxx (workspace)
      └── Pxxxx (projet)
            └──  nomDePackage
```

----------


Type effectif et type local:

`Set s = new TriSet<Double>()`
* Le type de `s` effectif est `TriSet`
* Le type local de `s` est `Set` mais égallement `Object` qui est la classe dont tous les objects en java dérivent.

## Utils

<Col proportions="7/5" vAlign="0">
<template slot="left">

<Card header="Templates" max-width="300">

* `ctrl` `shift` `s`: save all & compile
* `ctrl` `shift` `f`: format
* `ctrl` `shift` `7`: comment line
* `ctrl` `shift` `r`: refactor
* `ctrl` `shift` `l`: open shortcut list
* `ctrl` `shift` `o`: organise import
* `ctrl` `f11`: rexec last (last build?)
* `ctrl` `t`: quicl type hierarchy
* `ctrl` `o`: quick outline
* `ctrl` `t`: quick type hierrachy
* `ctrl` `d`: delete line
* `ctrl` `shift` `p`: jump to bracket

</Card>

</template>
<template slot="right">

<Card header="Completion" max-width="270">

* `cmain`: Create main methodes
* `cmpu`: Public method component
* `cmpr`: Private methods component
* `ci`: IS-methods component
* `csa`: Static methods component
* `sysout`: Print line
* `cjunit`: Create Junit Canvas

</Card>

</template>
</Col>

<Card header="Workspace" max-width="550">

* `git clone ssh://javab@157.26.83.27/home/javab/git/WCoursJava.git`
* **basel2018**
*  Formatter original setting: BibiEclipseFormatter

</Card>

<br>

## Lexique
|          |                           |
|----------|---------------------------|
| **JRE**  | Java Runtime environment |
| **JDK**  | Java Development Kit      |
| **JVM**  | Java Virtual Machine      |
| **.jar** | Java Archive              |


* **Jar** (Java ARchive): Container qui contient des fichiers compilés. Un **.jar** est facile à décompiler pour retrouver les sources.

## Flux de sorties

* `System.out.println()`: print avec retour à la ligne
* `System.out.print()`: Ecriture sans retour à la ligne
* `System.err.println()`: Ecriture sur le flux d'erreur


## Tableaux

### Déclaration
```java
int[] tab1 = new int[5];
int[] tab2 = {2, 3, 9, 2, 5};
```

### Accès
```java
tab2[1] = 3;
```

### Opérations

* `static void sort(type[] tab)`: Trie un tableau in place

```java
double[] tab = {1.2, -2.7, 0.4, 3.1};
Array.sort(tab); // tab = {-2.7, 0.4, 1.2, 3.1}
```

* `static String toString(type[] tab)`: Donne une représentation sous forme de string de `tab`

```java
int[] tab = {1, 2, 3, 7};
String s = Arrray.toString(tab); // s = "[1, 2, 3, 7]"
```

* `static void fill(type[] tab, type v)`: Remplit `tab` avec la valeur `v`

```java
float[]tab = new float[3];
Arrays.fill(tab, (float)3.14); // tab = {3.14, 3.14, 3.14}
```

## Collections

<br>

![Image](https://i.imgur.com/kDt0RjF.png)

<br>


### List

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

### Set

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

### Map

_Key value pair_
* **Interface**: `map`
* **Implémentations**:
  * `HashMap<k,v>`
  * `TreeMap<k,v>`

`TreeMap` garanti également l'**ordre** des éléments.

```java
Map<String, Integer> hashMap = new HashMap<>();
Map<String, Integer> treeMap = new TreeMap<>();
```

<br>
<br>

<Container type="info" header="Choix entre Hash et Tree">

* **Hash**Map/Set: pas de relation d'ordre, performant
  * <Fa fa="arrow-right"/> À privilégier
* **Tree**Map/Set: relation d'ordre, peu performant   
  * <Fa fa="arrow-right"/> À éviter si l'ordre n'est pas important

</Container>

### Tableaux 2D
Les tableaux 2D n'existent pas en tant que structure de donnée mais il est possible de les utiliser comme en C et Cpp via de simples tableaux où chaque case du tableau contient une référence vers un autre tableau. 

<Spoiler tag="Exemples">

```java
public class Tab2D {
    public static double[][] regular(int n, int m) {
        return new double[n][m];
    }

    public static double[][] triangle(int n) {
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

</Spoiler>

## Boxing

L'autoboxing permet la conversion automatique d'un type primitif vers son wrapper correspondant (boxing) ou inversement (unboxing)

| Type    | Wrapper     | size    |
|---------|-------------|---------|
| int     | `Integer`   | 4 bytes |
| char    | `Character` | 2 bytes |
| byte    | `Byte`      | 1 byte  |
| short   | `Short`     | 2 bytes |
| long    | `Long`      | 8 bytes |
| float   | `Float`     | 4 bytes |
| double  | `Double`    | 8 bytes |
| boolean | `Boolean`   | 1 byte  |

<br>

<Container type="danger">

Les collections ne sont pas utilisable avec les types simples !

</Container>


## Itération

### Itérateur
```java
ListIterator<Integer> it = list.listIterator();

while (it.hasNext()) {
  it.next(); // On place l'itérateur avant d'accéder à l'élément
  it.set(2);
}
```     

### Foreach

```java
for (Integer i : list) {
  System.out.println(i);
}
```
<st c="r">En parcourant avec une forEach, la modification de la collection n'est pas possible.</st>

### For classique
```java
for(int i = i; i <= liste.size(); i++) {
  System.out.println(list.get(i));
}
```
<st c="rgb">À éviter: complexité $O(n^2)$. Utiliser `collection.get(idx)` uniquement pour des accès uniques.</st>

## Garbage Collector
* Il s'active automatiquement et de façon imprévisible pour nettoyer la mémoire des objets qui n'ont plus de références. 
* Il défragmente le tas (<st c="r">les adresses des objets encore référencés changent !</st>).


## Références
En Java <Def def="Du moins de façon visible">les pointeurs n'existent pas</Def>. À cause du **GC**, les variables peuvent changer de place dans la mémoire en cours d;exécution. **En Java, on parle de références**.

En Java, **tout objet est référence**, on ne peut jamais toucher l'objet lui même.

<Container type="info" header="Rappel">

* **Pointeur**: Adresse
* **Référence**: Valeur permettant l'accès à une donnée (Information sur la localisation de la donnée).

</Container>

```java
Integer C1 = 1000;
Integer C2 = 1000;

C1 == C2 // => False (comparaison des références)
C1.equals(C2) // => True (comparaison des contenus)

C1 = C2 

C1 == C2 // => True (comparaison des références)
```

### Exemples

#### 1. Algèbre de références
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
`true` car en ligne 2 on assigne à la variable `b` la référence vers `a` donc les deux variables contiennent la même références.

#### 2. Algèbre de contenu
Via des méthodes.

```java
String a = new String("A");
String b = new String("A");

System.out.println(a.equals(b)); // => true
```
`true` car la méthode `equals` nous permet de faire une **comparaison de contenu** (des objets référencés). Même si les références sont différentes, le contenu de l'objet pointé est égale.

## Passage d'arguments

<Container type="danger">

En java tous les passages d'arguments se font par **valeur**.

</Container>

* Les types simples se passent par valeur
* Les références se passent par valeur

Tous les passages par valeur font une **copie** de la valeur à passer.


## Copies et Clones

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

