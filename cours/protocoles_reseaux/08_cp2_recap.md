---
title: Recap CP2
date: "2019-01-22"
author:  "Sol"
sidebar: auto
project: false
---

## Theorie

*[wiki](https://ssl.horus.ch/~schaefer/bin/view/HEArc/ProtocolesEtReseauxExercicesRevisionControlePrincipalIICorrige)

## Exercices

### Exercice 1

Soit un circuit virtuel d'une longueur de 120 km, d'un débit de 512 kbit/s et un délai linéique de 500 us/km. Les messages font au plus un MTU total de 1280 bytes, estimez l'efficacité du protocole TFTP (en négligeant l'ensemble entêtes!) Indication: TFTP est protocole sûr de classe IDLE REQUEST. Faites le même calcul en supposant le protocole FTP (basé sur TCP, un protocole de classe CONTINUOUS REQUEST, GO BACK N), en supposant avec une taille de fenêtre 3. Ensuite, supposez un taux d'erreur de 1 bit sur 100 millions et calculez l'efficacité. Qu'en déduisez-vous ? Donnez la capacité utile dans ce cas. Que pourriez-vous faire pour encore augmenter l'efficacité du protocole ? A quoi faut-il cependant veiller ? Comment se modifie le rendement si l'on prend en compte les entêtes (le surdébit, l'efficacité intrinsèque) ?

* IDLE REQUEST (sans erreurs)
  * $Tp = 120 km \cdot 0.5 ms/km = 60 ms$
  * $N = 1280 bytes \cdot 8 bits/byte = 10240 bits$
  * $Tix = 10240 bits / 512 kbps = 20 ms$
  * $a = Tp/Tix = 60 ms / 20 ms = 3$
  * $U = 1 / 1 + 2a = 14%$

<br>

* CONTINUOUS REQUEST (sans erreurs)
  * $k < 1 + 2a$
  * $U = k / (1 + 2a) = 3 / (7) = 43%$

<br>

CONTINUOUS REQUEST, GO BACK-N (avec erreurs)
* $Pf = 1 - (1 - P)^N = 1.02e-4$
* $k < 1 + 2a$
* $U = k (1 - Pf) / ((1+2a)(1 + Pf(k-1))$
  * $= 3(1 -Pf) / (7 \cdot (1 + Pf \cdot 2)) = 43$%

<br>

* On en déduit que les erreurs de transmission ont peu d'impact, c'est le protocole lui-même qui est mauvais. Augmenter k de manière à atteindre l'efficacité du protocole et passer à la formule $k >= 1 + 2$ a (mais pas au-delà, car en GO BACK-N on reste influencé négativement par k). Ou alors augmenter N, mais attention à l'effet direct sur Pf!

* $C_{utile} = 512 kbps \cdot U =$ environ la moitié ou un peu moins soit 220 kbit/s

* entêtes == 18 bytes Ethernet + 20 bytes IP + 20 bytes TCP + 0 bytes FTP, donc rendement intrinsèque $((1280 - 58)/1280) = 95$%, donc on baisse d'autant l'efficacité et la capacité utile devient 209 kbit/s, l'influence des entêtes est donc peu importante dans ce cas.


<br> <br> <br> <br> <br> <br>
<br> <br> <br> <br>

### Exercice 2
Soit un protocole de couche 7 avec une taille d'entête de 20 bytes. En supposant que ce protocole est basé sur TCP et IP, et est transporté en PPP-over-Ethernet, calculez l'efficacité intrinsèque du protocole dans les deux cas suivants. N'hésitez pas à faire le schéma d'encapsulation. Il devrait être clair laquelle des tailles est la plus efficace. Mais est-ce une bonne chose pour les autres utilisateurs de la ligne (indication: MTU)

1. taille de données utiles 200 bytes
    * $U = (200)/(200 + 20 + 20 + 20 + 6 + 18) = 70$%


2. taille de données utiles 800 bytes
    * $U = (800)/(800 + 20 + 20 + 20 + 6 + 18) = 90$%


<div class="page-break"></div>

### Exercice 3
Illustrez un échange HDLC dans lequel une violation de taille de fenêtre est constatée. (classique)

les diverses erreurs.  Une violation de taille de fenêtre survient lorsque le nombre de messages envoyés sur le média mais non confirmés dépasse la taille de fenêtre pré-négociée.

**Réponse plus complète:**

La taille de fenêtre k ne peut pas être infinie car le nombre de numéro de séquence est fonction de la taille de fenêtre (p.ex. 2k en continuous request selective repeat), et le numéro de séquence doit être encodé dans les entêtes (PDU) du protocole (p.ex. un octet, deux octets, etc). En pratique, en HDLC, le nombre de  numéros de séquence est 8 ou 128 éventuellement, ce qui limite la taille de fenêtre à 4 et 64 en continuous request selective repeat p.ex.


1. les autres utilisateurs de la ligne devront attendre que la trame soit envoyée entièrement: dans certains cas, baisser la taille maximum des données peut être un gain d'interactivité (jitter, gigue de phase, variation de délai), en particulier en voix-sur-IP p.ex.

### Exercice 4
Soit un protocole **continuous request, selective repeat N** avec les paramêtres:

* taille des messages: 300 bits
* vitesse de transmission: 3kbps
* temps de propagation: 600ms
* taille de la fenetre (k): 7
* taux d'errur ed la ligne: $10^{-6}$


1 bit sur 1 million en erreur avec une taille de messages petite, **on peut supposer que les erreurs n'auront pas d'importance**.
* Espérance de transmission: $E = \frac{1}{1-P_f}$
  * avec $P_f = 1-(1-P)^n = 1-(1-10^{-6})^{300}=3\cdot 10^{-4}$
* donc $E$ voisin de $1$ donc pas de retransmission

<br><hr><br>

$a = T_p/T_{ix} = 600ms/\frac{N}{D} = 6$
Donc $K<1+2a=13$ (La taille de la fenetre est insuffisante pour un protocole efficace)

$U = k/(1+2a)=t/13=54$%

<br><hr><br>

Aumenter $N$ cela améliorerait l'efficacité en remplissant mieux le canal ($T_{ix}$ augmente donc $a$ baisse et $U$ augmente, et même $k$ peut éventuellement suffire pour un protocole efficace si $k >= 1+2a$). Toutefois cela augmente aussi $P_f$ (et donc dégrade un peu $U$ mais dans ce cas probablement pas suffisamment pour créer un problème).

<br><hr><br>

Comme $k <= 1+2a$ le protocole n'est pas efficace, la perte d'efficacité est due exclusivement au protocole. Augmenter $k$ est la meilleure solution en particulier en _selective repeat_. (si $k = 13$ alors l'efficacité serait voisine de 100%)



<div class="page-break"></div>

### Exercice 5

* Entete Ethernet (octets):

| header | payload          | CRC |
|--------|------------------|-----|
| 14     | max(1500 octets) | 4   |

* Entete IP: 20 octets
* Entete UDP (octets)

| source port | dest port | length | checksum |
|-------------|-----------|--------|----------|
| 2           | 2         | 2      | 2        |

* enteteT TCP: 20 octets
* entete RTP: 12 octets

Cisco indique dans sa doc que chaque communication VoIP utilisant le codec G.711 occupe environ 88Kb/s (par direction)

Sachant que ce codec consiste en des échantillons de **8 bit** ceci 8000 fois par seconde, et qu'en VoIP ils sont transportés en RTP sur UDP sur IP sur Ethernet, groupés par paquets de 20ms, montrez que le débit proposé par Cicso est bien correct:

1. Encapsulation complète:
   *  `|Eth(14) | IP(20) | UDP(8) | RTP(12) | audio (160) CRC(4) |`
2. Efficacité intrinsèque de ce protocole
   * $U = l_{utile}/l_{tot} = 160/218 = 73.4$%
3. Confirmer que le debit est correcte
   * $64kbps/U = 87.2 kbps \approx 88kbps$

### Exercice 6

Entre deux machines sur Internet on mesure:

![Image](https://i.imgur.com/2c3vU9t.png)

Ainsi que : débit maximum potentiel en UDP: 1GB/s

* On communique par TCP, évaluer la taille de la fenetre nécessaire, en nombre de messages, pour que le protocole soit efficace en supposant que le MTU max de 1500 octets en couche 3 sera toujours atteint.

On voit que le délai max est de 16.5ms. On prend donc la moitié pour le temps de propagation, soit 8.25ms (pour eter precis il faudrait considérer que le RTT indique  $2T_p+T_{ix}$ mais c'est négligeable ici car c'est de l'ordre du centième de ms). Avec des paquets de 1500 octets (donc données TCP de 1460 octets dans le cas général) on peut donc poser: $N = 1500\cdot 8 = 12000 bits;\quad \quad D=10^9bits/s \quad\quad T_p = 8.25ms$

* Sachant que TCP, sans window scaling a des fenetres de 65535 max, quelle est la taille de la fenetre en nombre de messages correspondante?:  $65535/1460 = 45 \quad donc\;\; inefficace$

* Estimer le facteur de window-scaling qui doit être appliqué dans le cas présent pour que ce protocole TCP devienne efficace (puissance de 2): $1375/45 \; donc \;\; 2$

### Exercice 7

![Image](https://i.imgur.com/zEM2ohW.png)

### Exercice 8

Claude aimerait dev un protocole à genetre avec les contraintes suivantes:
1. champ de l'entete pour les numéros de seq fait au maximum 6bits
2. taille de la fenetre pour etre efficace devrait être d'au moins 40

* Avec quelle variante de protocole Claude peut respecter ces contraintes?

6 bits permettent $2^6 = 64$ seq différentes (0 à 63). 
* Pour avoir $k >= 40$ 
  * Selective repeat (2k): 80 numéro de sequence
  * Go back N (k+1): 41

Donc Go back N