# JEE

## Test
* jusque maven (ch4) maven pas trop, juste les grandes lignes

>In a distributed application, different pieces of the app are called “services”.

>Services are really just “containers in production.”

<br>
<br>
<br>

## Tests
* 11 decembre 2019 (jusque Maven (ch4), maven pas trop, juste les grandes lignes)




<Media
    src="https://i.imgur.com/ufQbQhF.png"
    caption="https://fr.wikipedia.org/wiki/Architecture_orient%C3%A9e_%C3%A9v%C3%A9nements"
/>



<Posts/>

## Install

### Tomcat
* [install](https://www.liquidweb.com/kb/how-to-install-apache-tomcat-9-on-ubuntu-18-04/)
* folder: **/opt/tomcat/apache-tomcat-9.0.8**
* server setings: **/opt/tomcat/apache-tomcat-9.0.8/conf/server.xml**
* `systemctl start tomcat`: start
* `systemctl status tomcat`: status
  * if ok, runs on [http://localhost:8088](http://localhost:8088)

* [Intellij](https://www.jetbrains.com/help/idea/deploying-a-web-app-into-an-app-server-container.html)

<Container type="info">

if:
>Job for tomcat.service failed because the control process exited with error code. See "systemctl status tomcat.service" and "journalctl -xe" for details.

* `$ sudo chown -R /opt/tomcat`


</Container>

### Intellij

* File > new > project
  * Java > Web Application
* right click on `index.jsp` > `create index.jsp...` (tomcat)


## Architectures

* Réparties
* Distribuées
* Centralisées

### Couplage

* couplage fort -> synchrone
* couplage faible -> async

