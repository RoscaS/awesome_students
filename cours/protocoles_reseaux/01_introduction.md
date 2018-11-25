---
title: Introduction
date: 2018-09-24
sidebar: auto
author: Sol
---

## Exercice introductif
Déterminer le nombre de bits qu'il faut pour coder les sources suivantes:

### Source aléatoire
>Une suite de symboles codés sur 8 bits et produits aléatoirement:

Chaque symbole prend 8 bits. Aucune compression n'est possible si la distribution est vraiment aléatoire (→ cours: notion d'entropie maximale pour des symboles équiprobables, redondance nulle).

### Source Ennuyeuse 
>Une suite forée d'un symbole (un bit dans ce cas) toujours identique: `00000000...`

On peut avoir envie de coder chaque symbole sur un bit valant toujours 0. On remarque toutefois qu'aucune information n'est réellement transmise. **Cette source ne produit pas d'information**. On peut donc coder chaque symbole sur… aucun bit. (→ cours: notion de surprise: pas de surprise, pas de [quantité d']information)

### Source prévisible
>Une suite formée de symboles alternant enre 0 et 1: `1010101010...`

Idem que la source précédente. *pour se convaincre (poser symbole = 01)*

### Alphabet32
>Une source formée de symboles choisis aléatoirement dans l'ensemble [A-Z0-5].

Pareil que la première source à la différence qu'un alphabet de 32 symboles se code sur 5 bits ($2^5 = 32$). (→ cours: notion de quantité de décision)

### Quatre états probabilistes
>[A-D] ne sont pas <Def def="Même chance d'apparaitre">équiprobable</Def>:

| symbole  |nombre d'apparitions | codé comme...  |
|---|---|---|
|A   |20   | **0**  |
|B   |10   |  **10** |
|C   | 5   | **111**  |
|D   | 5   | **110**  |

> En codant les symboles de façon intuitive et sans tenir compte de la probabilité d'apparition, quel débit binaire (bps) obtient-on si l'on émet 1000 symboles par seconde ?

Code fixe à 2 bits/symbole (4 symboles): 1000 symboles par seconde * 2 bits par symboles = 2000 bps.

> Découper l'ensemble [A-D] en sous-ensembles de même nombre et indiquez pour chaque symbole dans quelle bulle il doit aller:

<Media 
  src="https://i.imgur.com/Q27Jhz2.png" 
  caption="Découpage de l'ensemble [A-D]"
  center="true" 
/>

A est arrivé 20 fois. B C et D, ensemble, sont arrivés 20 fois également. Il est donc facile de répartir en deux ensembles équiprobables: [A] et [BCD]. Ensuite, on découpe [BCD] en [B] et [CD], puis [C] et [D]. Cela fait donc au minimum 1 décision et au maximum 3 décisions. Ce code est donc un **code à longueur variable non ambigu**.

<Container type="info">

* Code variable (compressé): 1000 synboles par seconde * la longueur moyenne = 1750 bps
* Longueur moyenne: $\frac{20\cdot1+10\cdot2+5\cdot(3+3)}{40}=1.75$ bit/symbole
> → cours: notions de: quantité de décision et débit binaire, longueur moyenne, algorithmes de compression Shanon-Fano et Huffman

</Container>

### Le français
>Un texte dans une langue naturelle (p.ex. le français), codé en ISO-8859-1 (Latin-1).
Toutes les lettres ont-elles la même probabilité ? (indication: que fait le
Morse?)
Toutes les séquences de lettres sont-elles équiprobables ?

Intuitivement sur 8 bits. Mais chaque lettre a une probabilité différente: On peut faire comme le Morse ou comme sous source 5 (→ cours: les symboles les plus fréquents doivent être codés sur moins de bits; sources sans mémoire, réduction de la redondance intra-symbole).

De plus, on peut aussi réduire la redondance **inter-symbole** en tenant compte du fait que certaines lettres sont plus probables après d'autres (→ cours: réduction de la redondance inter-symbole: sources avec mémoire, algorithme de Lempel-Ziv).