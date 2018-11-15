---
title: Verrous et Mutex
date: 2018-11-14
author: Sol
sidebar: auto
project: false
---

## Spinlock et attente active

<Container type="info" header="Attente active (Polling)">

Technique de programmation que les processus utilisent lorsqu'ils vérifient de façon répétée si une condition est vraie.

</Container>

* Un **Spinlock** (verrou tournant) est un mécanisme d'exclusion mutuelle par attente active.
* Implémenté grâce à des instructions matérielles péciales comme _Test And Test_ ou _Compare And Swap_ ...
* `pthread` met à disposition:
    * le type `pthread_spinlock_t`
    * des fonctions de manipulation:
        * `int pthread_spin_lock(pthread_spinlock_t *lock)`
        * `int pthread_spin_trylock(pthread_spinlock_t *lock)`
        * `int pthread_spin_unlock(pthread_spinlock_t *lock)

La solution apportée par l'**attente active** pour résoudre le problème d'**exclusion mutuelle** est insuffisant:

* Les variables utilisées prêtent à confusion sur leur utilisation en fonction de si la varariable est utilisée pour l'exclusion mutuelle ou pour autre chose
* La tâche qui fait l'attente active occupe le processeur inutilement, en attendant le changement d'une condition

<Container type="warning">

Un coeur en attente active n'est pas utilisé éfficacement !

</Container>

## Mutex
Mécanisme d'exclusion mutuelle par attente **passive** permettant la gestion des threads. Introduit pour résoudre partiellement certains problèmes liés à la synchronisation des threads et à la gestion de données partagées.

Les éléments constituant d'un mutex sont:
* Une variable booléenne
* Une variable qui contient le propriétaire
* Une file d'attente
* Deux opérations **atomiques**:
    * `lock`
    * `unlock`

### Types de mutex
La librairie `pthread` défini 3 types de mutex:
* mutex noraml (ou rapide)
* mutex sécurisé (error checking)
* mutex récursif (recursive)

### Mutex Pthread

#### Création
* Statique: 
```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER
```

* Dynamique: 
```c
Pthread_mutex_init(pthread_mutex_t *, pthread_mutexattr_t *)
```
* `pthread_mutex_t`: pointeur vers la variable à initialiser

#### Destruction
```c
pthread_mutex_destroy(mutex)
```
Doit être dévérouillé

#### Utilisation
* `pthread_mutex_lock(mutex)`: Bloque jusqu'à obtention du verrou
* `pthread_mutex_trylock(mutex): Obtient le verrou ou renvoie `EBUSY`
* `pthread_mutex_unlock(mutex): Libère le verrou

## Synchronisation des threads

...