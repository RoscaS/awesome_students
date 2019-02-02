---
title: Utils
date: 2018-08-29
author:  "Sol"
sidebar: auto
project: false
---


## Postgres (Arch)

* Connect as postgres user: `$ sudo -iu postgres`
  * Create new DB: `$[postgres] createdb dbname`
  * Connect to specific DB: `$[postgres] psql -d dbname`
  * Drop db: `$[postgres] dropdb dbname`


## Strapi

* [tutorial](https://blog.strapi.io/cooking-a-deliveroo-clone-with-nuxt-vue-js-graphql-strapi-and-stripe-setup-part-1-7/)

* install `$ npm i strapi@alpha -g`
* new project `$strapi new projectName`
* start server: `$strapi start`

## CheatSheet

### Creation & edition

* `CREATE TABLE`: creates a new table.
* `INSERT INTO`: adds a new row to a table.
* `SELECT queries`: data from a table.
* `ALTER TABLE`: changes an existing table.
* `UPDATE edits`: a row in a table.
* `DELETE FROM`: deletes rows from a table.

### Query

* `SELECT` is the clause we use every time we want to query information from a database.
* `AS` renames a column or table.
* `DISTINCT` return unique values.
* `WHERE` is a popular command that lets you filter the results of the query based on conditions that you specify.
* `LIKE`:
  * `SELECT * FROM movies WHERE name LIKE 'Se_en';`: here `_` is a placeholder that replace a char
  * `SELECT * FROM movies WHERE name LIKE '%man%';`: equivalent of shell's `*`
* `BETWEEN`:
  * `SELECT * FROM movies WHERE name BETWEEN 'A' AND 'J';`: movies that starts with 'A' -> 'J' non included and non case sensitive
  * `SELECT * FROM movies WHERE year BETWEEN 1990 AND 1999;`: year >= 1990 and year <= 1999
* `AND` and `OR` combines multiple conditions.
* `ORDER BY` sorts the result.
* `LIMIT` specifies the maximum number of rows that the query will return.
* `CASE` creates different outputs.