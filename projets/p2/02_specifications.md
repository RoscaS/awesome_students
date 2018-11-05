---
title: "P2 (Analyse): Spécifications"
date: 2018-10-12
author: "Michael, Nathan, Sol"
sidebar: auto
---

### Elements du jeu et règles

#### Cellule
L'élément de base du jeu est la cellule. Chaque cellule a deux états possibles: "Vivante" ou "Morte". Elles ne se déplacent pas mais affectent les cases adjacentes (8 voisines) en fonction de leur état courant et donne l'impression de se déplacer.

* Il est nécessaire qu'elles puissent mémoriser leur position ainsi que leur état
* L'utilisateur peut forcer un changement d'état d'une cellule en cliquant sur cette dernière
* Elles nécessitent une couleur différente pour chaque état
* Une cellule vivante est affectée par les règles n°1, n°2 et n°3 (règles définies ci-dessous)
* Une cellule morte est affectée seulement par la règle n°4

#### Grille
L'ensemble des cellules forment une grille. La grille implémente la logique qui régit les cellules et définit si une cellule est vivante ou morte.

Les règles sont les suivantes:
1. Toute cellule avec moins de deux cellules adjacentes meurt de "solitude"
2. Toute cellule avec 2 ou 3 cellules adjacentes survit une génération de plus
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "surpopulation"
4. Une cellule morte devient vivante si elle a exactement trois cellules vivantes adjacentes

#### Tours
Une fois la simulation activée, une mise à jour de l'état de la grille se fait à interval régulier et chaque mise à jour applique les règles du jeu à chacune des cellules qui forment la grille.

<Container type="warning" header="Point chaud">

##### Timing de mise à jour de la grille :

Au moment de la mise à jour de $t_n$ vers $t_{n+1}$ les changements doivent s'effectuer de façon concurrente (à un niveau logique) pour toutes les cellules. En effet, sans ça, une cellule déjà modifiée (donc en $t_{n+1}$) pourrait influencer l'état d'une cellule toujours en $t_0$.

</container>

### Interface
L'interface de base contient :  

* la grille contenant les cellules
* une sidebar avec les différentes intéractions possibles avec le jeu
    * Un champ (modifiable) qui gère la taille de la grille (bornes à définir)
    * Un bouton pour lancer, arrêter et reset la simulation
    * Un champ pour modifier la fréquence du timer gérant la simulation
    * Un bouton permettant de charger une configuration (taille de la grille, fréquence, règles)
    * Un bouton permettant de sauvegarder la configuration actuelle
    * Un bouton de configuration qui appelle un dialogue permettant de modifier les règles de bases
        * Un bouton reset permettant de revenir à la configuration initiale du jeu
* Une case à cocher débloquant les options d'une partie à deux joueurs
    * Bouton donnant accès à la sélection d'une couleur pour chaque joueur
    * Un bouton start particulier à ce mode de jeu (l'autre bouton est grisé si la case "multijoueurs" est cochée)
    * miniatures sélectionnables pour choisir une situation initiale