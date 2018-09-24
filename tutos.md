# Comment utiliser le wiki

## Visiteurs
Consultation libre de la majorité des articles.

## L'équipe

### Liens utilises
* [Tuto md](https://devhints.io/markdown)
* [Tuto katex (maths)](https://katex.org/docs/supported.html)


### Répo
`git clone https://github.com/RoscaS/awesome_students`

Tout nouvel article créé dans `/blog` est mirror sur le site après un push.
Ne pas toucher aux dossiers sous `/blog`. Vous pouvez éditer, créér mais pas changer la structure.

### Format d'un nouvel article
**Merci de respecter ce format pour ne pas casser l'affichage et les mécanismes du site.**

```md
---
title: J'aime la viande
date: 2018-09-22
author: George
sidebar: auto
---

## Titre principal

Se retrouve dans le menu de gauche

### Sous titre principal

Se retrouve dans le menu de gauche aussi
```

* Les lignes 1 à 6 sont le **frontmatter** (les méta données de l'article). L'ordre n'est pas important mais le format des données l'est. Le field `sidebar: auto` permet d'afficher ou non la table des matières dynamique dans le menu de gauche.

Pour le reste c'est comme d'habitude. Les header de `#` à `###` sont repris dans le menu de gauche mais ça se fait automatiquement.

### Complément syntaxique

#### Expressions mathématiques
Gérées via [katex](https://katex.org/docs/supported.html) il suffit d'enfermer les expressions entre `$`


#### Insérer un gif
* `![](http://i.imgur.com/OUkLi.gif)` : notez le `.gif` à la fin.

#### Highlight une ligne de code:

Quand vous commencez un bloc de code, dans la partie ` ```language`, si vous ajoutez `{n}` collé à `language` ça va highlight la ligne demandée:

```javascript{3}
fetchData() {
  axios.get(urls.days).then(response => {
    response.data.forEach((day, idx) => {
      this.initData(day, idx);
    });
    this.state.hasLoaded = true;
  });
},
```

Vous pouvez ajouter autant de lignes que vous voulez en les séparant par des `,`.

#### Custom containers

Dans le md:

```md
::: tip
success
:::

::: warning
warning
:::

::: danger
danger
:::
```

Output:

::: tip
success
:::

::: warning
warning
:::

::: danger
danger
:::

Custom:

```md
::: danger STOP
Pas plus loin !
:::
```

::: danger STOP
Pas plus loin !
:::

