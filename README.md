

<SiteTitle />

## Spotlight

<Col proportions="6/6" vAlign="0">
<template slot="left">

<Card header="CheatSheets" max-width="270">

* [devhints.io](https://devhints.io/) TL;DR for developers
* [learnxiny.com](https://learnxinyminutes.com) Gold
* [tldrlegal.com](https://tldrlegal.com/) Legal overview
* [dodgy-blog.com](https://blog.g0tmi1k.com/2011/08/basic-linux-privilege-escalation/) Stay safe
* [toptal.com](https://www.toptal.com/developers/sorting-algorithms) Sorting comparaison

</Card>

</template>
<template slot="right">

<Card header="Tools" max-width="270">

#### Code
* [python tutor](http://www.pythontutor.com/) but not only python

<br>

#### Web
* [ninjamock](https://ninjamock.com) quick mockups



</Card>

</template>
</Col>

<br>

#### Analyse

<br>

* [Théorème de Schwarz](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Schwarz): 

Soit $f:D \Rightarrow \mathbb{R}$ une fonction de deux variables. Si les deuxièmes dérivées partielles $\partial^{2}_{xy}f(x,y)$ et $\partial^{2}_{yx}f$ existent **et son continues** sur $D$ alors, elles sont égales:

$$\partial^{2}_{xy}f(x,y) = \partial^{2}_{yx}f(x,y) \equiv f_{xy}(x,y) = f_{yx}(x,y)$$

Pour tout $(x,y) \in D$

Et de la même façon: $f_{xyz} = f_{zyx}$ 

<br>

Exemple:

<br>

Soit $f(x, y, z) = xy^2z^3 + arcsin(x\sqrt{z}) \quad$ calculer $f_{xzy}$

Deux possibilités équivalentes pour la calcule. <st c="r">Il suffit d'y aller par le "chemin" le plus facile qui nie totalement la partie $arcsin(x\sqrt{z})$</st>, c'est à dire: $f_{yzx}$

<br>

1. $f_y = 2xyz^3$
2. $f_{yz} = 6xyz^2$
3. $f_{yzx} = 6yz^2$



## Derniers articles

<Posts pages='articles' />

## Derniers cours

<Posts pages='cours' />


