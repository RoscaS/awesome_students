---
title: CheatSheet Java
date: 2018-09-25
sidebar: auto
author: Sol
---

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

```java
System.out.println(Double.valueOf("12.4")); // => 12.4
```

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




## Use class
Si une classe est préfixée par `Use` comme dans `UseNomDeClass` c'est une classe qui possède un `main` et qui sert à utiliser `NomDeClass`.

## Ramification 
```shell
└── Wxxxx (workspace)
      └── Pxxxx (projet)
            └──  nomDePackage
```

## Garbage collector
* Clean les objets sans références
* Défragmente (les adresses des objets encore référencés changent)
  

## Get Set
* Get
  * on retourne un attribut, jamais de calcule!

## Wrappers de types simples
> Lié à la notion de boxing
Il n'est pas possible d'utiliser les types simples dans les conteneurs. Java implémente des variantes de tous les types simples:
* **int -> Integer**
* string -> String
* double -> Double

## Programmation par contract
Lié aux <Def def="Classe purement abstraite">interfaces</Def>. Les methodes de l'interface ne sont pas implémentées. Le contract veut dire qu'on s'engage à les implémenter pour satisfaire le standard.

## List & LinkedList
* LinkedList: performant quand on a beaucoup d'insertions suppressions
* ArrayList: performant si on doit souvent itérer dessus


## HashSet & TreeSet
Les sets contiennent une collection d'objets uniques.
* HashSet: unordered, le plus performant des deux
* TreeSet: ordered 

## Maps
Collection de couples `Key` `Value` dont la `key` et unique.

* Quand on y pense, toutes les entrées d'un dictionnaire forment un set de clés **uniques** qui pointent sur des valeurs.

## Type effectif et type local

`Set s = new TriSet<Double>()`
* Le type de `s` effectif est `TriSet`
* Le type local de `s` est `Set` mais égallement `Object` qui est la classe dont tous les objects en java dérivent.

## Inférence de type

```java {2}
private static List<Double> create(int n) {
		return new ArrayList<>(n); // equivalent à return new ArrayList<Double>(n)
}
```

En ligne 2 on pourrait préciser le type entre chevrons mais ce n'est pas nécéssaire comme le compilateur est capable d'**inférer** tout seul le type grace à la signature de la méthode.

## Passage d'argument en Java

<Container type="warning">

En Java tout se passe par **COPIE** de référence (tout se retourne aussi par **COPIE** de référence).

</Container>


* Une seul façon: **passage par COPIE** (de référence, 4 bytes) pour tous les types (simples et complexes). Le retour de la même façon se fait par **COPIE** (de référence, 4 bytes)
* `b = new B()`: `b` est une référence vers l'objet `B`
En Java le GC passe et fait deux chose, il `delete` les objets qui n'ont plus de référence **et** défragmente le tas (heap). Après défragmentation, l'adresse de l'objet change et donc on ne peux pas dire que `b` est un pointeur car un pointeur par définition est une adresse. En conclusion **En Java tout est Référence**


<Container type="info">

De la même façon qu'en C/C++
* `b` se retrouvera souvent sur la pile (stack)
* `B` se retrouvera toujours sur le tas (heap)

</Container>


* A chaque fois qu'on veut modifier un contenu, on passe par des méthode.
* Quand on travail sans méthodes on fait de l'algèbre de référence.

## Algèbre de référence vs algèbre sur les contenus
Faite avec des opérateurs simples (==, +, -,...) et sur des références. Pour oppérer sur le contenu des références on utilise des méthodes.

```java
Integer C1 = 1000;
Integer C2 = 1000;

C1 == C2 // => False (comparaison des adresses où se trouve l'objet référencé)
C1.equals(C2) // => True (comparaison des contenus)

C1 = C2 

C1 == C2 // => True (comparaison des adresses où se trouve l'objet référencé)
```

## Fonctions et méthodes

D'après le prof de Java:
* **methode**: une "fonction" sans valeur de retour
* **fonction**: Domaine de départ et d'arrivée (input output)
* **procédure**: monde procédural (non objet), désigne une fonction

Donc rien à voir avec le fait d'être déclaré dans le corp d'une classe. (A VERIFIER)
En gros (en java du moins) on peut toujours appeler toutes les procédures (méthode)


## JAR
* Fichiers compilés
* Enemble de classes compilés
* Analogue à un zip

Des classes compilées zipées et renommées en JAR. A la place d'avoir des tas de fichiers à déplacer. Équivalent d'un **dll** ou d'un **so**.

## Tableaux multiD
* Java est un language **row major**
* N'est pas forcément consistant au niveau de la longueur des sous tableaux
  * permet de stoquer des matrices symétriques, creuses ou pleine
