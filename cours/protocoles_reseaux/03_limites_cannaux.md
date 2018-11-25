---
title: Limite des canaux
date: 2018-10-04
author:  "Sol"
sidebar: auto
project: false
---

## Définitions

| grandeur         | nom                     | description                                                     | unité             |
|------------------|-------------------------|-----------------------------------------------------------------|-------------------|
| $B$              | Bande passante          | plage de fréquence utilisable                                   | Hz                |
| $D$              | Quantité de décision    | nombre de bits codant un moment du signal électrique            | bit/moment ou bit |
| $C$ ou $\dot{D}$ | Debit binaire, capactié | le débit binaire d'un canal (dérivée de D par rapport au temps) | bit/s             |
| $\dot{M}$        | Débit de moment         | nombre de changement d'états électriques du canal par seconde   | moment/s ou baud  |
| $m$              | Valence                 | nombre d'états électriques différents possibles à chaque moment |                   |

Et par définition:
$$\dot{D} = \dot{M}log_2(m)$$

<Container type="warning">

Le **débit binaire** du canal dépend à la fois de:
* La vitesse de changement d'état électrique
* Du nombre de ces états

</Container>


##  Qu'est-ce qu'un canal

C'est le milieux dans lequel circule l'information (analogique ou numérique). Ce milieux a des caractristiques physiques:
* Modlisable (p. ex. par des ensembles de capacits, rsistances et inductances)
* atténuation (affaiblissement) et/ou dformation du signal
    * proportionnel à
        * la longueur du media (p.ex. distance)
        * la fréquence transmise
* Tous les milieux ne sont pas équivalents 
* Un canal réel est bruité (par opposition à un canal parfait)

### Modélisation simple du canal

Une modélisation simple, autrement dit un canal idéal est un filtre passe-bas ou passe-bande. La **bande passante** ($B$) sont les fréquences qui sont transmises sans être trop affectées.

<Container type="info">

La transmission en **bande de base** se fait sur un canal où le filtre est passe-bas et non passe-bande: $B$ couvre toutes les fréquences de 0 à la fréquence de coupure.

</Container>

* $B = 3.1 kHz$ pour la téléphonie (300 à 3400 Hz) (passe-bande)
* $B = 10 MHz$ pour chaque canal de la télévision analogique (passe-bande)
* $B = 4 kHz$ pour chaque canal virtuel en ADSL (passe-bande)


### Limite d'un canal parfait
Un canal parfait (sans bruit) a une bande passante limitée, mais transmet à l'intérieur de ses fréquences tous les signaux sans perturbation. **Nyquist** montre en 1928 qu'un canal parfait est un filtre passe-bas idéal et donc **au grand maximum**:
$$\dot{M} = 2B$$

Et donc:

$$\dot{D} = 2B log_2(m)$$

<Container type="info">

Cette seconde formule donne l'impression que $m$ peut être augmenté autant que l'on veut mais cela n'est pas vrai dans le cas d'un canal réel.

</Container>

### Limite d'un canal réel
L'influance du bruit (température, interférences, bruits parasites, ...) est déterminante:

$$\dot{D} = B log_2(1+\frac{S}{N}) $$

* $S$: Puissance du signal (W)
* $N$: Puissance du bruit (W)

La qualité du signal est souvent mesuré par le rapport **signal sur bruit**:

$$ SNR = 10 log_10(\frac{S}{N}) \; dB$$

<Container type="info">

Le rapport entre la puissances du signal et le bruit (**SNR** Signal to Noise Ratio) est souvent indiqué en **decibel** (dB).

</Container>

## Sources de perturbation

* **Bruit blanc** (uniforme, aléatoire, dépendant de la température, variant peu)
* **Bruit indiciel** (enclenchement de machines: pics rapides, groupés)
* **Perturbations par le signal lui-même** (interférences entre moments)
    * Atténuation dépendant de la fréquence (compensation par égalisation ou modulation large bande)
    * Vitesse de propagation des signaux dépendant de la fréquence (vitesse de phase)
    * Dans certains cas, il faut réduire le débit de moment
* **Perturbation par d'autres canaux** (diaphonie ou crosstalk)
    * Cas particulier: near-end crosstalk: diaphonie provoquée sur le canal de réception par les forts signaux émis sur le canal d'émission
    * Un codage particulier (Code Division Multiplexing) peut permettre de limiter l'impact de la diaphonie -- voire dans un media partagé (sans fil) de permettre plusieurs communications simultanées, vues comme du bruit léger par les autres utilisateurs, au prix d'un B plus grand
    * VDSL2 permet de considérer des lignes parallèles multiples comme un vecteur, avec annulation d'écho adaptative en fonction des signaux transmis
* **Écho**: traiter par suppression d'écho

## Transmission
**On transmet toujours de manière analogique** mais on distingue:

* **Transmission analogique**:
    * données **analogiques** (radio AM/FM, téléphone classique, ...)
    * données **numériques** (ordinateur + model): nombre d'états analogiques limités
    * en général **pas** en "bande de base" (> 0Hz)
    * modulation (en général) d'une porteuse: 
        * AM (amplitude) 
        * FM (Fréquence)
        * PSK (phase)
        * Des combinaisons (QAM)
* **Transmission numérique**:
    * Données **numériques** (Ethernet, ATM, MPLS, réseaux, CATV, xDSL, ...)
        * dont les données analogiques sont déja converties en numériques par A/D (voix-sur-ip, video MPEG, ...)
    * En général **en bande de base**:
        * codages de ligne de divers types (NRZ, AMI, Manchester, MLT-3) 
        * incluant souvent une horloge ou un moyen de resynchronisation (table 4B5B p.ex.)
    * ou à large bande (DMT avec QAM dans chaque sous-canal)

<Container type="info">

* On transmet des données numériques par un signal analogique à l'aide d'un **modem** (modulator/démodulator)
* On convertit des données analogiques en numérique (conversion A/D) via un **codec** (coder/decoder)

</Container>

## Amplification

Pour n'importe quel type de transmission, on peut:

* Amplifier analogiquement:
    * Le signal **et** le bruit sont amplifiés
    * Perte de qualité linéaire avec la distance: (le rapport signal/bruit dépend de la distance)
* Regénérer les états numériques discrets (plus avantageux)
    * Possible uniquement avec les données numériques
    * Nécessaire de passer par des signaux électriques
    * En sortie du système, des états à nouveaux propres sont transmis
    * Dans la plupart des cas, les états sont parfaitement regénérés (possibilité d'ajouter une correction d'erreur)

<Container type="warning" header="A retenir">

* On peut estimer le débit théorique maximal d'un canal
* On ne peut atteindre ce débit maximal que si le SNR est suffisant
* Si le SNR n'est pas suffisant, on peut améliorer les choses en:
    * Diminuant le nombre d'état si le problème est le bruit en général
    * Diminuant le débit de moment si le problème est l'interférence entre moments
    * Augmentant la puissance du signal, par exemple uniquement où nécessaire avec un équaliser (attention aux limites légales de puissance)
* La modulation à large bande (**DMT**) permet d'adapter le nombre d'états pour chaque sous-bande de fréquence
    * Une réserve de capacité permet de supprimer l'impact sur le débit total
* On peut ajouter de la détection ou correction d'erreur en couche 2
* La digitalisation a permis de supprimer la contrainte de dépendance de la distance sur le SNR de bout en bout grace à la régénération numérique

</Container>