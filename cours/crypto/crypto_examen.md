---
title: "Crypto: examen oral"
date: 2020-01-30
author: Sol
sidebar: auto
project: false
hide: false
---

- Hash

Trouver un nombre via des données (empreinte), données de taille variable à hash de taille fixe, formule mathématique (Markle Domgard), éventuellement rainbow table pour faire l'opération inverse

Le hash map des données de taille variable à une chaîne de taille fixe, est une **trapdoor function**, il doit être difficile de trouver l'input à partir de l'output (bruteforce seule possibilité), déterministe (un message = toujours le même hash), rapide à calculer, un changement dans le message génère un hash totalement différent et très difficile de trouver 2 messages avec le même hash.

Difficile dans le sens tu seras mort tu t'en batteras les couilles de la crypto avant de réussir.

Un hash permet de vérifier l'identité de l'envoyeur et l'intégrité des données. Il permet aussi de vérifier si des fichiers sont corrompus, ont été modifiés, les répétitions, etc.
On va également signer le hash avec la signature digitale car c'est plus rapide, on peut signer tout le message plutôt que des blocs, compatibilité etc.

Les attaques : **birthday** probabilités pour trouver une collision, **rainbow table** des tables précalculées pour les hash.


- exponent modulaire et inverse modulaire

L'inverse de n'importe quel nombre a est $1 < a < p$.

Si p est premier alors $a^{−1} = a^{p−2} \bmod p$
si n est composite alors $a^{−1} \bmod n$ est calculé avec les coefficients de Bézout et donc avec l'algorithme étendu d'Euclide.

- génération de grand nombre premiers

Génération d'un grand nombre aléatoire qui soit impaire et non multiple de 5 puis test avec Solovay Strassen, test de fermat, Miller Rabin

Fermat: a^n-1 mod n = 1 ssi n est premier
Solovay Strassen: Utilisation des Jacobi symbol (qui utilise les Legendre symbole et représentable sous forme de table)
Miller-Rabin: basé sur le théorème de Fermat

- Difference entre clé publique et privé

On va distribué la clé public à tout le monde pour que les autres personnes puissent encrypter des messages que seulement nous pouvous décrypter avec la clé privé

- Euler totient function-> avec p ;p et q; et n (est ce aussi facil avec grand N? )

Aussi appelé Euleur phi. Sert à trouver le nombre d'entier positif < n qui sont copremier à n. C'est une fonction multiplicative

pour p : p-1
pour p*q : (p-1)*(q-1)
pour n : Décomposition en facteur premier : $n*(1-1/p1)*(1-1/p2)$...

- RSA

Système de cryptage à clé assymétrique, Rivest–Shamir–Adleman.

En gros : on se met d'accord sur 2 nombres premiers, et on calcule la clé privée et publique avec ça. Ensemble de fonction exponentielle avec modulo

- DSA

Système de signature de document, On choisie un nombre premier de L bits et on calcule une clé privée et publique. La clé privée va servir à signer un document et la clé publique à vérifier que la personne ayant signée soit la bonne

- Vigenere (pourquoi, motivations, faiblesses)

On choisit un clé que l'on répète, ensuite on regarde les décalages dans la table pour avoir le message crypté.

On peut casser le code, notamment grâce aux répétitions

- Diffie & Hellman

Système de clé assymétrique.

On se met d'accord sur deux nombre premiers et on calcule un set de clé avec. Ensemble de fonction mathématique exponentielle et modulaire

- Signature digitale

On va signer un document pour prouver que le document est authentique et que l'auteur est la bonne personne.

DSA est une implémentation de signature digitale

- man in the middle attack

Un type qui vient intercepter la transmission des clés et qui se fait passer pour l'autre. Dans le cas du shared secret avec la peinture, il prend les clés des deux communicants et génère lui d'autres clés qu'il leur donne. De ce fait, il croient communiquer directement mais en réalité il passe par cet intermédiaire. La solution pour palier à ce problème est d'utiliser l'authentification et donc de crypter avec sa clé privé la clé de la communication. (je crois)

- little fermat theorem

Pour n'importe quel nombre premier :
$k^p = k \bmod p$
$k^{p-1} = 1$

- Différence attaque active/passive
    - Passive:
        - Ecoute
        - Monitoring des flux
    - Active:
        - Replay d'une séquence précédement enregistré
        - Utilisation détourné d'un service (Deny of service)

- C’est quoi les coefficients de Bézout

$ax + by = d$

Trouvé grâce au théorme d'euclide étendu, permettent de calculer des inverses modulo

- DES

Système de cryptage à clé symmétrique, besoin d'une clé de 64 bits (56 bits utile et parité) pour encrypter un message de 64 bits. On va faire de la diffusion avec la clé pour crypter le message.

Pour décrypter simplement faire l'inverse

- AES

Même principe que DES, juste plus récent et donc plus difficle à attaquer

- Racine primitive

$root^n \bmod x$, pour n de 1 à x et chaque résultat est différent : $\phi(\phi(n))$

- Kasisky

Cryptanalyse du code de Vigenere. Consiste à trouver la longeur de la clé et une fois celle-ci trouvée de faire une analyse de fréquence en premier tous les nième charactères

- Birthday Problem

Permet de tester les algos de Hash. On se rend compte que pour que deux personnes aient leurs anniversaire à la même date il nous suffit de 70 personnes pour avoir au taux de colisions de 99.9%.

Et 23 personnes pour 50%

Formule:
$1 - \frac{365!}{365^n(365-n)!}$

- Expliquer algo eucli

$gcd(a, 0) = a$ & $gcd(a, b) = gcd(b, a \bmod b)$

- Expliquer freisman



- shift cipher

Consiste à décaler le charactère encodé de n positions

Exemple: Cesar ou ROT13

- Vernam Cipher

XOR du message avec une clé de même longueur

\+ :
- Incassable (déchiffrable seulement avec la clé ou le message original)

\- :
- La clé doit
    - être de même taille que le message original
    - complétement aléatoire
    - à usage unique
    - transmise par un canal sécurisé

### Attaque passive / active

- Une attaque passive est le fait de ne pas altérer les infos ou le système contrairement à active
    - **Eavesdropping** - récupérer des infos sans affecter le système
    - **Traffic analysis** - choper des infos sur les hôtes selon les patterns de message sans extraire le contenu
- Actif regarde en haut
    - **Impersonation** se faire passer pour qqun d'autre
    - **Replay** - interception et retransmission des flux
    - **Message modification** - interception et retransmission d'un message changé ou délayé
    - **Denial of service (DDOS)** - spam de message

En général les attaques passives sont plus dures à détecter mais plus faciles à prévenir.