---
title: "Tp2: Décorator & State"
date: "2019-04-03"
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: true
hide: false
---

## Partie 1: Décorated composite

<br>

<Container type="danger">

Dans la consigne l'interface est sensé contenir une méthode `Pepin()`. Plusieurs choses nous semble étrange et nous font penser que c'est peut être un soucis de rédaction: 

* La notation n'est pas adéquate 
* Son comportement est exactement celui de la methode `contientPepin` du Panier qui se retrouverait donc avec deux methodes qui font la même chose. 

Nous prenons donc la décision de remplacer `Pepin()` dans l'interface par `contientPepin()`. 

</Container>

<br>

![Image](https://i.imgur.com/c9cXKxz.png)

<br>

`Fruit` et `Panier` suivent le paterne _Composite_ et interfacent avec `Client` via `Component`.

Suivant le `Fruit` ou le `Panier` créé, on souhaite altérer l'affichage de leur méthode `toString` de sans modifier directement le corps de la méthode car certains objets pourraient toujours l'ancienne version de cette méthode. C'est ce que permet de faire la classe `Decorator` qui implémente la même interface que `Fruit` et `Panier` mais implémente les méthodes `toString` et `contientPepin` différemment.

En passant au constructeur de `Decorator` l'objet à altérer ainsi qu'un `Style`, on obtient un objet `Fruit` ou `Panier` qui est emballé dans un `Decorator`. Ainsi, par exemple, si on appelle la méthode `toString` sur l'objet `Decorator` instianciée avec un `Fruit` nous aurons une version décorée avec les attributs du `Style` de l'affichage du fruit.

<Container type="info">

`Style` est une **enum** qui contient les différentes possibilités de customisation applicable par un `Décorator`.

</Container>

<Spoiler tag="Alternative">

<br>

Il est possible d'imaginer une version dans laquelle `Decorator` est abstraite (`BaseDecorator`). L'avantage de cette façon de cette variante serait de ne plus avoir à passer un argument du type `Style` lors de l'instanciation d'un `Decorator`.

<a href="https://i.imgur.com/xAaqDtt.png">
    <img src="https://i.imgur.com/xAaqDtt.png">
</a>

Dans cette version, chaque concrétisation de _`Decorator`_ a un nom spécifique et ne contient qu'un constructeur qui `super` le `Component` qu'il recoit lors de sa construction ainsi qu'un `Style` qui devrait correspondre à son nom.

```java
public class DecA extends BaseDecorator {
    public DecA(Component target) {
        super(target, Style.ACCOLADES);
    }
}
```

<br>

</Spoiler>

## Partie 2 State
