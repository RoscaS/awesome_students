---
title: Cours n°2
date: 2018-09-25
author: Michael
sidebar: auto
---

## Code de Shannon-Fano
1. classer les symboles par ordre de probabilité descendante
2. diviser l'ensemble des symboles en deux sous-ensembles aussi équiprobables que possible
3. attribuer à chaque sous-ensemble un code binaire distinct (0,1)
4. répéter la procédure pour chaque sous-ensemble jusqu'à ce que chaque symbole ait une transcription binaire distincte

Calculer l'entropie pour la prochaine fois (truc rétroprojectorisé)

## Code de Huffman
1. classer les symboles par ordre de probabilité descendante
2. attribuer aux deux symboles de probabilité moindre les symboles 1 et 0
3. remplacer les deux symboles dans la liste par un nouveau symbole formé de la concatnéation des noms des symboles et la somme de leurs probabilités et reclasser la liste
4. répéter la procédure jsuqu'à ce que tous les symboles aient une transcription disctincte

Ceci crée un arbre. On attribue des mots de longueurs variables aux caractères.

**Dans la plupart des cas huffman est le meilleur algo pour les sources sans mémoire**

## Code de Lempel-Ziv (sous-chaines)
Au contraire de Shannon-Fano et Huffman, cet algorithme permet de considérer les dépendances inter-symboles: il est basé sur la détection de sous-chaines.
1. on attribue des mots de longueurs fixes à des groupes de caractères
2. le codeur et le décodeur gèrent de façon synchrone une tbale attribant un code à des groupes de caractères
3. le codeur cherche dans la table la plus longue chaine identique aux prochains caractères à coder
4. il transmet l'index de cette chaine suivie du cractère suivant du texte
5. il ajoute la nouvelle chaine (l'ancienne plus un nouveau caractère) a la table
6. l'index 0 est utilisé pour transmettre un caractèr absent de la table

## Codage arithmétique
principe: coder une suite de symboles par un nombre rationnel entre 0 et 1, dans la base du nombre de symboles distincts (optimal dans tous les cas mais très lent).

## Autres idées pour la compressoin
* changer l'ordre des caractères dans le texte (block-sorting) de manière à prifiter de l'effet de localité, avant la compression; p.ex. bzip2
* combiner compressoin de sous-chaines, suivie d'une compression entropique classique (p.ex. Lempel-Ziv-Welch suivi d'un Huffman)
* coder les répétitions en tant que tel (RLE), p.ex. le format GIF ou le fax.

## Le codage pour la transmission
//TODO

Codage de source -> compression
Codage de voie -> ajouter de la redondance
Codage de ligne -> ??
ne pas confondre les trois.