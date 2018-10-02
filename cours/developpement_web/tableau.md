---
title: Suite et conclusion
date: 2018-10-02
author: Michael
sidebar: auto
---

### Tableaux associatifs

Les tableaux associatifs sont des associations ordonnées (clé, valeur). Attention, la plupart des autres langages proposent des dictionnaires ou tableaux de hâchage, dont l'ordre n'est pas significatif!

Exemple :

```php
$a = array("rouge" => "0xff0000",
"vert" => "0x00ff00",
"bleu" => "0x0000ff");
echo $a["bleu"]; // 0x0000ff
```

Les clés sont forcément des types scalaires : entier, chaîne.

Fonctions pratiques: `array_key_exists()`, `array_keys()`, `array_values()`

```php
//TODO
$a = "valeur";
$valeurs = ['valeur' =>, 'valeur 2' => 2];

if (array_key_exists($a))
    echo "OUI";
```

### Variables prédéfinies ou superglobales

* tableaux-paramètres de `$_POST` ou de `$_GET`(ou `$_REQUEST`)
* `$_SESSION`, `$_COOKIE`
* `$_FILES`
* `$_SERVER`
* ...

```PHP
define("CONSTANTE", "Bonjour!");
echo CONSTANTE; // affiche Bonjour!
```

### Fonctions

#### Définition et utilisation

```PHP
function add($x, $y) {
$total = $x + $y;
return $total;
}
echo "41 + 1 = " . add(41,1);
```

#### Portée des variables

par défaut, portée globale
* sauf dans les fonctions (par défaut portée locale); utiliser le mot clé `global`
* les fonctoins imbriquées dans des fonctions peuvent accéder leur parent avec le mot clé `use`
* les variables superglobales sont accessibles partout

#### Fonctions anonymes

```PHP
$total = 0;
$a = array(1, 2, 3);
# définition d’une fonction anonyme qui a besoin d’utiliser
# la variable $total de la portée (y.c. fonction) englobante,
# passée par référence, pour pouvoir la modifier
$callback = function ($val) use (&$total) {
$total += $val;
};
array_map($callback, $a); // voir aussi array_sum() :)
echo $total;
```

#### Passage par référence

```PHP
function add(&$x, $y) {
$x += $y;
}
$a = 2; add($a, 5); echo $a;

```

### Contrôle des entêtes HTTP

on peut vouloir, en PHP, par exemple:

* envoyer autre chose que de l'HTML au client

* contrôler le cache du client

* configurer le contexte côté client(cookie p.ex)

en PHP on contrôle les entêtes HTTP avec la fonction `header()`, à appeler *avant toute sortie!*

### Internationalisation et localisation

* PHP travaille en fonction de la configuration des *locales* du serveur et de sa configuration propre(php.ini)

* PHP a été plutot conçu initialement pour travailler en ISO-8859-1, pas en Unicode/UTF-8 par exemple(car UTF-8 a des caractères de longueur variable); p.ex. `strlen()`

* des fonctions de conversion vers UTF-8 existent

* tout dépend aussi de la config PHP

* pas un problème simple

### Bonnes pratiques

[Best Practices](https://phpbestpractices.org)
[PSR-1](http://www.php-fig.org/psr/psr-1/)
[PSR 2](http://www.php-fig.org/psr/psr-2/)
[PSR-4](http://www.php-fig.org/psr/psr-4/)