---
title: Introduction au codage et à la compression de l'information
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
>[A-D] ne sont pas <definition def="Même chance d'apparaitre">équiprobable</definition>