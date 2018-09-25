---
title: Applications web - Cours
date: 2018-09-25
author: Michael Kneuss
sidebar: auto
---

## Méthodes de développement
### Le développement Web est caractérisé par
* cycle de développement rapide
* évolution rapide des outils et bibliothèques
* dépendance forte aux bibliothèques et services

Les méthodes classiques sont souvent inadaptées.

Méthodes de développement adaptées au Web sont dites **agiles**

### Modèles de conception (design pattern)

* MVC (Model-View-Controller)
* modèle de conception et de déploiement 3-tier

## PHP
### Introduction
#### Origines et caractéristiques
PHP Hypertext Preprocessor
* Personal Home Page (1995)
* langage spécialisé Web, très populaire
* version 7.1.8 (aout 2017)
* licence, libre, gratuite
* multiplateforme
* faiblement typé, conversions implicites
* impératif et orienté-objet
* facile à prendre en main(syntaxe proche du C)
* de nombreuses ressources
* forces et faiblesses
#### Différences avec les langages classiques
//TODO

#### Exemple PHP
```PHP
$variable = 4;              #c'est un entier
$variable ="texte";         #c'est une chaine
$variable = "1 texte";      #c'est une autre chaine.
$variable = $variable +42;  #c'est de nouveau un entier
echo $variable              #affichera 43
```
### Fonctionnement
#### Principe général
* le serveur reçoit la requete du client et PHP construit son environnement
* délimiteurs <?php ... ?> embarqués dans l'HTML
    * templating!
    * on peut ouvrir et refermer "le php", ce qui peut éviter les echo HTML
* le contenu des balises est interprété
* le résultat est remplacé dans la source HTMl
* le tout est envoyé au client WWW
* le client WWW interprèle le HTML, le CSS éventuel et exécute le Javascript

#### Mode d'exécution
//TODO

#### Serveur Web interne PHP
```sh
$ cd ~/public_html
$ php -S localhost:8000
```
Le serveur répondra:
   * *PHP 7.0.9 Development Server started at Tue Sep 19 18:34:08 2017
Listening on http://localhost:8000
Document root is /home/me/public_html
Press Ctrl-C to quit.*

### Erreurs
* utiliser @ avant une instruction pour en ignorer les erreurs
* error_reporting() permet de configurer quelles erreurs doivent etre reportées
* dès PHP5 : concept d'exceptions

### Syntaxe
//TODO

### Opérateurs

=== comparaison des valeurs et des types

== comparaison des valeurs

= affectation, retourne la valeur

#### Exemple du triple-égal
```PHP
if (3=='3'){
    //ça passe
}
if (3==='3'){
    //ça passe pas
}
```
### Structures de controle
if {} elseif {} else {}
opérateur ternaire ?
sélection de cas : switch

classique :
* while
* do..while
* for(init;cond;modif)
* break, continue,...
pratique sur les tableaux : itérateur foreach ($tab as $elt)

exemple switch:
```PHP
<?php switch ($i) {
    case 0:
    case 1:
    case 2:
        echo "i is less than 3 but not negative";
        break;
    case 3:
        echo "i is 3";
    default:
        echo "i is negative or greater or equal than 3";
}
?>
```
### Inclusion
maintenabilité, réutilisabilité, configurabilité, déploiement, sécurité
* *include, include_once* (pas d'erreur si le fichier n'existe pas)
* *require, require_once* (erreur si le fichier n'existe pas)
* partage/réutilisation de code
* pratique p.ex. pour y déposer les parmètres de l'applicatoin
* application : séparer présentation de controle
* inclusion dynamique
    * valider !
    * attention aux inclusions distantes

### Variables
* une variable change de ype en fonction de ce qu'on lui affecte
* des conversions automatiques peuvent survenir dans les expressions en cas d'affectation
* types scalaires: booléen, entier, nombre à virgule flottante, chaine de caractères
* types composés : tableau, objet
* type spéciaux : ressource, NULL
* on peut forcer le type si nécessaire (typecast)

#### exemple
```PHP
$chaine = ’toto’;
echo gettype($chaine), "<br />";
$chaine = 42;
echo gettype($chaine), "<br />";
$chaine = 42.0;
echo gettype($chaine), "<br />";
$autre = &$chaine;
echo gettype($autre), "<br />";
$autre = "toto";
echo $chaine;
```

### Chaines de caractères
pour défnir une chaine de caractères :
* une chaine littérale, éventuellement multi-ligne
    * avec des guillements (interpolation)
    * avec des apostrophes (pas d'interpolation)
    * échappement possible avec backslash \
    * attention au délimiteur backtick ` qui a une fonction précise (exécuter une commande système)

Pour formater et traiter des chaines :
* *printf()* et *sprintf()*
  
### Tableaux et tableaux associatifs

#### Tableaux

En PHP, les tableaux sont des structures de données fort utiles.

```PHP
$a = array("premier", "deuxieme", "troisieme");
// PHP >= 5.4
$a = [ "premier", "deuxieme", "troisieme" ];
echo $a[0]; // premier
```

Fonctions pratiques : *count()*,etc.