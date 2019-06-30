---
title: CheatSheet
date: 2018-09-01
author: Sol
sidebar: auto
---

## Postgres on Ubuntu

* [tuto](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

**Install:**
```shell
sudo apt update
sudo apt install postgresql postgresql-contrib
```


* `sudo -u postgres psql`: Access postgres prompt.
* `\q`: exit postgres prompt.
* `sudo -u postgres createdb myDb` create new db.



## Théorie

### Modélisation conceptuelle et logique
La différence entre les deux est le niveau d'abstraction.
* Modélisation **conceptuelle**: plus abstraite, elle décrit les données et les liens qui les unit.
* Modélisation **Logique**: décrit un modèle conceptuel.

### Transaction

* Permet de **grouper plusieurs requêtes**, lesquelles seront validées (`COMMIT`) ou annulées (`ROLLBACK`) toutes en même temps.
* Tous les changements de données (insertion, suppression, modification) faites par les requêtes à l'intérieur d'une transaction sont **invisibles pour les autres sessions tant que la transaction n'est pas validée**
* Les transactions permettent d'**executer un traitement nécessitant plusieurs requêtes en une seule fois**, ou de l'annuler complètement si une des requête pose problème ou si la transaction est interrompue.
* Ceraines commandes SQL provoquent une **validation implicite des transactions**.
* Les critères **ACID** sont les critères qu'un système appliquant les transactions doit respecter pour être fiable: **Atomicité, Cohérence, Isolation, Durabilité.**

### Procédure stockée

* **Ensemble d'instructions** que l'on peut exécuter sur commande.
* Objet de la base de données **stockée de manière durable** au même titre qu'une table. Elle n'est pas supprimée à la fin de la session comme l'est une requête préparée.
* Permet d'utiliser des directives (conditionnels, boucles,...)
* Encapsulation du SQL
* Séparation de la logique d'accès BDD de la logique métier de l'application
* Code SQL précompilé
* Permet de **gagner en performance** en diminuant les allers-retours entre le client et le serveur. 
* Permet de **sécuriser une BDD** et à s'assurer que les traitements sensibles sont toujours exécutés de la même façon.
* **Ajoute de la charge serveur**.
* **Syntaxe pas portable** d'un SGBD à l'autre.

**Exemples dans lesquels une procédure stockée est préférable à une séquence de requètes SQL:**
* Si on veut pouvoir utiliser des conditionnels ou des boucles
* Pour abstraire certaines taches. 
  * L'utilisateur n'a pas accès aux commandes SQL et ne peut qu'appeler des procédure ce qui permet de controler les commandes utilisées. Cela donne un effet d'encapsulation de la BDD en n'autorisant que certaines oppérations.
* Pour augmenter les performances: Le SGBD compile et optimise à l'avance les commandes de la procédure à le place de le faire à chaque séquence de commandes.



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


<Spoiler tag="more">

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

The `GROUP BY` statement comes **after** and `WHERE` statements, but **before** `ORDER BY` or `LIMIT`.

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

</Spoiler>


### Having

 `HAVING` limits the results of a query based on an aggregate property. It's very similar to `WHERE` but it's used for *groups* made with `GROUP BY`.


<Spoiler tag="more">

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

</Spoiler>


## Multiple tables

* `JOIN` will combine rows from different tables if the join condition is true.
* `LEFT JOIN` will return every row in the left table, and if the join condition is not met, NULL values are used to fill in the columns from the right table.
  * **Primary key** is a column that serves a unique identifier for the rows in the table.
  * **Foreign key** is a column that contains the primary key to another table.
* `CROSS JOIN` lets us combine all rows of one table with all rows of another table.
* `UNION` stacks one dataset on top of another.
* `WITH` allows us to define one or more temporary tables that can be used in the final query.