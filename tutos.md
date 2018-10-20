---
sidebar: auto
---

# Comment utiliser le wiki

## Liens utilises
* [Tuto md](https://devhints.io/markdown)
* [Tuto katex (maths)](https://katex.org/docs/supported.html)

## Complément syntaxique

### Expressions mathématiques
Gérées via [katex](https://katex.org/docs/supported.html) il suffit d'enfermer les expressions entre `$`


### Définitions on hover
Un mot <Def def="pas facile">compliqué</Def> par exemple:

```md
Un mot <Def def="pas facile">compliqué</Def> par exemple
```

### Balise spoiler

<Spoiler>

* lala
* poule
* poney

$f(x) = 4x^2 + 2x - 3$

Adipisci beatae consectetur distinctio doloremque ea excepturi id, impedit itaque iure neque nihil placeat quae, quaerat qui quis rem soluta. Ad, obcaecati!

```js
  sortByPosition() {
    this.images.sort((a, b) => {
      return a.position - b.position;
    });
  }
```
Adipisci beatae consectetur distinctio doloremque ea excepturi id, impedit itaque iure neque nihil placeat quae, quaerat qui quis rem soluta. Ad, obcaecati!

</Spoiler>

```md{2,5}
<Spoiler>

N'importe quel type de contenu md habituel 
**à l'exception d'une autre balise spoiler!**

</Spoiler>

```

<st c="r">Les lignes vides avant et après le contenu sont requises! </st>


### Couleurs dans le text
Un mot <st c="g">vert</st>, un mot <st c="r">rouge</st> et une <st c="b"> fin de phrase bien bleu</st>.

```html
Un mot <st c="g">vert</st>, un mot <st c="r">rouge</st> et 
une <st c="b"> fin de phrase bien bleu</st>.
```

|     | type   | values                                        | default |
| --- | ------ | --------------------------------------------- | :-----: |
| `c` | string | `"r"`: red <br> `"g"`: green <br> `"b"`: blue | `"r"`   |


### Controle avancé sur les médias

<Media
  src="https://v1.vuejs.org/images/logo.png"
  url="https://www.google.com"
  caption="Un beau logo"
  center="true"
  width="150"
/>


```html
<Media
  src="https://v1.vuejs.org/images/logo.png"
  url="https://www.google.com"
  caption="Un beau logo
  center="true"
  width=150
/>
```
Tous les paramètres sont optionnels.

### Colonnes

<Col spacer="1">
<template slot="left">

![Image](https://i.imgur.com/6XRQj3h.png)

</template>
<template slot="right">

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta doloribus facilis, illum maxime perspiciatis quasi sed.

</template>
</Col>

```html{3,5,8,12}
<Col spacer="1" proportions="5/5" vAlign="0">
<template slot="left">

![Image](https://i.imgur.com/6XRQj3h.png)

</template>
<template slot="right">

Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Aspernatur dicta doloribus facilis, 
illum maxime perspiciatis quasi sed.
    
</template>
</Col>
```
<st c="r">Les lignes vides avant et après le contenu des colonnes sont requises! </st>
* Paramètres:

|               | type   | format | default |
| ------------- | ------ | ------ | ------- |
| `spacer`      | string | "n"    | 1       |
| `proportions` | string | "n/m"  | 5/5     |
| `vAlign`      | string | "n"    | 0       |



### Highlight une ligne de code

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

Vous pouvez highlight autant de lignes que vous voulez en les séparant par des `,`:

<code>```cpp{2,5,14}</code> (Sans espace après les `,`).


### Custom containers

<Container type="info">

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

</Container>


<Container type="warning">

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

</Container>


<Container type="danger">

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

</Container>

```md{2,4}
<Container type="info">

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

</Container>
```

<st c="r">Les lignes vides avant et après le contenu sont requises! </st>
* Paramètres:

|          | type   | values                                    | default  |
| -------- | ------ | ----------------------------------------- | :------: |
| `type`   | string | `"info"` <br> `"warning"` <br> `"danger"` | `"info"` |
| `header` | string | `"complément au titre"`                   | `""`     |



## Snippets vsCode

Dans vsCode:
1. Ouvrez la <Def def="Ctrl + Shift + p">palette de commandes</Def>
2. Tappez: `snippets` 
3. Choisissez `Preferences: Configure User Snippets`
4. Tappez: `markdown`

Dans le <Def def="markdown.json">document qui vient de s'ouvrir</Def> effacez tout et ajoutez le contenu de la balise spoiler qui suit:

<Spoiler>

```json
{
	"meta": {
		"prefix": "meta",
		"body": "---\ntitle: ${1:titre de l'article affiché}\ndate: ${2:YYYY-MM-DD}\nauthor: ${3: ton prénom}\nsidebar: auto\n---\n\n## ${4: Premier sous-titre}\n\n"
  },
  "columns": {
		"prefix": "col",
		"body": "<Col spacer=\"1\">\n<template slot=\"left\">\n\n${1:Colonne de gauche (ne pas supprimer les lignes vides!)}\n\n</template>\n<template slot=\"right\">\n\n${2:Collonne de droite (ne pas supprimer les lignes vides!)}\n\n</template>\n</Col>"
	},
	"code": {
		"prefix": "code",
		"body": "```${1:language}\n${2:contenu}\n```\n"
	},
	"container": {
		"prefix": "container",
		"body": "<Container type=\"${1:info-warning-danger}\">\n\n${2:contenu (ne pas supprimer les lignes vides!)}\n\n</Container>"
	},
  "style": {
		"prefix": "style",
		"body": "<st c=\"${2:rgb}\">$1</st>"
	},
	"def": {
		"prefix": "def",
		"body": "<Def def=\"${2:définition}\">${1:mot}</Def>"
	},
	"spoiler": {
		"prefix": "spoiler",
		"body": "<Spoiler>\n\n${1:contenu (ne pas supprimer les lignes vides)}\n\n</Spoiler>\n"
	},
	"media": {
		"prefix": "media",
		"body": "\n<Media\n\tsrc=\"$1\"\n\turl=\"${2:supprimer cette ligne si pas de contenu}\"\n\tcaption=\"${3:supprimer cette ligne si pas de contenu}\"\n\tcenter=\"${4:true}\"\n\twidth=${5:450}\n/>\n\n"
	}
}
```

</Spoiler>

À la suite de cette manipulation, dans n'importe quel fichier markdown les mot clés suivants seront disponible et vont trigger l'autocompletion:

* `meta`: frontmater
* `def`
* `spoiler`
* `code`: balises de code
* `tip`: highlight vert
* `warning`: highlight jaune
* `danger`: highlight rouge


## Format d'un nouvel article
**Merci de respecter ce format (noter la date) pour ne pas casser l'affichage et les mécanismes du site.**
* Tout nouvel article créé est mirror sur le site après un push
* Le titre spécifé dans `title` est automatiquement affiché en haut de la page donc pas besoin de le réécrire

```md
---
title: J'aime la viande
date: 2018-09-22
author: George
sidebar: auto
---

## Sous Titre

Se retrouve dans le menu de gauche

## Sous titre principal

Se retrouve dans le menu de gauche aussi
```

* Les lignes 1 à 6 sont le **frontmatter** (les méta données de l'article). L'ordre n'est pas important mais le format des données l'est. Le field `sidebar: auto` permet d'afficher ou non la table des matières dynamique dans le menu de gauche.

Pour le reste c'est comme d'habitude. Les header de `##` à `##` sont repris dans le menu de gauche automatiquement.


## Répo
`git clone https://github.com/RoscaS/awesome_students`

### Folder tree

<Spoiler>

```shell
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

</Spoiler>


### Publication
Pour publier un article il suffit de choisir le folder approprié et d'y créér un fichier `*.md` (**nom en minuscules**) dans la sous branche appropriée. Pour le publier il suffit de push sur le répo. Il se retrouvera en ligne dans les minutes qui suivent (tout est géré automatiquement).

### Nouvelle sous-branche

<Container type="danger">

Dans le doute, demandez moi de créér la nouvelle sous-branche !

</Container>

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
<Container type="danger">

* Ne pas oublier le `/` à la fin de la string et la `,` en fin de ligne
* Ne rien changer d'autre
* Dans le doute, demandez moi de créér la nouvelle sous-branche

</Container>

