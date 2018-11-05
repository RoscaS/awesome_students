---
title: "P2 (Analyse): Spécifications"
date: 2018-10-12
author: "Michael, Nathan, Sol"
sidebar: auto
---

### Elements du jeu et règles

#### Céllule
L'élément de base du jeu est la céllule. Chaque céllule a deux états possibles: "Vivante" ou "Morte". Elles ne se déplacent pas mais affectent les cases adjacentes en fonction en fonction de leur état courant et donne l'impression de se déplacer.

* Il est nécessaire qu'elles puissent mémoriser leur position ainsi que leur état
* Elles doivent être capable de changer d'état à la suite d'un clique
* Elles nécessitent une couleur différente pour chaque état

#### Grille
L'ensemble des cellules forment une grille. La grille implémente la logique qui régit les céllules et définit si une céllule est vivante ou morte.

Les règles sont les suivantes:
1. Toute cellule avec moins de deux cellules adjacentes meurt de "solitude"
2. Toute cellule avec 2 ou 3 cellules adjacentes survit une génération de plus
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "surpopulation"
4. Une cellule morte devient vivante si elle a exactement trois cellules vivantes adjacentes

#### Tours
Une fois la simulation activée, une mise à jour de l'état de la grille se fait à interval régulier et chaque mise à jour applique les règles du jeu à chacune des cellules qui forment la grille.

<Container type="warning" header="Point chaud">

##### Timing de mise à jour de la grille:

Au moment de la mise à jour de $t_n$ vers $t_{n+1}$ les changement doivent s'effectuer de façon concurrente (à un niveau logique) pour toutes les cellules. En effet, sans ça, une cellule déjà modifiée (donc en $t_{n+1}$) pourait influencer l'état d'une cellule toujours en $t_0$.

</Container>

