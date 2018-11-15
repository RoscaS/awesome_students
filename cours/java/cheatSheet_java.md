---
title: CheatSheet Java
date: 2018-09-25
sidebar: auto
author: Sol
---

<Card header="Tests" max-width="270">

* CP1: 5 decembre 2018 (320)
  * <st c="r">cstr de copie + clone</st>

</Card>

## Object Object
Toutes les classes héritent de object (`extend class object` implicite)


Concepte étrange de l'implémentation des methodes de `Object`.
Necessaire de les redéfinir. Entre autres:
* `toString`
* `clone`
* `equals`
* `hashcode` (hashcode de `object` fonctionne bien de base. <st c="r"> SAUF si `equals` est redéfinit.</st>)


Pour clone, une combine consiste à implémenter une méthode avec un nom proche de `clone` comme `cloneOf` comme ça si elle est déjà redéfinie, on override pas. Permet de ne pas faire un **try catch** pour vérifier si la methode `clone` retourne un objet de type `object` (<Fa fa="arrow-right"/> elle n'est pas réimplémentée dans la classe qu'on utilise)


## Hashcode
* "Identifiant numérique d'un objet" sous la forme d'un `int`.
* Si deux objets sont égaux, ils ont le même hashcode.

## Copie
Classe inalterable <Fa fa="arrow-right"/>  copie supperficielle <br>

<Container type="danger">

Pour un membre inalterable, si qqun construit un setter pour le membre, il devient alterable et donc la shallow copy est dangereuse.

<st c="r">Trouver théorie pour les constructeurs de copie en Java</st>

</Container>


## Type de classes
* Pojo
* Runnable
* pleine
* classic (mélange des autres)


## Idee
**Comme pour les classes containeurs (Pojo != classe container) une fois que les attributs sont définits, le reste est générable automatiquement. Pourquoi ne pas pas créér un petit soft pour générér ça. Ou éventuellement un template.**



## Attention

```java
return "ax^2 + bx + c = 0 /n a =" + a + "\nb = " + b + "\nc = \n";
```
Ici on a 13 instantiations.
* Chaque string est une instance
* chaque conversion de int à string
* à chaque `+` un nouvel object est instancié qui est le resultat de la concatenation



## autoToString

```java
@Override
public String toString()
    {
    final StringBuilder sb = new StringBuilder("Linear{");
    sb.append("a=").append(a);
    sb.append(", b=").append(b);
    sb.append(", x=").append(x);
    sb.append('}');
    return sb.toString();
    }
```
Généré automatiquement par Eclipse ou Inteliji (insert)

## Tests unitaires
Analogie du casque:
* Tant qu'on met pas de casque on se demande à quoi ça sert
* Une fois qu'on en met un 


## Todo:

```

-----------------------------------
Commandes
-----------------------------------

sysout
syserr
sysexit

-----------------------------------
Instructions
-----------------------------------

fori0
fori1

forj0
forj1

forij0
forij1

whilec

ife

-----------------------------------
Methodes
-----------------------------------

cmain
cseria
cclasse

cloneOf
isEquals

paintj2d

-----------------------------------
Canvas Atome
-----------------------------------

cc		Constructeur
cmpu	methode publique
cmpr	methode private
ca		attribut

cma		methode abstraite

cg		get
cs		set
ci		is

csa		static

cxx			custom
cxx_small	custom small

-----------------------------------
Canvas Full
-----------------------------------

cjunit

cjframe
cjpanel
cboxv
cboxh
cj2d

csingleton
csingleton_init

-----------------------------------
Memo
-----------------------------------

cjvm

-----------------------------------
end
-----------------------------------
```

#### En vrac

##### Assurer qu'on sait import un jar

##### Bin
* Après les tests, effacer le folder `bin`
* Les build ne fonctionnent plus
* `ctrl` `shift` `p`: clean
* build

##### Asserts
* Si on fait un assert automatiquement on ajoute un doc à la classe
* Thumb rule: À chaque fois qu'on assume qqch, on ajoute un assert

##### Erreurs (Epsilon)

En informatique, mis à part quand on teste des entiers, tester les égalités sont tricky.
Il faut trouver des façons adaptées pour tester les égalités.
par exemple:

> Une machine calcule faux dans une certaine mesure c'est au dev de compenser

* `a = b`
* $\frac{a-b}{a} \leq E$
* avec $E$ = 1e-6: en informatique


##### Import statique
```java
import static org.junit.Assert.assertTrue;
// permet de call assertTrue sans sa classe:
assertTrue(test);
```


### import jar

![Image](https://i.imgur.com/NOpeOSH.png)

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

<Card header="Shortcuts" max-width="270">

* `cmain`: Create main methodes
* `cmpu`: Public method component
* `cmpr`: Private methods comment
* `ci`: IS-methods comment
* `csa`: Static methods comment
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

## En vrac

### Lexique
|          |                           |
| -------- | ------------------------- |
| **JRE**  | Java Runtime Environement |
| **JDK**  | Java Development Kit      |
| **JVM**  | Java Virtual Machine      |
| **.jar** | Java Archive              |

* **Jar**: Java ARchive
Container qui contient des fichiers compilés. Un jar est facile à décompiler pour retrouver les sources. On peut réutiliser tous les jar qu'on trouve.

### Types primitfs

|         |               |         |
| ------- | ------------- | ------- |
| byte    | number        | 1 byte  |
| short   | number        | 2 bytes |
| int     | number        | 4 bytes |
| long    | number        | 8 bytes |
| float   | float number  | 4 bytes |
| double  | float number  | 8 bytes |
| char    | a character   | 2 bytes |
| boolean | true or false | 1 byte  |


### Tableaux

#### Déclaration
```java
type[] tabName = new type[size];
int[] intTab = new int[5];
```
#### Opérations

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

* `static void fill(type[] tab, type v)`: Templi tab avec la valeur v

```java
float[]tab = new float[3];
Arrays.fill(tab, (float)3.14); // tab = {3.14, 3.14, 3.14}
```

### Base template

```java
package ch.hearc.coursjava.kitbase.hello;
public class Hello
  {
  public static void main(String[] args)
    {
    main();
    }

  public static void main()
    {
    System.out.println("Hello");
    }
  }
```

### Flux de sorties

* `System.out.println()`: print avec retour à la ligne
* `System.out.print()`: Ecriture sans retour à la ligne
* `System.err.println(): Ecriture sur le flux d'erreur

### Collections

<br>

<img src="https://i.imgur.com/vNObpHV.png" style="border: 1px solid black">

<br>

| Collection      | Spécialité                                                      |
| --------------- | --------------------------------------------------------------- |
| **LinkedList**  | performant pour les manipulations (insertion, suppression, ...) |
| **ArrayList**   | performant pour les parcours (accès aléatoire)                  |
| **Set**         | garantit l’unicité des éléments                                |
| **Map**         | comme un dictionnaire (tableau à deux colonne, clé-valeur)      |
| **HashMap/Set** | pas de relation d’ordre entre les éléments (pas ordonnée)      |
| **TreeMap/Set** | relation d’ordre entre les éléments (ordonnée)                 |

<br>

<Container type="info">

**Choix entre Hash et Tree**
* **HashMap ou HashSet**: pas de relation d'ordre, performant
  * <Fa fa="arrow-right"/> À privilégier
* **TreeMap ou TreeSet**: relation d'ordre, peu performant   
  * <Fa fa="arrow-right"/> À éviter si l'ordre n'est pas important

</Container>


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

<Container type="danger">

Equivalent de **DLL** en linux **SO**

</Container>

### Tableaux multiD
* Java est un language **row major**
* N'est pas forcément consistant au niveau de la longueur des sous tableaux
  * permet de stoquer des matrices symétriques, creuses ou pleine
