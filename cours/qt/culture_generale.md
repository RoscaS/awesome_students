---
title: Culture générale
date: 2018-12-03
author: Sol
sidebar: auto
project: false
---

## En vrac

* **API**: Application Programming Interface
* **Framework**: "Logiciel à trou". Le déroulement des opérations est dirigé par le framework.

* Les signaux et les slots ne sont pas du C++. Il s'agit d'une extension propre à Qt qui sera convertie en C++ standard fans une étape préalable à la compilation par l'utilitaire **moc** (Meta Object Compiler).

* `Q_OBJECT` permet à Qt de prendre en compte que nous utilisons des signaux ou slots personnalisés et nous permet d'utiliser le mot clé `slot`.

* Le clipping permet de définir la zone à redessiner

* Package, classe QtTruc/QTruc

## Programmation événementielle


### Séquentielle vs événementielle
La différence porte sur la façon dont l'utilisateur peut interagire avec le programme et par extension sur la façon de concevoir le programme.


|Programmation séquentielle|Pogrammation événementielle|
| --- | --- |
|Programme piloté par le code|Programme piloté par l'utilisateur|
|Interaction possible à certains moments spécifiques|Interaction possible à tout moment|
|Le programme attend les entrées de l'utilisateur|l'OS reçoit les entrées de l'utilisateur et les transmet au programme|
|Déroulement prévisible, détérminé par l'ordre des instructions|Déroulement déterminé par les actions de l'utilisateur|
|Le dévéloppeur prévoit le moment où l'utilisateur peut intervenir en plus du traitement|Indique à l'OS quel traitement effectuer pour chaque type d'intervention|

### Exécution d'un programme événementielle

1. Affichage de la fenêtre et établissement de la communication avec l'OS
2. Attente d'un événement à traiter
3. Traitement de l'événement
4. Retour à l'étape 2

![Image](https://i.imgur.com/RkJjNBJ.png)


### API Win32
Un handler nous notifie de la part de Windows si un événement se produit. Via un switch on peut déterminer le type d'événement et le traiter en conséquant. Les événements sont stocké dans une pile gérée par Windows et lue par l'API WIN32. Une fois un événement lu, sa case est libérée.

### Qt
Qt fonctionne sur un principe similaire sauf que les événements venant de l'os sont gérés avec des **signaux** (intermédiaire entre l'OS et Qt) et la fonction à éxécuter se fait via un **slot**.


## Build
* **Makefile**: Fichier contenant une liste de règles pour build un programme.
* **make**: Utilitaire qui **build** un éxécutable à partir des règles d'un fichier _Makefile_.
    * **Compilation**: Conversion des fichiers source (***.cpp**) <Fa fa="arrow-right"/> ***.o**.
    * **Edition de lien**: Conversion des fichiers ***.o** <Fa fa="arrow-right"/> exécutable.

<Container type="danger" header="build d'un projet Qt">

Plusieurs étapes préliminaires à l'étape de compilation:

* **uic**: Génère des classes C++ (avec les extensions Qt) à partir des fichiers interface (**.ui**)
* **moc** (Meta Object Compiler): Convertit les extensions Qt en C++
    * ***.h** <Fa fa="arrow-right"/> **moc_\*.cpp**
* **rcc** Converti les fichier ressources en fichier c++
    * ***.qrc** <Fa fa="arrow-right"/> **qrc_\*.cpp**

</Container>

```makefile
# Un Makefile simple

all: foobar.o main.c
gcc -o main.exe foobar.o main.c
foobar.o: foobar.c foobar.h
gcc -c foobar.c -o foobar.o
```

<br>

<Container type="info">

`make` ne recompile que les fichiers modifiés ou qui n'éxistaient pas lors du précédent build.

</Container>

* **cmake**: Générateur de **Makefile**.
* **qmake**: Générateur de **Makefile** spécialement prévu pour Qt en se basant sur un fichier projet Qt (***.pro**)
    * **.pro** généré par la commande `qmake -project`
    * **Makefile** généré par la commande `qmake`
    * **.exe** généré par la commande `make`

<br>

L'utilitaire **make** permet de set une **cible de construction (build target)** via un flag lors de l'appel:
* `make debug`: Ajoute les symboles de déboguage à l'éxécutable construit
* `make release`: L'exécutable est optimisé pour l'exécution, il n'est plus possible d'utiliser le debugger avec. La taille de l'exe est nettement inférieure à une version Debug et l'exécution plus rapide
* `make clean` Supprime les fichiers temporaires, garantissant que le prochain `make` effectuera TOUTES les étapes de construction comme si c'était la promière compilation.

## Liens statiques vs liens dynamiques
* Les liens statiques se font pendant la compilation. Toutes les dépendances sont liées à l'exécutable ce qui résulte en un exécutable plus lourd mais indépédant.
* Un exécutable qui a recours à des liens dynamiques signifie que l'exécutable n'est pas indépendant. Pour que le programme puisse se lancer il faut que ses dépendances sous forme de fichiers dll ou so (linux) soient présent dans le système.

## Approches Qt pour applications graphiques
* **Widgets**: Applications desktop standards
    * Modèle utilisée pour une application desktop standard
        * Elle est composée de widgets disposés dans une fenêtre qui peut posséder une barre de menus, d’outils, d’états. 
    * Classes correspondantes sont dans le module `QtWigdets`
* **GraphicsView Framework**: 
    * Mécanisme permettant de gérer et d’interagir avec un grand nombre d’objets dans une scène 2D, les animer, les transformer, ... 
    * Une classe permet de décrire le contenu la scène et une autre d’afficher une ou plusieurs vues de cette scène dans un widget.
    * Les classes correspondantes sont dans le module `QtWigdets`
* **Qt Quick**: Optimisé pour animations et interface tactiles
    * GUI séparé de l’application
    * QML pour les éléments graphiques (formes, textes, images...) et comportementaux (états, transitions, animations...)
    * C++ ou Javascript pour la logique
* **OpenGL**: Pour un rendu optimal des scènes 3D
* **Web**: Moteur de rendu web
    * affichage de contenu web et applications hybrides (Qt/Html5)

## Signaux et slots
Qt propose un mécanisme d'évènements de type signaux et slots** pour connecter des widgets entre eux**. Lorsqu'un widget émet un signal, celui-ci est récupéré par un autre widget dans son slot.

* **Un signal**: C'est un message envoyé par un widget lorsqu'un évènement se produit.
* **Un slot**: C'est la fonction qui est appelée lorsqu'un évènement s'est produit. 
* **La connexion** entre les éléments se fait à l'aide de la méthode statique `connect()`.

<Container type="info">

On dit que le signal appelle le slot. Concrètement, un slot est une méthode d'une classe.
Exemple: le slot quit() de la classe QApplictation provoque l'arrêt du programme

</Container>

## Widgets

* `QLabel`
* `QLCDNumber`
* `QLineEdit (1 ligne)`
* `QTextEdit (n lignes)`
* `QPushButton`
* `QRadioButton`
* `QCheckBox`
* `QButtonGroup (grouper des inputs)`
* `QListWidget`
* `QSpinBox (fleches d'incrément)`
* `QComboBox (liste)`

### Parent enfant
Le mécanisme parent-enfant est implémenté dans `QObject`, la classe de base de `QLayout` et `QWidget`. À la création d'une instance de ces classes avec un parent passé en argument, ce dernier ajoute cette instance dans la liste de ses enfants. **À la destruction du parent, tous les endants sont automatiquement détruits**. La destruction concerne également les enfants des enfants de façon récursive.

### Widgets personnalisés
* Besoins particuliers
* Création d'une classe héritant d'une classe Qt
* Surcharge des méthodes responsables du traitement

### Positionnement des widgets

#### Absolu
* Taille et position fixées dans le code via:
    * methode `move`
    * methode `setSize`
    * methode `setGeometry`
* Inconvénients:
    * Ne s'adaptent pas au redimensionnement (fake solution: `setFixedSize`)
    * Nécessite de calculer la position de tous les widgets et de le refaire à chaque modification

#### Layouts

* `QHBoxLayout`: Horizontal, 
* `QVBoxLayout`: Vertical
* `QGridLayout`: Disposition dans une grille
* `QFormLayout`: Association entre champs et labels
* `QStackedLayout`: un seul widget est visible à la fois (**tabs**)

<br>

<Container type="info">

`spacer`: Element invisible qui "prends de la place".

</Container>

<br>

* Les widgets sont ajoutés à un conteneur, le **layout**
* Ils se chargent d'ajuster automatiquement la disposition des widgets
    * Lors du resize de la fenêtre
    * À la modification du contenu
* **Les layouts ne sont pas des widgets, ils sont invisibles**

<br>

La propriété `sizePolicy` de `QWidget` défini le comportement au redimensionnement.
* `SizePolicy` par défaut défini pour les widgets de Qt
* La méthode `sizeHint` retourne la taille préférée du widget dans son layout
* Valeurs possibles pour `sizePolicy`:
    * `Fixed`: toujours la taille renvoyée par `sizeHint`
    * `Minimum` (défaut): La taille ne peut être inferieure à `sizeHint`
    * `Maximum`: La taille ne peut être supérieure à `sizeHint`
    * `Preferred`: `sizeHint` de préférence, mais peut être redimenssionné
    * `Expending`: Peut être redimensionné et prend le plus d’espace possible

### Boites de dialogue

* `QFiledialog`
* `QMessageBox`
* `QInputDialog`


Un dialogue est une fenêtre qui peut contenir divers widgets : boutons, cases à cocher, listes déroulantes,
champs de saisie et bien d’autres encore. Une application un peu importante contient généralement une
fenêtre principale à partir de laquelle il est possible d’appeler des dialogues permettant de modifier les données
gérées par le programme.

#### Modale
Une boite de dialogue modale empêche l'utilisateur d'intéragir avec ce qui est en arrière plan de la boite de dialogue. Une boîte de dialogue peut être:

* **non modale**: L’utilisateur peut interagir avec tous les programmes dans d’autres fenêtres.
* **modale au niveau de l’application**: Empêche l’utilisateur d’interagir avec le programme d’où la boîte de dialogue a été ouverte (il peut toujours accéder à d'autres programmes)
* **modale au niveau du système**: Plus aucun programme ne peut être accédé par l’utilisateur pendant qu’elle est ouverte.

## Graphisme 2D

### Contexte graphique
Pour dessiner dans un environnement graphique, le système d'exploitation doit autoriser le programme à intervenir sur l'affichage et lui en fournir les moyens. Cela se traduit par l'obtention d'un "contexte graphique". Un tel objet est "prêté" par le système d'exploitation, et encapsule la plupart des propriétés des tracés qui seront faits par la suite (couleurs, épaisseur, motifs de remplissage, polices de caractère, ...).

Avec Qt, un objet `QPainter` permettra de dessiner sur n'importe quel périphérique (classes héritant de `QPaintDevice`): un widget, l'écran, une image, l'imprimante, ... Un tel périphérique peut être passé en paramètre au constructeur de `QPainter` (et si ce ne pas le cas, l'utilisation de ses méthodes `begin()` et `end()` sera indispensable). Pour dessiner à l'intérieur du widget, on suit généralement les étapes suivantes :

1. Instanciation d'un contexte graphique avec la classe `QPainter`
2. Ajustement des ses propriétés (stylo, pinceau, couleurs, etc...)
3. Dessin
4. Destruction du contexte graphique

### QPainter 
<st c="r">Celui qui dessine</st>
* API indépendante de la plateforme
* Sert à dessiner sur des **périphériques de dessin**
* Code identique quelque soit le périphérique

### Périphériques de dessin
<st c="r">Sur quoi on dessine</st>
* **Classes héritant de `QPaintDevice`**
* `QWidget`: Affichage à l'écran
* `QPrinter`: Impression
* `QImage`, `QPixmap`, `QPicture`: Dessin d'images 

### Window et Viewport
* Même code pour tous les périphériques 
    * **Coordonnées** **logiques** ou **Window**: Utilisé dans le code source
    * **Coordonnées physiques** ou **Viewport**: Celles du périphérique
* Qt effectue une conversion **logiques** <Fa fa="arrow-right"/> **physiques** avant d’afficher.

<br>

* Modifications:
    * Méthode `setViewport` et `setWindow`: Permettent de déplacer l'origine, adapter le facteur d'échelle.

## Poo

### Construction d'une classe
1. Attributs
2. Constructeur
3. **Si nécessaire** Setters et getters
4. methode `toString()`
5. methode `cloneOf()`