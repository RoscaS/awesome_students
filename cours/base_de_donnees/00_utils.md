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


### Relation issue

* [discussion](https://github.com/strapi/strapi/issues/2396)
* [fix](https://github.com/strapi/strapi/pull/2687/commits/8e2169f005d075d3c046a1af67091b541240261a)

### Binding issue

* [discussion](https://stackoverflow.com/questions/54357814/undefined-bindings-detected-when-compiling-select-query)
* [fix ?](https://github.com/strapi/strapi/pull/2687) 