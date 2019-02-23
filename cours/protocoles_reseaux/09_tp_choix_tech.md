---
title: "Choix de technologie: Téléphonie d'entrprise" 
date: 2019-02-19
author: Sol
sidebar: auto
project: false
hide: false
---

## Commentaires
* <Check state="true">MPLS supporte la QoS</Check>
* <Check state="true">ISDN/DDI/BRI: bientôt mort, remplacé par VoIP</Check>
* <Check state="true">PABX: peut être en VoIP aussi</Check>
* <Check state="true">référencer les illustrations si pas faites par vous</Check>
* <Check state="false">aspect haute fiabilité de la méthode avec une seule connexion VoIP externe?</Check>
* <Check state="false">comparer aussi: un central indépendant par succursale, avec connexion VoIP multiples + interne via MPLS</Check>
* <Check state="false">solution clé en main d'opérateur?</Check>

objectif: créer un tableau comparatif avec p.ex. coût install|exploitation, compétences externes, haute fiabilité, indépendance des fournisseurs, etc.

## Introduction

<st c="r">TODO</st>

## Glossaire

* [MPLS](https://fr.wikipedia.org/wiki/Multiprotocol_Label_Switching): 
  * MultiProtocol Label Switching (standard RFC 3031).
  * Protocole de transport des données basé sur la commutation de labels insérés à l'entrée du réseau MPLS et retirés à leurs sortie. 
  * Permet l'acheminement au sein d'une infrastructure unique plusieurs types de trafics chacun respectant des contraintes spécifiques. 
  * L'insertion de labels entre la couche 2 et 3, (protocole de couche "2.5").
  * Intégration **IP**/**ATM**
  * [Plus d'info](https://www.waycom.net/technologie-quest-ce-que-le-mpls/)
* [ATM](https://www.lifewire.com/asynchronous-transfer-mode-817942):
  * Asynchronous Transfer Mode
  * Protocole réseau de niveau 2 qui permet le multiplexage de différents flux de donnée sur un même lien en utilisant une technique de type TDM (Time Division Multiplexing)
* [ISDN](https://en.wikipedia.org/wiki/Integrated_Services_Digital_Network): 
  * Integrated Services Digital Network ou Réseau Numérique à Intégration de Services (RNIS en français).
  * Architecture 
  * Évolution entièrement numérique des réseaux téléphoniques analogiques conçue pour associer la voix, les données, la vidéo et toute autre application ou service.
  * Service historique
  * [DDI](https://www.voip-info.org/ddi/): 
    * Direct Dial In (numbers) 
    * Des numéros additionnels pouvant être associés avec un numéro principal sur une ligne **ISDN** 
    * Fonctionne en configuration point à point. 
    * Généralement utilisé avec un switch/PBX.
  * [BRI](https://en.wikipedia.org/wiki/Basic_Rate_Interface) Basic Rate Interface ou Basic Access (BRI/BA): Interface d'accès à un réseau ISDN.
* [PABX](https://infologo.ch/central-telephonique-pbx/changer-de-central-telephonique-pabx-ou-ipbx/): 
  * Ou **PBX** (Private Branche eXchange).
  * Autocommutateur téléphonique privé. 
  * Assure les connexions téléphoniques entre appelé et appélant au sein d'une entreprise et à l'extérieur. 
  * Limitée au lignes de téléphone classique.
  * Version VoIP: 
    * **IPBX** (Internet Private Branche eXchange): Solution hardware
    * **VPBX** (Virtual Private Branch eXchange): Solution cloud

## VoIP

### C'est quoi ?
Element central du présent rapport, **Voice over Internet Protocol** est une methodologie ainsi qu'un groupe de technologies permettant de faire passer la voix ainsi que des sessions multimedia sur des réseaux IP. 

On parle de de téléphonie sur internet et de <Def def="Broadband telephony">téléphonie à large bande</Def> pour désigner des services de communication (voix, téléphone, fax mais aussi SMS ainsi) sur le réseau Internet à la place des réseaux de télécommunication traditionnel ([PSTN](https://en.wikipedia.org/wiki/Public_switched_telephone_network) ou encore <Def def="Plain Old Telephone System">POTS</Def>, qui fait référence au bon vieux système de téléphonique).

### Mais encore ?

D'après les site commercial [upc.ch](https://www.upc.ch), ainsi que cet [article](https://www.ictjournal.ch/news/2016-02-19/lere-du-tout-ip-commence-maintenant) datant de 2016, en Suisse, depuis 2017 les acteurs des réseaux de télécommunication ont achevé leur plan de transition du réseau classique **ISDN** vers la téléphonie IP et donc des technologies comme le **VoIP**. Dans les années 90, l'**ISDN** fut le premier standard numérique pouvant supporter plusieurs appareils et services sur une même ligne. Même si l'**ISDN** a laissé sa place à l'**ADSL** progressivement depuis les années 2000 pour les connexions Internet, l'**ISDN** est resté particulièrement appréciée dans les petites et moyennes entreprises principalement en raison de sa grande fiabilité.

<Container type="info">

L'abandon de l'**ISDN** par les acteurs des télécom Suisse ne porte pas un coup fatal à cette technologie. Les commutateurs existants peuvent toujours être exploités à l'aide d'adaptateurs.

</Container>

### Comment ?
Dans la pratique, la voix étant un source analogique et donc continue il est premièrement nécessaire de la numériser pour pouvoir la transporter sous forme de paquets discrets pouvant circuler sur un réseau informatique. En fonction du protocole utilisé pour le transport, un encodage spécifique peut être appliqué pour compresser le signal numérisé.

### Pourquoi ?

* **Le futur**:
  * 
* **Aspects économiques**: 
  * Prix plus attractifs que ceux ceux du réseau analogique.
  * **VoIP** permet de faire passer la voix ainsi que des données sur un même réseau ce qui permet de réduire les coûts également.
  * Dans le cadre d'une entreprise aussi bien qu'un foyer, les réseaux numériques sont déjà en place, la VoIP permet de libérer le budget dédié au réseau traditionnel.
* **Aspects logistiques**:
  * La nature numérique de la technologie ne la limite pas à des terminaux spécifiques
  * Les adaptateurs <Def def="Analog Telephone Adapter">ATA</Def> permettent de connecter certains terminaux analogiques au réseau numérique
  * Les terminaux analogiques peuvent être remplacés par des terminaux numériques qui mimiquent esthétiquement et fonctionnelement le matériel classique ce qui réduit les problèmes d'adaptation des utilisateurs.
  * Simplicité d'installation et de maintient d'un réseau unique à la place de deux distincts.


### QoS ?
**Best effort** et perçu comme étant moins fiable que le réseau de télécommunication traditionnel. Sensible aux pertes de données surtout dans des conditions de trafic congestionné, la qualité de la transmission peut être dramatiquement affectée et subir des problèmes de latence et de [jitter](https://en.wikipedia.org/wiki/Jitter) contrairement au réseau de télécommunication classique.


* [VoIP](https://en.wikipedia.org/wiki/Voice_over_IP)
* [μ-law algorithm](https://en.wikipedia.org/wiki/%CE%9C-law_algorithm)
* [A-law algorithm](https://en.wikipedia.org/wiki/A-law_algorithm)

## Solutions étudiées

Avec la migration de l'**ISDN** vers la téléphonie IP, en plus des systèmes classiques hébergés sur site, les entreprises ont maintenant le choix d'opter pour un hébergement externe basé sur des infrastructures cloud privées, public ou hybrides. Avec ce genre d'infrastructures décentralisées, les entreprises réparties sur différents sites peuvent réduire leurs coûts et c'est les différentes solutions existantes qui seront ici étudiées.

Les <Def def="Private Branche eXchange">PABX</Def> (ou **PBX**) sont à la base de ces solutions et désignent des autocommutateurs téléphoniques privés dont le rôle est d'assurer les connexions téléphoniques entre appelé et appelant au sein d'une entreprise et à l'extérieur. Les **PBX** etant limités aux lignes **ISDN**, ces dernières années ont vu l'offre s'étendre notament avec deux variantes basées sur le réseau IP: 
  * <Def def="Internet Private Branche eXchange">IPBX</Def> (aussi appelé <b>PABX IP</b> ou <b>PBX IP</b>): Solution hardware
  * <Def def="Virtual Private Branch eXchange">VPBX</Def>: Solution cloud

Il existe une troisième variante qui est un hybride de ces deux variantes. Dans la suite de ce rapport, ces trois solutions seront premièrement détaillés et ensuite comparés.

Les trois solutions utilisent le réseau **MPLS** pour relier les succursales externes au siège. Ce protocole permet de combiner les concepts du routage IP avec les systèmes de commutation de couche 2 et permet d'acheminer sur une infrastructure commune différents types de trafic (p.ex: voix, IPv4/6 mais aussi Ethernet, ...)  tout en les isolants. Initialement conçu pour accroitre la vitesse du traitement des datagrammes dans l'ensemble des équipements intermédiaires, l'aspect "services" est maintenant prépondérant et le protocole met l'accent sur les points suivants:
* Intégration IP/ATM
* Création de <Def def="Virtual Private Network">VPN</Def>
* Flexibilité dans les combinaisons de media
* Routage multicast
* Differential Services ([DiffServ](https://fr.wikipedia.org/wiki/Differentiated_services))

Ce dernier point est particulièrement notable dans le sens où l'architecture réseau dite **DiffServ** spécifie un mécanisme pour classer et contrôler le trafic tout en fournissant de la **QoS** en différenciant les services de données. Dans la pratique, les routeurs du domaine implémentent une gestion des priorités du trafic ([per-hop behaviour](https://en.wikipedia.org/wiki/Per-hop_behaviour)) et un système de points ([DSCP](https://en.wikipedia.org/wiki/Differentiated_services)) attribués aux paquets IP venant de l'extérieur sur base de l'IP source et de son port ainsi que de l'IP destination par les routeurs périfériques au domaine. À l'intérieur du domaine, les routeurs suivent la valeur du **DSCP** pour déterminer un niveau de priorité allant de **Best-effort** à temps-réel.


### Solution interne (IPBX)

<br>

<Col proportions="6/6" vAlign="120">
<template slot="left">

<Media
  src="https://i.imgur.com/pobTdJb.png"
  url="supprimer cette ligne si pas de contenu"
  caption="image originale: 3cx.fr"
/>

</template>
<template slot="right">

<div style="padding-left: 15px;">

Un <Def def="Internet Protocol Branch eXchange">IPBX</Def> est un standard téléphonique privé lié au réseau Internet. Les communications se font via le protocole IP et non sur les lignes analogiques comme dans le cas de **PABX** traditionnel.

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

<Col proportions="6/6" vAlign="230">
<template slot="left">

<Media
  src="https://i.imgur.com/JsNNLHJ.png"
  caption="image originale: 3cx.fr"
/>

</template>
<template slot="right">

<div style="padding-left: 15px;">

Un <Def def="Virtual Private Branch eXchange">VPBX</Def> est la variante cloud d'un **IPPBX**. Un prestataire externe se charge de la gestion des communications. Dans cette configuration, les communications interne sont gérées à l'extérieur de l'entreprise. On parle ici d'une **solution clés en main**.

</div>

</template>
</Col>

* Aspect économique:
  * Dans cette configuration la centrale est un service loué, Les frais initiaux sont largement réduits en contrepartie de coûts fixes plus élevés.
  * Solution en vogue, beaucoup de solutions et donc une forte concurence joue en faveur du client.
* Aspect logistique:
  * La maintenance est la gestion du matériel sont délégués.
  * La mise en place légère.
### Solution hybride

<br>

<Col proportions="6/6" vAlign="230">
<template slot="left">

<Media
  src="https://i.imgur.com/wtGRQY9.png"
  caption="image originale: 3cx.fr"
/>

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
