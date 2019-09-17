---
title: Introduction
date: "2019-09-17"
author:  "Sol"
sidebar: auto
project: false
hide: false
---

## Liens
* [Openclassroom](https://openclassrooms.com/fr/courses/4517166-developpez-votre-premiere-application-android)

## En vrac

### /dev/kvm issue

* `sudo chmod 777 -R /dev/kvm`

## Android studio

### Projet

#### Répertoire Manifests

Contient généralement un seul fichier : le fichier **AndroidManifest.xml**. C'est la **carte d'identité de l'application**. Il permet entre autres de préciser le nom de l'application, l'icône à utiliser, quelle activité lancer au démarrage, etc.

#### Répertoire Java

Contient l'ensemble du code source Java ou Kotlin de l'application, ainsi que les différents tests associés. On trouve le fichier **MainActivity** (l'extension .java est automatiquement masquée par l'IDE). Au fur et à mesure de l'avancement du projet, ce répertoire se remplira de fichier, voire de sous-dossiers afin d'isoler les composants fonctionnels entre eux.

#### Répertoire Res

Ce répertoire contient toutes les ressources de l'application, et comprend quatre sous-répertoires :
* Le dossier **drawable**: Contient l'ensemble des images et contenus à afficher à l'écran (par exemple une image de bouton ou un logo).
* Le dossier **layout**: Contient l'ensemble des fichiers layout de votre application.
* Le dossier **mipmap**: Contient principalement l'icône de l'application.
* Le dossier **values**: Contient différents paramétrages et valeurs, par exemple les couleurs à utiliser dans l'application, les différentes traductions à utiliser ou les styles graphiques à appliquer.

## Activity

Une <Def def="Activity">activité</Def>, est une brique fondamentale d'Android (component). C'est le point d'entrée de n'importe quelle application Android. Une activité a pour **rôle principal d'interagir avec l'utilisateur**. C'est une classe Java ou Kotlin, qui **hérite obligatoirement** de la classe Android `Activity` ou `AppCompatActivity`.

<Container type="info" header="Activity et AppCompatActivity">

Par définition, une activité Android hérite toujours (plus ou moins directement) de la classe Activity. Sur les versions d'Android un peu plus anciennes, certaines fonctionnalités récentes ne sont pas officiellement supportées. De ce fait, hériter d'AppCompatActivity permet de corriger ce problème en "émulant" ces nouvelles fonctionnalités.

</Container>

Si on souhaite avoir deux écrans dans notre application, (Un écran de connexion et un écran de tutoriel), on aura généralement deux activités: 
* Une première qui gère la partie connexion et la
* Une seconde qui gère l'affichage du tutoriel. 

Par convention, le nom d'une activité est toujours suffixé par **Activity** et écrit en **CamelCase**. Ainsi, on nommera nos activités `LoginActivity` et `TutorialActivity`.

## Layouts

Afin de déterminer quels éléments graphiques utiliser et comment les positionner à l'écran, on utilise un fichier layout. Un fichier layout est un fichier **XML** que l'activité va charger après avoir été instanciée. Ce fichier XML est toujours **stocké dans le répertoire res/layout** du projet. Par convention, s'il est lié à une activité, il est toujours préfixé par activity, suivi du nom de l'activité, le tout en minuscule et séparé par un underscore (_). Ainsi, le fichier layout associé à `MainActivity` est `activity_main.xml`. De la même façon, si nous avions eu une activité nommée `LoginActivity`, nous aurions créé le fichier layout associé `activity_login.xml`.

### Conteneur

Afin de pouvoir afficher des éléments à l'écran, il est impératif d'utiliser un conteneur. Un conteneur est un élément particulier permettant d'organiser les éléments qu'il contient entre eux.
Le conteneur, lui contient un layout parmis les suivants:

* **FrameLayout**: Permet de positionner les éléments les uns au dessus des autres.
* **LinearLayout**: Permet de positionner les éléments les uns à la suite des autres, dans le sens horizontal ou vertical.
* **RelativeLayout**: Permet de positionner les éléments les uns par rapport aux autres.
* **ConstraintLayout**: Comme le RelativeLayout, mais avec des règles de positionnement beaucoup plus puissantes.

#### Attributs

##### Occuption de l'espace

A minima, les deux attributs fondamentaux sont `layout_width` et `layout_height`. Ils permettent de déterminer comment afficher un élément au sein de son conteneur. Les deux valeurs possibles sont :

* `match_parent`: L'élément doit s'étendre le plus possible afin d'occuper le maximum d'espace disponible offert par son parent (vous pourriez voir apparaître de temps en temps fill_parent au détour d'un tutorial ou d'un site web : c'est un attribut obsolète, ancêtre de `match_parent`)
* `wrap_content`:L'élément doit s'étendre le moins d'espace possible et n'occuper que la place nécessaire à l'affichage de son contenu.

