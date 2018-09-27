

---
title: Serie01
date: 2018-09-20
author: Michael
sidebar: auto
---
## Série 1

### Exercice 1.1: Estimation, filtrage

**a)**
* x(1) : 0,0,0
    * xmedian(1) = 0
* x(2) : 0,0,10
    * xmedian(2) = 0
* x(3) : 0,10,10
    * xmedian(3) = 10
* x(4) : 10,10,11
    * xmedian(4) = 10
* x(5) : 10,11,10 --> 10,10,11
    * xmedian(5) = 10
* x(6) : 11,10,18 --> 10,11,18
    * xmedian(6) = 11
* x(7) : 10,18,10 --> 10,10,18
    * xmedian(7) = 10
* x(8) : 18,10,10 --> 10,10,18
    * xmedian(8) = 10
* x(9) : 10,10,0 --> 0,10,10
    * xmedian(9) = 10
* x(10) : 10,0,-1 --> -1,0,10
    * xmedian(10) = 0
* x(11) : 0,-1,10 --> -1,0,10
    * xmedian(11) = 0
* x(12) : -1,-10,1 --> -10,-1,1
    * xmedian(12) = -1
* x(13) : -10,1,0 --> -10,0,1
    * xmedian(13) = 0
* x(14) : 1,0,1 --> 0,1,1
    * xmedian(14) = 1
* x(15) : 0,1,10
    * xmedian(15) = 1
* x(16) : 1,10,11
    * xmedian(16) = 10

*0,0,0,10,10,10,11,10,10,10,0,0,-1,0,1,1,10,11*

**b)**
Cela va diminuer l'amplitude des valeurs.

**c)**


**d)**

### Exercice 1.2: Estimation, filtrage

![image alt](https://i.imgur.com/D82CMOm.png)
