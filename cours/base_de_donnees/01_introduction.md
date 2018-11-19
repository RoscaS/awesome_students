---
title: Introduction
date: 2018-09-28
sidebar: auto
author: "Sol"
---

## Docker

* [jetbrain docker tool](https://www.jetbrains.com/help/idea/running-a-dbms-image.html)



# BDD

## Tools
* PostgresSQL
* Pgadmin
  
## TPs
* 19 novembre
* 17 décembre
* 14 janvier

# Cours1

## Interchangabilité
* Relation / table: Exactement la même chose.
* ligne / record / tuple (n-uplet)/ attribut: pareil


## Transaction
Série de commandes pour assurer que la totalités des commandes soient faites sans potentiel crash entre deux qui pourrait corompre le system.

## Cycle de vie d'une base de données

## 1. Modèle conceptuel (schéma conceptuel)

* Entity-Relationship (entité-association)
  
![Image](https://i.imgur.com/cyqlrIO.png)

## 2. Implementation des données (schéma logique)

* Traduction du schéma conceptuel en un shéma logique.

# Docker & Postgres on Arch

## Docker

* [info](https://linuxhint.com/arch-linux-docker-tutorial/)

* `pacman -S docker`
* `systemctl start docker.service` (session)
* `systemctl enable docker.service` (perma)
* `docker info`
* create instance: `docker run --name postgresSQL -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
* psql: `docker run -it --rm --link postgresSQL:postgres postgres psql -h postgres -U postgres`


* [install-tuto](https://hub.docker.com/_/postgres/)
* [psql-tuto](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm)

* `[sudo] docker exec -it postresJoe bash`: rentre dans le container
* `[sudo] docker exec -it containerName [ls -al]`: exemple de commande de l'extérieur
* `[sudo] docker cp poule.txt containerName:poule.txt`: transfère dehors -> dedans



## Série 1

### 1. Montrer les noms des fournisseurs qui n'ont pas de fax.

```SQL
select contactname from supplier where fax isnull;
```

### 2. Montrer les produits dont le prix est inférieur à 10.

```SQL
select productname from product where unitprice < 10;
```

### 3. Algèbre relationnelle
$OldCustomer := \theta_{id<20}(Customer)$

```SQL
select firstname as OldCustomer from customer where id < 20;
```

$Cities := \pi_{city}(OldCustomer)$

```SQL
select city as City from customer where id < 20;
```
```
 Berlin
 México D.F.
 México D.F.
 London
 Luleå
 Mannheim
 Strasbourg
 Madrid
 Marseille
 Tsawassen
 London
 Buenos Aires
 México D.F.
 Bern
 Sao Paulo
 London
 Aachen
 Nantes
 London
```

### 4. German supplier

$GermanSupplier := \theta_{country='Germany'}(Supplier)$

```SQL
select contactname as GermanSupplier from exe1.supplier where country = 'Germany';
```

$GermanContacts := \pi_{city, contactname}(GermanSupplier)$

```SQL
select city, contactname from exe1.supplier where country = 'Germany';
```

```
   city    |  contactname  
-----------+---------------
 Berlin    | Petra Winkler
 Frankfurt | Martin Bein
 Cuxhaven  | Sven Petersen
```

### 5. Like

Trouver les noms de fournisseurs, excepté ceux qui ont le préfixe (313) dans leur fax.

```SQL
select contactname from supplier where fax not like '%313%';
```