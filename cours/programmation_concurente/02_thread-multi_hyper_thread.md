---
title: Threads, multi/hyper threading et multiprocessing
date: 2018-10-14
author: Sol
sidebar: auto
---

<Spoiler>

> In computer architecture, **multithreading** is the ability of a central processing unit (CPU) (or a single core in a multi-core processor) to execute multiple processes or threads **concurrently**, supported by the operating system. This approach differs from multiprocessing. In a **multithreaded application**, the **processes and threads share the resources** of a single or multiple cores, which include the computing units, the CPU caches, and the translation lookaside buffer (TLB). 
> 
> **Multiprocessing** systems include multiple complete processing units in one or more cores.
> 
> **Multithreading** aims to **increase utilization of a single core** by using thread-level parallelism, as well as instruction-level parallelism. 
> 
> **The two techniques are complementary**, they are sometimes combined in systems with multiple multithreading CPUs and with CPUs with multiple multithreading cores. 
> [Wikipedia](https://en.wikipedia.org/wiki/Multithreading_(computer_architecture))

> **Hyper-threading** is Intel's proprietary **simultaneous multithreading** (SMT) implementation used to **improve parallelization** of computations (doing multiple tasks at once) performed on x86 microprocessors. 
> For each processor core that is physically present, the operating system addresses two virtual (logical) cores and shares the workload between them when possible.
> [Wikipedia](https://en.wikipedia.org/wiki/Hyper-threading)

</Spoiler>


* Le **multithreading** est une architecture qui vise à optimiser l'utilisation d'un coeur unique en mettant en parallèle plusieurs threads.
* Le **multiprocessing** est le fait **d'utiliser** plusieurs CPU dans la même machine (Une machine qui **utilise** un CPU multi-coeur satisfait cette définition).
* L'**hyperthreading** est une technologie propriétaire qui vise à améliorer les performances du multithreading en simulant (virtualisant) deux coeurs distincts à partir d'un seul.

Extrais de la commande `lscpu` sur un i7-8550U

    $ lscpu
    Architecture:        x86_64
    CPU(s):              8
    Thread(s) per core:  2
    Core(s) per socket:  4
    Socket(s):           1

* Le fait d'utiliser plusieurs coeurs physiques est appellé **multiprocessing**, 
* Chaque coeur est capable de gérer 2 threads c'est du **multithreading**
* Chaque coeur est virtuellement divisé en deux CPUs distincts grace à l'**hyperthreading**

::: danger Moment phylosophie 
Un processeur qui contient et utilise plusieurs coeurs satisfait la définition du multiprocessing (Comme chaque coeur est lui même un processeur). 

Si on prend à part un de ces coeurs, le coeur en lui même ne fait pas de multiprocessing...

...Sauf si il est hyperthreadé et donc est logiquement divisé en deux coeurs distincts qui sont eux même des processeurs et donc un de ces coeurs unique hyperthreadé satisfait à nouveau la définition du multiprocessing.
:::


<Spoiler>

>Poser la question en cours!

`$htop` est un gestionnaire de processus sur Linux dont voici une capture d'écran:
![Image](https://i.imgur.com/GJFE16J.png)

L'information en haut à droite `Tasks: 104, 649 thr; 1 running` est déroutante. Elle ne veut pas dire que 104 taches étalées sur 649 threads fonctionnent en ce moment. Elle indique que 104 taches **idle** sont réparties sur 649 threads **potentiels** et qu'il y a actuellement 1 de ces threads qui est en cours d'exécution sur les 8 possibles.


</Spoiler>



