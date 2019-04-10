---
title: Programmation concurrente en Java
date: 2019-04-08
author:  Sol
sidebar: auto
project: false
hide: false
---

##  En vrac

* Deux façons de faire de la concurrence:
  * **extend** de `Thread`
  * **implements** `Runnable`
  * <st c="g">Favoriser l'implémentation de `Runnable` (pas d'héritage multiple en Java)</st>
* `Runnable` n'expose que la méthode `run`
* Une instance de de la classe qui implémente `Runnable` doit être passée en paramêtre du constructeur d'une nouvelle instance de `Thread`
* Démarage du thread avec la méthode `start` de l'instance de `Thread`
* `Object` et `Thread` implémentent `sleep(ms)`. Favoriser `Thread.sleep(ms)`

<br>

* la lecture ou l'écriture d'un champ volatile n'est pas synchronisée.
* les opérations sur un champ volatile ne sont pas atomiques.


## Arrêter un thread

<Container type="danger">

Ne jamais utiliser `stop()`, `susped()` ou `resume()`, elles sont dépréciées et risquent de l'aisser le programme dans un sale état.

</Container>

On ne peut pas dans le cadre de l'API Concurrent arrêter un thdread de l'extérieur de façon autoritaire. La bonne façon de faire est de positionner un champ particulier de ce thread. Il est alors de la responsabilité du thread de vérifier péridiquement la value de ce champ et lorsqu'il lui indique qu'il faut qu'il s'interrompe, c'est à lui de le faire.

Cette approche est valide dans la majorité des cas **mais pas dans le cas où le thread qui doit s'arrêter est lui même en attente du retour d'une opération bloquante ou dans un état d'attente** (méthodes `Object.wait(long ms)` ou `Thread.sleep(long ms)`). **Dans ce cas, on peut interrompre le thread**. Ces méthodes d'attente sont en général capables de détecter cette interrution, et jettent alors une exception de type `InterruptedException`.


## Bloc synchronisé

On appelle bloc synchronisé, tout bloc portant une déclaration synchronized. On peut poser le mot-clé `synchronized` de trois façons. Pour chacune de ces façons, le bloc synchronisé **fonctionne avec un paramètre de synchronisation**.

* On peut ajouter le mot-clé `synchronized` en tant que modificateur d'une méthode **statique**. Dans ce cas le paramètre de synchronisation est la **classe qui possède ce bloc**.
* On peut l'ajouter comme modificateur d'une méthode **non statique**. Dans ce cas, le paramètre de synchronisation est l'**instance de cette classe dans laquelle on se trouve**. On peut accéder à cette instance par le mot-clé this.
* On peut enfin créer un bloc commençant par le mot-clé `synchronized`. Dans ce cas, le paramètre de synchronisation **doit être passé explicitement à l'ouverture de ce bloc**. Ce peut être tout objet Java.
 

```java
public class Tests {
    private Object key = new Object();

    // Méthode statique synchronisée, le paramêtre de sync est l'objet Test.class
    public static synchronized bool getNombre() {
        // ...
    }

    // Méthode non statique synchonisée, le paramètre de sync est l'objet this
    public synchronized boolean increment() {
        // ...
    }

    public boolean decrement (){
        // Synchronisation sur l'objet key
        // on peut aussi synchroniser sur this
        synchronized(key) {
            // ...
        }
    }
}
```

**La paramètre du bloc synchronisé joue le rôle de garde pour ce bloc synchronisé**. Cet objet possède une unique clé. Cette clé est nécessaire pour pouvoir entrer dans le bloc synchronisé, et exécuter les instructions qu'il contient.

Quand un thread obtient cette clé, il entre dans le bloc, et exécute le code qui s'y trouve. À la sortie du bloc, il rend la clé à l'objet qui garde le bloc.

Aucun thread ne peut entrer dans ce bloc s'il ne possède pas la clé qui permet d'y entrer.

<Container type="info">

**Tout objet Java possède une clé,** il s'agit d'un mécanisme bas niveau, présent sur la classe `Object`. Lorsque le langage Java a été conçu, cette idée était considérée comme excellente, aujourd'hui elle est plutôt pas ouf. Il n'empêche, cela explique que **tout objet Java peut être utilisé pour garder un bloc d'instructions**.

</Container>

Ce mécanisme de synchronization permet de résoudre le problème de concurrence d'accès. Cela dit, il pose un **problème de performance**. Effectivement, si un grand nombre de threads sont en concurrence d'exécution, tout bloc synchronisé devient un goulet d'étranglement dans lequel les thread ne peuvent passer qu'un par un.

### Deadlock

>Une deadlock intervient lorsqu'un premier thread T1 se trouve dans un bloc synchronisé B1, et est en attente à l'entrée d'un autre bloc synchronisé B2. Malheureusement, dans ce bloc B2, se trouve déjà un thread T2, en attente de pouvoir entrer dans B1.

Ces deux threads s'attendent mutuellement, et ne peuvent exécuter le moindre code. La situation est bloquée, la seule façon de la débloquer est d'interrompre un des deux threads.

### Bonne pratiques pour la synchronisation

**N'utiliser la synchronisation qu'en cas de nécessité**. L'API Concurrent propose de nombreuses techniques qui rendent la synchronisation inutile :
* les variables atomiques ;
* les collections non-bloquantes et thread-safe ;
* les objets de synchronisation explicites, qui permettent de rendre la main quand l'acquisition d'un verrou prend trop de temps.

**Ne pas exposer les verrous de synchronisation**. L'objet paramètre d'un bloc synchronized ne devrait jamais être exposé. En particulier, synchroniser un bloc sur this ou sur la classe englobante est une très mauvaise idée. Le plus souvent, n'importe quel autre objet de l'application pourra obtenir une référence sur cet objet de synchronisation, et s'il lui vient la mauvaise idée de l'utiliser pour synchroniser d'autres blocs, des situations de deadlock pourront arriver.

Il faut également se rappeler que les chaînes de caractères sont traitées de façon particulière par le compilateur. Ne jamais tenter de synchroniser un bloc en utilisant une chaîne de caractères est un principe absolu.

**Ne pas imbriquer les appels synchronisés**. Un bloc synchronisé ne devrait jamais faire appel à un objet collaborateur pour effectuer ses traitements. Ce principe est probablement complexe à appliquer, mais si l'on y arrive, aucune situation de deadlock ne pourra se présenter.
