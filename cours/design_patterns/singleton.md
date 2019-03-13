---
title: Singleton
type: Création
date: 2019-03-12
author: Sol
sidebar: auto
project: false
hide: false
---

## Structure


<Media
    src="https://i.imgur.com/sPHQo1x.png"
    url="https://i.imgur.com/sPHQo1x.png"
    caption="https://refactoring.guru"
    center="true"
    width=450
/>


1. Une classe **Singleton** déclare une méthode s`tatique `getInstance` qui retourne la même instance de sa propre classe.

Le constructeur d'un Singleton ne devrait pas être accessible au client et l'appel de la methode `getInstance` la seul façon de récupérer l'instance.

## Applications

S'utilise lorsqu'une classe ne doit avoir qu'une seul instance disponible pour tous les clients. Par exemple, un seul objet `Database` partagé entre différents composants d'un même programme.

* Cette paterne emmpèche le constructeur d'une classe de construire un objet. Ainsi, il est nécessaire de créer une methode pour l'instanciation initiale. L'appel de cette methode doit soit instancier un objet, soit retourner l'objet si il existe déja.

S'utilise lorsqu'il est nécessaire d'avoir un controle stricte sur les variables globales.

* Contrairement au variables globales, la paterne Singleton assure qu'il n'existe qu'une instance d'une classe Singleton. Rien, à l'exception de la classe Singleton ne peut remplacer l'objet qu'elle garde.

<Container type="info">

Il est possible de doser la précédente limitation et de donner la possibilité de créer un nombre définit d'objets d'une classe. Dans ce cas, le seul code qui change est le contenu de la méthode `getInstance`.

</Container>

## Implémentation

1. Ajouter un attribut **privé** et **statique** à la classe qui contiendra l'instance du Singleton.
2. Déclarer une méthode de création **publique** et **statique** pour retourner l'instance.
3. Implémenter une _lazy initialization_ dans la methode statique qui doit créer un nouvel objet lors de son premier appel et le ranger dans l'attribut statique. Cette methode devra toujours retourner cette instance lors de son appel.
4. Rendre le constructeur de la classe **privé**. La methode statique sera toujours capable de l'appeler contrairement au client(s).
5. Remplacer le code externe à la classe qui contient des appels au constructeur par des appels à la méthode de création statique.

## Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

* <st c="g">Certitude qu'une classe n'a qu'une instance</st>
* <st c="g">Fournit un accès global à cette instance</st>
* <st c="g">Une seul instanciation et destruction</st>

</template>
<template slot="right">

* <st c="r">Viole le principe de _résponsabilité unique_ (cette paterne résoud deux problèmes à la fois)</st>
* <st c="r">Nécessite d'être adapté à une utilisation multi thread</st>

</template>
</Col>