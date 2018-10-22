---
title: Modélisation
date: 2018-10-22
author: Sol
sidebar: auto
---

## Tests plantuml

### test 1

@startuml

start
:ClickServlet.handleRequest();
:new page;
if (Page.onSecurityCheck) then (true)
  :Page.onInit();
  if (isForward?) then (no)
	:Process controls;
	if (continue processing?) then (no)
	  stop
	endif
	
	if (isPost?) then (yes)
	  :Page.onPost();
	else (no)
	  :Page.onGet();
	endif
	:Page.onRender();
  endif
else (false)
endif

if (do redirect?) then (yes)
  :redirect process;
else
  if (do forward?) then (yes)
	:Forward request;
  else (no)
	:Render page template;
  endif
endif

stop

@enduml

### test 2

@startuml
' uncomment the line below if you're using computer with a retina display
' skinparam dpi 300
!define Table(name,desc) class name as "desc" << (T,#FFAAAA) >>
' we use bold for primary key
' green color for unique
' and underscore for not_null
!define primary_key(x) <b>x</b>
!define unique(x) <color:green>x</color>
!define not_null(x) <u>x</u>
' other tags available:
' <i></i>
' <back:COLOR></color>, where color is a color name or html color code
' (#FFAACC)
' see: http://plantuml.com/classes.html#More
hide methods
hide stereotypes

' entities

Table(user, "user\n(User in our system)") {
primary_key(id) INTEGER
not_null(unique(username)) VARCHAR[32]
not_null(password) VARCHAR[64]
}

Table(session, "session\n(session for user)") {
primary_key(id) INTEGER
not_null(user_id) INTEGER
not_null(unique(session_id) VARCHAR[64]
}

Table(user_profile, "user_profile\n(Some info of user)") {
primary_key(user_id) INTEGER
age SMALLINT
gender SMALLINT
birthday DATETIME
}

Table(group, "group\n(group of users)") {
primary_key(id) INTEGER
not_null(name) VARCHAR[32]
}

Table(user_group, "user_group\n(relationship of user and group)") {
primary_key(user_id) INTEGER
primary_key(group_id) INTEGER
joined_at DATETIME
}

' relationships
' one-to-one relationship
user -- user_profile : "A user only \nhas one profile"
' one to may relationship
user --> session : "A user may have\n many sessions"
' many to many relationship
' Add mark if you like
user "1" --> "*" user_group : "A user may be \nin many groups"
group "1" --> "0..N" user_group : "A group may \ncontain many users"
@enduml



## Diagrammes entité-association

### Entités
* Entité: une chose, un objet
* **Ensemble d'entité**
    * Collection d'objets similaires (~classe d'objets)
    * Représenté par un rectangle
* **Attribut**: Propriété des éléments de l'ensemble
    * Représenté par un ovale lié par une ligne
    * sont des valeurs simples 

* **Ensemble d'entités: associations**

### Attributs
* Une entité est définie par un ensemble d'attributs
* Chaque attribut a une valeur
  

### Role
* Etiquette sur la ligne 
* Choix multiple

### Identifiants
* Aussi appelé **clé**
* souligné

<Container type="warning">

Dans une hiérarchie (isa), seule la racine définit l'identifiant

</Container>


## Modélisation

* **Type d'entités**: noms communs
    * Les entités sont des objets, des choses

* **Entités**: noms propres
* **Type d'associations**: verbes transitifs
    * Les associations sont des liaisons entre les choses
* **Attribut d'entité**: adjectifs (verte, grande, petite, ...)
* **Attribut d'associations**: adverbes (prudement, rapidement, ...)


### Exemple
* Dans l'entreprise **Duroc**, chaque **employé** _travaille_ dans exactement un **département**.
* Il n'y a pas de restriction par rapport au nombre de personnes qu'un département peut employer.


### Contraintes
* Identifiants
* Cardinalité des associations
* Clés étrangeères (FK)
* Intervalles de domaine (ex. jours du mois)
* Cardinalité des attributs
* Contraintes particulières de l'applicaiton
    * _On les ajoute à la main, (cas de merde)_

### Techniques de conception
* Éviter la redondance
    * Représenter la même information plusieurs fois
    * Gaspillage
    * donner de la marge à l'incohérence
        * Changer une copie sans changer l'autre
    * Limiter l'utilisation d'entités faibles
    * Ne pas utiliser un ensemble d'entités quand un attribut suffisant
