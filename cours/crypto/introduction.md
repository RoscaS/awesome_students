---
title: Introduction
date: 2019-09-27
author: Sol
sidebar: auto
project: false
hide: false
---

## Cryptologie - Science du secret

Englobe 2 disciplines :

- Cryptographie
  - Science qui utilise des méthodes mathématiques pour chiffrer/déchiffrer des données
  - Différentes parties :
    - Symétrique
      - Block de Cipher
      - Stream de Cipher
    - Asymétrique
      - Échange de clé
      - Confidentialité
      - Signature digital
    - Function hash
    - Protocoles
- Cryptanalyse
  - Étudie les informations chiffrées pour découvrir le message original.
    - Raisonnement analytique
    - Outils mathématiques

L'utilisation des réseaux et les liens de communications nécessite des mesures pour protéger les données pendant leur transmission.

### Encryption symétrique

Clé commune (privé)

- Modèle symétrique de Cipher
  - Nécessite un algorithme de chiffrage solide et une clé secrète connue uniquement de l'envoyer et du récepteur
  - Peut importe la puissance disponible, cipher ne peut être cassé puisque le texte de cipher n'est pas suffisant pour déterminer le texte correspondant.
- Substitution de cipher
  - On permute les lettres de x (décalage de 2, A -> C)
- Vernam cipher
  - La clé fait la même taille que le message, on ne peut pas le casser, problème d'espace

#### Vernam
Conversion du message et de la clé en binaire et on fait un *XOR* puis on reconvertis dans la base voulue.
Nombre de possibilité d'un brute force 2^x ou x est le nombre de bits en binaire.
Avantage :
Même processus simple d'encryption et de décryption, cassable seulement en brute force (long)
Désavantage : 
La clé doit être aussi grande que le message, complétement aléatoire (pas pseudorandom), second channel pour échanger la clé


#### Vigenère Cipher

|     | A   | B   | ... | Z   |
| --- | --- | --- | --- | --- |
| A   | A   | B   | ... | Z   |
| B   | B   | C   | ... | A   |
| ... | ... | ... | ... | ... |
| Z   | Z   | A   | ... | Y   |

### Stéganographie

* Art de cache une donnée dans une autre donnée.
* Avantage vs cryptographie, le message secret n'attire pas l'atention
* Peut être combiné avec la cryptographie.

### Définitions

- Computer security
  - Nom générique pour une collections d'outils conçu pour protéger les données et contrer les hackers
- Network Security
  - Mesure pour protéger les données durant leur transmission
- Internet Security

  - Mesure pour protéger les données durant leur transmission au travers d'une collection de réseaux interconnectés

- Security attack
  - N'importe quelle action qui compromet la sécurité de l'information appartenant à une organisation
  - Passive attacks
    - obtenir un message de contenu ou monitorer le flux de trafic
  - Active attacks
    - Modifier le stream de données
- Security mechanism
  - Mécanisme conçu pour détecter, prévenir ou récupérer d'une attaque de sécurité
  - Beaucoup de mécanisme de sécurité utilise des techniques de cryptographie
- Security service
  - Améliore la sécurité des données passant par le system
  - Sensé contrer les attaque de sécurité
  - Utilisation d'un ou plusieurs mécanismes de sécurité pour proposer un service

## Modulo

Modulo n -> résultat entre 0 et n-1

GF(n) = {0, 1, 2,...,n-1}

GF pour Galois filed

- **Commutativité** : $(a+b)modn=(b+a)modn$
- **Associativité** : $((a+b)+c)modn = (a+(b+c))modn$
- **Distributivité** : $a\ctdot (b+c)modn=(a \ctdot b)modn+(a \ctdot c)modn$
- Il n'y a pas de nombre négatif
- Exposant : $a^{b}modn=a*a*...*a modn$
- Inverse multiplicative : $x*zmodn=1$ (z est l'élément inverse) $x^{-1}$
  - Seulement si x et n sont des nombres premiers
  - $3^{-1}mod7=5$ car $3*5mod7=1$
  - Si n est un nombre composé on doit utiliser l'algorithme Etendu d'Euclide qui nous donne les coefficient de Bézout pour x et n. Si le pgdc(x,n)=1 alors le coefficient de Bézout de x est $x^{-1}modn$ sinon l'inverse n'existe pas
  - Si n est premier on peut faire comme au dessus ou calculer $x^{-1}modn$  comme $x^{n-2}modn$
  - Si le pgdc(x,n)=1 alors le coéfficient de Bézout de x est $x^{-1}modn$, c'est vrai par définition les coef de Bézout multiplie 2 nombre pour que leur pgdc donne 1.
- Inverse additive : $x+ymodn=0$ (z est l'élément inverse) $-x$
- Division : définie comme une multiplication avec l'inverse : $\frac{x}{y}modn=x*y^{-1}modn$
  - $\frac{2}{3}mod7=2*3^{-1}mod7=2*5mod7=3$
- Racine carré de x définis comme s racine de x if \$s^{2}=x
  - $\sqrt{4}mod7=2$ car $2^{2}=4$ mais aussi $\sqrt{4}mod7=5$ car $5^{2}=4$
- Logarithme définis pour tous x, a et y dans GF(n)
  - $log_{a}x=y$ if $a^{y}modn=x$

Théroème du petit Fermat qui dit que $a, a^{p}modp=a$ on peut multiplié par $a^{-1}$ et on obtiens $a^{p-1}modp=1$ on peut encore multiplier par $a^{-1} et on a $a^{p-2}modp=a{-1}modp$

$a^{-2}modp=1*a^{-2}modp=a^{p-1}*a^{-2}modp=a^{p-3}modp$
$a^{-10}modp=1*a^{-10}modp=a^{p-1}*a^{-10}modp=a^{p-11}modp$
$a^{-m}modp=1*a^{-m}modp=a^{p-1}*a^{-m}modp=a^{p-1-m}modp$


p et q primaires, $p\neq q$, $xmodp=ymodp$, $xmodq=ymodq$, $xmodpq=ymodpq$
$xmodp=ymodp<=>(xmodp)-(ymodp)=0$ signifie $(xy)modp=0$ signifie que $(xy)$ est un multiple de p. Pareil pour q.
$x-y$ est un multiple de pq ce qui signifie $(xy)modpq=0$ et $(xmodpq)(ymodpq)=0=>xmodpq=ymodpq$

## Nombre premier

On comme diviseur uniquement 1 et eux même

On ne peut les écrire avec le produit d'autres nombres

Factorisation primaire, on écrit un nombre n en produit de nombre premier

Deux nombres sont _co-prime_ si ils n'ont pas de dénominateur commun autre que 1

La fonction Totient d'Euler $\varphi$ compte le nombre de nombre co-prime à n plus petit ou égal \$ n

Pour un nombre premier : p : p-1 co-prime
Pour deux nombres premiers : q,p : (p-1)(q-1)

On factorise le nombre en nombre premier et on fait le produit de $1-\frac{1}{k_{x}}$ ou $k_{x}$ est l'un des nombre premier du produit. On multiplies le tout par n.
$\varphi(n)=n\prod_{k|180}(1-\frac{1}{k})$

Si a et n sont co-prime,
$a^{\varphi(n)}=1modn$

Si n est un nombre premier
$a^{p-1}=1modp$

## Asymétrique


Envoyer une information sans avoir de clé de l'autre personne :

- A mets un cadenas sur une boîte qu'il envoi à B
- B met son cadenas et renvoi à A
- A enlève son cadenas et renvoi à B
- B enlève son cadenas et peut voir le contenu de la boîte

- (+) Pas besoin de faire confiance à quelqu'un
- (-) On n'est pas sur de avec qui on parle

Chiffrer avec une clé publique est plus sécurisé qu'un chiffrage symétrique

Asymétrique cars les deux parties ne sont pas égales

- Clé publique connue par tous le monde, utilisé pour déchiffrer un message ou vérifier la signature
- Clé privé connu uniquement de l'envoyeur, permet de chiffrer des messages et créer des signatures

* Un message peut être chiffré avec la clé publique et déchiffré avec la clé privée pour assurer la sécurité
* Un message peut être chiffré avec la clé privée et déchiffré avec la clé publique pour fournir des signatures

- Impossible de trouver la clé de description en connaissant uniquement l'algorithme et la clé de déchiffrage
- Facile d'encrypter/décrypter les messages avec la clés de chiffrage/déchiffrage

- Clé publiques sert
  - Encrypté/décrypter
  - Signatures digital
  - Échange de clé

one-way function : La calculer est facile mais l'inverse est infaisable

### L'échange de clé Diffie-Hellman

Distribution de clé publique

- Ne peut pas être utilisé pour échanger les messages
- Permet d'établir une clé commune
- Connue uniquement des deux participants

- Un grand nombre primaire $p$
- g un primitive root mod $p$

Alice génère sa clé
Choisis une clé secrète $a<p$
Calcules sa clé publique : $A=g^{a}modp$

Bob choisis une clé secrète $b<p$
Calcules sa clé publique : $B=g^{b}modp$

La clé de session partagé peut être calculé par :
$S=A^{b}modp$ pour B ou $S=B^{a}modp$ pour A

Alice chiffre en multipliant le texte $M_{A} par S$
$C_{A}=M_{A}*Smodp$
Envoi de $C_{A}$

Bob multiplie par $g^{-ab}$
$D_{B}=M_{A}*g^{ab}*g^{-ab}modp=M-{A}$

## Primitive root

3 est une primitive root modulo 7 car :

- $3^{1}mod7=3$
- $3^{2}mod7=2$
- $3^{3}mod7=6$
- $3^{4}mod7=4$
- $3^{5}mod7=5$
- $3^{6}mod7=1$
- $3^{7}mod7=3$

On voit tous les nombres 1 à n-1 et c'est cyclique

Nombre de choix pour g (generateur) : $\varphi(\varphi(n))$

$A=g^{a}modp$
$B=g^{b}modp$

Le secret commun est : $s=A^{b}modp=B^{a}modp=g^{ab}modp$
Message chiffré est : $c=m*smodp$

#### Décrypter
(A) : $m'=cB^{p-1-a}modp=mb^{ab}g^{b(p-1-a)}modp=mg^{ab}*g^{-ab}*(g^{p-1})^{b}modp=m$
(B) : $m'=cA^{p-1-b}modp=mg^{ab}g{a(p-1-b)}modp=mg^{ab}g{-ab}(g^{p-1})^{a}modp=m$

#### Paramètres
|   | A | B | All |
|---|---|---|---|
| Paramètres privés |a,s,m|b,s,m| |
| Paramètres publics |p,g,A,B,c|p,g,A,B,c|p,g,A,B,c|


## RSA

Sécurité grâce au coût de la factorisation de grand nombre

On génère deux nombres grand premiers : p,q
System modulus : N = p*q

1<e<phi(N), gcd(e,phi(N))=1

d=e^{-1}modphi(N)

KU={e,N}

KR = {d, p, q}

Si on essaye de trouver p et q, on va chercher à factoriser N mais c'est dur

Pour calculer e

Le plus connu est le plus utilisés des algorithmes de clé public.

* Chaque utilisateur génère 2 grands nombres primaires aléatoire $p, q$
* Calcule sont module system : $N=p*q$
* Choisis la clé d'encryption $e$ aléatoirement ou : $1 < e < \varphi(N)=(p-1)*(q-1)$ (on essaye d'avoir le moins de chiffre coprime à e, possiblement seulement p et q)
* Résous l'équation : $d-e*d=1mod\varphi(N)$ et $0\leq d\leq n$ pour trouver la clé de décryption ($d_{b}=e_{b}^{-1}mod\varphi(n_{b}$)
* Publie la clé public d'encryption : $KU = {e, N}$
* Garde la clé secrète de décryption : $KR = {d, p, q}$

message chiffré : $c_{b}=m_{b}^{e_{u}}modN_{u}$

#### Explication
$a^{b}modN=a^{b mod\varphi(N)}modN$
on obtiens ainsi 
$c^{d}modN=(m^{e})^{d}modN=m^{ed}modN=mmodN$
Ce qui donne le message original, on ne peut pas trouver le message sans connaitre p et q car la factorisation de grand nombres et très complexes. De N on ne peut déduire p ou q et de e on ne peut déduire d cars il est difficile de trouver $\varphi(N)=(p-1)(q-1)$

|   |B|u|all|
|---|---|---|---|
|Paramètres privés|$p_{b}, q_{b}, d_{b}, m, \varphi(N_{b})$|$p_{u}, q_{u}, d_{u}, m, \varphi(N_{u})$||
|Paramètres publics|$N_{b}, e_{b}, N_{u}, e_{u}, c$|$N_{b}, e_{b}, N_{u}, e_{u}, c$|$N_{b}, e_{b}, N_{u}, e_{u}, c$|
