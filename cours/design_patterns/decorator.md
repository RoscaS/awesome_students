---
title: Decorator
type: Structure
date: 2019-04-03
author: Sol
sidebar: auto
project: false
hide: false
---

##  Structure


<Media
    src="https://i.imgur.com/1mpxRQj.png"
    url="https://i.imgur.com/1mpxRQj.png"
    caption="https://refactoring.guru"
    center="true"
    width=450
/>

1. **Component** est une interface commune pour les décorateurs ainsi que les objets décorés.
2. le **concrete component** est une classe d'objets décorée. Elle définit les comportements qui seront modifiés par les décorateurs.
3. La classe **Base decorator** possède un attribut qui référence l'objet décoré. Cet attribut est du type de l'interface et peut donc contenir soit des **concrete components** soit des décorateurs. **Base decorator** délègue toutes les opérations à l'objet décoré.
4. **Concrete decorators** définit des comportements supplémentaires qui peuvent être dynamiquement ajoutés aux components. **Concrete decorators** redéfinit les methodes du décorateur de base et exécute ses actions avant **ou** après l'appel à la methode parent.
5. Le **Client** peut décorer des composants avec plusieurs décorateurs utilisant la même interface.

## Implémentation
1. S'assurer que le code peut être représenté comme un composant habillé de multiples couches.
2. Trouver quelles methodes sont communes entre le composant principal et les couches et créer une interface qui déclare ces méthodes.
3. Créér un composant concret et y définir le comportement de base.
4. Créér une classe décorateur de base. Cette classe devrait contenir une référence vers un objet décoré. Cet attribut doit être du type de l'interface ce qui permet de décorérer aussi bien un composant qu'un autre décorateur. Le décorateur de base doit déléguer tout le travail à l'objet décoré.
5. S'assurer que toutes les classes implémentent l'interface component.
6. Créér des décorateurs concrets dérivés de base décorator. Un décorateur concret doit éxécuter ses actions avant ou après l'appel à la méthode parente.
7. Le code du client doit être responsable de la création des décorateurs ainsi que de leurs agencement.

## Pour et contre

<Col proportions="6/6" vAlign="0">
<template slot="left">

* <st c="g">Possiblité d'étendre le comportement d'un objet sans faire une sous classe.</st>
* <st c="g">Ajouter/retirer des responsabilités à un objet dynamiquement.</st>
* <st c="g">Possiblité de combinaison de plusieurs comportements en décorant avec plusieurs décorateurs un même objet.</st>
<st c="g">Renforce le principe de _responsabilité unique_ en donant la possibilité de diviser une classe monolithique qui implémente de nombreuses variantes d'un même comportement en plusieurs petites classes.</st>


</template>
<template slot="right">

* <st c="r">Difficulté à retirer un décorateur spécifique d'un stack de décorateurs</st>
* <st c="r">Difficulté à implémenter un décorateur d'une façon à ce que son comportement ne dépende pas de l'ordre de décoration d'un stack.</st>

</template>
</Col>