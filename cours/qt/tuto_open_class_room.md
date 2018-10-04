---
title: Tutoriel Open Class Room
date: 2018-09-20
sidebar: auto
author: Sol
---

## Liens
* [Open class room](https://openclassrooms.com/fr/courses/1894236-programmez-avec-le-langage-c/1899081-compiler-votre-premiere-fenetre-qt)


## En vrac

### Représentation de la hierarchie de Qt

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
**Un widget peut en contenir un autre**. Par exemple, une fenêtre `unQWidget` peut contenir trois boutons `QPushButton`, une case à cocher `QCheckBox`, une barre de progression `QProgressBar`, etc.

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

### Exemple 1

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

    // Active la boucle principale
    return a.exec();
}
```
* [9] On crée une fenetre à l'aide d'un objet de type `QWidget`
* [10] On <Def def="Sa taille ne pourra être changée par l'utilisateur">fix</Def> la taille de la fenêtre
* [13] On crée un bouton en passant au constructeur la **référence du widget parent**
* [16-17] On personnalise le bouton
* [20] On déclanche l'affichage de la fenêtre (et donc du bouton qu'elle contient)
* [23] Lanchement de la boucle principale


Le résultat de ce code pourrait ressembler à ça (Dépendant de l'os et du gestionnaire de fenetres de l'os):
<Media
    src="https://i.imgur.com/cvM0BE5.png"
    center="true"
    width=350
/>

Tous les widgets possèdent un constructeur surchargé qui permet d'indiquer quel est le parent du widget que l'on crée. Il suffit de passer une <Def def="&">référence</Def> au constructeur pour lui spécifier quel est son parent:

```cpp
QPushButton bouton("Mon bouton", &fenetre);
```

La méthode `move` d'un widget permet de le déplacer dans la fenêtre:

```cpp
myWidget.move(x, y);
```

Et plus généralement la méthode `setGeometry` sert à placer et changer les dimensions d'un widget:

```cpp
myWidget.setGeometry(x, y, width, height);
```

### Includes

Dans le précédent exemple, on utilise la **classe** `QWidget` alors qu'il n'est pas include. En principe il est nécéssaire d'include toues les fichiers d'en-tête des classes qu'on utilise. L'exemple précédent compile car `QPushButton` hérite de `QWidget`, il l'avait lui même include dans son header. Il n'est pas nécéssaire d'être trop à cheval sur le fait de tout importer, on pourrait même éventuellement include le **module** `QtWidgets` pour ne plus se soucier des imports mais ce n'est pas la meilleur des pratiques.

::: danger Attention!
Importer `QtWidget` augmente le temps de compilation et c'est un overkill pour utiliser un ou deux widgets.
:::

### Héritage
Nous allons ici aller plus loin dans la personnalisation des widgets en créant un nouveau type de widget. Nous allons donc créer une nouvelle classe qui hérite de `QWidget` et représente notre fenêtre. 

> Cette façon de faire est un standard dans la création de <Def def="Graphic User Interface">GUI</Def> en POO.

<Media
    src="https://i.imgur.com/73JVdkY.png"
    caption="Schéma d'héritage de MaFenetre"
    center="true"
    width=450
/>

Qui dit classe dit deux fichiers en Cpp:
* `mafenetre.h`: contient la définition de la classe
* `mafenetre.cpp`: contiendra l'implémentation des méthodes

#### mafenetre.h
```CPP
#pragma once

#include <QWidget>
#include <QPushButton>

class MaFenetre : public QWidget
{
public:
    MaFenetre();
private:
    QPushButton *m_bouton;
};
```
* [3] Assure que le header ne soit pas inclus plusieurs fois.
* [8] `public QWidget`: En héritant de `QWidget` notre classe récupère automatiquement  toutes les propriétés de `QWidget`
* [11] Prototype du constructeur
* [13] Un attribut `m_bouton` de type `QPushButton`. **Noter** que c'est un pointeur, il faudra donc le construire de façon dynamique avec le mot clé `new`.

#### mafenetre.cpp
```CPP
#include "mafenetre.h"

MaFenetre::MaFenetre() : QWidget()
{
    this->setFixedSize(300, 150);

    // Construction du bouton
    this->m_bouton = new QPushButton("Mon bouton", this);
    this->m_bouton->setStyleSheet("font-size: 18px; padding: 10px;");
    this->m_bouton->setCursor(Qt::PointingHandCursor);
    this->m_bouton->move(60, 50);
}
```
::: warning Info
L'utilisation de `this->...` pour faire référence aux membres et aux méthodes dans la classe est superflue en C++. Je le met uniquement pour rendre les choses plus clair et me faciliter la tache après un an de JS et de Python où l'équivalent de `this->` n'est pas implicite.
:::


* [5] L'en-tête du constructeur. `QWidget()` sert à appeler le constructeur de `QWidget` en premier lieu.
* [10] Construction du bouton et assignation de celui-ci à l'attribut `m_bouton`. Le `new` permet d'appeler le constructeur de la classe `QPushButton` et d'affecter une adresse au pointeur.
    * Le second paramettre de `QPushButton` est un pointeur vers le widget parent (**Pas dans le sens héritage mais dans le sens "qui contient qui"**) donc dans ce cas, l'objet de type `MaFenetre` qui se fait construire.

#### main.cpp
```CPP
#include <QApplication>
#include "mafenetre.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MaFenetre fenetre;
    fenetre.show();

    return a.exec();
}
```
* [7] On instancie un objet de type `MaFenetre`
* [8] On affiche cet objet.

Lors de la création de l'objet `fenetre`, le constructeur de la classe `MaFenetre` est appelé. Dans son constructeur, la fenêtre définit toute seule ses dimensions et les widgets qu'elle contient (en l'occurence, juste un bouton).

### Destruction automatique des widgets enfants

::: danger Attention!
Tout objet créé dynamiquement avec un `new` implique forcément un `delete` quelque part. 
Normalement, on devrait écrire le **destructeur** de `MaFenetre`, qui contiendrait ceci :
```CPP
MaFenetre::~MaFenetre()
{
    delete m_bouton;
}
```
:::

C'est comme cela qu'on doit faire en temps normal. Toutefois, Qt supprimera automatiquement le bouton lors de la destruction de la fenêtre (à la fin du `main`).
En effet, quand on supprime un widget <Def def="qui contient qui">parent</Def> (ici notre fenêtre), Qt supprime automatiquement tous les widgets qui se trouvent à l'intérieur (tous les widgets <Def def="qui contient qui">enfants</Def> ). C'est un des avantages d'avoir dit que le `QPushButton` avait pour "parent" la fenêtre. Dès qu'on supprime la fenêtre, Qt supprime tout ce qu'elle contient et donc, fait le `delete` nécessaire du bouton.

### Resumé

* Qt fournit des accesseurs pour lire et modifier les propriétés des widgets. Ainsi, `text()`renvoie la valeur de l'attribut `text` et `setText()` permet de la modifier.
* La documentation nous donne toutes les informations dont nous avons besoin pour savoir comment modifier les propriétés de chaque widget (`F1` permet d'ouvrir la documentation du symbole sous le curseur dans Qt-creator)
* Les classes de Qt utilisent intensivement l'héritage. Toutes les classes, à quelques exceptions près, héritent en réalité d'une super-classe appelée `QObject`.
* On peut placer un widget à l'intérieur d'un autre widget : on parle alors de **widgets conteneurs**.
* Pour être le plus souple possible, il est recommandé de créer sa propre classe représentant une fenêtre. Cette classe héritera d'une classe de Qt comme `QWidget` pour récupérer toutes les fonctionnalités de base Qt.

## Partie 3: Signaux et slots
Les signaux et les slots servent à gérer les évènements au sein d'une fenêtre.
Par exemple, si on clique sur un bouton, on voudrait qu'une fonction soit appelée pour réagir au clic. 

* **Un signal**: C'est un **message** envoyé par un widget lorsqu'un évènement se produit.
* **Un slot**: C'est la **fonction** qui est appelée lorsqu'un évènement s'est produit. On dit que **le signal appelle le slot**. Concrètement, un slot est une méthode d'une classe.

> **Exemple**: le slot `quit()` de la classe `QApplictation` provoque l'arrêt du programme

Les signaux et les slots sont considérés par Qt comme des éléments d'une classe à part entière, en plus des attributs et des méthodes.

<Media
    src="https://i.imgur.com/3bwYGRf.png"
    center="true"
    width=450
/>

Un **signal** est un message envoyé par l'objet (par exemple "on a cliqué sur le bouton").
Un **slot** est une méthode classique à la différence près qu'elle a le droit d'être connectée à un signal.

Avec Qt, on dit que l'on connecte des signaux et des slots entre eux. Supposons qu'on a deux objets, chacun ayant ses propres attributs, méthodes, signaux et slots comme sur la figure suivante:

<Media
    src="https://i.imgur.com/Xc8Euqx.png"
    caption="Connexion du signal 1 de l'objet 1 avec le slot 2 de l'objet 2."
    center="true"
    width=450
/>

::: tip Tip
Il est possible de connecter **un signal** à **plusieurs slots**. Ainsi, un clic sur un bouton pourrait appeler non pas une mais plusieurs méthodes. Il est aussi possible de connecter un signal à un autre signal. Le signal d'un bouton peut donc provoquer la création du signal d'un autre widget, qui peut à son tour appeler des slots (voire appeler d'autres signaux pour provoquer une réaction en chaîne).
:::

### Connexion d'un signal à un slot simple
Pour connecter le **signal** "bouton cliqué" au slot "quiter l'application" et ainsi provoquer l'arrêt de l'application lors du clique du bouton comme sur le schéma suivant:

<Media
    src="https://i.imgur.com/8RznRIV.png"
    center="true"
    width=450
/>

... Nous devons utiliser une méthode statique `connect()` de `QObject`.
> Pour appeler une méthode statique il faut ajouter le namespace de la classe dans laquelle elle est déclarée devant le call: `QObject::connect();`


Cette méthode prend 4 arguments:
* Un pointeur vers l'objet qui émet le signal
* Le nom du signal que l'on souhaite "intercepter"
* Un pointeur vers l'objet qui contient le slot récepteur
* Le nom du slot qui doit s'éxécuter lorsque le signal se produit

En reprenant le code précédant auquel on a ajouté le header `<QApplication>` dans **mafenetre.h**, on peut utiliser `connect` de la façon suivante:

```CPP{11}
MaFenetre::MaFenetre() : QWidget()
{
    this->setFixedSize(250, 100);

    this->m_bouton = new QPushButton("Mon bouton", this);

    this->m_bouton->setStyleSheet("font-size: 18px; padding: 10px;");
    this->m_bouton->setCursor(Qt::PointingHandCursor);
    this->m_bouton->move(60, 30);

    QObject::connect(m_bouton, SIGNAL(clicked()), qApp, SLOT(quit()));
}
```

::: warning Info
Comme notre classe hérite de `QObject` il n'est pas nécessaire de préfixer `connect` par le namespace mais dans un soucis de clarté et comme il s'agit d'une méthode statique je l'ai quand même ajouté.
:::

Passons en revue le call de connect en ligne 11:

* `m_bouton`: Un pointeur vers le bouton qui va émettre le signal
* `SIGNAL(clicked())`: `SIGNAL()` est une macro du préprocesseur. Qt transformera cela en un code "acceptable" pour la compilation. 
* `qApp`: Un pointeur vers l'objet de type `QApplication` que nous avons créé dans le `main`. Ce pointeur est défini dans le header `<QApplication>` que nous avons inclus dans **mafenetre.h**.
* `SLOT(quit())`: Le slot qui doit être appelé lors du clique sur le bouton. De la même façon que pour `SIGNAL(clicked())` nous avons affaire à une macro du préprocesseur.


### Résumé
* Qt propose un mécanisme d'évènements de type signaux et slots pour connecter des widgets entre eux. Lorsqu'un widget émet un signal, celui-ci est récupéré par un autre widget dans son slot.
* On peut par exemple connecter le signal "bouton cliqué" au slot "ouverture d'une fenêtre".
* Les signaux et les slots peuvent être considérés comme un nouveau type d'élément au sein des classes, en plus des attributs et méthodes.
* La connexion entre les éléments se fait à l'aide de la méthode statique `connect()`.
* Il est possible de créer ses propres signaux et slots.