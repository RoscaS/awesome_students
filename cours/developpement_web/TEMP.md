---
title: Recapitulatif
date: 2018-12-07
author: Sol
sidebar: auto
project: false
---

## MVC

<Col proportions="6/6" vAlign="60">
<template slot="left">


<Media
    src="https://i.imgur.com/tIDEYdL.png"
    width=250
/>


</template>
<template slot="right">

Le modèle MVC décrit une manière d’architecturer une application informatique en la décomposant en trois sous-parties :
* **Model:** Encapsulation de la logique métier ainsi que l'accès aux données.
* **Vue:** Présentation et interactions avec l'utilisateur.
* **Controler:** Dynamique de l'application. Fait le lien entre l'utilisateur et le reste de l'application.

Le rôle du **routeur** est de définir le controlleur à appeler en fonction de des données de l'URI.

On distingue entre **light controller** et **fat controller**, suivant si la logique métier est complètement intégrée au modèle ou au contrôleur.

</template>
</Col>

<st c="r">ATTENTION!</st>

Dans le contexte du modèle MVC, on n'utilise **pas** le terme "**couche**", dans une architecture en couches (ex. modèle 3 tier), chaque couche ne peut communiquer qu'avec les couches adjacentes.

Le modèle 3 tiers est proche du modèle MVC mais ne sont pas à confondre:

* Couche **données** $\approx$ Model
* Couche **présentation** $\approx$ View
* Couche **application** $\approx$ Controller


<div style="page-break-after: always"></div>

## Entête HTTP

* **Client**:
  * Host (virtual host)
  * Langues
  * Encodages supportés
  * Infos sur la version du client
  * Cookies
* **Server**:
  * Type de contenu
  * Taille du contenu
  * Cookies du serveur
  * Identification du serveur

<br>

* Le client envoie en premier le verbe (la methode) HTTP et l'URL, suivi de la version du protocole, puis ses entêtes HTTP clients, **puis une ligne vide**.
* Ensuite, le serveur répond avec le code de status de la requête, les entêtes serveur, **une ligne vide** et finalement le contenu demandé (Html, Css, image, ...).

<br>

<st c="r">ATTENTION!</st>

* Les paramêtres **GET** sont dans la partie locale (path) de l'URL comme argument de la méthode GET
* Les paramètres **POST** sont dans le corps après la ligne vide <st c="r">et non pas dans les entêtes</st>.

<br>

* Les entêtes HTML sont dans le coprs de l'HTML après la ligne vide (meta info dans la partie `<head>`)


## En vrac

* Le défault de la propiété `position` est `static`: Se positionne en fonction de flow normal de la page, les propriétés `top`, `bottom`, `left`, `right` n'ont pas d'effet.

* Le developpement web nécessite des techniques de développement adaptées (comme la methode Agile, Scrum, ...) pour les raisons principales:
  1. Le cycle de développement rapide
  2. La rapidité d'évolution des outils et des bibliothèques
  3. La forte dépendance aux bibliothèques et aux divers services


<div style="page-break-after: always"></div>


## Var, let et non déclaration en JS

```js
let test = () => {
  var poule = 3
  let cochon = 'cochon'
  meuh = `j'ai ${poule} ${cochon}s`  // globale
}

let mouton = 'claude'
var poney = 1

{
  var poney = 2
  let mouton = 'george'
  test()
}

console.log(poney)  // 2  
console.log(mouton) // claude
console.log(meuh)   // j'ai 3 cochons
```

## Python like list merge (PHP)

```php
$key = array("a", "b", "c");
$value = array(1, 2, 3);
$dict = array_map(
  function($k, $v) { return [$k => $v]; }, 
  $key, 
  $value
);
```

## Html wrapper

```php
class Wrapper {
	private $content;
	private $tag;

	public function __construct($content, $tag) {
		$this->content = $content;
		$this->tag = $tag;
	}

	public function wrap() {
		$str = is_object($this->content)
				? $this->content->wrap()
				: htmlentities($this->content);

		return "<$this->tag>$str</$this->tag>";
	}
}

class Paragraph extends Wrapper {
	public function __construct($content) {
		parent::__construct($content, "p");
	}
}

echo (
  new Paragraph(
    new Wrapper(
      new Wrapper("poule", "small"), 
      "div"
    )
  )
)->wrap();

// <p><div><small>poule</small></div></p>
```

<div style="page-break-after: always"></div>



## CSS Précédences (specificity)

* `#id` > `.class` > `tag`.
* A priorité égale la dernière modification est appliquée.
* `!important` a précédence sur toutes les rêgles.

## CSS Selectors

| syntaxe         | description                                    |
| --------------- | ---------------------------------------------- |
| `*`             | tous les éléments                              |
| `#idname`       | element avec l'id _idname_                     |
| `.classname`    | tous les elements de la classe _classname_     |
| `div`           | tous les tags `div`                            |
| `div, p`        | tous les `div` et tous les paragraphes         |
| `div p`         | les paragraphes se trouvant dans un `div`      |
| `div > p`       | tous les tags `p` un niveau endessous de `div` |
| `div + p`       | tag `p` directement après `div` (sibilings)    |
| `div ~ p`       | tag `p` précédé par `div`                      |
| `div.classname` | `div`s avec le nom de classe _classename_      |
| `div#idname`    | `div` avec un l'id  _idname_                   |
| `#idname *`     | tous les éléments dans `#idname`               |

## CSS Attr selectors

| syntaxe                | description                            |
| ---------------------- | -------------------------------------- |
| `a[target]`            | `<a>` avec un attribut `target`        |
| `a[target="_blank"]`   | `<a>` qui ouvre dans une nouvelle tab  |
| `[title~="poule"]`     | element `title` qui contient _poule_   |
| `[class^="poule"]`     | nom de class qui commence avec _poule_ |
| `[class|="poule"]`     | class commence avec le mot _poule_     |
| `[class*="poule"]`     | nom de class contient _poule_          |
| `[class$="poule"]`     | nom de class finit avec _poule_        |
| `input[type="button"]` | input spécifique (button)              |


<div style="page-break-after: always"></div>


## CSS Pseudo classes


| syntaxe                   | description                  |
| ------------------------- | ---------------------------- |
| `a:link`                  | link in normal state         |
| `a:active`                | link in clicked state        |
| `a:hover`                 | link with mouse over it      |
| `a:visited`               | visited link                 |
| `p::after{content:"yo";}` | add content before `p`       |
| `p::before`               | add content after `p`        |
| `input:checked`           | checked inputs               |
| `input:disabled`          | disabled inputs              |
| `input:enabled`           | enabled inputs               |
| `input:focus`             | input has focus              |
| `input:in-range`          | value in range               |
| `input:out-of-range`      | input value out of range     |
| `input:valid`             | input with valid value       |
| `input:invalid`           | input with invalid value     |
| `input:optional`          | no required attribute        |
| `input:required`          | input with requred attribute |
| `input:read-only`         | with readonly attribute      |
| `input:read-write`        | no readonly attrib           |
| `div:empty`               | element with no children     |
| `p::first-letter`         | first letter in `p`          |
| `p::first-line`           | first line in `p`            |
| `p:first-of-type`         | first of some type           |
| `p:last-of-type`          | last of some type            |
| `:not(span)`              | element that's not a `span`  |
| `p:first-child`           | first child of its parent    |
| `p:last-child`            | last child of its parent     |
| `p:nth-child(2)`          | second child of its parent   |
| `p:nth-child(3n+1)`       | nth-child (an + b) formula   |
| `p:nth-last-child(2)`     | second child from behind     |
| `p:nth-of-type(2)`        | second p of its parent       |
| `p:nth-last-of-type(2)`   | ...from behind               |
| `::selection`             | portion selected by user     |
| `:target`                 | highlight active anchor      |


<div style="page-break-after: always"></div>

