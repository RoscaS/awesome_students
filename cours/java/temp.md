---
title: Hidden
date: 2019-02-07
author: Sol
sidebar: auto
project: false
hide: true
---

## Temp

### Devoirs

* Additionner deux vecteurs en utilisant deux threads.
* utiliser deux threads en // pour diviser le temps de calcul par deux.
* Afficher le resultat (seulement quand les deux threads sont finits => join).
* Tests unitaires

### JavaDoc
* On peut utiliser les balises html dedans

## Threads


* En c si on coupe le thread parent, tous les threads enfants meurent
* En Java le thread si on coupe le thread parent, les enfants continuent

```java
Thread t1 = new Thread(OBJET_QUI_IMLPEMENTE_Runnable);
```

### Enum

```java
public enum Jour {
    LUNDI,
    MARDI,
    MERCREDI,
    JEUDI,
    VENDREDI,
    SAMEDI,
    DIMANCHE,
}
```

Chaque jour est une instance de la classe `Jour`

```java
Jour jour = Jour.LUNDI;
System.out.println(jour); // => LUNDI
System.out.println(jour.name()); // => LUNDI
System.out.println(jour.toString()); // => LUNDI
```

```java
package ch.hearc.cours_02.poo.classe.enumerate;

public enum Continent {

    AMERIQUE(1234, 5678),
    EUROPE(9123, 5432),
    AFRIQUE(8742, 41234),
    ASIE(12341, 65431),
    OCEANIE(9876, 7861),
    ANTARTIQUE(4213, 9883);

    private Continent(int habitants, int areaSize) {
        this.habitants = habitants;
        this.areaSize = areaSize;
    }

    public int getHabitants() {
        return habitants;
    }

    public int getAreaSize() {
        return areaSize;
    }

    private int habitants;
    private int areaSize;
}
```

* Enum est une classe, les elements de l'enum sont les uniques instances de la classe Continent.
* Une classe dont le nombre d'instances est fix et nommé => cstr private
* multi singleton
