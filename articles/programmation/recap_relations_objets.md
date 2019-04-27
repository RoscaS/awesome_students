---
title: Relations entre objets
date: 2019-04-27
author: Sol
sidebar: auto
project: false
hide: false
---

<br>
<br>

<Container type="info" header="Association vs Aggrégation vs Composition">

**Aggrégation** et **composition** sont des cas spécifiques d'**association**. Dans les deux, un objet d'une classe "possède" un objet d'une autre classe à la différence que:

* **Aggrégation**: Implique une relation dans laquelle l'objet possédé peut exister indépendament de la classe qui le contient.
* **Composition**: Implique une relaqtion dans laquelle l'objet possédé ne peut pas exister indépendament de la classe qui le contient.

</Container>

<br>
<br>

## Composition

<Media
    src="https://i.imgur.com/eCmncAd.png"
    center="false"
/>

<h4 style="padding-left: 100px; margin-top: -80px;"> 

$x$ <st c="r">a un </st> $y$

</h4>

* Unidirectionelle, une *partie* est contenue dans un *tout*
* Une *partie* <st c="r">ne peut pas</st> appartenir à plusieurs classes.
* Le *tout* est  <st c="r">responsable</st> de la construction et de la destruction des *parties*.
* Les *parties* du *tout* sont des variables membres.
* La *partie* n'est **pas consciente** de l'existance du *tout* (fait son job sans savoir qu'elle fait partie d'un *tout*).

<br>

<Spoiler tag="Exemple">

<br>

![Image](https://i.imgur.com/fcK3ox6.png)

<br>

</Spoiler>


## Aggrégation

<Media
    src="https://i.imgur.com/Og5Qvqt.png"
    center="false"
/>

<h4 style="padding-left: 100px; margin-top: -80px;"> 

$x$ <st c="r">a un </st> $y$

</h4>

* Unidirectionelle, une *partie* est contenue dans un *tout*
* Une *partie* <st c="r">peut</st> appartenir à plusieurs classes.
* Le *tout* n'est <st c="r">pas responsable</st> de la construction et de la destruction des *parties*.
* Les *parties* du *tout* sont des variables membres.
* La *partie* n'est **pas consciente** de l'existance du *tout* (fait son job sans savoir qu'elle fait partie d'un *tout*).

<br>

<Spoiler tag="Exemple">

<br>

![Image](https://i.imgur.com/rIXliCO.png)

<br>

</Spoiler>


## Association

<Media
    src="https://i.imgur.com/wCtz3FT.png"
    center="false"
/>

<h4 style="padding-left: 100px; margin-top: -80px;"> 

 $x$ <st c="r">utilise un </st> $y$
 
</h4>

* Unidirectionelle **ou** bidirectionelle.
* L'objet $y$ est membre de l'objet $x$ mais **n'est pas une partie** de $x$.
* L'objet $y$ **n'a pas** son existance gérée par la classe $X$ (construction destruction).
* L'objet $y$ peut être au courant de l'existance de l'objet $x$ mais pas forcément. 

<br>


## Dépendance


<Media
    src="https://i.imgur.com/9G3ZHCn.png"
    center="false"
/>


Un objet $a$ est dépendant d'une classe $B$ quand l'objet $a$ utilise une fonctionnalité de la classe $B$ pour accomplir une certaine tache. **Cette relation est plus faiable que les précédentes**.


## Généralisation vs héritage

**Généralisation** est le terme utilisé pour dénoter l'abstraction de propriétés communes dans une nouvelle classe <st c="r">en langage UML</st>. Lorsqu'une généralisation est implémentée dans un langage de programmation, on parle d'**héritage**.

<br>

<Media
    src="https://i.imgur.com/Y3f2RHf.png"
/>



