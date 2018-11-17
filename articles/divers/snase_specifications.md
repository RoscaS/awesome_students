---
title: "SNASE: Spécifications détaillées (fr)"
date: 2018-11-16
author:  Sol
sidebar: auto
project: false
---

<br><br>

## Utilisateur

### Arrivée sur la page d'acceuil
Sur le modèle du [site de la section du tessin](http://www.ergoterapia.ch/)

<Container type="danger">

* Précisions requises concernant le contenu de la page d'acceuil.

</Container>

* En tant que visiteur:
    * **Je veux:**
        * Arriver sur la page d'acceuil quand j'entre l'adresse du site.
    * **Pour:**
        * Consulter les Pages du site réparties dans des Sections
        * Accéder à la fonction de [recherche](#recherche)
* En tant que membre:
    * **Je veux:**
        * Arriver sur la page d'acceuil quand j'entre l'adresse du site.
    * **Pour:**
        * Avoir accès aux différentes fonctionnalités qui concerne mon type de compte.
        * Consulter les Pages du site réparties dans des Sections
        * Accéder à la fonction de [recherche](#recherche)

<br><br>

## Super Admin

### Super Admin crée utilisateur Admin
* En tant que Super Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Admins, cliquer sur le bouton `ajouter nouvel admin` et remplir un formulaire
    * **Pour:**
        * Créér un utilisateur Admin
* Contraintes:
    * L'Admin est créé dans la base de données
    * Seul Super Admin peut créér un utilisateur Admin.

<br><br>

## Admin

### Admin crée un Groupe
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des <Def def="Association d'Ergothérapeutes">Groupes</Def>, cliquer sur le bouton `nouveau groupe` et remplir un formulaire.
    * **Pour:**
        * Créér un Groupe
* Contraintes:
    * Le groupe est créé dans la base de donneées.
    * Seul Admin peut créér un nouveau Groupe.


### Admin crée un utilisateur Ergothérapeute
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Ergothérapeutes, cliquer sur le bouton `nouveau groupe` et remplir un formulaire.
    * **Pour:**
        * Créér un utilisateur Ergothérapeute
* Contraintes:
    * L'Ergothérapeute est créé dans la base de donneées.
    * Seul Admin peut créér un utilisateur Ergothérapeute.


### Admin crée un Subscriber
Un Subscriber est un professionnel qui n'est pas forcément un ergothérapeute. Entité nécessaire dans le contexte des MailingLists.

* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Subscriber, cliquer sur le bouton `nouveau Subscriber` et remplir un formulaire.
    * **Pour:**
        * Créér un utilisateur Subscriber.
* Contraintes:
    * Le Subscriber est créé dans la base de donneées.
    * Seul Admin peut créér un utilisateur Subscriber.


### Admin ajoute Ergothérapeute à un Groupe
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion d'un Groupe spécifique, ouvrir le menu déroulant `Ajouter membre` et selectionner dans la liste de suggestions un Ergothérapeute.
    * **Pour:**
        * Ajouter l'Ergothérapeute selectionné et l'ajouter au Groupe concerné.
* Contraintes:
    * Confirmation de l'Ergothérapeute ajouté requise


### Admin retire Ergothérapeute d'un Groupe
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion d'un Groupe spécifique, sélectionner un Ergothérapeute membre de ce groupe et cliquer sur le bouton `retirer du groupe`.
    * **Pour:**
        * Retirer l'Ergothérapeute du Groupe concerné.
* Contraintes:
    * L'Ergothérapeute retiré du Groupe est retourné en résultat de recherche


### Admin assigne un modérateur à un Groupe
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion d'un Groupe spécifique, ouvrir le menu déroulant `Ajouter modérateur` et y selectionner un des Ergothérapeute du Groupe.
    * **Pour:**
        * Assigner le modérateur du Groupe.
* Contraintes:
    * Seul Admin peut assigner/valider le modérateur d'un Groupe
    * Confirmation de de l'Ergothérapeute concerné requise


### Admin réassigne le modérateur d'un Groupe
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion d'un Groupe spécifique, ouvrir le menu déroulant `Changer modérateur` et y selectionner un des Ergothérapeute du Groupe.
    * **Pour:**
        * Réassigner le modérateur du Groupe.
* Contraintes:
    * Seul Admin peut Réassigner/valider le modérateur d'un Groupe
    * Confirmation de de l'Ergothérapeute concerné requise

<br><br>

## Modérateurs

### Modérateur gère les informations de son Groupe
* En tant que Modérateur
    * **Je veux:**
        * Avoir accès à la page de gestion de mon Groupe et:
            * Éditer les champs d'informations concernant mon Groupe.
            * Passer mon role de modérateur du Groupe à un autre Ergothérapeute du même Groupe.
    * **Pour:**
        * Mettre à jour les informations de mon Groupe
* Contraintes:
    * Dialogue de confirmation des changements validé


### Modérateur passe ses droits de modération
* En tant que Modérateur
    * **Je veux:**
        * Avoir accès à la page de gestion de mon Groupe, ouvrir le menu déroulant `Changer modérateur` et y selectionner un des Ergothérapeute du Groupe.
    * **Pour:**
        * Réassigner le modérateur de mon Groupe.
* Contraintes:
    * Dialogue de confirmation du changement validé
    * Confirmation de de l'Ergothérapeute concerné requise
    * Confirmation de de l'Admin requise


### Modérateur ajoute Ergothérapeute à son Groupe
* En tant que Modérateur
    * **Je veux:**
        * Avoir accès à la page de gestion de mon Groupe, ouvrir le menu déroulant `Membres en attente` et selectionner dans la liste de suggestions un Ergothérapeute.
    * **Pour:**
        * Ajouter l'Ergothérapeute selectionné à mon Groupe
* Contraintes:
    * Confirmation de l'Ergothérapeute ajouté requise
    

### Modérateur retire Ergothérapeute d'un Groupe
* En tant que Modérateur
    * **Je veux:**
         * Avoir accès à la page de gestion de mon Groupe, sélectionner un Ergothérapeute membre de mon groupe et cliquer sur le bouton `retirer du groupe`.
    * **Pour:**
        * Retirer l'Ergothérapeute de mon Groupe.
* Contraintes:
    * L'Ergothérapeute concerné est notifié de son retrait du Groupe.
    * L'Ergothérapeute retiré du Groupe est retourné en résultat de recherche.

<br><br>

## Ergothérapeutes

### Ergothérapeute s'inscrit sur le site
* En tant qu'érgothérapeute (de profession) parcourant le site:
    * **Je veux:**
        * Avoir accès à la page d'inscription et y remplire de formulaire d'inscription en tant que Ergothérapeute.
    * **Pour:**
        * Créér un nouveau compte Ergothérapeute.
* Contraintes:
    * Si l'utilisateur choisi un Groupe dans le menu déroulant `Groupe` une confirmation du Modérateur du Groupe spécifié est requise avant son ajout au Groupe.
    * Si l'utilisateur choisi un Groupe dans le menu déroulant `Groupe` et qu'il en est le seul membre il devient automatiquement Modérateur de ce Groupe.
    * L'érgothérapeute est ajouté à la base de données.

### Admin valide l'inscription d'Ergothérapeute
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Ergothérapeutes, ouvrir le menu `En attente de confirmation` et cliquer sur le nom d'un Ergothérapeute en attente de confirmation.
    * **Pour:**
        * Valider l'inscription de l'Ergothérapeute.
* Contraintes:
    * Si l'Ergothérapeute ne fait pas partie d'un Groupe, il est retourné en resultat de recherche


### Ergothérapeute fait une demande d'adhésion à un Groupe
* En tant qu'Ergothérapeute sans Groupe
    * **Je veux:**
        * Avoir accès à ma page de gestion personnelle, ouvrir le menu déroulant `Adhésion à un groupe` et y selectionner un des Groupes présent
    * **Pour:**
        * Envoyer une demande d'adhésion au Modérateur du Groupe concerné.
* Contraintes:
    * Confirmation du modérateur du Groupe concerné requise.


### Modérateur valide l'adhésion d'un Ergothérapeute à son Groupe
* En tant que Modérateur d'un Groupe
    * **Je veux:**
        * Avoir accès à la page de gestion de mon Groupe, ouvrir le menu `En attente de confirmation` et cliquer sur le nom d'un Ergothérapeute en attente de confirmation pour l'adhésion au Groupe.
    * **Pour:**
        * Valider l'adhésion de l'Ergothérapeute au Groupe.
* Contraintes:
    * Le Groupe de l'Ergothérapeute est retourné en résultat d'une recherche contenant le nom de l'Ergothérapeute


### Ergothérapeute accèpte une invitation à un Groupe
* En tant qu'Ergothérapeute sans Groupe
    * **Je veux:**
        * Avoir accès à ma page de gestion personnelle, ouvrir le menu `Invitations en attente` et y selectionner une éventuelle invitation à un Groupe
    * **Pour:**
        * Valider l'invitation
* Contraintes:
    * Le Groupe de l'Ergothérapeute est retourné en résultat d'une recherche contenant le nom de l'Ergothérapeute


### Ergothérapeute quite un Groupe
* En tant qu'Ergothérapeute membre d'un Groupe
    * **Je veux:**
        * Avoir accès à ma page de gestion personnelle, ouvrir le menu `Groupe` et cliquer sur le bouton `quiter groupe`
    * **Pour:**
        * Être retiré de mon Groupe
* Contraintes:
    * Dialogue de confirmation validé
    * L'Ergothérapeute est retourné en résultat de recherche
    * Notification envoyée au modérateur du Groupe

<br><br>

## MailingList

### Admin crée MailingList
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des MailingLists, cliquer sur le bouton `Nouvelle liste` et remplir le formulaire.
    * **Pour:**
        * Créér une nouvelle MailingList
* Contraintes:
    * La MailingList est crée dans la base de données
    * Seul Admin peut créér une MailingList

### Admin manage une MailingList
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion d'une MailingList spécifique, cliquer sur le bouton `Modifier` et éditer les champs de la MailingList.
    * **Pour:**
        * Modifier les champs de la MailingList
* Contraintes:
    * Les champs sont modifiés dans la base de donnée

### Admin inscrit un Subscriber/Ergothérapeute/Groupe à une MailingList
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion d'une MailingList spécifique, cliquer sur le bouton `Ajouter à la MailingList` et remplir le formulaire.
    * **Pour:**
        * Créér un nouveau Subscriber pour cette MailingList
* Contraintes:
    * Le Subscriber est ajouté à la base de données
    * Seul Admin peut créér un nouveau Subscriber

<br><br>

## Newsletter

### Admin compose une Newsletter

<Container type="danger">

Précisions requises

</Container>


### Admin envoie une Newsletter

<Container type="danger">

Précisions requises

</Container>

<br><br>

## Zones géographiques

### Admin crée Zone
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Zones géographiques, cliquer sur le bouton `Nouvelle zone` et remplir le formulaire.
    * **Pour:**
        * Créér une nouvelle Zone
* Contraintes:
    * La Zone est ajoutée à la base de données
    * Seul Admin peut créér une Zone géographique

### Admin manage Zone
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Zones géographiques, cliquer sur le bouton `Modifier zone` et éditer les champs de la Zone.
    * **Pour:**
        * Modifier les champs de la Zone
* Contraintes:
    * Les champs sont modifiés dans la base de donnée
    * Seul Admin peut modifier une Zone géographique

<br><br>

## Pages "Statiques"

### Admin crée section
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Sections du site, cliquer sur le bouton `Nouvelle section` et remplir le formulaire.
    * **Pour:**
        * Créér une nouvelle Section
* Contraintes:
    * La Section est ajoutée à la base de données
    * Seul Admin peut créér une Section

### Admin manage Section
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Sections, y choisir une Section et cliquer sur `Modifier section`.
    * **Pour:**
        * Modifier les champs de la Section
* Contraintes:
    * Dialogue de confirmation des changements validé
    * Les champs sont modifiés dans la base de donnée
    * Seul Admin peut modifier une Section

### Admin supprime Section
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Sections, y choisir une Section et cliquer sur `Supprimer section`.
    * **Pour:**
        * Supprimer une Section
* Contraintes:
    * Si la Section contient des Pages, les Pages sont automatiquement relocalisées dans une Section spéciale ne s'affichant pas sur le site
    * Dialogue de confirmation des changements validé
    * La Section est supprimée de la base de données
    * Seul Admin peut supprimer une Section

### Admin crée Page
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Sections, y choisir une Section et cliquer sur le bouton `Nouvelle Page` et remplir le formulaire.
    * **Pour:**
        * Créér une nouvelle Page liée à une Section
* Contraintes:
    * La Page est ajoutée à la base de données
    * Si c'est la première page d'une Section, la Section s'affiche dans la barre de navigation du site et affiche un liens vers la nouvelle Page
    * Un lien vers la Page apparait dans la Section appropriée dans la barre de navigation du site
    * Seul Admin peut créér une Page

### Admin manage Page
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Sections, y choisir une Section et cliquer sur `Modifier Page` de la Page concernée.
    * **Pour:**
        * Modifier les champs de la Page
* Contraintes:
    * Dialogue de confirmation des changements validé
    * Les champs sont modifiés dans la base de donnée
    * Seul Admin peut modifier une Page

### Admin supprime Page
* En tant qu'Admin
    * **Je veux:**
        * Avoir accès à la page de gestion des Sections, y choisir une Section et cliquer sur `Supprimer Page` de la Page concernée.
    * **Pour:**
        * Supprimer une Page
* Contraintes:
    * Dialogue de confirmation de la suppression validé* 
    * La Page est supprimée à la base de données
    * Si c'est l'unique page d'une Section, la Section ne s'affiche plus dans la barre de navigation du site
    * Seul Admin peut supprimer une Page

<br><br>

## Recherche

### Recherche d'Ergothérapeute/Groupe
* En tant que utilisateur du site:
    * **Je veux:**
        * Trouver un Ergothérapeute spécialisé en un domaine particulier en recherchant par critère (nom, zone géographique, spécialisation, ambulatoire(ou pas))
    * **Pour:**
        * Avoir un résultat cohérent avec ma recheche
* Contraintes:
    * Un Ergothérapeute appartenant à un Groupe est retourné en résultat de recherche dans la carte de son Groupe.
    * Un Ergothérapeute n'appartenant pas à un Groupe est retourné en résultat de recherche dans sa propre carte.