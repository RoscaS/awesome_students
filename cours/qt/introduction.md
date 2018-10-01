---
title: Introduction à Qt
date: 2018-09-22
sidebar: auto
author: Sol
---

## En vrac
* [tldrlegal.com](tldrlegal.com)


## Framework vs bibliothèque
### Framework
Application à trou, de nombreuses fonctionnalités se passent en background gérées par le framework.

* C'est le framework qui gère le flow du programme et non le programmeur
* Apporte un ensemble de bibliothèques
* Conventions de nommage




### Bibliothèque (API)
* Collection de fonction et de classes
* Permet d'interagire avec une application
* Via classes et fonctions


### Design pattern
* Une bonne solution à un problème récurent
* nombreux


# Introduction Qt avec QtCreator

## Structure d’une application Qt
La plupart des applications écrites avec Qt ont la même structure :
* On instancie un objet QApplication.
* On instancie l’objet principal qui sera affiché dans notre fenêtre.
* On appelle sa méthode show() pour afficher l’objet dans la fenêtre.
* On lance l’application en appelant la méthode exec() de l’objet QApplication.
* On termine le programme en retournant la valeur renvoyée par la méthode exec().

## Shortcuts QtCreator
* Auto indent: `ctrl` `i`

## Classes et methodes
### QApplication
* `QApplication app(argc, argv)`
  * `exec`: lance la boucle principale

## Macro
* `Q_OBJECT`: nécéssaire pour les signaux et slots ?
* 


## En vrac
### fichier pro
Pour avoir accès à `QApplication` il faut ajouter dans le fichier `*.pro` les lignes suivantes:

```pro
QT += widgets
SOURCES +=\
    main.cpp \
```



## Slots & Signals
* Ne pas oublier  de set la macro `Q_OBJECT`

### Overview
Favoriser la methode des pointeurs sur des fonctions 
```cpp
connect(slider, &QSlider::valueChanged, 
        spinbox, &QSponBox::setValue );
```

Si message d'erreur fallback sur les macros (ou casting sur la bonne surcharge)
```cpp
connect(slider, SIGNAL(valueChanged(int)),
        spinbox, SLOT(setValue(int)));
```

6![Image](https://i.imgur.com/90y8O2R.png)


### Q_OBJECT
EN cas de soucis de connexion lors du build 8/10 chance que ce soit car on a oublié de la call dans la classe qui utilise les signals.

> Checker MOC
