---
title: Next Generation Networks
date: 2018-16-12
author:  "Michael, Sol"
sidebar: auto
project: true
---

## Questionnaire

Suite au [texte](https://ssl.horus.ch/~schaefer/pub/HEArc/NextGenerationNetworks/fi-8-10-pages-5-a-9.pdf):

### 1. Pourquoi Internet et le protocole IP ne sont pas adaptés aux besoins des opérateurs classiques de télécom ?

* La [technologie synchrone](https://fr.wikipedia.org/wiki/Hi%C3%A9rarchie_num%C3%A9rique_pl%C3%A9siochrone) à 64 kbit/s ne connaît plus de nouveau développement. 
* Les standards élaborés pour le transport de la voix sur les réseaux IP ne garantissent pas la confidentialité de la signalisation. Les flux audio et vidéo peuvent être cryptés, mais les données échangées lors de l’établissement, durant, et à la clôture des communications ne le sont pas. Or, ce sont les données les plus sensibles.
* L’Internet banalisé n’est pas en mesure d’offrir une qualité de service adéquate pour les applications de communication en temps réel. Il offre la qualité Best effort, alors que la technologie IP est en mesure d’offrir davantage. 
* Ne permet pas non plus d’assurer l’itinérance (roaming)
et la mobilité continue (handover) offertes par les réseaux mobiles de communication. Il n’existe pas de mécanisme dans l’Internet banalisé permettant d’assurer que la communication ne sera pas interrompue lors du passage d’un point d’accès WiFi ou WiMAX public à un autre. 


### 3. Décrivez l'architecture générale d'un réseau de type NGN par rapport à celui d'un réseau d'accès Internet classique.



<Col proportions="6/6" vAlign="20">
<template slot="left">


<Media
    src="https://i.imgur.com/qT3jtIV.png"
    caption="architecture globale des réseaux NGN"
    center="true"
/>

</template>
<template slot="right">

Les réseaux de prochaine génération présentent une **structure horizontale**, séparant de manière conséquente **l’accès** (fibre optique, DSL, UMTS, CATV, WiFi WiMAX, LTE, etc.), le **transport**, la **signalisation** et les serveurs **d’applications** Contrairement aux réseaux actuels qui ont été construits indépendanmment les un des autres.

</template>
</Col>

### 5. Quel protocole est utilisé pour la signalisation générale (p.ex. établissement d'appel) dans les NGNs ?

><Def def="Session Initiation Protocol">SIP</Def>: Protocole standard ouvert de gestion de sessions souvent utilisé dans les télécommunications multimédia (son, image, etc.) Il est depuis 2007 le plus courant pour la téléphonie par internet (la VoIP). SIP n'est pas seulement destiné à la VoIP mais aussi à de nombreuses autres applications telles que la visiophonie, la messagerie instantanée, la réalité virtuelle ou même les jeux vidéo en ligne.
> <span style="float: right"><a href="https://fr.wikipedia.org/wiki/Session_Initiation_Protocol">Wikipedia</a></span>

### 7. Quels autres protocoles classiques sont utilisés ?

* RADIUS (via <Def def="il assure l’échange des informations relatives aux souscriptions des usagers">Diameter</Def>)

### 9. Décrivez la procédure nécessaire pour utiliser un NGN

Avant de pouvoir établir une communication avec d’autres usagers,
un terminal NGN doit remplir une série de conditions préalables:

* L’usager doit souscrire à un abonnement, comme il le fait pour le réseau fixe ou mobile ou pour l’Internet.
* Le terminal doit activer la connexion avec le réseau d’accès IP (fibre optique, DSL, UMTS, CATV, WiFi, WiMAX, LTE, etc.). Cette procédure comprend également l’attribution d’une adresse IP.
* Le terminal lance ensuite la procédure de découverte du serveur P-CSCF&, qui sera son point d’entrée dans le réseau et son serveur Proxy SIP pour toute la durée du futur enregistrement au niveau du NGN. Cette procédure est initiée, typiquement, lorsqu’on allume le terminal.
* Ensuite, le terminal s’enregistre dans le NGN, au niveau SIP. Le NGN est maintenant en mesure d’authentifier l’usager, de mettre en place des tun

### 11. Expliquez la notion de zone de sécurité en NGN

![Image](https://i.imgur.com/xZnFL8A.png)

### 13. Est-ce que le chiffrement de la signalisation est assurée de bout en bout entre deux partenaires Internet sur un réseau NGN, dans le concept NGN et quels sont les deux avantages ?

>Indication: il faut réconcilier les intérêts des utilisateurs (sphère privée) et ceux des gouvernements (pouvoir obtenir le contenu des communications qui passent sur leur territoire)

Oui


### 14. Comment fonctionne l'abonnement à des ressources payantes ?


### 15. Question subsidiaire: Quelle interaction entre un développement global des NGN et la neutralité du réseau ?