---
title: Introduction
date: 2018-09-28
sidebar: auto
author: "Sol"
---

# BDD

## Tools
* PostgresSQL
* Pgadmin
  
## Tests
* 5 novembre: écrit et théorique

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