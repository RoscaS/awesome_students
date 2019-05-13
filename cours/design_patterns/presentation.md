---
title: "Présentation: CoR & Facade"
date: 2019-05-13
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: false
hide: false
---

## Ordres de passage:

1. Nathan 1/2/3
2. Sol 4/5/6/7
3. Edwin 8/9/10
4. Nathan 11/12/13
5. Edwin 14/15
6. Nathan 16/17
7. Sol 18/19/20/21/22
8. Edwin 23/24

## Chaine of responsability

### Page 4: Mise en situation


<Media
    src="https://i.imgur.com/CZLtLlS.png"
    caption="La requête passe par une série de vérifications avant d'arriver au système de gestion des commandes"
    center="true"
/>

Imaginez que vous travaillez pour un modeste site de vente en ligne. 
Dans un premier temps on veut:
* **Système d'authentification** pour restreindre les commandes aux utlisateurs inscrits.
* **Système de permissions** pour donner le droit aux admin de consulter toutes les commandes.

Après un peu de réflexion, on résalise qu'on a besoin que ces vérifications soient faites de façon **séquentielle**.

L'application peut tenter d'authentifier un utilisateur à chaque fois qu'elle reçoit des identifiants **mais** il est inutile d'aller plus loin et de vérifier si l'utilisateur à les droits d'administrations **si ce premier test échoue**.

---

<br>

Dans les mois qui suivent, on implémente quelques autres tests:

Tout d'abbord, notre colègue Marc S nous a fait réaliser que la sécurité laisse peut être à désirer et que ce n'est peut être pas idéal d'envoyer les données d'identification sans les néttoyer au code qui gère l'authentification. On ajoute doncune nouvelle étape de validation qui **Sanitize** les données.

Après, Marc encore vient nous dire que le système est vulnérable au brute forcing. Pour mitiger ça il suffit de simplement ajouter un système de **Delay** qui empêche des requêtes multiples d'une même ip trop rapides.

Finalement c'est le père Pasin qu'on a entendu un jour hurler de loin qu'il en peut plus de retaper à chaque fois son mot de pass. EZ PZ, un **système de caching** devrait lui rendre le sourire.


<Media
    src="https://i.imgur.com/jzEVeKD.png"
    caption="Spaghtti time !"
/>

Le code initial n'était déjà pas très joli, mais à chaque feature ajoutée il devenait de moins en moins maintenanble:
* Faire une modification d'un coté impliquait de modifier du code dans plusieurs autres endroits
* Pire encore, un lundi matin en voulant protéger d'autres composants du site qui nécéssitait une partie des checks mis en place, on a réalisé qu'il était impossible de le faire sans faire d'énormes doublons code.
* Sans parler du temps fou à lire et relire le code pour retracer tous les appels.

Bref un jour, on décida de tout réfactor et la solution semblait évidente: "**Chain of responsability**".

## Solution

**Comme de nombreux autres designes pattern axés sur le comportement, COR transforme des comportements particuliers en objets "Stand-alone" appelés "Traitements" (Handlers).** 

Dans notre cas, chaque bloque devrait être extrais dans sa propre classe et exposer une méthode qui lance la vérification. La requête initiale devrait être passée à cette méthode en argument.

Ces **traitements**, tel une chaine, sont liés les uns aux autres et le flux s'éffectue de façon **séquentiel** Chaque traitement possède un champ qui référence le prochain traitement de la chaine.

Dans cette première variante du pattern, la requète se propage de traitement en traitement jusqu'à ce qu'un maillon décide de la refuser car elle ne remplit pas ses conditions ou qu'elle atteigne le bout de la chaine.

## Analogie monde réel

Dans la vrai vie du monde, quand on appelle un support technique, en fonction des informations qu'on donne on est aiguillé vers la personne qui peut nous aider... ou éventuellement dégagé à coup de "C'est pas à nous qu'il faut demander ça".