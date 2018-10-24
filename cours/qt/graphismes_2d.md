---
title: Graphismes 2D
date: 2018-10-23
author: Sol
sidebar: auto
---

## Dessiner avec Qt
* Classe `QPainter`
* Priphrique de dessins

### Concepts et classes utiles

* Classes pour les formes géométriques
    * `QPoint`, `QLine`, `QSize`, `QRect`, `QPolygon`
    * Suffixe "F" pour des coordonnées en nombre flottant
* Classe `QColor` : manipuler une couleur
    * Codage RGB par défaut (méthodes de conversion fromHsl, fromHsv...)
* Classe `QPalette` pour manipuler les couleurs standard
* Classe `QPen` : Propriétés de dessins des lignes
* Classe `QBrush` : Propriétés de remplissage des surfaces
* Classe `QPainterPath` : créer une forme complexe
* Classe `QString` : manipuler une chaine de caractères

<br>
<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/HSL_color_solid_dblcone_chroma_gray.png/1200px-HSL_color_solid_dblcone_chroma_gray.png)

</template>
<template slot="right">

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HSV_color_solid_cone_chroma_gray.png/1200px-HSV_color_solid_cone_chroma_gray.png)

</template>
</Col>

> If we plot hue and (a) HSL lightness or (b) HSV value against chroma (range of RGB values) rather than saturation (chroma over maximum chroma for that slice), the resulting solid is a bicone or cone, respectively, not a cylinder. Such diagrams often claim to represent HSL or HSV directly, with the chroma dimension confusingly labelled "saturation". [wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)


### Evenement paint
* Méthode `QWidget::paintEvent()`
    * Appelée à chaque fois que l’OS doit (ré)afficher le widget
    * Contient les instructions de dessins du widget
    * A redéfinir pour dessiner sur un widget
* Méthode `QWidget::update`
    * A appeler pour demander de redessiner le widget
* Le clipping permet de définir la zone à redessiner

### Contexte graphique 

* Ressource de l’OS prêté pour intervenir sur l’affichage
* Instance de la classe QPainter
    * Possède des méthodes permettant de dessiner
    * Périphérique passé au constructeur
    * Méthodes begin et end pour obtenir et libérer le contexte graphique

### Dessin sur un widget

![Image](https://i.imgur.com/EFKII9O.png)

```cpp
void MonWidget::paintEvent(QPaintEvent *) {
    QPainter paint(this);
    paint.setPen(Qt::blue);
    paint.drawText(rect(), Qt::AlignCenter, "Text);
}
```

### Méthodes de tracés

<br> <br>


![Image](https://i.imgur.com/yAfOEjK.png)

<br>
<br>

![Image](https://i.imgur.com/UZPYwrx.png)


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

| `QPixmap`                            | `QImage`                                   | `QPicture`          |
| ------------------------------------ | ------------------------------------------ | ------------------- |
| Slow to draw, fast to display        | Fast to draw, slow to display              | Images vectorielles |

### Sytème de coordonnées

* Système de coordonnées de `QPaintDevice`
* Origine par défaut: **en haut à gauche**
* Unité par défaut: **pixel** (ou point)

<br>

![Image](https://i.imgur.com/uR4gPT7.png)
