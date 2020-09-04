---
title: Utils
date: 2018-08-29
author:  "Sol"
sidebar: auto
project: false
---


## Postgres

### Install

* `sudo apt-get install postgresql postgresql-contrib`

**To allow password connection**, inside `/etc/postgresql/<version>/main/pg_hba.conf`, on the line:
```
local   all             postgres                                peer
```
replace `peer` by `md5`.

### Use

As the default configuration of Postgres is, a user called Postgres is made on, and the user Postgres has full super admin access to entire PostgreSQL instance running on your OS.

#### psql shell

* **start**: `$ sudo -u postgres psql`
* **Connect to PostgreSQL database**: `psql -d database -U  user -W`
* **exit**: `quit` or `\q`

#### Basic

* **create db**: `CREATE DATABASE mydb;`
* **create user**: `CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypass';`
* **granting permission**: `GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;`

Usual settings:
```sql
 ALTER ROLE myuser SET client_encoding TO 'utf8';
 ALTER ROLE myuser SET default_transaction_isolation TO 'read committed';
 ALTER ROLE myuser SET timezone TO 'UTC';
 ```

 #### Commands

 * **backup database:** `pg_dump -U <user> -W -F t <db_name> > path/dump_name.<extension>`
   * `-U` to specify which user will connect to the PostgreSQL database server.
   * `-W` or --password will force pg_dump to prompt for a password before connecting to the server.
   * `-F` is used to specify the format of the output file, which can be one of the following:
     * `p` – plain-text SQL script
     * `c` – custom-format archive
     * `d` – directory-format archive
     * `t` – tar-format archive

 Inside psql:
 * **list databases:** `\l` & `\l+`
 * **remove database:** `DROP DATABASE [IF EXISTS] dbname`
 * **remove database with actives connections:**
```sql
SELECT pg_terminate_backend (pid)
FROM	pg_stat_activity
WHERE	pg_stat_activity.datname = '<database_name>';
```

To use psql commands from the terminal use the `-c` flag:
* `$ psql -U posgres -c "CREATE DATABASE dbname"`

### Django

* `sudo apt-get install libpq-dev python3-dev`
* `pip install psycopg2-binary`

<Container type="info">

Psycopg is a PostgreSQL adapter for the Python programming language. It is a wrapper for the libpq, the official PostgreSQL client library.

</Container>

#### Integrate
In settings.py:
```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': 'mypass',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```







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