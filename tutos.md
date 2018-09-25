# Comment utiliser le wiki

## Visiteurs
Consultation libre de la majorité des articles.

## L'équipe

### Liens utilises
* [Tuto md](https://devhints.io/markdown)
* [Tuto katex (maths)](https://katex.org/docs/supported.html)

### Complément syntaxique

#### Expressions mathématiques
Gérées via [katex](https://katex.org/docs/supported.html) il suffit d'enfermer les expressions entre `$`


#### Définitions on hover
Un mot <Def def="pas facile">compliqué</Def> par exemple:

```md
Un mot <Def def="pas facile">compliqué</Def> par exemple
```

#### Controle avancé sur les médias

<Media 
  src="https://imgur.com/z4U3kwu.gif" 
  url="https://www.google.com"
  caption="Une image qui bouge"
  center="true" 
  width="250"
/>


```md
<Media 
  src="https://imgur.com/z4U3kwu.gif" 
  url="https://www.google.com"
  caption="Une image qui bouge
  center="true" 
  width=350
/>
```
Tous les paramètres sont optionnels.


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

Vous pouvez highlight autant de lignes que vous voulez en les séparant par des `,`.

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


### Répo
`git clone https://github.com/RoscaS/awesome_students`

#### Folder tree
```bash
├── articles
│   ├── algo
│   │    ├── README.md
│   │    ├── recursivite.md
│   │    ├── algo_tri.md
│   │    └── ...
│   └── ...
├── cours
│   ├── base_de_donnees
│   │    ├── README.md
│   │    ├── tables.md
│   │    ├── sql.md
│   │    └── ...
│   └── ...
├── projets
│   ├── p2
│   │    ├── README.md
│   │    ├── plan.md
│   │    ├── echeances.md
│   │    └── ...
│   └── ...
├── .git
│   └── ...
├── .gitignore
├── package.json
├── package-lock.json

├── README.md
├── tutos.md
└── .vuepress
    └── ...
```
#### Publication
Pour publier un article il suffit de choisir le folder approprié et d'y créér un fichier `*.md` (**nom en minuscules**) dans la sous branche appropriée. Pour le publier il suffit de push sur le répo. Il se retrouvera en ligne dans les minutes qui suivent (tout est géré automatiquement).

#### Nouvelle sous-branche

::: danger ATTENTION!
* Dans le doute, demandez moi de créér la nouvelle sous-branche !
:::

Disons que je veux une nouvelle sous branche popotte pour le **cours** de popotte.
```bash
$ pwd
/home/vanessa/blog/AwesomeStudents
$ cd cours
$ mkdir popotte
$ cd popotte
$ printf "# Popotte\n<Categories/>\n" > README.md
$ touch poulet_aux_herbes.md
```

Il faut maintenant dire au site qu'on veut que cette nouvelle branche soit indexée:
```bash
$ pwd
/home/vanessa/blog/AwesomeStudents
$ nano .vuepress/config.js
```
Tout en bas dans `themeConfig.sideBar` se trouve une ramification similaire à celle du site.
Trouvez l'objet qui a pour `title` **cours**. Sous le meme format que le reste, ajoutez  dans son children une entrée `popotte`:

```javascript{19}
    // ../AwesomeStudents/.vuepress/config.js

    // ...
    sidebar: [
      {
        title: 'Cours',
        collapsable: true,
        children: [
          '/cours/qt/',
          '/cours/java/',
          '/cours/algo/',
          '/cours/programmation_concurente/',
          '/cours/genie_logiciel/',
          '/cours/traitement_signal/',
          '/cours/base_de_donnees/',
          '/cours/protocoles_reseaux/',
          '/cours/developpement_web/',
          '/cours/analyse/',
          '/cours/popotte/',
        ],
      },
    //  ...
```
::: danger ATTENTION!
* Ne pas oublier le `/` à la fin de la string et la `,` en fin de ligne
* Ne rien changer d'autre
* Dans le doute, demandez moi de créér la nouvelle sous-branche
:::


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

