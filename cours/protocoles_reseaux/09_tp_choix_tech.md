---
title: "Choix de technologie: Téléphonie d'entrprise" 
date: 2019-02-19
author: Sol
sidebar: auto
project: false
hide: false
---


## Introduction

<st c="r">TODO</st>

## Glossaire

* [MPLS](https://fr.wikipedia.org/wiki/Multiprotocol_Label_Switching): 
  * MultiProtocol Label Switching (standard RFC 3031) 
  * Mecanisme de transport (réseau) des données basé sur la commutation de labels insérés à l'entrée du réseau MPLS et retirés à leurs sortie. 
  * Permet l'acheminement au sein d'une infrastructure unique plusieurs types de trafics chacun respectant des contraintes spécifiques. 
  * [Plus d'info](https://www.waycom.net/technologie-quest-ce-que-le-mpls/)
* [ISDN](https://en.wikipedia.org/wiki/Integrated_Services_Digital_Network): 
  * Integrated Services Digital Network ou Réseau Numérique à Intégration de Services (RNIS en français).
  * Architecture 
  * Évolution entièrement numérique des réseaux téléphoniques analogiques conçue pour associer la voix, les données, la vidéo et toute autre application ou service.
  * [DDI](https://www.voip-info.org/ddi/): 
    * Direct Dial In (numbers) 
    * Des numéros additionnels pouvant être associés avec un numéro principal sur une ligne **ISDN** 
    * Fonctionne en configuration point à point. 
    * Généralement utilisé avec un switch/PBX.
  * [BRI](https://en.wikipedia.org/wiki/Basic_Rate_Interface) Basic Rate Interface ou Basic Access (BRI/BA): Interface d'accès à un réseau ISDN.
* [PABX](https://infologo.ch/central-telephonique-pbx/changer-de-central-telephonique-pabx-ou-ipbx/): 
  * Autocommutateur téléphonique privé. 
  * Assure les connexions téléphoniques entre appelé et appélant au sein d'une entreprise et à l'extérieur. 
  * Limitée au lignes de téléphone classique.

## VoIP

### C'est quoi ?
Element central du présent rapport, **Voice over Internet Protocol** est une methodologie ainsi qu'un groupe de technologies permettant de faire passer la voix ainsi que des sessions multimedia sur des réseaux IP. On parle de de téléphonie sur internet et de <Def def="Broadband telephony">téléphonie à large bande</Def> pour désigner des services de communication (voix, téléphone, fax mais aussi SMS ainsi) sur le réseau Internet à la place des réseaux de télécommunication traditionnel ([PSTN](https://en.wikipedia.org/wiki/Public_switched_telephone_network) ou encore POTS, Plain Old Telephone System qui se trduirait par "Le bon vieux système de téléphonique").

### Comment ?
Dans la pratique, la voix étant un source analogique et donc continue il est premièrement nécessaire de la numériser pour pouvoir la transporter sous forme de paquets discrets pouvant circuler sur un réseau informatique. En fonction du protocole utilisé pour le transport, un encodage spécifique peut être appliqué pour compresser le signal numérisé.

### Pourquoi ?

* **Aspects économiques**: 
  * Prix plus attractifs que ceux ceux du réseau analogique.
  * **VoIP** permet de faire passer la voix ainsi que des données sur un même réseau ce qui permet de réduire les coûts également.
  * Dans le cadre d'une entreprise aussi bien qu'un foyer, les réseaux numériques sont déjà en place, la VoIP permet de libérer le budget dédié au réseau traditionnel.
* **Aspects logistiques**:
  * La nature numérique de la technologie ne la limite pas à des terminaux spécifiques
  * Les adaptateurs **ATA** (Analog Telephone Adapter) permettent de connecter certains terminaux analogiques au réseau numérique
  * Les terminaux analogiques peuvent être remplacés par des terminaux numériques qui mimiquent esthétiquement et fonctionnelement le matériel classique ce qui réduit les problèmes d'adaptation des utilisateurs.
  * Simplicité d'installation et de maintient d'un réseau unique à la place de deux distincts.


### QoS ?
**Best effort** et perçu comme étant moins fiable que le réseau de télécommunication traditionnel. Sensible aux pertes de données surtout dans des conditions de trafic congestionné, la qualité de la transmission peut être dramatiquement affectée et subir des problèmes de latence et de [jitter](https://en.wikipedia.org/wiki/Jitter) contrairement au réseau de télécommunication classique.


* [VoIP](https://en.wikipedia.org/wiki/Voice_over_IP)
* [μ-law algorithm](https://en.wikipedia.org/wiki/%CE%9C-law_algorithm)
* [A-law algorithm](https://en.wikipedia.org/wiki/A-law_algorithm)

## Solutions étudiées

De part le contexte de la problématique initiale, deux principaux axes de résolutions se démarquent:
* Une solution interne (**IPBX**)
* Une solution externe (**VPBX**)

Il existe une troisième variante qui est un mélange des deux axes principaux. Dans la suite de ce rapport, ces trois solutions seront premièrement détaillés et ensuite comparés.

### Solution interne (IPBX)

<br>

<Col proportions="6/6" vAlign="100">
<template slot="left">

![Image](https://i.imgur.com/pobTdJb.png)


</template>
<template slot="right">

<div style="padding-left: 15px;">

Un **IPBX** (Internet Protocol Branch eXchange) est un standard téléphonique privé lié au réseau Internet. Les communications se font via le protocole IP et non sur les lignes analogiques comme dans le cas de **PABX** traditionnel.

Une centrale téléphonique située au siège de l'entreprise reliée à Internet et utilisant le réseau **MPLS** pour relier les succursales externes. Dans cette configuration, le système de gestion des communications est interne à l'entreprise et les communications internes ne sortent pas de l'entrprise.

</div>

</template>
</Col>

* Aspect économique:
  * Cette solution implique de lourds frais initiaux mais qui sont mitigés par des coûts fixes réduits.
  * Possibilité d'utilisation d'adaptateurs **ATA** pour une réduction des frais initiaux.
* Aspect logistique:
  * La mise en place peut être longue et n'est pas un procéssus simple.

### Solution externe (VPBX)

<br>

<Col proportions="6/6" vAlign="200">
<template slot="left">

![Image](https://i.imgur.com/JsNNLHJ.png)

</template>
<template slot="right">

<div style="padding-left: 15px;">

Un **VPBX** (Virtual Private Branch eXchange) est l'équivalent cloud d'un PBX traditionnel. Un prestataire externe se charge de la gestion des communications. Dans cette configuration, les communications interne sont gérées à l'extérieur de l'entreprise. On parle ici d'une **solution clés en main**.

</div>

</template>
</Col>

* Aspect économique:
  * Dans cette configuration la centrale est un service loué, Les frais initiaux sont largement réduits en contrepartie de coûts fixes plus élevés.
  * Solution en vogue, beaucoup de solutions et donc une forte concurence joue en faveur du client.
* Aspect logistique:
  * La maintenance est la gestion du matériel sont délégués.
  * La mise en place légère.
### Compromis

<br>

<Col proportions="6/6" vAlign="210">
<template slot="left">

![Image](https://i.imgur.com/wtGRQY9.png)

</template>
<template slot="right">

<div style="padding-left: 15px;">

Il s'aggit d'un compromis entre les deux précédentes solutions.

</div>

</template>
</Col>

* Aspect économique:
  * <st c="r">TODO</st>
* Aspect logistique:
  * Permet de se défaire des problèmes de pannes tout en gardant une certaine flexibilité sur les possibilités de paramétrage de la téléphonie de l'entreprise.
  * La mise en place reste aisée car elle est souvent faite par l'entreprise en charge de l'installation.

## Comparaison

<st c="r">TODO</st>

## Conclusion

<st c="r">TODO</st>

