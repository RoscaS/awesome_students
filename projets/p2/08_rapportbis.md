
\pagebreak
# Introduction

Play Game of life est une adaptation multijoueur du célèbre automate cellulaire "Game of life". C'est dans le cadre du projet P2 que nous vous proposons cette nouvelle version du jeu où deux joueurs s'affrontent pour assurer la pérennité de leur colonie de cellules.

## État du projet

Fonctionnel. Les objectifs de base sont atteints mais la présentation manque de de finitions.

\pagebreak
# Inspiration

## Game of Life

Game Of Life est une automatation cellulaire imaginé par John Conway. Le cadre de jeu est une grille en deux dimensions de taille variable et potentiellement infinie dans laquelle les cases (cellules) peuvent être "vivantes" ou "mortes". Un set de règles définit l'état d'une cellule en fonction des cellules adjacentes. Une fois une paterne mise en place et lancée, la grille évolue automatiquement sans nécessiter d'intéraction supplémentaire. Popularisé dans les années 1970 le jeu est un succès dans la communauté scientifique car il exemplifie à merveille le concept de "comportement spontané d'auto organisation". Malgré que les règles simples au nombre de trois soient spécifiées au plus bas niveau, c'est à dire au niveau de la cellule, il en résulte des arrangements complexes à plus haut niveau.

## Fonctionnalités de base

Dans sa forme standard théorisée, une partie se déroule sur un grille de taille infinie composée de cellules vivantes ou mortes. La partie se déroule dans un système à temps discret avec l'état d'une cellule à un temps $t$ est déterminé par son propre état ainsi que celui de ses voisines immédiates au temps $t-1$ en se basant sur les règles suivantes:

1. Une cellule avec moins de deux cellules adjacentes meurt (**solitude**) 
2. Une cellule avec 2 ou 3 cellules adjacentes survit une génération de plus (**survie**)
3. Une cellule avec plus de trois cellules adjacentes vivantes meurt de "surpopulation" (**surpopulation**)
4. Une cellule morte avec exactement trois cellules vivantes adjacentes devient vivante (**reproduction**)

Ces règles modélisent un processus de cycle de vie basique et justifient le nom du jeu. La règle 1 représente la mort de solitude, la règle 2 la continuation de la vie, la règle 3 la mort par surpopulation et la règle 4 représente la naissance. L'état initial de la partie est la genèse après quoi chaque cellule est mise à jour en lui appliquant les règles. Un tour de jeu peut être vu comme une génération.

Ces règles sont le fruit de nombreuses expérimentations et testes de balance et sont justifiées par le respect stricte de trois critères suivants:

1. Il ne doit pas exister de situation de départ **reconnaissable** dans laquelle la croissance de population sans limites se produit.
2. Il doit exister des paternes de départ où une croissance de population sans limite se produit.
3. Il doit y avoir des des paternes initiales simples qui grandissent et changent au fur et à mesure du temps avant d'arriver à une fin qui se caractérise de 3 façons:
    * Dépopulation progressive complète (suite à une surpopulation ou une trop forte dispersion)
   * Stabilisation dans une situation stable et statique qui restera inchangée.
   * Entrée dans phase d'oscillation entre plusieurs phases qui se répètent infiniment sur deux ou plusieurs tours de jeu.

Game of life génère ce que l'informaticien Stephen Wolfram catégorise comme une automation cellulaire de classe 4 c'est à dire une automation qui a un comportement qui n'est n'y entièrement aléatoire mais pas complètement répétitive non plus.

## Nouveautés apportées

Play Game of Life (PGoL) reprend le cadre du jeu original pour lui apporter une dimension multijoueurs qui se joue au tour par tour entre deux joueurs. L'initialisation de la partie commence par le placement d'un nombre arbitraire mais équivalent de cellules par chaque joueur de son coté de la grille. Une zone tampon centrale de taille arbitraire sépare les deux camps et permet de doser l'agressivité en début de partie. Une fois la partie initialisée, alternativement chaque joueur doit:

1. Tuer une cellule adverse
2. Amener une cellule à la vie

Une fois qu'un joueur a fait ses deux actions, la simulation avance d'une génération avant de passer la main au joueur adverse. Dans ce mode de jeu, les règles sont modifiées comme suit:

1. Une cellule vivante avec moins de deux cellules adjacentes **alliées** vivantes meurt (**solitude**)
2. Une cellule vivante avec deux ou trois cellules adjacentes **alliées** vivantes vit la génération suivante (**survie**)
3. Une cellule vivante avec plus de trois cellules adjacentes (**alliées ou ennemies**) vivantes meurt (**surpopulation**)
4. Une cellule morte avec exactement trois cellules adjacentes **alliées** vivantes devient vivante (**reproduction**)


La partie se termine dans un des deux cas suivants:

* Quand un des deux joueurs n'a plus de cellules 
    * Le joueur à qui il reste des cellules gagne
* Un certain nombre de tours prédéfini en début de partie est atteint
    * Le joueur ayant le plus de cellules gagne

\pagebreak
# Analyse

## Objectifs

| Etat  | Simulation - Fonctionnalité                                               |
|-------|---------------------------------------------------------------------------|
| **V** | Deux états possible pour les cellules (vivant/mort)                       |
| **V** | Choix de la taille de la grille (longeur/largeur)                         |
| **V** | Mise à jour de l'état des cellules (cycles de jeu) en fonction des règles |

| Etat  | Multijoueurs - Fonctionnalité                                                                                 |
|-------|---------------------------------------------------------------------------------------------------------------|
| **V** | Chaque joueur possède des cellules vivantes                                                                   |
| **V** | Les cellules de chaque joueur ont une couleur spécifique                                                      |
| **V** | Après le tour d'un joueur, l'univers avance d'un cycle                                                        |
| **V** | Au tour par tour un joueur peut tuer une cellule adverse                                                      |
| **V** | Au tour par tour un joueur peut donner la vie à une cellule morte                                             |
| **V** | Un joueur gagne la partie lorsque le joueur adverse n'a plus de cellule vivante                               |
| **V** | Un joueur gagne la partie lorsqu'il a plus de cellules que son opposant à la fin d'un certain nombre de tours |

| Etat  | Interface graphique - Fonctionnalité                                              |
|-------|-----------------------------------------------------------------------------------|
| **V** | Grille affichant les cellules                                                     |
| **V** | Interaction avec la grille via le curseur                                         |
| **V** | "Guide de jeu" basique indiquant qui doit jouer et quel type d'action est attendu |
| **X** | Curseur "intelligent" en fonction de l'action attendue (multi)                    |


\pagebreak
## Cahier des charges 

Les objectifs mentionnés au sous-chapitre précédent se trouvent dans le cahier des charges en annexe *cahier_charges.md*.

## Répartition des tâches

La répartition a changée pour les raisons mentionnées dans le chapitre **6. Récapitulatifs** 

Voici la répartition initiale : 

1. Architecture : Sol, Michael
2. Modélisation conceptuelle : Nathan
3. Moteur 
    3.1 implémentation classe `Game` : Michael
    3.2 implémentation classe `Cell` : Nathan
    3.3 implémentation classe `Grid` : Michael
    3.4 Simulation : Nathan
    3.5 Multijoueur : Michael
4. Interface Utilisateur : Sol
5. Déploiement : Nathan
6. Rapport, Présentation : Michael, Sol, Nathan

Et la répartition finale : 

1. Architecture : Sol, Michael
2. Modélisation conceptuelle : Nathan
3. Moteur 
    3.1 Simulation : Sol
    3.2 Multijoueurs : Michael
4. Interface Utilisateur
    5.1 Simulation : Nathan
    5.2 Multijoueurs : Nathan
5. Déploiement : Michael
6. Rapport, Présentation : Michael, Sol, Nathan
   

## Planning 

De manière générale, les délais du planning initial, qui se trouve en annexe *planning_init.md*, ont été respectés. Malheureusement, la structure du programme a changé durant l'implémentation et a entrainé un changement des tâches. 

Voici tout même un récapitulatif des délais proches du planning initial :

| Tâche                         | Date prévue | Date effective |
|-------------------------------|-------------|----------------|
| Architecture                  | 20.11.18    | 20.11.18       |
| Modélisation Conceptuelle     | 22.11.18    | 22.11.18       |
| Interface Utilisateur(MVP)    | 03.12.18    | 03.12.18       |
| Game of Life fonctionnel(MVP) | 03.12.18    | 03.12.18       |
| Backend Multijoueurs          | 14.01.19    | 15.01.18       |
| Installeur                    | 20.01.19    | 17.01.18       |

\pagebreak
# Conception

## Spécifications

Les spécifications se trouvent en annexe specifications.md.

## Architecture logicielle

Pour permettre la mitigation du manque initial de connaissances techniques du framework Qt, la logique de l'application est séparée de sa présentation. Cette architecture présente plusieurs autres avantages notables:

* Une facilitation de la répartition des Tâches.
* Une plus forte modularité.
* Un code plus facilement maintenable.

La logique écrite en C++ pure est totalement découplée de la présentation et expose des méthodes de haut niveau sous forme d'une API qui peut être consommée par un autre programme qui se charge de la présentation. Dans le cadre de ce projet la présentation utilise Qt mais cette architecture présente l'avantage de pouvoir utiliser le moteur avec n'importe quels outils graphiques de l'écosystème C++. On peut également imager une utilisation purement statistique sans framework graphique dans le cadre d'une étude des d'automates cellulaires.


>Pour faciliter la communication interne, l'utilisation abusive des termes **backend** et **frontend** a été faite pour décrire respectivement la partie logique et présentation du projet en référence aux similitudes avec le développement web. Pour la suite de ce document le même abus de langage sera utilisé.


### Backend

Le moteur du jeu est implémenté dans la classe abstraite `Game`. Cette classe a pour vocation d'abstraire tous les éléments logiques du jeu et d'exposer une API accessible via ses spécialisations `GameMulti`et `GameSim`. Ces deux spécialisations permettent de renforcer l'aspect générique de leur mère en se chargeant de surcharger certains de ses comportements pour les adapter à des besoins plus spécifique. En l’occurrence, `GameMulti` se charge de modifier le traitement de la logique qui implémente l'application des règles du jeu pour adapter ce dernier à une version multijoueurs. `GameSim` quant à elle est la concrétisation instanciable de `Game`. 

Ce sont les deux spécialisations actuellement implémentées mais de part la généricité de l'architecture, il est aisé d'imaginer d'autres variantes qui pourraient combler des besoins spécifiques à d'autres utilisation. Par exemple, sur une branche du répo git se trouve l'ébauche d'une spécialisation qui a vocation à analyser en profondeur de nombreuses simulations afin de dresser des collections de données statistiques. Un autre cas envisageable serait celui d'une spécialisation dédiée à interfacer avec un autre langage. Cette spécialisation pourrait par exemple utiliser la bibliothèque Boost et ainsi permettre à Python via Boost.python de profiter de la rapidité de traitement de C++ pour afficher une grande quantité de données statistiques du jeu sur une page web via Django.

Cet accent sur la généricité du moteur du jeu a été initié par le désire de pouvoir aisément implémenter des éléments de gameplay dans la version multijoueurs du programme.

![Backend](https://i.imgur.com/65OQAZC.png){ width=250px }


### Frontend 

L'affichage du jeu est le résultat de plusieurs widgets mise ensemble. Il y a deux types de widget dans le projet. Les premiers sont des formulaires standards (`WidgetSettingsSim`, `WidgetSettingsMulti`) qui donnent des paramètres au backent en passant par `GameSim` et `GameMulti`. Les widgets formulaires hérite de `QWidget` et permet le lien entre les données et l'affichage. Le deuxième types de widget (`WidgetGridSim`, `WidgetGridMulti`) permettent de récupérer, traiter, afficher les données et renvoyer des informations à `game`. Ces widgets héritent de `QGraphicsView` et permettent de gèrer l'affichage d'énorement d'objet simultanément.

Tous ces widgets sont mise ensemble dans `MainWindow` et communiquent grâce à des signaux.

![Frontend](https://i.imgur.com/o7WXxsq.png)

\pagebreak
# Réalistation

## Outils et langages utilisés

### Développement 

Ce projet est réalisé grâce au framework Qt en C++.
* Qt est une API orientée objet développée en C++ qui offre, entre autres, des composants d'interface graphique appelés widgets, d'accès aux données et de connexions réseaux. 
* QGraphicsView est utilisé pour afficher une grand nombres d'objet. il permet également des transformations matricielles sur une scène et tous ses objets contenus.

### Déploiement

Un lien statique permet d'éliminer les dépendances à des bibliothèques externes en produisant un exécutable contenant toutes les bibliothèques requises au bon fonctionnement de l'application. Ceci rend le déploiement plus facile au détriment de la taille de l'exécutable et du temps pour rebuild ce dernier. 
Play Game of Life utilise peu de bibliothèques externes donc dans les limites de ce projet, l'option statique est privilégiée.

Le Qt Installer Framework (QtIF) propose un set d'outils pour créer des installeurs. Il est possible de choisir la plateforme de déploiement (Microsoft Windows, Linux et OS X) sans avoir à réecrire le code source. L'installeur adopte alors un look similaire au design natif de la plateforme choisie.

QtIF propose de plus, la possibilité d'opter pour un déploiement en ligne qui gère le déploiement de mise à jour, ou hors-ligne.
Pour le projet, le choix s'est porté sur un installeur hors-ligne. En effet, le cadre de ce projet ne justifie pas la création d'un repository sur ftp ou serveur web, permettant le téléchargement des mises à jours via l'installeur. Une version locale de ce dernier est toutefois disponible dans le dossier du projet.

## Présentation de l'application

### Simulation

La simulation est une implémentation du *Game of Life* dont les règles sont mentionnées dans le chapitre **2.2 Fonctionnalités de base**.

L'utilisateur peut modifier le pattern de départ, la taille de la grille et les règles s'il le souhaite. Il est à noter qu'il est possible de changer les règles après le lancement de la simulation, ce qui permet de garder la grille actuelle et de voir comment la situation évolue avec ce nouvel ensemble de règles.

S'il préfère dessiner les cellules dans la grille, il peut le faire grâce au clic gauche de la souris.

Pour commencer, voici un scénario avec cette situation de départ:

![Simulation, situation initiale.](https://i.imgur.com/mYAHv9x.png){ width=250px }

Après X générations, la situation ressemble à ceci:

![Simulation, situation intermédiaire.](https://i.imgur.com/By0C4dA.png){ width=250px }

\pagebreak
Arrivée à la Xème génération, les cellules sont oscillantes:

![Simulation, situation finale.](https://i.imgur.com/lUjpn7Q.png){ width=250px }

Enfin, après un changement de règle pour la même situation de départ: 

![Multijoueurs, situation finale changement de règles](https://i.imgur.com/ufpMvL0.png){ width=250px }

### Multijoueurs

La logique multijoueurs repose sur celle de la simulation. Les principales différences avec la simulation sont la présence de cellules appartenant à trois joueurs différents sur la grille de jeu, ainsi qu'un déroulement de la partie au tour par tour. Le mode multijoueurs est donc un jeu, dont le fonctionnement est décrit ci-après.

La partie débute par une phase d'initialisation durant laquelle chaque joueur place un certain nombre de cellules sur le terrain. Le joueur 1 place ses cellules, puis valide ses placements. Le joueur 2 ajoute ensuite les siennes et les valide. Les cellules de chaque joueur ont une couleur différente. Chaque utilisateur dispose d'une partie de la grille et il lui est impossible de placer une cellule hors de la zone qui lui appartient. (**non implémenté**)

\pagebreak
![Multijoueurs, phase 1.](https://i.imgur.com/pmZOjHd.png){ width=250px }

Lorsque les deux joueurs ont placés leurs cellules, la phase deux est lancée. Ici, les joueurs à tour de rôles placent une cellule alliée sur la grille et détruisent une cellule adverse. Il faut toutefois noter qu'un joueur ne peut pas détruire une cellule lui appartenant et peut, par exemple, empêcher la naissance d'une cellule ennemie en placant sa cellule judicieusement.

![Multijoueurs, phase 2](https://i.imgur.com/mPC7j8T.png){ width=250px }

Après plusieurs rounds, la partie se terminé. ici car le joueur 2 n'a plus de cellules sur le terrain. Le joueur 1 est donc victorieux.

![Multijoueurs, fin de partie](https://i.imgur.com/ciAFQpv.png){ width=250px }

Un autre scénario de fin est également possible. Les utilisateurs ont le choix de définir un nombre de tours qui, lorsqu'il est atteint, termine la partie. S'il reste des cellules vivantes dans chaque camp, le joueur en ayant le plus sur le terrain gagne la partie.

L'interface multijoueur est , comme la simulation, composé d'un widget settings qui permet de changer les règles du Game of life afin de voir les cellules évoluer différement.
De plus, ceci ajoute un élément de rejouabilité puisque la modifications de ces règles change le gameplay.

### Eléments de gameplay 

Quelques éléments intéressants de gameplays sont à noter:

1. Stratégiquement, les situations compactes et/ou statiques sont avantageuses
2. Certains modèles semi-complexes disparaissent au tour suivant, par exemple :
3. Il est possible de contrer la génération d'une cellule adverse en plaçant une cellule alliée au même endroit.

\pagebreak
## Tests 

### Test du logiciel

#### Simulation


| Action                                               | Résultat attendu                                        | Résultat obtenu                                         |
|------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|
| Redimensionner la fenêtre                            | La fenêtre se redimensionne                             | La fenêtre se redimensionne                             |
| Redimensionner lors de l'exécution                   | La fenêtre se redimensionne                             | La fenêtre se redimensionne                             |
| Tabuler dans le menu                                 | Le curseur parcours les zones éditables du menu         | Le curseur parcours les zones éditables du menu         |
| Cliquer sur la grille                                | Ajoute une cellule / Détruit une cellule                | Ajoute une cellule / Détruit une cellule                |
| Cliquer sur le bouton start                          | Lance la simulation                                     | Lance la simulation                                     |
| Cliquer sur le bouton valider la taille              | La grille change de taille                              | La grille change de taille                              |
| Cliquer sur le bouton reset pendant l'exécution      | Remet les settings et la simulation à leur état initial | Remet les settings et la simulation à leur état initial |
| Cliquer sur le bouton reset pendant la pause         | Remet les settings et la simulation à leur état initial | Remet les settings et la simulation à leur état initial |
| Changer les règles de base                           | Les règles sont appliquées                              | Les règles sont appliquées                              |
| Changer les règles pendant l'exécution               | Met la simulation en pause et applique les règles       | Met la simulation en pause et applique les règles       |
| Changer les règles pendant la pause                  | Applique les règles                                     | Applique les règles                                     |
| Changer le modèle(pattern)                           | Applique le modèle à la grille                          | Applique le modèle à la grille                          |
| Changer le modèle pendant l'exécution                | Pas d'effet                                             | Pas d'effet                                             |
| Cliquer sur le bouton start avec un modèle aléatoire | Lance la simulation avec un modèle aléatoire            | Lance la simulation avec un modèle aléatoire            |
| Cliquer sur le bouton start avec un modèle prédéfini | Lance la simulation avec un modèle prédéfini            | Lance la simulation avec un modèle prédéfini            |

#### Multijoueurs


| Action | Résultat attendu | Résultat obtenu |
| -------- | -------- | -------- |
| Appuyer sur start   |  Lance une partie   |Lance la partie |
| Placement(joueur 1): cliquer sur la grille   |  Ajoute un nombre limité de cellules joueur rouge   |Ajoute un nombre limité de cellules joueur rouge |
| Appuyer sur valider   | Le jeu passe à la phase suivante   |  Le jeu passe à la phase suivante  |
| Placement(joueur 2): cliquer sur la grille   |  Ajoute un nombre limité de cellules joueur bleu   | Ajoute un nombre limité de cellules joueur bleu|Ajoute un nombre maximum de cellules joueur rouge|
| Tour(joueur 1): cliquer sur une cellule vide   | Créé une cellule rouge   |  Créé une cellule rouge  |
| Tour(joueur 1): cliquer sur une cellule ennemie   | Détruit la cellule ennemie   |  Détruit la cellule ennemie |
| Tour(joueur 2): cliquer sur une cellule vide   | Créé une cellule bleue   | Créé une cellule bleue   |
| Tour(joueur 2): cliquer sur une cellule ennemie   | Détruit la cellule ennemie   | Détruit la cellule ennemie|   | Appuyer sur reset pendant une partie | réinitialise le multijoueurs à sont état initial |réinitialise le multijoueurs à sont état initial|


\pagebreak
### Test de l'installeur


| Etat  | Test                                                                 |
|-------|----------------------------------------------------------------------|
| **V** | Installation sur une machine vierge                                  |
| **V** | L'application se trouve dans le dossier choisi durant l'installation |
| **V** | Lancement de l'application sur une machine vierge                    |

\pagebreak
# Récapitulatif 

Dans le cadre du projet P2, il nous était demandé de réaliser une application graphique en C++ à l'aide du framework Qt, par groupes de 3 personnes. Derrière cette consigne à priori simple, se cache toute la complexité de la gestion d'un projet d'une envergure relative. Après 3 mois sur le projet, de nombreuses leçons ont été tirées.

>Cette partie se veut moins technique dans sa rédaction. En effet, elle concerne notre ressenti et implique donc l'utilisation de pronoms personnels.

## Leçons

### Organisation

L'organisation est l'aspect qui a été le plus complexe à appréhender. Dès le départ, de nombreuses difficultés ont surgit: 

* Comment diviser le projet en tâches ? 
* Comment répartir ces tâches de façon efficace? 
* Quelle est la priorité de ces tâches ? 
* ...

Lors des discussions pour tenter de répondre à ces questions, la réalisation que chacun avait un point de vue et que ce dernier était valable, même si en conflit avec un autre, apporte son nouveau lot de problèmes organisationnels: 

* Quelle système "politique" adopter ? 
* Sommes-nous une démocratie ? 
* Avons-nous besoin d'un chef ?

Avec toutes ces questions, le manque d'expérience, le manque de confiance en soi, des problèmes de motivation, ainsi que des habitudes procrastinatoires ont fait surface.

Malgré ces difficultés, grâce à un certain automatisme à "faire ce qu'il nous est demandé de faire", les étapes préliminaires de planification ont été atteintes. Malheureusement, ces dernières étaient moins motivés par les besoins du projet que par ce à quoi elles devaient ressembler, ce qui allait s'avérer être un nouveau gros problème.

Avec le recule, il est clair qu'une mauvaise répartition initiale des tâches a causé beaucoup de dégâts à la motivation. Le principale défaut de cette répartition était de ne pas permettre de travailler de façon indépendante sur un module du projet pour ainsi créer un effet d'inertie induit par l'impression d'avancer dans nos objectifs. 

À partir de là "au fond du gouffre" une nouvelle répartition spontanée a surgit. Une première base de travail fondationnelle a été fournie. Cette base découpait le projet en modules de façon plus clair que ce qui avait été théorisé pendant la planification et avait également l'avantage d'être modulaire avec des entrées et des sorties bien définies. À partir de là et encore une fois de façon spontanée, les gens se sont mis à être indépendants dans leur travail et les petites cases vertes des objectifs ont commencées à se remplir.

### Ce qu'on en retire

#### Répartition

Lors de la division du projet en tâches, il est important dans un premier temps, de définir des modules indépendants les un des autres. Dans un second temps, une fois cette première division définie, il est possible au sein même d'un module de trouver des sous-modules qui sont également indépendants les uns des autres au sein de ce même module principale. Finalement, l'élément modulaire le plus petit est ce que nous avons appelé le "composant". Ce dernier pour rester dans la logique précédente, serait un "sous-sous-module". Ce composant représente une unité sur laquelle travailler, autrement dit une tâche.

Il est nécessaire que les entrées et les sorties de chacun des modules et sous modules soient bien définis. Il doit en ressortir un "flow" naturel des données qui ne devrait pas être brisé pendant que les membre du groupe travaillent sur les composants. Si le flow des sous-modules est intacte au moment d'un "push" cela veut dire que peu importe le niveau d'optimisation d'un composant, l'application reste fonctionnelle et n'est pas gangrenée par des problèmes difficilement identifiables. 

#### Base de travail

Un premier jet de code fondationnel non optimisé qui lie les modules entre eux avec des données factices (éventuellement statiques) pour matérialiser le flow entre les sous-modules permet d'offrir un cadre clair à leurs objectifs respectifs.
Il est fondamental de comprendre le but de cette démarche et le fait de passer du temps sur de l'optimisation évidente est contre productif.

Cette étape pourrait même se retrouver plus tôt dans le cycle de vie du projet car elle permet de cerner et structurer de façon plus évidente les besoins de chaque sous-module et ainsi pouvoir définir les composants (et donc les tâches) qui le compose. 

Après discussion en interne, il ressort que cette étape pourrait avantageusement remplacer la cogitation intense, abstraite et "ignorante" (dans le sens manque d'expérience qui induit une incapacité à cerner les besoins réels) de la division du projet en tâches pour des projets de petites envergures dédiés aux novices de la gestion de projet. Le but en serait le même, mais la façon d'y parvenir différente.

> Une telle répartition couplée à ce travail de fondation permettrait de naturellement faire émerger les tâches prioritaires et donc permettre de dresser un ordre de priorité.

\pagebreak
# Conclusion

De manière générale, nous sommes (partiellement) satisfaits du résultat. Nous avons certes atteint tous nos objectifs mais nous espérions pouvoir ajouter des fonctionnalités supplémentaires. La mauvaise gestion des tâches a malheureusement entravé notre progression dans la réalisation du projet.

Malgré cela, nous avons beaucoup appris quant à la gestion d'un projet de groupe.
De plus, ces 3 mois nous ont permis d'acquérir plus d'aisance dans l'utilisation de Qt, le langage c++ et les différents autres outils que nous avons utilisés.

Nous sommes aussi fiers de la généricité de notre moteur. Grâce à elle, l'ajout de nouvelles fonctionnalités peut se faire de manière aisée.

Aussi, nous avons encore beaucoup d'idées pour ce projet que nous espérons pouvoir concrétiser par la suite.

En conclusion, nous retenons l'importance que portent la répartition des tâches et la planification du projet pour sa réussite.

\pagebreak
# Bibliographie

* Contributeurs à Wikipedia, "Qt",  Wikipédia, l'encyclopédie libre, 27 novembre 2018, 13:08 UTC, [voir la page](https://fr.wikipedia.org/w/index.php?title=Qt&oldid=154305718), 20.01.2019
* THE QT COMPANY, "Linking to Static Builds of Qt", Qt documentation, [voir la page](http://doc.qt.io/QtForDeviceCreation/qtee-static-linking.html), 17.01.2019
* THE QT COMPANY,  "Qt for Linux/X11 - Deployment", Qt documentation, [voir la page](http://doc.qt.io/qt-5/linux-deployment.html), 17.01.2019
* Contributeurs à Wikipedia, 'Jeu de la vie',  Wikipédia, l'encyclopédie libre, 7 janvier 2019, 19:21 UTC, [voir la page](https://fr.wikipedia.org/w/index.php?title=Jeu_de_la_vie&oldid=155593783), 29.10.18 

