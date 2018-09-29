---
title: Setup (Apache, MySql)
date: 2018-09-29
sidebar: auto
author: "Sol"
---

## Arch

### Apache
* `sudo pacman -S php apache php-apache`
* [Instructions](https://wiki.archlinux.org/index.php/Apache_HTTP_Server)

### Usage
* session: `systemctl start httpd`
* perma: `systemctl enable httpd`
* restart: `sudo systemctl restart httpd.service`


### MariaDB ($\approx$ MySql)
>wiki.archlinux.org: [MariaDB](https://mariadb.com/) is now officially Arch Linux's default implementation of MySQL. It is recommended for all users to upgrade to MariaDB. Oracle MySQL was dropped to the AUR. See the [announcement](https://www.archlinux.org/news/mariadb-replaces-mysql-in-repositories/). 

* `sudo pacman -S mariadb`
* [Instructions](https://wiki.archlinux.org/index.php/MySQL)

### Usage
* session: `systemctl start mysqld`
* perma: `systemctl enable mysqld`
* setup: `mysql_secure_installation`