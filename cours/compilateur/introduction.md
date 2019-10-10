---
title: Introduction
date: 2019-10-01
author: Sol
sidebar: auto
project: false
hide: false
---

## Définition

Un compilateur est un **programme** qui prend en **entrée** le texte d'un programme dans un certain langage et donne en **sortie** le texte dans un autre langage <Def def="sa sémantique oppérationnelle">tout en préservant la signification</Def>.

<Fa fa="arrow-right"/> C'est donc essentiellement un processus de traduction:

<Media
    src="https://i.imgur.com/eHLHzKP.png"
    center="true"
    width=350
/>

## Principe

Un compilateur fonctionne par une méthode d'**analyse-synthèse**:

<Container type="info">

* **Analyse**: Vise à comprendre un objet en le **décomposant en ses constituants**. Elle établit donc tout d'abord des critères permettant d'identifier les composants.
* **Synthèse**: Opération par laquelle on **rassemble**, en un tout homogène divers éléments d'un domaine de connaissance.

</Container>

<Col proportions="5/7" vAlign="50">
<template slot="left">

<Media
    src="https://i.imgur.com/khSwoP5.png"
    width=250
/>

</template>
<template slot="right">

L'<Def def="Partie avant, frontend">analyse</Def>:
* Découpe le programme source en mots (**Lexèmes**)
* Fait une analyse **syntaxique** et **sémantique**
* Construit une représentation intermédiaire

La <Def def="partie arrière, backend">synthèse</Def>:
* Optimise et **génère** le langage de cible à partir de la représentation intermédiaire

</template>
</Col>

<br>

La <Def def="RI">représentation intermédiaire</Def> doit:
* être indépendante du langage source
* permettre de facilement générer du code cible
* permettre de refléter l'analyse de plusieurs langages sources
* conserver la sémantique oppérationnelle du programme.

<Container type="warning">

La représentation intermédiaire est généralement représentée par un Arbre Syntaxique Abstrait (<Def def="Abstract Syntaxic Tree">AST</Def>)

</Container>

## Structure

<br>

<Media
    src="https://i.imgur.com/LbBFgTe.png"
    center="true"
    width=650
/>

<br>
<br>


<Media
    src="https://i.imgur.com/IKG5jrd.png"
    center="true"
/>

## À retenir

Les spécifications par ordre d'importance d'un compilateur sont:

* **Capital**
  * Conserver la sémantique
  * Ne pas introduire d'erreurs
* **Important**
  * Traiter des programmes de grande taille
  * Traiter des programmes en un <Def def="Complexité au plus en O(N). Avec N étant le nombre de lignes">temps acceptable</Def>
  * Générer du code optimisé en taille et en performances
* **Dépend du contexte**
  * Fournit un bon diagnostique d'erreur


