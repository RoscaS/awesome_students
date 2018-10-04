---
title: Tutoriel Open Class Room
date: 2018-09-20
sidebar: auto
author: Sol
---

## Liens
* [Open class room](https://openclassrooms.com/fr/courses/1894236-programmez-avec-le-langage-c/1899081-compiler-votre-premiere-fenetre-qt)


## Héritage dans Qt


<Media
    src="https://i.imgur.com/ro429Xi.png"
    caption="Sample de la hierarchie Qt"
/>

## Partie 1
### Résumé

* Tous les éléments d'une fenêtre sont appelés *widgets*
* Les widgets sont représentés par des objets dans le code


## Partie 2: Modifier les propriètès d'un widget
L'exemple utilisé ici est celui d'un bouton mais il est valable pour tous les widgets de Qt.

Qt utilise le système d'encapsulation, les propriétés des widgets ne sont donc pas accessible directement, il faut utiliser des accesseurs.

Pour chaque propriété d'un widget, on a:

* **Un attribut** privé
* **Un getter** du même nom que l'attribut
* **Un setter** pour modifier l'attribut sous la forme de `setAttribut()`

### Propriétés principales des widgets

* `text()`
* `toolTip()`
* `setStyleSheet()`: <- propriétés css. ex:"font-family: Times; font-size: 18pt";
* `cursor()` [pressets](http://doc.qt.io/qt-5/qt.html#CursorShape-enum)

### Widgets conteneurs
Un widget peut en contenir un autre. Par exemple, une fenêtre `unQWidget` peut contenir trois boutons `QPushButton`, une case à cocher `QCheckBox`, une barre de progression `QProgressBar`, etc.

::: danger Attention!
Ce n'est pas là de l'héritage, juste une histoire de **contenant et de contenu**.
:::

<Media
    src="https://i.imgur.com/Su0XILN.png"
    center="true"
    width="450"
/>

Sur cette capture, la fenêtre contient trois widgets :
* un bouton OK ;
* un bouton Annuler ;
* un conteneur avec des onglets.

Le conteneur avec des onglets contient à son tour des widgets :

* deux boutons ;
* une case à cocher (checkbox) ;
* une barre de progression.

Les widgets sont donc imbriqués les uns dans les autres suivant cette hiérarchie :

* QWidget (la fenêtre)
    * QPushButton
    * QPushButton
    * QTabWidget (le conteneur à onglets)
        * QPushButton
        * QPushButton
        *QCheckBox
        *QProgressBar

::: danger Attention!
Il ne faut pas confondre ceci avec l'héritage !
Ici, on découvre qu'un widget peut en contenir d'autres, indépendamment du fait que ce soit une classe mère ou une classe fille.
:::

Les avantages de cette façon de faire sont:
* Possibilité d'ajouter ultérieurement d'autres widgets à l'intérieur de la fenêtre

* Possibilité de placer le bouton où on veut dans la fenêtre, avec les dimensions qu'on veut (Sans ça, le bouton aurait toujours la même taille que la fenêtre).

#### Exemple 1

<Spoiler>

```CPP
#include <QApplication>
#include <QPushButton>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    // Widget qui sert de fenetre
    QWidget fenetre;
    fenetre.setFixedSize(300, 150);

    // Creation du bouton ayant pour parent fenetre
    QPushButton bouton("Mon bouton", &fenetre);

    // Personnalisation du bouton
    bouton.setStyleSheet("font-size: 18px; padding: 10px;");
    bouton.setCursor(Qt::PointingHandCursor);

    // Affichage de la fenetre
    fenetre.show();
    return a.exec();
}
```
* En ligne 9 on crée une fenetre à l'aide d'un objet de type `QWidget`
* En ligne 10 on <Def def="Sa taille ne pourra être changée par l'utilisateur">fix</Def> la taille de la fenêtre

Le résultat de ce code pourrait ressembler à ça (Dépendant de l'os et du gestionnaire de fenetres de l'os):
<Media
    src="https://i.imgur.com/cvM0BE5.png"
    center="true"
    width=350
/>

</Spoiler>
