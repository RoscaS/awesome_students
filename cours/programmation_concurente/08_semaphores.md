---
title: "Semaphores"
date: 2018-12-13
author: Sol
sidebar: auto
project: false
---

## Sources

* [Little Book Of Semaphores](http://greenteapress.com/semaphores/LittleBookOfSemaphores.pdf)

## Rappels

* **Serialization**: Event **A** must happen before Event **B**.
* **Mutex**: Event **A** and Event **B** must not happen at the same time.

### Atomicité
* Suppose that **100** threads run the following program concurrently:
    ```py
    for i in range(100):
        temp = count
        count = temp + 1
    ```
    * What is the largest possible value of `count` after all threads have completed ? $100 \cdot 100 = 10000$ 
    * What is the smallest possible value ? Hard to say


## Semaphores

A semaphore is like an integer, with three différences:

1. When you create the semaphore, you can initialize its value to any integer, but after that the only operations you are allowed to perform are increment and decrement. **You cannot read the current value of the semaphore**.
2. When a thdread decrements the semaphore, **if the result is negative**, the thread blocks itseld and cannot continue until another thread increments the semaphore.
3. When a thread increments the semaphore, if there are other threads waiting, one og the waiting threads gets unblocked.

<br>

To say that a thread blocks itself (or simply **blocks**) is to say that it notifies the scheduler that it cannot proceed. The scheduler will prevent the thread from running until an event occurs that causes the thread to **wake**.

<Container type="info">

* In general, there is no way to know before a thread decrements a semaphore wheter it will block or not (in specific cases you might be able to prove that it will or will not).
* After a thread increments a semaphore and another thread gets woken up, both threads continue tunning concurrently. THere is no way to know which thread, if either, will continue immediately.
* When you signal a semaphore, you don't necessarily know whether another thread is waiting, so the number of unblocked threads may be zero or one.

</Container>

### Syntaxe

```py
sem.signal() # ++ (V)
sem.wait()   # -- (P)
```

```c
sem_post(&sem); // ++ (V)
sem_wait(&sem); // -- (P)
```

That means:
```
sem.increment_and_wake_a_waiting_process_if_any()
sem.decrement_and_block_if_the_result_is_negative()
```

### Why semaphores?
We don't need semaphores to solve synchronization problems but there are some advantages to using them:
* Semaphores impose deliberate constraints that help programmers avoid erros.
* Solutions using semaphores are ofthen clean and organized making it easy to demonstrare their correctness.
* Semaphores can be implemented efficiently on many systems, so solutions that use semaphores are portable and usually efficient.

## Basic synchronization patterns

### Signaling

One thread sends a signal to another to indicate that something has happened. Signaling makes it possible to guarrantee that a section of code in one thread will run before a section of code in another thread. **It solves the serialization problem**.

<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

**Thread A**
```
statement a1
sem.signal ()
```

</template>
<template slot="right">

**Thread B**
```
sem.wait()
statement b1
```

</template>
</Col>

The word `statement` represents an arbitrary program statement and sem have an initial value of 0. If thread **B** gets to the `wait` statement first, it will find the initial value, zero and it will block. Then when thread **A** signals, thread **B** proceeds. Similarly if thread **A** gets to the signal first, then the value of the semaphore will be incremented, and when thread **B** gets to the wait, it will proceed imediately. **Either way, the order of _a1_ and _b1_ is guaranteed.**

### Rendez vous
Generalized version of the signal pattern so that it works both ways. **A** has to wait for **B** and vice versa. We want to guarantee that _a1_ happens before _b2_ and _b1_ happens before _a2_: 

* Both semaphores are initialised at 0

<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

**Thread A**
```
statement a1
a_arrived.signal()
b_arrived.wait()
statement a2
```

</template>
<template slot="right">

**Thread B**
```
statement b1
b_arrived.signal()
a_arrived.wait()
statement b2
```

</template>
</Col>

<Spoiler tag="implementation">

```c
sem_t a_arrived;
sem_t b_arrived;

void *T1(void *arg) {
    printf("a1\n");
    sem_post(&a_arrived);

    sem_wait(&b_arrived);
    printf("a2\n");
}

void *T2(void *arg) {
    printf("b1\n");
    sem_post(&b_arrived);

    sem_wait(&a_arrived);
    printf("b2\n");
}

int main(int argc, char *argv[]) {
    pthread_t a, b;
    sem_init(&a_arrived, 0, 1); // a_arrived = 1
    sem_init(&b_arrived, 0, 1); // b_arrived = 1

    sem_wait(&a_arrived); // a_arrived = 0
    sem_wait(&b_arrived); // b_arrived = 0

    pthread_create(&a, NULL, T1, NULL);
    pthread_create(&b, NULL, T2, NULL);

    pthread_join(a, NULL);
    pthread_join(b, NULL);

    return 0;
}
```

</Spoiler>

<Container type="danger" header="Deadlock">

<Col proportions="6/6" vAlign="0">
<template slot="left">

**Thread A**
```
statement a1
b_arrived.signal()
a_arrived.wait()
statement a2
```

</template>
<template slot="right">

**Thread B**
```
statement b1
a_arrived.signal()
b_arrived.wait()
statement b2
```

</template>
</Col>

</Container>

### Mutex

A second common use for semaphores is to enforce **mutual exclusion**. They are used to **controle concurrent access to shared variables**. The mutex guarantees that only one thread accesses the shared variable at a time.

<Container type="info">

A **mutex** is like a **token** that passes from one thread to another, allowing one thread at a time to proceed. For example in _The Lord of the Flies_ a group of kids use a little statue as **mutex**. In order to speak, you have to hold the statue.

</Container>

**Puzzle** Add semaphores to the following to enforce mutual exclusion to the shared variable count:

<Col proportions="6/6" vAlign="0">
<template slot="left">

**Thread A**
```py
count = count + 1
```


</template>
<template slot="right">

**Thread B**
```py
count = count + 1
```


</template>
</Col>

<br>
<br>

`mutex` is initialized with value 1

<Col proportions="6/6" vAlign="0">
<template slot="left">


**Thread A**
```py
sem.wait()
    # critical section
    count = count + 1
sem.signal()
```

</template>
<template slot="right">


**Thread B**
```py
sem.wait()
    # critical section
    count = count + 1
sem.signal()
```

</template>
</Col>

Since `mutex` is initially 1, whichever thread gets to the `wait` first will be able to proceed immediately. Of course, the act of waiting on the semaphore has the effect of decrementing it, so the second thread to arrive will have to wait until the first `signal`.

<Container type="info" header="Knowledge">

Here, both threads are running the same code. This is colled a **symetric** solution. If the threads have to run different code, the solution is **asymmetric**.

**Symetric** solutions are often easier to generalize. In this case, the mutex solution can handle any number of concurrent threads without modification. As long as every thread waits before performing an update and signals after.

</Container>


<Spoiler tag="implementation">

**Variante 1**
```c
sem_t mutex;
int count = 0;

void *T1(void *arg) {
    sem_wait(&mutex);
    count ++;
    sem_post(&mutex);
}

void *T2(void *arg) {
    sem_wait(&mutex);
    count ++;
    sem_post(&mutex);
}

int main(int argc, char *argv[]) {
    pthread_t a, b;
    sem_init(&mutex, 0, 1);

    pthread_create(&a, NULL, T1, NULL);
    pthread_create(&b, NULL, T2, NULL);

    pthread_join(a, NULL);
    pthread_join(b, NULL);
    printf("count: %d\n", count);
    return 0;
}
```

**Variante 2**

```c
sem_t mutex;
int count = 0;


void *T(void *arg) {
    sem_wait(&mutex);
    count ++;
    sem_post(&mutex);
}

int main(int argc, char *argv[]) {
    pthread_t a, b;
    sem_init(&mutex, 0, 1);

    pthread_create(&a, NULL, T, NULL);
    pthread_create(&b, NULL, T, NULL);

    pthread_join(a, NULL);
    pthread_join(b, NULL);
    printf("count: %d\n", count);
    return 0;
}
```

</Spoiler>

#### Critical section
Often the code that needs to be protected by a **mutex** is called the **critical section**. We can think of it as a **room**, and **only one thread is allowed to be in the room at time**. In this metaphor, **mutexes** are called **locks**, and a thread is said to lock the mutex before entering and unlock it while exiting.

### Multiplex
Generalizing the previous solution so that it allows multiple threads to run in the critical section at the same time **but it enfoces an upper limit on the number of concurrent threads**. No more than $n$ threads can run in the critical section at the same time:


With the semaphore initialized with value $n$.
```
multiplex.wait()
    # critical section
multiplex.signal()
```

What happens if the critical section is occupied and more than one thread arrives? Of course, what we want is for all the arrivals to wait. This solution does exactly that. Each time an arrival joins the queue, the semaphore is decremented, so that the value of the semaphore (negated) represents the number of threads in queue. When a thread leaves, it signals the semaphore, incrementing its value and
allowing one of the waiting threads to proceed.
Thinking again of metaphors, in this case I f
