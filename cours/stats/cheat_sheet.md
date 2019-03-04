---
title: CheatSheet
date: 2019-03-02
author:  Sol
sidebar: auto
project: false
hide: false
---

<!-- displaystyle -->

|Opération|Symbole|Formule|Commentaire|
|:------|:------:|:------|:------|
|Individu|$\omega_i$| | |
|Population|$\Omega$|$\{\omega_i, i = 1,2,...,n\}$| |
|Total individus|$n$| | |
|Moyenne|$\bar{x}$|$\dfrac{\sum n_i \cdot x_i}{n}$| |
|Médianne|$\tilde{x}$|$n$ paire: $x_{\frac{n+1}{2}}$ <br> $n$ impaire: $\frac{1}{2} (x_{\frac{n}{2}} + x_{\frac{n}{2}+1})$|$\Omega$ trié par ordre croissant|
|Variance|$v$|$\dfrac{\sum n_i \cdot x_i^2}{n}-\bar{x}^2$| |
|Écart-type|$\theta$|$\sqrt{v}$| |
|Mode|$m_0$|$max(\Omega)$|

## Cas discret

||_Notes_|_Élèves_|
|:------:|:------:|:------:|
|**Observations** $i$|**Valeurs** $x_i$|**Effectifs** $n_i$|
|1|0|1|
|2|1|1|
|3|2|2|
|4|3|5|
|6|5|8|
|7|6|2|
|||**Effectif total**: <br> $\displaystyle\sum_{i=1}^{7}n_i=26$|


## Cas continu
Lorsqu'il y a **trop de valeurs discrètes**, ou lorsque le **caractère de la population est de nature continue**, on regroupe les valeurs en classes de même amplitude.

|Temps (s) <br> _classes_|Centre des classes <br> $x_i$|Effectifs <br> $n_i$|
|:------:|:------:|:------:|
|$[43-45[$|44| 2|
|$[45-47[$|46|3|
|$[47-49[$|48|7 |
|$[49-51[$|50|11 |
|$[51-53[$|52|8 |
|$[53-55[$|54|6 |
|$[55-57[$|56|3 |
|||$n = 40$|
