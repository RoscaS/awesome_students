---
title: "Game of life: Cahier des charges"
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

----

## 1. Cahier des charges

### MVP (minimum viable project)
* Interface graphique simple (affichage du jeu et bouton de lancement/reset)
* Grid de taille fixe
* Fonctionnalités de base
    * Deux états possible (Vivant/Mort respectivement Blanc/Noir)
    * Choix du schéma de départ arbitraire (placement des cellules vivantes)
    * Lancement du jeu avec règles de base suivantes :	
        * Une cellule vivante avec moins de deux voisins vivants meurt (sous-population)
        * Une cellule vivante avec deux ou trois voisins vivants vit la génération suivante
        * Une cellule vivante avec plus de trois voisins vivants meurt (surpopulation)
       * Une cellule morte avec exactement trois voisins vivants devient vivante a la génération suivante(reproduction)


### Objectif
MVP ainsi que les points suivants:

* Interaction avec les cellules
    * possibilité durant l'exécution du jeu de donner vie à des cellules
    * possibilité durant l'exécution du jeu de tuer des cellules

* Modification des règles
    * ajout, suppression et modification des règles
    
* Personnalisation des états
    * possibilité d'introduire des états supplémentaire (malade, faim, froid, ...) ou de les supprimer
    * chaque état est caractérisé par une couleur

### Fonctionnalités supplémentaires
* Civilisations
    * évolution de plusieurs populations simultanées
    * Chaque civilisation peut évoluer selon des règles différentes (terrains)
* Obstacles
    * ajout d'obstacles entravant l'expansion (mur, océan, ..) 



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
1. Toute cellule avec moins de deux cellules adjacentes meurt de solitude.
2. Toute cellule avec 2 ou 3 cellules adjacentes survit une génération de plus
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "sur-population"
4. Une cellule morte devient vivante si elle a exactement trois cellules vivantes adjacentes.

#### Tours
Une fois la simulation activée, une mise à jour de l'état de la grille se fait à interval régulier et chaque mise à jour applique les règles du jeu à chacune des cellules qui forment la grille.

<Container type="warning" header="Point chaud">

##### Timing de mise à jour de la grille:

Au moment de la mise à jour de $t_n$ vers $t_{n+1}$ les changement doivent s'effectuer de façon concurrente (à un niveau logique) pour toutes les cellules. En effet, sans ça, une cellule déjà modifiée (donc en $t_{n+1}$) pourait influencer l'état d'une cellule toujours en $t_0$.

</Container>