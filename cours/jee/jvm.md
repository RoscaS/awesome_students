---
title: JVM
date: 2019-10-08
author: Sol
sidebar: auto
project: false
hide: false
---

##  Concepts de base d'une JVM

La JVM est une **spécification** (élaborée par Sun) qui décrit la machine virtuelle. C'est dans la JVM que le bytecode Java est interprété et executé. Des implémentations existent pour de nombreuses plateformes. **La JVM, contrairement à Java est dépendante de la plateforme** qui la fait tourner. La JVM s'occupe des actions suivantes:

* Mise à disposition d'un environement d'exécution
* Chargement du code
* Vérification du code
* Interpretation du code
* Exécution du code

### Heap de la JVM

<br>

![Image](https://i.imgur.com/ZuHXQ3A.png)

<br>

* **Heap**:
  * **Young Generation**: 
    * **Eden**: Tous les objets créés dans les méthodes et les classes
    * **Survivor (0 et 1)**: Objets en utilisation ayant survécu à un **GC**. Swap entre zone pleine et vide.
  * **Old Génération**: Contient les objets ayant une longue durée de vie.
    * Objets référencés depuis longtemps
    * Très gros objets (directement créé dans la zone)

<br>

<style>
.JVM-heap { font-size: 18px; font-weight: bold; position: relative; left: 20px }
.JVM-memory { padding-top: 10px; padding-bottom: 20px; }
.JVM-diag-box { font-size: 18px; padding:10px; font-weight: bold; color: white; border-radius: 8px; border: 2px solid black; }
.young-gen { background-color: #3eaf7c; margin-right: 20px; }
.old-gen { background-color: #2973b7; }
.perma { background-color: #F92672; margin-right: 20px; }
.cache { background-color: #CCCCCC; }
</style>

<template>
<section class="JVM-memory">
<vs-row>
<vs-row>
<span class="JVM-heap">Heap</span>
</vs-row>
<vs-col vs-type="flex" class="java-diag-box" vs-justify="center" vs-align="center" vs-w="7">
<vs-col class="JVM-diag-box young-gen" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="4">
<span>Young Generation</span>
</vs-col>
<vs-col class="JVM-diag-box old-gen" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="7">
<span>Old <br> Generation</span>
</vs-col>
</vs-col>
<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">
<vs-col class="JVM-diag-box perma" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
<span>Permanent Generation</span>
</vs-col>
<vs-col class="JVM-diag-box cache" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
<span >Code Cache</span>
</vs-col>
</vs-col>
</vs-row>
</section>
</template>

<br>

### Garbage collector

Fonctionnalité de la JVM qui gère la mémoire notamment en libérant celle-ci des objets qui ne sont plus utilisés. Il participe activement à la bonne integrité de la JVM: Une instruction ne peut jamais utiliser un objet qui n'existe plus en mémoire. Il possède notament les rôles suivants:
* Assurer que tout objet encore référencé n'est pas supprimé
* Récupère la mémoire des objets inutilisés (sans référence)
* Éventuellement défragmenter la mémoire en fonction de l'algorithme utilisé
* Intervient dans l'allocation de la mémoire pour les nouveaux objets (lié au point précédent)

#### Algoritmes du GC

##### Mark & Sweep

* À Chaque cycle de GC:
  * Phase **Mark**:
    * Instanciation d'un objet <Fa fa="arrow-right"/> marqué `false`
    * Parcours des instances et marquage des éléments atteignables <Fa fa="arrow-right"/> `true`
  * Phase **Sweep**
    * Parcours des éléments du Heap
    * Suppression de tout ce qui est marqué `false`
    * Les éléments restants sont marqués `false`

##### Stop & Copy

* Espace du Heap est divisé en deux semi-espaces
* Les objets sont alloués dans le semi-espace 1
* Lors du GC, les objets référencés sont copiés dans le sous-espace 2

![Image](https://i.imgur.com/4U81wHs.png)

## Recap

* Expliquez ce qu'est la Machine Virtuelle Java?
  * Une **spécification** qui décrit la machine virtuelle.
* Expliquez ce qu'est le Java Development Kit (JDK)?
  * Un JRE plus des outils de développement
* Expliquez ce qu'est le Java Runtime Environment (JRE)?
  * Environement minimum nécessaire à faire tourner des applications Java.
* Qu'est ce que JEE?
  * Java Entreprise Edition
  * **Spécification** pour la technique Java de Sun/Oracle
  * Particulièrement destinée aux applications d'entreprise.
  * Ensemble de spécifications définies par SunOracle
* Qu'est ce qu'un serveur d'application JEE?
  * Contient l'environement nécessaires aux services fournits par JEE