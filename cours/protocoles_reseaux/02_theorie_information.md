---
title: Théorie de l'information
date: 2018-09-25
author: Sol, Michael
sidebar: auto
---

* [Cours](https://ssl.horus.ch/~schaefer/bin/view/HEArc/InformationEtCodage)
* [Exercices](https://ssl.horus.ch/~schaefer/bin/view/HEArc/CorrigeExerciceTheorieInfo)

<br>

> Claude Shannon, des laboratoires <Def def="Connu pour l'invention du transistor ainsi que d'UNIX ! Fait aujourd'hui partie du groupe Lucent.">Bell</Def> décrit en 1948 les bases de la théorie de l'information en communication électronique.

## Sources

* Cours prof. Shaefer (He-arc)
* [Wikipedia](https://wikipedia.org)

## Information

L'information traitée par les ordinateurs n'est en général pas codée de façon optimale pour la transmission. Un texte codé en ASCII contient une grande **redondance** ce qui signifie qu'il est possible de **définir un autre codage** de la même information mais qui utilise **moins** de place.

Le taux d'erreur est bien plus grand sur les lignes de télécommunication que sur le bus d'un PC. Il faut donc préparer les données pour les transmettre dans de bonnes conditions. On peut facilement constater que le code ASCII ne permet pas de détecter des erreurs de transmission car otutes les combinaisons de valeurs des 7 bits du code sont des valeurs admissibles. Pour détecter, voir corriger des erreurs de transmission, il faut mettre en place des algorithmes visant à augmenter la redondance de l'information.

## Codage

Coder, c'est représenter un alphabet donné (ASCII, UNICODE, ...) sous <Def def="bits qui pourront être transmis par la couche physique">forme informatique</Def>. La forme du codage est importante, elle détermine l'<Def def="et donc les performances">éfficacité</Def> ainsi que la résistance aux erreurs de transmission. On distingue le **codage de source** et le **codage de voie**  (ou de canal):

<Media
    src="https://i.imgur.com/A5qEHhL.png"
    caption="codage de source et de voie"
    center="true"
    width=650
/>

* Le **codage de source** a pour but de <st c="r">réduire la redondance</st>. C'est ici qu'on retrouve les **algorithmes de compression** et de décompression. La compression peut se faire **avec** pertes d'information (compression audio et vidéo) ou **sans** pertes pertes. Ces données sont beaucoup plus sensibles aux erreurs de transmission.
* Le **codage de voie** a pour but de <st c="r">protéger les données contre les perturbations</st>. On réintroduit un peu de redondance dans le but de détecter (et éventuellement) de corriger les erreurs de transmission créées par les perturbations.


## Différences entre les types de sources

<Container type="info">

Le terme **analogique** désigne les appareils, notamment instruments de mesure et de communication, ainsi que les méthodes de calcul qui **représentent une grandeur physique par une autre**. 

**Exemple:** Un thermomètre indique la température à l'aide d'une hauteur de mercure sur une échelle graduée. La longueur du fluide est **analogue** à la température. C'est donc un instrument analogique.

Le mode analogique s'oppose au mode **numérique** qui suppose une **quantification**. [Lire la suite](https://fr.wikipedia.org/wiki/Analogique)

</Container>

### Domaine de valeurs de la source

* **Sources continues (analogiques)**
    * Un courant $A$, une tension $V$, une intensité lumineuse, ...
    * Peuvent se convertir en sources discrètes par [conversion A/D](https://ssl.horus.ch/~schaefer/bin/view/HEArc/DemoCodecsTelephonie)

<br>

* **Sources discrètes (numériques)**
    * alphabet fini (lettres, chiffres, bits, groupes de bits...)

### Dépendances statistiques des symboles émis par la source

* **Sources sans mémoire (triviale)**: pas de dépendance inter-symboles
    * Les symboles générés sont indépendants les uns des autres (rare)
        * plus simple à modéliser et à compresser

<br>

* **Sources avec mémoire**: dépendance inter-symboles (source de Markov)
    * La probabilité d'apparition d'un symbole dépend des symboles précédents
        * Le nombre de symboles dont on doit tenir compte détermine l'ordre de la source
    * Exemple: Les langues naturelles:
        * En français, la probabilité d'un _h_ après un _t_ est plus grande qu'un _q_ après un _t_
        * Modélisable par des [chaînes de Markov](https://en.wikipedia.org/wiki/Markov_information_source):
            * Automate à états (depuis l'état actuel, un événement donne un état futur)
            * L'état résume suffisamment d'informations sur le passé (<Def def="Méthode de calcul qui fournit rapidement une solution réalisable mais pas nécessairement optimale pour un problème dont la solution optimale serait beaucoup plus complexe">heuristique</Def>)


## Conversion A/D

<br>

La conversion analogique/digitale comporte trois phases:

<Col proportions="6/6" vAlign="0">
<template slot="left">

1. **Échantillonnage**: Effectué à 2 fois la fréquence maximale, ce qui d'après le thèorème de Nyquist est alors garanti sans pertes d'information
    * Pour garantir Nyquist, il faut ajouter un filtre au signal. Par exemple, en téléphonie, la bande passante est de 300 à 3400 Hz. On échantillonne donc à f = 8Khz. Il est indiqué de mettre un filtre passe-bas qui assure la coupure vers 4 kHz (grande atténuation).
2. **Quantification**: On décide combien d'information on va perdre (**perte controlée**)
    * Nombre d'escaliers
    * Largeur des escaliers (constante, variable, adaptative)
    * Bruit de quantification (erreur: proportionnel à 1/2 intervalle de quantification)


</template>
<template slot="right">

<Media
    src="https://i.imgur.com/PYodYoL.png"
    url="https://www.avex-asso.org/dossiers/wordpress/wp-content/uploads/2010/03/echantillonnage1.gif"
    width=450
/>


</template>
</Col>

3. **Codage**: On décide de comment on représente les valeurs
    * La perte **peut** être décidée ici (compression avec perte)

</Spoiler>

## Quantité de décision $D$

Si on a $n$ éléments à différencier (dans le contexte d'une source discrète comportant $n$ symboles distincts), l'envergure de la décision à prendre à chaque symbole est nommée la **quantité de décision**.

* C'est le **nombre de bits** nécéssaires pour coder les $n$ symboles
* Au minimum égale à l'entropie
* Ne tient pas compte de la répartition des symboles (triviale)

$$D=log_2(n)$$


<Container type="info">

**Le débit binaire** exprimé en bits par seconde ou **bps**, peut être vu comme la dérivée de $D$ en fonction du temps $t$. On l'appelle souvent le **débit de décision**. Lorscqu'on parle du débit binaire maximum d'un canal, on note souvent ce débit $C$ (Capacité d'un canal).

</Container>


## Quantité d'information $H_i$

<br>

Chaque symbole $i$ d'une source porte une certaine **quantité d'information** $H_i$ qui dépend de sa **probabilité d'apparition** $P_i$. 
* Les symboles rares portent une plus grande quantité d'information: On les code sur plus de bits pour permettre de coder les symboles qui apparaissent souvent sur moins de bits.
* Unité: _Shannon_ $sh$ qui correspond à **1 bit**.

$$H_i = -log_2(P_i)$$


**Exemple de calcul:**

| Élément | Occurences | $P_i$         | $H_i$                     |
|---------|------------|---------------|---------------------------|
| A       | 4          | $\frac{4}{8}$ | $-log_2(\frac{1}{2}) = 1$ |
| B       | 1          | $\frac{1}{8}$ | $-log_2(\frac{1}{8}) = 3$ |
| C       | 2          | $\frac{2}{8}$ | $-log_2(\frac{1}{4}) = 2$ |
| D       | 1          | $\frac{1}{8}$ | $-log_2(\frac{1}{8}) = 3$ |


## Entropie $H$
C'est la **mesure générale du désordre**. Plus il y a d'ordre (de structure) dans un système, moins il y a d'entropie.

Dans le contexte d'une source discrète, l'entropie:
* Est son **aptitude à produire de l'information**.
* C'est la **quantité moyenne d'information** calculé sur l'ensemble des symboles.
* Est **maximale** si tous les symboles sont **équiprobables** (désordre complet! Aléatoire).
* Donne le nombre de bits potentiel minimal pour représenter un symbole (dans un codage optimal).
* S'exprime en $\frac{sh}{symbole}$.

$$H = \sum_{i}P_i \; H_i = - \sum_{i}P_i \; log_2(P_i)$$

<Container type="danger">

Cette formule n'est valable que pour une source <Def def="Avec des symboles indépendants">sans mémoire</Def>. Par exemple, elle n'est pas valable pour l'entropie de la langue française dont les symboles ont une dépendance entre eux (<Def def="Donc une source avec mémoire.">dépendance inter-symboles</Def>).

</Container>

## Longueur moyenne d'un code $l_m$

Si on connaît pour chacun des $n$ symboles son code binaire de longueur $l_i$, alors avec suffisamment de symboles produits, la longueur moyenne par symbole sera:

$$l_{moy}= \frac{1}{n} \sum_{i}l_i \; P_i$$


## Redondance $R$
Lorsqu'on a codé une source d'une certaine façon, on veut **pouvoir évaluer le potentiel de compression** de cette source. Etant donné que l'entropie définit la borne minimale de codage, l'envergure de la décision du codage utilisé sera au mieux égale à l'entropie. La **redondance** est le potentiel de compression de la source et est définie par la différence entre la quantité de décision $D$ et l'entropie $H$:

$$R= D- H$$



<Container type="info">

La compression (sans perte) vise à baisser la redondance

</Container>


## Compression

### Sans perte

**De manière à diminiuer la redondance de symboles** (p.ex. parce que leur répartition est connue généralement ou localement pour le fichier ou le tambon d'entrées/sortie considéré), on peut compresser sans perte de différentes manières:
* **Compression entropique classique**: En considérant la répartition statistique locale ou globale de chaque symbole pris indépendamment (Huffman, Shannon-Fano, ...)
* **Compression différentielle**: En considérant que les données ne changent que très lentement (périférique de mesure, différence entre deux images fixes, ...)
* **Compression RLE (Run Length Encoding)**: En considérant que certains symboles peuvent se répéter.
* **Compression Lempel-Ziv**: En Considèrant la répartition de sous-chaines ou de sous-textes.

<Container type="info">

* La seule de ces mèthodes qui n'utilise **pas** de dépendance entre les symboles est la **compression entropique**.
* Atteindre une redondance de $0$ n'est en général pas possible (car on code souvent sur un nombre entier de bits).
* En pratique de combinaisons de ces techniques sont souvent employées.

</Container>


<Spoiler tag="Algorithmes">

<br>



#### Code de Huffman
1. Classer les symboles par ordre de probabilité descendante
2. Attribuer aux deux symboles de probabilité moindre les symboles 1 et 0
3. Remplacer les deux symboles dans la liste par un nouveau symbole formé de la concatnéation des noms des symboles et la somme de leurs probabilités et reclasser la liste
4. Répéter la procédure jsuqu'à ce que tous les symboles aient une transcription disctincte

Ceci crée un arbre. On attribue des mots de longueurs variables aux caractères.

<br>

<vs-tabs color="primary" vs-alignment="center">
<vs-tab vs-label="Exemple 1">

<Media
    style="max-height=300px"
    src="https://imgur.com/ALzyek8.gif"
    center="true"
    width=350
/>

</vs-tab> 
<vs-tab vs-label="Exemple 2">

<Media
    style="max-height=300px"
    src="https://imgur.com/uCuuCrb.gif"
    center="true"
    width=350
/>

</vs-tab>
</vs-tabs>

* Chaque code doit être unique
* Chaque code doit être <Def def="Aucun code ne doit être le même que le début d'un autre">instantanné</Def>
L'algorithme d'Huffman nous permet de facilement créér un codage qui répond à ces critères.


<Container type="info">

Dans la plupart des cas Huffman est le meilleur algorithme **pour les sources sans mémoire**.

<br>

</Container>

#### Code de Shannon-Fano
1. Classer les symboles par ordre de probabilité descendante
2. Diviser l'ensemble des symboles en deux sous-ensembles aussi équiprobables que possible
3. Attribuer à chaque sous-ensemble un code binaire distinct (0,1)
4. Répéter la procédure pour chaque sous-ensemble jusqu'à ce que chaque symbole ait une transcription binaire distincte

</Spoiler>



### Avec perte

Procédé de compression qui à la décompression ne restitue pas l'ensemble des informations du départ. Il mêne à une **perte irréversible**. L'application principale de la compression avec perte est pour le stockage et la **transmission de données multimedia destinées à la restitution humaine** (fichiers audio, image, vidéo).

* Compression obtenue beaucoup plus importante que celle obtenue par une compression sans perte et s'applique à des sources avec mémoire.

<Container type="info">

La compréhension de la façon dont les sens perçoivent les informations est indispensable pour ne supprimer que les éléments difficilement différentiables. Il est aussi important de comprendre que le processus de compression/décompression ajoute du bruit qui peut nuire à la resitution (**artéfacts**)

</Container>

