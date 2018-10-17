---
title: Synchronisation, atomicité et exclusion mutuelle
date: 2018-10-14
author:  Sol
sidebar: auto
---

##  Problématique

Soit le programme suivant:

```C
int day, month, year;

void *func1(void *arg) {
    day = 28;
    month = 12;
    year = 1969;
    return NULL;
}

void *func2(void *arg) {
    day = 16;
    month = 3;
    year = 1953;
    return NULL;
}

int main (int argc, char* argv[]) {
    pthread_t t1, t2;
    pthread_create(&t1, NULL, func1, NULL);
    pthread_create(&t2, NULL, func2, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    printf("%d/%d/%d\n", day, month, year);
    return EXIT_SUCCESS;
}
```

L'issue de ce programme n'est pas déterministe sur ma machine (i7 8550U 4 coeurs/8 threads)
