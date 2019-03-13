---
title: "Tp1: Composite et Singleton"
date: "2019-03-13"
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: true
hide: false
---

* Code complet: [github](https://github.com/RoscaS/design-pattern_tp1)

##  Partie 1: Composite


<Diagram 
    center="true" 
    url="https://i.imgur.com/1Rk92c4.png" 
    link="https://bit.ly/2UBi5Wq"
/>


* `Component` décrit les oppérations communes de `Part` `AssembledPart` et `Machine`.
* `Part` est un **composant simple** qui implémente l'interface `Component`.
* _`CompositeComponent`_ est une classe abstraite qui représente un **composant complexe** et qui implémente l'interface `Component`. Elle possède un attribut conteneur pour stocker des  `Component`.
* `AssembledPart` et `Machine` héritent toutes les deux de _`CompositeComponent`_ et sont les **composants complexes** de la hierarchie.
* Un `Client` travail avec tous les éléments à travers l'interface `Component`. Ainsi, ce dernier utilise de la même façon les objets simples et complexes de l'arbre.

Cette construction utilisant le patterne Composite ne casse pas le code originale utilisant l'ensemble de classes. Le code tire profit du polymorphisme et exploite le principe ouvert/fermé.

### Code

<Spoiler tag="spoiler">

<br>

**Component.java:**

```java
public interface Component {
    double getWeight();
    Dimension3D getDimensions();
}
```

<br>

**CompositeComponent.java:**

```java
public abstract class CompositeComponent implements Component, Serializable {

    final protected Collection<Component> components;

    public CompositeComponent() { components = new LinkedList<>(); }

    public int getNumberOfElements() { return this.components.size(); }

    public void addPart(Component part) { this.components.add(part); }

    @Override
    public double getWeight() {
        double w = 0;
        for (Component p : components)  w += p.getWeight();
        return w;
    }

    @Override
    public Dimension3D getDimensions() {
        Dimension3D total = new Dimension3D(0, 0, 0);

        for (Component component : components) {
            Dimension3D dimensions = component.getDimensions();
            double x = total.x + dimensions.x;
            double y = Math.max(total.y, dimensions.y);
            double z = Math.max(total.z, dimensions.z);
            total = new Dimension3D(x, y, z);
        }
        return total;
    }
}
```

<br>

**Part.java:**

```java
public class Part implements Component, Serializable {

    final static private long serialVersionUID = -8298269984120412487L;

	final private String name;
	final private double weight;
	final private Dimension3D dimensions;

    public Part(String name, Dimension3D dimensions, double weight) {
        this.dimensions = dimensions;
        this.name = name;
        this.weight = weight;
    }

    public double getVolume() { return this.dimensions.x * this.dimensions.y * this.dimensions.z; }

    public String getName() { return this.name; }

    @Override
    public double getWeight() { return this.weight; }

    @Override
    public Dimension3D getDimensions() { return this.dimensions; }

    @Override
    public String toString() { return "Part[" + this.name + "," + this.dimensions + "," + this.weight + "]"; }
}
```

<br>

**AssembledPart.java:**

```java
public class AssembledPart extends CompositeComponent {

    private static final long serialVersionUID = -2805555670934919157L;
    final private Dimension3D dimensions;

    public AssembledPart(Dimension3D dimensions) { this.dimensions = dimensions; }

    public double getVolume() { 
        return this.dimensions.x * this.dimensions.y * this.dimensions.z; 
    }

    @Override
    public Dimension3D getDimensions() { return this.dimensions; }

    @Override
    public String toString() {
        return "Assembled[" + this.components.toString() 
                + ":" + this.dimensions + "]";      
    }
}
```

<br>

**Machine.java:**

```java
public class Machine extends CompositeComponent {

    private static final long serialVersionUID = -4131418366537245416L;

    public Machine() { }

    public void addAssembledPart(Component part) { this.components.add(part); }

    @Override
    public String toString() {
        return "Machine{\n " +
            this.components.toString() + "\n " +
            "dimensions=" + getDimensions() + "\n " +
            "weight=" + getWeight() + "\n}";
    }
}
```

 <br>

</Spoiler>

## Partie 2: Singleton

