---
title: Shell sort
date: 2018-10-05
author: Sol
sidebar: auto
---

* Généralisation du tri par insertion.
* Contrairement au tri par insertion où les clés des éléments **adjacents** sont comparées, le Shell short compare les clés d'éléments **distants**.
* Si nous avons $n$ éléments à trier le <Def def='"pas" en francais'>**gap**</Def> aura une valeur $gap < n$.
* À chaque <Def def="passe ?">itération</Def> nous réduisons la valeur du **gap**. 
* Lors de la dernière itération le **gap** vaut 1.
* Un Shell sort avec un **gap** qui vaut 1 est tri par insertion.

## Lexique & légende

* **élément**: Peut être vu comme une case d'un tableau
* **clé**: Valeur d'un élément
* <i :class="p"/> pointeur
* <i :class="e"/> end

## Mise en place
Considérons le tableau **désordonné** suivant que nous souhaitons trier de façon croissante.

|         |       |       |       |       |       |       |       |       |       |
| ------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| index   | 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     |
| elément | 14    | 18    | 19    | 37    | 23    | 40    | 29    | 30    | 11    |

1. Ce tableau est composé de 9 éléments $\quad\Rightarrow\quad n=9$
   
2. Nous cherchons un **gap** $| gap < n \quad$ 

    avec $\quad gap = floor(\frac{n}{2}) = floor(4.5) = 4$

Un **gap** de 4 signifie que que si nous considérons l'élément à l'indexe 0 comme étant le premier de notre liste, alors:
* l'élément à l'indexe $0 + 4 = 4$ est le second élément
* l'élément à l'indexe $4 + 4 = 8$ est le troisième et dernier élément

|         |        |       |       |       |        |       |       |       |        |
| ------- | :----: | :---: | :---: | :---: | :----: | :---: | :---: | :---: | :----: |
| index   | **0**  | 1     | 2     | 3     | **4**  | 5     | 6     | 7     | **8**  |
| elément | **14** | 18    | 19    | 37    | **23** | 40    | 29    | 30    | **11** |

  
## Première itération
* $gap = 4$

Nous allons donc comparer les éléments à la gauche de <i :class="e"/> (**end**) avec un **gap** de 4:

|         | <i :class="p"/> |       |       |       | <i :class="p"/><i :class="e"/> |       |       |       |        |
| ------- | :-------------: | :---: | :---: | :---: | :----------------------------: | :---: | :---: | :---: | :----: |
| index   | **0**           | 1     | 2     | 3     | **4**                          | 5     | 6     | 7     | **8**  |
| elément | **14**          | 18    | 19    | 37    | **23**                         | 40    | 29    | 30    | **11** |


* 14 > 23 ? **False** 

Alors on se décalle d'une position vers la droite:

|         |        | <i :class="p"/> |       |       |        | <i :class="p"/><i :class="e"/> |       |       |        |
| ------- | :----: | :-------------: | :---: | :---: | :----: | :----------------------------: | :---: | :---: | :----: |
| index   | **0**  | 1               | 2     | 3     | **4**  | 5                              | 6     | 7     | **8**  |
| elément | **14** | 18              | 19    | 37    | **23** | 40                             | 29    | 30    | **11** |

* 18 > 40 ? **False**

Alors on se décalle d'une position vers la droite:

|         |        |       | <i :class="p"/> |       |        |       | <i :class="p"/><i :class="e"/> |       |        |
| ------- | :----: | :---: | :-------------: | :---: | :----: | :---: | :----------------------------: | :---: | :----: |
| index   | **0**  | 1     | 2               | 3     | **4**  | 5     | 6                              | 7     | **8**  |
| elément | **14** | 18    | 19              | 37    | **23** | 40    | 29                             | 30    | **11** |

* 19 > 29 ? **False**

Alors on se décalle d'une position vers la droite:

|         |        |       |       | <i :class="p"/> |        |       |       | <i :class="p"/><i :class="e"/> |        |
| ------- | :----: | :---: | :---: | :-------------: | :----: | :---: | :---: | :----------------------------: | :----: |
| index   | **0**  | 1     | 2     | 3               | **4**  | 5     | 6     | 7                              | **8**  |
| elément | **14** | 18    | 19    | 37              | **23** | 40    | 29    | 30                             | **11** |

* 37 > 30 ? **True**

Alors on échange les deux éléments:

|         |        |       |       | <i :class="p"/> |        |       |       | <i :class="p"/><i :class="e"/> |        |
| ------- | :----: | :---: | :---: | :-------------: | :----: | :---: | :---: | :----------------------------: | :----: |
| index   | **0**  | 1     | 2     | 3               | **4**  | 5     | 6     | 7                              | **8**  |
| elément | **14** | 18    | 19    | *30*            | **23** | 40    | 29    | 37                             | **11** |

::: warning Attention
Tout comme dans le tri par insertion, on devrait maintenant vérifier que la clé à l'élément d'indexe précédent n'est pas plus grand que celui de l'indexe actuel mais comme nous avons un **gap** de 4, l'élément d'indexe précédent est n'existe pas.
:::

On se décalle d'une position vers la droite:

|         |        |       |       |       | <i :class="p"/> |       |       |       | <i :class="p"/><i :class="e"/> |
| ------- | :----: | :---: | :---: | :---: | :-------------: | :---: | :---: | :---: | :----------------------------: |
| index   | **0**  | 1     | 2     | 3     | **4**           | 5     | 6     | 7     | **8**                          |
| elément | **14** | 18    | 19    | *30*  | **23**          | 40    | 29    | 37    | **11**                         |

* 23 > 11 ? **True**

Alors on échange les deux éléments:

|         |        |       |       |       | <i :class="p"/> |       |       |       | <i :class="p"/><i :class="e"/> |
| ------- | :----: | :---: | :---: | :---: | :-------------: | :---: | :---: | :---: | :----------------------------: |
| index   | **0**  | 1     | 2     | 3     | **4**           | 5     | 6     | 7     | **8**                          |
| elément | **14** | 18    | 19    | *30*  | **_11_**        | 40    | 29    | 37    | **_23_**                       |

Maintenant nous comparons avec l'élément à la position précédent (tout comme dans un tri par insertion quand on échange deux élément **mais en considérant le gap !**):

|         | <i :class="p"/> |       |       |       | <i :class="p"/> |       |       |       | <i :class="e"/> |
| ------- | :-------------: | :---: | :---: | :---: | :-------------: | :---: | :---: | :---: | :-------------: |
| index   | **0**           | 1     | 2     | 3     | **4**           | 5     | 6     | 7     | **8**           |
| elément | **14**          | 18    | 19    | *30*  | **11**          | 40    | 29    | 37    | **23**          |

* 14 > 11 ? **True**

Alors on échange les deux éléments:

|         | <i :class="p"/> |       |       |       | <i :class="p"/> |       |       |       | <i :class="e"/> |
| ------- | :-------------: | :---: | :---: | :---: | :-------------: | :---: | :---: | :---: | :-------------: |
| index   | **0**           | 1     | 2     | 3     | **4**           | 5     | 6     | 7     | **8**           |
| elément | **_11_**        | 18    | 19    | *30*  | **_14_**        | 40    | 29    | 37    | **23**          |

Comme **end** a atteint la fin du tableau, cela signifie que **la première itération est achevée**.

## Seconde itération

Pour cette seconde itération, nous réduisons le **gap** en utilisant la même formule que précédament: 

$gap = floor(\frac{gap}{2}) = floor(\frac{4}{2}) = 2$

| <i :class="p"/> |       | <i :class="p"/><i :class="e"/> |       |        |       |        |       |        |
| :-------------: | :---: | :----------------------------: | :---: | :----: | :---: | :----: | :---: | :----: |
| **0**           | 1     | **2**                          | 3     | **4**  | 5     | **6**  | 7     | **8**  |
| **11**          | 18    | **19**                         | *30*  | **14** | 40    | **29** | 37    | **23** |

* 11 > 19 ? **False**

Alors on se décalle d'une position vers la droite:


|        | <i :class="p"/> |        | <i :class="p"/><i :class="e"/> |        |       |        |       |        |
| :----: | :-------------: | :----: | :----------------------------: | :----: | :---: | :----: | :---: | :----: |
| **0**  | 1               | **2**  | 3                              | **4**  | 5     | **6**  | 7     | **8**  |
| **11** | 18              | **19** | *30*                           | **14** | 40    | **29** | 37    | **23** |

* 18 > 30 ? **False**

Alors on se décalle d'une position vers la droite:


|        |       | <i :class="p"/> |       | <i :class="p"/><i :class="e"/> |       |        |       |        |
| :----: | :---: | :-------------: | :---: | :----------------------------: | :---: | :----: | :---: | :----: |
| **0**  | 1     | **2**           | 3     | **4**                          | 5     | **6**  | 7     | **8**  |
| **11** | 18    | **19**          | *30*  | **14**                         | 40    | **29** | 37    | **23** |

* 19 > 14 ? **True**

Alors on échange les deux éléments:

|        |       | <i :class="p"/> |       | <i :class="p"/><i :class="e"/> |       |        |       |        |
| :----: | :---: | :-------------: | :---: | :----------------------------: | :---: | :----: | :---: | :----: |
| **0**  | 1     | **2**           | 3     | **4**                          | 5     | **6**  | 7     | **8**  |
| **11** | 18    | **_14_**        | *30*  | **_19_**                       | 40    | **29** | 37    | **23** |

Nous comparons avec l'élément à la position précédent **en considérant le gap**:

| <i :class="p"/> |       | <i :class="p"/> |       | <i :class="e"/> |       |        |       |        |
| :-------------: | :---: | :-------------: | :---: | :-------------: | :---: | :----: | :---: | :----: |
| **0**           | 1     | **2**           | 3     | **4**           | 5     | **6**  | 7     | **8**  |
| **11**          | 18    | **14**          | *30*  | **19**          | 40    | **29** | 37    | **23** |

* 11 > 14 ? **False**

Alors on reprend où on en était et on décalle d'une position vers la droite:

|        |       |        | <i :class="p"/> |        | <i :class="p"/><i :class="e"/> |        |       |        |
| :----: | :---: | :----: | :-------------: | :----: | :----------------------------: | :----: | :---: | :----: |
| **0**  | 1     | **2**  | 3               | **4**  | 5                              | **6**  | 7     | **8**  |
| **11** | 18    | **14** | *30*            | **19** | 40                             | **29** | 37    | **23** |

* 30 > 40 ? **False**

Alors on décalle d'une position vers la droite et ainsi de suite jusqu'à la fin du tableau.

**...**

À la fin de la seconde itération le tableau ressemblera à ça:

|        |       |        |       |        |       | <i :class="p"/> |       | <i :class="p"/><i :class="e"/> |
| :----: | :---: | :----: | :---: | :----: | :---: | :-------------: | :---: | :----------------------------: |
| **0**  | 1     | **2**  | 3     | **4**  | 5     | **6**           | 7     | **8**                          |
| **11** | 18    | **14** | *30*  | **19** | 37    | **23**          | 40    | **29**                         |

## Troisième itération

Pour la troisième itération, nous réduisons le **gap** en utilisant la même formule que précédament: 

$gap = floor(\frac{gap}{2}) = floor(\frac{2}{2}) = 1$

Comme notre **gap** vaut maintenant 1, nous avons affaire à un tri par insertion classique. À la fin de cette itération, notre tableau sera entièrement trié.



## Sources

* [Yusuf Shakeel youtube channel](https://www.youtube.com/watch?v=SCBf7aqKQEY)


<script>
  export default {
    computed: {
        // c() { return "far fa-arrow-to-bottom" }, // current
        p() { return "far fa-long-arrow-down" }, // pointer
        e() { return "far fa-level-down" }, // end
    },
  }
</script>

<style>
.fa-level-down {
    color: red !important;
}
</style>