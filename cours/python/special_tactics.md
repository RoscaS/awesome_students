---
title: Special Tactics
date: 2019-02-21
author: Sol
sidebar: auto
project: false
hide: false
---

##  En vrac

```py
jours = "lundi mardi mercredi jeudi vendredi".split()
```

## Comprehension

### Lists

```py

RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()
SUITS = '♣ ♢ ♡ ♠'.split()

# Double iterator
deck = [PlayingCard(r, s) for s in SUITS for r in RANKS]
```