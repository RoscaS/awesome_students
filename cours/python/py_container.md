---
title: Python containers
date: 2019-03-03
author: Sol
sidebar: auto
project: false
hide: false
---

## Sources
* [zestdesavoir](https://zestedesavoir.com/tutoriels/954/notions-de-python-avancees/1-starters/1-containers/)
## Interface Container

```py
class MyList:
	def __init__(self, value=()):
		self.internal = list(value)

	def __len__(self):
		return len(self.internal)

	def __getitem__(self, key):
		return self.internal[key]

	def __setitem__(self, key, value):
		self.internal[key] = value

	def __delitem__(self, key):
		del self.internal[key]

```

```py
>>> numbers = MyList('123456')
>>> len(numbers)
6
>>> numbers[1]
'2'
>>> numbers[1] = '0'
>>> numbers[1]
'0'
>>> del numbers[1]
>>> len(numbers)
5
>>> numbers[1]
'3'
```

## Slices
Le slice peut prendre jusqu’à 3 arguments entre crochets:

* **Start** (default: 0) 
* **Stop** (default: fin de la liste). **L’élément correspondant à cet indice est exclu.**
* **Step** (default: 1)

```py
>>> letters = ('a', 'b', 'c', 'd', 'e', 'f')
>>> letters[0:4]
('a', 'b', 'c', 'd')
>>> letters[1:-2]
('b', 'c', 'd')
>>> letters[::2]
('a', 'c', 'e')

>>> letters = ['a', 'b', 'c', 'd', 'e', 'f']
>>> letters[::2] = 'x', 'y', 'z'
>>> letters
['x', 'b', 'y', 'd', 'z', 'f']
>>> del letters[0:3]
>>> letters
['d', 'z', 'f']
```

Ce sont les 3 mêmes méthodes __getitem__, __setitem__ et __delitem__ de l'interface Container qui sont appelées lors des accès. Cela signifie que la classe `MyList` est déjà compatible avec les slices.

Le paramètre key passé ne représente pas un nombre, mais est un objet de type slice :

```py
>>> s = slice(1, -1)
>>> 'abcdef'[s]
'bcde'
>>> 'abcdef'[slice(None, None, 2)]
'ace'
```

L’objet ainsi construit contient 3 attributs : start, stop, et step.

```py
>>> s = slice(1, 2, 3)
>>> s.start
1
>>> s.stop
2
>>> s.step
3
```