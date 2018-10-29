---
title: Normalisation et dépendance fonctionnelle
date: 2018-10-29
author:  Sol
sidebar: auto
---

##  Dépendance Fonctionnelle

* L'adresse du fournisseur ne dépend que du fournisseur
    * fournisseur <Fa fa="arrow-right"/> adresse du fournisseur
* Le nom du produit ne dépend que du code du produit
    * code <Fa fa="arrow-right"/> produit
* Le téléphone de la personne ne dépend que de la personne
    * personne <Fa fa="arrow-right"/>téléphone




<Col proportions="5/7" vAlign="40">
<template slot="left">

![Image](https://i.imgur.com/vNUO6oI.png)

</template>
<template slot="right">

#### Notation:
* A, B, C, ... attributs
* X, Y, Z, ... ensembles d'attributs

* A <Fa fa="arrow-right"/> B signifie:
    * A détermine B
    * B dépend de A
    * A est la source de la dépendance fonctionnelle
    * B est la cible de la dépendance fonctionnelle
* A <Fa fa="arrow-right"/> B Si et seulement si, dans une relation R(A, B, ...) à une valeur donnée de A correspond toujours la même valeur de B

</template>
</Col>

### Propriétés des Dépendances fonctionnelles (DF)

#### La source peut être un ensemble d'attributs
* (A, B) <Fa fa="arrow-right"/> C
* Mais A ou B seuls ne déterminent pas forcément C

#### La cible peut être un ensemble d'attributs
* D <Fa fa="arrow-right"/>(E, F) alors D <Fa fa="arrow-right"/> E et D <Fa fa="arrow-right"/> C

#### Transitivité 
* Si A <Fa fa="arrow-right"/> B et B <Fa fa="arrow-right"/> C alors A <Fa fa="arrow-right"/> C
* On appelle A <Fa fa="arrow-right"/> C une DF déduite

#### Augmentation
* SI A <Fa fa="arrow-right"/>B alors (A, C) <Fa fa="arrow-right"/>B, quel que soit le C
* On appelle (A, C) <Fa fa="arrow-right"/>B une DF non-élémentaire

### Les DFs qui nous intéressent
On ne s'intéresse qu'aux DF
    * Élémentaire: A <Fa fa="arrow-right"/> B, non pas (A, C) <Fa fa="arrow-right"/>B
    * Non déduites A <Fa fa="arrow-right"/> B et B <Fa fa="arrow-right"/>C, non pas A <Fa fa="arrow-right"/> V

Elles éxpriment les faits élémentaires du monde réel.
Ce sont elles qui permettent de déterminer
* Si une relation est bonn et, sinon...
* Comment la décomposer

### Graphe des DFs
Pour chaque relation
* Recenser toutes les DF **élémentaires** et **non déduites**
* Les représenter sous forme d'un **graph orienté**
* On s'inteéresse au **graphe minimum** des DFs
    * Une relation peut avoir plusieurs graphes minimum, ils sont alors équivalents
  
##### Exemple de graph minimum
<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

<Media
    src="https://i.imgur.com/2fHyzZL.png"
/>

</template>
<template slot="right">

R(A, B, C, D, E)
* E <Fa fa="arrow-right"/> (A, B, C)
* C <Fa fa="arrow-right"/> D

</template>
</Col>

#### Utilité du graphe des DFs

* Vérifier que le graphe est bien minimum
* Trouver les identifiants de la relation
* Tester si la relation est bonne (bien normalisée)
* Sinon, trouver les décompositions

##### Exemple de graph non minimum

<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

![Image](https://i.imgur.com/pvbtlWa.png)

</template>
<template slot="right">

* E <Fa fa="arrow-right"/>D est déduite de E <Fa fa="arrow-right"/>C et C <Fa fa="arrow-right"/> D
* Il faut supprimer E <Fa fa="arrow-right"/> D du graph

</template>
</Col>

#### Trouver le graph minimum

<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

![Image](https://i.imgur.com/kjVX6RW.png)

</template>
<template slot="right">

* DF déduites
    * Une DF A <Fa fa="arrow-right"/>B est déduite si il existe un autre chemin plus long entre A et B (ex: A <Fa fa="arrow-right"/>C, C <Fa fa="arrow-right"/>D, D <Fa fa="arrow-right"/> F, F <Fa fa="arrow-right"/> B

</template>
</Col>

<br>
<br>

<Col proportions="6/6" vAlign="20">
<template slot="left">

![Image](https://i.imgur.com/pd2llw2.png)

</template>
<template slot="right">

* X <Fa fa="arrow-right"/>D est non-élémentaire si il existe une DF Y <Fa fa="arrow-right"/>D telle que X contient Y

</template>
</Col>


## Normalisation

### Procédure

* Vérifier que la relation soit, au départ en 1ere forme normale
* Déterminer à l'aide du graphe tous ses identifiants
* Déterminer la forme normale
* Si la relation n'est pas normalisée, la décomposer à l'aide du graphe en relations mieux normalisées
* Aller au moins à la 3e forme normale


### Première forme normale (1FN)

Une relationes t en 1FN si **chaque valeur** de **chaque attribut** de **chaque n-uplet** est une valeur simple (autrement dit, tous les attributs sont simples et mono-valeur).

#### Exemple
Livraison (numFournisseur, adrFournisseur, numProduit, prixProduit, qté) est en 1FN.

<Container type="info">

En pratique, dans le modèle relationnel, toutes les relations sont 1FN

</Container>

### Seconde forme normale (2FN)

Permet d'éliminer les attributs qui ne décrivent pas l'objet représenté par la relation.
Une relation est en 2FN si:
* Chaque attribut qui ne fait pas partie de l'identifiant dépend de **tous les attributs** de l'identifiant (et non pas d'un composant de l'identifiant)

#### Exemple
Livraison (numFournisseur, adrFournisseur, numProduit, prixProduit, qté)

![image](https://i.imgur.com/MyW9Ml7.png)

Livraison mélange la description de:
* la livraison (numFournisseur, numProduit, qté)
* fourniseeur (numFournisseur, adrFournisseur)
* produit (numProduit, prixProduit)

Livraison n'est donc pas en 2FN car des DFs parent de composants de l'identifiant

#### Décomposition en 2FN

* Créer une nouvelle relation avec chaque identifiant partiel et les attributs qui en dépendent
* Garder la relation originale avec l'identifiant complet et les attributs qui en dépendent

![Image](https://i.imgur.com/3k8CPiN.png)

### Troisième forme normale (3FN)

Permet d'éliminer les sous-relations incluses dans une relation.

<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

![Image](https://i.imgur.com/WxTj8ly.png)

</template>
<template slot="right">

Une relation est en 3FN si:
* Elle est en 2FN et
* Chaque attribut qui ne fait partie d'aucun identifiant dépend directement de tous les attributs de l'identifiant

</template>
</Col>

<Container type="info">

Autrement dit, si la profondeur de l'arbre des DFs est > 1, la relation n'est pas en 3FN

</Container>

#### Exemple

<Col proportions="6/6" vAlign="0">
<template slot="left">

![Image](https://i.imgur.com/Ds1kOGD.png)

</template>
<template slot="right">

Fournisseur (numFournisseur, ville, pays)
* Fournisseur doit être décomposé en:
    * Fournisseur (numFournisseur, ville)
    * Ville (**ville**, pays)

</template>
</Col>

> La pk est en bold et non pas sous-ligné comme dans le cours

#### Décomposition en 3FN
* Créer une novuelle relation pour chaque attribut qui n'est pas un identifiant mais qui détermine d'autres attributs non-identifiants.
* Garder dans la relation originale l'identifiant des nouvelles relations

![Image](https://i.imgur.com/yixV8AP.png)

#### Importance de la 3FN
* Toute relation peut toujours être décomposée en relation 3FN
    * Sans perte de DF
    * Sans perte d'information

<Container type="warning">

Ce n'est pas vrai pour les formes supérieures

</Container>

**Il faut donc toujours faire des schémas au moins en 3FN**