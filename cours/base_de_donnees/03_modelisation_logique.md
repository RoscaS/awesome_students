---
title: Modélisation logique
date: 2018-10-26
author: Sol
sidebar: auto
---

Le modèle logique décrit un modèle conceptuel qui sera directement utilisé pour créér une base de données. Le modèle relationnel est un type de de modèle logique.

<br>

<Diagram 
    center="true" 
    url="https://i.imgur.com/fhnqkwl.png"
    height="518"
    link="http://www.nomnoml.com/#view/%0A%23direction%3A%20down%0A%23lineWidth%3A%202%0A%23.current%3A%20fill%3D%238f8%20center%20bold%0A%0A%5B%3Cframe%3E%20Overview%7C%0A%20%20%5BInterview%5D%20traitement%20-%3E%20%20%5B%3Ccurrent%3EMod%C3%A9lisation%3B%20Entit%C3%A9%20association%5D%0A%20%20%5B%3Ccurrent%3EMod%C3%A9lisation%3B%20Entit%C3%A9%20association%5D%20r%C3%A9sultat%20-%3E%20%5B%3Cstate%3E%20Sch%C3%A9ma%3BEntit%C3%A9-Association%5D%0A%20%20%5B%3Cstate%3E%20Sch%C3%A9ma%3BEntit%C3%A9-Association%5D%20traitement%20-%3E%20%5BTransformation%3B%20en%20relationnel%5D%0A%20%20%5BTransformation%3B%20en%20relationnel%5D%20r%C3%A9sultat%20-%3E%20%5B%3Cstate%3E%20Sch%C3%A9ma%20logique%3B%20relationnel%5D%0A%20%20%5B%3Cstate%3E%20Sch%C3%A9ma%20logique%3B%20relationnel%5D%20-%3E%20%5B%3Cdatabase%3E%20Base%20de%20donn%C3%A9es%5D%0A%5D"

/>

## Sources

* Cours du Prof. Marcelo Pasin (HE-Arc, Neuchâtel)
* [commentcamarche.com](https://www.commentcamarche.com/contents/1013-le-modele-relationnel)
* [igm.univ](http://www-igm.univ-mlv.fr/~cdavid/fr/cours/2015-bdL2/cours2.pdf)
* [ingo.univ-angers](http://www.info.univ-angers.fr/~gh/Pluripass/Db/ea.pdf)
* [wikipedia](https://wikipedia.com)
* [dbdiagram.io](https://dbdiagram.io/)

## Modèle relationnel

Le modèle relationnel est basé sur une organisation des données sous forme de **tables**. La manipulation des données se fait selon le conept mathématique de la relation de la **théorie des ensembles**, c'est à dire l'**algèbre relationnelle**. Cette dernière a été inventée en 1970 par Edgard Codd, directeur des recherche du centre IBM de San José. Elle est constituée d'un ensemble d'opérations formelles sur les relations. **Les opérations relationnelles permettent de créer une nouvelle relation (table) à partir d'opérations élémentaires sur d'autres tables** (par exemple l'union ($\cup$), l'intersection ($\cap$) ou encore la différence).

La théorie des ensembles met en oeuvre deux notions:
* La notion de domaine
* La notion de produit carésien


### Notion de domaine

Un domaine est un ensemble finit ou infini de valeurs. On le représente par une liste d'éléments ou bien une condition nécessaire et suffisante d'appartenance:
* Le domaine des booléens: $\{0, 1\}$
* Le domaine des doigts de la main: $\{$pouce, indexe, majeur, annulaire, auriculaire$\}$
* ...

### Notion de produit cartésien
La manupulation des données (sélection de valeurs) se fait suivant la notion mathématique de produit cartésien. Le produit carésien d'un ensemble de domaine**s** $D_i$, noté $D_1 \cdot D_2 \cdot D_3 \cdot ... \cdot D_n$ est l'ensemble des tuples (n-uplets) $\{V_1, V_2, ... V_n\}\; | \; V_i \in D_i$ 

### Modélisation relationnelle
Elle permet de représenter les **relations** à l'aide de **tables** (à deux dimensions) dont chaque **colonne** a un identificateur qui représente un domaine. Une **ligne** du tableau représente donc une entité et chacune des cases représente un de ses attributs.

* On appelle **attributs** le nom des colonnes qui représentent les constituants de l'entité. Un attribut (une colonne) est repéré par un nom et un domaine de définition, c'est à dire l'ensemble des valeurs qu'il peut prendre. 
* On appelle **tuple** (ou n-uplet) une ligne du tableau.

L'entité voiture pourra par exemple être représentée par:
* La marque
* Le modèle
* La série
* La plaque minéralogique

<Media
    src="https://i.imgur.com/YgJfwVJ.png"
    center="true"
    width=450
/>

* La **cardinalité** d'une relation est le nombre de tuples qui la composent. (3 dans l'exemple précédent)
* La **clé principale** d'une relation est l'attribut ou l'ensemble d'attributs, permettant de désigner de façon unique un tuple. Dans l'exemple précédent, le numéro de la plaque est une clé principale dans la mesure où la seule connaissance de cet attribut permet de connaitre la voiture.
* Une **clé étrangère** est une clé (donc un attribut permettant d'identifier de façon unique un tuple) faisant référence à une clé appartenant à une autre table.

La description d'une relation (d'une table) par ses attributs (nom et domaine) est appelée **schéma d'une relation**. On désigne par le terme **schéma d'une base de données relationnelle** l'ensemble des relations qui la compose.

La manipulation des éléments de la table se fait à l'aide d'opérations sur les ensembles. On définit deux types d'opérations de base:
* Les opérations unaires.
* Les opérations ensemblistes.




## Schéma EA → modèle relationnel

### Liens

| Modèle EA            | Modèle relationnel |
|----------------------|--------------------|
| Entités, Association | Table (relation)   |
| Propriété            | Attribut           |
| Identifiant          | Clé primaire       |

### Clé étrangère

* Une **clé étrangère** est un attribut (ou un ensemble d'attributs) d'une relation qui fait référence à un attribut d'une autre relation (la relation référencée)
* Les attributs de la relation référencée doivent être uniques
* Les clés étrangères établissent des liens entre les relations
* Une clé étrangère est une contrainte d'intégrité référentielle entre deux relations

### Transformation EA → relationnel


![Image](https://i.imgur.com/fPRD9vw.png)



#### Etape 1

Toutes les entités du diagramme EA sont représentées par une relations (tables) dans le schéma relationnel équivalent. La **clé primaire (PK)** de cette relation est l'identifiant de l'entitée correspondante.

#### Etape 2

Toutes les associations sont transformées en relations (tables). Les clés d'une relation sont tous les identifiants des entités qui participent.

<Container type="info">

Ces identifients deviennent des **Clés étrangères (FK)** de cette nouvelle relation

</Container>

#### Etape 3 (optimisation)

Toute association reliée à une entité avec une cardinalité de type **0,1** ou **1,1** peut être fusionnée avec l'entité. Dans ce cas on déplace les attributs de l'association vers ceux de la relation (table) traduisant l'entité.

<Media
    src="https://i.imgur.com/o9MoQ0o.png"
    center="true"
    width=450
/>

