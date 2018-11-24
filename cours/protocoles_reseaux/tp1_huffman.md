---
title: "Huffman: ex-6 Implémentation php"
date: 2018-11-16
author:  "Michael, Sol"
sidebar: auto
project: true
---

## Liens

* [repo](https://github.com/RoscaS/php_huffman)

## Structure de données
Le code de huffman lie un caractère (clé) à une combinaison binaire (valeur) et il n'y aura jamais de valeur sans clé. L'utilisation de tableaux associatifs nous semble donc parfaitement adaptée.

## Entête fichier bin
Dans un fichier binaire il n'y a pas besoin d'entête mais le format de 8 Blocs de 4 bits par ligne doit être respecté.

## Comparaison d'efficacité 
Le poids en bits du résultat de la compression est tout simplement le nombre de caractères qui composent la string "compressée" (sous forme de 0 et de 1 textuels). Avec cette information, nous testons 3 fichiers texte entre notre algorithme et Gzip:

| Sans compression | Huffman   | Gz     |
| ---------------- | --------- | ------ |
| 124 B            | 63 B      | 199 B  |
| 4.2 KB           | 1.8 KB    | 1.7 KB |
| 39.1 KB          | 21.419 KB | 3.5 KB |

Sur de très petits fichiers, notre implémentation de Huffman a l'avantage mais cette différence n'est pas pertinente vu la taille du fichier. Gz est plus performant car avant d'utiliser **Huffman** (qui s'occupe de la redondance intra-symboles) il utilise **Lempel–Ziv–Welch** qui supprime la redondance inter-symboles.

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


