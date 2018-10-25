---
title: Graphismes 2D
date: 2018-10-23
author: Sol
sidebar: auto
---

## Dessiner avec Qt
La classe `QPainter` fournit une API **indépendante de la plateforme** permettant de dessiner sur des <Def def="surface 2D sur laquelle on peut dessiner">périphériques de dessin</Def>. 

<Container type="info">

Pour un même dessin, le code sera identique, quelque soit le périphérique sur lequel on dessine.

</Container>

Les périphériques de dessin (`QPaintDevice`) sont implémentés par les classes suivantes :


* `QWidget` et ses dérivées 
* `QImage` et `QPixmap`: Représentent des images bitmap (taille et nombre de couleurs fixés)
* `QPicture` Permet de manipuler des images vectorielles qui pourront êtres transformées. Ces images sont stockées sous la forme de suite de commandes de tracé (et non pas des tableaux de pixels)
* `QSvgGenerator` : images vectorielles sérialisables en SVG
* `QPrinter` représente une imprimante.


<Container type="info">

Toutes ces classes héritent de `QPaintDevice`.

</Container>


### Concepts et classes utiles
Qt propose des classes facilitant la manipulation d'objets géométriques.
Voici les plus importantes se répartissent en trois catégories:

#### Géométrie et couleurs

| Classe     | Arguments           | Description                                                                           |
|------------|---------------------|---------------------------------------------------------------------------------------|
| `QPoint`   | x, y                | un point caractérisé par ses coordonnées dans le plan                                 |
| `QLine`    | x, y, width, height | un segment de droite caractérisé par ses 2 extrémités                                 |
| `QSize`    | l, h                | une dimension                                                                         |
| `QRect`    | x, y, l, h          | un rectangle défini par son coin supérieur gauche (x, y) et ses dimensions (l,h)      |
| `QPolygon` |                     | dérivée de `QVector`, permet de stocker un vecteur (de taille quelconque) de `QPoint` |

<Container type="info">

Pour ces classes, les coordonnées sont exprimées par des nombres entiers. Il existe des classes similaires
exploitant des coordonnées en nombres flottants, leur nom est suffixé par F (ex : QRectF).

</Container>


| Classe         | Description                            |
|----------------|----------------------------------------|
| `QColor`       | manipuler une couleur                  |
| `QPalette`     | pour manipuler les couleurs standard   |
| `QPen`         | Propriétés de dessins des lignes       |
| `QBrush`       | Propriétés de remplissage des surfaces |
| `QPainterPath` | créer une forme complexe               |
| `QString`      | manipuler une chaine de caractères     |


<Spoiler>

<Col proportions="6/6" vAlign="0">
<template slot="left">

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/HSL_color_solid_dblcone_chroma_gray.png/1200px-HSL_color_solid_dblcone_chroma_gray.png)

</template>
<template slot="right">

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HSV_color_solid_cone_chroma_gray.png/1200px-HSV_color_solid_cone_chroma_gray.png)

</template>
</Col>

> If we plot hue and (a) HSL lightness or (b) HSV value against chroma (range of RGB values) rather than saturation (chroma over maximum chroma for that slice), the resulting solid is a bicone or cone, respectively, not a cylinder. Such diagrams often claim to represent HSL or HSV directly, with the chroma dimension confusingly labelled "saturation". [wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)

</Spoiler>



#### Formes complexes


La classe `QPainterPath` permet de réutiliser des formes complexes créées à partir d'une composition de
tracés élémentaires.
On commence par créer un objet `QPainterPath`, on lui ajoute les tracés nécessaires et on peut ensuite le
dessiner plusieurs fois avec `QPainter::drawPath()`.

#### Texte


Les chaînes de caractères sont presque toujours instanciées à partir de la classe `QString` qui en facilite
grandement la manipulation.

* `boundingRect()`: renvoie le rectangle qui sera occupé par le texte,
* `fontMetrics()`: renvoie les propriétés de la police courante sous forme d'un objet QFontMetrics



### Evenement paint
* `QWidget::paintEvent()`
    * Appelée à chaque fois que l’OS doit (ré)afficher le widget
    * Contient les instructions de dessins du widget
    * A redéfinir pour dessiner sur un widget
* `QWidget::update`
    * A appeler pour demander de redessiner le widget
* Le clipping permet de définir la zone à redessiner

### Contexte graphique 

Pour dessiner dans un environnement graphique, le système d'exploitation doit autoriser le programme à intervenir sur l'affichage et lui en fournir les moyens. Cela se traduit par l'obtention d'un "contexte graphique". Un tel objet est "prêté" par le système d'exploitation, et encapsule la plupart des propriétés des tracés qui seront faits par la suite (couleurs, épaisseur, motifs de remplissage, polices de caractère, ...).

Avec Qt, un objet `QPainter` permettra de dessiner sur n'importe quel périphérique (classes héritant de `QPaintDevice`): un widget, l'écran, une image, l'imprimante, ... Un tel périphérique peut être passé en paramètre au constructeur de `QPainter` (et si ce ne pas le cas, l'utilisation de ses méthodes `begin()` et `end()` sera indispensable). Pour dessiner à l'intérieur du widget, on suit généralement les étapes suivantes :


1. Instanciation d'un contexte graphique avec la classe `QPainter`
2. Ajustement des ses propriétés (stylo, pinceau, couleurs, etc...)
3. Dessin
4. Destruction du contexte graphique


```cpp
void MonWidget::paintEvent(QPaintEvent *) {
    QPainter paint(this);
    paint.setPen(Qt::blue);
    paint.drawText(rect(), Qt::AlignCenter, "Text);
}
```

Dans cet exemple, on redéfinit la méthode `paintEvent()` de notre objet.

1. Le paramètre passé au constructeur désigne le périphérique de dessin qui sera utilisé. Si c'est le constructeur sans argument qui est utilisé, il est nécessaire d'appeler la méthode` begin()`, en lui passant le périphérique de dessin, avant de commencer les tracés et la méthode `end()` après avoir terminé.
2. On peut ensuite fixer les propriétés de notre objet `QPainter`. Ici on se contente de choisir un stylo bleu. Parmi les propriétés courantes on pourra citer :

| Propriété        | Remarques                                                                                    |
|------------------|----------------------------------------------------------------------------------------------|
| `font`           | police utilisée pour le dessin de texte                                                      |
| `brush`          | Pinceau utilisé pour remplir les formes (style, motif, couleur, ...)                         |
| `pen`            | stylo utilisé pour les tracés et contours de formes (épaisseur, couleur, style, pointe, ...) |
| `backgroundMode` | Opaque ou transparent (par défaut).                                                          |
| `background`     | Couleur de fond uniquement pour un fond opaque                                               |

Avec Qt, les méthodes permettant de lire une propriété (**accesseur**) portent le nom de cette propriété, et
celles permettant de la modifier (**modificateur**) portent le nom de cette propriété préfixé par set (la lettre
suivante est alors en majuscule). Exemple:

```cpp
QPainter painter;
QPen pen;

pen = painter.pen();
pen.setColor(Qt::darkRed);
painter.setPen(pen)
```

3. Une fois que notre objet QPainter correspond à l'usage que l'on souhaite en faire, on peut appeler
les méthodes de tracé pour dessiner dans le widget. Ici on "dessine" un texte.
Les méthodes de tracé de QPainter commencent par draw. Parmi les plus courantes, on citera :

* Pour les tracés : `drawPoint`, `drawLine`, `drawArc`, `drawText`, ...
* Pour les formes : `drawRect`, `eraseRect`, `drawEllipse`, `drawPolygon`, ...
* Pour afficher une image : `drawImage`, `drawPixMap`, `drawPicture`, ...
* 
Il existe de nombreuses autres méthodes qui sont documentées avec la classe `QPainter`. Les tracés sont effectués avec le stylo (`pen`) courant, et les formes sont remplies avec le motif du pinceau (`brush`) courant.

4. Il faut **penser à détruire** l'objet `QPainter`. 

<Container type="danger">

Dans cette exemple on ne détruit l'objet `QPainter` car c'est `PaintEvent` qui s'en charge.

</Container>

#### Principales méthodes de tracés

![Image](https://i.imgur.com/81FPhP7.png)

<Container type="warning">

* **Angles**:
    * $\frac{1}{16}$ degré
    * $0$ deg à 3h
    * Sens trigonométrique

</Container>

### Les images
* Classes `QPixmap` et `QImage`
    * Pour la manipulation des images
    * Supports des formats courants (GIF, JPEG, PNG, ...)
    * Périphérique de dessin

| `QPixmap`                     | `QImage`                      | `QPicture`          |
|-------------------------------|-------------------------------|---------------------|
| Slow to draw, fast to display | Fast to draw, slow to display | Images vectorielles |

### Sytème de coordonnées

* Système de coordonnées de `QPaintDevice`
* Origine par défaut: **en haut à gauche**
* Unité par défaut: **pixel** (ou point)

<br>

Un appel à `drawRect(1, 2, 6, 4)` donnerait donc le résultat suivant :

![Image](https://i.imgur.com/uR4gPT7.png)
