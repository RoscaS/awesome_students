---
title: Notions de base
date: 2019-09-28
author: Sol
sidebar: auto
project: false
hide: false
---

## Questions (chapitre 3)

Si j'ai bien compris, chacun des programmes shader est la "recette" à appliquer sur chacun des shaders du type du programme concerné. Le Vertex Shader n'étant pas capable de gérer sa couleur, il délègue donc cette tache au fragment Shader par l'intermédiaire de l'*attribute* `varying`. 
Pourtant en page 48 dans la note du code 3.12, il est dit "En entrée une couleur influencée par les **calculs de la couleur** des sommets dans le Vertex shader".

## En vrac

* GPU: Shaders (glsl files)
* CPU: JS


* **Rasterisation**: discrétisation suivant une grille de pixel.

## Ch1 & 2: Introduction

###  À retenir

* **Monde virtuel:** Scène sur laquelle évoluent des objets ayant des attributs de forme, de couleurs et éventuellement d'animation.
* **Camera:** Centre de projection qui projette la scène 3D en image 2D utilisé principalement à l'écran.
* En infographie, la représentation d'un objet passe souvent par l'utilisation d'un ensemble de polygones.
  * Dans le paradigme de l'infographie 3D, tout est triangle
* **Trois types de lumière** permettent le rendu:
  * **ambiante**: non directionnelle, éclaire de manière uniforme tous les objets de la scène.
  * **ponctuelle**: se diffuse dans toutes les directions à partir d'un point.
  * **directionnelle**: émet ses rayons dans la même direction en tout point de l'espace.
  * Une source ponctuelle placée "à l'infini" (ou très éloignée) s'apparente à la lumière directionnelle.
* **Transformations géométriques:** se basent souvent sur le produit de matrices relativement simple à mettre en place.
* **Rotations**: bien plus efficace et moins ambigu d'utiliser les quaternions.
* **Shaders**: de deux types (en WebGL):
  * **Vertex Shader**: place les points dans l'espace de la caméra.
  * **Fragment Shader**: colorie les pixels de la scène projetée à l'écran.

<Spoiler tag="Camera et repères">

<br>


<Media
    src="https://i.imgur.com/5KQwmBP.png"
    url="http://webgl3d.info/erratum_WebGLParLaPratique.pdf"
/>


<Media
    src="https://i.imgur.com/Hwup4Qr.png"
    url="http://webgl3d.info/erratum_WebGLParLaPratique.pdf"
/>




<br>

</Spoiler>


## Ch3: Hello WebGL


<Media
    src="https://i.imgur.com/3qi4IDb.png"
    center="true"
    width=250
/>



### À retenir

* Définir directement un triangle en lui associant des points 3D et des couleurs n'est pas possible en WebGL. Il faut déclarer et initialiser des sommets, puis des couleurs et enfin un tableau d'indices.
* C'est le **tableau d'indices** qui définit l'ordre des points 3D et de couleurs associées pour former la géométrie désirée.
* La fonction `drawScene()` est au coeur du rendu et est appelée indirectement.
* Le **Vertex Shader** place chaque sommet de la scène, un à un, selon la position de la caméra.
* Le **Fragment Shader** dessine la couleur de chaque <Def def="Correspond très souvent à un pixel">fragment</Def> faisant partie de l'<Def def="Voir rasterisation">approximation</Def> d'un triangle projeté sur l'espace écrant (canevas).
