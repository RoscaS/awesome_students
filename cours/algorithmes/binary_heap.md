---
title: Arbres
date: 2018-10-14
author:  Sol
sidebar: auto
---

## Fourre tout temp

* deph = $floor(log_2(n))$

<Container type="info">

`depth % 2 == 0 ?` alors l'arbre est parfaitement équilibré

</Container>


## Start

<Col spacer="1" proportions="6/6" vAlign="10">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*ZTtVCoVYVEzesXc5dAegkw.jpeg"
    url="https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7"
    width=450
/>

</template>
<template slot="right">

* **Racine**: Point de départ, le premier **noeud**
* **Lien**: La référence qui pointe d'un noeud parent vers un noeud enfant
* **Enfant**: Un noeud qui a un noeud parent qui pointe sur lui
* **Parent**: Un noeud qui a une référence sur un autre noeud
* **Fratrie (Sibilings)**: Un groupe de noeuds enfants du même parent
* **Feuille**: Un noeud qui n'a pas d'enfant

</template>
</Col>


<Col spacer="1" proportions="6/6" vAlign="10">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*6Y-RQcOTx5WsYg2bgJ_3zA.jpeg"
    url="https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7"
    width=450
/>

</template>
<template slot="right">

* Un arbre ne peut avoir qu'une seul **racine** et la racine n'a **pas** de parent.
* $n$ noeuds veut **toujours** dire $n-1$ liens  

</template>
</Col>


<Col spacer="1" proportions="6/6" vAlign="10">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*PWwQAA310nefA43Sk6gWig.jpeg"
    url="https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7"
    width=450
/>

</template>
<template slot="right">

* Les arbres sont des structures de données **récursives**. Un arbre est généralement composé de plus petits arbres appelés **sous-arbres** imbriqués dans l'arbre principale.

</template>
</Col>


<Col spacer="1" proportions="6/6" vAlign="10">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*sxEBE8JC4UTR38FX-7RSfw.jpeg"
    url="https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7"
    width=450
/>

</template>
<template slot="right">

* La **profondeur** d'un **noeud** est le nombre de liens qu'il faut emprunter pour le rejoindre en parant de la **racine** de l'arbre
* La **hauteur** d'un **noeud** est le nombre de liens entre ce noeud et la **feuille** la plus distante

</template>
</Col>


<Col spacer="1" proportions="6/6" vAlign="10">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*zkYif_uQsOS80Zx7L0K9pg.jpeg"
    url="https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7"
    width=450
/>

</template>
<template slot="right">

* Un arbre est **équilibré** si deux noeuds de la même fratrie ont une **hauteur** qui ne diffère en profondeur que d'un niveau $1$ au maximum.

</template>
</Col>

## Arbres binaires

Les arbres sont des structures de données récursives, ce qui veut dire qu'un arbre est composé de plusieurs autres arbres.

> The child node of a tree structure could also very well be the parent node to many other child nodes — which would effectively make it the root node of a mini subtree of the larger tree structure. [basecs](https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d)

* Un arbre **binaire** a comme tous les arbres une unique racine
* Chaque noeud parent d'un arbre binaire a au **maximum deux enfants**

Si chaque noeud parent (incluant la racine) ne peut avoir au plus que deux enfants, alors tous les arbres binaires contiendront deux sous-arbres:
* sous-arbre de gauche
* sous-arbre de droite
Et cette rêgle se répète pour chaque noeud inférieur de façon récursive.


<Media
    src="https://cdn-images-1.medium.com/max/1000/1*UjSfPoMwCEkke1_iuNZ1EQ.jpeg"
    url="https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d"
    caption="Chaque arbre binaire contient deux sous arbres imbriqués dans l'arbre principal: Un sous-arbre de gauche et un sous arbre de droite"
    center="true"
    width=550
/>

### Binary search trees

Pour mieux comprendre l'aspect récurivité des arbres binaires prennons l'exemple des BST.

> Un arbre de recherche binaire (BST) est un algorithme qui simplifie et accélère les recherches dans une collection triée en divisant la recherche en deux groupes et en comparant un élément à un autre est soit plus grand, soit plus petit que celui qu'on recherhe.

Dans une BST, tous les noeuds sur la gauche de la racine sont plus petits que la racine et deux les noeuds à sa droite sont plus grands. 

<Media
    src="https://i.imgur.com/WXiutTn.png"
    center="true"
    width=550
/>


Sur la précédente figure on voit la patterne récurive se dessiner, tous les sous-arbres à gauche de chaque noeud auront une valeur cummulée plus petite que les sous-arbres à droide te chaque noeud. Ceci ne s'applique donc pas uniquement à l'arbre entier mais à chaque sous arbre imbriqué.

Il est donc aisé d'insérer la valeur 21 dans l'arbre suivant:

<Col spacer="1" proportions="7/4" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*2KbEeyVk3OX82o3A1prDEw.jpeg"
    url="https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d"
    center="true"
    width=550
/>

</template>
<template slot="right">

<Tree :tree="
    [
        26, 
        [
            19, 12, [21, '', 24]
        ],
        [
            33, 31, 34
        ]
    ]
"/>

</template>
</Col>

Réorganisons l'arbre précédent sous forme de structure de donnée linéaire et tentons d'y truver la valeur 12 comme le fait un BST

<Media
    src="https://cdn-images-1.medium.com/max/750/1*h-9gysybCLfvBIYNyUTwuQ.jpeg"
    center="true"
    width=550
/>

Dans cet exemple, on réalise qu'à chaque comparaison on élimine la moitié des éléments qu'il reste à tester. C'est précisément dans cette propriété que réside toute la puissance de la BST.

L'éxemple précédent réorganisait la BST dans une liste pour visualiser les choses plus facilement mais en réalité, un recherche binaire sur un arbre fonctionne exactement de la même façon du moment que tous les éléments sont triés.

## Les Tas (Heaps)
Un tas est un arbre binaire avec deux caractéristiques particulières: 

<Col spacer="1" proportions="6/6" vAlign="80">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/750/1*YsG9jcE4XiDMj-E_VhX03A.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*YsG9jcE4XiDMj-E_VhX03A.jpeg"
    width=450
    center="true"
/>

</template>
<template slot="right">

1. **Forme**: Un tas est un arbre binaire équilibré. 
    * Tous les niveaux de l'arbre doivent être complets à l'exception éventuelle du dernier
    * La partie gauche du dernier niveau doit toujours être complet
2. **Ordre** relation d'ordre d'in tas_ : 
    * La racine d'un tas doit être plus grand ou égale à tous ses descendents (**min-heap**)
    * La racine d'un tas doit être plus petite ou égale à tous ses descendents (**max-heap**)

Une autre façon de voir les choses est qu'il faut que tous les noeuds d'un niveau aient leurs deux enfants avant que la partie de gauche ne commence à voir des petits enfants.

</template>
</Col>


>Heaps are a great example of many core computer science concepts working together in order to form one very large abstraction, which is made up of smaller parts that we’re already familiar with! [basecs](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)


<Media
    src="https://cdn-images-1.medium.com/max/750/1*0hd7XsIV3D092XKKTZg6Pg.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*0hd7XsIV3D092XKKTZg6Pg.jpeg"
    center="true"
    width=450
/>

* Il peut y avoir des doublons dans un tas
* Contrairement au arbres de recherche binaire, les noeuds de gauche ne doivent pas être plus grands que les noeuds de droite, le placement des noeuds n'a pas d'importance du moment qu'ils suivent la _relation d'ordre d'un tas_.

### Ajouter et retirer des éléments à un tas

Quand nous manipulons un tas il est cruciale de toujours garder en tête la façon dont cette modification affecte sa structure.

> We must always maintain the shape and structure of a heap - otherwise, we're violating one of its two properties ! [basecs](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)


#### Ajouter

<Col spacer="2" proportions="6/6" vAlign="25">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/750/1*BP0o8V34jxYE4Dn8byJqow.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*BP0o8V34jxYE4Dn8byJqow.jpeg"
    caption="Ajout dans le cas d'un max-heap"
    center="true"
    width=450
/>

</template>
<template slot="right">
Dans cet exemple, nous avons affaire à un max-heap. Chaque élément descendent d'un noeud est plus petit que son parent et l'arbre doit être équilibré.

* **Le seul endroit pour ajouter un élément est toujours à la suite du précédent sur le niveau le plus bas qui n'est pas complet.** Si tous les niveaux sont complets, un nouveau niveau commence.


* Si le placement de ce nouvel élément enfreint la règle d'ordre tu tas (max-heap dans cet exemple) il est nécessaire de le rétablir en échangeant les éléments concernés et ainsi de suite jusqu'à rétablissement de l'ordre dans l'arbre entier.

</template>
</Col>

#### Retirer

<Col spacer="2" proportions="6/6" vAlign="25">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/750/1*tq8hBeMDKPTvhfp9R_J45g.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*tq8hBeMDKPTvhfp9R_J45g.jpeg"
    caption="Retirer dans le cas d'un min-heap 1/2"
    center="true"
    width=450
/>

</template>
<template slot="right">

Le plus souvent, quand nous retirons un élément d'un tas, il s'aggit de la racine qui est en fonction du cas le plus grand ou le plus petit élément.

* Pour garder la structure de l'arbre intacte, le seul éléments que nous pouvons retirer pour remplacer la racine est le noeud le plus à droite (erreur dans l'image) sur le niveau le plus bas. Ce qui aura pour effet d'enfreindre l'ordre de notre arbre.

* Pour rétablir l'ordre il faut échanger la nouvelle racine avec son descendent de plus grande valeur et ainsi de suite jusqu'à ce que l'ordre soit rétablit.

</template>
</Col>

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*6bCR-NtCtEh9IfRHTzDn_Q.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*6bCR-NtCtEh9IfRHTzDn_Q.jpeg"
    caption="Retirer dans le cas d'un min-heap 1/2"
    center='true'
    width=450
/>

> Just as we bubble up a node up to it's correct location in the heap when we added an element, we will bubble down a node to an appropriate spot when we delete an element from the heap. [basecs](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)

### Représenter un tas comme une liste

Il est assez naturel d'imaginer une implémentation d'arbre sous forme de _liste chainée_ mais le faire sous forme de **liste** est bien plus intéressant.

En effet, un tas est une structure de données _partiellement triée_, ils suivent une relation d'ordre effectivement mais par exemple du point de vue d'un arbre de recherche binaire, ils ne le sont pas. L'aspect le plus important concernant l'ordre d'un arbre est que sa racine est en fonction du cas l'élément le plus petit ou le plus grand de l'arbre.


#### Comment?

<Col spacer="1" proportions="6/6" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/750/1*cN_AR3fwVNRIf-pYIAYqYw.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*cN_AR3fwVNRIf-pYIAYqYw.jpeg"
    center="true"
    width=450
/>

</template>
<template slot="right">

* La **racine est toujours à l'index 0** du tas
* Si nous connaissons l'index de la racine, nous pouvons manipuler cet index pour déterminer où se trouvent ses enfants dans la liste. 

* De façon générale si l'index d'un noeud parent est représenté par `i` dans un tableau, alors:
    * Son **enfant de gauche** en `2i + 1`
    * Son **enfant de droite** en `2i + 2`

</template>
</Col>

<Col spacer="1" proportions="6/6" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/750/1*5mhwGo-y-Zw3X2a2l446Qw.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*5mhwGo-y-Zw3X2a2l446Qw.jpeg"
    width=450
/>

</template>
<template slot="right">

**Index des enfants d'un noeud:**
* `left` = $2i + 1$
* `right` =  $2i + 2$

**Index du parent d'un noeud:**
* `parent` = $floor(\frac{i-1}{2})$

Avec $i$ = noeud courant


</template>
</Col>

L'illustration suivante permet d'enfoncer encore un peu le clou:

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*PIY7aOhvUeDV5PJNboPv0A.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*PIY7aOhvUeDV5PJNboPv0A.jpeg"
    width=550
    center='true'
/>

#### Pourquoi?

La raison qui nous pousse à représenter un tas sous forme de de liste est le fait que les tas sont d'excélentes structures pour représenter des ordres de priorité et qu'un ordre de priorité est généralement une structure de donnée du type **queue**.

Une queue est une structure de donnée qui suit le principe du **FIFO** (First in First Out) et sont utilisées dans de nombreux cas en informatique comme:
* La gestion des requêtes
* Les taches (Jobs)
* L'ordenancement du processeur
* ...

> Heaps are often implemented as arrays because they are a super efficient way of representing **priority queues** [basecs](https://medium.com/basecs/learning-to-love-heaps-cef2b273a238)

<Col spacer="1" proportions="6/6" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*1dm1UKgWwvpWmmKEIokKHg.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*1dm1UKgWwvpWmmKEIokKHg.jpeg"
    center="true"
    width=450
/>

</template>
<template slot="right">

Un ordre de priorité (priority queue) est une queue avec 3 propriétés supplémentaires:

1. Chaque élément a une **priorité** associée (généralement un entier)
2. Un élément avec une **plus grande priorité** est retiré de la queue **avant** un élément de priorité moindre
3. Deux éléments avec une **même priorité** sont retirés da la queue en suivant l'**ordre d'entrée dans la queue**

</template>
</Col>

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*4rG1Dxt18Y5p0FefQDf-1A.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*4rG1Dxt18Y5p0FefQDf-1A.jpeg"
    center="true"
    width=450
/>

Les tas binaires sont particulièrement éfficaces pour implémenter les ordres de priorité car il est très facile de récupérer l'élément avec la plus haute priorité. **Il s'agit toujours de la racine**

* Trouver le min/max prend un temps constant: $O(i)$
* Ajouter/retirer prend un temps logarithmic: $O(log_n)$

## Heap sort

>Someone once told me that everything important in computer science boils down to trees. Literally just trees. We can use them to build things, parse things and interpret things and of course **sort** things. [basecs](https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82)

Un algorithme de **tri par tas** (heap sort algorithm) est une façon de trier un **tableau** qui se base sur les forces des tas binaires. Il tire profit de la structure particulière d'un tas binaire pour retourner la plus grande ou plus petite valeur en fonction du cas et au passage trier "automatiquement" ses éléments de façon séquentielle **en déplaçant la racine à la fin du tableau**

### Overview

Nous pouvons découper un heap sort en trois parties:

1. Initialement, nous avons un tableau désordonné. La première étape consiste à **transformer le tableau en un tas**. Dans le cas présent, nous voulons un tas de type max-heap. Programmatiquement, cette étape est encapsulée dans une fonction qui peut s'appeller `buildMaxHeap`. Après cette étape, nous avons la garantie que la racine de ce tas est la valeur la plus haute et que même si le tas n'est pas trié, tous les noeuds ont une valeur plus haute que leurs descendents.

2. La seconde étape consiste à **déplacer la racine du tas en dernière position** en effectuant un échange entre ces deux valeurs ce qui aura pour effet que:
    * La valeur la plus haute du tableau sera considéré triée
    * La relation d'ordre du tas n'est probablement plus respectée

3. La troisième étape consiste **retrouver la relation d'ordre** requise _si elle est n'est plus respectée par le précédent échange_. Pour ce faire il est nécessaire de faire descendre la nouvelle racine à sa place dans l'arbre. Programmatiquement cette étape est réalisée par une fonction qui pourrait s'appeler `heapify`.

Cet algorithme se répète ainsi jusqu'au tri complet du tas. Décorticons maintenant ces trois étapes:

### Première étape: Mise en forme

<Col spacer="1" proportions="7/4" vAlign="0">
<template slot="left">


<Media
    src="https://cdn-images-1.medium.com/max/750/1*KBafG8K6xaO7cY8O30XHdQ.jpeg"
    url="https://cdn-images-1.medium.com/max/750/1*KBafG8K6xaO7cY8O30XHdQ.jpeg"
    center="true"
    width=450
/>

</template>
<template slot="right">

1. On commence avec un tableau desordonné
 
2. On le met sous forme d'arbre binaire

3. On transforme cet arbre en tas binaire de type max-heap

</template>
</Col>

### Seconde étape: Extraction d'une valeur extrème

<Col spacer="1" proportions="7/4" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*Km1jk3hsH2cc751KKY41EA.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*Km1jk3hsH2cc751KKY41EA.jpeg"
    center="true"
    width=450
/>

</template>
<template slot="right">

4. On échange la racine avec le dernier noeud, ce qui a pour effet que le dernier noeud aura la valeur la plus élevée du tas et est donc considérée triée. **Logiquement nous la retirons donc du tas, programmatquement elle se retrouve au dernier indexe du tableau**.

</template>
</Col>

<Col spacer="1" proportions="7/4" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*RUt3itnTRK00-q3mek8F6g.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*RUt3itnTRK00-q3mek8F6g.jpeg"
    center="true"
    width=450
/>

</template>
<template slot="right">

5. À la suite du précédent échange, on se retrouve avec:
    *  Un noeud de moins dans le tas
    *  Une racine qui n'est pas l'élément avec la plus haute valeur
    Il est donc nécessaire de replacer le noeud qui contient `1` à sa place.

</template>
</Col>

### Troisième étape: Réarrangement du tas

<Col spacer="1" proportions="7/4" vAlign="0">
<template slot="left">

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*ZfdxyIDgK3GABnDPeP-IQw.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*ZfdxyIDgK3GABnDPeP-IQw.jpeg"
    center="true"
    width=450
/>

</template>
<template slot="right">

1. Une fois l'ordre regagné, nous répétons les étapes précédentes...
    * Échange de la racine avec le dernier noeud
    * Réarrangement du tas
  ... jusqu'à ce que le tas se retrouve avec une hauteur de 1.

</template>
</Col>

L'illustration suivante décortique un tour de tri supplémentaire:

<Media
    src="https://cdn-images-1.medium.com/max/1000/1*xjOjmTdKM9ZTQCpbARzp0w.jpeg"
    url="https://cdn-images-1.medium.com/max/1000/1*xjOjmTdKM9ZTQCpbARzp0w.jpeg"
    width=450
/>

Et finalement, la totalité du processus:

<Media
    src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif"
    url="https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif"
    width=450
/>

## implémentation






