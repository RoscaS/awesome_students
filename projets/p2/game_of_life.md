---
title: "P2: Game of life"
date: 2018-10-22
author: Michael, Nathan, Sol
sidebar: auto
---

### Collaborateurs

* Kneuss Michael
* Latino Nathan
* Rosca Sol

### Liens

* [gantt from issues](https://github.com/neyric/gh-issues-gantt)
* [another one](https://github.com/realm/github-gantt)
* [ganttlab](https://www.ganttlab.org/): conseil du prof

### À rendre pour le 12 novembre

* **Analyse**
<Check state="true">Besoins (cahier des charges)</Check>
<Check state="false">Spécifications détaillées</Check>
<Check state="false">Planning (liste de taches)</Check>


* **Conceptions**
<Check state="false">Maquettes </Check>
<Check state="false">Algos</Check>

## 1. Cahier des charges

### MVP
* **Interface graphique** :
    * Affichage de la grille (univers)
    * Bouton de lancement
    * Bouton de reset
    * Personnalisation de l'univers de départ (placement des cellules vivantes à la souris)
* **Fonctionnalités de base** :
    * Deux états possible pour les cellules (Vivant/Mort respectivement Blanc/Noir)
    * Choix de la taille de l'univers
    * Gestion des cycles de jeu (mise à jour de l'état des céllules en fonction des règles qui suivent)
* **Règles** :
    * Une cellule vivante avec moins de deux voisinnes vivantes meurt (solitude)
    * Une cellule vivante avec deux ou trois voisinnes vivantes vit la génération suivante
    * Une cellule vivante avec plus de trois voisinnes vivantes meurt (surpopulation)
    * Une cellule morte avec exactement trois voisinnes vivantes devient vivante a la génération suivante(reproduction)


### Objectif
MVP ainsi que les points suivants:

* Interaction avec les cellules via le curseur
    * Possibilité durant l'exécution du jeu de donner vie à des cellules
    * Possibilité durant l'exécution du jeu de tuer des cellules

* Modification des règles
    * Ajout, suppression et modification des règles

* Selection parmis plusieurs scénario de départ prédéfinis

* Mode deux joueurs en local
    * Chaque joueur possède des céllules vivantes
    * Les céllules de chaque joueur ont une couleur spécifique
    * Au tour par tour, un joueur **doit** :
        * Tuer une céllule adverse
        * Donner la vie à une cellule morte (peut être la cellule adverse qu'il vient de tuer)
    * Après le tour d'un joueur, l'univers avance d'un cycle
    * Un joueur gagne la partie lorsque le joueur adverse n'a plus de céllules vivantes

### Fonctionnalités supplémentaires
* Mode deux joueurs en reseau
* Mode multi joueurs (> 2)
* Races: Possibilité de choisir une règle parmis une sélection de règles supplémentaires prédéfinies pour les céllules d'un joueur
* Obstacles
    * ajout d'obstacles entravant l'expansion 
        * mur: infranchissable
        * ocean, desert, forets,... (chaque biome à une règle supplémentaire spécifique)



## 2. Spécifications détaillées

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