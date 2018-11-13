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

#### Usage
* session: `systemctl start httpd`
* perma: `systemctl enable httpd`
* restart: `sudo systemctl restart httpd.service`


### MariaDB ($\approx$ MySql)
>wiki.archlinux.org: [MariaDB](https://mariadb.com/) is now officially Arch Linux's default implementation of MySQL. It is recommended for all users to upgrade to MariaDB. Oracle MySQL was dropped to the AUR. See the [announcement](https://www.archlinux.org/news/mariadb-replaces-mysql-in-repositories/). 

* `sudo pacman -S mariadb`
* [Instructions](https://wiki.archlinux.org/index.php/MySQL)

#### Init
* session: `systemctl start mysqld`
* perma: `systemctl enable mysqld`
* setup: `mysql_secure_installation`

#### Usage
* Import DB from file: `mysql < mysql-creation -u root -p`
* Start MQSQL prompt: `mysql -u root -p`
    * `USE simple`

```
CREATE TABLE Tasks (id INTEGER, description VARCHAR(1024), completed BIT, deadline VARCHAR(100));



INSERT INTO Tasks(id, description, completed, deadline) VALUES (1, 'Study for the next control', 0, '08-12-2018');
INSERT INTO Tasks(id, description, completed, deadline) VALUES (1, 'Costume for Halloween', 1, '31-10-2018');
INSERT INTO Tasks(id, description, completed, deadline) VALUES (1, 'Do not forget to sleep', 0, '08-12-2018');
```

### xDebug
* `pacman -S xdebug`
* in `/etc/php/conf.d/xdebug.ini` uncomment:

```
;zend_extension=xdebug
;xdebug.remote_enable=on
;xdebug.remote_host=127.0.0.1
;xdebug.remote_port=9000
;xdebug.remote_handler=dbgp
```

* `systemctl restart httpd`

### JetBrain LiveEdit

* [in phpstorm](https://confluence.jetbrains.com/display/PhpStorm/Live+Edit+in+PhpStorm)

#### Disable the debbuging ribbon on chrome

* [nice neat and easy](https://www.gamefromscratch.com/post/2014/07/13/Permanently-turning-off-the-Chrome-debugging-message.aspx)