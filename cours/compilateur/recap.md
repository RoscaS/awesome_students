---
title: Recap
date: 2019-10-04
author: Sol
sidebar: auto
project: false
hide: false
---

## Classification des grammaires
> Hiérarchie de Chomsky

## Compilateur
* En entrée le texte d'un programme dans un langage 
* En sortie le texte dans un autre langage 
* Preserve la signification
* N'introduit pas d'erreurs
* Optimise le code
* Fournit un bon diagnostic d'erreur
* **Analyse-synthèse:**
  * **Analyse:** vise à comprendre un objet en le décomposant. Etablit des critères pour identifier les composants.
  * **Synthèse:** opération par laquelle on rassemble en un tout homogène divers éléments d'un domaine de connaissance.

## Analyse lexicale (scanning)
Étape d'identification des lexèmes.

* En entrée d'un compilateur un fichier source
  * Essentiellement une suite de caractères
* Regrouper ces caractères pour former des *mots* (**lexèmes**, tokens)
  * nombres
  * identificateurs
  * mots réservés
  * ...

<Container type="info">

* Si un "truc" peut être séparé de ses voisins par des espaces sans changer la signification, c'est un lexème.
* Sinon, pas.
* Les commentaires et les espaces ne sont pas des lexèmes. ils sont simplement mis de coté par le pré-compilateur

</Container>

## Analyse syntaxique (Parsing)

À la sortie de l'**analyse lexicale**, on a séparé et identifié des **lexèmes** mais ces derniers sont toujours complètement "à plat". Il est maintenant nécessaire de pouvoir comprendre la structure du programme. Autrement dit, on a séparé les *mots* mais on voudrait connaitre la **structure grammaticale** de la phrase.

