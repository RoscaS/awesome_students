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