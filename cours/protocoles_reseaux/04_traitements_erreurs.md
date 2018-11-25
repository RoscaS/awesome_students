---
title: Traitement des erreurs
date: 2018-15-04
author: Sol
sidebar: auto
project: false
---

## Erreurs

Les erreurs de transmission sont causées par la mauvaise interprétation d'un moment (état du signal électrique): 
* Soit en raison du bruit 
* Soit en raison d'un désalignement de la fréquence de transmission. 
 
Les erreurs les plus classiques sont liées au bruit et à la distance entre deux états possibles du signal électrique (évaluée par le rapport signal sur bruit). De plus, un moment peut bien sûr encoder un ou plusieurs bits.

Pour ces raisons, les bits en erreur arrivent souvent en rafales (par groupe). Les meilleurs codes peuvent détecter, voire parfois même corriger, de très longues rafales d'erreur.

## Placement dans les couches
La détection ou correction d'erreurs est en général effectuée en couche 2 sauf quelques exceptions:
* Viterbi (treillis) peut être effectué en couche 1
* Certains protocoles ont de la détection d'erreur supplémentaire en couche 3, voire 4, voire 7
    * X.25: couche 2 et 4
    * TCP et UDP: checksums en couche 4 (optionnels pour UDP)
    * HTTPS: CRC ou équivalent en couche 7

<Container type="info">

D'autres erreurs peuvent aussi survenir dans le matériel (bus de données, mémoires, etc) suite à des défectuosités non liées à la liaison. C'est pour cela que les protocoles de couche 4 et parfois de couches supérieures ajoutent des checksums et CRC. Le matériel informatique moderne offre des protections à plusieurs niveaux (CRC dans SATA et dans quasiment tous les bus séries, parités sur le bus PCI, ECC dans les mémoires, etc). **Aucun code détecteur ne peut détecter toutes les possibilités d'erreur**, ce n'est que relativement aux erreurs probables que l'on peut assurer la meilleure efficacité possible d'un code: le choix du code est donc fondamental suivant la situation.

</Container>

## Groupe d'erreur (error burst)
Est caractérisé par:
1. Le premier et le dernier bit sont faux
2. Les bits entre le premier et le dernier sont justes ou faux
3. Après un groupe de longueur $B$, il faut au moins $B$ bits corrects
4. Ou alors: $C$ bits corrects après le groupe (p.ex. 1groupe de 1 bit suivi de $C$ bits corrects)
5. La grandeur du groupe est le nombre de bits entre le premier et le dernier (y compris premier et dernier)