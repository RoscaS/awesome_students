---
title: Polymorphisme en C++
date: 2018-09-22
sidebar: auto
author: Sol
---

Ok, rien de plus facile contrairement à ce que les explications de 5 pages des divers cours et tutos tentent de nous faire croire. On oublie tout et on ne garde en tête que la phrase suivante:

>Le polymorphisme ça veut dire override une méthode dans une classe dérivée.
>> Explication du prof de Java: Un objet polymorphique c'est un objet qui peut être vu de plusieurs façons en fonction de ce qui arrange la situation.


Rien de plus rien de moins. On le fait tout le temps dans tous les languages et sans en faire tout un foin:

```cpp
class Animals {
public:
    void showClass() { cout << "Animals" << "\n"; }
};

class Poule : public Animals {
public:
    void showClass() { cout << "Poule" << "\n"; }
};

int main() {
    Poule p{"dolly"};
    p.showClass(); // => Poule
}
```


La même avec un pointeur:

```cpp
int main() {
  Animals *a;
  Poule p{};
  a = &p;
  a->showClass(); // => Animals
}
```

On reste calme et on lit la suite, c'est tout aussi simple.


## Early binding, late binding et méthodes virtuelles
Binding ça veut dire assigner, dans le présent contexte, on parle de bind la bonne méthode à un objet.

Le mécanisme utilisé par défaut par le compilateur est celui du **early binding**  (il fait le bind au moment de la compilation). Au moment de la compilation il détecte que `a` est un pointeur sur un objet de type `Animals` et lui bind tout naturellement les méthods d'`Animals` d'où l'output du précédent snippet.

Nous, on veut du **late binding** (bind dynamique). Pour forcer le compilateur à late bind notre méthode, on la préfixe dans la classe mère du mot clé `virtual` et c'est plié.

```cpp
class Animals {
public:
    virtual void showClass() { cout << "Animals" << "\n"; }
};

class Poule : public Animals {
public:
    void showClass() { cout << "Poule" << "\n"; }
};

int main() {
  Animals *a;
  Poule p{"Cot"};
  a = &p;
  a->showClass(); // => Poule
}
```
Comme `showClass` est maintenant une méthode virtuelle, le compilateur sait qu'il doit prendre en compte le type de l'objet  pointé au moment du call de `showClass` et qu'**il peut être d'un type dérivé** de celui qu'il a au moment de la déclartation du pointeur.

En gros, lors de l'appel de la méthode `showClass` d'une classe dérivée d' `Animales` la bonne méthode sera utilisée.

### implications

* Une méthode rendue virtuelle rend virtuelles toutes les dérivées de cette methode.

* Comme le compilateur n'opère le controle d'accès (privé, publique,...) qu'au moment de la compilation et non pas pendant l'execution. **Une méthode virtuelle poura donc appeler des méthodes ou des atributs qui lui seraient autrement interdits** (Au cas où vous avez pas remarqué c'est vachement bien ce que je viens de dire).

```cpp

class Animals {
public:
    virtual void showClass() { cout << "Animals" << "\n"; }
};

class Poule : public Animals {
private:
        void showClass() { std::cout << "Poule" << "\n"; }
};

int main() {
  Animals *a;
  Poule p{"Cot"};
  a = &p;
  a->showClass(); // => Poule
}
```
Ce qui nous amène à un autre paquet de mots qui font peur pour rien...

## Méthodes purement virtuelle
Également appellées **méthodes abstraites**.
C'est tout simplement une méthode qui a pour unique but d'activer le mécanisme de **late binding** dans ses classes dérivées. Elle n'a aucune utilité dans la classe (mère) où elle est définie et ne sera pas utilisable par une instance de cette classe. Pour marquer le coup, elle a une syntaxe simplifiée:

```cpp
  // ...
  virtual void showClass() = 0;
  // ...
```

Et quand on fait ça, ça nous amène au top des trucs trop polymorphiquement abstraits du virtuel: Dieu ou la...

## Classe abstraites
Qui en réalité est juste une classe avec une méthode qui utilise la syntaxe précédente **et rien de plus**, vraiment!

**Une classe avec une méthode abstraite devient une classe abstraite.** ok?

Et une classe abstraite c'est une classe qu'on ne peut pas instancier et qui est principalement une base pour ses classes dérivées en assurant le **late binding** de ses méthodes méthodes abstraites.

### Mais pourquoi?
Ok, supposons qu'on veut modéliser une entreprise. Cette entreprise est formé de developpeurs et de techniciens. Le logiciel qui gère le salaire pourrait ressembler à ça (ou pas):

```cpp
class Employe {
public:
    virtual int getSalary() = 0;
};

class Dev : public Employe {
    int salary;
public:
    Dev(int s) { salary = s; }
    int getSalary() { return salary + 500; }
};

class Techy : public Employe {
    int salary;
public:
    Techy(int t) { salary = t; }
    int getSalary() { return salary; }
};
```

```cpp
void main() {
    Dev d1(5000);
    Techy t1(3000);
    std::cout << d1.getSalary() << "\n"; // 5500
    std::cout << t1.getSalary() << "\n"; // 3000

    Employe *pd1;
    Employe *pt1;
    Dev d2{6000};
    Dev t2{4000};
    pd1 = &d2;
    pt1 = &t2;
    std::cout << pd1->getSalary() << "\n"; // 5500
    std::cout << pt1->getSalary() << "\n"; // 3000
}
```
La méthode `getSalary` dans la classe Employe est une **methode abstraite** et donc automatiquement la classe employé est **abstraite**. Comme la méthode `getSalary` est définie dan les deux classes filles d'`Employe`, notre méchanisme polymorphique marche et c'est la fête.

* Une **methode abstaite** est une méthode avec la syntaxe racourcie `... = 0`
* Une classe abstraite est une classe qui comporte au moins une **méthode abstraite**

### Précision
* Une sous classe d'une classe abstraite **doit** override la méthode abstraite de sa classe mère pour ne pas être à son tour une classe abstraite.
* Dans une classe abstraite, il peut y avoir d'autres fonctions et variables en plus de la methode abstraite.
* La moins connue **classe de base abstraite** c'est 100% une classe abstraite, juste une autre façon de l'appeler, aucune différence.

## Interface
Bon tant cas faire autant rendre toutes les méthodes de notre classe abstraite... abstraites, lui virer tous ses attributs et pouf nous voilà avec une interface. Une sous classe d'interface doit implémenter une définition pour toutes les méthodes abstraites de l'interface (mêre).

* Une interface est une classe sans attributs et uniquement des méthodes abstraites;

Voila, basta, go coder maintenant.

## Sources
* [codesdope.com](https://www.codesdope.com/cpp-virtual-and-abstract/)
* [learncpp.com](https://www.learncpp.com)

