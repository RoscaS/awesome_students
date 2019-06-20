---
title: "Yarts: Rapport (draft)"
date: 2019-06-15
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: false
hide: false
---

<st c="rgb">Draft !</st>

## 1. Introduction

Tout projet possède deux composantes principales. Une composante technique, c'est ce qui touche aux différentes phases du cycle de vie d'un projet et dont l'acteur principal est le projet lui même. La seconde composante qui semble généralement négligée dans ce genre de rapports est celle du ressenti humain qui exécute les diverses phases.

<!-- Ce second point justifie selon moi un écrart dans les rêgles de la rédaction technique pour permetre l'expression de ressentis personnels concernant divers éléments. Il me semble qu'en l'état aucun des membre du groupe travaillant sur le projet n'a un niveau d'expert et peut se permetre d'être catégorique sur un point particulier et de par ce fait, je prends la responsabilité  d'utiliser l'emploie de pronoms personnels et assume le manque d'objectivité de certains passages.  -->

Ce document tente de relater l'histoire du projet YARTS. Comment ce qui aurait pu n'être qu'une formalité en périférie d'un semestre déjà bien chargé est devenu l'objet d'une passion ainsi qu'un excellent professeur pour une gamme très large de points clé de la formation d'un ingénieur en développement logiciel. 

## 2. Contextualisation

Ce chapitre est un complément à l'introduction. Il vise à poser les fondations contextueles du projet ainsi que de définir une base de communication pour que le lecteur puisse se faire une idée de comment les rédacteurs concoivent certains éléments clé du contexte dans le quel le projet s'inscrit. 

### Jeu de stratégie en temps réel

Traditionnellement les jeux de stratégie se jouent au tour par tour. Aussi bien sur plateau qu'avec des cartes. Les jeux de stratégie sont légion, le plus célèbres d'entre eux étant probablement les échecs. Tous ces jeux ont en commun la nécessité pour atteindre la victoire de réfléchir à une stratégie et de l'adapter au fur et à mesure que le ou les autres joueurs tentent eux aussi de développer leur propre stratégie. En général dans ce genre de jeux, le temps n'est pas un facteur limitant. Par exemple, aux echecs, un joueur aura beau être capable de déplacer très rapidement son fou, ça n'aura aucun impacte sur l'issue de la partie.

L'avénement de l'informatique et la puissance de calcul des ordinateurs a permis de faire évoluer la diversité dans les jeux de stratégie en y ajoutant la notion de temps réel. Dans ce genre de jeu, les joueurs ne jouent plus chacun à leur tour mais jouent maintenant de façon concurente. Jouer vite est une qualité qui peut se mesurer en nombre d'actions par seconde et même si ce n'est pas forcément le joueur le plus rapide qui gagne automatiquement la partie, la capacité d'exécuter rapidement un grand nombre d'actions peut donner des avantages décisifs et en fonction de la situation, cela devient un critère tout aussi important que la capacité d'élaborer une stratégie solide ou celle de s'adapter rapidement.

Pour illustrer ça, immaginons que les échecs se jouent en temps réel, les joueurs ne doivent plus attendre leur tour et peuvent jouer autant qu'ils le veulent. Les rêgles sont toujours les mêmes, et les pièces bougent de la même façon mais maintenant, un joueur doit non seulement réfléchir plus rapidement à comment adapter sa stratégie mais il doit également faire preuve de dextérité pour bouger rapidement ses pièces. En effet dans cette variante on peut imaginer un joueur rapide qui dans l'absolu est capable de déplacer trois pièces en une seconde et un autre moins rapide qui n'est capable d'en bouger que deux dans le même interval de temps. En conclusion, un bon joueur de cette variante imaginaire des échecs ne sera pas forcément le plus fin stratège mais celui qui combine le mieux stratégie, capacité d'adaptation, vitesse d'exécution et dextérité.

Ce genre de jeux de stratégie sont ce qu'on appelle communément des jeux de stratégie en temps réel (STR en français et RTS pour Real Time Strategy Game en anglais).

Le terme "jeu de stratégie en temps réel" est utilisé pour la première fois en 1992 pour désigner le genre du jeu _Dune II_ basé sur le roman éponyme de Frank Herbert. Depuis, le genre à beaucoup évolué mais principalement graphiquement. En effet, bien que la définition précise fasse l'objet de débats, les jeux de stratégie en temps réel sont traditionnellement définis par les termes "**récolter**", "**construire**" et "**détruire**" en plus d'être des jeux où l'action se déroule en temps réel entre les différents participants.

En partant des trois termes "récolter", "construire" et "détruire", on peut déduire que les intentions des joueurs sont axés autour du fait de "gérer des ressources", "développer une base" et "créer des unités" pour combattre l'adversaire.
L'action se déroulant en temps réel, le joueur ne dispose que d’un temps limité pour gérer ses ressources et ses bases et contrôler ses unités, ce qui introduit les notions de rapidité en plus de la dimension stratégique comme expliqué précédement et explique que le contrôle à la souris et au clavier soit généralement privilégié.

<!-- IMAGE cote à cote de dune2 et d'un rts moderne -->

<!-- Continuer en expliquant plus l'aspect code et complexité de ce genre de jeu -->

### Java

Java est un langage haut niveau, orienté objet, avec un typage statique fort dont la syntaxe est proche du C++. Il est multi-plateformes et guidé par le principe du WORA (Write once, Run Anywhere).
Ce langage est selon les redacteur un bon choix pour la création d'un premier jeu. Il possède une bonne rapidité d'exécution, le langage est robuste dans sa conception et possède tous les mécanismes nécessaire à l'application de toute la gamme de design patterns. Java contrairement à C++ est suffisament simple et permissif pour permettre de prototyper sans perdre trop de temps dans du code "boiler plate".

### LibGDX

 LibGDX est un framework Java de développement de jeux vidéos. Portable et peu opinionné, il laisse une très grande libérté aux développeurs sur les outils à utiliser. ...

### Expérience des développeurs

Ce point ainsi que le suivant, contrairement aux deux précédents et au reste du document se veulent moins objectifs pour permettre au lecteur de se faire une idée de l'état d'esprit ainsi que du ressenti des membres du groupe vis à vis de leur façon d'aborder le projet. C'est un écart dans les rêgles de la rédaction technique que le rédacteur de ce chapitre assume et fait en pleine conscience. Je parle donc maintenant en mon nom (Sol), et donne mon avis et mon ressenti.

Au départ du projet, les trois membres du groupe avait une expérience limitiée dans le langage imposé, une connaissance presque nulle des design patterns et virtuellement aucune expérience dans la création de jeux vidéo. À ce stade, le choix du projet était purement émotionnel et aucunement basé sur des critères objectifs de faisabilité. À ce sujet, je pensent qu'il serait peut être intéressant de modifier  les premières échéances pour permettre aux élèves d'avoir le temps de faire un état de l'art avant de proposer un choix de projet.

Sans être conscient des implications, le choix du projet s'est fixé sur un jeu de stratégie en temps réel, le langage étant imposé aucune discussion ou débat n'a eu lieu de ce coté là mais un second choix naif a compliqué un peu plus les débuts du projet, l'utilisation de la bibliothèque LibGDX. 

### Initiation du projet

Comme expliqué dans le point qui explique LibGdx, le framework est peu opinionné et offre une grande liberté dans le pannel d'outils à utiliser. Tellement de liberté que ça en fait à mon avis un framework pas forcément idéal pour des développeurs qui n'ont aucune expérience dans le domaine. 
 
 Dés les premières minutes dans la documentation (qui au passage est très bonne) on se retrouve noyé dans un jargon qui nous fait nous sentir comme l'englishman de Sting qui se baladant dans les rues de New york. Ça parle de cameras, de cameras orthographiques, de viewports, mais attends, il y pas déjà un viewport dans la camera ? Il me semble y avoir vu une methode getViewport. Des pixmap, des sprites, des textures, des texturesRegion, des batch des animations, des actors, des entity, des stages, des body, des world, des fixtures, des fixturesJoint, des bodyDefinition, des fixtureDefinition, des frameBuffer des methodes act et de methodes render... Certainnes classes fonctionnent en unités SI d'autres en pixel avec l'origine en bas à gauche et encore d'autres avec l'origine en haut à gauche.

 Quel est l'atlernative à LibGDX ? Les autres frameworks de jeu semblent moins apprécié par la communauté sur les forums et il est hors de question d'utiliser Swing pour réinventer la roue, on avait déjà le P2.1 pour faire ça. Ok alors, Pourquoi pas LibGDX mais il va falloir faire des tutos avant de pouvoir faire quoi que ce soit directement lié au projet. En effet comment poser une structure pour le projet alors qu'on a aucune idée de ce qu'offre le LibGDX et de quel façon on s'intègre à son data flow ? Il nous est demandé dans les étapes préliminaires de faire un cahier des charges et rapidement après d'en extraire des spécifications. Ok, on peut faire ça mais ces spécifications seront incomplètes et déconnectées de la réalité. 
 
 De nombreux livres ont été écrits sur les jeux de stratégie et les débats haut niveau (dans le sens une "abstraction importante des détails d'implémentation") sur la meilleur façon de l'implémenter font toujours rage sur les forums spécialisés. Nous on a 3 semaines pour avoir un cahier des charges, des spécifications et un premier jet de structure. "Vous pensez que c'est toujours une bonne idée de faire un jeu de stratégie?" "mais on a déja remis le sujet la semaine passée et certains autres groupes ont déjà commencé à prototyper". Ok, alors, continuons à nous éduquer.

 Comme prévu, un cahier des charges ainsi qu'une série de spécifications naives (qui nous semblaient très pertinentes à l'époque de leur rédaction) ont été posées et jusque là ça ne se passait pas trop mal. Il était donc temps d'attaquer une première tentative de structure en se fixant pour objectif de faire un premier jet en ne prenant pas en compte LibGDX. Le résultat, très justement qualifié de "plat de spaghetti par madame Rizotti" était literalement le plat de spaghetti le plus caractéristique du genre. 3 étudiants qui ont eu leur premier cours sur les design pattern deux semaines avant tentent de réfléchir aux implications d'un clique sur une entité le tout en terme de relation entre les classes. Le pire dans tout ça, c'est que l'exercice était interessant et que nous avons passé pas mal de temps dessus avant de réaliser que c'était de la foutaise et qu'on irait nul part avant de comprendre l'interaction qu'il existe entre LibGDX et nos classes.

 Il existe peu de tutoriels récents de qualité sur l'utilisation du framework dans sa globalité. De nombreuses informations sont trouvable mais assument une certaine expérience sur des frameworks équivalents. Sur youtube, un tutoriel permetant de faire un clone du celèbre jeu Mario semblait assez facile d'accès. Après avoir fait ce tutoriel et avoir approximativement compris 21% de ce qui y était fait, les premiers tatons personnels commencent. Nathan fait une carte et Edwin tente de cliquer sur un rectangle et d'en retourner la classe. Après ces premiers chipotages avec plus ou moins de réussite, vient le temps où on tente de cliquer sur un élément de la carte de Nathan et d'en retourner un des objets. Nouvelle réalisation: "C'est pas tout de faire des petits modules, encore faut il pouvoir les faire chanter ensemble".

 À ce stade du projet, une semaine avant la semaine de vacances du 15 avril, certains groupes semblent avoir une bonne base et commence à poser du coder sérieux. De notre coté, plus le temps passait, plus on prenait conscience de notre ignorance. La motivation était faible et certaines tensions apparaissait. 
 
 Lors d'une petite session de grosse galère à tenter de faire fonctionner deux composantes ensemble Nathan et moi avons l'idée de voir si nous pouvons trouver de la documentation spécifique à LibGDX à la bibliothèque. On nous dit que des livres existent mais ne sont pas disponible chez nous. Après un petit tour sur des sites de vente de livre au format numérique on se décide à un acheter un. "Beginning Java Game Development with LibGDX" de Lee Stemkoski. Lee, si jamais tu lis ces lignes, un grand merci. Sans toi, rien de tout ce qui a été fait n'aurait été possible. Nous avons choisis ce livre un peu par hasard. Les review étaient bonnes et nous nous retrouvions bien dans le titre. Nous étions loin d'imaginer la perle que c'était. Malgré un début très basique à base d'explications sur ce qu'est l'héritage, rapidement le niveau augmente. Au fur et à mesure des chapitres qui sont chacun un petit jeu qui couvre un aspect de LibGDX, Lee nous fait construire notre propre framework au dessus de LibGDX.

 La semaine de vacances est vraiment tombée à pic. Tel un séjour en immersion dans un pays étranger pour en apprendre la langue, il est possible de faire la même chose avec un langage informatique ou un framework, c'est juste une question d'état d'esprit. Au pays de LibGDX guidé par les conseils de Lee, le temps passait en moyenne 4 fois plus vite. je me suis tellement laisser absorber que j'en ai risqué la tranquilité de mon couple. Tout prenait enfin forme, tout était lié et c'était tellement gratifiant d'enfin avoir des résultats tangibles et controlés. Bon ok... une tortue qui bouge dans 4 directions et se fait bloquer par des rochers c'est pas terrible dans le conscient colectif, mais moi personnellement je me sentais très fier de ma petite tortue, elle et moi, on se comprenait. 
 
 Ce qui ressort particulièrement de la lecture du livre de Lee Stemkoski, était l'idée du framework au dessus de LibGDX, une bonne façon de structurer le code tout en créant une abstraction suffisante pour permettre à l'utilisateur du framework de s'occuper de problèmes plus spécifique à son jeu.

Suite à la lecture du livre ainsi que de la création assistée de 6 petits jeux qui couvrent chacun un aspect spécifique de LibGDX je me sentais confiant dans le fait d'être capable de réaliser une première architecture valable. Une architecture qui nous permetrait à tous les trois de travailler de façon indépendante. Même si le livre ne couvrait absolument pas le sujet épineux des jeux de stratégie en temps réel, il a apporté une base de savoir suffisante pour permettre de faire des recherches ciblée et efficaces. On était loins d'être arrivés, mais à ce moment là **le projet était finalement initialisé**.

## 3. Planification

### Objectifs

Dans le chapitre concernant les jeux de stratégie en temps réel ressortent les 3 mots clés qui définissent le genre: **récolter**, **construire** et **détruire**. Il est donc nécessaire que le MVP comporte ces trois éléments de gameplay. En plus de ces trois éléments les objectifs suivants sont concidérés comme ceux à atteindre:

* Menu principale
* Une carte ("plateau de jeu") sur lequel se passe l'action
* Une interface utilisateur qui contient les éléments suivants:
  * Une mini carte qui donne une vue global au joueur de l'action
  * Affichage des ressources
  * Affichage de la population
  * Un panneau qui contient les actions spéciales qui affiche les actions que peut effectuer l'unité selectionnée
  * Un "curseur intelligent" qui en fonction du type d'entité selectionné, du type de clic effectué et de l'endroit de ce dernier effectue l'action adéquate.

Cette première itération du jeu se veut être un proof concept. L'ajout d'un adversaire, que se soit une IA ou un autre joueur à travers le réseau n'était pas un objectif réaliste et n'est considéré que dans les objectifs secondaires au même titre que les points suivants:

* Donner une âme au jeu:
  * Aspect esthétique
  * Contexte du jeu
  * Bruitages et musiques
* Rendre le jeu fun à jouer via:
  * Mécanisme de brouillard de guèrre
  * Réflexion sur les unités du jeu (Comme les pièces aux échecs, chacune à une particularité)
  * Ajout de nouveaux bâtiments



### Etat de l'art


### Planning

Comme expliqué dans le chapitre sur l'initiation du projet, ce planning ne reflète pas la réalité des proportions des temps passé sur les divers points. Le travail sur le projet ne commence vraiment qu'à partir de la semaine après les vacances du 15 avril.

![Image](https://i.imgur.com/3x4ZLeB.png)

### Outils logistiques

#### Trello
Trello ([trello.com](trello.com)) est une application permettant de gérer des projets et tâches en équipe. Très pratique pour la planification ainsi que l'organisation, l'application est basée sur la méthode "Kanban". Comme toujours avec ce genre d'outils, ça finit en une très longue colonne ce qui ne rend pas la capture d'écran aisée:

![Image](https://i.imgur.com/Ks5Yu5H.png)

Chaque carte contient un espace organisationnel supplémentaire comprenant:
* Des liens utiles que tout le monde peut ajouter en fonction de ses trouvailles
* Des captures d'écran de l'avancement ainsi que divers médias
* Une todo découpant la tâche ou sous-tâches élémentaires
* Une section commentaire

![Image](https://i.imgur.com/ImGMuRO.png)

### TeamViewer

TeamViewer ([www.teamviewer.com](www.teamviewer.com)) est un logiciel qui permet d'accéder à distance à une machine. Principalement utilisé pour du partage d'écran, cet outil s'est révélé précieux pour pouvoir faire de l'Extreme Programming.


### Répartition des tâches

Dans l'ensemble respectée, la répartition des tâche au sein des membres est la suivante:
* Nathan Latino (aka "l'artiste non reconnu"): Interface utilisateur et graphisme
* Edwin Claude (aka "j'ai trouvé une solution compliquée à un problème simple"): Path finding, Brouillard de guère, menu principal
* Sol Rosca: (aka "attends je vais réfactor"): Architecture et framework

Concernant la rédaction du présent document, chacun est responsable de la rédaction des parties concernant ses propre taches et Sol s'occupe de la rédaction des parties communes.

## 4. Conception



### Techniques de programmation

#### Extreme programming

Plus particulièrement la partie "binôme" de cette technique de génie logiciel. Cette technique a l'avantage de pouvoir se pratiquer physiquement sur la même machine mais aussi à distances avec des outils comme TeamViewer.

D'autres éléments clés de cette technique convenait particulièrement bien au projet:

* "Puisque la revue de code est une bonne pratique, elle sera faite en permanence"
* "Puisque la conception est importante, elle sera faite tout au long du projet (refactoring) "
* "Puisque la simplicité permet d'avancer plus vite, nous choisirons toujours la solution la plus simple "
* "Puisque la compréhension est importante, nous définirons et ferons évoluer ensemble des métaphores"

#### Développement itératif

Cette façon de faire s'est mise en place d'elle même, elle n'est probablement pas le reflet de la pratique "officielle" mais il peut être interessant de la décrire ici.

Cette technique se base sur trois itérations successives pour implémenter une feature:
* **Une première itération naive**: Ne prend pas en compte la qualité et l'optimisation du code mais se concentre sur la faisabilité
* **Une seconde itération qui simplifie**: Nétoie le code et tatonne plusieurs patternes/architectures pour tenter de trouver les avantages et incovénients
* **Une dernière itération "présentable"** Consiste en une réécriture du code pour coller à un pattern/architecture qui est le fruit des leçons tirés des précédentes itérations

### Git flow

Le flow utilisé était "Feature Branche". Chaque nouvelle feature a sa propre branche et est merge sur la branche de developpement (dev) à la complétion de son objectif. La branche dev n'est merge avec le master qu'une fois qu'un des objectif principal est atteint. Contrairement à l'illustration précédente, ce projet n'avait pas de versioning des milestones.

![Image](https://i.imgur.com/NzmewW9.png)


### Spécifications

<st c="r">Spécifier que c'est un premier jet naif</st>

#### Jeu
  * **Plateforme**: Desktop
  * **Os**: Windows & Linux
  * **Langage**: Java
  * **Framework**: LibGDX
  * **Genre**: Stratégie
  * **Sous-genre**: Temps réel
  * **Perspective**: 2.5D (Topdown)
  * **Camera**: projection orthogonale
  * **Controle**: Clavier + souris
  * **Joueurs**: 
    * 1 joueur humain (proof concept)
    * Dans un premier temps une faction adverse sans inteligence sera utilisé pour tester les capacités offensives.
  * **Contexte scénaristique**: Aucun (le jeu sera dans un premier temps générique)
  * **Population**: 
    * Limitée
    * Nécessité de construire des "maisons" pour augmenter la limite
  * **Économie**: 
    * Récolte de ressources
    * Sert à finnancer la production de bâtiments et d'unités
  * **Ressources**:
    * En quantité limitée
    * Un type de ressource unique
    * Recoltable sur la carte sur des points spécifiques


#### Carte
La carte est l'air de jeu. C'est une aggrégation de cellules sur un plan orthonormé d'une certaine taille. C'est sur la carte que se passe l'action du jeu.

* **Cellule**:
  * Est repérée par une position dans un repère orthonormé
  * Une cellule est un conteneur
  * Une cellule peut contenir un unique élément parmis plusieurs types d'entités:
    * Du vide
    * Un obstacle naturel
    * Une ressource
    * Une entité appartenant à un joueur
  * Un joueur peut influencer sur une cellule avec des:
    * Entités statiques
    * Entités mobiles

#### Entités
* Naturelles
  * **Interactives**
    * Un élément qui peut être récolté (une ressource)
      * Une ressource possède une quantité définie non rechargeable de points de cette ressource que les joueurs doivent récolter.
  * **Décor**
    * Un élément figé, il n'est pas destructible ou collectible
    * C'est principalement un obstacle, une zone où la contruction et le déplacement sont impossible
* Créées par le joueur
  * **Statique**
    * bâtiments
      * Appartient à un joueur
      * Possède un nombre de points de vie
      * Peuvent être de deux types:
        * De productions: production d'unités
        * Utilitaires: Augmente la population maximum      
  * **Mobile**
    * Unités
      * Appartient à un joueur
      * Possède un nombre de points de vie
      * Se déplacent
      * Peuvent être de deux types:
        * Utilitaire: 
          * Récolte des ressources
          * Construit des bâtiments
        * Offensif:
          * Peut attaquer 

#### Récolte
La ressource récoltable est le nerf de la guerre. Elle se trouve en quantité limité sur la carte dans des cellules contigues dont l'affichage reflète cette état.

Ces cellules possède un certain nombre de points de ressource et sont épuisables. Un click sur la cellule permet d'avoir des information sur sa quantité de ressouce. 

Ces ceullues peuvent être exploitées par une **unité utilitaire** qui peut transporter un nombre finit de ressource. Chaque unité de temps $t$ une resource est transférée de la cellule à l'unité utilitaire. Une fois plein, l'unité utilitaire retourne automatiquement au bâtiment principal (base) et les ressources qu'elle contient sont transférées au pool de ressource du joueur. 

Pour initier ce méchanisme, le joueur doit selectionner une ou plusieurs unitées utilitaires et cliquer droit sur une cellule contenant des ressources.

Ce méchanisme se poursuit tant que le joueur ne selectionne pas une des unité utilitaire à la tache et ne la déplace sur une cellule sans ressource.

Une fois la ressource épuisee, la cellule devient une cellule vide (sa texture change en conséquant).

#### Inputs

* Selections:
  * click gauche sur une entité permet d'afficher des informations la concernant.
  * click gauche maintenu permet de faire un cadre de selection qui selectionne plusieurs entités mobiles crées par le joueur.
  * click droit sur une entité sans selection préalable ne fait rien.
  * click droit sur une entité avec une selection:
    * si l'entité possède des points de vie et n'est pas de l'équipe du joueur, donne l'ordre d'attaquer.
    * si l'entité est amie, elle s'y rend.
    * si l'entité est un élément de décor, ne fait rien.
  * click drouasoit sur une cellule vide avec une selection:
    * la selection s'y rend.
* Déplacement de la camera:
  * avec les touches fléchées du clavier (NSEW + diagonales)
      
#### Déroulement d'une partie

Au début d'une partie, le joueur se retrouve au commandement d'un bâtiment principale ainsi que une petite troupe ($n$ à définir) d'unitées utilitaires. Un certain nombre de crédit (ressource) lui sont alloués. Le bâtiment principal permet de produire de nouvelles unitées utilitaires qui elles mêmes peuvent construire des bâtiments de production d'unitées offensives ou des bâtiments utilitaires pour augmenter la population. Le bâtiment principal offre une certaine limite de population qu'il est nécessaire de faire augmenter au fur et à mesure de la production d'unitées. Cette augmentation de la population se fait par la construction de nouveau bâtiments utilitaires ("maisons").

Pour assurer sa pérénité, il est nécessaire que le joueur investisse des unitées utilitaires dans la récolte de ressources qu'il investira dans de nouvelles unitées utilitaires ou des bâtiments de production d'unitées offensives pour au final amasser une armée suffisante pour détruire le joueur advèrse.


### Premier diagramme de classes

Ce diagramme est ici pour la forme, il fait partie des délivrables préliminaires lors de la phase de conception et ne tient pas compte de LibDGX. Il illustre les premières réflections sur ce qui semblait être des points importants. Aucune implémentation de ce diagramme n'a été faite.

<img src="https://i.imgur.com/NSqu4KS.png" alt="" style="">

### Conventions

* Le code suit la convention K&R.
* Les noms du code sont écrits en anglais.
* Les distances se mesurent en pixels et l'origine est en bas à gauche

## 5. Réalisation

### Architecture

L'architecture de ce projet a vu de nombreux remaniement complets avant de prendre sa forme actuelle. Ceci est dû à plusieurs choses:
  * Dans un premier temps la méconnaissance de LibGDX
  * Dans un second temps la compréhension plus profonde de subtilités de LibGDX
  * Une simple volontée d'expérimenter 
  * Une nécessité imposée par les spécificités intrinsèques du genre "Stratégie en temps réel" qui cumule d'un côté un nombre conséquent de modules qui fonctionnent et communiquent ensembles et de l'autre une grande variété dans les types d'entités.

La complexité structurelle du dernier point fait qu'il existe **une sorte de moment critique** dans l'implémentation du framework. Ce moment est la transition entre l'implémentation des mécanismes de base (affichage, selection, déplacement, collision, ...) et la spécialisation de ces mécanismes.

À bas niveau, la cause principale du problème est un **trop grand couplage** entre les classes qui composent ces mécanismes. La conséquence immédiate est le manque de robustesse et la difficulté de maintenir le programme.

À plus haut niveau, c'est la spécialisation des classes qui forment la **hiérarchie des entités** qui pose problème. La conséquence est une éternelle envie de refactor du code pour tenter une optimisation utopique à chaque ajout de nouvelle entité.

Les prochains points de ce chapitre illustre et détaillent les différentes approches expérimentées dans leur ordre chronologie pour réduire le couplage et pouvoir proposer un framework robuste et modulable qui permet à son utilisateur de travailler à un niveau d'abstraction élevé.


#### Vue d'ensemble

Avant de parler des différentes approches il est important de comprendre la structure générale du programme et sa relation avec LibGDX. 

Ce premier diagramme est une représentation haut niveau de l'application et est le fruit des enseignements du livre de Lee Stemkoski décrit dans le chapitre introductif de ce document.

Chaque couche de ce diagramme est un élément indépendant des autres et cette représentation ne décrit pas l'architecture de chaque couche mais se content de délimiter trois niveaux d'abstraction:

* Le plus bas niveau: **LibGDX**
* Le bas niveau: **Framework**
* Le haut niveau: **Client (Yarts)**

<br>

<!-- Faire des colonnes -->

<img src="https://i.imgur.com/IT9snFq.png" alt="" width="500">

L'idée est de ségréguer les différentes classes dans une plage allant des "détails de bas niveau" aux "concepts de haut niveau". Si la structure est réalisée correctement, le code **Client** devrait pouvoir réaliser à l'aide des outils exposés par le **Framework** un jeu complet sans jamais avoir à appeller directement **LibGDX**.

<Container type="info">

Ce dernier point mérite une explication: Le but du **Framework** est de permettre de créer facilement (à l'aide d'abstractions importantes des outils de **LibGDX**) un jeu. Mais attention, il est important d'être conscient que **qui dit facilités, dit limitations vis à vis de ce qui pourait être fait avec LibGDX directement**. 

Aussi, il est également important de comprendre que le **Framework** ne devrait pas être spécialisé dans un type de jeu en particulier. Il devrait pouvoir facilier la création de tout types de jeu 2D. 

</Container>


Le code de l'application se trouve réparti entre **Framework** et **Client** et les descriptions qui suivent peuvent être considérées comme les spécifications de l'architecture (ce qu'elle doit permettre d'accomplir). En effet, même si l'architecture du **Framework** à changé de nombreuses fois, la vison globale elle est resté la même:

<br>

##### Framework
Le niveau **Framework** est le coeur de l'application et est lui même découpé en plusieurs niveaux d'abstraction: 

* **Bas niveau**: Ici se trouvent des _façades_ spécialisées qui cachent la complexité liée à **LibGDX** et regroupent les fonctionnalités par catégories. Elles sont également en charge des diverses normalisations de valeurs qui leurs sont spécifiques à l'aide de classes _adapter_. En effet, **LibGDX** n'utilise pas les mêmes systèmes de coordonnées dans tous ses modules. Par exemple, la physique utilise des unités SI et l'origine se trouve en bas à gauche, la camera utilise des pixels et son origine est en haut à gauche. Les acteurs et les scènes utilisent des pixels avec l'origine en bas à gauche... Il a été décidé qu'au sein du **Framework** tout se calculerait en pixels avec l'origine en bas à gauche et c'est les classes de ce niveau qui sont en charge de la gestion de cette abstraction. Les classes de ce niveau sont en principe les seules à communiquer directement avec **LibGDX**. Elles sont le _bridge_ entre **LibGDX** et le **Framework**
* **Niveau intermédiaire**: Le coeur du **Framework**. Tous les mécanismes de base essentiels à la création d'un jeu se trouve dans cette couche du **Framework**.
* **Haut niveau**: Ici se trouve les plus grosses abstractions du **Framework**. Ce sont ces classes qui sont exposées au client et se sont normalement les seules qu'il doit utiliser. Ces classes sont de deux sortes:
  * Des classes abstraites dont la concrétisation sert de "cadre de travail" au client. Chacune expose des méthodes spécifiques à un aspect concret d'un jeu que le client peut soit redéfinir pour y injecter sa logique soit query pour récupérer des informations (comme des événements par exemple).
  * Des _abstract factory_ qui permettent de composer ses propres entités concrètes.

##### Client

Comme vu précédement, le **Client** utilise le framework pour créer des classes de convénience de plus haut niveau et injecte sa logique dans les classes "cadre de travail" du **Framework**. 

Dans le cas de Yarts, le client crée des entités qui possèdent des points de vie et qui se déplacent à une certaine vitesse. Il ne s'encombre pas avec tous les mécanismes sous jacents comme la gestion des points de vie ou la physique qui régule la vitesse de déplacement. Il peut influencer ces mécanismes dans une certaine mesure mais il est possible d'imaginer que les réglages par défaut lui conviennent et que tout ce qu'il doit faire pour afficher un soldat est d'appeler une factory, lui passer une sprite sheet qui contient les animations en spécifiant la taille d'une cellule et le tour est joué. Ce soldat ainsi créé sera est selectionnable, se déplace (en affichant l'animation correspondant à son état et son orientation) à l'endroit où le joueur clique droit. Si un obstacle entrave la route du soldat, il l'évite. Si le soldat rencontre une entité ennemie, il l'a poursuit et l'attaque automatiquement dés qu'il la rattrape. Tous ces mécanimse s'exécutent sans que le code client n'ai eu à implémenter quoi que ce soit.

Autrement dit, le **Framework** offre la possibilité au client de réfléchir en terme haut niveau de "jeu de stratégie en temps réel" et non en terme bas niveau comme des angles, des distances, ou de gestion de textures, ... Les préocupations du client sont de l'ordre de l'équilibrage des points de vie des unités par rapport au dégats qu'elles font, leur vitesse de déplacement et l'apparence qu'elles ont.

Le mécanisme qui permet au client d'injecter de la logique dans les classes qu'il dérive lui permet de définir des comportements ou des actions plus complexes comme de donner la possibilité à son soldat d'utiliser une arme spéciale qui fait plus de dégats mais qui nécessite un long temps de chargement en cliquant sur une icone qui apparaitrait automatiquement dans l'interface quand cette unité est selectionnée. Ou même de lui permettre de construire des bâtiments qui tout comme l'arme spéciale apparaitraissent sous forme d'icones dans l'interface.

Dans le même ordre d'idées, le **Client** peut créer un mécanisme qui lui permet créer une entité aux allures de bâtiment à laquelle il assignerait une vitesse de déplacement nulle et qui en réalité cacherait une _factory_ de soldats. Dans le jeu, une fois construit, lors de la selection de ce batiment, une icone cliquable dans l'interface permet d'instancier des soldats qui apparaissent à coté du bâtiment. Tous ces soldats ont le même comportement que le soldat original.

##### Avantages

* **Robustesse**: 
  * Des changements dans le code à un niveau particulier n'impacte que modérément les autres niveaux voir pas dutout.
  * La ségrégation des classes facilite le debug en simplifiant l'isolation des comportements et donc l'identification de la source du bug.
  * Facilite le refactoring / modification.
* **Garde la complexité sous contrôle**:
  * Favorise des implémentations qui suivent le principe de responsabilité unique ce qui résulte en un code plus clair.

De nombreuses façons permettent d'arriver à ces comportement et la première tentative fut naturellement axée sur un usage important de l'OOP.

#### Approche OOP

Ce diagramme représente une vue simplifiée de la première approche. Dans le package "actors" contenu dans "Framework", on voit une ébauche de l'arbre d'héritage des entités. Cet arbre n'est pas complet et dans la pratique, plusieurs variantes modélisées sur papier ont été tentées. Dans le package "YARTS" on peut voir un second package "actors" qui contient des concrétisations issues de l'arbre d'héritage.

![Image](https://i.imgur.com/B7hmT77.png)

Cette approche est naturelle, et pour peu que l'architecture des relations et de la communication entre les classes qui se chargent des mécanismes de base implémente les bon patterns, le résultat est fonctionnel et relativement robuste. Le problème vient principalement du coté de l'arbre d'héritage des entités.

En effet, dans cette implémentation, chaque entité est un objet. Le système d'instanciation est donc basé sur des classes et permet à une entité d'en étendre une autre tout en jouissant de comportements polymorphiques.

Poussée au maximum, cette façon de faire conduit à une grande hiérarchie de classes rigide où La difficulté de définir la place d'une nouvelle entité est proportionnelle à la taille de la hiérarchie. Le diagramme suivant illustre ce problème:

<img src="https://i.imgur.com/6htNNE9.png" alt="" width="450">

Une solution à ce problème serait de ne pas baser la gestion des entités sur l'héritage mais sur de la composition d'objets.


#### Approche OOP + composition (ECS naif)

Dans cette approche, la construction d'entités ne se fait plus via héritage mais via composition tout en tirant profit du polymorphisme en définissant une interface `Entity`. Une entité devient une aggrégation (techniquement une composition) de composants et chaque composant encapsule la logique qui le concerne ainsi qu'une référence vers l'entité qui le contient:

![Image](https://i.imgur.com/L8T7ZC9.png)

Malgré une tête de sphagetti et une complexité apparente dans la modélisation, un système de gestion des entités basé sur ce système possède les avantages suivants:
1. Il est aisé d'ajouter une nouvelle entité.
2. Possibilité de dynamiquement ajouter ou retirer des composants (et donc de modifier le comportement).
3. Pour un grand nombre d'entités (ce qui est le cas pour un jeu de stratégie en temps réel) plus de performances.

Par contre, cette façon de faire est d'une part plus verbeuse dans le code et d'autre part déplace le problème de la complexité dans les composants. En effet, certains comportements peuvent être sensiblement différents en fonction de l'entité qui l'utilise. Aussi, le code qui gère la logique a tendance à se charger de batteries de conditionnels à mesure que le nombre d'entités grandit.

Dans Yarts, cette technique a été employée sans nécessiter une réécriture complète du code. Il n'existe donc pas de diagramme décrivant cette architecture.


#### Approche ECS

ECS veut dire Entity Component System et cette approche se base sur la précédente et pousse son concepte à l'extrême. En bref, les `Entity` sont les objets du jeu et sont définies implicitement par une collection de `Components`. Ces Components ne contiennent que des données et sont opérés en groupes fonctionnels par des `Systems`.

##### Component

Un component est un simple conteneur. Une classe qui implémente un component a des attributs mais pas de methode. Chaque component décrit un certain aspect d'une entité ainsi que ses paramètres. En soit, un component, n'est pas grand chose et c'est leur cumule qui est interessant. Voici un exemple de composants:

* `Position(x, y)`
* `Velocity(x, y)`
* `Physics(body)`
* `Sprite(images, animations)`
* `Health(value)`
* `Dammages(value)`

##### Entity

Dans le cadre de l'ECS, une entité est un concepte, mais peut être vu comme un objet du jeu. Par exemple, un rocher, une maison ou un soldat. Fondamentalement elle n'est définie que par les composants qui le constitue et un ID. Il est possible d'ajouter ou de retirer des composants pendant l'exécution, ce qui se traduit en une façon fondamentalement différente d'aborder les choses. En effet, dans une vision ECS des choses, on peut imaginer qu'une de nos entité est un mage qui peut geler les soldats adversaires. Ces soldats sont eux mêmes des entités et si ils sont touchés par le sort de glace du mage, il suffit de leur retirer leur component Velocity pour les clouer sur place. À partir des composants précédents on peut imaginer les Entités suivantes:

* `Rock(Position, Sprite)`
* `Ball(Position, Velocity, Physics, Sprite)`
* `Wizard(Position, Velocity, Sprite, Health, Damages)`

##### System

Les systèmes sont le coeur de la logique de l'ECS. Un système opère sur une combinaison de composants spécifique. Par exemple, Le système `MovementSystem` peut opérer sur les entités composées des components `Postion` et `Velocity` et contient toute la logique qui permet de déplacer des entités. Chaque système, et dans l'ordre d'instanciation de tous les systèmes sera mis à jour idéalement 60 fois par seconde. Voici quelques définitions de systèmes:

* `MovementSystem(Position, Velocity)`: Applique une vélocité à l'entité qui possède Position
* `GravitySystem(Velocity)`: Applique une accélération à l'entité qui possède Velocity
* `RenderSystem(Position, Sprite)`: Affiche les entités qui possède Position et Sprite

##### Implémentation

Le diagramme suivant est particulier dans le sens où il montre une représentation logique des Entités. Cette hiérarchie n'existe pas en tant que tel dans le code. Seul les composants existent. Par contre dans le code, la classe _EntityFactory_ se sert de cette représentation pour limiter le répétition de code.

![Image](https://i.imgur.com/ivUXHJZ.png)

Cette représentation a servi à l'implémentation initiale du système ECS de Yarts. Depuis, certains Components ont étés modifiés et d'autres ont été ajoutés.


#### Conlusion sur l'architecture

Pour le choix de l'implémentation à retenir, les trois critères ont été évalués: 

* Performance
* Complexité du code
* Maintenabilité

##### Performance

 Un test interne à Yarts permet d'instancier un grand nombre d'entités sur la carte. Une entité ayant approximativement les mêmes fonctionnalités a été créé dans chaque implémentation.
 Ces fonctionnalités sont: Texture et Animation, Physique et Detection de collision. Pour ce test, tous les effets de lumière et d'ombre sont retirés. Le tableau suivant représente les résultats. Les ordonnées représentent le nombre d'entités. Les Abscisses, le type d'implémentation. Au centre se trouve les valeurs obtenues exprimées en images par seconde (fps).

|       | OOP    | OOP + Comp | ECS    |
| ----- | ------ | ---------- | ------ |
| 50    | 60 fps | 60 fps     | 60 fps |
| 200   | 32 fps | 15 fps     | 60 fps |
| 500   | 9 fps  | 1 fps      | 60 fps |
| 1000  | 1 fps  | 1 fps      | 53 fps |
| 10000 | crash  | crash      | 2 fps  |

Il est remarquable que les performances de la variante OOP + Composition soit si faible en comparaison de la version OOP. Il est probable qu'un problème dans l'implémentation fausse les résultats. Malgré ça, il est improbable que même avec un code optimal l'issue du test soit différent. L'ECS est sensiblement plus performant que les deux autres implémentations et cette information colle avec ce qu'on trouve sur le net.

##### Complexité du code

Ce test est relativement subjectif et se base sur l'impression de complexité dans le codes des 3 implémentations à fonctionnalités égales.

Les deux premières variantes sont approximativement de la même complexité. Dans la version OOP, la complexité se trouve dans les dérivées de la classe mère Entity. Dans la version OOP + Composition, elle se trouve dans les Components. De plus, il est important de noter que les mêmes problèmes apparaissent approximativement au même stade de développement.

L'ECS a une philosophie totalement différente dans son fonctionnement et il n'est pas évident de raisonner en mode ECS lors de l'implémentation des systèmes. Pour donner un ordre d'idée c'est un peu la même difficulté de réflection que les premiers pas en programmation concurente. De plus l'utilisation de l'ECS a empéché l'utilisation d'autres systèmes de LibGDX et a donc nécessité l'implémentation d'un équivalent. Dans ce contexte, il est à noter qu'après quelques refactor, la complexité générale du code est restée plus faible que dans les deux autres implémentations. Avec la version ECS, au stade de développement actuel, on remarque que les problèmes des variantes OOP n'apparaissent pas. Le code est relativement robuste et il est très simple d'ajouter de nouveaux mécanismes. 

##### Maintenabilité

Comme expliqué précédement, les versions OOP, passé un certain stade sont difficiles à maintenir. Il est probable qu'une meilleur architecture les concernant puisse résoudre ou améliorer la situation.
La variante ECS quant à elle, est très flexible. Il est vraiment aisé d'ajouter de nouveaux components/systèmes. 

<br>

De ces tests il ressort que l'ECS est l'implémentation qui est la plus performante, lisible et maintanable. Ces résultats sont en concordance avec ce qui se trouve sur le net dans le cadre d'un jeu de stratégie en temps réel. C'est donc cette implémentation qui est retenue pour coder Yarts.

La version actuelle du code implémente l'approche ECS à l'aide du module Ashley de LibGDX. Ce module augmente les performance vis à vis de l'implémentation manuelle en offrant des conteneurs spécialisés et optimisés pour le système. 

### Mécanismes

De nombreux mécanismes ont dû être implémentés pour avoir un jeu fonctionnel. Certains, comme le pathfinding ou la gestion des collisions sont fort documentés voir même entièrement ou partiellement implémentés dans LibGDX. D'autres sont au contraire presque absents du net et de la littérature. En règle générale, les mécanismes spécifiques aux jeux de stratégie en temps réel sont malheureusement peu représentés. Cela dit, il est toujours possible de trouver des éléments de réponse dans l'un ou l'autre fil de discussion.


#### State Management

Les entités de type "mobile" possède 4 états décrits dans le diagramme qui suit:

<!-- Diagramme d'état -->


![Image](https://i.imgur.com/Atht4xK.png)

### Design



## 6. Récapitulatif

### Objectifs

* Atteint ? 
  * si oui cool
  * si non pourquoi

### Défauts

### Qualités

### Améliorations

### Leçons


* autant au niveau plannifications que détail d'implem genre viewports ...





## 7. Conclusion




## 9. Ressources

### papier

### internet


#### Architecture

##### Etat de l'art

* [The Design of StarCraft II](http://www.gamasutra.com/view/feature/132562/the_design_of_starcraft_ii.php)
* [StarCraft II: Building On The Beta](http://www.gamasutra.com/view/feature/134199/starcraft_ii_building_on_the_beta.php)
* [1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond](http://www.gamasutra.com/view/feature/3094/1500_archers_on_a_288_network_.php)
* [Successful Playtesting In Swords & Soldiers](http://www.gamasutra.com/view/feature/134311/successful_playtesting_in_swords__.php)
* [Postmortem: Ronimo Games' Swords & Soldiers](http://www.gamasutra.com/view/feature/132618/postmortem_ronimo_games_swords__.php)
* [The End of RTS? A Command & Conquer 4 Interview](http://www.gamasutra.com/view/feature/132691/the_end_of_rts_a_command__.php)

