---
title: "Proba: intro"
date: 2019-04-01
author: Sol
sidebar: auto
project: false
hide: false
---

> La probabilité est une **fraction** dont le numérateur est le nombre de cas favorables, et dont le dénominateur est le nombre de tous les cas possibles. <br> <span style="float: right">Pierre-Simon Laplace 1749 - 1827</span>

<br>

$$\frac{Cas\; favorables}{Tous\; les \; cas\; possibles}$$

## Analyse combinatoire

Si une opération globale peut se décomposer en $k$ opérations élémentaires successives, ces dernières pouvant s'effectuer respectivement de $n_1, n_2, ..., n_k$ manières, alors l'opération globale peut se faire de $n_1\cdot n_2\cdot ...\cdot n_k$ manières différentes.

##  Univers, issues et événements

Une **issue** est le résultat d'une expérience aléatoire. Supposons que l'on jette un dé. Lorsqu'il s'immobilisera, il indiquera l'une des six issues suivantes:

$$ \Omega = \{1, 2, 3, 4, 5, 6\} $$

$\Omega =$ l'**univers** des résultats.

On appelle **événement** tout sous-ensemble de $\Omega$. L'événement est dit **élémentaire** s'il ne correspond qu'à une seule et unique issue.

<Container header="Exemple du dé" type="info">
Les six événements élémentraires sont:

<div style="text-align: center">

$I_1 = \{1\}, I_2 = \{2\}, I_3 = \{3\}$ <br> $I_4 = \{4\}, I_5 = \{5\}, I_6 = \{6\}$

</div>

</Container>

Ainsi , l'événement _"le résultat d'un lancer de dé est un nombre pair"_ est identifié par le sous ensemble: $E = \{2, 4, 6\}$

### Opérations sur les événements

Les opérations sur les événements sont les opérations classiques sur les ensemmbles. Soit l'événement _"Le résultat du lancer est plus petit que 3"_ identifié par l'ensemble $A=\{1,2\}$ et l'événement $E=\{2, 4, 6\}$

#### Intersection 

$A \cap E$ représente l'événement _"le résultat du lancer est un chiffre pair **et** plus petit que 3"_, donc $B = A \cap E = \{2\}$.

#### Union

$A \cup E$ représente l'événement _"le résultat du lancer est un chiffre pair **ou** un chiffre plus petit que 3"_,  donc $C = A \cup E = \{1,2,4,6\}$.

#### Complémentarité

L'événement complémentaire de $E$ que l'on note $\bar{E}$ (on pononce "**non**" $E$), correspond à l'événement _"le résultat du lancer est un nombre impaire"_. On a donc $\bar{E} = \{1,3,5\}$.

### Exemples

> On lance deux fois une pièce de monnaie. On écrit $p$ si la pièce montre pile et $f$ si elle montre face. Écrivez l'ensemble $\Omega$

$$\Omega = \{pp, pf, fp, ff\}$$

> Une urne contient quatre boules numérotées 1, 2, 3 et 4. On tire successivement deux boules de l'urne, sans remettre la première boule tirée avant le tirage de la seconde. Écrivez l'ensemble $\Omega$.

<div style="text-align: center">

$\Omega = \{(1,2), (1,3), (1,4), (2,1), (2,3), (2,4),$
$(3,1), (3,2),(3,4),(4,1),(4,2)(4,3)\}$

</div>
