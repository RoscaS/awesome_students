---
title: CheatSheet Java
date: 2018-09-25
sidebar: auto
author: Sol
---

## En vrac
Importer *.jar: `ctrl+shift+p` <Fa fa="arrow-right"/> project structure <Fa fa="arrow-right"/> modules <Fa fa="arrow-right"/> +
--------


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

* Pojo (Plain Old Java Object, n'implémente pas d'interface spécifique)
* Runnable (potentiel délai entre le call et la fin de l'éxecution des méthodes)
* Pleine
* classic (mélange des autres)

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
| **JRE**  | Java Runtime Environement |
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

Classe _wrapper_ qui permet d'instancier un type simple sous forme d'objet. 

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

