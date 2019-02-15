---
title: "TP-3: Mandelbrot"
date: 2019-01-25
author: "Nathan, Sol"
sidebar: auto
project: true
---

![Image](https://i.imgur.com/ufYG9X8.png)



## Repos

* [Pthread](https://github.com/RoscaS/prog_conc_lab3)
* [QThread](https://github.com/nathanlatino/QThreadLabo3)

## Introduction

Une fractale de Mandelbrot demande un grand nombre d’opérations ce qui se prête particulièrement à un laboratoire dans le cadre du cours de programmation concurente.

Le but de ce laboratoire est d’optimiser le calcul d’un ensemble de Mandelbrot en utilisant les avantages de la programmation concurente. Deux implementations C++ sont demandées, une avec **Pthread** et une en **Qthread**.

Pour ce travail Nathan et moi même avons décidés de partir chacun sur une implémentation sans interférer dans le but de voir à quel point les résultats seraient différents. Nathan était en charge de la version **QThread** et moi de la version **Pthread**.

L'implémentation utilise la première valeur entrée en paramètre du programme comme nombre de de carrés sur un coté du carré de la scène finale. Par exemple, Si l'utilisateur entre "4" la scène sera découpée en 16 sections. Le second paramètre est le nombre de threads à utiliser en parallèle au maximum.

## Conception

### Pthread

L'avantage de C++ sur C est bien entendu son exploitation du paradigme objet. La base de cette version de l'implémentation est une tentative de wrapper les éléments de base de **Pthread** dans une classe abstraite `WorkerBase`. Cette classe sert de base à `Worker` qui reprend la logique fournie dans le squelette de base tout en héritant de methodes pour initialiser un thread, le join et une methode virtuelle à override avec la logique souhaitée. 

les semaphores sont quant à eux implémentés dans une classe `Sem` qui ne fait qu'appeler les fonctions basiques de la librairie "semaphores.h".

Une classe `Master` sert à coordonner les threads, cette classe s'occupe de faire la division du plan en en plusieurs sections qui seront chacune en charge d'un thread. Pour faciliter les choses des objets de type `Job` contiennent les données de chaque section et sont stocké dans l'attribut `jobs`. Ce dernier, de type queue est utilisé dans la boucle principale qui se trouve dans la methode `start` pour distribuer aux threads leurs tâches.

### QThread

L'implémentation est fait de manière à avoir une classe master et une classe worker. Ces deux classes héritent de **QThread**. l'objectif du master est de découper les tâches à effectuées par les workers. Le master vérifie si des workers ont fini leur execution et leur assigne une nouvelle tâche. Un QSemaphore est utiliser pour bloquer le display de la fractale. le master le libère à la fin de son execution. Un QMutex bloque à la création et mise à jour des workers thread.

Les worker sont créés une fois et réutilisées pour la suite des tâches. Ils calculent un bloc avant de s'en faire attribuer un autre sans empiéter sur les blocs des autres threads.

Le programme reçoit deux arguments le nombre de blocs (M) et le nombre de threads (N). Le nombre de blocs en hauteur et largueur est calculé pour être optimal (vérification d'un nombre premier, plus grand diviseur de la racine de N).



## Tests
Le projet mandelbrot codé séquentiellement prend 1 seconde pour executer le code. 

* **QThread** prend 273 ms avec 100 blocs et 8 threads. On a un gain de 72% d'efficacité.

* **Pthread** prend 211 ms avec 100 blocs et 8 threads. On a un gain de 78% d'efficacité.

### Pthread

<Charts :x="y" :y="x1" :height="200" label="temps (ms)"/>

<br>

> Temps en fonction des threads utilisés pour 16 blocs Pthread)

<br> <br>

<Charts :x="y" :y="x2" :height="200" label="temps (ms)"/>

> Temps en fonction des threads utilisés pour 16384 blocs Pthread)

 <br> <br> <br> <br>

### Qtread

<Charts :x="y" :y="x3" :height="200" label="temps (ms)"/>

<br> <br>

> Temps en fonction des threads utilisés pour 16 blocs (Qthread)


<Charts :x="y" :y="x4" :height="200" label="temps (ms)"/>

> Temps en fonction des threads utilisés pour 16384 blocs (Qthread)




## Conclusion

Les deux implémentations sont équivalentes au niveau des performances. **QThread** est plus simple à mettre en place mais est lié à Qt et donc moins versatile que **Pthread** qui comme cette implémentation C++ le montre est utilisable aussi bien en C qu'en C++. 




<script>
export default {
    data: () => ({
        // **Pthread**
        // 4*4
        x1: [1068, 479, 340, 271, 223, 201, 150, 149],
        // 128*128
        x2: [1457, 716, 514, 461, 383, 353, 370, 315],

        // **QThread**
        x3: [1031, 552, 346, 311, 294, 198, 162, 151],
        // 128*128
        x4: [1556, 729, 510, 495, 403, 364, 330, 295],
    }),
    computed: {
        y() {
            return this.range(8);
        },
  
    },
    methods: {
        range(n) {
            let a = [];
            for (let i of [...Array(n).keys()]) a.push(i + 1);
            return a;
        }
    }
}
</script>