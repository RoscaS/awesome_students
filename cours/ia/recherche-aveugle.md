---
title: Recherche aveugle
date: 2019-09-25
author: Sol
sidebar: auto
project: false
hide: false
---

##  Recherche dans un espace d'états

Caractérisation d'un problème de recherche dans un espace d'états:
* Un ensemble d'états $X$ partagés en états **légaux** et **illégaux**
* Un état **initial**
* Des états **finaux** (peut être unique)
* Les états sont reliés par des **transitions**
* Un ensemble d'**opérateurs**. Chaque état possède un sous-ensemble d'opérateurs **applicables**.
* à Chaque opérateur applicable correspond une **transition** vers un autre état.

## Représentation d'une situation

* État actuel
* Etat final (but)
* États légaux (du problème)
* Opérations possibles (transition entre états)
* Coût de chaque opération

## Stratégies de recherche

La stratégie indique un ordre de développement des noeuds. Il existe 4 critères d'évaluation d'une stratégie:

* **Complétude**: La stratégie permet-elle de toujours trouver une solution s'il en existe une ?
* **Complexité en temps**: Nombre de noeuds générés pour trouver la solution
  * <Fa fa="arrow-right"/> "combien de temps faut il pour trouver la solution"
* **Complexité en espace**: Nombre maximal de noeuds mémorisés
  * <Fa fa="arrow-right"/> "quel est la quantité de mémoire nécessaire pour faire une recherche"
* **Optimalité**: La stratégie permet-elle de toujours trouver le chemin le moins coûteux ?

La complexité en temps et en espace se mesurent en termes de **BDM**:
* **B**: Facteurs de branchement maximal dans l'arbre de recherche
* **D**: Profondeur (depth) du but le plus "en surface" (du plus court chemin vers un but <Fa fa="arrow-right"/> de la solution la moins coûteuse)
* **M**: Profondeur maximale de l'espace d'état (longueur maximale de n'importe quel chemin (peut être \inf))


### Depth first (pile, lifo)

* Expansion (et examen) du premier noeud jusqu'à ce qu'il n'y ait plus de successeur.
* Retour en arrière au niveau précédent
* Peu coûteux en mémoire. Ne conserve que:
  * Le chemin direct actuel allant de l'état initial à l'état courant
  * Les enfants (noeuds ouverts) non examinés du parent actuel
  * Les noeuds en attente le long du chemin parcouru

<Spoiler tag="gif">

![img](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

</Spoiler>

<Spoiler tag="implementation">

```py
def depth_first_search(graph, start):
    visited = set()
    stack = [start]
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            stack += (graph[vertex] - visited)
    return visited
```

</Spoiler>

* **Complétude**: <st c="r">Non</st>, échoue dans le cas d'espace à profondeur infinie ou d'espace avec des boucles
* **Optimalité**: <st c="r">Non</st>
* **Temps**: $O(b^m)$. Peut être terrible si $m$ (profondeur de l'espace) $> d$ (profondeur du but)
  * Il peut y avoir beaucoup d'exploration en profondeur avant de trouver le but si la recherche commence dans la mauvaise direction.
* **Espace**: $O(bm)$. Espace linéaire

<Container type="info" header="Améliorations">

* Limite de profondeur d'exploration
* Seuelement un successeur est généré à la fois (gain d'espace)

</Container>

### Breadth first (file, fifo)

* Expansion (et examen) par couches
* Trouve toujours le chemin le plus court
* Exige beacoup de mémoire pour stocker toutes les alternatives à toues les couches

<Spoiler tag="gif">

![gif](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

</Spoiler>

<Spoiler tag="implementation">

```py
def breadth_first(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        vertex = queue.popleft()
        print(vertex)
        if vertex not in visited:
            visited.add(vertex)
            queue += graph[vertex] - visited
    return visited
```

</Spoiler>

* **Complétude**: <st c="g">Oui</st> (si $b$ est finit)
* **Optimalité**: <st c="g">Oui</st> (si le cout par étape = 1)
* **Temps**: $1+b+b^2+b^3+...+b^d+(b^{d+1}-b)=O(b^{b+1})$
* **Espace**: $O(b^{d+1})$. Garde tous les noeuds en mémoire (terrible)

### Compromis: Iterative Depth search

* Depth est efficace en espace mais ne peut assurer un chemin de longueur minimale
* Breadth trouve le chemin le plus court (en nombre d'étapes) mais requière un espace exponentiel
* Iterative Depth effectue une recherche en profondeur limitée avec un niveau de profondeur croissant jusqu'à ce que le but soit trouvé.
* Recommence du début à chaque itération

* **Complétude**: <st c="g">Oui</st> (si le facteur de branchements est finit)
* **Optimalité**: <st c="g">Oui</st> (si le cout de chemin = fonction non décroissante de la profondeur du noeud)
* **Temps**: $db^1+(d-1)b^2+...+(1)b^d=O(b^d)$
* **Espace**: $O(bd)$

### Recap

|            | Depth first        | Breadth first      | Iterative Deepening |
| ---------- | ------------------ | ------------------ | ------------------- |
| Complétude | <st c="g">Non</st> | <st c="r">Oui</st> | <st c="r">Non</st>  |
| Temps      | $Ob(b^m)$          | $O(b^{d+1}$        | $O(b^d)$            |
| Espace     | $O(bm)$            | $O(b^{d+1})$       | $O(bd)$             |
| Optimalité | <st c="r">Non</st> | <st c="g">Oui</st> | <st c="g">Oui</st>  |

* $b$ facteur de branchement de l'arbre de recherche
* $d$ profondeur de la solution la moins couteuse
* $m$ profondeur maximum de l'espace

## Etats répétitifs (boucles)

Si ces état ne sont pas détectés la recherche peut devenir exponentielle.
* <Fa fa="arrow-right"/> une recherche théoriquement possible peut devenir techniquement impossible.

Une solution à ce problème est l'ajout d'une liste des noeuds déja visités: `history`

## Ingrédients d'un algorithme de recherche aveugle

* Fonctions:
  * `legal(state)`: `true` si un état est légal
  * `final(state)`: `true` si un état est final
  * `applicable_operators(state)`: renvoie la liste des opérateurs applicables dans l'état donné
  * `apply(state, op)`: renvoie l'état obtenu par après application de l'opérateur dans l'état donné
* Listes:
  * `border`: Contient les prochains états a explorer
    * Ceci suffirait dans le cas d'un arbre
  * `history`: Contient les états déjà explorés
    * Pour évider de revisiter un état déjà triaté

<Spoiler tag="code">

```py
class State:
    def legal(self): pass
    def final(self): pass
    def applicable_operators(self): pass
    def apply(self, operator):
        new_state = "..."
        # Kepp path in memory
        new_state.parent = self
        new_state.operator = operator
        return new_state

def search(init):
    border = [init]
    history = set()
    while border:
        state = border.pop()
        history.add(state)
        if state.final():
            return state
        operators = state.applicable_operators
        for operator in operators:
            new_state = state.apply(operator)
            if ((new_state not in border)
                    and (new_state not in history)
                    and (new_state.legal())):
                insert(border, new_state)
    return "No solution"
```

</Spoiler>

Suivant le type de stockage dans `border`, on obtient différents types de recherches:
* **Pile**: parcours en profondeur
* **File**: parcours en largeur

On peut aussi insérer les états dans `border` dans un ordre déterminé par une valeur (parcours par préférence):
* Si la valeur est le nombre d'opérateurs appliqués depuis l'état initial et qu'on considère les états dans l'ordre croissant de cette valeur, on retrouve le parcours en largeur.
* Le choix de cette valeur peut beaucoup influencer l'efficacité (moyenne) de la recherche.


## Problèmes de la recherche aveugle

* Ne garde pas les états du chemin solution au cours de la recherche
* Complexité en espace
  * Dans tous les cas, le nombre de noeuds à mémoriser croit de façon exponentielle (dans le cas de breadth first)
  * Envisager l'élagation de l'espace de recherche par les heuristiques (recherche informée)