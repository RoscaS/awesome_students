---
title: RSA
date: 2019-11-10
author: Sol
sidebar: auto
project: false
hide: false
---

## Exercice 1

$p = 3;\;q = 11;\; e = 7;\;M =$ <span style="color: green;"><b>$5$</b></span>

* $N = p \cdot q = 33$
* $\phi(N) = (p-1)(q-1) = 20$
* $d = e^{-1} = 3 \quad$ because $\quad 7 \cdot 3 = 1 (mod\;20)$
* Crypted text $= C = M^e (mod\;N) = 5^7 (mode\;33) = 14$
* Decrypted text (proof) $= C^d (mod\;N) = 5^3 (mode\;33) =$ <span style="color: green;"><b>$5$</b></span>

<br>

---


$p = 5;\;q = 11;\; e = 3;\;M =$ <span style="color: green;"><b>$9$</b></span>

* $N = p \cdot q = 55$
* $\phi(N) = (p-1)(q-1) = 40$
* $d = e^{-1} = 27 \quad$ because $\quad 3 \cdot 27 = 1 (mod\;40)$
* Crypted text $= C = M^e (mod\;N) = 9^3 (mode\;55) = 14$
* Decrypted text (proof) $= C^d (mod\;N) = 9^27 (mode\;55) =$ <span style="color: green;"><b>$9$</b></span>

<br>

---


$p = 7;\;q = 11;\; e = 17;\;M =$ <span style="color: green;"><b>$8$</b></span>

* $N = p \cdot q = 77$
* $\phi(N) = (p-1)(q-1) = 60$
* $d = e^{-1} = 53 \quad$ because $\quad 17 \cdot 53 = 1 (mod\;60)$
* Crypted text $= C = M^e (mod\;N) = 8^{17} (mode\;77) = 57$
* Decrypted text (proof) $= C^d (mod\;N) = 8^{53} (mode\;77) =$ <span style="color: green;"><b>$8$</b></span>

<br>

---


$p = 11;\;q = 13;\; e = 11;\;M =$ <span style="color: green;"><b>$7$</b></span>

* $N = p \cdot q = 143$
* $\phi(N) = (p-1)(q-1) = 120$
* $d = e^{-1} = 11 \quad$ because $\quad 11 \cdot 11 = 1 (mod\;120)$
* Crypted text $= C = M^e (mod\;N) = 7^{11} (mode\;143) = 106$
* Decrypted text (proof) $= C^d (mod\;N) = 7^{11} (mode\;143) =$ <span style="color: green;"><b>$7$</b></span>

<br>

---


$p = 17;\;q = 31;\; e = 7;\;M =$ <span style="color: green;"><b>$2$</b></span>

* $N = p \cdot q = 527$
* $\phi(N) = (p-1)(q-1) = 480$
* $d = e^{-1} = 343 \quad$ because $\quad 7 \cdot 343 = 1 (mod\;480)$
* Crypted text $= C = M^e (mod\;N) = 2^7 (mode\;527) = 128$
* Decrypted text (proof) $= C^d (mod\;N) = 2^{343} (mode\;527) =$ <span style="color: green;"><b>$2$</b></span>

## Exercise 2

> In a public-key system using RSA, you intercept the ciphertext C = 10 sent to a user whose public key is e = 5, n = 35. What is the plaintext M?

$C = 10; \; e = 5; \; N = 35$

* $\phi(N) = (x-1)\cdot (y-1) = (5-1)\cdot (7-1) =  24$
* $d = e^{-1} = 5 \quad$ because $\quad 5 \cdot 5 = 1 (mod\; 24)$
* $M = C^d (mod\; N) = 10^5 (mod\; 35) = 5$

## Exercise 3

>Alice wants to generate a pair of RSA public and private keys. She starts by selecLng two primes $p = 5$ and $q = 7$.

* $N = p\cdot q = 35$
* $\phi(N) = (p -1)\cdot(q-1) = 24$

>In selecing a decryption (private) key $d$, Alice decides $d=3$ is not
good. Why? She selects $d = 11$ instead. Which is the correct encryption?

* $3$ is valid but it would be better to pick a higher value for $d$ with respect to $e\cdot d = 1 + k \cdot \phi(N)$. $11$ is still not that good but better. Anyways, the magnitude of those numbers is way too small to be called secure and a microwave could break them.

* If $d = 11 \Rightarrow e = 11 \quad because \quad 11 \cdot 11 = 121 = 1 (mod\; 24)$

>Suppose Bob wants to send a message $M=33$ to Alice. Which key should he use? What’s the ciphertext he sends to Alice?

* Bob should use $e$ **which is his public key**. $C = M^e = 17 (mod \;35)$


>Afer Alice receives the ciphertext, how does she decrypt?

* M = C^d = 33 (mod\; 35)$

>If Alice want to send Bob a signed message, given $M’ = 6$, what would Alice send?

* She needs to signe the message using her private key.
* $C'^d = M'^d = 6 (mod\;35)$

>How does Bob verify the message is sent by Alice?

* He needs to use Alice's public key to be able to authenticate her signature.
* $M' = C'^e = 6 (mod\;35)$


## Exercice 4

>* $p = 283;\; q=47; \; h=5$
>* $a = 24$
>* $k = 15$
>* $H(M) = 41$

> Calculate the public key of Alice.

* $g = h^{\frac{p-1}{q}} = 5^6 = 60 (mod\;283)$
* $y = g^a = 158$

> Show that the signature of the message $M$ with hash $H(M)$ is $(r,s)$ = $(19, 30)$.

/

> Bob should verify that the message $M$ is really signed by Alice. Demonstrate the verification by showing that$v=r$.

