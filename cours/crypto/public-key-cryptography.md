---
title: Public key cryptography
date: 2019-11-03
author: Sol
sidebar: auto
project: false
hide: false
---

## Cryptographie symétrique

<br>
<br>

<Col proportions="6/6" vAlign="0">
<template slot="left">

<br>

Ce type de cryptographie n'implique qu'**une clé pour crypter et décrypter** une information. Cette clé est utilisée sur un message en clair pour le crypter. Les deux parties (Celui qui envoie et celui qui reçoit) connaissent la clé.

Le problème principal est ici le fait de devoir partager la clé entre les parties.

</template>
<template slot="right">

![Image](https://i.imgur.com/zNaNFKV.png)

</template>
</Col>


## Cryptographie asymétrique

La cryptographie asymétrique, ou cryptographie à clé publique, est une méthode de chiffrement qui s'oppose à la cryptographie symétrique. Elle respose sur l'utilisation d'une clé publique (quie st diffusée) et d'une clé privée (gardée secrète), l'une permettant de coder le message et l'autre de le décoder.

Ainsi, l'expéditeur peut utiliser la clé publique du destinataire pour coder un message que seul le destinataire (en possession de la clé privée) peut décoder, garantissant la confidentialité du contenu. Inversement, l'expéditeur peut utiliser sa propre clé privée pour coder un message que le destinataire peut décoder avec la clé publique. C'est le mécanisme utilisé par la signature numérique pour authentifier l'auteur d'un message.


### Principe

* Un utilisateur possède deux clés: une clé publique et une clé privée.
* Un message peut être chiffré avec la clé publique et déchiffré avec la clé privée pour assurer la sécurité.
* Un message peut être chiffré avec la clé privée et déchiffré avec la clé publique pour fournir des signatures.

### Cryptage

 <Col proportions="6/6" vAlign="0">
 <template slot="left">

<br>

En utilisant la clé publique d'une personne, il est possible de crypter un message qu'il sera le seul à pouvoir décrypter en utilisant sa clé privée.

Dans cette illustration, Alice envoie un message à Bob qu'elle crypte avec la clé publique de Bob. Ce dernier est le seul à pouvoir décrypter le message car il est le possesseur de la clé privée correspondante à la clé publique utilisée pour crypter le message.

 </template>
 <template slot="right">

 ![Image](https://i.imgur.com/ZUXxgbv.png)

 </template>
 </Col>

 ### Signature (Signing)

<Col proportions="6/6" vAlign="0">
<template slot="left">

<br>

 L'utilisation d'une clé privée permet de créer une signature digitale qui permet à n'importe qui possèdant la clé publique correspondante de vérifier que le message a été créé par le possésseur de la clé privée et n'a pas été modifié entre temps.

 Dans cette illustration, Alice veut envoyer un message à Bob. Elle crée une signature digitale de son message en le signant avec sa clé privée et ensuite envoie le message **avec sa clé publique** à Bob. Ce dernier peut vérifier l'authenticité du message en utilisant la clée publique d'Alice.

 Noter que dans cet exemple, le message n'est pas crypté.

</template>
<template slot="right">

![Image](https://i.imgur.com/rCWCqt5.png)

</template>
</Col>

<br>

La figure suivante illustre le cryptage ainsi que la signature d'un message:

![Image](https://i.imgur.com/wVQSKOo.png)

### Caractéristiques

La cryptographie asymétrique se base sur les caractéristiques suivantes:
* Informatiquement impossible de trouver la clé qui sert à décripter en ne connaissant que l'algorithme et la clé d'encryption.
* Informatiquement simple de décripter un message en connaissant la clé publique associée à la clé privée qui a crypté le message.
* *N'importe laquelle des deux clés (publique ou privée) peut être utilisée pour l'encryption alors que l'autre est utilisée pour le décryptage*. **À vérfier**


## Diffie et Hellman

* [bitbmath.net](http://www.bibmath.net/crypto/index.php?action=affiche&quoi=moderne/difhel)


<Container type="info">

* **One-way function**: Une fonction qui est facile à calculer dans une direction mais difficle dans l'autre.
* **Trapdoor one-way function**: Une fonction à sens unique qui peut être facilement inversée avec une pièce supplémentaire d'information.

</Container>


Diffie et Hellman ont proposé en 1976 un protocole d'échange de clés **totalement sécurisé**. Le problème est le suivant: Alice et Bob veulent s'échanger des message cryptés en utilisant un algorithme nécessitant une clé $K$. Ils veulent échanger cette clé $K$ mais **ne disposent pas de canal sécurisé**.

Le protocole d'échange de clés de D-H répond à ce probléme lorsque $K$ **est un nombre entier**. Il repose sur l'arithmétique modulaire et sur le postulat suivant:

Étant donnés des entiers $p, a, x$ avec $p$ premier et $1 \leq a \leq p -1$, alors
* Il est facile de calculer l'entier $y = a^x (mod\;p)$
* Si on connait $y=a^x (mod\;p), a$ et $p$ il est très difficle de retrouver $x$, pourvu que $p$ soit assez grand.

Retrouver $x$ connaissant $a^x (mod\;p), a$ et $p$ s'appelle résoudre le problème du **logarithme discret**. Comme pour la factorisation d'entiers, c'est un problème pour lequel on ne dispose pas d'algorithme efficace.

<table align=center cellspacing=0 cellpadding=4>
<tr><td></td>
<td bgcolor=#FAFAFF align=center width=300><b>Alice</b></td>
<td bgcolor=#FAFAFF align=center width=300><b>Bob</b></td>
</tr>
<tr>
<td bgcolor=#AAFFCC width=120><b>Étape 1</b></td>
<td colspan=2 bgcolor=#FAFAFF>

Alice et Bob choisissent ensemble un grand nombre premier $p$ et un entier $1\leq a\leq p-1$.
<st c="g">Information publique</st>

</td>
</tr>
<tr>
<td bgcolor=#AAFFCC width=120><b>Étape 2</b></td>
<td bgcolor=#FAFAFF></p>

Alice choisit <st c="r">secrètement</st> $x_1$.

</td>
<td bgcolor=#FAFAFF></p>

Bob choisit <st c="r">secrètement</st> $x_2$.

</td>
</tr>
<tr>
<td bgcolor=#AAFFCC width=120><b>Étape 3</b></td>
<td bgcolor=#FAFAFF></p>

Alice calcule $y_1=a^{x_1} (mod\;p)$.

</td>
<td bgcolor=#FAFAFF></p>

Bob calcule $y_2=a^{x_2} (mod\;p)$.

</td>
</tr>
<tr>
<td bgcolor=#AAFFCC width=120><b>Étape 4</b></td>
<td colspan=2 bgcolor=#FAFAFF>

Alice et Bob s'échangent les valeurs de $y_1$ et $y_2$.

<st c="g">Cet échange n'a pas besoin d'être sécurisé.</st>

</td>
</tr>
<tr>
<td bgcolor=#AAFFCC width=120><b>Étape 5</b></td>
<td bgcolor=#FAFAFF>

Alice calcule $y_2^{x_1} = (a^{x_2})^{x_1} = a^{x_1x_2} (mod\;p)$ et appelle ce nombre $K$,

<st c="r">la clé secrète partagée avec Bob.</st>

</td>
<td bgcolor=#FAFAFF>

Bob calcule $y_1^{x_2} = (a^{x_1})^{x_2} = a^{x_1x_2} (mod\;p)$ et appelle ce nombre $K$,

<st c="g">la clé secrète partagée avec Alice.</st>

</td>
</tr>
</table>


À la fin du protocole, Alice et Bob sont donc en possession d'une même clé secrète $K$, qu'ils ne se sont pas échangés directement. Si quelqu'un a espoionné leur conversation, il connait $p, a, y_1$ et $y_2$. Il ne peut pas retrouver $K$ comme le font Alice ou Bob car il lui manque toujours l'une des informations nécessaires à savoir $x1$ ou $x2$. Et il ne peut pas retrouver $x1$ connaissant $y=a^{x_1} (mod\; p)$, $a$ et $p$ car **la résolution du logarithme discret est un problème difficile**.

<Container type="info">

Cette découverte de Diffie et Hellman est une vraie révolution dans l'histoire de la cryptographie. Le problème de l'échange des clés est en effet résolu. Ce protocole a cependant un défaut : il **exige la simultanéité des actions d'Alice et de Bob**. Si Alice veut envoyer un e-mail à Bob alors que celui dort ou n'est simplement pas connecté, elle ne pourra pas le faire immédiatement. C'est pourquoi ce protocole fut en réalité très vite supplanté par les méthodes de chiffrement à clé publique de type RSA, pour lesquels on met à la disposition de tout le monde une clé publique. Toutefois, il est utilisé pour les problèmes d'appariement de deux objets dans la technologie Bluetooth.

</Container>

### Implémentation

```py
@dataclass
class User: name: str

public_prime = 2_147_483_647

public_base = random.randint(1, public_prime - 1)

alice = User("Alice")
alice.secret = random.randint(1, 123_456)

bob = User("Bob")
bob.secret = random.randint(1, 123_456)

alice.public = public_base ** alice.secret % public_prime
bob.public = public_base ** bob.secret % public_prime

alice.shared_secret = bob.public ** alice.secret % public_prime
bob.shared_secret = alice.public ** bob.secret % public_prime

print(alice.shared_secret == bob.shared_secret) # True
print(alice.shared_secret)                      # 1518058517
print(bob.shared_secret)                        # 1518058517
```


## Exercice 1

Users A and B use the D-H key exchange technique with:
* common prime $p = 71$
* primitive root $g = 7$

<br>

1. **If user A has private key $x_a = 5$, what is A's public key ?**

$y_a = g^a (mod\;p) = 7^{5} (mod\;71) = 51$

2. **if user B has private key $x_b = 12$, what is B's public key ?**

$y_b = g^b (mod\;p) = 7^{12} (mod\;71) = 4$

3. **What is the shared secret key ?**

either:
* $K = y_b^a (mod\;p) = 4^5 (mod\;71) = 30$
* $K = y_a^b (mod\;p) = 51^{12} (mod\;71) = 30$


## Exercice 2

Users A and B use the D-H key exchange technique with:
* common prime $p = 23$
* primitive root $g = 5$

<br>

1. **If user A has private key $x_a = 6$, what is A's public key ?**

$y_a = g^a (mod\;p) = 5^{6} (mod\;23) = 8$

2. **if user B has private key $x_b = 15$, what is B's public key ?**

$y_b = g^b (mod\;p) = 5^{15} (mod\;23) = 19$

3. **What is the shared secret key $K$ ?**

either:
* $K = y_b^a (mod\;p) = 4^5 (mod\;71) = 2$
* $K = y_a^b (mod\;p) = 51^{12} (mod\;71) = 2$


## Exercice 3

Consider a D-H scheme with:
* common prime $p = 11$
* primitive root $g = 2$

1. **Show that 2 is a primitive root of 11**

$g$ is a primitive root $(mod\;p)$ if:
* $0 \leq g \leq p$: true
* $gcd(g, p) = 1$: true
* For all prime factor $q_i$ of $\phi(p)$, $g^{\phi(p)/q_i} \neq 1 (mod\;p)$: true

So yes, 2 is a primitive root of 11.

1. **If user A has public key $y_a = 9$ what is A's $x_a$ ?**

* $2^{x_a}=9$
* $\Rightarrow x_a \in \{6, 16, 26\}$
* $x_a \leq 11 \Rightarrow x_a = 6$

2. **If user B has public key $y_b = 3$ what is the shared secret $K$, shared with A ?**

* $K = y_b^{x_a} (mod\;11) = 3^6 (mod\;11) = 3$

## Exercice 4

Consider a D-H scheme with
* common prime $p = 11$
* primitive root $g = 3$

1. **Is 3 a primitive root of 11?**

* $0 \leq g \leq p$: true
* $gcd(g, p) = 1$: true
* For all prime factor $q_i$ of $\phi(p)$, $g^{\phi(p)/q_i} \neq 1 (mod\;p)$: false !

No, 3 is not a primitive root of 11.

1.  Try to solve $3x = 5 (mod 11)$.

$x$ can be either $3$ or $8$

## Exercice 5

**Describe the man-in-the-middle attack on the D-H key exchange protocol in which the adversary generates two public-private key pairs for the attack.**

Assuming that there is no authentification and Darth figures out a way to get in the middle, it's actually pretty simple:

It would be as if Alice thinks she is having the protocol with Bob but it's actually Darth instead. Same goes for Bob, he would think he is making the protocole with Alice but it's actually Darth. Once the protocole is done one both sides, there would be two distinct sessions using two different common keys:
* $K_a$ shared between Alice & Darth
* $K_b$ shared between Bob & Darth.

Alice would then talk with Darth thinking it's Bob and Darth would forward what he recieved from Alice to Bob so that Bob can repply and then intercept it back. He then would forward back to Alice...

Overall, Darth would know everything those two are saying and those two would be fooled.

**Could the same attack be accomplished with one pair? Explain.**

Yes, there is nothing preventing Darth to use the same key pair for both sides. The common keys ($K_a$ and $K_b$) would still be different though as those depends also on the the keys pair generated by Alice and Bob.