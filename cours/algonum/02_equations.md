---
title: Algorithmes numériques
date: 2019-02-26
author: Sol
sidebar: auto
project: false
hide: true
---

* **Analyse numérique**: Mise en pratique de methodes permettant de résoudre par des calculs numériques des problèmes d'analyse.
* $f(x) = g(x)$ <Fa fa="arrow-right"/>  $f(x) - g(x) = 0$:
  *  En réalité on trouvera généralement des approximation.
* **Equation algébrique** $P(x) = 0$ ($P$ = poly de degré $n$)
* Fonction transcendante: si elle n'est pas algébrique
* **Equation transcendante** ($cos(x) = x$; $e^{-x} = x$): equation contenant une fonction transc. dont une ou plusieurs variables sont solution (**Pas de sol analytique!**), si polynome de degré > 4 pas de solution directe non plus !
  * **Solution approchée** (<st c="r">precision limitée</st>):
    * **methode numériques** font appel aux algo de recherche d'une racine d'une fonction
    * **approximation analytique** equation peut être approximée par une série de Taylor au voisinage de zero
    * **solution graphique**: séparation des variables, représentation des deux graphes, points d'intersection sont les solutions
Joseph-Louis Lagrange
* **Methode de dichotomie (methode de la bissection)**: répéter des partages d'un intervalle en deux parties puis à sélectionner le sous intervalle dans lequel existe une racine de la fonction
  * <st c="g">convergence assurée</st>
  * <st c="rgb">nombre d'itérations (nombre de fois qu'on va répéter la bissection) => converge lentement</st>

**Methode de la tangente (Newton)**:
  * utiliser la pente (donc la dérivée de $f(x)$ en $x_k$))
  * calculer intersection de la droite $D_k(x)$ avec l'axe de $x$
  * <st c="g">peut converger très vite</st>
  * <st c="rgb">Pas de convergence si $m$ petit voir boucle inf</st>





<Col proportions="6/6" vAlign="0">
<template slot="left">

<Card header="" :title="false" max-width="270">

**Niels Abel**

<Media
  src="https://i.imgur.com/ZwcizQe.png"
  center="true"
  width=50
/>



* 1802-1829
* Analyse mathématique
  * Séries et suites
  * Résolution d'équations
  * **Nombre algébrique**

</Card>

</template>
<template slot="right">

<Card header="" :title="false" max-width="270">

**Bernard Bolzano**

<Media
  src="https://i.imgur.com/o0Ef6DW.png"
  center="true"
  width=50
/>

* 1781-1848
* Prague (mais père italien)
* Théorème à son nom
* Théorème des valeurs intermédiaires
* **Approche dichotomique**

</Card>

</template>
</Col>

<Col proportions="6/6" vAlign="0">
<template slot="left">

<Card header="Isaac Newton" :title="true" max-width="270">

* Tangeante

</Card>

</template>
<template slot="right">

<Card header="" :title="false" max-width="270">

**Joseph-Louis Lagrange**

<Media
  src="https://i.imgur.com/yeXLAws.png"
  center="true"
  width=50
/>

* 1736-1813
* Mathématicien
* Atronome

Reprends le théorème de la tangeante pour utiliser une
approximation (méthode de Lagrange)

</Card>

</template>
</Col>


Algo dichotomie:

```
fb = f(b) (déclaré, jamais utilisé)
bouclie infinie ? (|b-a| > omega)
```