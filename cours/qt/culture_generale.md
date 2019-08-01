---
title: Culture générale
date: 2018-12-03
author: "Sol"
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

## XML
XML (1998) ou eXtensible Markup Language est un langage de balisage générique. 

* Créé pour faciliter les échanges de données entre les machines et les logiciels.
* S'écrit à l'aide de balises.
* Recommandation du W3C (technologie avec des règles strictes à respecter).
* Compréhensible par tous (hommes etmachines).
* Permet de créer notre propre vocabulaire grâce à un ensemble de règles et de balises personnalisables.
* Compatible web.
* Standardisé, extensible et configurable (permet de décrire n'importe quel type de données).
* Alternative à SGML (Standard Generalized Markup Langage) qui est le première du genre, puissant mais complexe mais surtout inadapté au web.

<br>

* **Langage de description**: Décrit une structure, un ensemble de données selon un jeu de règles et de contraintes définies. Ex: XML, HTML, JSON
* **Langage de balisage**: S'écrit grâce à des balises qui permettent de structurer de manère **hierarchisée** et organisée les données d'un document.
  * **Générique**: Dans ce contexte, signifie qu'il est possible de créer de nouvelles balises. Il n'est pas obligatoire d'utiliser un ensemble de balises qui existent déja.

<br>

### Définition d'un document XML (DTD)
Document Type Définition (**Définition de type de Document**), ensemble de règles imposées à un document. Ces règles permettent de décrire la façon dont le document XML doit être construit et peuvent être de nature différente. Ex:
  * Imposer la présence d'un attribut ou d'une balise
  * Imposer l'ordre d'apparition des balises
  * Imposer le type de données

Permet la standardisation des données XML. 
* Pratique pour le travail à plusieurs
* Gain de temps aux programmes qui utilisent ces documents:
  * Le document n'est pas valide: je ne tente pas de l'exploiter.
  * Le document est valide: je sais comment l'exploiter.

On parle de 
* Document **bien-formé**: Si il respecte les règles syntaxique de XML.
* Document **valide**: Si en plus d'être bien-formé, il respecte le modèle de document.

#### Exemple
Une DTD est une grammaire non contextuelle qui définit la structure générique d’un document.

Une lettre est composée d’un expéditeur suivi d’un destinataire, suivi du lieu, la date, un objet, un corps et enfin d’une signature. Le corps lui-même est une suite de paragraphe. Cette description revient à une définition de grammaire comme suit : 

```dtd
lettre -> expéditeur, destinataire, lieu, date, objet, corps, signature
corps -> paragraphe*
```

Une instance de lettre composée en suivant ces règles:

```xml
<lettre>
<expéditeur>
    Mr. Alain Pilote
    Rue de la fontaine 5
</expéditeur>
<destinataire>
    Mr. Pierre Lemaître
    Rue de la source 15
</destinataire>
    <lieu>
        Neuchâtel
    </lieu>
    <date>
        12-12-2006
    </date>
    <objet>
        Demande de réparation
    </objet>
    <corps>
        <paragraphe>
            Bonjour, suite à des ....
        </paragraphe>
        <paragraphe>
            Nous restons à votre ...
        </paragraphe>
    </corps>
    <signature>
        Vlad
    </signature>
</lettre>
```

### Parseur

Le parseur (analyseur syntaxique) est un outil logiciel permettant de parcourir un document et d'en extraire des informations. 
Dans le cas de XML (on parle alors de parseur XML), l'analyseur permet de créer une structure hiérarchique contenant les données contenues dans le document XML.

Deux modèles:
* Hierarchique (**DOM**)
* Événementiel (**SAX**)

#### DOM

Document Object Model (1998) est un **parseur** XML. Il permet de lire un document XML et d'en extraire les différentes informations (éléments, attributs, commentaires, ...).

* Standard W3C
* Représentation d'un document sous forme d'arbre

**XML**:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
<repertoire>
  <!-- John DOE -->
  <personne sexe="masculin">
    <nom>DOE</nom>
    <prenom>John</prenom>
    <telephones>
      <telephone type="fixe">01 02 03 04 05</telephone>
      <telephone type="portable">06 07 08 09 10</telephone>
    </telephones>
  </personne>
</repertoire>
```

**DOM**:

<Col proportions="10/2" vAlign="0">
<template slot="left">

<Media
    src="https://i.imgur.com/AKszQtH.png"
    url="https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/arbre_xml_2.PNG"
    width=450
/>

</template>
<template slot="right">


<Media
    src="https://i.imgur.com/1BD2Bmw.png"
    width=150
/>



</template>
</Col>


Éléments clé du parseur DOM:

* **Document**: Le document XML dans son ensemble. Composé d'un **prologue** et d'un **corps**.
* **Node**: Toute élément de l'arbre est un noeud (aussi bien valeur qu'attribut).
* **Element**: Représente une balise d'un document XML (bleu sur le schéma).
* **Attr**: Un attribut (orange sur le schéma).
* **Text**: Contenu d'une balise (vert sur le schéma).


DOM se divise en deux spécifications :

* La spécification DOM level 1 (DOM niveau 1) se séparant en deux catégories
    * Core DOM level 1: La spécification pour les documents en général (dont XML)
    * HTML DOM level 1: La spécification retenant uniquement les méthodes applicables à HTML


#### SAX
Une application utilisant SAX implémente généralement des gestionnaires d'événements, lui permettant d'effectuer des opérations selon le type d'élément rencontré.

```xml
<personne> <nom>Pillou</nom> <prenom>Jean-François</prenom> </personne>
```

Une interface événementielle telle que l'API SAX permet de créer des événements à partir de la lecture du document ci-dessus. Les événements générés seront:

```
start document start 
element: personne start 
element: nom characters: Pillou end 
element: nom start 
element: prenom characters: Jean-François end 
element: prenom end element: personne end document
```

Ainsi, une application basée sur SAX peut gérer uniquement les éléments dont elle a besoin sans avoir à construire en mémoire une structure contenant l'intégralité du document.

#### Comparaison

Les analyseurs utilisant l'interface DOM souffrent du fait que cette API impose de construire un arbre en mémoire contenant l'intégralité des éléments du document en mémoire quelle que soit l'application. Ainsi pour de gros documents (dont la taille est proche de la quantité de mémoire présente sur la machine) DOM devient insuffisant.


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

## Bibliothèques

![Image](https://i.imgur.com/Y1rN1GA.png)

Dans le cadre des langages compilé, 2 grandes étapes permettent de passer du code source à l'exécutable:

1. **Compilation**: Chaque module (<Def def=".h">fichier entête</Def> et <Def def=".cpp">définition</Def> correspondante) est compilé en code <Def def=".obj ou .o">objet</Def>. Les fichiers objets obtenu ne contiennent que les instructions qui figurent explicitement dans le code source. Ils ne contiennent pas le code des fonctions qui sont utilisées depuis des bibliothèques (stdio, math, ...) **mais seulement des liens** (références) vers les fonctions à appeler.
2. **Édition de liens**: C'est l'étape suivante. Elle transforme l'ensemble des fichiers objets d'un projet en un fichier exécutable. C'est pendant cette étape que le code des fonctions contenues dans les bibliothèques sera intégré à l'exécutable (**résolution des liens**).

<br>

![Image](https://i.imgur.com/mjekctN.png)

L'édition de liens peut avoir lieu à 2 moments:

1. Avant de générer l'exécutable. Dans ce cas on parle de **bibliothèque liée statiquement** (static library). Le code externe est copié dans l'exécutable et **l'exécutable est indépendant**. Extension `.lib` sous windows et `.a` sous linux mac os.
2. Avant d'exécuter le programme (load time) ou pendant l'exécution (run time). Dans ce cas on dit que la **bibliothèque est liée dynamiquement** (dynamic library). Les bibliothèques dynamiques sont stockées dans des fichiers qui peuvent être stockés  dans le dossier de l'application ou dans un dossier système. Extension `dll` (Dynamic Link Library) sous windows, `so` (dynamic Shared Object) et préfixées par **lib** sous linux.


L'utilisation de bibliothèques dynamiques implique:
* Un exécutable plus compact (pas de copie du code)
* Livraison de la bibliothèques avec l'exécutable
* Lancement de l'exécutable plus long (vérifier si la bibliothèque est déja en mémoire, la charger au besoin, résoudre les liens dans l'exécutable)
* Instance unique du code partagé entre tous les code qui utilisent cette bibliothèques
* Éléments standardisés (ex: les boites de dialogue standard)
* Possibilité de faire évoluer la bibliothèque sans recompiler l'executable.

### Chargement

**Sous windows**, au lancement de l'application, l'os va chercher le fichier de la bibliothèque dans les répertoires:
* De l'exécutable
* Système de l'OS (`windows\system32', `windows\system`, `windows`)
* Courant
* Listés dans la variable **PATH**

Sous linux:
* Liste **rpath** dans l'exécutable (modifiable à la compilation)
* Dossiers par défaut de l'OS (`usr/local/lib`, `usr/lib`) et les dossiers listés dans `etc/ld.so.conf`


## Flux

* Un ensemble d'informations à transférer, échelonnées dans le temps. Des données transmises séquentiellement, une après l'autre de la première à la dernière.
* On peut représenter de façon logique un système informatique qui communique avec des périphériques. **Les informations échangées portent alors le nom de flux** et les périphériques sont alors la source ou la destination du flux: fichiers, socket, base de données, programme, strings, ...
* L'interet de cette représentation est que du point de vue du programmeur, envoyer des informations vers la console, sur le réseau ou dans un fichier seront des opérations similaires. **Le périphérique change mais le flux de données envoyé reste le même**.

<Container header="Sérialisation" type="info">
 
 * Transformer un objet en mémoire en un flux de données séquentiel. Permet de transférer les membres d'un objet vers un flux de données (sauvegarde dans un fichier, envoie par le réseau...).

* La **désérialisation** est l'oppération inverse. A partir de données séquentielles, il faut remonter un objet.
 
 </Container>

* Un flux de données ne dépend pas de la plateforme utilisée
* En générale, l'utilisation d'un flux se fait en 3 étapes:
  1. Création/ouverture d'un flux
  2. Lecture ou écriture
  3. Fermeture



## Programmation événementielle


### Séquentielle vs événementielle
La différence porte sur la façon dont l'utilisateur peut interagire avec le programme et par extension sur la façon de concevoir le programme.


| Programmation séquentielle                                                              | Pogrammation événementielle                                              |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Programme piloté par le code                                                            | Programme piloté par l'utilisateur                                       |
| Interaction possible à certains moments spécifiques                                     | Interaction possible à tout moment                                       |
| Le programme attend les entrées de l'utilisateur                                        | l'OS reçoit les entrées de l'utilisateur et les transmet au programme    |
| Déroulement prévisible, détérminé par l'ordre des instructions                          | Déroulement déterminé par les actions de l'utilisateur                   |
| Le dévéloppeur prévoit le moment où l'utilisateur peut intervenir en plus du traitement | Indique à l'OS quel traitement effectuer pour chaque type d'intervention |

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
