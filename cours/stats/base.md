---
title: Bases
date: 2019-03-23
author: sol
sidebar: auto
project: false
hide: false
---

## Moyenne, médianne et mode

* **Mesures de la tendance centrale d'une série statistique.**
* La médianne ne dépend pas des valeurs extrèmes.
* Le mode est la valeur ou la classe de valeurs la plus représentée.

## Étendue et écart interquartile 
* **Mesures de la dispersion d'une série statistique.**
* L'écart interquartile ne dépend pas des valeurs extrèmes

L'écart interquartile donne des informations sur la dispersion de la série autour des valeurs les plus fréquentes prises par cette série. C'est la différence entre $Q_3$ et $Q_1$.

1. On ordonne les termes de la série dans l'ordre croissant
2. On détermine la médiane.
3. On détermine $Q_1$, la médiane du groupes de valeurs strictement **inférieures** à la médiane.
4. On détermine $Q_3$, la médiane du groupes de valeurs strictement **supérieures** à la médiane.
5. L'écart interquartile est la différence $Q_3 - Q_1$.

<div style="display: flex;"> <div style="margin: 20px auto 0 auto"><st c="g">23, <u>25</u>, 28</st>, <st c="r"><u>28</u></st><st c="b">, 32, <u>33</u>, 35</st></div> </div>

<br>

<Container type="info">

Dans le langage courant, un écart signifie une différence par rapport à ce qui est considéré comme normal.

En statistique, lorsqu'on étudie les paramêtres des dispersion d'une série, l'écart est la différence entre une valeur observée et la moyenne des valeurs.

</Container>

## Écart type
* **Mesure de la dispersion d'une série statistique autour de sa moyenne.** 
* Notée $\sigma$ sigma.
* Plus la distribution est dispersée (moins les valeurs sont concentrées autour de la moyenne), plus l'écrart-type sera élevé.
* Ne peut pas être négatif
* Si proche de zéro, signifie que les valeurs sont très peu dispersées autour de la moyenne.
* **L'écart type est la racine carrée de la moyenne des carrés des valeurs absolues des écarts à la moyenne.**

<Media
    src="https://i.imgur.com/gOO5mMo.png"
    caption="La distribution représentée en leu a un écart-type supérieur à celui de la distribution représentée en vert."
    center="true"
    width=450
/>


### Calculer l'écart-type



<Media
    src="https://i.imgur.com/BvB0heN.png"
    center="true"
    width=250
/>

Où $x_1$ désigne une valeur de la série statistique, $\mu$ ($\mu = \bar{x}$) sa moyenne arithmétique et $n$ son effectif.


1. On calcule la moyenne arithnétique de la série.
2. On calcule **le carré de l'écart à la moyenne** de chacune des valeurs de la série.
3. On calcule la somme des valeurs obtenues.
4. On divise par l'effectif de la série.
5. On calcule la racine carrée du résultat.

<Container type="warning">

La formule concerne le calcul de l'**écart type d'une population**. Si on veut calculer l'écart-type d'un échantillon (**classe**), il faut le diviser par $n-1$ et non par $n$.

</Container>

<Media
    src="https://i.imgur.com/hbaWXIU.png"
    width=350
    center="true"
/>

<Container type="info">

On remarque que la valeur absolue est redondante. En effet le carré assure une valeur positive de $x_i-\bar{x}$.

</Container>

### Comprehension de l'écart type

Soit la série 1, 4, <st c="r">7</st>, 2, 6. Si on remplace <st c="r">7</st> par 12, la valeur de l'écart type augmente. En effet, comme les données sont plus éloignées de la moyenne, par définition, l'égart type est plus important:


<Media
    src="https://i.imgur.com/p7OzWJ1.png"
    center="true"
    width=450
/>

Dans la formule, $\displaystyle\sum_{i=1}^n(x_i - \bar{x})^2$ est la somme des **carrés des écarts à la moyenne**. Lorsque les données s'éloignent d'avantage de la moyenne, la valeur de $\displaystyle\sum_{i=1}^n(x_i - \bar{x})^2$ augmente.

* $\sigma \{1,2,4,6,7\} \approx 2.28$
* $\sigma \{1,2,4,6,12\} \approx 3.90$

## Écart absolu moyen (EAM)

Tout comme l'écart type, l'EAM mesure aussi la dispersion et leurs formules sont semblables:

<Media
    src="https://i.imgur.com/DsBf17h.png"
    center="true"
    width=250
    style="margin-top:-10px"
/>

Les formules sont très similaires. Elles mettent toutes les deux en jeu la valeur absolue des écarts à la moyenne $|x_i-\bar{x}|$ et le nombre $n$ d'observations.

* L'écart absolu moyen est la moyenne arithmétique de la valeur absolue des écarts à la moyenne.
* L'écart type est la racine carrée de la moyenne des carrés des valeurs absolues des écarts à la moyenne.

### Quel écart est le plus pertienent ?

L'écart-type est plus compliqué à calculer, mais en prenant le carré des écarts, il permet de renforcer le poids des caleurs extrèmes et donc la perception de la dispersion. De plus, l'utilisation de l'écart type est pleinement justifié dans le cas où les valeurs de la série suivent _la loi normale_, il a alors une signification probabiliste que ne possède pas l'écart absolu moyen. La théorie des probabilités permet d'estimer la chance qu'a une valeur d'être éloignée de la moyenne de plus d'un certain nombre d'écart-types.

### Variance

Tout simplement le carré de l'écart type ($\sigma^2$). 

### Écart type de la population et écart type de l'échantillon

La formule pour calculer la variance et donc l'écart type n'est pas la même selon qu'il sagit des données relatives à une population ou des données relatives à un échantillon.

* Si les données ont été collectees auprès de la population, on divise la somme des carrés des écarts à la moyenne par le nombre d'individus de la population $N$.
* Si les données ont été collectées auprès d'un échantillon représentatif de la population constitué de $n$ individus, on doit diviser par $n-1$.

<Media
    src="https://i.imgur.com/apMRwOD.png"
    center="true"
    width=300
/>

<Container type="info">

On divise par $n-1$ pour que l'écart type de l'échantillon soit un bon estimateur de l'écart type de la population.

</Container>
