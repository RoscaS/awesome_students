---
title: Composite
type: Structure
date: 2019-03-12
author: Sol
sidebar: auto
project: false
hide: false
---

## Structure

<Media
    src="https://i.imgur.com/GY5Ct3w.png"
    url="https://refactoring.guru/design-patterns/composite"
    caption="https://refactoring.guru"
    center="true"
    width=450
/>

1. L'interface **Component** (Component interface) décrit les oppérations communes aux éléments simples et complexes de l'arbre.
2. Une **Feuille** (le component) est un élément simple d'un arbre qui n'a pas de sous-éléments. En principe, c'est les feuilles qui font le gros du travail comme ils n'ont personne à qui le déléguer.
3. Un **Conteneur** (élément composite) est un élément qui a des sous-éléments feuilles ou d'autres conteneurs. Un conteneur ne connait pas les classes concrètes de ses enfants et oppère sur ces dernières grace à l'interface Component commune. Lorsqu'il reçoit une requête, un conteneur délègue le travail à ses sous-éléments, traite les résultats intermédiaires et retourne le résultat final au client.
4. Un **Client** travail avec tous les éléments à travers l'interface **Component**. Ainsi, le client travail de la même façon avec les objets simples et complexes de l'arbre.



<Media
    src="https://i.imgur.com/ffuMhhU.png"
    url="https://i.imgur.com/ffuMhhU.png"
    caption="https://refactoring.guru"
    center="true"
    width=450
/>





## Application

 S'utilise lorsqu'il est nécessaire d'implémenter une structure d'objets hierarchique **sous forme d'arbre**.
* Le paterne Composite fournit deux types élémentaires qui partagent une interface commune: Des **feuilles simples** et des **conteneurs complexes**. Le conteneur peut être composé aussi bien de feuilles que d'autres conteneurs ce qui permet la construction d'une structure imbriquée recursive qui ressemble à un arbre.

<br>

S'utilise lorsqu'il est souhaité que le code client traite** de la même façon** les éléments simples et complexes.
* Tous les éléments du champ d'application de la paterne Composite **partagent une interface commune**. En utilisant cette interface, le client ne se soucie pas du type concret des objets avec lesquel il travail.

## Imlpémentation

1. S'assurer que le noyau de l'application peut être représenté sous forme d'un arbre. Pour ce faire, tenter de diviser l'application en éléments simples et conteneurs. Garder en tête qu'un conteneur doit être capable de contenir aussi bien des éléments simples que d'autres conteneurs.
2. Déclarer une interface avec des methodes qui ont du sens pour les composents simples et complexes.
3. Créer une classe feuille qui représente un élément simple. Un même programme peut avoir plusieurs classes feuilles différentes.
4. Créer une classe conteneur qui représente les éléments complexes. Dans cette classe, un attribut de type conteneur contient les références vers les sous-éléments. Cet attribut est du type de l'interface.

<Container type="warning">

Lors de l'implémentation des methodes de l'interface pour la classe conteneur, il est nécessaire de faire en sorte de déléguer la plus grande partie du travail aux sous-éléments.

</Container>

5. Définir les methodes permettant d'ajouter et de retirer des éléments aux conteneurs. 

<Container type="info">

Les oppérations permettant d'ajouter et de retirer des éléments peuvent être déclarées dans l'interface. Même si c'est contraire au _principe de ségrégation des interfaces_ car des methodes se retrouveraient avec des implémentations vides dans les feuilles, cette façon de faire permet au client de traiter tous les éléments 100% de la même façon, même lorsqu'il compose des arbres.

</Container>

### Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

* <st c="g">Permet de travailler avec des structures complexes en forme d'arbre en tirant profit du polymorphisme et de la récursion</st>
* <st c="g">Principe _ouvert/fermé_ exploité. Il est possible d'introduire de nouveaux éléments de nouveaux types dans une application sans casser le code existant.</st>

</template>
<template slot="right">

* <st c="r">Il peut être difficile de fournir une interface commune à des classes aux fonctionnalités fort différentes. Dans certains scénario, il serait nécesaire de sur-généraliser l'interface ce qui la rendrait difficile à comprendre.</st>

</template>
</Col>