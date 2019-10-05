---
title: Modulo
date: "2019-10-05"
author:  "Sol"
sidebar: auto
project: false
hide: false
---

## Rappel

|      |                                                                        |     |
| ---- | ---------------------------------------------------------------------- | --- |
| $2$  | **Unité** est **pair**                                                 |     |
| $3$  | **Somme** de ses chiffres **multiple de $3$**                          |     |
| $4$  | Nombre formé par **ses deux derniers** chiffres divisible **par 4**    |     |
| $5$  | **Unité** est $0$ ou $5$                                               |     |
| $6$  | **Pair** et divisible par **3**                                        |     |
| $7$* |                                                                        |     |
| $8$  | Nombre formé par ses **trois derniers chiffres** est **multiple de 8** |     |
| $9$  | **Somme** des ses chiffres **multiple de 9**                           |     |


\* Un nombre est divisible par $7$ si en **soustrayant** et en **additionnant** **alternativement** chaque **tranche de trois** chiffres de **droite à gauche** le résultat est multiple de $7$:

* $65\;456\;802$ est divisible par $7$?
* $802 - 456 + 65 = 413$ 
* $413 / 7 = 59$
* <st c="g">$\Rightarrow 65\;456\;802$ est divisible par $7$</st>


## Petit théorème de Fermat

Soit $p$ un nombre premier et $a$ un entier, alors $a^p \equiv a(mod\; p)$
  * $6^7 \equiv 279\;936 \equiv 6(mod\; 7)$

Soit $p$ un nombre premier et $a \in \{1,2,...,p-1\}$, alors $a^{p-1} \equiv 1 (mod\;p)$ 
  * $3^6\equiv 726 \equiv 1 (mod\;7)$
  * $6^6\equiv 46\;656 \equiv 1 (mod\;7)$
  * $13^{18} (mod\;19) \equiv 1(mod\;19)$
  * $13^{36} (mod\;19) \equiv 13^{18 \cdot 2} \equiv (13^{18})^2 \equiv 1^2 \equiv 1 (mod\;19)$
  * $13^{39} (mod\;19) \equiv 13^{18\cdot 2 + 3} \equiv (13^{18})^2 +13^3 \equiv 1^2 \cdot 2197 \equiv 12 (mod\; 19)$ 

Soit $p$ un nombre premier et $a$ un entier, si $p$ n'est **pas** multiple de $a$, alors  $a^p \equiv a(mod\; p)$

## Modulo inverse et division modulaire

### Existence d'un inverse

Un élément $x$ de $GF(n)$ a un inverse appelé $x^{-1}$ ssi $x$ et $n$ sont *co-primes*. Autrement dit si $gcd(x, n) = 1$

* $a^{-1} (mod\;n)$ équivaut à résoudre: $\;ax = 1 (mod\;7)$

**Exemples**:
* $3^{-1} = 5 (mod\;7)$
  * comme $3\cdot 5 = 1 (mod\;7)$
* $2^{-1} = 4 (mod\;7)$
  * comme $2\cdot 4 = 1 (mod\;7)$

### Division

La division est définie comme une multiplication avec l'inverse:
* $\displaystyle \frac{x}{y} (mod\; n) = x \cdot y^{-1} (mod\;n)$

<st c="r">... et n'est pas définie si $y^{-1}$ n'existe pas.</st> $\Rightarrow gcd(y, n) \neq 1$ 

**Exemples**:

* $\displaystyle \frac{2}{3} = 2\cdot3^{-1} = 2\cdot 5 = 3 (mod\;7)$
  * comme $3\cdot 5 = 1 (mod\;7)$
* $\displaystyle \frac{4}{3} = 4\cdot3^{-1} = 4\cdot 5 = 6 (mod\;7)$
  * comme $3\cdot 5 = 1 (mod\;7)$
* $\displaystyle \frac{2}{5} = 2\cdot5^{-1} = 2\cdot 3 = 6 (mod\;7)$
  * comme $5\cdot x = 1 (mod\;7)$

## Exercices

### Exercise 1
* $3+4+5\equiv 1 \quad (mod\;11)$
* $3+4+5\equiv 0 \quad (mod\;12)$
* $6\cdot 7\equiv 9 \quad (mod\;11)$
* $6\cdot 7\equiv 6 \quad (mod\;12)$
* $6^{10}\equiv 1 \quad (mod\;11)$
* $6^{10}= 6^{2}\cdot6^{8}\equiv 0 \quad (mod\;12)$
* $6^{11}= 6^{2}\cdot6^{9}\equiv 0 \quad (mod\;12)$
* $3-7\equiv  7\quad (mod\;11)$
* $2-7-9\equiv 10 \quad (mod\;12)$
* $6(-9)\equiv 1 \quad (mod\;11)$
* $7(-3)\equiv 3 \quad (mod\;12)$
  
### Exercise 2
* $6^{1010}=(6^{10})^{101}=1 \quad (mod\;11)$
* $n^{p\cdot10}=(n^{10})^{p} = 1 \quad (mod\;11)$
* $\quad " \quad \quad " \quad \quad "$ 
* $\quad " \quad \quad " \quad \quad "$ 
* $\quad " \quad \quad " \quad \quad "$ 
* $\quad " \quad \quad " \quad \quad "$ 
* $6^{1011}=6^{1011}\cdot6=6 \quad (mod\;11)$
* $6^{3024}=6^{1010\cdot3+4}=6^{1010}\cdot6^2\cdot6^2\equiv 9 \quad(mod\;11)$

### Exercise 3
* $3^{-1}=4 \quad\quad(mod\;11) \quad = \emptyset \quad (mod\;12) \quad gcd(3,12) \neq 1$
* $5^{-1}=9 \quad\quad(mod\;11) \quad = 5 \quad (mod\;12)$
* $7^{-1}=8 \quad\quad(mod\;11) \quad = 7 \quad (mod\;12)$
* $2^{-1}=6 \quad\quad(mod\;11) \quad = \emptyset \quad (mod\;12) \quad gcd(2,12) \neq 1$
* $6^{-1}=2 \quad\quad(mod\;11) \quad = \emptyset \quad (mod\;12) \quad gcd(6,12) \neq 1$
* $10^{-1}=10 \quad(mod\;11) \quad = \emptyset \quad (mod\;12) \quad gcd(10,12) \neq 1$



### Exercise 4
* $4\cdot3^{-1}=4\cdot4=5 \quad(mod\;11)$
* $2\cdot3^{-1}=2\cdot4=8 \quad(mod\;11)$
* $10\cdot7^{-1}=10\cdot8=3 \quad(mod\;11)$
* $7\cdot2^{-1}=7\cdot6=9 \quad(mod\;11)$
* $3\cdot9^{-1}=3\cdot5=4 \quad(mod\;11)$
* $7\cdot10^{-1}=7\cdot10=4 \quad(mod\;11)$
* $7\cdot8^{-1}=7\cdot7=5 \quad(mod\;11)$
* $4\cdot3^{-1}=\emptyset\quad(mod\;12)$
* $2\cdot5^{-1}=2\cdot5=10 \quad(mod\;12)$
* $8\cdot7^{-1}=8\cdot7=8 \quad(mod\;12)$
* $9\cdot2^{-1}=\emptyset\quad(mod\;12)$
* $9\cdot10^{-1}=\emptyset\quad(mod\;12)$
* $7\cdot8^{-1}=\emptyset\quad(mod\;12)$
* $5\cdot9^{-1}=\emptyset\quad(mod\;12)$


### Exercise 5
* $\sqrt{5}=4;7 \quad(mod\;11)$
* $\sqrt{3}=5;6 \quad(mod\;11)$
* $\sqrt{9}=8;3 \quad(mod\;11)$
* $\sqrt{4}=9;2 \quad(mod\;11)$
* $\sqrt{1}=10;1 \quad(mod\;11)$
* $\sqrt{6}= \emptyset \quad(mod\;11)$ 

### Exercise 6
* $log_{2}(3)=8\quad(mod\;11) \quad\quad 2^{8}=3\quad(mod\;11)$
* $log_{2}(4)=2\quad(mod\;11) \quad\quad 2^{2}=4\quad(mod\;11)$
* $log_{2}(5)=4\quad(mod\;11) \quad\quad 2^{4}=5\quad(mod\;11)$
* $log_{2}(6)=9\quad(mod\;11) \quad\quad 2^{9}=6\quad(mod\;11)$
* $log_{2}(7)=7\quad(mod\;11) \quad\quad 2^{7}=7\quad(mod\;11)$
* $log_{2}(9)=6\quad(mod\;11) \quad\quad 2^{6}=9\quad(mod\;11)$
* $log_{2}(10)=5\quad(mod\;11) \quad\quad 2^{5}=10\quad(mod\;11)$
* $log_{5}(3)=2 \quad(mod\;11) \quad\quad 5^{2}=3\quad(mod\;11)$
* $log_{5}(4)=3 \quad(mod\;11) \quad\quad 5^{3}=4\quad(mod\;11)$
* $log_{5}(9)=4 \quad(mod\;11) \quad\quad 5^{4}=9\quad(mod\;11)$
* $log_{5}(5)=6 \quad(mod\;11) \quad\quad 5^{6}=5\quad(mod\;11)$
* $log_{2}(8)=3 \quad(mod\;11) \quad\quad 5^{3}=8\quad(mod\;11)$


### Exercise 7
```python
lambda z, b, k, n: pow(z, b**k, n)
```