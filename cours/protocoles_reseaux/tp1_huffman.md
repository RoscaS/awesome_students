---
title: "Huffman: ex-6 Implémentation php"
date: 2018-11-16
author:  "Michael, Sol"
sidebar: auto
project: true
---


## Entête fichier bin
Dans un fichier binaire il n'y a pas besoin d'entête mais le format de 8 Blocs de 4 bits par ligne doit être respecté.
Sous linux nous pouvons convertir dans un format binaire grâce à la commande :
* `xxd -r -p text > binary`


## Comparaison d'éfficacité 
* **comparaison** : Gzip réduit la taille, même d'un petit fichier alors que notre huffman l'agrandi.
* **explications** : Notre algorithme ne fait que remplacer les lettres du texte par leur code binaire (huffman) ce qui donne des fichiers plus grands. Gzip par exemple, utilise lempel-ziv pour compresser et est donc bien plus performant (intra et inter-symboles).

## Tests :
Nous avons fait plusieurs tests dont l'exercice 3 :

* Table de codage Huffman:
    * `e: 01`
    * `r: 00`
    * `c: 111`
    * `o: 110`
    * `t: 101`
    * `l: 1001`
    * `m: 10001`
    * `k: 10000`

* Texte compressé : `111110000001111101`
* Lorsqu'il y a un espace dans le texte à compresser, l'espace doit être codé et est nommé *ASC 32* dans la table de codage.


