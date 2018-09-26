---
title: CheatSheet cours de Java
date: 2018-09-25
sidebar: auto
author: Sol
---

## Workspace DreamTeam
**basel2018**
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

### En vrac
#### Syntaxe tableaux
```cpp
// cpp
double* tab = new double[2];
```

```java
double[] tab = new double[2];
tab[1] = 2;
```

#### Use class
Si une classe est préfixée par `Use` comme dans `UseNomDeClass` c'est une classe qui possède un `main` et qui sert à utiliser `NomDeClass`.

#### Ramification 
```sh
└── Wxxxx (workspace)
      └── Pxxxx (projet)
            └──  nomDePackage
```

#### Garbage collector
* Clean les objets sans références
* Défragmente (les adresses des objets encore référencés changent)
  

#### Get Set
* Get
  * on retourne un attribut, jamais de calcule!

#### Wrappers de types simples
> Lié à la notion de boxing
Il n'est pas possible d'utiliser les types simples dans les conteneurs. Java implémente des variantes de tous les types simples:
* **int -> Integer**
* string -> String
* double -> Double

#### Programmation par contract
Lié aux <Def def="Classe purement abstraite">interfaces</Def>. Les methodes de l'interface ne sont pas implémentées. Le contract veut dire qu'on s'engage à les implémenter pour satisfaire le standard.

#### List & LinkedList
* LinkedList: performant quand on a beaucoup d'insertions suppressions
* ArrayList: performant si on doit souvent itérer dessus


#### HashSet & TreeSet
Les sets contiennent une collection d'objets uniques.
* HashSet: unordered, le plus performant des deux
* TreeSet: ordered 