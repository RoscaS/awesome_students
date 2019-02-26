---
title: Présentation des conteneurs
date: 2019-02-22
author: Sol
sidebar: auto
project: false
hide: false
---

## Liens
* [QtDoc](https://doc.qt.io/qt-5/containers.html)
* [Zetcode.com](http://zetcode.com/gui/qt5/containers/)
* [cleanqt.io](https://www.cleanqt.io/blog/exploring-qt-containers)
* [CodeImproved.net (old)](http://web.archive.org/web/20160902015144/http://blog.codeimproved.net/posts/qtl-stl.html)



---

## Qt Containers

* Des structures de données fournies par la librairie Qt

---

Mais on a déjà la STL, pourquoi en rajouter une couche ?

* En Qt on aime les **Q** QUi QPréfix les QChoses
* Conçues pour être plus:
  * QPerformantes
  * QLégères
  * QSécurisées
  * QFaciles à utiliser
* ... que les classes de la STL

---

```cpp
// Déclaration
QVector<QString> strings;

// Déclaration + initialisation
QVector<int> valeurs {1, 2, 3};

```

---

On peut mettre quoi dans un QConteneur?

* Un type affectable 
  * Type qui dispose d'un **oppérateur d'affectation** (`=`)
  * Respecte la forme canonique de **Coplien**

---

### Forme canonique de **Coplien**

On parle d'une **classe** qui respecte la forme canonique de Coplien:
* Constructeur par défaut
* Constructeur de copie
* Destructeur
* Opérateur d'affectation


```cpp
class Employee {
public:
  Employee() {}
  Employee(const Employee &other);
  Employee &operator=(const Employee &other);
private:
  QString myName;
  QDate myDateOfBirth;
};
```

---

On en connait des classes comme ça ?

* Les types simples
* Les types pointeurs
* La majorité des types de données de Qt:
  * `QString`
  * `QDate`
  * `QTime`
  * ...

---

Donc tous les types de Qt ?

NON !

Les classes dérivées de `QObject` ne respectent pas ces critères et donc, on ne peut pas définir de conteneurs de ces classes.

* QWidget
* QDialog
* QTimer

---

Et j'en fais quoi de mes QWidgets alors ?

**Qui a une idée ?**

* Conteneur de pointeurs vers des `QWidget`

```cpp
auto w = new QWidget{};
QVector<QWidget *> widgets;

widgets.push_back(w);
widgets.push_back(new QWidget{});

qDebug() << widgets.size() << "\n"; // => 2
```

---

Protip: `auto`

```cpp
// pointeur sur un QVecteur de pointeurs vers des QWidgets:
QVector<QWidget* > *widgets = new QVector<QWidget*>;

// Equivalent à:
auto widgets = new QVector<QWidget*>;

// pointeur sur une QMap de pointeurs de QWidgets:
QMap<QString, QWidget* > *des_boutons = new QMap<QString, QWidget* >;

// Equivalent à:
auto des_boutons = new QMap<QString, QWidget* >;
```

---

Il y a autre chose que le `QVecteur` ?

* `QList`
* `QLinkedList`
* `QStack`
* `QQueue`
* `QSet`
* `QMap`
* ...

---

### QList un QConteneur noble !

* D'après le cours, le plus utilisé des conteneurs
* Stock une liste de valeurs d'un type générique `<T>`
  * Autrement dit on remplace le `T` par un type...
* Peut être accédé de façon séquentiel avec un itérateur
* Peut être accédé de façon directe via un index

---

Comment l'utiliser ?

* `maListe.append(valeur)`: ajoute à la fin
* `maListe.prepend(valeur)`: ajoute au début
* `maListe.insert(idx, valeur)`: ajoute à l'index `idx`

---

Je peux l'utiliser avec mon super objet `Movie` ?

```cpp
class Movie {
  QString title;
  QDate releaseDate;
};
```

**Vous en dites quoi?**

* Oui !


Mais la forme canonique de Coplien alors?


---

### C++ est fort !

* Si on ne définit pas de constructeur par défaut, de constructeur par copie ou l'opérateur d'affectation
  * C++ le fait à notre place !
* Suffisant pour la classe `Movie`
* Ça n'aurait pas été le cas si la mémoire des membres avait été allouée dynamiquement !

---

Donc dans les `QVector` c'est `push_back()` pour ajouter un élément et puis dans `QList` c'est `append()` ? C'est un peu nul ça aussi...

**Ruse de sioux**:

```cpp
QVector<int> v;
v << 1 << 2 << 3;

QList<QString> l;
l << "un" << "deux" << "trois"; 
```

**Ne fonctionne pas avec les conteneurs de type hash (maps) !**


### Les itérateurs

Moyens de parcourir une `QList`:



```cpp
QList<QString> strings{"un", "deux", "trois"};

// for classique:
for (int i = 0; i < strings.size(); i++) {
    qDebug() << strings.at(i); // via methode `QList::at()`
    qDebug() << strings[i];    // `QList` surcharge "subscript" []
}

// foreach:
for (auto &s : strings) {
    qDebug() << s;
}
```

---

En plus de la `for` et de la `foreach` on peut itérer sur une QList avec deux types d'itérateurs:
* Itérateurs style Java
* Itérateurs style STL

---

### Itérateurs Java style

* `QListIterator`: lecture seule

```cpp
QList<QString> strings{"un", "deux", "trois"};
QListIterator<QString> i(strings);

while (i.hasNext()){
    qDebug() << i.next();
}
```

* `QMutableListIterator` lecture et écriture
```cpp
QList<int> lst{1, 2, 3};
QMutableListIterator<int> i(int);

while (i.hasNext()) {
    i.next()
    i.setValue(0)
}
```

---

Les deux itérateurs proposent des methodes comme `toBack()`, `hasPrevious()` et `previous()` qui permettent ce genre de follies:

```cpp
QList<QString> strings{"un", "deux", "trois"};
QListIterator<QString> i(strings);
i.toBack();

while (i.hasPrevious()){
    qDebug() << i.previous();
}
```

Et bien d'autres methodes encore qui n'attendent que vous dans la..... doc.

--- 

Bien sûr ils n'existent pas que pour les `QList`, les `QVecteurs` ont leurs `QVectorIterator` et `QMutableVectorIterator`.

---

### Spéciale dissident

```cpp
for(QListIterator<QString> j(strings); j.hasNext(); ) {
    qDebug() << j.next();
}
```


![Imgur](https://i.imgur.com/ZlYRn7C.gif)


---

### Itérateurs STL

* Compatible avec les algorithmes génériques de la STL
* **Vitesse d'exécution optimale**

De la même façon que pour les itérateurs java style, il en existe de deux types:

* Un pour la lecture et l'écriture

```cpp
QList<QString> strings {"UN", "DEUX", "TROIS"};
QList<QString>::iterator i;

for (i = strings.begin(); i != strings.end(); ++i) {
    *i = (*i).toLower();
}
```

* Un pour la lecture seule

```cpp
QList<QString>::const_iterator i;
for (i = strings.begin(); i != strings.end(); ++i) {
    qDebug() << *i;
}
```

---

Contrairement aux itérateurs Java style, ces itérateurs sont des pointeurs qui pointent directement sur les éléments de la liste !
* D'où le déréférencement
* Opérateurs unaires utilisables


---

### Listes associatives aka maps

bref des Hash quoi...

* clé / valeur
* Conteneur sans relation d'ordre
* Une clé référence une valeur

```cpp
QHash<QString, int> dict;
dict["poule"] = 3;
dict["cochon"] = 1;
dict.insert("meuh", 1);

qDebug() << dict["meuh"]; // => 1
qDebug() << dict.value("poule"); // => 3

// check existence:
qDebug() << dict.contains("poney"); // => false

qDebug() << dict.value("poney"); // => 0
qDebug() << dict.contains("poney"); // => false

// Création implicite:
qDebug() << dict["poney"]; // => 0
qDebug() << dict.contains("poney"); // => true
```

---

On peut même itérer dessus...

**Java style:**

```cpp
QHashIterator<QString, int> i(dict);
while (i.hasNext()) {
    i.next();
    qDebug() << "k: " << i.key() << " \tv: " << i.value();
}
```

**STL style:**
```cpp
QHash<QString, int>::const_iterator i;
for (i = dict.constBegin(); i != dict.constEnd(); ++i) {
    qDebug() << "k: " << i.key() << " \tv: " << i.value();
}
```

**output:**
```cpp
// k:  "cochon"  	v:  1
// k:  "poule"  	v:  3
// k:  "meuh"   	v:  1
```

---

Quelques autres methodes:

```cpp
QList<QString> keys = dict.keys();
QList<int> values = dict.values();

// protip:
auto keys = dict.keys();
auto values = dict.values();
```

---

### Tour d'horizon et Recapitulatif

---

### QList (linéaire)

* **Avantages**:
  * Insertions rapides aux extrémités
  * Accès rapide par itérateur et par index
* **Inconvénients**:
  * Insertions lentes en milieu de **longues** listes

---

### QLinkedList (linéaire)

* **Avantages**:
  * Insertions rapides (extrémités **et** milieu)
  * Accès rapide via itérateur
* **Inconvénients**:
  * Pas d'accès direct (pas d'index)
---

### QVector (linéaire)

* **Avantages**:
  * Insertions rapides à la fin
  * Accès rapide par itérateur et par index
  * Utilisation de mémoire contigüe
* **Inconvénients**:
  * Insertion moins rapides au début et au milieu
---

### QStringList (linéaire)

Dérivée de `QList<QString>`, possède des méthodes propres aux listes de strings 
* `filter()`
* `join()`
* `sort()`
* `split()`
* `replaceInStrings()`

---

### Conteneurs non linéaires

* `QSet`: Ensemble non ordonné
* `QMap` / `QMultiMap`: Liste associative **ordonnée**
* `QHash` / `QMultiHash`: Liste associative **non ordonnée** (plus rapide)

Les versions `Multi` des maps et des hashs permettent d'avoir des conteneurs en guide de valeur.