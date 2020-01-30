---
title: Presentation Minigolf
date: 2020-01-21
author: Sol
sidebar: auto
project: false
hide: false
---

## MvvM

Comme toujours, le fait de faire une application, que se soit Web, desktop ou android n'est pas tant compliqué une fois les bases acquises. Et comme à chaque fois, faire une application **maintenable** et **robuste** est une autre paire de manches.

Pour atteindre ce but, rigueur et structure sont les mots clés principaux. Le but du jeu est dans le cas d'android d'éviter à tout prix de fourer tout le code au sein des *activités* ou des *fragments* et comme à chaque fois mais avec des noms différents, de le diviser dans de nombreuses petites classes qui possèdent une responsabilité unique.

Pour atteindre ce but, les outils sont en général nombreux, on parle de Paternes d'architecture. Ce sont des espèce de méta paternes. Certains très célèbres mais paradoxalement toujours craints comme **MVC** d'autres sont moins connu comme celui que je vais vous présenter aujourd'hui, **MVVM**.

Même si dans le contexte d'Android, à peu près tout est mieux que le bon vieux bol de spaghetti qui nous vient spontanément dans les doigts dés qu'ils commencent à galoper sur le clavier, **MVVM** est probablement une des meilleurs options pour plusieurs raisons à commencer par le fait qu'elle soit recomandée par jean-jacques Google.

En effet, Google non seulement recomande cette patterne mais on retrouve un paquet d'outils calibrés pour elle au travers des nombreuses librairies dites "first-part" de l'API Android.

### Bref, c'est quoi MVVM ?

La responsabilité unique, c'est la vie, et puis c'est beau comme un camion en plus d'être envié par les plus grand star d'hollywood. Dans le cas d'MVVM, il existe 4 parties distinctes qui aident à atteindre ce but: Model, View et ViewModel. J'ai dit 4. En effet, pour des raisons politiques d'extrème droite, la dernière partie est tombée de l'acronyme. Repository. Oui MvvM devrait s'appeler MvvMR. Ou non, VVMMR en réalité. Pourquoi ?

![Image](https://i.imgur.com/e1FPizP.png)

Attention, on n'est pas dans un diagram UML, les fleches ne signifient pas spécialisation (ou héritage pour les oreilles chastes), en effet, ici la View n'est pas la classe mère de tout ce paquet de bonheur, les fleches signifient qui possède une référence sur qui.

En partant du haut du diagram, et au plus proche de l'utilisateur, nous avons la View, qui comme à chaque fois qu'un truc s'appelle View, sert à montrer les jolie choses qui nous tiennent à coeur et permetre à l'utlisateur d'intéragir avec ses petits doigts boudinés. En jargon Androidesque, la View fait toutes les choses permises par une Activity ou un Fragment.

### View
**HERE BE DRAGONS !** La view se charge exclusivement de l'**intereaction immédiate avec l'utilisateur**. Pour faire simple, pas de logique métier, pas de communication avec les sources de données. Donc comme dit précédament, c'est les Activity et les Fragments qui ont le role de view dans ce paterne. Au risque de me répéter (comme à chaque présentation), une view, donc une activity ou un fragment, ne fait qu'afficher des trucs, des trucs qui viennent de Viewmodels, gèrent les actions spécifiques à Android et dispatchent les interactions utilisateur aux ViewModels en charge de les traiter.

### ViewModel
Une ViewModel c'est un peu le ciment qui unit la View et la logique métier. Elle fournit des données à la View en allant les chercher dans les repository.

En regarde le précédent schéma une réaction seine était de se demander mais comment diable une View récupère les données qu'elle est sensée afficher? En effet les fleches ne pointent que dans une direction, celle du ViewModel en partant de la View, ce qui nous amène au point le plus important de ta vie d'aujourd'hui

