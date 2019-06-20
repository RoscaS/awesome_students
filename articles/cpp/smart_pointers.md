---
title: Smart pointers et sémantique de déplacement
date: 2019-08-06
author: Sol
sidebar: auto
project: false
hide: false
---

Sources:
* [learncpp.com](https://www.learncpp.com/cpp-tutorial/15-1-intro-to-smart-pointers-move-semantics/)
* [inivoo](https://blog.invivoo.com/introduction-a-la-gestion-automatique-de-la-memoire-en-c11/)

<br>



---

Considérons la fonctions suivante:

```cpp
void uneFonction() {
    Ressource *ptr = new Ressource;
    // Traitement
    delete ptr;
}
```

Et la classe `Ressource`:

```cpp
class Ressource {
public:
   Ressource() { std::cout << "Ressource acquise!\n"; }
   ~Ressource() { std::cout << "Ressource détruite!\n"; }
   void disBonjourKevin() { std::cout << "Bonjour Kevin"; }
};
```

* Qu'est-ce qui pourrait mal se passer ? Nous avons un `delete` à la fin, tout va bien.
* Really ?

---

```cpp
void laMemeFonction() {
    Ressource *ptr = new Ressource;
    int x;
    std::cout << "Entrez un entier: ";
    std::cin >> x;
    
    if (x == 0) return; // Oups...
    ptr->disBonjourKevin();
    
    delete ptr;
}
```

---

```cpp
void uneAutreFonction() {
    Ressource *ptr = new Ressource;
    int x;
    std::cout << "Entrez un entier: ";
    std::cin >> x;

    if (x == 0) throw 0; // Oups...
    ptr->disBonjourKevin();

    delete ptr;
}
```

---

Si l'utilisateur rentre un entier != 0:

```
Ressource acquise!
Bonjour Kevin
Ressource détruite!
```

Si l'utilisateur fait le con:

```
Ressource acquise!
```

... Vous perdez votre job.

* C'est ce qu'on appelle en langage courant une fuite de mémoire.
* Ce problème est du au fait que les pointeurs n'ont pas de mécanisme inhérent pour nettoyer derrière elles.

---

## Les destructeurs c'est la vie

>One of the best things about classes is that they contain destructors that automatically get executed when an object of the class goes out of scope. 
> <span style="float: right">JayZ</span>

* Si on alloue de la mémoire dans le constructeur, on peut la désallouer dans le destructeur
* Assure la désallocation de la mémoire à la destruction
* Tout le temps
* Peu importe le cas...

---

## Une classe intelligente

* Son job: Contenir un pointeur qu'on lui passe à la construction.
* Son second job: Désallouer le pointeur quand l'instance de cette classe sort de son contexte d'initialisation.

Une telle classe assurerait le fait que lorsqu'elle sort de son contexte de création et est détruite, l'objet qu'elle contient le serait aussi.

---

```cpp
template<class T>
class Babysitter {
   T *ptr;
public:
   // Prends le pointeur à la construction
   Babysitter(T *ptr = nullptr) : ptr(ptr) {}

   // Le destructeur assure la desallocation
   ~Babysitter() { delete ptr; }

   // Surcharge le déreferencement et l'opérateur -> pour
   // permettre d'utiliser Babysitter comme un pointeur
   T &operator*() const { return *ptr; }
   T *operator->() const { return ptr; }
};
```

Mais quelle belle utilisatation du paterne *****

---

## Imagine un monde sans delete

```cpp
int main() {
    // Allocation de mémoire (new)
    Babysitter<Ressource> ressourceDansLaBabysitter(new Ressource);
    // Pas de delete
    return 0;
}
```

**Output:**
```
Ressource acquise!
Ressource détruite!
```

* Création dynamique d'un objet `Ressource` passé en argument du constructeur de la classe template `Babysitter`
* À partir de maintenant `ressourceDansLaBabysitter` possède (owns) cette `Ressource` (composition).
* Comme `ressourceDansLaBabysitter` est une variable locale et est dans le scope du main, à la fin de ce dernier, elle sera détruite (pas besoin de la delete).
* Comme `Babysitter` est une classe (wallah), pendant sa destruction, le destructeur de `Ressource` sera appelé.
* Mission accomplie pour notre classe intelligente.

---

Tant que les objets `Babysitter` sont instanciés dans un contexte local (et donc que la fin de ce contexte assure leur destruction) la ressource qu'elles gardent sont assurées d'être détruites elles aussi et ce, peu importe la façon dont se finit le contexte.

<br>

Une classe pareil est ce qu'on appelle un **smart pointer**. 

---

Reprenons notre exemple du début en remplaçant le "**row**" pointer par notre `Babysitter`:

```cpp
void uneFonction() {
    Babysitter<Ressource> ptr(new Ressource);
    int x;
    std::cout << "Entrez un entier: ";
    std::cin >> x;

    if (x == 0) throw 0; // Oups...
    std::cout << "Salut!\n"

    delete ptr;
}
```

Lors de l'utilisation, si l'utilisateur entre un entier != de zero:

```
Ressource acquise!
Bonjour Kevin
Ressource détruite!
```

Si il est toujours con:

```
Ressource acquise!
Ressource détruite!
```

... On garde notre job !

---

Cet exemple naif sert d'introduction et a de nombreux problèmes. Par exemple:

```cpp
Babysitter<Ressource> ressource1(new Ressource);
Babysitter<Ressource> ressource2(ressource1);

// ou
// Babysitter<Ressource> ressource3 = ressource1;
```

* Comme le cstr de copie et l'overload de l'oppérateur d'assignation ne sont pas faits, le bon CPP le fait pour nous... Tout aussi naivement que cet exemple d'introduction.
* À la sortie du scope de `ressource1`, la Ressource qu'il contient est détruite (well done bruh).
* A la sortie du scote de `ressource2`, la Ressource qu'il croit contenir est encore détruite.

---
<br>

![Image](https://i.imgur.com/jrpjAu1.png)

---

Le code suivant nous mènerait à un résultat similaire:

```cpp
void jePrendsDesValeurs(Babysitter<Ressource> ressource) { }

int main() {
    Babysitter<Ressource> ressource1(new Ressource);
    jePrendsDesValeurs(ressource1);

    return 0;
}
```

Ici `ressource1` serait passé par valeur (et donc copié) lors de l'appel de `jePrendsDesValeurs` et 

---

<br>

![Image](https://i.imgur.com/jrpjAu1.png)

---

Une fausse bonne idée serait d'explicitement définir un constructeur de copie et une surcharge de l'oppérateur de copie et de les delete:

```
Babysitter(const Ressource&) = delete;
```

... et donc d'empecher la possiblité de copier ce qui aurait pour effet de résoudre le problème du passage par valeur (Ce qui fondamentalement n'est pas une mauvaise idée car nous ne devrions probablement pas passer ces objets par valeur) ... mais comment ferions nous alors pour retourner nos `Babysitter` ?

```cpp
??? buildRessource() {
    Ressource *r = new Ressource;
    return Babysitter(r);
}
```

---

* Par référence ? Non, la `Babysitter` locale serait détruite à la fin de la fonction et l'appelant, tel mon grand père se retrouverait avec le pointeur qui pendouille (dangling pointer)

![Image](https://i.imgur.com/ufQlDuA.png)

* Par adresse ? Et oublier de le delete plus tard ? Go home, you're drunk.
* Il ne reste que par valeur... mais on tourne en rond.

**Think outside the box kid**

On pourrait redéfinir le constructeur de copie et surcharger l'oppérateur d'assignation pour les faire faire des copies profondes, ça nous assurerait qu'il n'y ait pas deux pointeurs qui pointent sur le même objet.

**Ok, my bad, get back in your box and stop thinking**

---

## Sémantique de déplacement (move)

Et si à la place d'avoir notre constructeur de copie et l'oppérateur d'assignation qui copient le pointeur (sémentique de copie), ces derniers se contentaient de changer le propriétaire du pointeur contenu dans la `Babysitter`.

Cette idée est au coeur du concepte de la sémantique de déplacement.

La sémantique de déplacement (par opposition à la sémantique de copie) veut dire qu'une classe transfère l'_ownership_ d'un objet à la place d'en faire une copie.

---

Pimpons notre `Babysitter`:

```cpp
template<class T>
class Babysitter {
   T *ptr;
public:
   Babysitter(T *ptr = nullptr) : ptr(ptr) {}
   ~Babysitter() { delete ptr; }

   // Cstr de copie qui implémente la sémentique de déplacement
   Babysitter(Babysitter& other) { // pas de const !
       ptr = other.ptr; // transfère le pointeur de la source à this
       other.ptr = nullptr; // source ne possède plus le pointeur
   }

   // Op d'assignation qui implémente la sémantique de déplacement
   Babysitter& operator=(Babysitter& other) { // pas de const !
       if (&other == this) return *this;
       delete ptr; // desalloue un eventuel pointeur contenu dans ptr
       ptr = other.ptr; // transfère le pointeur de la source à this
       other.ptr = nullptr; // source ne possède plus le pointeur
       return *this;
   }
   
   bool isNull() const { return ptr == nullptr; }
   T &operator*() const { return *ptr; }
   T *operator->() const { return ptr; }
};
```

---

```cpp
Babysitter<Ressource> r1(new Ressource);
Babysitter<Ressource> r2;

std::cout << "r1 est: " << (r1.isNull() ? "nul" : "pas nul") << "\n";
std::cout << "r2 est: " << (r2.isNull() ? "nul" : "pas nul") << "\n";

std::cout << "Changement de propriétaire\n"; 
r2 = r1; // r2 est maintenant propriétaire de la ressource

std::cout << "r1 est: " << (r1.isNull() ? "nul" : "pas nul") << "\n";
std::cout << "r2 est: " << (r2.isNull() ? "nul" : "pas nul") << "\n";
```

**Output**:

```
Ressource acquise!
r1 est: pas nul
r2 est: nul
Changement de propriétaire
r1 est: nul
r2 est: pas nul
Ressource détruite!
```

---

Mini conclusion
* Expliquer que ce qu'on a fait c'est un truc qui s'est fait gicler de la STL car c'est de la merde
* Expliquer en deux mot que mtnt on implémente plus comme ça la sémentique de déplacement
* Leur dire d'aller chercher sur google pour la forme
* Les féliciter car ils ont appris un concepte fondamental du cpp modèrne malgré tout

Enchainer sur une courte explication concernant `unique_ptr`, `shared_ptr` et `weak_ptr`.

Enchainer sur les spécificités des Qptr.
