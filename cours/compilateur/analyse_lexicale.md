---
title: Analyse lexicale
date: 2019-10-08
author: Sol
sidebar: auto
project: false
hide: false
---


<Media
    src="https://i.imgur.com/SNY1Gn5.png"
    center="true"
/>




En entrée d'un compilateur se trouve un fichier source. C’est à dire essentiellement une suite de caractères. La première chose à faire est de regrouper ces caractères pour former des *mots*:

<Col proportions="4/8" vAlign="15"  style="margin-left:40px">
<template slot="left">

<br>

* nombres
* identificateurs
* mots réservés
* ...

</template>
<template slot="right">

![Image](https://i.imgur.com/2Pimr5S.png)

</template>
</Col>

<br>

Dans le vocabulaire des compilateurs, ces *mots* s'appellent des <Def def="Tokens">**lexèmes**</Def>. L'étape d'identification des lexèmes s'appelle <Def def="Lexical analysis ou scanning">**analyse lexicale**</Def>.


## Lexèmes

Qu'est-ce qu'un lexème ? La réponse précise dépend beaucoup du contexte.

<Container type="info" header="Ligne de conduite">

* Si un *truc* peut être séparé de ses voisins par des espaces sans changer la signification, c'est un lexème;
* Sinon pas.

</Container>

L'info précédente ne signifie pas qu'un lexème ne doit pas contenir d'espaces.
* `print("Hello, World!");` <Fa fa="arrow-right"/> contient **5** lexèmes:
  * `print` `(` `"Hello, World!"` `)` `;`

<Container type="warning">

Les commentaires et les espaces ne sont pas des lexèmes. Ils sont simplement mis de côté par le **pré-compilateur**.

</Container>

## Importance

Malgré une apparente simplicité, la **lecture du code source et l'analyse lexicale prennent jusque 30% du temps de la <Def def="Frontend">partie avant</Def>**.

Ces deux étapes sont les seules à voir tout le texte du programme.
* Une ligne moyenne fait entre 30 et 50 caractères.
* Une ligne contient en moyenne 5 lexèmes.

Il est donc important de faire attention à l'efficacité de leur implémentation.

<Container type="info">

Pour un compilateur portable, c'est à ce niveau qu'on se "débarasse" des particularités des plateformes (fins de lignes, ...).

</Container>

## Complexité logique

Dans certains cas, l'analyse lexicale est facile:
* `102*4-12*3`

Mais peut être bien plus compliquée:
* `a+1e+3+3*pi-2*e-5`
* `print("Il a dit: \"bonjour!\"")`
* `12.3+math.cos(180)`

## But de l'analyse lexicale

1. Séparer les lexèmes
2. Identifier leur type

<br>

**Exemple**:

* `12+3` <Fa fa="arrow-right"/> `NUMBER(12)` `OPERATOR(+)` `NUMBER(3)`

Il est important que l'implémentation de ce procédé soit **générique** et **efficace**

## Methodes

### Automates d'état finis

![Image](https://i.imgur.com/UwhU9jl.png)

<br>

<Spoiler tag="Pseudocode">

```java
String text = "JU 4663"; i=0;
char ch=text[i++];
enum {PLAQUE,JU,NE,Canton,...} etat;
etat=PLAQUE;

while(etat!=ERREUR && ch!=‘\n’)
    switch( etat )
        case PLAQUE:
            if (ch==‘J’)
                etat=JU;
            else if (ch=‘N’)
                etat=NE;
            else
                etat=ERREUR;
            break;
        case JU:
        ...

    ch = text[i++];
```

</Spoiler>

<br>
<br>


**Exemple d'automate qui permet de traiter les nombres réels:**
* `3.0` `4.`, `-4.5` `3344.5005` `+26.9` <Fa fa="arrow-right"/> <st c="g">Valide</st>
* `5,3` `3. 5` `0004` <Fa fa="arrow-right"/> <st c="r">invalide</st>


<Media
    src="https://i.imgur.com/wBVL9hQ.png"
    center="true"
    width=650
/>

### Génération automatique d'un programme

Il existe des générateurs automatiques d'analyseur lexical. Il prennent en:
* **Entrée**: La description des lexèmes ainsi que quelques informations annexes
* **Sortie**: Le code d'un analyseur lexical

Le plus connu est [Lex](https://en.wikipedia.org/wiki/Lex_(software)) et ses variantes (Flex, JLex, ...) et le langage de description le plus courant sont les **expressions régulières** (regex).

Les avantages de la génération automatique sont:
* La souplesse en cas de changement de description des lexèmes
* Moins d'erreurs
* Plus lisible
* Algorithmes assez fortement optimisés
* Documentation automatique du langage si la description des lexèmes est "assez standard".

## Tables des symboles

* Rasemenble toutes les informations nécessaires sur les identificateurs
* Les informations récoltées dépendent du compilateur
* Conceptuellement, correspond à un tableau indexé par des chaines de caractères
* Dans les langages n'implémentant pas ce concept, il faut se débrouiller...