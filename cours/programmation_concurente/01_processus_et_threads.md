---
title: Processus et threads
date: 2018-09-26
sidebar: auto
author: Sol
---

## Programmation séquentielle (dépendance causale)
Sur un seul thread, l'execution est :
* séquentielle
* prévisible
* reproductible
* anticipable

## Programmation concurente (indépendance causale)
Ce paradigme tient compte de plusieurs contextes d'execution (**thread**, **processus**, **tache**) matérialisés par une **pile d'exécution (stack)** et des données qui lui sont privées.

::: warning Attention !
Chaque thread a son propre contexte et sa propre pile.
:::

Dans le cas où on a deux ou plusieurs threads qui coopèrent on parle de:
* Application multi-multicontexte (**multi-threaded**)
* Application parallèle
* Appication distribueée

Plusieurs instructions peuvent s'exécuter en même temps.

## Avantages et inconvénients

### Avantages
* Optimisation de l'utilisation du/des coeur
* Evite de bloquer sur les in/out
* Tirer proffit du multi coeur
* Permet le parallélisme (Répartition des calculs)
* Attente sur plusieurs entrées
* Permet l'utilisation de programmes multitache
  * Un thread gère l'affichage
  * Un autre écoute sur un socket réseau

### Inconvénients et problèmes
* Partage des ressources et leur gestion
* Difficulté à synchroniser les taches
  * Le controle de l'ordre d'exécution des taches est très important
* Programme moins prédictible...
* ... et reproductile

## Processus 
Plusieurs procéssus peuvent s'éxecuter en parallèle et sont tous gérés par l'os.
Un procressus possède:
* Un code à exécuter
* Un espace d'adressage
* Une priorité
* Un identifiant
* Un contexte d'exécution (program counter (PC) + registres)

### Cycle de vie
1. **Prêt**: Le processus est prêt à être exécuté. Cas d'un processus nouvellement créé, débloqué ou, d'un ou plusieurs processus occupant le ou les coeurs disponibles.
2. **En exécution**: Le processus est en cours d'exécution sur un coeur. Plusieurs processus peuvent être en exécution dans le cas d'une machine multicoeur.
3. **Bloqué**: Le processus est en attente sur une synchronisation ou sur la fin d'une opération d'entrée/sortie.
4. **Zombie**: Le processus a terminé son exécution, mais son processus parent doit encore récupérer sa valeur de terminaison.
5. **Terminé**: Le processus a terminé son exécution ou a été annulé. Les ressources du processus sont libérées et le processus disparait.

## Thread

::: tip Tip:
Un processus peut contenir un ou plusieurs threads.
:::


* Un thread est une unité d'execution, un processus léger (lightweight process)
* **Les threads s'exécutent en parallèle**
  * Monocoeur: <Def def="En informatique, le multitâche préemptif désigne la capacité d'un système d'exploitation à exécuter ou arrêter une tâche planifiée en cours.
Un ordonnanceur préemptif présente l'avantage d'une meilleure réactivité du système et de son évolution, mais l'inconvénient vient des situations de compétition (lorsque le processus d'exécution accède à la même ressource avant qu'un autre processus (préempté) ait terminé son utilisation)">preamptif</Def>
  * Multicoeur: execution parallèle.
  * L'**ordonnanceur** est responsable de l'ordre d'exécution.

### Problèmes
* Priorité d'exécution
* Échange de données
* Cohérence des données
* Synchronisation et communication entre les threads

### Différences par rapport à un processus
* Les threads d'un même processus se partagent l'espace d'adressage du processus
* Ils sont <Def def="rythmés par l'ordonnanceur">ordonnancés</Def>
* Ils possèdent
  * Leur propre pile
  * Leur propre contexte d'exécution (**IP** (Instruction Pointer) + registres)
  
![Image](https://i.imgur.com/ZEWury7.png)

## Patterns
Comment décomposer un programme en plusieurs threads?

### Boss & workers
C'est une délégation des taches
* Un thread principal crée les autres threads et leur assigne une tache
* Il peut (mais ne doit pas) attendre jusqu'à ce que la tache soit complétée

<Media
  src="https://i.imgur.com/gDzSllg.png"
  center="true"
/>

Deux approches possibles:
1. Le boss crée pour chaque requete un nouveau thread
2. Le boss crée un pool de threads
   
### Peer to peer
* Tous les threads ont un status de travail égale
* Un thread pair crée tous les threads nécessaires à une tache mais il ne délègue pas de responsabilités
* Les threads pair peuvent traiter des requetes d'un simple *input stream* partagé par tous les threads ou avoir chacun leur propre *input stream*

<Media
  src="https://i.imgur.com/nup6mxC.png"
  center="true"
/>

### Pipeline
* Approche semblable à une ligne de production pour traiter des données par étapes (**stages**)
* Chaque stage est un thread qui fait du travail sur une unité d'entrée. Lorsque l'unité d'entrée passe par tous les stages, le traitement est complété.

<Media
  src="https://i.imgur.com/RNwX1qG.png"
  center="true"
/>

## Changement de contexte
L'opération de changement de contexte d'un processus ou d'un thread comporte les séquences suivantes:

1. Mise en attente du processus actf dans la liste des processus bloqués ou prêts
2. Sauvegarde de son contexte d'exécution
3. Recherche du processus éligible ayant la plus haute priorité
4. Restauration du contexte d'exécution du processus élu et restauration de la valeur de ses regisres lorsqu'il s'exécutait précédemment
5. Activation du processus élu

**Tout se passe comme si le processus préalablement interrompu n'avait pas cessé de s'exécuter.**

## Implémentation en C 

### Creation d'un thread

```c
#include <pthread.h>

int pthread_create(pthread_t *thread,
                   const pthread_attr_t *attr,
                   void *(*start_routine)(void *),
                   void *arg);
```

* `*thread` est un pointeur sur une variable de type `pthread_t`, il s'agit de l 'identifient du thread créé (argument de sortie)
* `*attr` permet de définir les attributs du thread (valeur `NULL` par défaut)
* `*start_routine` correspond à la fonction qui est exécutée par le thread créé. La fonction exécutée par le thread créé doit avoir le prototype suivant:

```c
void *function(void *data)
```

* `*arg` est un argument passé à la fonction (peut valoir `NULL`)

Si la création est un succès, `pthread_create` renvoie `0`

### Passage d'arguments

```c
pthread_create(&thread, NULL, func, msg)

void *func(void *arg) {
  char *msg = (atoi) arg;
  printf("Msg: %s\n", msg);
  return NULL;
}
```

### Jointure
* C'est une forme de communication entre threads
* **Joindre** un thread signifie le bloquer jusqu'à sa terminsaison.
* `value_ptr` contient la valeur de retour du thread terminé (en principe set sur `NULL`)
* Renvoie `0` en cas de succès

### Terminaison d'un thread
La terminaison d'un thread peut être exécutée depuis:
1. Le thread lui-même:
  * Instruction `return`
  * Fonction `pthread_cancel`
2. Un autre thread (annulation):
  * Fonction `pthread_cancel`

```c
void pthread_exit(void *value);
int pthread_cancel(pthread_t thread);
```

### Rendre le processeur
Il est possible de forcer le thread appelant à relacher le processeur avec la fonction:

```c
#include <scheld.h>
int scheld_yield()
```

* Suite à ce call, le thread est placé à la fin de la file d'attente des threads en attente du processeur
* Le thread suivant en attente du processeur est activé
* Renvoie `0` en cas de succès

## Exercices