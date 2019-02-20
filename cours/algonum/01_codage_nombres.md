---
title: Codage des nombres
date: 2019-02-20
author:  sol
sidebar: auto
project: false
hide: false
---

## Types de base

| Type            |                Bytes                 |                                                      Range                                                       |
| --------------- | :----------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| **char**        |                  1                   |                                         -128 <Fa fa="arrow-right"/> 127                                          |
| **u char**      |                  1                   |                                           0 <Fa fa="arrow-right"/> 255                                           |
| **short int**   |                  2                   |                                      -32 768 <Fa fa="arrow-right"/> 32 767                                       |
| **u short int** |                  2                   |                                          0 <Fa fa="arrow-right"/> 65535                                          |
| **int**         | 2 (cpu 16 bits) <br> 4 (cpu 32 bits) | -32 768 <Fa fa="arrow-right"/>  32 767 <br> <st c="r"> -2 147 483 648 <Fa fa="arrow-right"/> 2 147 483 647 </st> |
| **u int**       | 2 (cpu 16 bits) <br> 4 (cpu 32 bits) |          0 <Fa fa="arrow-right"/>  65 535 <br> <st c="b"> 0 <Fa fa="arrow-right"/> 4 294 967 295 </st>           |
| **long int**    |                  4                   |                      <st c="r"> -2 147 483 648 <Fa fa="arrow-right"/>  2 147 483 647 </st>                       |
| **u long int**  |                  4                   |                             <st c="b"> 0 <Fa fa="arrow-right"/>  4 294 967 295 </st>                             |
|                 |                                      |                                                                                                                  |
| **float**       |                  4                   |                                      -3.4E-38 <Fa fa="arrow-right"/> 3.4E38                                      |
| **double**      |                  8                   |                                     -1.7E-308 <Fa fa="arrow-right"/> 1.7E308                                     |
| **long double** |                  10                  |                                    -3.4E-4932 <Fa fa="arrow-right"/> 3.4E4932                                    |


* Pour les types entiers (de **char** à **u long int** dans le tableau), on parle de range dans le sens plage de valeur (et de façon discrète).
* Pour les types à virgule flotante (**float**, **double** et **long double**), on parle de range dans le sens portée (de précision).


<br>

<Container type="warning">

On remarque que le **long int** n'a de sens que sur les architectures 16 bits.

</Container>

<br>

### Virgule flottante


| Type            | Bytes |                   Range                    |         Precision          |
| --------------- | :---: | :----------------------------------------: | :------------------------: |
| **float**       |   4   |   -3.4E-38 <Fa fa="arrow-right"/> 3.4E38   | 6   valeurs significatives |
| **double**      |   8   |  -1.7E-308 <Fa fa="arrow-right"/> 1.7E308  | 15  valeurs significatives |
| **long double** |  10   | -3.4E-4932 <Fa fa="arrow-right"/> 3.4E4932 | 19  valeurs significatives |


<Col proportions="6/6" vAlign="0">
<template slot="left">

<tr>
<td class="cell"> 52.3 </td>
<td class="cell"> = </td>
<td class="cell"> <st c="r">-</st> <st c="b">5.23</st> E<st c="g">1</st> </td>
</tr>

<tr>
<td class="cell"> 523 000.0 </td>
<td class="cell"> = </td>
<td class="cell"> <st c="r">+</st> <st c="b">5.23</st> E<st c="g">5</st> </td>
</tr>

<tr>
<td class="cell"> -0.000523 </td>
<td class="cell"> = </td>
<td class="cell"> <st c="r">-</st> <st c="b">5.23</st> E<st c="g">-4</st> </td>
</tr>

</template>
<template slot="right">

* <st c="r">signe</st>
* <st c="b">mantisse</st>
* <st c="g">exposant</st>

</template>
</Col>

<br>

<style>
.cell { background-color: white; border: white;}
</style>

<br>

* L'**exposant** exprime la **magnitude du nombre**
* La **mantisse** exprime le nombre de **chiffres significatifs**
  * les chiffres significatifs sont les valeurs les plus à gauche de **zero** si l'exposant $>0$
    * Pour un très grand nombre, de l'ordre de $10^{37}$ les ordres de magnitude $< 10^{37-6}$ sont beaucoup moins importants de la même façon que si on a une dette de 350 000 balles on se fout de savoir qu'en réalité notre dette est de 350 002 balles
  * les chiffres significatifs sont les valeurs le plus à droite de la **virgule** l'exposant $<0$
    * La précision d'une décimale est la plus important pour les valeurs les plus à droite de la virgule
    * <st c="r">TODO: Compléter avec la possibilité de "balayager" à coup de plages sur $n$ chiffres, $n$ étant le nombre de chiffres significatifs pour découvrir toutes les décimales du valeur comme $\pi$ ou $\sqrt{2}$.</st>





### Todo

* Creuser simple et double précision
  * <st c="b">Est-ce-que la double précision a un rapport avec le type double ?</st>