---
title: "Tp2: Décorator & State"
date: "2019-04-03"
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: true
hide: false
---

* Code complet: [github](https://github.com/RoscaS/design-pattern_tp2)

## Partie 1: Décorated composite

<br>

<Container type="danger">

Dans la consigne l'interface est sensé contenir une méthode `Pepin()`. Plusieurs choses nous semble étrange et nous font penser que c'est peut être un soucis de rédaction: 

* La notation n'est pas adéquate 
* Son comportement est exactement celui de la methode `contientPepin` du Panier qui se retrouverait donc avec deux methodes qui font la même chose. 

Nous prenons donc la décision de remplacer `Pepin()` dans l'interface par `contientPepin()`. 

</Container>

<br>

<a href="https://i.imgur.com/c9cXKxz.png">
    <img src="https://i.imgur.com/c9cXKxz.png">
</a>

<br>
<br>

`Fruit` et `Panier` suivent le paterne _Composite_ et interfacent avec `Client` via `Component`.

Suivant le `Fruit` ou le `Panier` créé, on souhaite altérer l'affichage de leur méthode `toString` sans modifier directement le corps de la méthode car certains objets pourraient toujours utiliser cette version de la méthode. C'est ce que permet de faire la classe `Decorator` qui implémente `Component`, la même interface que `Fruit` et `Panier` en apportant les altéations souhaitées dans sa définition des méthodes `toString` et `contientPepin`.

En passant au constructeur de `Decorator` l'objet à altérer ainsi qu'un `Style`, on obtient un objet `Fruit` ou `Panier` qui est emballé dans un `Decorator`. Ainsi, par exemple, si on appelle la méthode `toString` sur l'objet `Decorator` instianciée avec un `Fruit` et un `Style.chevrons` nous aurons une version décorée avec les attributs du `Style` de l'affichage du fruit.

<Container type="info">

`Style` est une **enum** qui contient les différentes possibilités de customisation applicable par un `Décorator`.

</Container>

<Spoiler tag="Alternative">

<br>

Il est possible d'imaginer une version dans laquelle `Decorator` est abstraite (`BaseDecorator`). L'avantage de cette variante serait de ne plus avoir à passer un argument du type `Style` en plus du `Component` lors de l'instanciation d'un `Decorator`.

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

<a href="https://i.imgur.com/RIFORu1.png">
    <img src="https://i.imgur.com/RIFORu1.png">
</a>

<br>
<br>

Le paterne _State_ permet ici à la méthode `traiter()` d'une instance de `Commande` de se comporter différement en fonction de son état. 

`Commande` contient un attribut de type `State` qui référence son état présent. `State` est l'interface entre `Commande` et les différents états qu'elle peut prendre. Cette interface est dans le cas présent une classe abstraite car cela permet de faire remonter l'attribut `commande` que référencent tous les états. 

C'est l'attribut `commande` des objects dérivés de `State` qui permet à la methode `traiter` d'avoir un comportement dynamique. En effet, lors de l'instanciation d'une nouvelle commande, cette dernière va directement initialiser son attribut `state` avec une instance de son premier état (`StateAttente`) en se passant elle même en argument du constructeur. 

À partir de là, chaque appel à la méthode `traiter` de la commande appelle la méthode `traiter` de son état courant. Chaque re-définition de `traiter` dans chacun des objets dérivés de `State` est spécifique et assure la transition d'état à la fin de son éxécution en appelant la méthode `setState` de la commande (via l'attribut `commande` de l'état) jusqu'à arriver dans l'état final.

Ce mécanisme est opaque au client qui se contente d'instancier un objet de type `Commande` et d'ensuite appeler sa méthode `traiter` pour la faire "avancer" dans ses états. `setState` étant publique est appelable directement par le client ce qui lui permet de set à tout moment l'état d'une commande qui reprendra le cours de son cycle à partir du nouvel état.