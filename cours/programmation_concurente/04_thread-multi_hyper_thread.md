---
title: Threads, multi/hyper threading et multiprocessing
date: 2018-10-17
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


* Le **multithreading** est une architecture qui vise à optimiser l'utilisation d'un coeur unique en mettant en parallèle plusieurs threads
* Le **multiprocessing** est le fait d'avoir plusieurs coeurs dans le même CPU
* L'**hyperthreading** est une technologie propriétaire qui vise à améliorer les performances du multithreading en simulant (virtualisant) deux coeurs distincts à partir d'un seul.

Extrais de la commande `lscpu` sur un i7-8550U

    $ lscpu
    Architecture:        x86_64
    CPU(s):              8
    Thread(s) per core:  2
    Core(s) per socket:  4
    Socket(s):           1

Nous avons donc **4 coeurs physiques** divisés en 2 coeurs logiques chacun ce qui nous donne un total **8 coeurs logiques**.

Le fait d'avoir plusieurs coeurs physiques est appellé **multiprocessing**, chaque coeur est capable de gérer plusieurs threads 


