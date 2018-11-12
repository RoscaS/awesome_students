---
title: "P2 (Analyse): Spécifications"
date: 2018-10-12
author: "Michael, Nathan, Sol"
sidebar: auto
---

## Elements du jeu et règles

### Cellule

#### Description
L'élément de base du jeu est la cellule. Chaque cellule a deux états possibles: "Vivante" ou "Morte". Elles affectent les cases adjacentes (8 voisines) en fonction de leur état courant.

#### État
L'état d'une cellule est définie par une couleur. Il existe deux états : vivant et mort.
Par exemple, une cellule "vivante" peut-être blanche et une "morte" peut-être noire.

#### Attributs
Une cellule connait sa position ainsi que son état.

#### Interaction
L'utilisateur peut forcer un changement d'état d'une cellule en cliquant sur cette dernière.
Une cellule vivante est affectée par les règles n°1, n°2 et n°3 (règles définies ci-dessous).
Une cellule morte est affectée seulement par la règle n°4.

### Grille

#### Description
L'ensemble des cellules forment une grille.

#### Règles
1. Toute cellule avec moins de deux cellules adjacentes meurt de "solitude"
2. Toute cellule avec 2 ou 3 cellules adjacentes survit une génération de plus
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "surpopulation"
4. Une cellule morte devient vivante si elle a exactement trois cellules vivantes adjacentes

<Container type="warning" header="Point chaud">

##### Forme et taille de la grille :

La grille est de forme rectangulaire.

</container>

#### Tours
Une fois la simulation activée, une mise à jour de l'état de la grille se fait à interval régulier et chaque mise à jour applique les règles du jeu à chacune des cellules qui forment la grille.

#### Interval de mise à jour
L'interval est définie par un timer et l'utilisateur peut modifier la valeur de ce timer (bornes à définir).

<Container type="warning" header="Point chaud">

##### Timing de mise à jour de la grille :

Au moment de la mise à jour de $t_n$ vers $t_{n+1}$ les changements doivent s'effectuer de façon concurrente (à un niveau logique) pour toutes les cellules. En effet, sans ça, une cellule déjà modifiée (donc en $t_{n+1}$) pourrait influencer l'état d'une cellule toujours en $t_0$.

</container>

#### Fin de partie
La partie est terminée lorsque les cellules ne peuvent plus changer d'état.
Pour le multijoueurs, la partie se termine lorsque les cellules d'un des deux joueurs ne peuvent plus changer d'état ou lorsqu'un certain nombre de tour est atteint (le gagnant de ce cas de figure est celui qui possède le plus de cellules vivantes).

### Interface

#### Widget affichant la grille et les cellules
Par défaut, le widget affiche une situation initiale. Ce widget est mis à jour à chaque interval ou changement de situation initiale.

#### Widget gérant la taille de la grille
Lorsqu'on modifie les valeurs du widget, la taille de la grille est mise à jour.

#### Liste de miniatures contenant des scénarios de départ
Une miniature est sélectionnée par défaut. Chaque miniature contient une grille prédéfinie. L'utilisateur peut sélectionner une miniature à la fois. Lorsqu'il modifie la sélection, la grille est mise à jour en fonction de cette sélection.

#### bouton start/stop
Par défaut le bouton permet de lancer la simulation (start).
* Lorsque la simulation est arrêtée et que l'utilisateur appuie sur ce bouton, la simulation commence et le bouton change en "stop". L'utilisateur peut modifier la situation actuelle
* Lorsque la simulation est lancée et que l'utilisateur appuie sur ce bouton, la simulation s'arrête et le bouton repasse en bouton "start"

#### reset
Lorsque le bouton est activé, le jeu complet (grille et settings) revient à sa configuration par défaut

#### settings

* Solitude : lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle n°1
* Surpopulation : lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle n°3
* Reproduction : lorsqu'elle change, modifie le nombre de cellules adjacentes de la règle n°4

### mode 2 joueurs
Par défaut, la case est décochée (mode solo). Lorsque l'utilisateur coche cette case, le bouton start/stop est grisé et le jeu passe en mode deux-joueurs débloquant ainsi les éléments d'interface qui vont suivre.

#### meta
* La grille est divisée en deux région de même taille chacune.
* Choix du nombres de cellules de départ.
* Lors de l'initialisation chaque joueur place ses cellules de son côté de la grille.
* Possibilité d'ajouter une zone tampon, qui empêche la création de cellules dans cette zone (dosage de l'aggressivité en début de partie).

#### nombre de tours
Par défault 0, signifie qu'il n'y a pas de limite. Borne supérieur à définir. La valeur du spinbox définit le nombre de tours que les joueurs auront à disposition avant la fin de la partie.

#### ColorPicker joueur 1
Par défaut noir. Lorsque la couleur est modifiée, la couleur des cellules vivantes du joueurs 1 sera modifiée

#### ColorPicker joueur 2
Par défaut Gris. Lorsque la couleur est modifiée, la couleur des cellules vivantes du joueurs 1 sera modifiée. La couleur ne peut pas être la même que celle du joueur 1.


#### Initialisation du jeu
* Choix de la taille de la grille
* Possibilité de zone tampon
* Placement des cellules
    * Chaque joueur pose ses cellules de son côté de la grille

#### Phase jeu

##### cellules
* Une cellule vivante avec moins de deux voisines **alliées** vivantes meurt (solitude)
* Une cellule vivante avec deux ou trois voisines **alliées** vivantes vit la génération suivante
* Une cellule vivante avec plus de trois voisines vivantes meurt (surpopulation)
* Une cellule morte avec exactement trois voisines **alliées** vivantes devient vivante a la génération suivante(reproduction)

##### déroulement d'un tour
Le joueur place une cellule **alliée** dans une case "vide" et en tue une **adverse**.

#### Champ instructions
Affiche en fonction du tour, les instructions de jeu pour le joueur concerné (ex : tuer une cellule adverse, donner vie à une cellule, etc.)

#### Champ données de jeu
Affiche :
* le nombre de cellules vivantes de chaque joueur
* le nombre de cellules créées et tuées par chaque joueur
* le tour actuel
* le nombre de tours restants si celui-ci à été défini.
Lorsque la partie est terminée, affiche le gagnant ainsi que la condition de victoire (ex : "joueur 1 a gagné grâce à 20 cellules vivantes de plus que joueur 2")