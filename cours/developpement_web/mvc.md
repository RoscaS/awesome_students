---
title: Modèle MVC
date: 2018-11-13
author: Sol
sidebar: auto
project: false
---

## En vrac

### Variable _SERVER

<Spoiler>

```php
array (size=25)
  'DOCUMENT_ROOT' => string '/home/sol/Code/PHP/Ecole/05_MVC_HeArc-router' (length=44)
  'REMOTE_ADDR' => string '::1' (length=3)
  'REMOTE_PORT' => string '48514' (length=5)
  'SERVER_SOFTWARE' => string 'PHP 7.2.11 Development Server' (length=29)
  'SERVER_PROTOCOL' => string 'HTTP/1.1' (length=8)
  'SERVER_NAME' => string 'localhost' (length=9)
  'SERVER_PORT' => string '8082' (length=4)
  'REQUEST_URI' => string '/index.php' (length=10)
  'REQUEST_METHOD' => string 'GET' (length=3)
  'SCRIPT_NAME' => string '/index.php' (length=10)
  'SCRIPT_FILENAME' => string '/home/sol/Code/PHP/Ecole/05_MVC_HeArc-router/index.php' (length=54)
  'PHP_SELF' => string '/index.php' (length=10)
  'HTTP_HOST' => string 'localhost:8082' (length=14)
  'HTTP_CONNECTION' => string 'keep-alive' (length=10)
  'HTTP_PRAGMA' => string 'no-cache' (length=8)
  'HTTP_CACHE_CONTROL' => string 'no-cache' (length=8)
  'HTTP_UPGRADE_INSECURE_REQUESTS' => string '1' (length=1)
  'HTTP_USER_AGENT' => string 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36' (length=104)
  'HTTP_X_IJT' => string 'iau63o7e6bghuna3a2htr7j803' (length=26)
  'HTTP_ACCEPT' => string 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' (length=85)
  'HTTP_ACCEPT_ENCODING' => string 'gzip, deflate, br' (length=17)
  'HTTP_ACCEPT_LANGUAGE' => string 'en-GB,en;q=0.9,en-US;q=0.8,fr;q=0.7' (length=35)
  'HTTP_COOKIE' => string 'Phpstorm-bf4da0e9=1f55a27f-bc03-4155-b2cc-3e9d9252d481' (length=54)
  'REQUEST_TIME_FLOAT' => float 1542090129.0194
  'REQUEST_TIME' => int 1542090129
```

</Spoiler>

## MVC: Serie 2

## 2. Fichier htaccess

```php
// .htaccess

RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [QSA,L]
```


## 3. Fichier index.php

```php
<!-- index.php  -->
<?php
require 'core/bootstrap.php';
$uri = Request::uri();
$router = Router::load('routes.php');
$router->direct($uri);
```

* Ligne 3: `require 'core/bootstrap.php`: importe le contenu du fichier `bootstrap.php`:


* Ligne 4: `$uri = Request::uri();`
    * set la variable `$uri` avec l'uri passée dans le champ url du navigateur trimée
    * uri: http://localhost:8082**/cette/partie/de/l/url**)
    
* Ligne 5: `$router = Router::load('router.php');`
    * set la variable `$router` avec un objet de type `Router` contenant un array qui contient les valeurs du fichier `routes.php` (spécifié en argument lors du call de `Router::load`)
    
    


