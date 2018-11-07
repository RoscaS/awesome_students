---
title: CRUD CheatSheet
date: 2018-09-01
author: Sol
sidebar: auto
---

## Jargon

* Base de données: Contient de l'information (des données)
* Querying: Lire de l'information dans une DB
* CRUD: (Create, Read, Update, Delete)
* SQL (Structured Query Language): **Langage** qui permet de communiquer avec les BD
* DML (Data Manipulation Language): Sous ensemble du langage SQL qui gère les oppérations CRUD
* ORM: Abstraction des opérations CRUD qui permet d'utiliser ces dernières dans un autre language qu'SQL

## SQL

> Peut se pronnoncer SQL ou "Cquel"

De nombreux **types** de BD utilisent utilisent le langage SQL:
* MySQL
* PostgreSQL
* Microsoft SQL ($\neq$ MS Acces)
* Oracle
* SQLite

Ces BD peuvent donc être lues (Query) en via le langage SQL.

## CRUD SQL Syntax

### 1.Read (Query)

#### Retourner toutes les colones et lignes `*`

```sql
SELECT * FROM <table name>;
```

* `*` veut dire **toutes les colones**
* `;` termine une déclaration

```SQL
SELECT * FROM books;
SELECT * FROM products;
SELECT * FROM users;
SELECT * FROM countries;
```

#### Retourner des colones spécifiques

##### Une colone
```
SELECT <column name> FROM <table name>;
```

```sql
SELECT email FROM users;
SELECT first_name FROM users;
SELECT name FROM products;
SELECT zip_code FROM addresses;
```

##### Plusieurs colones

```
SELECT <column name 1>, <column name 2>, ... FROM <table name>;
```

```sql
SELECT first_name, last_name FROM customers;
SELECT name, description, price FROM products;
SELECT title, author, isbn, year_released FROM books;
SELECT name, species, legs FROM pets;
```

#### Aliasing 

```
SELECT <column name> AS <alias> FROM <table name>;
SELECT <column name> <alias> FROM <table name>;
```

```sql
SELECT username AS Username, first_name AS "First Name" FROM users;
SELECT title AS Title, year AS "Year Released" FROM movies;
SELECT name AS Name, description AS Description, price AS "Current Price" FROM products;
SELECT name Name, description Description, price "Current Price" FROM products;
```

Les `""` sont spécifiques à certaines bases de données. Dans certains cas on peut avoir des `''` ou des `[]` ...
De plus, il ne sont nécéssaires que si notre alias est composé de plusieurs mots.

#### Comparaisons

```
SELECT <columns> FROM <table> WHERE <condition>;
```

##### Egalité `=`

```
SELECT <columns> FROM <table> WHERE <column name> = <value>;
```

```sql
SELECT * FROM contacts WHERE first_name = "Andrew";
SELECT first_name, email FROM users WHERE last_name = "Chalkley";
SELECT name AS "Product Name" FROM products WHERE stock_count = 0;
SELECT title "Book Title" FROM books WHERE year_published = 1999;
```

##### Inégalité `!=` ou `<>`

Note: l'opérateur `<>` n'est pas commun.

```
SELECT <columns> FROM <table> WHERE <column name> != <value>;
SELECT <columns> FROM <table> WHERE <column name> <> <value>;
```

```sql
SELECT * FROM contacts WHERE first_name != "Kenneth";
SELECT first_name, email FROM users WHERE last_name <> "Smith";
SELECT name AS "Product Name" FROM products WHERE stock_count != 0;
SELECT title "Book Title" FROM books WHERE year_published != 2015;
```

##### Opérateurs relationnels `<`, `<=`, `>`, `>=`

Principalement utilisés pour comparer des dates/heures ou des valeurs numériques

```
SELECT <columns> FROM <table> WHERE <column name> < <value>;
SELECT <columns> FROM <table> WHERE <column name> <= <value>;
SELECT <columns> FROM <table> WHERE <column name> > <value>;
SELECT <columns> FROM <table> WHERE <column name> >= <value>;
```

```sql
SELECT first_name, last_name FROM users WHERE date_of_birth < '1998-12-01';
SELECT title AS "Book Title", author AS Author FROM books WHERE year_released <= 2015;
SELECT name, description FROM products WHERE price > 9.99;
SELECT title FROM movies WHERE release_year >= 2000;
```

#### Plusieurs conditions

```
SELECT <columns> FROM <table> WHERE <condition 1> AND <condition 2> ...;
SELECT <columns> FROM <table> WHERE <condition 1> OR <condition 2> ...;
```

```sql
SELECT username FROM users WHERE last_name = "Chalkley" AND first_name = "Andrew";
SELECT * FROM products WHERE category = "Games Consoles" AND price < 400;
SELECT * FROM movies WHERE title = "The Matrix" OR title = "The Matrix Reloaded" OR title = "The Matrix Revolutions";
SELECT country FROM countries WHERE population < 1000000 OR population > 100000000;
```

#### Recherche dans un set de valeurs `IN` et `NOT IN`

```
SELECT <columns> FROM <table> WHERE <column> IN (<value1>, <value2>, ...);
SELECT <columns> FROM <table> WHERE <column>  NOT IN (<value 1>, <value 2>, ...);
```

```sql
SELECT name FROM islands WHERE id IN (4, 8, 15, 16, 23, 42);
SELECT * FROM products WHERE category IN ("eBooks", "Books", "Comics");
SELECT title FROM courses WHERE topic IN ("JavaScript", "Databases", "CSS");
SELECT * FROM campaigns WHERE medium IN ("email", "blog", "ppc");

SELECT answer FROM answers WHERE id IN (7, 42);
SELECT * FROM products WHERE category NOT IN ("Electronics");
SELECT title FROM courses WHERE topic NOT IN ("SQL", "NoSQL");
```

#### Recherche dans une plage de valeurs `BETWEEN`

```
SELECT <columns> FROM <table> WHERE <column> BETWEEN <lesser value> AND <greater value>;
```

```sql
SELECT * FROM movies WHERE release_year BETWEEN 2000 AND 2010
SELECT name, description FROM products WHERE price BETWEEN 9.99 AND 19.99;
SELECT name, appointment_date FROM appointments WHERE appointment_date BETWEEN "2015-01-01" AND "2015-01-07";
```

#### Pattern Matching `%` - `LIKE`
Dans une string précédée de `LIKE`, si on utilise le symbole `%`, il substitue un nombre indéfini de caractères (incluant 0).

```
SELECT <columns> FROM <table> WHERE <column> LIKE <pattern>;
```

```sql
SELECT title FROM books WHERE title LIKE "Alien%";
SELECT title FROM movies WHERE title LIKE "Harry Potter%Fire";
SELECT * FROM contacts WHERE first_name LIKE "%drew";
SELECT * FROM books WHERE title LIKE "%Brief History";
```

#### Valeurs absentes `IS NULL`

```
SELECT * FROM <table> WHERE <column> IS NULL;
```

```SQL
SELECT * FROM people WHERE last_name IS NULL;
SELECT * FROM dvd_rentals WHERE returned_on IS NULL;
SELECT * FROM car_rentals WHERE returned_on IS NULL and location = "Nivelles";
```

Pour filtrer les valeurs absentes on utilise `IS NOT NULL`:

```
SELECT * FROM <table> WHERE <column> IS NOT NULL;
```

```sql
SELECT * FROM people WHERE email IS NOT NULL;
SELECT * FROM addresses WHERE zip_code IS NOT NULL;
```

#### Join tables

Query deux tables à la fois et retourner des valeurs des deux: 

```
SELECT * FROM <table 1>, <table 2>
    WHERE <table 1>.<table 1 column> = <table 2>.<table 2 column>;
```

```sql
SELECT * FROM loans, books
    WHERE loans.book_id = books.id;
```

#### Fonctions

> <span style="color:red"> Specific to SQLite? </span> 

Fonction | Retoune 
---------|----------
 `AVG()` | moyenne d'une colonne | 
 `COUNT()` | nombre d'enregistrements d'une colonne | 
 `MAX()` | valeur la plus haute d'une colonne | 
 `MIN()` | valeur la plus petite d'une colonne | 
 `SUM()` | somme des valeurs d'une colonne | 

```
SELECT <function>(<column>) FROM <table>;
```

```sql
SELECT avg(age) FROM population;
SELECT max(age) FROM population;
SELECT min(age) FROM population;
SELECT sum(age) FROM population;
SELECT count(city) FROM population;
```

---

### 2. Create (Création de ligne(s))

#### Ajouter des Lignes à une table

Table `users`: colones: `id`, `first_name`, `last_name`, `username`

##### Ajouter **une** Ligne à une table

```
INSERT INTO <table> VALUE (<value1>, <value2>, ...);
```
Cela va ajouter les valeurs dans l'ordre des colonnes de la table. 

```sql
INSERT INTO users VALUES (1, "Rosca", "Sol", "Roscas");
```

##### Ajouter **une** Ligne avec les valeurs dans n'importe quel ordre dans une table

```
INSERT INTO <table> (<column 1>, <column 2>) VALUES (<value 1>, <value2>);
INSERT INTO <table> (<column 2>, <column 1>) VALUES (<value 2>, <value 1>);
```

```sql
INSERT INTO users (username, first_name, last_name) VALUES ("Roscas", "Rosca", "Sol");
```

##### Ajouter **plusieurs** Lignes à une table

```
INSERT INTO <table> (<column 1>, <column 2>, ...)
    VALUES
                    (<value 1>, <value 2>, ...),
                    (<value 1>, <value 2>, ...),
                    (<value 1>, <value 2>, ...);
```

```sql
INSERT INTO users (username, first_name, last_name)
    VALUES
                    ("LeTerrible", "Redoute", "Maxime"),
                    ("Shtefouille", "Furrer", "Stephanie");
```

---

### 3. Update
#### MAJ de toute une colonne

Toutes les valeurs pour une certaine colone se voient attribuées une valeur spécifique.

```
UPDATE <table> SET <column> = <value>;
```

**Ici, le signe `=` est une assignation**

```sql
UPDATE books SET eta = "missing";
UPDATE products SET price = 2.99;
```

#### MAJ d'une colone de certaines Lignes

```
UPDATE <table> SET <column> = <value> WHERE <condition>;
```

```sql
UPDATE users SET username = "Predat0r" WHERE id = 3;
UPDATE books set title = "3mm4" where title = "Emma";
```

#### MAJ de plusieurs colones de certaines lignes

```
UPDATE <table> SET <column 1> = <value 1>, <column 2> = <value 2> WHERE <condition>;
```

```sql
UPDATE users SET city = "Nivelles", num = 51 WHERE id = 329;
UPDATE products SET eta = "SOLD OUT", availability = "In 1 Week" WHERE stock = 0; 
```

---

### 4. Delete

#### Supression toutes les données d'une table
Supprime tous les enregistrements d'une table (La table ainsi que les headers existent toujours)

```
DELETE FROM <table>;
```

```sql
DELETE FROM users;
```

#### Supression de lignes spécifiques

```
DELETE FROM <table> WHERE <condition>;
```

```sql
DELETE FROM users WHERE email = "sol.rosca@poule.com";
DELETE FROM products WHERE sotck = 0;
```

#### Supression d'une table

```
DROP TABLE <table>
```

```sql
DROP TABLE orders
```

---

### 5. Transactions

#### Définitions
 
* autocommit: Chaque déclaration est appliquée sur les données
* Seeding: Population d'une base base de donnée pour la première fois
* Script: Par opposition à entrer des commandes les unes après les autres dans un terminal

#### Commandes

* `BEGIN TRANSACTION;`: Switch autocommit off and begin transaction
* `BEGIN;`: Equivalent au précédent
* `COMMIT;`: Appliquer les déclarations de la transaction aux données et switch autocommit on
* `ROLLBACK;`: Reset la base de données à son état précédant la transaction