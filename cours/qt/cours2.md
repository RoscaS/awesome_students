---
title: Cours n°2
date: 2018-09-24
author: Michael Kneuss
sidebar: auto
---
## Bibliotèques et Frameworks

* Bibliothèque :	
  * ensemble de fonctions
* Framework :	
  * Programme à trou
* Design pattern :	
  * Bonne manière de faire les choses.

[Licenses](https://tldrlegal.com
)

### Qt
* Write once, deploy everywhere.
* Fiable
* Documentation bien faite
* Java/Python/C++

### Signaux et Slots
* Pour communiquer entres objets en QT on va utiliser les signaux et slots.
* Pour que la connexion signal-slot soit valide, ils doivent avoir la même signature (le même type).

**Etablir une connection :**
`connect( slider, &QSlider::valueChanged, spinbox, &QSpinBox::setValue);`

`connect( slider, SIGNAL(valueChanged(int), spinbox, SLOT(setValue(int)));`
**Custom Signal et Slot**
* myclass.h:
```c++
class MyClass : public QObject
{
    Q_OBJECT // marker for moc
    // ...
signals:
    void valueChanged(int value);
};
```
* myclass.cpp
```c++
//no implementation for a signal
```
* Sending a signal
```c++
emit valueChanged(value);
```

#### Compilation
Lors de la compilation la commande *moc* permet de convertir la syntaxe QT en c++. Pour ce faire, on utilise la macro QObject dans le .h

#### Les différentes règles pour les connexions
![](https://i.imgur.com/tOHRdzj.png)

### Gestion de la mémoire
* On a la possibilité de passer en argument l'adresse d'un parent (pour les QObject).
    * Passé au constructeur
    * Chaque objet possède la liste de ses enfants
    * tous les enfants sont détruits lorsque l'objet est détruit
    * ne pas confondre avec l'héritage de classes
* Exemple :	
![](https://i.imgur.com/b1Tul6G.png)
    * L'objet window est le parent du bouton OK
    * Lorsque la fenêtre est détruite, le bouton l'est aussi

### Build en ligne de commande
* make: Exécute les règles du fichier Makefile
* Makefile: list de règles pour contruire un programme
![](https://i.imgur.com/qGz36NA.png)
* **qmake**: Générateur de Makefile pour Qt
    * qmake -project: Création du fichier .pro à partir des sources
    * qmake: Création du Makefile à partir du .pro
* **make** : Construction de l'exécutable à partir du Makefile
    * Avec MinGW: mingw32-make.exe
    * make debug, make release, make clean
    * **uic**: Génère les classes C++ Qt à partir des fichiers d'interfaces
    * **moc**(Meta Object Compiler): Convertit les extensions Qt en C++
    * **rcc**: Convertit les fhichiers ressources en fichiers C++
![](https://i.imgur.com/DEAXKGw.png)

### Déploiement d'une application
* Build en version release
* Liaison aux bibliothèques Qt
    * Dynamique (par défaut)
        * Distribuer les DLL de Qt avec l'exécutable
        * windeployqt recopie les dépendances
    * Statique
        * Bibliothèques Qt intégrées à l'exécutable
        * Reconstruire Qt en statique
        * [Lien du wiki](https://wiki.qt.io/Building_a_static_Qt_for_Windows_using_MinGW)
* Tester l'exécutable sur une machine vierge (sans Qt)

### Approches Qt pour application graphiques
* **Widgets: Applications desktop standards**
    * Fenêtre avec contrôles standard, barres de menus, outils...
* **GraphicsView Framework: Grand nombre d'objets 2D (MVC)**
    * Une classe pour le modèle et une autre pour les vues
    * Interactions, animations et transformation des objets
* QtQuick: Optimisé pour animations et interfaces tactiles (embarqué, mobile)
* OpenGL: Pour un rendu optimal des scènes 3D
* Web: Moteur de rendu web
    * affichage de contenu web et applications hybrides (Qt/Html5)
