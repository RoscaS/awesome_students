---
title: Recapitulatif
date: 2018-12-07
author: Sol
sidebar: auto
project: false
---

## Culture G

<div style="page-break-after: always"></div>

### MVC

<Col proportions="6/6" vAlign="60">
<template slot="left">

![](https://i.imgur.com/tIDEYdL.png)

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

<Container type="danger">

Dans le contexte du modèle MVC, on n'utilise **pas** le terme "**couche**", dans une architecture en couches (ex. modèle 3 tier), chaque couche ne peut communiquer qu'avec les couches adjacentes.

Le modèle 3 tiers est proche du modèle MVC mais ne sont pas à confondre:

* Couche **données** $\approx$ Model
* Couche **présentation** $\approx$ View
* Couche **application** $\approx$ Controller

</Container>



### Entête HTTP

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

<Container type="info">

* Les paramêtres **GET** sont dans la partie locale (path) de l'URL comme argument de la méthode GET
* Les paramètres **POST** sont dans le corps après la ligne vide <st c="r">et non pas dans les entêtes</st>.

<br>

* Les entêtes HTML sont dans le coprs de l'HTML après la ligne vide (meta info dans la partie `<head>`)

</Container>


### En vrac

* Le défault de la propiété `position` est `static`: Se positionne en fonction de flow normal de la page, les propriétés `top`, `bottom`, `left`, `right` n'ont pas d'effet.

* Le developpement web nécessite des techniques de développement adaptées (comme la methode Agile, Scrum, ...) pour les raisons principales:
  1. Le cycle de développement rapide
  2. La rapidité d'évolution des outils et des bibliothèques
  3. La forte dépendance aux bibliothèques et aux divers services

#### Var, let et non déclaration en JS

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

#### Python like list merge (PHP)

```php
$key = array("a", "b", "c");
$value = array(1, 2, 3);
$dict = array_map(
  function($k, $v) { return [$k => $v]; }, 
  $key, 
  $value
);
```

#### Html wrapper

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





## CSS

### Précédences (specificity)

* `#id` > `.class` > `tag`.
* A priorité égale la dernière modification est appliquée.
* `!important` a précédence sur toutes les rêgles.

### Selectors

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

#### Attr selectors

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

#### Pseudo classes


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

## Php


### Variables Scope

PHP variables can be declared anywhere in the script.
The scope of a variable is the part of the script in which the variable can be referenced or used.

PHP's most used variable scopes are local, global.
A variable declared outside a function has a global scope.
A variable declared within a function has a local scope, and can only be accessed within that function.


```php
<?php
  $name = 'David';
  function getName() {
    echo $name;
  }
  getName();

  // Error: Undefined variable: name
?>
```


### The global Keyword

The `global` keyword is used to access a `global` variable from within a function.
To do this, use the global keyword within the function, prior to the variables.

```php
<?php
  $name = 'David';
  function getName() {
    global $name;
    echo $name;
  }
  getName();

  //Outputs 'David'
?>
```

### Variable Variables

With PHP, you can use one variable to specify another variable's name. 
So, a variable variable treats the value of another variable as its name.

```php
<?php
  $a = 'hello';
  $hello = "Hi!";
  echo $$a;

  // Outputs 'Hi!'
?>
```

## Operators

### Modulus

If you use floating point numbers with the modulus operator, they will be converted to integers before the operation.

```
9%2=1
```

## Arrays

### Numeric Arrays
Numeric or indexed arrays associate a numeric index with their values.
The index can be assigned automatically (index always starts at 0), like this: 

```php
$names = array("David", "Amy", "John");
```

Or

```php
$names[0] = "David";
$names[1] = "Amy";
$names[2] = "John";
```

Non heterogenous:

```php
<?php
$myArray[0] = "John";
$myArray[1] = "<strong>PHP</strong>";
$myArray[2] = 21;

echo "$myArray[0] is $myArray[2] and knows $myArray[1]";

// Outputs "John is 21 and knows PHP"
?>
```

### Associative Arrays

Associative arrays are arrays that use named keys that you assign to them.
There are two ways to create an associative array:

```php
$people = array("David"=>"27", "Amy"=>"21", "John"=>"42");
// or
$people['David'] = "27";
$people['Amy'] = "21";
$people['John'] = "42";

$people = array("David"=>"27", "Amy"=>"21", "John"=>"42");

echo $people['Amy']; 
```

```php
$people = array("David"=>"27", "Amy"=>"21", "John"=>"42");

echo $people['Amy']; // Outputs 21"
```


## Include & Require

The require statement is identical to include, the exception being that, upon failure, it produces a fatal error. When a file is included using the include statement, but PHP is unable to find it, the script continues to execute. In the case of require, the script will cease execution and produce an error.

<Container type="info">

* Use **require** when the file is required for the application to run.
* Use **include** when the file is not required. The application should continue, even when the file is not found.

</Container>

## Functions

<Container type="warning">

Function names are **NOT** case-sensitive.

</Container>

## Superglobal (predefined variables)
A superglobal is a predefined variable that is **always accessible, regardless of scope**. You can access the PHP superglobals through any function, class, or file.

* `$_SERVER`
* `$GLOBALS`
* `$_REQUEST`
* `$_POST`
* `$_GET`
* `$_FILES`
* `$_ENV`
* `$_COOKIE`
* `$_SESSION.`

### _SERVER
is an array that includes information such as headers, paths, and script locations. The entries in this array are created by the web server. 

| Element                      | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| `$_SERVER['PHP_SELF']        | Returns **filename** of the currently executing script    |
| `$_SERVER['SERVER_ADDR']     | Returns **IP** of the host server                         |
| `$_SERVER['SERVER_NAME']     | Returns **name** og the host server                       |
| `$_SERVER['HTTP_HOST']       | Returns **Host header** from current request              |
| `$_SERVER['REMOTE_ADDR']     | Returns **IP** from whre the user is viewing current page |
| `$_SERVER['REMOTE_HOST']     | Returns **Host name** from where the user "               |
| `$_SERVER['SCRIPT_FILENAME'] | Returns **absolute path** currently executing script      |
| `$_SERVER['SERVER_PORT']     | Returns **port** of the webserver (80ish)                 |
| `$_SERVER['SCRIPT_NAME']     | Returns **path** of current script                        |
| `$_SERVER['SCRIPT_URI']      | Returns **URI** current page                              |

<br>

<Container type="info" header="_SERVER">

This method can be useful when you have a lot of images on your server and need to transfer the website to another host. Instead of changing the path for each image, you can do the following:
Create a config.php file, that holds the path to your images:

```php
<?php
$host = $_SERVER['HTTP_HOST'];
$image_path = $host.'/images/';
?>
```

Use the config.php file in your scripts:

```php
<?php
require 'config.php';
echo '<img src="'.$image_path.'header.png" />';
?>
```

The path to the images folder is now dynamic. It will change automatically based on the Host header.

</Container>

### Forms

**The purpose of the PHP superglobals `$_GET` and `$_POST` is to collect data that has been entered into a form**. The example below shows a simple HTML form that includes two input fields and a submit button:

```html
<form action="first.php" method="post">
  <p>Name: <input type="text" name="name" /></p>
  <p>Age: <input type="text" name="age" /></p>
  <p><input type="submit" name="submit" value="Submit" /></p>
</form>
```

* The `action` attribute specifies that when the form is submitted, the data is sent to a PHP file named **first.php**. 
* HTML form elements have **names**, which will be used when **accessing the data with PHP**.

Now we can access the posted form data using the `$_POST` associative array.
In the **first.php** file:

```php
<html>
<body>
Welcome <?php echo $_POST["name"]; ?><br />
Your age: <?php echo $_POST["age"]; ?>
</body>
</html>
```

### GET and POST

The two methods for submitting forms are **GET** and **POST**.

* Information sent from a form via the **POST** method **is invisible to others**, since all names and/or **values are embedded within the body of the HTTP request**. Also, there are no limits on the amount of information to be sent.
* Moreover, POST supports advanced functionality such as support for multi-part binary input while uploading files to the server.
However, it is not possible to bookmark the page, as the submitted values are not visible.

<br>

* Information sent via a form using the **GET** method **is visible to everyone** (all variable names and values are displayed in the URL). **GET** also sets limits on the amount of information that can be sent (about 2000 characters).

```php
// first.php
<?php
echo "Hi ".$_GET['name'].". ";
echo "You are ".$_GET['age']." years old.";
?>
```

Now, the form is submitted to the actionGet.php, and you can see the submitted data in the URL:
<br>
<br>

![Image](https://i.imgur.com/FjNv8Sh.png)

## _REQUEST
PHP provides another superglobal variable `$_REQUEST` that contains the values of both the `$_GET` and `$_POST` variables as well as the values of the `$_COOKIE` superglobal variable.

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Example of PHP $_REQUEST variable</title>
</head>
<body>
<?php
if(isset($_REQUEST["name"])){
    echo "<p>Hi, " . $_REQUEST["name"] . "</p>";
}
?>
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
    <label for="inputName">Name:</label>
    <input type="text" name="name" id="inputName">
    <input type="submit" value="Submit">
</form>
</body>
```

## _SESSION

Using a **session**, you can store information in variables, to be used across multiple pages.
Information is not stored on the user's computer, as it is with cookies.
**By default, session variables last until the user closes the browser.**

* A session is started using the `session_start()` function.
* Use the PHP global `$_SESSION `to set session variables.

```php
<?php
// Start the session
session_start();

$_SESSION['color'] = "red";
$_SESSION['name'] = "John";
?>
```

Now, the color and name session variables are accessible on multiple pages, throughout the entire session.

<Container type="danger">

The session_start() function **must be the very first thing in your document**. Before any HTML tags.

</Container>

Another page can be created that can access the session variables we set in the previous page:

```php
<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html>
<body>
<?php
echo "Your name is " . $_SESSION['name'];
// Outputs "Your name is John"
?>
</body>
</html>
```

* Your session variables remain **available** in the `$_SESSION` superglobal **until you close your session**.
* All global session variables can be removed manually by using `session_unset()`. 
* You can also destroy the session with `session_destroy()`.

## Cookies

Cookies are **often used to identify the user**. A cookie is a small file that **the server embeds on the user's computer**. Each time the same computer requests a page through a browser, it will send the cookie, too. **With PHP, you can both create and retrieve cookie values.**

Create cookies using the setcookie() function:

```php
setcookie(name, value, expire, path, domain, secure, httponly);
```

<br>

* `name`: Specifies the cookie's name
* `value`: Specifies the cookie's value
* `expire`: Specifies (in seconds) when the cookie is to expire. The value: `time()+86400*30`, will set the cookie to expire in 30 days. If this parameter is omitted or set to 0, the cookie will expire at the end of the session (when the browser closes). Default is 0.
* `path`: Specifies the server path of the cookie. If set to **"/"**, the cookie will be available within the entire domain. If set to **"/php/"**, the cookie will only be available within the php directory and all sub-directories of php. The default value is the current directory in which the cookie is being set.
* `domain`: Specifies the cookie's domain name. To make the cookie available on all subdomains of example.com, set the domain to "example.com".
* `secure`: Specifies whether or not the cookie should only be transmitted over a secure, HTTPS connection. TRUE indicates that the cookie will only be set if a secure connection exists. Default is FALSE.
* `httponly`: If set to TRUE, the cookie will be accessible only through the HTTP protocol (the cookie will not be accessible to scripting languages). Using httponly helps reduce identity theft using XSS attacks. Default is FALSE.

The following example creates a cookie **named** "user" with the **value** "John". The cookie will **expire** after 30 days, which is written as `86400 * 30`, in which 86400 seconds = one day. The '/' means that the cookie is **available throughout the entire website**.

We then retrieve the **value** of the cookie "user" (using the global variable `$_COOKIE`). We also use the `isset()` function to find out if the cookie is set:

```php
<?php
$value = "John";
setcookie("user", $value, time() + (86400 * 30), '/'); 

if(isset($_COOKIE['user'])) {
  echo "Value is: ". $_COOKIE['user'];
}
//Outputs "Value is: John"
?>
```

<br>

<Container type="danger">

The `setcookie()` function **must** appear **before** the `<html>` tag.
The value of the cookie is automatically encoded when the cookie is sent, and is automatically decoded when it's received. Nevertheless, NEVER store sensitive information in cookies.

</Container>

## OOP

### En vrac

* `unset($object)` : call `__destruct()` of `$object`'s class

