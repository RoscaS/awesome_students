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
* Si une relation est bonne et, sinon...
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

Les formes normales sont en quelque sorte des niveaux de qualité d'un **modèle relaitonnel** qui définissent les règles que celui-ci doit respecter. Elles permettent de vérifier la robustesse de la conception du modèle en évitant la redondance des données et les problèmes de mise à jour et de cohérence qui en découlent.

<Container type="info">

Même si les formes normales s'appliquent à un modèle relationnel, rien ne vous empêche de les anticiper lors de l'élaboration du diagramme de classes décrivant le modèle du domaine fonctionnel, au contraire !

</Container>

### Procédure

* Vérifier que la relation soit, au départ en 1ere forme normale
* Déterminer à l'aide du graphe tous ses identifiants
* Déterminer la forme normale
* Si la relation n'est pas normalisée, la décomposer à l'aide du graphe en relations mieux normalisées
* Aller au moins à la 3e forme normale


### Première forme normale (1FN)
Pour être en première forme normale, il faut que chaque attribut soit **atomique**. Autrement dit, aucun attribut ne doit être <Def def="Liste de valeurs">multivalué</Def> ou <Def def="Si on le décompose, on obtient des informations supplémentaires">composé</Def>.

Une relationes t en 1FN si **chaque valeur** de **chaque attribut** de **chaque n-uplet** est une valeur simple (autrement dit, tous les attributs sont simples et mono-valeur).

#### Exemple


Voici un exemple de table `personne` ne respecant pas la 1FN:
| id  | pseudo     | nom                 | email                                          |
|-----|------------|---------------------|------------------------------------------------|
| 1   | DarkPoulet | M. Jean Dupont      | jean.dupont@gmail.com, jean.dupont@hotmail.com |
| 2   | Maximus    | M. Maxime Laredoute | maxime.la88@msn.com, max1988@gmail.com         |

Dans cette table:
* Si une personne a plusieurs adresses email, alors elles sont notées dans l'attribut `email`, séparées par des virgules
* L'attribut `nom` contient le nom mais aussi le prénom et la civilité de la personne

Une modification de cette table pour la passer en 1FN:
| id  | pseudo     | civilite | prenom | nom       | email                 | email_2                 |
|-----|------------|----------|--------|-----------|-----------------------|-------------------------|
| 1   | DarkPoulet | M.       | Jean   | Dupont    | jean.dupont@gmail.com | jean.dupont@hotmail.com |
| 2   | Maximus    | M.       | Maxime | Laredoute | maxime.la88@msn.com   | max1988@gmail.com       |


Multiplier les attributs `email` (1, 2, ...) n'est pas une bonne idée. Une solution est donc de transformer les attributs **multivalués** en une table séparée, liée à la table d'origine par une relation de type **(1, n)**.


<Container type="info">

En pratique, dans le modèle relationnel, toutes les relations sont 1FN

</Container>

### Seconde forme normale (2FN)

Cette forme ne concerne que les tables avec une **clé primaire composite** et permet d'éliminer les attributs qui ne décrivent pas l'objet représenté par la relation. Une relation est en 2FN si:
* Chaque attribut qui ne fait pas partie de l'identifiant dépend de **tous les attributs** de l'identifiant (et non pas d'un composant de l'identifiant)

#### Exemple

| skater[PK] | figure[PK] | difficulté | note |
|------------|------------|------------|------|
| Louan      | BS 360     | 8          | 8    |
| Louan      | 3-6 flip   | 7          | 10   |
| Louan      | hard-flip  | 9          | 9    |
| Nyjah      | flip       | 5          | 7    |
| Nyjah      | FS 180     | 3          | 8    |

La difficulté d'une figure ne dépend que de la figure et non du skater. L'attribut `difficulté` ne dépend que d'une partie de la clé primaire (`figure`) et non de la clé primaire complète (`skater, figure`). Cette table ne respecte donc pas la 2FN.

La solution consiste donc à isoler les attributs concernés dans des tables dédiées. Il font donc créér une nouvelle table `figure` et y déplacer la colonne `difficulté`:

<br>

<Col proportions="5/7" vAlign="0">
<template slot="left">

**Table Figure**:

| figure[PK]   | difficulté |
|-----------|------------|
| BS 360    | 8          |
| 3-6 flip  | 7          |
| hard-flip | 9          |
| flip      | 5          |
| FS 180    | 3          |


</template>
<template slot="right">

**Table Resultat**:

| skater[PK] | figure[PK, FK] | note |
|------------|----------------|------|
| Louan      | BS 360         | 8    |
| Louan      | 3-6 flip       | 10   |
| Louan      | hard-flip      | 9    |
| Nyjah      | flip           | 7    |
| Nyjah      | FS 180         | 8    |

</template>
</Col>

Dans la table `Resultat`, la colonne `figure` devient la clé étrangère.

<Container type="warning">

Ne pas respecter la 2FN entraine des redondances. Cela gaspille de l'espace de stockage et pose aussi des problèmes de mise à jour des données.

</Container>



#### Exemple 2

<Spoiler>

Livraison (numFournisseur, adrFournisseur, numProduit, prixProduit, qté)

![image](https://i.imgur.com/MyW9Ml7.png)

`Livraison` mélange la description de:
* la livraison (numFournisseur, numProduit, qté)
* fourniseeur (numFournisseur, adrFournisseur)
* produit (numProduit, prixProduit)

`Livraison` n'est donc pas en 2FN car des DFs partent de composants de l'identifiant

#### Décomposition en 2FN

* Créer une nouvelle relation avec chaque identifiant partiel et les attributs qui en dépendent
* Garder la relation originale avec l'identifiant complet et les attributs qui en dépendent

![Image](https://i.imgur.com/3k8CPiN.png)

</Spoiler>


### Troisième forme normale (3FN)

La 3FN ressemble à la 2FN mais concerne la dépendance entre attributs non clés. Pour être en 3FN, il faut déjà être en 2FN et en plus respecter la rêgle suivante:
* Aucun attribut ne faisant pas partie de la clé primaire ne doit dépendre d'une partie des autres attributs ne faisant pas non plus partie de la clé primaire.

#### Exemple

| id  | [PK] civilite | nom        | prenom | sexe |
|-----|---------------|------------|--------|------|
| 1   | Madame        | Germain    | Sophie | F    |
| 2   | Monsieur      | Hilbert    | David  | M    |
| 3   | Madame        | Noether    | Emmy   | F    |
| 4   | Madame        | Mirzakhani | Maryam | F    |
| 5   | Monsieur      | Poincaré   | Henri  | M    |
| 6   | Monsieur      | Villani    | Cédric | M    |

Cette table `Personne` ne respecte pas la 3FN car l'attribut `sexe` peut être déduit de l'attribut non clé primaire `civilite`

Afin de résoudre ce problème, comme pour la 2FN, il convient de créer une nouvelle table `civilite` et d'y déplacer l'attribut `sexe`:

**Table Civilité**:
| civilite[PK] | sexe |
|--------------|------|
| Madame       | F    |
| Monsieur     | M    |


**Table Personne**:
| id  | [PK] civilite | nom        | prenom |
|-----|---------------|------------|--------|
| 1   | Madame        | Germain    | Sophie |
| 2   | Monsieur      | Hilbert    | David  |
| 3   | Madame        | Noether    | Emmy   |
| 4   | Madame        | Mirzakhani | Maryam |
| 5   | Monsieur      | Poincaré   | Henri  |
| 6   | Monsieur      | Villani    | Cédric |

Un autre exemple de non respect de la 3FN est illustré par la table suivante:

| facture_id [PK] | article_id [PK] | quantite | prix_unitaire | total |
|-----------------|-----------------|----------|---------------|-------|
| 1               | 1               | 3        | 10.5          | 31.5  |
| 1               | 13              | 10       | 9.15          | 91.50 |
| 1               | 42              | 8        | 4             | 32.0  |
| 2               | 3               | 1        | 19.99         | 19.99 |

La colonne `total` peut être calculée avec une opération mathématique simple à partir des colonnes `quantité` et `prix_unitaire` (`total = quantite * prix_unitaire`). Sa valeur ne dépend pas de la clé primaire. La solution consiste à simplement supprimer la colonne `total`.

#### Exemple 2

<Spoiler>


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

</Spoiler>



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
