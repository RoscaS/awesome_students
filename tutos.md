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

### Checkbox

<br>

<Check state="true">Trouver le dahu</Check>
<Check state="false">Fermer la porte</Check>

```md
<Check state="true">Trouver le dahu</Check>
<Check state="false">Fermer la porte</Check>
```

|     | type   | values                                        | default |
| --- | ------ | --------------------------------------------- | :-----: |
| `state` | string | `"r"`: red <br> `"g"`: green <br> `"b"`: blue | `"r"`   |


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

```md
Un mot <st c="g">vert</st>, un mot <st c="r">rouge</st> et 
une <st c="b"> fin de phrase bien bleu</st>.
```

|         | type   | values                                        | default |
| ------- | ------ | --------------------------------------------- | :-----: |
| `state` | string | `"true"` <br> `"false"`| `"false"`   |


### Controle avancé sur les médias

<Media
  src="https://v1.vuejs.org/images/logo.png"
  url="https://www.google.com"
  caption="Un beau logo"
  center="true"
  width="150"
/>


```md
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

<Col>
<template slot="left">

![Image](https://i.imgur.com/6XRQj3h.png)

</template>
<template slot="right">

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta doloribus facilis, illum maxime perspiciatis quasi sed.

</template>
</Col>

```md{3,5,8,12}
<Col proportions="6/6" vAlign="0">
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

|               | type   | format  | default |
| ------------- | ------ | ------- | ------- |
| `proportions` | string | `"n/m"` | `"6/6"` |
| `vAlign`      | string | `"n"`   | `"0"`   |



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
	"underline": {
		"prefix": "underline",
		"body": "<u>$1</u>"
	},
	"breakLine": {
		"prefix": "br",
		"body": "<br>"
	},
	"center": {
		"prefix": "center",
		"body": "<Center>\n\n${1:content}\n\n</Center>"
	},
	"fontAwesome": {
		"prefix": "fa",
		"body": "<Fa fa=\"${1:arrow-right}\"/> ",
	},
	"check": {
		"prefix": "check",
		"body": "<Check state=\"false\">${1:label}</Check>",
	},
	"style": {
		"prefix": "style",
		"body": "<st c=\"${2:rgb}\">$1</st>"
	},
	"columns": {
		"prefix": "col",
		"body": "<Col proportions=\"${3:6/6}\" vAlign=\"${4:0}\">\n<template slot=\"left\">\n\n${1:Colonne de gauche (ne pas supprimer les lignes vides!)}\n\n</template>\n<template slot=\"right\">\n\n${2:Collonne de droite (ne pas supprimer les lignes vides!)}\n\n</template>\n</Col>"
	},
	"container": {
		"prefix": "container",
		"body": "<Container type=\"${1:info-warning-danger}\">\n\n${2:contenu (ne pas supprimer les lignes vides!)}\n\n</Container>"
	},
	"card": {
		"prefix": "card",
		"body": "<Card header=\"${1:titre}\" ${2:max-width=\"${3:270}\"}>\n\n${4:contenu (ne pas supprimer les lignes vides!)}\n\n</Card>"
	},
	"meta": {
		"prefix": "meta",
		"body": "---\ntitle: ${1:titre de l'article affiché}\ndate: ${2:YYYY-MM-DD}\nauthor: ${3: \"Nathan, Michael, Sol, <george rogé; INF2C>\"}\nsidebar: auto\nproject: false\n---\n\n## ${4: Premier sous-titre}\n\n"
	},
	"code": {
		"prefix": "code",
		"body": "```${1:language}\n${2:contenu}\n```\n"
	},
	"definition": {
		"prefix": "def",
		"body": "<Def def=\"${2:définition}\">${1:mot}</Def>"
	},
	"spoiler": {
		"prefix": "spoiler",
		"body": "<Spoiler>\n\n${1:contenu (ne pas supprimer les lignes vides!)}\n\n</Spoiler>\n"
	},
	"media": {
		"prefix": "media",
		"body": "\n<Media\n\tsrc=\"$1\"\n\turl=\"${2:supprimer cette ligne si pas de contenu}\"\n\tcaption=\"${3:supprimer cette ligne si pas de contenu}\"\n\tcenter=\"${4:true}\"\n\twidth=${5:450}\n/>\n\n"
	},
	"diagram": {
		"prefix": "diag",
		"body": "\n<Diagram \n\tcenter=\"true\" \n\turl=\"${2:image url}\" \n\tlink=\"${3:diagram link}\"\n/>\n\n "
	}
}
```

</Spoiler>

À la suite de cette manipulation, dans n'importe quel fichier markdown les mot clés précédés de `prefix` vont trigger l'autocompletion.


</Container>

