---
title: Jee
date: 2019-10-09
author: Sol
sidebar: auto
project: false
hide: false
---

## En vrac

* Important d'avoir des timeout pour les accès IO (Db Files)
  * à voir avec threads bloqués


* `ContextPath`: après le port
* `ServeltPath`: declenche le mapping
* `PathInfo`: tout le reste (args,...)

## Servlet

* Classe héritant de `HttpServlet`
* Permet la programmation d'application coté serveur
* Permet l'extension d'un serveur Web en Java
* Permet la construction d'une app web dynamique
* Les servlet sont des **composants** Java

![Image](https://i.imgur.com/6cdod73.png)

* **Joue le role de controleur (MVC)**


![Image](https://i.imgur.com/7HCaOnf.png)

### Cycle de vie

* Géré par JEE, (on n'instancie pas la classe `HttpServlet` directement)

![Image](https://i.imgur.com/K0qAnRc.png)

## Http Servlet

![Image](https://i.imgur.com/bXOyCiR.png)

**Exemple**:

![Image](https://i.imgur.com/gtt7WcP.png)

Ce Servelt répond à tous les chemins `/info/...`, avec la méthode `GET`.