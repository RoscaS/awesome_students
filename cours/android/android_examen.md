---
title: "Android: examen oral"
date: 2020-01-30
author: Sol
sidebar: auto
project: false
hide: true
---

* [résumé](https://hackmd.io/C6sqAUv7QIO89qwQUqdCcA)


## Questions
* VF pétés et des trucs sur des intents, broadcasreceiver, et whatnot
* Difference entre Application et Activity
* Code avec une exception concurrente
* Qu’est-ce que la fragmentation Android
* Des questions V/F cramées
* Qu’est ce qu’un Intent ne peut pas appeller
* Que met-on dans le manifest
* Donner 4 composant d'une application
* Question sur les AsyncTask, les thread, les Handler
* Quelle est la différence entre un broadcastReceiver statique ou dynamique
* Le lancement d'une activité c'est quoi comme type d'intent ?  (explicite)
* on doit mettre dans le manifest pour utiliser l'accéléromètre (pas forcément) ?
* ça sert à quoi les fragments, quel code dans les fragments quel code dans l'activité (activité = plutôt métier, fragment = plutôt display)
* on fait quoi dans le onResume()  (récup les données sauvées dans le Bundle après le onStop) ?
* un fragment va sur la backstack (non)?
  * Backstack: (pile des activités pour chaque app quand on switch c'est empilé / dépilé quand on re)
* si on lance une activité d'une autre app elle va sur notre backstack (oui)?
* VF:
    * On peut utiliser des ".jar" en Android ?
    * JSP ?
    * 10'000 questions sur les intents
    * Toutes les activités sont définies dans le AndroidManifest.XML
    * Est ce que RelativeLayout est un composant Android ?
    * Est-ce la classe View qui partage les données entre les composants (Kappa)
* QCM:
    * Ce qu'il faut faire dans le onPause()
    * Les états possibles d'une activité
    * C'est quoi Dalvik (VM android)
    * De quelle classe doit-on hériter pour faire une view personnalisée (android.view.View)
    * Quelle classe permet le transfert de données entre composants ?
    * Dans un fichier .xml dire le nombre de Views, ViewGroup et Layout (View c'est les boutons et tout et aussi les layout)
    * Quelle trucs sont PAS dédié aux intents
        * Activity
        * BroadcastReceiver
        * ContentProvider → Seule réponse juste
        * Service
* Code:
    * Faire du code pour passer une information d'une activité à une autre
    * Avec un thread qui modifie un textview
        * Faut dire que c'est pas possible de modifier lUI depuis les thread, il faut utiliser une asynctask
    * Schéma de messages échangés entre une activité, un intent, l'OS et un service lors de la création d'un service
        * Expliquer ce qui se passe et décrire à quoi correspond START_STICKY