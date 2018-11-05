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

#### Fin de partie
La partie est terminée lorsque les cellules ne peuvent plus changer d'état.
Pour le multijoueurs, la partie se termine lorsque les cellules d'un des deux joueurs ne peuvent plus changer d'état ou lorsqu'un certain nombre de tour est atteint (le gagnant de ce cas de figure est celui qui possède le plus de cellules vivantes).

### Interface

#### SpinBox gérant la taille de la grille
Lorsqu'on modifie la valeur de la SpinBox, la taille de la grille est mise à jour. Les bornes de la SpinBox sont à définir.

#### Liste de miniatures contenant des scénarios de départ
Une miniature est sélectionnée par défaut. Chaque miniature contient une grille prédéfinie. L'utilisateur peut sélectionner une miniature à la fois. Lorsqu'il modifie la sélection, la grille est mise à jour en fonction de cette sélection.

#### Bouton start/stop
Par défaut le bouton permet de lancer la simulation (start).
* Lorsque la simulation est arrêtée et que l'utilisateur appuie sur ce bouton, la simulation commence et le bouton change en "stop"
* Lorsque la simulation est lancée et que l'utilisateur appuie sur ce bouton, la simulation s'arrête et le bouton repasse en bouton "start"

#### Bouton reset
Lorsque le bouton est activé, le jeu complet (grille et settings) revient à sa configuration par défaut

#### Case à cocher settings
Par défault la case est décochée. Lorsque la case est cochée, elle débloque les 3 sliders suivants (bornes : [0-8]):
* Solitude : lorsqu'il change, modifie le nombre de cellules adjacentes de la règle n°1
* Surpopulation : lorsqu'il change, modifie le nombre de cellules adjacentes de la règle n°3
* Reproduction : lorsqu'il change, modifie le nombre de cellules adjacentes de la règle n°4

La règle n°2 découle des autres règles et n'a donc pas besoin d'un slider.

#### Case à cocher "mode 2 joueurs"
Par défaut, la case est décochée (mode solo). Lorsque l'utilisateur coche cette case, le bouton start/stop est grisé et le jeu passe en mode deux-joueurs débloquant ainsi les éléments d'interface qui vont suivre.

#### SpinBox nombre de tours
Par défault 0, signifie qu'il n'y a pas de limite. Borne supérieur à définir. La valeur du spinbox définit le nombre de tours que les joueurs auront à disposition avant la fin de la partie.

#### ColorPicker joueur 1
Par défaut noir. Lorsque la couleur est modifiée, la couleur des cellules vivantes du joueurs 1 sera modifiée

#### ColorPicker joueur 2
Par défaut Gris. Lorsque la couleur est modifiée, la couleur des cellules vivantes du joueurs 1 sera modifiée. La couleur ne peut pas être la même que celle du joueur 1.

#### Bouton start
Le bouton lance la simulation tour par tour et active les champs "instructions" et "données de jeu".

#### Champ instructions
Affiche en fonction du tour, les instructions de jeu pour le joueur concerné (ex : tuer une cellule adverse, donner vie à une cellule, etc.)

#### Champ données de jeu
Affiche :
* le nombre de cellules vivantes de chaque joueur
* le nombre de cellules créées et tuées par chaque joueur
* le tour actuel
* le nombre de tours restants si celui-ci à été défini
Lorsque la partie est terminée, affiche le gagnant ainsi que la condition de victoire (ex : "joueur 1 a gagné grâce à 20 cellules vivantes de plus que joueur 2")