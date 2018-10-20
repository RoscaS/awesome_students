---
title: CheatSheet Java
date: 2018-09-25
sidebar: auto
author: Sol
---


	const int poule = 10;
	const int cochon = 12;

## Devoirs pour le 10 octobre
1. Revisiter sur la dualité objet référence en Java.

2. Problème du dé
* Combien de fois dois-on en <Def def="pas hésiter à poser un gros échantillion $10^9$+">moyenne</Def> lancer un dé pour obtenir une fois toutes les faces. La moyenne doit être un entier (penser à `ceill`).
* Pareil pour un dé à $n$ faces.

3. Utiliser Quadratique clavier (finir)

#### Indication
* Le code est très simple ($\approx$ 10 lignes)
* Utiliser la classe `Random`

#### Détails d'implémentation
* Nouveau package
* Une classe et un UseCase
* Class (**statique**): le job
* UseCase: print

## Workspace DreamTeam
### Elève au projecteur
À la fin du cours:
* `commit` & `push`
### Les autres
Au début du cours
* Clone le repo
À la fin du cours (ou plus tard)
* Effacer ou déplacer l'archive en dehors du working folder
* Clone la version de la personne au projecteur


## Eclipse cheatSheet

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


## En vrac
* `git clone ssh://javab@157.26.83.27/home/javab/git/WCoursJava.git`
* **basel2018**
*  Formatter original setting: BibiEclipseFormatter

### Jar
* Jar: Java ARchive
Container qui contient des fichiers compilés. On peut réutiliser tous les `jar` qu'on trouve.

![Image](https://i.imgur.com/7zEjhZI.png)

### Syntaxe tableaux
```cpp
// cpp
double* tab = new double[2];
```

```java
double[] tab = new double[2];
tab[1] = 2;
```


### Use class
Si une classe est préfixée par `Use` comme dans `UseNomDeClass` c'est une classe qui possède un `main` et qui sert à utiliser `NomDeClass`.

### Ramification 
```shell
└── Wxxxx (workspace)
      └── Pxxxx (projet)
            └──  nomDePackage
```

### Garbage collector
* Clean les objets sans références
* Défragmente (les adresses des objets encore référencés changent)
  

### Get Set
* Get
  * on retourne un attribut, jamais de calcule!

### Wrappers de types simples
> Lié à la notion de boxing
Il n'est pas possible d'utiliser les types simples dans les conteneurs. Java implémente des variantes de tous les types simples:
* **int -> Integer**
* string -> String
* double -> Double

### Programmation par contract
Lié aux <Def def="Classe purement abstraite">interfaces</Def>. Les methodes de l'interface ne sont pas implémentées. Le contract veut dire qu'on s'engage à les implémenter pour satisfaire le standard.

### List & LinkedList
* LinkedList: performant quand on a beaucoup d'insertions suppressions
* ArrayList: performant si on doit souvent itérer dessus


### HashSet & TreeSet
Les sets contiennent une collection d'objets uniques.
* HashSet: unordered, le plus performant des deux
* TreeSet: ordered 

### Maps
Collection de couples `Key` `Value` dont la `key` et unique.

* Quand on y pense, toutes les entrées d'un dictionnaire forment un set de clés **uniques** qui pointent sur des valeurs.

### Type effectif et type local

`Set s = new TriSet<Double>()`
* Le type de `s` effectif est `TriSet`
* Le type local de `s` est `Set` mais égallement `Object` qui est la classe dont tous les objects en java dérivent.

### Inférence de type

```java {2}
private static List<Double> create(int n) {
		return new ArrayList<>(n); // equivalent à return new ArrayList<Double>(n)
}
```

En ligne 2 on pourrait préciser le type entre chevrons mais ce n'est pas nécéssaire comme le compilateur est capable d'**inférer** tout seul le type grace à la signature de la méthode.

### Passage d'argument en Java

::: warning Attention
En Java tout se passe par **COPIE** de référence (tout se retourne aussi par **COPIE** de référence).
:::


* Une seul façon: **passage par COPIE** (de référence, 4 bytes) pour tous les types (simples et complexes). Le retour de la même façon se fait par **COPIE** (de référence, 4 bytes)
* `b = new B()`: `b` est une référence vers l'objet `B`
En Java le GC passe et fait deux chose, il `delete` les objets qui n'ont plus de référence **et** défragmente le tas (heap). Après défragmentation, l'adresse de l'objet change et donc on ne peux pas dire que `b` est un pointeur car un pointeur par définition est une adresse. En conclusion **En Java tout est Référence**
::: warning Détail
De la même façon qu'en C/C++
* `b` se retrouvera souvent sur la pile (stack)
* `B` se retrouvera toujours sur le tas (heap)
:::

* A chaque fois qu'on veut modifier un contenu, on passe par des méthode.
* Quand on travail sans méthodes on fait de l'algèbre de référence.

### Algèbre de référence vs algèbre sur les contenus
Faite avec des opérateurs simples (==, +, -,...) et sur des références. Pour oppérer sur le contenu des références on utilise des méthodes.

```java
Integer C1 = 1000;
Integer C2 = 1000;

C1 == C2 // => False (comparaison des adresses où se trouve l'objet référencé)
C1.equals(C2) // => True (comparaison des contenus)

C1 = C2 

C1 == C2 // => True (comparaison des adresses où se trouve l'objet référencé)
```

### Fonctions et méthodes

D'après le prof de Java:
* **methode**: une "fonction" sans valeur de retour
* **fonction**: Domaine de départ et d'arrivée (input output)
* **procédure**: monde procédural (non objet), désigne une fonction

Donc rien à voir avec le fait d'être déclaré dans le corp d'une classe. (A VERIFIER)
En gros (en java du moins) on peut toujours appeler toutes les procédures (méthode)


### JAR
* Fichiers compilés
* Enemble de classes compilés (Java est né objet, on n'y fait que des classes)
* Analogue à un zip,

Des classes compilées zipées et renommées en JAR. A la place d'avoir des tas de fichiers à déplacé. Équivalent d'un dll ou d'un SO.

::: warning Attention
Equivalent de **DLL** en linux **SO**
:::

### Tableaux multiD
* Java est un language **row major**
* N'est pas forcément consistant au niveau de la longueur des sous tableaux
  * permet de stoquer des matrices symétriques, creuses ou pleine
