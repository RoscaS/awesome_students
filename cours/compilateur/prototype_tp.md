---
title: Prototype projet
date: 2019-11-15
author: "Nathan, Sol"
sidebar: auto
project: false
hide: false
---

```
{
    Poule(i"<<interface>>"),
    [
        "+ a: int",
        i"+ a: int",
        b"+ ce que je veux",
        ib"+ c"
    ],
    [
        "+ coucou(a: int, b: float): void",
        i"+ coucou(a: int, b: float): void",
        ib"+ coucou(a: int, b: float): void",
    ]
}

{Poney, ["private age: int", b":-)"]}

{ Nanimal(i"") }

{ Poupouce }

---

Nanimal <-- Poney,
Nanimal <-- Poule,
Poule <-- Poupouce,
```
