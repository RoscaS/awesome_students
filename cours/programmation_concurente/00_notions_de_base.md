---
title: Overview de la notion de thread
date: 2018-09-01
author:  Sol
sidebar: auto
---

##  Notions de base

* Un **programme** est une suite d'instructions (notion statique). On peut le voir comme une classe.
* Un **processus** c'est l'image du contenu des registres et de la mémoire (notion dynamique). On peut le voir comme une instance de classe.

La définition exacte d'un processus c'est:
> Un programme en cours d'exécution auquel est associé un environnement processeur et un environnement mémoire.

* **Espace d'adressage**: Ensemble d'adresses mémoire dans lesquelles un processus peut lire et écrire. Cet espace est divisé en trois parties:
    * Le **segment texte**: code du programme
    * Le **tas** binaire (*heap*, segment de données): les variables dynamiques
    * La **pile**: (*stack*) variables statiques

<Media
    src="https://i.imgur.com/NYpNcTl.png"
    caption="La pile empiète sur le 'trou' de manière automatique et l'extension du segment de données commence lors d'une allocation dynamique. Le segment de texte (le code), quant à lui, ne bouge pas."
    center="true"
    width=450
/>

Lorsqu'un processus est lancé, le système doit gérer la mémoire et l'allocation du processeur lui étant accordée. Il fait appel à l'ordonnanceur (*Scheduler*).

Un système gère le multi tache de façon:
* **Préemptive**: Lorsqu'il peut arrêter (mettre en stand-by) à tout moment n'importe quelle application pour passer à la suivante (XP, 7, GNU/Linux).
* **Coopérative**: Quand il permet à plusieurs applications de fonctionner et d'occuper la mémoire en leurs laissant le soin de se gérer elles mêmes (95, 98, Millenium).

::: warning Info
Les systèmes basés sur Unix sont des systèmes préemptifs.
:::

On parle de:
* **Pseudo-parallélisme**: (monocoeur)Quand le processeur passe d'un programme à un autre en quelques ms, ce qui donne à l'utilisateur une impression de simultanéité.
* **Parallélisme**: (multi-coeur) Quand plusieurs programmes s'éxécutent réellement en même temps.

### Processus sous Unix

Sur la majorité des OS à l'exception des systèmes Unix, **processus = nouveau programme**. Autrement dit, la majorité des OS offrent un seul appel-sytème pour exécuter un nouveau programme. Unix en possède deux `fork` et `exec`.

<Spoiler>

Sous Unix:
* **PID**: Process IDentifier: Unique dans le système, sert à identifier un processus.
A la création d'un nouveau processus, on utilise une fonction qui permet de duppliquer le processus appelant. On distingue alors les deux processus par leur **PID**. Dans le contexte du nouveau processus le processus père est noté **PPID** (Parent PID).

* **UID** (User IDentifier): ID de l'user qui a lancé un processus.
> Conventionnellement, plus l'UID est bas, plus l'utilisateur a des privilèges. `/etc/passwd` permet de consulter les UID des utilisateurs de la machine.

</Spoiler>

Les processus sont organisés en hiérarchie. **Chaque processus doit être lancé par un autre**. La racine de cette hiérarchie est le **programme initial**

Le **Processus inactif du système** (System idle process) il a le PID 0. C'est le processus que le noyau exécute tant qu'il n'y a pas d'autres processus en cours d'éxecution. C'est lui qui est en charge de lancer le premier processus que le noyau exécute: Le **programme initial**. Généralement appelé **init** et de PID 1 sur les systèmes Unix.

::: tip Tip
Si l'utilisateur indique au noyau le programme initial à exécuter, celui-ci tente alors de le faire avec quatre exécutables, dans l'ordre suivant : `/sbin/init`, `/etc/init` puis `/bin/init`.

Le premier de ces processus qui existe est exécuté en tant que programme initial. 
Si les quatre programmes n'ont pas pu être exécutés, le système s'arrête : **panique du noyau**...
:::

Après son chargement, le programme initial gère le reste du démarrage: Initialisation du système, lanchement du programme de connexion... Il se charge également de lancer les <Def def="Processus qui est constamment en activité et fournit des services au système.">daemons</Def>. 

Les différents états d'un processus sont les suivants:

* **Exécution** (**R**unning)
* **Sommeil** (**S**leeping): Dans un multitache coopératif, quand il rend la main ou dans un multitache préemptif, quand il est interrompu au bout d'un quantum de temps.
* **Arrêt** (s**T**opped): Temporairement arrêté par un signal. Il ne s'exécute plus et ne réagira qu'à un signal de redémarrage.
* **Zombie** (**Z**ombie): Le processus s'est terminé mais son père n'as pas encore lu son code de retour.

Sur Unix, un processus peut évoluer dans deux modes différents: Le mode **noyau** et le mode **utilisateur**. Généralement un processus utilisateur entre dans le mode noyau quand il effectue un appel-système.

<Media
    src="https://i.imgur.com/BIQKn6w.png"
    caption="diagramme d'états des processus sous Unix."
    center="true"
/>

<Spoiler>

* `$ ps`: Affiche ses propres processus en cours d'exécution
    * `-a`: processus de tous les utilisateurs
    * `-u`: affichage détaillé
    * `-x`: daemons


            USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
            sol       2615  0.0  0.0  16420     4 pts/1    Ss+  Oct08   0:00 /bin/zsh
            sol       2785  0.0  0.0  16532     4 pts/2    Ss   Oct08   0:00 /bin/zsh

        > **command** correspond au chemin complet de la commande lancée

</Spoiler>

Pour implémenter les processus, l'os utilise un tableau de <Def def="Oui, oui, C">structures</Def> appelé **table des processus**. Cette dernière comprend une entrée par processus allouée dynamiquement qui correspond au processus associé à ce programme. C'est le **Bloc de controle du processus** (**PCB** Process Control Block) qui contient:

* PID, PPID, UID et <Def def="Group ID">GID</Def> du processus
* état du process
* fichiers ouverts par le processus
* répertoire courant du processus
* le terminal attaché au processus
* les signaux reçus par le processus
* le contexte processeur et mémoire du processus (l'état des registres et des données mémoire du processus)

> Grace à ces informations, un processus bloqué poura redémarrer ulterieurement avec les mêmes caractéristiques.

## Fonction fork
Pour créer un nouveau processus à partir d'un <Def def="dans le code">programme</Def>, on utilise la fonction `fork` (appel-système).
Le processus père et le nouveau processus créé (processus fils) qui possède un nouveau PID. **Les deux ont le même code source**. C'est la valeur retournée par `fork` qui nous permet de savoir si l'on est dans le processus père ou fils. Ceci permet de faire deux choses différentes en fonction de dans quel process on se trouve (via structure de condition `if`, `switch`).

Lors de l'exécution de l'appel système `fork`, le noyau effectue les opérations suivantes:

* Alloue un bloc de controle dans la table des processus
* Copie les informations contenues dans le bloc de controle du père dans celui du fils (sauf les identificateurs PID, PPID, ...)
* Alloue un PID au fils
* Associe au processus fils un segment de texte dans son espece d'adressage. Le segment de données (tas) ne lui seront attribués que lorsque celui-ci tentera de les modifier. Cette technique est nommée **Copie on write** et permet de réduire le temps nécessaire à la création du processus
* L'état du processus est mis à l'état *exécution*

Plus de détails programmatiques concernant le fork 

::: danger Attention
Il est essentiel de comprendre le lien entre les précédentes notions et les notions programmatiques rattachées. C est au coeur du système. Plus d'informations [ici](http://www.commentcamarche.net/faq/10611-que-fait-un-fork). Ainsi qu'en seconde partie de ce [lien](https://openclassrooms.com/fr/courses/1513891-la-programmation-systeme-en-c-sous-unix/1514339-les-processus)
:::

<Spoiler>

#### Exemple d'implémentation
Un programme qui crée un fils. Le père affiche "je suis père" et le fils afiche "Je suis fils":

```C
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <errno.h>
#include <sys/wait.h>
#include <sys/types.h>

int main(int argc, int **argv) {
    pid_t pid_fils;

    do {
        pid_fils = fork();
    } while ((pid_fils == -1) && (errno == EAGAIN));

    if (pid_fils == -1) {
        perror("fork");
    } else if (pid_fils == 0) {
        printf("Je suis le fils\n");
    } else {
        printf("Je suis le père \n");

        if (wait(NULL) == -1) {
            perror("wait: ");
        }
    }
    return EXIT_SUCCESS;
}
```

</Spoiler>

## Thread

Dans la majorité des systèmes d'exploitation, **chaque processus** possède un espace d'adressage et un **thread** de contrôle unique, le **thread principal**. Du point de vue programmation, c'est le **thread principal** qui exécute le main.

En général le système réserve un processus à chaque application sauf quelques  exceptions. Beaucoup de programmes exécutent plusieurs activités en parallèle (pseudo-parallélisme ou vrai parallélisme).

### Avantages vis à vis des processus

* La facilité et la rapidité de leur création. Tous les threads d'un même processus partagent le même espace d'adressage, et donc toutes les variables.
Évite l'allocation de tous ces espaces lors de la création. 

> Sur de nombreux systèmes la création d'un thread est environs 100 fois plus rapide.

* La superposition de l'exécution des activités dans une même application permet une importante accélération quand au fonctionnement de cette dernière.

* La communication entre threads est plus aisée que celle entre les processus (les processus communiquent via pipes (`|`)).

::: tip Info
Le terme "thread" peut se traduire par "fil d'exécution". L'appellation de "processus léger" est également utilisée.
:::
