---
title: Analyse syntaxique
date: 2019-10-09
author: Sol
sidebar: auto
project: false
hide: false
---

<Media
    src="https://i.imgur.com/Wk5pEni.png"
    center="true"
/>

À la sortie de l'**analyse lexicale**, on a séparé et identifié des lexèmes mais ces derniers sont toujours complètement "à plat". On souhaiterait maintenant pouvoir comprendre la structure du programme. Autrement dit, on a séparé les mots, mais on aimerait connaitre la structure grammaticale de la phrase:

![Image](https://i.imgur.com/3SC1sin.png)

Ce traitement s'appelle **Analyse syntaxique** ou **Parsing**.

Les méthodes d'analyse syntaxique s'apparentent à celles de l'analyse lexicale:
* On se donne un moyen de **décrire formellement le langage** à analyser.
* Éventuellement, on génère automatiquement un analyseur à partir de cette description.

À la différence qu'ici, on ne se content plus d'une simple classification, on veut **récupérer la structure**.

<Fa fa="arrow-right"/> Les expressions régulières ne sont plus suffisantes.

En effet, ces dernières ne permettent pas d'exprimer les structures imbriquées, par exemple vérifier le nombre de parentèses ouvrantes et fermantes dans:
* <st c="r">(</st> <st c="g">(</st> 12 + <st c="b">(</st>5 * 2 <st c="b">)</st> / 7 <st c="g">)</st> - <st c="g">(</st>4 * 3 <st c="g">)</st> <st c="r">)</st> + 1

Comme les structures imbriquées sont centrales dans les langages de programmation, il est nécessaire de trouver un nouveau formalisme.

## Grammaire BNF/ EBNF

Une grammaire en Forme de Backus-Naur (**BNF**) est composée de:
* Une liste de **lexèmes** appelés <st c="r">terminaux (**T**)</st>
* Une liste de symboles intermédiaires appelés <st c="g">non-terminaux (**NT**)</st>
* Un <st c="b">symbole de départ</st> (non-terminal)
* Un ensemble de règles de grammaire de la forme:
  * <st c="b">NT</st> <Fa fa="arrow-right"/> <small>suite de</small> <st c="g">**T**</st> <small>et</small> <st c="r">**NT**</st>
  * <st c="b">GV</st> <Fa fa="arrow-right"/> <st c="g">Verbe</st> <st c="r">GN</st>
  * Dans ces regles, les alternatives peuvent être notées avec "|":
    * <st c="b">GV</st> <Fa fa="arrow-right"/> <st c="g">Verbe</st> <st c="r">GN</st> | <st c="g">Verbe</st>
* On peut aussi accepter les `*`, `?` et `+` avec la même signification que pour les expression régulières. On parle alors de Forme de Backus-Naur Étendue (**EBNF**)

## Arbre de dérivation

Un arbre de dérivation ou arbre syntaxique est un arbre dont les noeuds sont étiquetés par des symboles grammaticaux de telle façon que:
* Les <st c="r">feuilles</st> sont étiquetées par des <st c="r">symboles terminaux</st>
* Les <st c="g">noeds intérieurs</st> par des <st c="g">symboles non-terminaux</st>
* La racine est étiquetée par le <st c="b">symbole de départ</st> de la grammaire

Les <st c="r">symboles terminaux</st> étiquetant les feuilles correspondent à la suite de lexèmes d'entrée, dans l'ordre.

<br>
<br>

**Exemple:**

* <st c="r">Symboles terminaux</st> (lexèmes): $\{le,\;la,\;chat,\;souris,\;mange\}$
* <st c="g">Symboles non terminaux</st>: $\{S,\;GN,\;GV,\;DET,\;NOM,\;VERBE\}$
* <st c="b">Symbole de détpart</st>: $S$

<Col proportions="6/6" vAlign="0">
<template slot="left">

* **Règles de la grammaire**:
  * <st c="b">$S$</st> <Fa fa="arrow-right"/> <st c="g">$GN,\;GV$</st>
  * <st c="b">$GN$</st> <Fa fa="arrow-right"/> <st c="g">$DET,\;NOM$</st>
  * <st c="b">$GV$</st> <Fa fa="arrow-right"/> <st c="g">$VERB,\;GN$</st>
  * <st c="b">$DET$</st> <Fa fa="arrow-right"/> <st c="r">$le$</st> | <st c="r">$la$</st> | <st c="r">$les$</st> | ...
  * <st c="b">$NOM$</st> <Fa fa="arrow-right"/> <st c="r">$chat$</st> | <st c="r">$souris$</st> | <st c="r">$chien$</st> | ...
  * <st c="b">$VERBE$</st> <Fa fa="arrow-right"/> <st c="r">$mange$</st> | <st c="r">$boit$</st>
* **Phrase à analyser**:
  * "$le\;chat\;mange\;la\;souris$"

</template>
<template slot="right">

<Media
    style="margin-top:-16px; margin-left: -20px"
    src="https://i.imgur.com/t4Ih7mO.png"
    center="true"
    width="350"
/>

</template>
</Col>

<br>

Cette grammaire permet de décrire des phrases comme:
* "Le chat mange la souris"
* "La souris mange le chat"
* ... mais aussi
* "Le chat mange **le** souris"




## Grammaire ambigue

Une grammaire est dite ambigue dans le cas où il existe plusieurs arbres d'analyse différents pour une même chaine d'entrée.

**Exemple**:

* **Règles de la grammaire**:
  * <st c="b">op</st> <Fa fa="arrow-right"/> '<st c="g">$+$</st>' | '<st c="g">$*$</st>'
  * <st c="b">expression</st> <Fa fa="arrow-right"/> <st c="g">nombre</st> | '<st c="g">(</st>' <st c="g">expression</st> '<st c="g">)</st>' | <st c="g">expression</st> <st c="g">op</st> <st c="g">expression</st>
* **Chaine d'entrée:**
  * $1\;+\;2\;*\;3$

<Container type="info">

Idéalement, les grammaires ne devraient jamais être ambigues, mais ce n'est pas forcément possible.

</Container>

Pour lever l'ambiguité, il est possible:
* D'ajouter des informations complémentaires (comme des ordre de priorité,...)
* Modifier la grammaire

## Arbre abstrait (AST)

C'est un abre tiré de l'arbre de dérivation mais dont la structure est simplifiée pour ne contenir que les éléments pertinents:


<Col proportions="6/6" vAlign="0">
<template slot="left">

**Arbre de dérivation:**

![Image](https://i.imgur.com/9gBbkrT.png)

</template>
<template slot="right">

**Arbre abstrait:**

![Image](https://i.imgur.com/v32inWX.png)

</template>
</Col>

Il n'y a pas de regles formelles concernant ce que doit contenir un **arbre abstrait**. Sa mission est de contenir ce qui est utile pour la suite, c'est donc un **choix de conception**.

## Methodes

Essentiellement, deux grandes approches.

### Analyse descendante/ascendante


Il existe de nombreses façons de réaliser ces deux approches. Chacun représente un compromis entre:
* Puissance (nombre de grammaires/langages pour lesquelles ça fonctionne)
* Rapidité
* Mémoire nécessaire

#### 1. Analyse descendante
* On part du symbole de départ
* On constuit l'arbre en direction des feuilles
* Un noeud est toujours construit avant tous ses enfants

#### 2. Analyse ascendante
* On part des feuilles
* On les organise progressivement en arbre
* Un noeud est toujours construit après tous ses enfants

### Générateurs

Comme pour l'analyse lexicale, il existe des générateurs de code qui prennent en entrée une description de la grammaire ainsi que quelques informations annexes et qui produisent en sortie le code d'un analyseur syntaxique. Les avantages de cette façon de faire son les mêmes que pour l'analyse lexicale:
* Souplesse en cas de changement de grammaire
* Moins d'erreurs
* Algorithmes optimisés

#### Yacc

* Yet another compiler compiler:
* Générateur d'analyseur le plus largement utilisé
* Génère des analyseurs **ascendants** pour des langage <Def def="Look-Ahead Left-to-right Rightmost derivation">**LALR(1)**</Def>

#### Bison

* Version GNU de Yacc
* Produit du C ANSI
* Comme pour Lex, ce programme à été imité, modifié de nombreuses fois pour différents langages

## Analyse descendante

**Analyse descendante**: Déduit les productions du haut (**axiomes**) vers le bas (**feuilles**)

### LL(1)

<br>

<st c="b">L</st><st c="r">L</st>(<st c="g">k</st>):
* <st c="b">Left to right</st>: Lit l'entrée de gauche à droite
* <st c="r">Leftmost dérivation</st>: Produit une dérivation gauche
* <st c="g">k</st>: Représente le nombre de symboles anticipés (Look ahead) et non consommés qui sont utilisés pour prendre des décisions d'analyse syntaxique. D'habitude, <st c="g">k</st> vaut 1 **et est souvent omis**.

Soit:

* **Grammaire**:
  * <st c="b">input</st> <Fa fa="arrow-right"/> `expression` `EOF`
  * <st c="b">expression</st> <Fa fa="arrow-right"/> `term` `rest_expression`
  * <st c="b">term</st> <Fa fa="arrow-right"/> `IDENTIFIER` | `parenth_expr`
  * <st c="b">parenth_expr</st> <Fa fa="arrow-right"/> `(` `expression` `)`
  * <st c="b">rest_expression</st> <Fa fa="arrow-right"/> `+` `expression` | $\epsilon$

<br>

<Media style="margin-left:30px" src="https://i.imgur.com/heagptR.png" />

<br>


On peut voir cette grammaire d'une manière opérationnelle:

> Je peux reconnaitre une `expression` en commençant par reconnaitre un `term`, mais alors je dois nécessairement avoir un `rest_expr` après...

A chaque règle de la grammaire correspond une fonction:

```py
def input():
    return expression() and require(token('EOF'))

def expression():
    return term() and require(rest_expression())

def term():
    return token('identifier') or parenth_expr()

def parent_expr():
    return token('(') and require(expression()) and require(token(')')

def rest_expression():
    return (token('+') and require(expression())) or True
```

La fonction `token()` permet de regarder si le prochain lexème est du type requis et le cas échéant de le "consommer":

```py
def token(t):
    # LATok = Look-ahead token
    if not LATok:               # case: end of tokens => return True
        return t == 'EOF'
    if type(LATok) != t:        # case: inexpected token => return False
        return False
    LATok = lex.token()         # case: expected token, we consume the
    return True                 # current and go for the next token
```

La fonction `require()` permet de signaler une erreur si quelque chose ne s'est pas passé comme prévu:

```py
def require(found):
    if found:
        return True
    error(f"Error while parsing near token {LATok.value}")
```

<Spoiler tag="Exemple d'exécution">

<br>

![Image](https://i.imgur.com/KLwYk0G.png)

<br>

![Image](https://i.imgur.com/UYvCqMF.png)

<br>

</Spoiler>

Cette méthode permet de reconnaitre la syntaxe en ne prenant les décisions que sur la base d'un seul lexème en avance **pour autant que la grammaire s'y prête**. Par exemple, une grammaire récursive à gauche n'est pas LL(1):
* E <Fa fa="arrow-right"/> `E` `+` `identifier`

Une grammaire qui fonctionne avec cet algorithme est dite LL(1).

## Analyse ascendante

Déduit les productions du bas (**feuilles**) vers le haut (**axiome**).

<br>

<Col proportions="6/6" vAlign="5">
<template slot="left">

Il existe plusieurs variantes de l'algorithme:
* LR(0), LR(1), SLR(1), LALR(1), ...
* La variante la plus utilisée est <Def def="Look-ahead LR">LALR(1)</Def>
  * Simplification des langages LR(1)
  * Bon compromis entre puissance/efficacité/mémoire
  * Utilisé par les générateurs de code (Yacc/Bison)

</template>
<template slot="right">

![Image](https://i.imgur.com/xDMGSNr.png)

</template>
</Col>


### LR

Utilisé pour les **grammaires non contextuelles**

<br>

<st c="b">L</st><st c="r">R</st>(<st c="g">k</st>):
* <st c="b">Left to right</st>: Lit l'entrée de gauche à droite
* <st c="r">Rightmost dérivation</st>: produit une dérivation à droite
* <st c="g">k</st>: Représente le nombre de symboles anticipés (Look ahead) et non consommés qui sont utilisés pour prendre des décisions d'analyse syntaxique. D'habitude, <st c="g">k</st> vaut 1 **et est souvent omis**.

Soit:

* **Grammaire**:
  * <st c="b">input</st> <Fa fa="arrow-right"/> `expression` `EOF`
  * <st c="b">expression</st> <Fa fa="arrow-right"/> `term` `rest_expression`
  * <st c="b">term</st> <Fa fa="arrow-right"/> `IDENTIFIER` | `parenth_expr`
  * <st c="b">parenth_expr</st> <Fa fa="arrow-right"/> `(` `expression` `)`
  * <st c="b">rest_expression</st> <Fa fa="arrow-right"/> `+` `expression` | $\epsilon$

<br>

<Media style="margin-left:30px" src="https://i.imgur.com/Zntb5th.png" />

### Shift-reduce

* S'utilise avec les langages **LR**
* On consomme les lexèmes de la chaine d'entrée, de gauche à droite et on les pousse sur une pile
* Deux types d'actions:
  * **Avancer (shift)**: On retire le premier lexème de l'entrée et on l'empile
  * **Réduire (reduce)**: Si le sommet de la pile contient la partie droite d'une règle, on dépile les lexèmes correspondants et on empile la partie gauche de la règle.
* Egalement appelé "shift-reduce parsing"

### Shift-reduce avec LR(0)

<br>
<br>

<Col proportions="3/9" vAlign="0">
<template slot="left">

* **Grammaire:**
  * E <Fa fa="arrow-right"/> `E+E`
  * E <Fa fa="arrow-right"/> `E*E`
  * E <Fa fa="arrow-right"/> `nb`
* **Entrée**
  * 1 + 2 * 3


</template>
<template slot="right">

![Image](https://i.imgur.com/eG3gr3K.png)

</template>
</Col>

<br>

Si les éléments au sommet de la pile correspondent à la partie de droite d'une règle:
* <Fa fa="arrow-right"/> <b>REDUCE</b>
Sinon
* <Fa fa="arrow-right"/> <b>SHIFT</b>

<br>


| Pile        | Entrée                                                             | Décision                                          |
| ----------- | ------------------------------------------------------------------ | ------------------------------------------------- |
|             | <Fa fa="dot-circle" style="font-size:10px; color: red"/> 1 + 2 * 3 | SHIFT <Fa fa="arrow-right"/> 1                    |
| `1`         | 1 <Fa fa="dot-circle" style="font-size:10px; color: red"/> + 2 * 3 | **A) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E`         | 1 <Fa fa="dot-circle" style="font-size:10px; color: red"/> + 2 * 3 | SHIFT <Fa fa="arrow-right"/> +                    |
| `E` `+`     | 1 + <Fa fa="dot-circle" style="font-size:10px; color: red"/> 2 * 3 | SHIFT <Fa fa="arrow-right"/> 2                    |
| `E` `+` `2` | 1 + 2 <Fa fa="dot-circle" style="font-size:10px; color: red"/> * 3 | **B) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E` `+` `E` | 1 + 2 <Fa fa="dot-circle" style="font-size:10px; color: red"/> * 3 | **C) REDUCE R1** (E <Fa fa="arrow-right"/> E + E) |
| `E`         | 1 + 2 <Fa fa="dot-circle" style="font-size:10px; color: red"/> * 3 | SHIFT <Fa fa="arrow-right"/> *                    |
| `E` `*`     | 1 + 2 * <Fa fa="dot-circle" style="font-size:10px; color: red"/> 3 | SHIFT <Fa fa="arrow-right"/> 3                    |
| `E` `*` `3` | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> | **D) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E` `*` `E` | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> | **E) REDUCE R2** (E <Fa fa="arrow-right"/> E * E) |
| `E`         | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> |                                                   |

<br>

<Container type="danger" header="Conflits">

* **Conflits shift-reduce:** Si une réduction est possible mais que le look-ahead token ne permet pas d'exclure une autre réduction.
* **Conflit reduce-reduce**: Si deux réductions différentes sont possibles.

À l'étape 4 de l'exemple précédent, on a un conflit **sift-reduce**. Ce conflit est un signe d'ambiguité dans la grammaire:
* entre (1 + 2) * 3 et 1 + (2 * 3)

</Container>

Pour résoudre les conflits nous avons plusieurs possibilités:
* Modifier la grammaire pour la rendre non-ambigue
  * L'**arbre syntaxique sera différent**
  * Solution la plus "propre" mais pas la plus facile.
* **Anticiper** en allant regarder en avance dans la chaine d'entrée
  * Look ahead tocken LR(0) <Fa fa="arrow-right"/> LR(1)
* Se donner des **lignes de conduites**:
  * Préférer avancer à réduire
  * Entre deux réductions possibles, prendre la première donnée par le programmeur
  * ...
* Indiquer des **priorités** sur les lexèmes:
  * "La multiplication a précédence sur l'addition"
  * Fonctionne bien pour els expressions

### Shift-reduce avec LR(1)

<br>
<br>

<Col proportions="5/7" vAlign="20">
<template slot="left">

* **Grammaire:**
  * E <Fa fa="arrow-right"/> `E+E`
  * E <Fa fa="arrow-right"/> `E*E`
  * E <Fa fa="arrow-right"/> `nb`
  * <st c="b">(Règle de priorité */+)</st>
* **Entrée**
  * 1 + 2 * 3


</template>
<template slot="right">

![Image](https://i.imgur.com/SSxGr3q.png)

</template>
</Col>

<br>

* (a) Les éléments au sommet de la pile correspondent à la partie droite d’une règle.
* (b) Le sommet de la pile plus le look-ahead token (premier lexème de l’entrée) ne concernent aucune règle.
  * Si (a) ET (b) sont vrais :
    * <Fa fa="arrow-right"/>  on <b>REDUCE</b>
  * Sinon :
    * <Fa fa="arrow-right"/>  on <b>SHIFT</b>

<br>



| Pile                | Entrée                                                             | LA Token |           | Décision                                          |
| ------------------- | ------------------------------------------------------------------ | -------- | --------- | ------------------------------------------------- |
|                     | <Fa fa="dot-circle" style="font-size:10px; color: red"/> 1 + 2 * 3 | 1        |           | SHIFT <Fa fa="arrow-right"/> 1                   |
| `1`                 | 1 <Fa fa="dot-circle" style="font-size:10px; color: red"/> + 2 * 3 | +        |           | **A) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E`                 | 1 <Fa fa="dot-circle" style="font-size:10px; color: red"/> + 2 * 3 | +        |           | SHIFT <Fa fa="arrow-right"/> +                   |
| `E` `+`             | 1 + <Fa fa="dot-circle" style="font-size:10px; color: red"/> 2 * 3 | 2        |           | SHIFT <Fa fa="arrow-right"/> 2                   |
| `E` `+` `2`         | 1 + 2 <Fa fa="dot-circle" style="font-size:10px; color: red"/> * 3 | *        |           | **B) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E` `+` `E`         | 1 + 2 <Fa fa="dot-circle" style="font-size:10px; color: red"/> * 3 | *        | `*` > `+` | <st c="g">SHIFT <Fa fa="arrow-right"/> *</st>    |
| `E` `+` `E` `*`     | 1 + 2 * <Fa fa="dot-circle" style="font-size:10px; color: red"/> 3 | 3        |           | SHIFT <Fa fa="arrow-right"/> 3                   |
| `E` `+` `E` `*` `3` | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> |          |           | **C) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E` `+` `E` `*` `E` | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> |          |           | **D) REDUCE R3** (E <Fa fa="arrow-right"/> nb)    |
| `E` `+` `E`         | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> |          |           | **E) REDUCE R2** (E <Fa fa="arrow-right"/> E * E) |
| `E`                 | 1 + 2 * 3 <Fa fa="dot-circle" style="font-size:10px; color: red"/> |          |           |                                                   |

<br>

Dans cet algorithme:
* On cherche à chaque étape si une règle correspond au somment de la pile.
* Ça fonctionne mais c'est beaucoup trop lourd.
* Dans les faits un algorithme LALR(1) pré-calcule toutes les possibilités et les garde dans des tables.
* L'algorithme devient alors une sorte de grosse machine d'état avec une chaine d'entrée et une pile.
* Les générateurs utilisent ces fameuses tables.
