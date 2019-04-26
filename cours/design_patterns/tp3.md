---
title: "Design Pattern Tp3: Abstract factory"
date: "2019-04-26"
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: true
hide: false
---

* Code complet: [github](https://github.com/nathanlatino/design-pattern_tp3)

## Introduction

Dans le présent contexte, l’interêt principal du pattern Abstract Factory est que si l’on veut rajouter une pizza, il nous suffit d’extend la classe Abstraite `PizzaFactory` et d'ajouter le code nécessaire pour l'utiliser dans le client. Le pattern permet également d'abstraire la creation d’une pizza en déléguant cet aspect à la factory.

## Schéma


<Media
    src="https://i.imgur.com/z1pkU1G.png"
    center="true"
/>



Ci-dessus le diagramme de classe avec la structure de l’Abstract Factory et ses 4
implémentations.

## Fonctionnement

Une classe `Client` utilise des `Pizza` retournées par la méthode `makePizza` du `Pizzaiolo`. 

## Implémentation

### PizzaFactory


```java
public abstract class PizzaFactory {

    private String name;

    public PizzaFactory(String name) {
        this.name = name;
    }

    public Pizza createPizza() {
        return new Pizza(getNewDough(),getNewSauce(),getNewGarnishes(),name); }

    protected abstract Dough getNewDough();
    protected abstract Sauce getNewSauce();
    protected abstract List<Garnish> getNewGarnishes();

}
```

La création d'une pizza se fait en implementant une nouvelle classe `Factory` qui hérite de `PizzaFactory`:

```java
public class MargheritaFactory extends PizzaFactory {

    public MargheritaFactory() {
        super("Margherita");
    }

    @Override
    protected Dough getNewDough() {
        return new DoughFactory().createFine();
    }

    @Override
    protected Sauce getNewSauce() {
        return new SauceFactory().createTomato();
    }

    @Override
    protected List<Garnish> getNewGarnishes() {
        return new ArrayList<>(Arrays.asList(
                new GarnishFactory().createMozzarella(),
                new GarnishFactory().createOrigan()
        ));
    }
}
```


### Pizza
La classe `Pizza` implemente les différents éléments de la pizza (`Dough`, `Sauce`, `Garnish`) et lui permet de rentourner ses caractéristiques (prix totale, piquant, quantité de lactose, végétarien, épaisseur de la pâte).

### DoughFactory, SauceFactory et GranishFactory

Les classes `DoughFactory`, `SauceFactory` et `GranishFactory` servent à créer les composantes des `Pizzas`. `Dough`, `Sauce` et `Granish` héritent toutes de la classe abstraite `Ingredient`.


```java 
public class DoughFactory {

    public Dough createFine() {
        return new Dough("Fine", 2f, 0.5f, 2);
    }

    public Dough createThick() {
        return new Dough("Epaisse", 2.5f, 1.8f, 5);
    }
}
```

```java
public class Dough extends Ingredient {

    private int thickness;

    public Dough(String name, float price, float lactose, int thickness) {
        super(name, price, lactose);

        this.thickness = thickness;
    }

    public int getThickness() {
        return thickness;
    }
}
```
