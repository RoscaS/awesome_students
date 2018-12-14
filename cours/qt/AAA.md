---
title: Doc
date: 2018-12-14
author: Sol
sidebar: auto
project: false
---

## Backend API

### Quick start

* `Game()`
* `Game(int width, int heigth)`
  * **width**: nombre de cellules en largeur
  * **heigth**: nombre de cellules en hauteur

```cpp
Game g{};
g.init();

for (int i = 0; i < 250; i++) {

    std::cout << g; // print dans la console une repr de la grille

    for (auto const cell : *g.update()) {
        std::cout << *cell << "\n";  // => (x, y) state: n
        std::cout << cell->getX() << "\n";     // => x
        std::cout << cell->getY() << "\n";     // => y
        std::cout << cell->getState() << "\n"; // => n
    }
}
```

* `init()`: Permet d'initialiser la partie. 
  * **Doit être call avant de pouvoir utiliser `update()`**
* `update()`: Applique un tour d'itération sur la grille en appliquant les rêgles
  * Retourne un `vector<Cell*>*` contenant les Cellules qui ont changé d'état

Il suffit donc d'init les valeurs initiales du frontend en itérant une première fois sur `g` et ensuite de les mettre à jour à chaque appel de `g.update()`

## Game Api

### Controle

* `init()`
* `update()` -> `std::vector<Cell*>*`

### Metrics

* `iterationsCount` -> `int`
* `killedCount` -> `int`
* `aliveCount` -> `int`

### Setters

* `setRuleMin(int)`
* `setRuleMax(int)`
* `setRuleGenesis(int)`
* `setRules(int, int, int)`

Les methodes suivantes **Doivent être set avant l'appel de `init()`**.

* `setWidth(int)`
* `setHeight(int)`
* `setPattern(std::string)`

## Cell API

Contenu du vecteur que retourne la methode `update()` de `Game`, chaque cell expose les methodes suivantes:

* `getX()` -> `int`
* `getY()` -> `int`
* `getState()` -> `bool`

