---
title: Layouts
date: 2018-10-01
author: Michael
sidebar: auto
---

## Positionnement des widgets: Absolu

* taille et position fixées dans le code avec :
    * la méthode `move`
    * la méthode `setSize`
    * la méthode `setGeometry`
* Inconvénients:
    * Ne s'adapte pas au redimensionnement (solution: taille fixe avec `setFixedSize`)
    * Nécessite de calculer  la position de tous les widgets. A refaire à chaque modification

## Positionnements des widgets: Layout

* Widgets ajoutés à un conteneur: Layout
* Les layouts se chargent d'ajuster la disposition des widgets automatiquement:
* Différents layouts:
    * `QHBoxLayout, QVBoxLayout`: horizontal ou vertical
    * `QGridLayout`: disposition dans une grille
    * `QFormLayout`: assiciation entre champs et labels
    * `QStackedLayout`: un seul widget est visible à la fois
    * Les layouts ne sont pas des widgets: invisibles
  1. Instancier
  2. Ajouter widgets/layouts
  3. Installer le layout principal dans un Widget

   ```cpp
   QVBL *ppal = new QVBL
   ppal->addStretch(1); //espace
   ppal->addWidget(b1);
   ppal->addWidget(b2);
   w->setLayout(ppal); //w étant le widget parent
   ```

### Politiques de dimensionnement

* La propriété `sizePolicy` de `QWidget` défini le comportement au redimensionnement
* SizePolicy par défaut défini pour les widgets de Qt
* La méthode `sizeHint` retourne la taille préférée du widget dans son layout
* Valeurs possibles pour sizePolicy:
    * `Fixed`: toujours la taille renvoyée par `sizeHint`
    * `Minimum`(défaut): La taille ne peut être inférieure à `sizeHint`
    * `Maximum`: La taille ne peut être supérieur à `sizeHint`
    * `Preferred`: sizeHint de préférence, mais peut être redimensionné
    * `Expending`: Peut être redimensionné et prend le plus d'espace possible

```cpp
#include <QApplication>
#include <QWidget>
#include <QPushButton>
#include <QHBoxLayout>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);
    QWidget *window = new QWidget;

    QHBoxLayout *layout = new QHBoxLayout();
    QPushButton *button1 = new QPushButton("Modifié", window);
    QPushButton *button2 = new QPushButton("Minimum", window);

    layout->addWidget(button1);
    layout->addWidget(button2);

    QSizePolicy policy = button1->sizePolicy();

    // Toujours la valeur renvoyée par sizeHint()
//    policy.setHorizontalPolicy(QSizePolicy::Fixed);

    // Ne peut pas être plus petit que sizeHint(), peut grandir
//    policy.setHorizontalPolicy(QSizePolicy::Minimum);

    // Ne peut pas être plus grand, peut rétrécir
//    policy.setHorizontalPolicy(QSizePolicy::Maximum);

    // sizeHint est la valeur préférée, mais la taille peut changer suivant les autres éléments du layout
//    policy.setHorizontalPolicy(QSizePolicy::Preferred);

    // S'étend s'il y a de l'espace disponible
//    policy.setHorizontalPolicy(QSizePolicy::Expanding);

    // idem Expanding, mais ne peut rétrécir
//    policy.setHorizontalPolicy(QSizePolicy::MinimumExpanding);

    // sizeHint() n'est pas pris en compte, utilise tout l'espace possible
//    policy.setHorizontalPolicy(QSizePolicy::Ignored);

    button1->setSizePolicy(policy) ;

//    QSizePolicy policy2 = button2->sizePolicy();
//    policy2.setHorizontalPolicy(QSizePolicy::Minimum);
//    button2->setSizePolicy(policy2);

    window->setWindowTitle("setSizePolicy en action" );
    window->setGeometry(30,30,250,30);
    window->setLayout(layout);
    window->show();

    return app.exec();
}

```

### Modifier l'apparence avec des feuilles de style

* Appliqué avec la méthode `setStyleSheet` de `QWidget` ou `QApplication`
* Syntaxe: `selecteur {propriété: valeur}`
    * Sélecteur:
        * `Classe`: instances de cette classe et classes dérivées
        * `.Classe`: instances de cette classe
    * Propriété et valeur: la majorité de CSS 2.1
    * Tous les détails dans la [doc](http://doc.qt.io/qt-5/stylesheet.html)
  
```css
button.setStyleSheet("QPushButton {
    color:red;
    background-color:white
    }
```
