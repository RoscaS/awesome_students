---
title: Qt overview
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

<Container type="danger">

Ce n'est pas là de l'héritage, juste une histoire de **contenant et de contenu**.

</Container>

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

<Container type="danger">

Il ne faut pas confondre ceci avec l'héritage !
Ici, on découvre qu'un widget peut en contenir d'autres, indépendamment du fait que ce soit une classe mère ou une classe fille.

</Container>

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

<Container type="danger">

Importer `QtWidget` augmente le temps de compilation et c'est un overkill pour utiliser un ou deux widgets.

</Container>

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
<Container type="warning">

L'utilisation de `this->...` pour faire référence aux membres et aux méthodes dans la classe est superflue en C++. Je le met uniquement pour rendre les choses plus clair et me faciliter la tache après un an de JS et de Python où l'équivalent de `this->` n'est pas implicite.

</Container>


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

<Container type="danger">

Tout objet créé dynamiquement avec un `new` implique forcément un `delete` quelque part. 
Normalement, on devrait écrire le **destructeur** de `MaFenetre`, qui contiendrait ceci :
```CPP
MaFenetre::~MaFenetre()
{
    delete m_bouton;
}
```

</Container>

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

<Container type="info">

Il est possible de connecter **un signal** à **plusieurs slots**. Ainsi, un clic sur un bouton pourrait appeler non pas une mais plusieurs méthodes. Il est aussi possible de connecter un signal à un autre signal. Le signal d'un bouton peut donc provoquer la création du signal d'un autre widget, qui peut à son tour appeler des slots (voire appeler d'autres signaux pour provoquer une réaction en chaîne).

</Container>

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

<Container type="warning">

Comme notre classe hérite de `QObject` il n'est pas nécessaire de préfixer `connect` par le namespace mais dans un soucis de clarté et comme il s'agit d'une méthode statique je l'ai quand même ajouté.

</Container>

Passons en revue le call de connect en ligne 11:

* `m_bouton`: Un pointeur vers le bouton qui va émettre le signal
* `SIGNAL(clicked())`: `SIGNAL()` est une macro du préprocesseur. Qt transformera cela en un code "acceptable" pour la compilation. 
* `qApp`: Un pointeur vers l'objet de type `QApplication` que nous avons créé dans le `main`. Ce pointeur est défini dans le header `<QApplication>` que nous avons inclus dans **mafenetre.h**.
* `SLOT(quit())`: Le slot qui doit être appelé lors du clique sur le bouton. De la même façon que pour `SIGNAL(clicked())` nous avons affaire à une macro du préprocesseur.

### Signaux et slots paramétrés

<Spoiler>

#### mafenetre.h
```CPP
#pragma once
 
#include <QApplication>
#include <QWidget>
#include <QPushButton>
#include <QLCDNumber>
#include <QSlider>
 
class MaFenetre : public QWidget
{
public:
    MaFenetre();
private:
    QLCDNumber *m_lcd;
    QSlider *m_slider; 
};
 
#endif
```

#### mafenetre.cpp
```CPP
#include "MaFenetre.h"
 
MaFenetre::MaFenetre() : QWidget()
{
    setFixedSize(200, 100);
 
    m_lcd = new QLCDNumber(this);
    m_lcd->setSegmentStyle(QLCDNumber::Flat);
    m_lcd->move(50, 20);
 
    m_slider = new QSlider(Qt::Horizontal, this);
    m_slider->setGeometry(10, 60, 150, 20);
}
```

</Spoiler>

Le code précédent nous donnera ce résultat:

<Media
    src="https://i.imgur.com/V6IWT6H.png"
    center="true"
    width=250
/>

Maintenant nous voulons afficher la valeur du slider dans le `QLCDNumber` et nous disposons du signal et du slot suivants:

* Le signal `valueChanged(int)` du `QSlider`: Émis dès que l'on change la valeur du curseur du slider en le déplaçant. La particularité de ce signal est qu'il envoie un paramètre **de type int** (la nouvelle valeur du slider).

* Le slot `display(int)` du `QLCDNumber`: Affiche la valeur qui lui est passée en paramètre.

La connexion se fait dans dans le constructeur de `MaFenetre` avec la ligne suivante:

```CPP
QObject::connect(m_slider, SIGNAL(valueChanged(int)), m_lcd, SLOT(display(int))) ;
```

Il suffit d'indiquer le type du paramètre envoyé, ici un int, **sans donner de nom à ce paramètre**. Qt fait automatiquement la connexion entre le signal et le slot et "transmet" le paramètre au slot.

<Media
    src="https://i.imgur.com/yhvcwFW.png"
    caption="transfert de paramètre"
    center="true"
    width=650
/>


<Container type="warning>

**Le type des paramètres doit absolument correspondre !**
Il est impératif que les signatures soient identiques entre le signal et le slot.
En revanche, un signal peut envoyer plus de paramètres à un slot que celui-ci ne peut en recevoir. Dans ce cas, **les paramètres supplémentaires seront ignorés**.

</Container>

### Slots perso

#### mafenetre.h
```CPP
class MaFenetre : public QWidget
{
    Q_OBJECT
 
    public:
    MaFenetre();
 
    public slots:
    void changerLargeur(int largeur);
 
    private:
    QSlider *m_slider;
};
```
<Container type="warning">

`Q_OBJECT` permet à Qt de prendre en compte que nous utilisons des signaux ou slots personnalisés et nous permet d'utiliser le nouveau mot clé `slot`.

</Container>

#### mafenetre.cpp
```CPP
MaFenetre::MaFenetre() : QWidget()
{
    setFixedSize(200, 100);
 
    m_slider = new QSlider(Qt::Horizontal, this);
    m_slider->setRange(200, 600);
    m_slider->setGeometry(10, 60, 150, 20);
 
    QObject::connect(m_slider, SIGNAL(valueChanged(int)), this, SLOT(changerLargeur(int)));
}

void MaFenetre::changerLargeur(int largeur)
{
    setFixedSize(largeur, 100);
}
```

La connexion se fait entre le `signalvalueChanged(int)` de `QSlider` et le slot `changerLargeur(int)` de notre classe `MaFenetre`.


### Signal perso

Il est plus rare d'avoir à créer son signal que son slot mais cela peut arriver.

#### mafenetre.h
```CPP
class MaFenetre : public QWidget
{
    Q_OBJECT
 
    public:
    MaFenetre();
 
    public slots:
    void changerLargeur(int largeur);
 
    signals:
    void agrandissementMax();
 
    private:
    QSlider *m_slider;
};
```

On a ajouté une section **signals**. Les signaux se présentent en pratique sous forme de méthodes (comme les slots) à la différence près qu'**on ne les implémente pas dans le.cpp**. C'est Qt qui s'en charge. Si on tente d'implémenter un signal, on aura une erreur du genre "Multiple definition of...".

Un signal peut passer un ou plusieurs paramètres. Dans notre cas, il n'en envoie aucun.
**Un signal doit toujours renvoyer `void`.**

Maintenant que notre signal est défini, il faut que notre classe puisse l'émettre à un moment.

#### mafenetre.cpp
```CPP
void MaFenetre::changerLargeur(int largeur)
{
    setFixedSize(largeur, height());
 
    if (largeur == 600)
    {
        emit agrandissementMax();
    }
}
```

Ici, notre signal n'envoie pas de paramètre. Si on veut envoyer un paramètre, il suffit d'appeler le signal comme ceci: `emit monSignal(parametre1, parametre2, ...);`

Il ne reste qu'à connecter le signal:

```CPP
QObject::connect(this, SIGNAL(agrandissementMax()), qApp, SLOT(quit()));
```

Le schéma des signaux qu'on vient d'émettre et de connecter est présenté en figure suivante:

<br>

<Media
    src="https://i.imgur.com/Wmjy8gf.png"
    center="true"
    width=550
/>

1. Le signal `valueChanged` du slider a appelé le slot `changerLargeur` de la fenêtre.
2. Le slot a fait ce qu'il avait à faire (changer la largeur de la fenêtre) et a vérifié que la fenêtre était arrivée à sa taille maximale. Lorsque cela a été le cas, le signal personnalisé `agrandissementMax()` a été émis.
3. Le signal `agrandissementMax()` de la fenêtre était connecté au slot `quit()` de l'application, ce qui a provoqué la fermeture du programme.



### Résumé
* Qt propose un mécanisme d'évènements de type signaux et slots pour connecter des widgets entre eux. Lorsqu'un widget émet un signal, celui-ci est récupéré par un autre widget dans son slot.
* On peut par exemple connecter le signal "bouton cliqué" au slot "ouverture d'une fenêtre".
* Les signaux et les slots peuvent être considérés comme un nouveau type d'élément au sein des classes, en plus des attributs et méthodes.
* La connexion entre les éléments se fait à l'aide de la méthode statique `connect()`.
* Il est possible de créer ses propres signaux et slots.

## Partie 4: Boites de dialogues


Un **dialogue** est une _fenêtre_ qui peut contenir divers widgets : boutons, cases à cocher, listes déroulantes, champs de saisie... Une application d'un certain niveau de complexité contient généralement une fenêtre principale à partir de laquelle il est possible d’appeler des dialogues permettant de modifier les données gérées par le programme.


### Modal / non-modal
Une boite de dialogue **modale** empêche l'utilisateur d'intéragir avec ce qui est en arrière plan de la boite de dialogue.

Une boîte de dialogue peut être: 
* **non modale**: L’utilisateur peut interagir avec tous les programmes dans d’autres fenêtres.
* **modale au niveau de l’application**: Empêche l’utilisateur
d’interagir avec le programme d’où la boîte de dialogue a été ouverte (il peut toujours accéder à d'autres programmes)
* **modale au niveau du système**: Plus aucun programme ne peut être accédé par l’utilisateur pendant qu’elle est ouverte.
















## Partie 5: Layouts

On distingue 2 techniques différentes pour positionner des widgets:

1. **Le positionnement absolu**: Permet de fine-tunner à l'aide de méthodes comme `setGeometry` ou `move`.
2. **Le positionnement relatif**: Beaucoup plus souple, il gère automatiquement le positionnement des widgets en fonction de plusieurs critéres paramétrables.

### Positionnement absolu

```CPP{11}
#include <QApplication>
#include <QPushButton>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    QWidget w;

    QPushButton button("Bonjour monde!", &w);
    button.setStyleSheet("font-size: 16px; padding: 5px");
    button.move(70, 60);

    w.show();

    return a.exec();
}
```

Ici nous créons donc une fenetre qui contient un bouton que nous plaçons aux coordonnées (70, 60) ce qui nous donne un résulatat comparable au suivant (dépendant de l'os et des gestionnaire de fenêtres au niveau du style).

<Media
    src="https://i.imgur.com/gFsoXsO.png"
    center="true"
    width=250
/>

<Container type="danger">

On garde en tête que (0, 0) se trouve en haut à gauche de l'élément conteneur.

</Container>

Le problème de cette façon de faire est son **manque de souplesse**, si l'utilisateur change la taille de la fenêtre on peut rapidement se retrouver dans des situations comme celle de la prochaine figure:

<Media
    src="https://i.imgur.com/fTKypu4.png"
    center="true"
    width=180
/>

Une façon de contourner ce problème est d'en fixer la taille avec la méthode `setFixedSize` dans certains cas cela peut être une bonne pratique mais uniquement si c'est un comportement voulu. La majorité du temps, nous voulons laisser à l'utilisateur (**et son système** ) la possibilité de changer la taille des fenêtres pour des raisons comme:

* Le confort d'utilisation coté utilisateur
* Le confort de programmation coté dev
* La possibilité de placer deux fenêtres côte à côte
* La gestion automatique de la taille en fonction de la résolution de l'utilisateur
* ...

Donc tout comme en CSS, on va majoritairement se baser sur des systèmes de **layout** (Grid, Flexbox en css) qui sont des systèmes où les éléments se placent de **façon relative** les uns aux autres et garder le positionnement absolu pour des cas spécifiques où on sait exactement ce qu'on veut et pourquoi on le veut.

### Positionnement relatif

Ce système de positionnement est géré dans Qt par un système de **layouts**. Pour faire simple on peut dire que les layouts sont des **conteneurs de widgets**  qui ajustent automatiquement la disposition et la taille des widgets contenu les uns vis à vis des autres.
Sans trop de surprises, nous avons une série de classes qui gèrent ces layouts dans Qt. La figure suivante présente un schéma de l'organisation de ces classes:

<Media
    src="https://i.imgur.com/5JyfR0v.png"
    caption="Hierarchie des classes liées à la gestion des layout"
/>

Toutes ces classes héritent de `QLayout` qui est une <Def def="Une classe avec au moins une méthode abstraite (purement virtuelle). On ne peut pas instancier d'objets de ce type. Sert de base pour les classes qui en hérite et assure le late binding de ses méthodes abstraites">classe abstraite</Def>. Elle sert donc de base pour tous les layouts qui ont des propriétés et des méthodes communes qui effectuent **la même action de façon différente**.

* `QHBoxLayout`: Disposition horizontale de widgets (`display: flex;` d'orientation `row` en css)
* `QVBoxLayout`: Alignement vertical de widgets (`display: flex` d'orientation `column` en css)
* `QGridLayout`: Disposition dans une grille (`display: grid` en css)
* `QFormLayout`: Associe des champs de saisie à des labels labels (comme un form sur le web)
* `QStackedLayout`: Pile de widget où un seul est visible à la fois (tabs, pages, ...)

<Container type="danger">

Les layouts ne sont pas des widgets !

</Container>

L'utilisation d'un layout se fait en 3 temps:

1. On crée les widgets ;
2. On crée le layout et on place les widgets dedans ;
3. On dit à la fenêtre d'utiliser le layout qu'on a créé.

### Layouts horizontaux et verticaux

* `QHBoxLayout`
* `QVBoxLayout`

#### 1. Création des widgets

```CPP
QPushButton *b1 = new QPushButton("Un");
QPushButton *b2 = new QPushButton("Deux");
QPushButton *b3 = new QPushButton("Trois");
```

Deux choses à noter:
* Pas de fenêtre parent passée en second argument du widget
* Utilisation d'un pointeur sur un objet

#### 2. Création du layout et ajout des widgets

```CPP
QHBoxLayout *layout = new QHBoxLayout; // layout horizontal  

layout->addWidget(b1);
layout->addWidget(b2);
layout->addWidget(b3);
```

Comme nous avons utilisé des pointeurs on se contente de passer les pointeurs des boutons en argument de la méthode `addWidget`. Une solution alternative serait d'instancier les boutons normalement `b1 = QPushButton("Mon bouton")` et de passer des références `layout->addWidget($b1)`

#### 3. Indiquer à la fenêtre d'utiliser le layout

```CPP
w.setLayout(layout);
```

La méthode `setLayout` de la fenêtre prend un pointeur vers le layout à utiliser. À ce stade, notre fenêtre contient un layout qui contient nos boutons. Le layout se chargera d'oorganiser lui même les widgets horizontalement:


<Media
    src="https://i.imgur.com/GLfTKhx.png"
    center="true"
    width=200
/>

Si nous redimensionnons la fenêtre le layout gère automatiquement la taille des boutons ainsi que leur position. L'intéret principale du layout c'est son comportement face aux redimensionnements de la fenêtre:

<Media
    src="https://i.imgur.com/Dmx0Aby.png"
    center="true"
    width=600
/>

Les boutons continuent de prendre l'espace en largeur et restent centrés verticalement. 
On ne pourra réduire la fenêtre que jusqu'à la taille minimum pour afficher les 3 boutons et leur contenu.

Voici le code complet de ce résultat:

```CPP
#include <QApplication>
#include <QPushButton>
#include <QHBoxLayout>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    QWidget w;

    QPushButton *b1 = new QPushButton("Un");
    QPushButton *b2 = new QPushButton("Deux");
    QPushButton *b3 = new QPushButton("Trois");

    QHBoxLayout *layout = new QHBoxLayout;

    layout->addWidget(b1);
    layout->addWidget(b2);
    layout->addWidget(b3);

    w.setLayout(layout);
    w.show();
    return a.exec();
}
```

Schématiquement, la fenêtre **contient** le layout qui **contient** les widgets. Le layout se charge d'organiser les widgets:



<Media
    src="https://i.imgur.com/69dlKw5.png"
    center="true"
    width=450
/>

`QVBoxLayout`  fait la même chose à la différence qu'il alligne les choses verticalement. Dans notre code il suffit de changer `QHBoxLayout` par `QVBoxLayout` et d'inclure ce layout.

<Container type="info">

Comme les boutons sont contenu par un layout et que le layout est contenu par la fenêtre, lors de la supresion de la fenêtre (ici à la fin du programme) Qt se chargera de faire les `delete` des boutons et puis du layout.

</Container>

### Layout grille

Ce layout délimite une grille dans son conteneur pour y placer des widgets. Chaque case est référencée par un système de coordonnées:

<Media
    src="https://i.imgur.com/2fjSANg.png"
    center="true"
    width=400
/>

```CPP
QGridLayout *layout = new QGridLayout;
layout->addWidget(b1, 0, 0);
layout->addWidget(b2, 0, 1);
layout->addWidget(b3, 1, 0);
w.setLayout(layout);
```

La méthode `addWidget` prend les coordonnées sur la grille du widget en plus du pointeur. Le résultat est le suivant:

<Media
    src="https://i.imgur.com/ee1fR3g.png"
    center="true"
    width=250
/>

Un widget peut occuper plusieurs cases, on parler de *spanning*. Tout comme en HTML pour les propriétés `rowspan` et `colspan` des tableaux, `addWidget` accepte deux paramètres suppémentaires similaires :

#### rowSpan
Nombre de lignes qu'occupe le widget:


<Media
    src="https://i.imgur.com/hzdwySA.png"
    center="true"
    width=350
/>

#### columnSpan
Nomber de colonnes qu'occupe le widget:


<Media
    src="https://i.imgur.com/8t0LLXc.png"
    center="true"
    width=350
/>

<Container type="warning">

L'espace pris par le widget au final dépend de la nature du widget (les boutons s'agrandissent en largeur mais pas en hauteur par exemple) et du nombre de widgets sur la grille. Go tester !

</Container>

Le code suivant permet à notre bouton "Trois" de s'étalle sur 2 colonnes:

```CPP
layout->addWidget(b3, 1, 0, 1, 2);
```

<Media
    src="https://i.imgur.com/0ueo8Xc.png"
    center="true"
    width=250
/>

### Layout formulaire

Un formulaire est en général une suite de labels associés à des champs de formulaire (une zone de texte par exemple).

```CPP
QLineEdit *nom = new QLineEdit;
QLineEdit *prenom = new QLineEdit;
QLineEdit *sexe = new QLineEdit;

QFormLayout *layout = new QFormLayout;

layout->addRow("Nom", nom);
layout->addRow("Prenom", prenom);
layout->addRow("Sexe", sexe);

w.setLayout(layout);
```

Avec les includes de `QLineEdit` et `QFormLayout` Nous arrivons à ce résultat:


<Media
    src="https://i.imgur.com/pjYX5mV.png"
    center="true"
    width=350
/>

### Combinaison de layouts

Nous pouvons combiner les layouts comme nous le voulons.

#### Exemple:

```CPP{37,38}
#include <QApplication>
#include <QPushButton>
#include <QVBoxLayout>
#include <QHBoxLayout>
#include <QLineEdit>
#include <QFormLayout>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    QWidget w;

    // creation des boutons
    QPushButton *b1 = new QPushButton("&Valider");
    QPushButton *b2 = new QPushButton("&Annuler");

    // creation des champs et labels du form
    QLineEdit *nom = new QLineEdit;
    QLineEdit *prenom = new QLineEdit;
    QLineEdit *sexe = new QLineEdit;

    // creation layouts
    QVBoxLayout *main = new QVBoxLayout;
    QHBoxLayout *buttons = new QHBoxLayout;
    QFormLayout *form = new QFormLayout;

    // affectation des boutons au layout horizontal
    buttons->addWidget(b1);
    buttons->addWidget(b2);

    // affectation des champs et labels au form
    form->addRow("&Nom", nom);
    form->addRow("&Prenom", prenom);
    form->addRow("&Sexe", sexe);

    // affectation des sous-layout au layout principal
    main->addLayout(form);
    main->addLayout(buttons);

    // affectation du layout principal à la fenêtre
    w.setLayout(main);

    w.show();
    return a.exec();
}
```

Nous donne la fenêtre suivante:

<Media
    src="https://i.imgur.com/ESfDLEb.png"
    center="true"
    width=300
/>

L'ordre est celui dans lequel les layouts sont ajoutés dans le layout principal (ligne 37 et 38)

### Résumé

* Pour placer des widgets sur une fenêtre, deux options s'offrent à nous : les positionner au pixel près (absolu) ou les positionner de façon souple dans des layouts (relatif).
* Le positionnement en layouts est conseillé : les widgets occupent automatiquement l'espace disponible suivant la taille de la fenêtre.
* Il existe plusieurs types de layouts selon l'organisation que l'on souhaite obtenir des widgets: `QVBoxLayout` (vertical),`QHBoxLayout` (horizontal), `QGridLayout` (en grille), `QFormLayout` (en formulaire).
* Il est possible d'imbriquer des layouts entre eux : un layout peut donc en contenir un autre. Cela nous permet de réaliser des positionnements très précis.
