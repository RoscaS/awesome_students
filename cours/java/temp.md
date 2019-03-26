---
title: Temp
date: 2019-02-07
author: Sol
sidebar: auto
project: false
hide: false
---

### Types des références


* <code><st c="b">TypeLocal</st> ma_variable = new <st c="g">TypeEffectif</st>();</code>
* <code><st c="b">List</st>&lt;Integer&gt; entiers = new <st c="g">ArrayList</st>&lt;&gt;();</code>

Une référence possède deux types:
* <st c="b">Local</st>: donné par le typage local vu par le compilateur
* <st c="g">Effectif</st>: définit à l'instanciation et ne change jamais

<br>

<Container type="info">

```java
Set s = new TriSet<Double>();
```
* Le type <st c="b">local</st> de `s` est `Set` mais égallement `Object` qui est la classe dont tous les objects en java dérivent.
* Le type de `s` <st c="g">effectif</st> est `TriSet`

</Container>