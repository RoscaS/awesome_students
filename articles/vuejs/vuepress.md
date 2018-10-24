---
title: Vuepress
date: 2018-10-22
author: Sol
sidebar: auto
---

## Awesome Students

### Extensions utilisées

<Col proportions="6/6" vAlign="0">
<template slot="left">

<Card header="Système" max-width="270">

* [auth0]()
* [luxon]()
* [node-sass]()

</Card>

</template>
<template slot="right">

<Card header="Esthétique" max-width="270">

* [v-tooltip]()
* [vuesax]()
* [vue-slide-toggle]()

</Card>

</template>
</Col>

<Card header="Utils" max-width="270">

* [asciitree]()
* [chartsJs]()
* [markdown-it-katex]()
* [markdown-it-plantuml](https://www.npmjs.com/package/markdown-it-plantuml)
    * [plantuml](http://plantuml.com/PlantUML_Language_Reference_Guide.pdf)

</Card>

## Integrations

### Nomnoml <small><st c="r">remplacé par plantuml</st></small>

* [Web app](http://www.nomnoml.com/)
* [Repo](https://github.com/skanaar/nomnoml)

Après investigation de l'erreur:
```js
TypeError: _.object is not a function
```
Les soucis semblent venir ([ici](https://forum.quasar-framework.org/topic/1977/dependency-was-not-found-using-a-npm-package/9)  et [là](https://github.com/angular-ui/angular-google-maps/issues/1682))d'un problème de compatibilité avec la nouvelle version de `lodash`. Un downgrade à la <Def def="npm install lodash@3.7.0">version 3.7.0</Def> col semble être la solution si il n'y a pas une dépendance du projet qui utilise déjà une version plus haute que la 3.7.0. Dans le cas contraire le work-arround que j'ai trouvé consiste à remplacer les fonctions dépréciées par des alias avant l'utilisation du module qui en a besoin. 

```js
if( typeof _.object === 'undefined' ) {
    _.object = _.zipObject;
}
if( typeof _.pluck === 'undefined' ) {
    _.pluck = _.map;
}
if( typeof _.indexBy === 'undefined' ) {
    _.indexBy = _.keyBy;
}
if( typeof _.findWhere === 'undefined' ) {
    _.findWhere = _.find;
}
```

Pour identifier les fonctions qui pose problème, j'ai "simplement" googlé les erreurs successives.
