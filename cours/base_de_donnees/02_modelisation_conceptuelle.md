---
title: Modélisation conceptuelle
date: 2018-10-22
author: Sol
sidebar: auto
---

Une modélisation conceptuelle **décrit les données et ses liens naturels**, sans prendre en compte la représentation logique de ces dernières. D'un **niveau d'abstraction plus haut** que la modélisation logique (souvent relationnelle mais pas toujours), c'est la première étape vers la création d'une base de données.

<br>

<Diagram 
    center="true" 
    url="https://i.imgur.com/LMNueQs.png"
    link="http://www.nomnoml.com/#view/%0A%23direction%3A%20down%0A%23lineWidth%3A%202%0A%23.current%3A%20fill%3D%238f8%20center%20bold%0A%0A%5B%3Cframe%3E%20Overview%7C%0A%20%20%5BInterview%5D%20traitement%20-%3E%20%20%5B%3Ccurrent%3EMod%C3%A9lisation%3B%20Entit%C3%A9%20association%5D%0A%20%20%5B%3Ccurrent%3EMod%C3%A9lisation%3B%20Entit%C3%A9%20association%5D%20r%C3%A9sultat%20-%3E%20%5B%3Cstate%3E%20Sch%C3%A9ma%3BEntit%C3%A9-Association%5D%0A%20%20%5B%3Cstate%3E%20Sch%C3%A9ma%3BEntit%C3%A9-Association%5D%20traitement%20-%3E%20%5BTransformation%3B%20en%20relationnel%5D%0A%20%20%5BTransformation%3B%20en%20relationnel%5D%20r%C3%A9sultat%20-%3E%20%5B%3Cstate%3E%20Sch%C3%A9ma%20logique%3B%20relationnel%5D%0A%20%20%5B%3Cstate%3E%20Sch%C3%A9ma%20logique%3B%20relationnel%5D%20-%3E%20%5B%3Cdatabase%3E%20Base%20de%20donn%C3%A9es%5D%0A%5D"
/>

## Sources

* Cours du Prof. Marcelo Pasin (HE-Arc, Neuchâtel)
* [igm.univ](http://www-igm.univ-mlv.fr/~cdavid/fr/cours/2015-bdL2/cours2.pdf)
* [ingo.univ-angers](http://www.info.univ-angers.fr/~gh/Pluripass/Db/ea.pdf)
* [wikipedia](https://wikipedia.com)

## Modèle entité-association (EA)

C'est un type de modélisation conceptuelle au même titre que Unified Modeling Language (UML). Le modèle EA permet d'esquisser les composants clés de la base de donnée de façon naturelle.

<br>

* Langage graphique
* Concepts simples:
    * Choses (objets) <Fa fa="arrow-right"/> **entités**
    * Liens entre les choses <Fa fa="arrow-right"/> **associations**
    * Regroupement des choses de même nature <Fa fa="arrow-right"/> **ensemble** d'entités/associations
* Inclut les contraintes naturelles

## Entité

* **Entité** (<st c="b">nom propre</st>): Un objet, un événement, un lieu, une personne, ..., **une chose identifiable sans ambiguité**
    * Exemples:
        * Le cinéma GAUMONT
        * L'acteur Bruce Willis
        * Le film Carnet de voyage

<br>

* **Ensemble d'entités** (<st c="b">nom commun</st>): Regroupement d'entités de même nature
    * Exemples:
        * Cinéma
        * Acteurs
        * Films
    * Représenté par un rectangle contenant le nom de l'ensemble d'entités

<br>


<Media
    src="https://i.imgur.com/egNke11.png"
    center="true"
/>

<Container type="warning">

Une entité est une valeur particulière d'une classe d'entités et par abus de langage, quand on parle d'une entité on fait souvent référence à un ensemble d'entités.

</Container>

## Attributs (1)

**Donnée élémentaire** que l'on perçoit sur une entité ou une assocation et est représenté par le nom de la propriété dans une élipse liée par une ligne à son entité ou association.

<br>

* Dans le cas d'une entité
    * nom, prénom titre, age, adresse, ...
* Dans le cas d'une association, les propriétés doivent obligatoirement relier les entités:
    * Le rôle d'un acteur relie un acteur et le film dans lequel il a joué

#### Exemple:
<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

* Une **bière** a deux attributs:
    * Nom
    * Producteur

* Chaque entité du type **Bière** a normalement des valeurs différentes pour ces deux attributs

</template>
<template slot="right">

![Image](https://i.imgur.com/rjPLKRP.png)

</template>
</Col>

## Associations

* **Association**: C'est un lien entre deux ou plusieurs entités et représente une activité, une action, une interaction, ...
    * Exemples:
        * Bruce Willis a joué dans "L'armée des 12 singes"
        * Tannenbaum a écrit le libre "Réseaux informatique"

<br>

* **Ensemble d'assocations** (<st c="b">verbe</st>): C'est le lien entre deux ou plusieurs ensembles d'entités:
    * Exemples:
        * `Jouer` entre **Films** et **Acteurs**
        * `Affiche` entre **Cinéma** et **Films**
        * `Realise` entre **Réalisateur** et **Films**
* Est représenté par un **losange** contenant le nom de l'ensemble d'associations et chaque entité joue un **rôle** dans une association représenté par le lien qui unit l'ensemble d'entités à l'ensemble d'associations

<Media
    src="https://i.imgur.com/R6Wh9Wv.png"
    center="true"
/>

#### Exemple:

* Les **bistros** `vendent` des **bières** à un certain **prix**
* Les **personnes** `apprécient` ceraines **bières**
* Les **personnes** `fréquentent` des **bistros**

<Media
    src="https://i.imgur.com/iRU4cpe.png"
    center="true"
/>

## Associations multiples
* Parfois, il est nécessaire d'établir des associations multiples qui **trois ensembles d'entités**. Par exemple:

Les personnes ne boivent certaines bières que dans des bistros particuliers:
* Les trois associations `Apprécie`, `Vend` et `Fréquente` ne sont pas suffisante
* On a besoin d'une association à trois entités

<br>

![Image](https://i.imgur.com/qdPmIbe.png)


<Media
    src="https://i.imgur.com/MEXMIXQ.png"
    center="true"
/>

Un autre exemple sertait celui d'une banque:
* Un **compte** appartient à un **client** et est rattaché a une **banque**

<Container type="warning">

* Les associations multiples plus grandes que 3 sont à éviter!
* Toute association peut s'exprimer par une combinaison d'associations binaires

</Container>

## Cardinalité des associations

Une association permet de relier, une ou plusieurs entités. La cardinalité des rôle détermine la façon dont les entités sont reliées en définissant des restrictions sur le nombre d'associations possibles entre elles.

### One to One (1x1)

<Col proportions="6/6" vAlign="0">
<template slot="left">

Dans une association 1x1, chaque entité des deux ensembles est liée **au maximum** avec une entité de l'autre.

<br>

**Exemple**:
* **BestSeller** entre Bières et Producteurs
    * Chaque **bière** est `produite` par _un seul_ **producteur**
    * Chaque **producteur** a _une seule_ **bière** qui est la plus `vendue`

</template>
<template slot="right">

![Image](https://i.imgur.com/V5U1itX.png)

</template>
</Col>

### Many to One ($n$x1)

<Col proportions="6/6" vAlign="0">
<template slot="left">

Une entité du second ensemble peut être liée à 0, 1 ou $n$ entités du premier ensemble. 

<br>

**Exemple**:

* **Favorite:**
    * Une **personne** a, _au maximum une bière_ `favorite`
    * Une **bière** peut être la `favorite` de:
        *  0 personnes
        *  1 personne
        *  $n$ personnes

</template>
<template slot="right">

![Image](https://i.imgur.com/3ZCOydS.png)

</template>
</Col>

### Many to Many ($n$x$n$)

<Col proportions="6/6" vAlign="0">
<template slot="left">

Une entité d'un des ensembles peut être liée à plusieurs entités de l'autre ensemble.

<br>

**Exemple**:

* **Vend**
    * Un **bistro** $X$ `vend` $n$ **Bières**
    * Une **bière** $Y$ est `vendue` par $m$ **Bistros**

</template>
<template slot="right">

![Image](https://i.imgur.com/FE80dh0.png)

</template>
</Col>

### Représentation de la cardinalité (Look-here)

Le rôle d'une associtation est défini apr deux nombres (min, max) représentant le nombre de fois minimum et le nombre de fois maximum qu'une entité participe à une association.

<br>

* Les valeurs possible sont: (0, 1); (1, 1); (1, $n$); ($n$, $n$)
* **min**: Correspond à la résponse à la question:
    * Combien de fois au **moins** une entité A est reliée à une entité de B
* **max**: Correspond à la résponse à la question:
    * Combien de fois au **plus** une entité A est reliée à une entité de B
* Ces questions se posent dans les deux sens: 
    * De A vers B
    * Puis B vers A


#### Associations simples


<Media
    src="https://i.imgur.com/bU01XEF.png"
    caption="représentation de type 'Look-here'"
    center="true"
    width=450
/>

#### Associations multiples


<Media
    src="https://i.imgur.com/lvoQtQB.png"
    center="true"
    width=450
/>

### Exemples

<Spoiler>

<br>

Les **studios** de cinéma sont `dirigés` par _un_ **président**.
* Un studio n’a qu’un président
* Un président peut diriger plusieurs studios

![Image](https://i.imgur.com/Ha7264g.png)

----------

Un **contrat** de cinéma définissant des rôles est `signé` par _un_ **studio** et _des_ **acteurs** pour _chaque_ **film**.

![Image](https://i.imgur.com/tgLEcWM.png)


</Spoiler>

## Attributs (2)

* Une entité est définie par un ensemble d'attributs
* Chaque attribut a une valeur
    * Pour chaque attribut il existe un ensemble de valeurs autorisées que l'on appelle **domaine** de l'attribut
        * Le domaine de l'attribut salaire de l'entité **personne** peut être l'ensemble des réels positifs
        * Le domaine de l'attribut jour de l'entité **semaine** est {lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche}
* La valeur peut être complexe
* La valeur peut être multiple

<Media
    src="https://i.imgur.com/nWonp1Y.png"
    center="true"
/>

## Rôles particuliers

<Col proportions="6/6" vAlign="0">
<template slot="left">

Il se peut qu'un ensemble d'entités figurent plus d'une fois dans un association. On parle de relation récursive (ou cyclique). 

* Il faut alors ajouter un **rôle** (représenté par une étiquette sur la liaison) à chaque élément de l'association.

</template>
<template slot="right">

![Image](https://i.imgur.com/6IJuxgy.png)

</template>
</Col>

## Sous classes (Généralisation)

Une sous-classe est un sous-ensemble d'entités qui étendent les attributs de l'ensemble d'entités mère.

<br>

<Col proportions="5/7" vAlign="0">
<template slot="left">

* Relation spéciale entre entités
* Les "sous entités" héritent des propriétés des "super-entités"
* Relation de type **ISA** (is a)

<br>

**Exemple:**
* Les voitures **sont des** véhicules (Car **is a** véhicle)

</template>
<template slot="right">

![Image](https://i.imgur.com/Ug9QYKV.png)

</template>
</Col>

<Container type="danger" header="aux mauvaises généralisations">

La position des attributs dans les entités est la clé d'une généralisation correcte.
**Il faut placer les attributs le plus haut possible pour éviter les redondances**

</Container>

## Identifiant

Chaque occurence doit pouvoir être repérée de manière unique et sans ambiguité, pour être distinguée de toutes les autres. Un **identifiant** est donc **une** propriété ou **groupe de propriétés** dont la valeur identifie sans ambiguité une entité ou une association.

<br>

* Identifiant d'un ensemble d'entités:
    * Attribut ou groupe d'attributs qui permet de repérer une occurrence de manière unique
    * Un seul identifiant
    * On privilégie l'identifiant le plus court ou le plus naturel 
        * numéro de bon de commande
        * numéro d'étudiant
    * On peut créer un identifiant artificiel par commodité (ID).
    * Un identifiant est **non variable dans le temps**
    * Les identifiants sout <u>**soulignés**</u>

<br>

![Image](https://i.imgur.com/zjthl8g.png)

<Container type="danger">

* Dans une hiérarchie (isa), **seule la racine définit l'identifiant**
* Une **association** n'a pas d'identifiant explicite
    * Il est implicite en juxtaposant les identifiants des entités associées

</Container>

## Ensemble d'entités faible

* Il existe des cas où une entité ne sera pas suffisamment identifiables par ses attributs
* Un ensemble d'entités est faible si pour identifier ses entités, il faut:
    * Suivre une (ou plusieurs) de ses associations
    * Utiliser la clé d'une entité associée

<br>

**Exemple:**
<br>
On pourrait penser que _Nom_ et _Prénom_, ensemble forment une clé pour une entité **joueur de foot**. Mais il existe des joueurs avec le même nom et prénom dans les équipes du monde entier. Le numéro d'un joueur n'est certainement pas une clé comme des joueurs de deux équipes peuvent avoir le même. Le **nom de l'équipe** ainsi que le **numéro du joueur** identifient de façon unique un joueur.

<Media
    src="https://i.imgur.com/PSvjEMh.png"
    center="true"
/>

Donc dans cet exemple, comme on utilise le <u>_nom_</u> de l'équipe (qui est la clé de l'ensemble d'entités **Equipes**) ainsi que <u>_numéro_</u> pour identifier un joueur, l'ensemble d'entité **Joueurs** est dite **faible** !

## Techniques de conception

* Éviter la redondance
    * Représenter la même information plusieurs fois
    * Crée de potentielles incohérences (changer une cope sans modifier l'autre)
* Limiter l'utilisation d'entités faibles
* Ne pas utiliser un ensemble d'entités quand un attribut suffirait
    * Un ensemble d'entités doit satisfaire **une** **des** conditions suivantes:
        * C'est plus qu'un nom, il y a plus d'attributs que d'identifiants
        * C'est le **many** d'une association "one to many" ou "many to many"

### Exemples

<Spoiler>

<br>

#### Bonne conception:

<br>

![Image](https://i.imgur.com/qklmbGW.png)

* Ce design représente l'adresse de chaque producteur une seul fois

<br>

#### Mauvaise conception:

<br>

![Image](https://i.imgur.com/bnn8K3Q.png)

Le producteur apparait deux fois
* Une fois comme ensemble d'entités
* Une fois comme attribut d'un ensemble d'entités

<br>

#### Mauvaise conception:

<br>

![Image](https://i.imgur.com/PZ1XNi1.png)

* L'adresse du producteur est répétée pour chaque bière
* L'adresse disparait si il n'y a temporairement pas de bières pour un producteur

<br>

#### Bonne conception:

<br>

![Image](https://i.imgur.com/wbIRSen.png)

* Producteurs mérite d'être un ensemble d'entités
    * Plus de d'attributs que d'identifiants
* Bières mérite d'être un ensemble d'entités
    * Plusieurs bières sont produites par un producteur (many to one = one to many)

<br>

#### Bonne conception:

<br>

![Image](https://i.imgur.com/ZWjFUDh.png)

* Producteur ne mérite pas d'être un ensemble d'entités dans ce cas

<br>

#### Mauvaise conception:

<br>

![Image](https://i.imgur.com/OWEQRCT.png)

* Le producteur n'est qu'un nom
* Il n'est pas le **many** de "many to one"

<br>

</Spoiler>

## Exemple réel: Galerie d'art


Une **galerie** maintient des informations sur ses **artistes** (_noms, dates de naissance et style d'art_). Pour chaque **oeuvres** d'art, la **galerie** prend note de l'**artiste**, de l'_année_ de production, du _titre_ du _type_ (penture, lithographie, sculpture, photo) et du _prix_. Les **oeuvres**, la **galerie** sont classifiées en **groupes** et chaque **groupe** a un _nom_. Les **oeuvres** peuvent `appartenir` à plusieurs **groupes**. La **galerie** garde aussi les _noms_, _adresses_ et _total dépensé_ par chacun de ses **clients**, ainsi que ses `préférences` (**Groupes** et **Artistes**)

### Démarche

<br>

1. Identifier les **entités** les plus naturelles (<st c="b">sujets, compléments</st>)
2. Identifier les `associations` entre ces entités (<st c="b">verbes</st> n'exprimant pas de dépendance fonctionnelles)
3. Identifier les _attributs_ et les identifiants de ces entités et de ces associations (<st c="b">compléments de verbe</st> exprimant des dépendances fonctionnelles)
4. Exprimer les cardinalités et les rôles (<st c="b">distinguer le singulier du pluriel</st>)


<Container type="danger">

Galerie est le thème même, ce n'est pas pas dans le cadre de cet exemple un ensemble d'entités, **c'est une entité**.

</Container>

![Image](https://i.imgur.com/XGqXw4O.png)

