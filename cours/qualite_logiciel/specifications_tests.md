---
title: Specifiaction de tests
date: 2019-12-13
author: Sol
sidebar: auto
project: false
hide: false
---

## Mockup de spécifications de tests

| Test                                          | Connecté/Rôles | Façon                                                              | Résultat attendu                                                        | Valide |
| --------------------------------------------- | -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- | ------ |
| Affichage des ereurs pour formulaire invalide | Connecté       | Créer un poste vide et l'envoyer                                   | Un message nous indique que le titre et le contenu ne peuvent être vide | ?      |
| Affichage des ereurs pour formulaire invalide | Connecté       | Créer un commentaire vide et l'envoyer                             | Un message nous indique que le contenu ne peut être vide                | ?      |
| Affichage des ereurs pour formulaire invalide | Modérateur     | Créer un board vide et l'envoyer                                   | Un message nous indique que le nom et le contenu ne peuvent être vide   | ?      |
| Affichage des ereurs pour formulaire invalide | Non connecté   | Se connecter avec un jeu nom d'utilisateur - mot de passe invalide | Un message nous indique que nous avons entré un mauvais login           | ?      |
| Affichage des ereurs pour formulaire invalide | Non connecté   | Créer un compte avec un email déjà utilisé ou mal formaté          | Un message nous indique que l'email est déjà utilisé                    | ?      |
| Suppression d'un poste                        | Propriétaire   | Supprimer un poste dont nous sommes le propriétaire                | Le poste est bien supprimé                                              | ?      |
| Suppression d'un poste                        | Modérateur     | Supprimer un poste dont nous ne sommes pas le propriétaire         | Le poste est bien supprimé                                              | ?      |
| Suppression d'un commentaire                  | Propriétaire   | Supprimer un commentaire dont nous sommes le propriétaire          | Le commentaire est bien supprimé                                        | ?      |
| Créer un poste                                | Connecté       | Créer un poste valide et l'envoyer                                 | Redirection sur la page du poste créé                                   | ?      |
| Créer un poste                                | Non connecté   | On ne voit pas l'option pour créer le poste                        | Redirection sur le login                                                | ?      |
| Créer un compte                               | Connecté       | On ne voit pas l'option pour créer un compte                       | 403                                                                     | ?      |
| Créer un compte                               | Non connecté   | On remplis le formulaire avec des paramètres valides               | Redirection sur la page d'accueil en étant connecté                     | ?      |
| Connexion                                     | Connecté       | Pas d'option connexion                                             | 403                                                                     | ?      |
| Connexion                                     | Non connecté   | Saisie de login valide                                             | Redirection sur la page d'accueil en étant connecté                     | ?      |

