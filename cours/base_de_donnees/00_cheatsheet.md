---
title: CheatSheet
date: 2018-09-01
author: Sol
sidebar: auto
---

## Creation & edition

* `CREATE TABLE`: creates a new table.
* `INSERT INTO`: adds a new row to a table.
* `SELECT queries`: data from a table.
* `ALTER TABLE`: changes an existing table.
* `UPDATE edits`: a row in a table.
* `DELETE FROM`: deletes rows from a table.

## Query

* `SELECT` is the clause we use every time we want to query information from a database.
* `AS` renames a column or table.
* `DISTINCT` return unique values.
* `WHERE` filter the results of the query based on conditions.
* `LIKE`:
  * `SELECT * FROM movies WHERE name LIKE 'Se_en';`: `_` is a wildcard [A-z][0-9]
  * `SELECT * FROM movies WHERE name LIKE '%man%';`: equivalent of shell's `*`
* `BETWEEN`:
  * `SELECT * FROM movies WHERE name BETWEEN 'A' AND 'J';` 
    * movies that starts with 'A' <Fa fa="arrow-right"/>  'J' non included and non case sensitive
  * `SELECT * FROM movies WHERE year BETWEEN 1990 AND 1999;`
    *  year >= 1990 and year <= 1999
* `AND` and `OR` combines multiple conditions.
* `ORDER BY` sorts the result.
* `LIMIT` specifies the maximum number of rows that the query will return.
* `CASE` creates different outputs.

## Aggregate functions

Aggregate functions perform calculations on data, they combine multiple rows together to form a single value of more meaningful information.

* `COUNT()`: count the number of rows
* `SUM()`: the sum of the values in a column
* `MAX()`/`MIN()`: the largest/smallest value
* `AVG()`: the average of the values in a column
* `ROUND()`: round the values in the column

### Group By

`GROUP BY` is a clause used with **aggregate functions** to combine data from one or more columns.

We might want to know the mean IMDB ratings for **all** movies **each** year. We could calculate each number by a series of queries with different `WHERE` statements, like so:

```sql
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 1999;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2000;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2001;
```

That's where `GROUP BY` comes in handy:

```sql
SELECT year, avg(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;
```

`GROUP BY` is a clause that is used with **aggregate** functions. It's used in collaboration with the `SELECT` statement to arrange identical data into *groups*.

<Container type="danger">

The `GROUP BY` statement comes **after** andy `WHERE` statements, but **before** `ORDER BY` or `LIMIT`.

</Container>

#### Exemples

Soit le schéma **apps**: [id, name, category, downloads, price].

Retourne le nombre d'apps dont le nombre de téléchargement est plus grand que 20000 dans chaque tranche (**groupe**) de prix:

<Col proportions="6/6" vAlign="10">
<template slot="left">

```sql
SELECT price, count(*)
FROM apps
WHERE downloads > 20000
GROUP BY price;
```

</template>
<template slot="right">

![Image](https://i.imgur.com/FKqOxa1.png)

</template>
</Col>

Retourne le nombre de téléchargement par catégorie (**groupe**) d'app:

<Col proportions="6/6" vAlign="20">
<template slot="left">

```sql
SELECT category,
     sum(downloads) 
FROM fake_apps
GROUP BY category;
```

</template>
<template slot="right">

![Image](https://i.imgur.com/hkIypl4.png)

</template>
</Col>

Retourne le nombre de téléchargements moyens par type (**groupe**) d'application et par (**groupe** de) prix.

<Col proportions="6/6" vAlign="0">
<template slot="left">

```sql
SELECT category,
	price,
  round(avg(downloads), 2)
FROM fake_apps
GROUP BY category, price;
```

</template>
<template slot="right">

![Image](https://i.imgur.com/sTUtvZS.png)

</template>
</Col>

<Container type="info">

Il est également possible de définir les groupes en utilisant les références des colonnes appelées dans le `SELECT`:

```sql
SELECT category,
	price,
  ROUND(AVG(downloads), 2)
FROM fake_apps
GROUP BY 1, 2;
```

Cette requête est équivalente à la précédente.

</Container>

### Having

 `HAVING` limits the results of a query based on an aggregate property. It's very similar to `WHERE` but it's used for *groups* made with `GROUP BY`.

#### Examples

Retourne la moyenne des téléchargements et le nombre d'applications à pour chaque tranche (**groupe**) de prix si le nombre d'applications dans cette tranche est plus grand que 10.

<Col proportions="6/6" vAlign="15">
<template slot="left">

```sql
SELECT price,
	ROUND(AVG(downloads)),
  COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;
```

</template>
<template slot="right">

![Image](https://i.imgur.com/vOknc7S.png)

</template>
</Col>
