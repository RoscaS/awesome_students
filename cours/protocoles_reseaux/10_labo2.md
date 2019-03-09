---
title: Labo VoIP
date: 2019-03-06
author: Sol
sidebar: auto
project: false
hide: false
---

* **SIP**: Signalisation (dring dring alo raccorcher)
* **SDP**: Selection codec
* **RTP**: Passage des donnée

## Découverte d'Asterisk

* **Affichez la fin du fichier de configuration du protocole SIP**
  * /

* **Les mots de passe préconfigurés sont-ils stockés hachés ou en clair ?**
  * Ils sont en clair

* **Quelles sont les permissions du fichier sip.conf et pourquoi y-a-t-il cette restriction ?**
  * Read and Write pour le grp `asterisk` et le user `asterisk`

* **Quels sont les téléphones SIP configurés par défaut (dans cette pré-configuration) ?**
  * 200 et 201

* **Interagissez avec la console Asterisk**
  * a) **lancez la console avec sudo asterisk -rcvvvvvvvvvvvv 2 – voir exemple ci- dessous**
  * b) **ouvrez un deuxième terminal, lancez une nouvelle console, qu’observez-vous dans la 1ère console ?**
    * Les deux consoles sont connectées
  * c) **redémarrez Asterisk, que se passe-t-il dans les 2 consoles ?**
    * C'est vvvvvvvvvverbeux. Il lit les fichiers de configuration.

* **Déterminez les téléphones SIP pré-configurés dynamiqueme**
  * 200 et 201 (Ceux du fichier config)

## Co de téléphones

### Vitesse brute

* données utiles: 160
* données totales: 214
* interval: 20 ms

* débit brut: 10.7 kBps
* débit utile: 8 kBps

### Quel codec est négocié

* **PCMA**

### Pression de touche (DTMF)

Envoyé sous forme d'une meta donnée **RTP**.


## Dial plan

* Default 

### Quels services du PABX on peut appeler dpuis le téléphone SIP

* Goto (500)
* Echo (508)

### Vérifier si le téléphone peut appeler le contexte / dial plan

* oui !


