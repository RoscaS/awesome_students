---
title: Tutoriel
---

# {{ $page.title }}

## Pour les membres authorisés

`git clone https://github.com/RoscaS/awesome_students`

Tout nouvel article créé dans `/blog` est mirror sur le site après un push.
Ne pas toucher aux dossiers sous `/blog`. Vous pouvez éditer, créér mais pas changer la structure.

## Format d'un nouvel article
**Merci de respecter ce format pour ne pas casser l'affichage et les mécanismes du site.**

```md
---
title: Exemple d'article
date: 2018-07-18
sidebar: auto
categories: [Blog]
tags: [Exemple]
authors: [Martin]
---

# {{ $page.title }}
<BlogPostMeta/>

Du text d'introduction

**Table des matières (optionnel)**
[[toc]] 


## Titre principal

Se retrouve dans le menu de gauche

### Sous titre principal

Se retrouve dans le menu de gauche aussi
```

* Les lignes 1 à 8 sont le **frontmatter** (les méta données de l'article). L'ordre n'est pas important mais le format des données l'est. Dsl pour le format de la date, j'ai géré l'affichage sur le blog mais j'ai pas eu le temps de gérer l'acquisition.  
* La ligne 10 mirror le titre écrit dans le frontmatter et permet une cohérence entre le résultat des recherches et le titre de l'article.
* La ligne 11 call le code qui se charge de formater le meta pour l'afficher endessous du titre.
* Les lignes 15 et 16 sont là pour des cas particuliers. En principe le menu de gauche fait bien mieux.

Pour le reste c'est comme d'habitude. Les header de `#` à `###` sont repris dans le menu de gauche mais ça se fait automatiquement.

## Goodies 

### Highlight une ligne de code:

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

### Custom containers

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

---
