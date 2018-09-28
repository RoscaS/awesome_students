---
title: VsCode Quake mode
date: 2018-09-27
sidebar: auto
author: "Steven, Sol"
---

## Liens utiles
* [Tilix](https://github.com/gnunn1/tilix)
* [i3](https://i3wm.org/docs/)
* [compton](https://wiki.archlinux.org/index.php/compton)
* [i3ipc](https://i3ipc-python.readthedocs.io/en/latest/#some-examples)

## Préambule

Inspiré de la console du jeux d'action Quake, certains terminaux proposent un affichage *Quake-mode*. L'idée est de reprendre le même concept mais pour un éditeur de type VsCode, Sublime Text,... Dans le but d'avoir un éditeur md au bout d'un shortcut peu importe le workspace utilisé.

![Image](https://i.imgur.com/UpW1yXs.png)


## Contexte
I3 window manager + Arch Linux

## Propriétés
* Keybind en mode toggle
* Position: fixed (+ float pour i3) top
* transparence modulable
* optionnel
  * set width
  * set height

## Comportement
* L'éditeur n'est jamais kill uniquement hide
* Peu importe le workspace, quand toggle, c'est la même instance dans la même état qui s'affiche.
* Si ouvert, reste actif lors d'un changement de workspace
* Auto-save à chaque toggle (out)

## Problèmes
* AutoSave
* Gestion de la transparence
* Instance d'une window particulière hors de la grille alors que les autres instances y sont
* Fixed

## Inspirations
* Quakemode de [Tilix](https://github.com/gnunn1/tilix)
  * Son behave dans i3:
    * Quand hide il n'apparait sur aucun workspace (n'est pas caché sur un workspace lointain)
    * l'instance quake n'est pas grid alors que les autres le sont

* Gestion on th fly de la transparence d'une fenetre de KDE (avec la molette de la souris par ex). Vérifier si c'est [compton](https://wiki.archlinux.org/index.php/compton) qui gère la transparence de KDE aussi.