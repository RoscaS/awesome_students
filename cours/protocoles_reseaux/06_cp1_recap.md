---
title: "CP1: Centralisation"
date: 2018-11-22
author: Sol
sidebar: auto
project: false
---

<br>

<Container type="info">

* 1h30
    * 30 minutes sans documentation (à rendre à l'échéance)
        * questions théoriques (voir notamment la révision et les thèmes ci-dessous)
    * 60 minutes avec documentation imprimée
        * exercices dans le style de ceux faits pendant le cours et la révision
* Se munir d'une calculatrice sachant calculer des logs (ordinateur exclu!)

</Container>


## Liens

* [Wiki](https://ssl.horus.ch/~schaefer/bin/view/HEArc/ProtocolesEtReseaux)
* [Exemple de test](https://ssl.horus.ch/~schaefer/pub/HEArc/ProtocolesEtReseauxMatiereControlePrincipalI/examen.pdf)
* [Exercices de révision](https://ssl.horus.ch/~schaefer/bin/view/HEArc/ProtocolesEtReseauxExercicesRevisionControlePrincipalI)
* [Questions pour le cp1](https://ssl.horus.ch/~schaefer/bin/view/HEArc/ProtocolesEtReseauxReponseAuxQuestionsControlePrincipalI)
* [Corrigé des exercices théorie de l'information](https://ssl.horus.ch/~schaefer/bin/view/HEArc/CorrigeExerciceTheorieInfo)



## 1. Théorie de l'information

* [Cours](https://ssl.horus.ch/~schaefer/bin/view/HEArc/InformationEtCodage)
* [Exercices](https://ssl.horus.ch/~schaefer/bin/view/HEArc/CorrigeExerciceTheorieInfo)

### Matière

* information et codage (codage, éléments de conversion D/A, types de sources)
* quantité d'information
* entropie
* quantité de décision et redondance
* compression sans perte
* éléments de compression avec perte
* (application au générateur aléatoire)


## 2. Limites des canaux

* [Cours](https://ssl.horus.ch/~schaefer/bin/view/HEArc/CapaciteDesCanaux)

### Matière

* logarithmes, puissances, affaiblissement, gains et niveaux
* capacité des canaux (Nyquist, Shannon)
    * bande passante et impact sur la vitesse de modulation, rapport signal sur bruit et impact principal sur la valence (nombre d'états par moment du signal électrique), débit électrique (de moments), calcul du débit binaire maximum idéal et en présence de bruit
    * avantage de la modulation à large bande en cas de perturbations sur une plage de fréquence
    * avantage de la digitalisation (régénération numérique vs amplification analogique)


## 3. Traitement des erreurs (codage de voie)

* [Cours](https://ssl.horus.ch/~schaefer/bin/view/HEArc/CodageDeVoie)
* [Exercices + corrigé](http://cvs.alphanet.ch/cgi-bin/cvsweb/~checkout~/schaefer/public/cours/EISI/teleinfo_2/exercices/erreurs/hamming-crc/hamming_crc.pdf?rev=HEAD;content-type=application%2Fpdf)
* [Video: détection et correction d'erreurs](https://www.youtube.com/watch?v=Gn0Y9T5ur_w)
* [Video: exemple code de Hamming](https://www.youtube.com/watch?v=Gn0Y9T5ur_w&feature=youtu.be&t=461)

### Matière

* codage de source (suppression de la redondance par compression p.ex.) / codage de voie (ajout de redondance pour détection/correction d'erreur)
* détection et correction des erreurs: principes
* distribution temporelle des erreurs
* groupes d'erreur
* poids, distance, distance minimale et code de Hamming
* appliquer un code correcteur dans son domaine de puissance et que faire pour les erreurs résiduelles
* exemples: parité, paritée croisée, etc
    * application au RAID
* CRC
    * principes et fonctionnement
    * calcul manuel
    * calcul par tranche d'un CRC
        * optimisation par table (programme informatique)
        * (application au cas à 1 bit schéma d'implémentation du CRC en matériel)
    * erreurs non détectées

</Spoiler>
