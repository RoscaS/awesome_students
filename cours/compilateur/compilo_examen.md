---
title: "Compilo: examen oral"
date: 2020-01-30
author: Sol
sidebar: auto
project: false
hide: true
---

* analyse lexicale
    * Prend en entrée un suite de symboles et produit une suite de lexèmes.
    * Symbolique
* lex
    * définir un token
* analyse syntaxique
    * a quoi ca sert/c'est quoi?
        * produit un AST
        * vérification que le programme soit syntaxiquement correcte (vérification de la structure mais sans prise en compte du contexte)
    * exemple d'applications
    * Ascendante vs Descendante
* analyse sémantique
    * couture
        * Relier les noeuds dans l'ordre d'executions
        * 2ème structure qui se superpose sur l'AST
        * Dans le cas de biffurcations ou de réunifications, on créer des noeuds particuliers
        * Représentation du flux de contrôle
        * On peut se poser des questions comme
            * déclarations uniques ?
            * toutes les fonctions possèdent un code de retour ?
            * code inatteignable ?
        * Les vérifications influent sur
            * charge de travail
            * contrainte de programmation
            * taux d'erreurs à l'execution
            * C est très libre
            * Java est nazi
* Shift and reduce avec exemple à dérouler
    * a=b+c-d
* Type d'erreur : sémantique/syntaxique ou lexicale* -> 9 questions
    1. constante qui est redifini -> sémantique
    2. mot clé utilisé dans identificateur -> syntaxique
    3. accès une case d'un tableau qui n'existe pas -> (piège) à l'exécution = runtime ATTENTION, peut aussi être détecté dans le sémantique que le tableau n'a pas été initialisé
    4. déclaration d'une variable 15sbfs -> lexicale car ne correspond pas à un identification ni à une valeur
    5. conflit sin('a') -> semantique
    6. constante avec un nombre très très grand -> sémantique -> car tout dépend le type on aura une taille différente
    7. variable non définie -> sémantique comme pour la portée des variables
    8. porté des variables -> sémantique
    9. oublie d'une paranthèse de fermeture -> syntaxique
    10. oublie d'un " de fin dans un commentaire -> lexicale

* Génération de code
    * parcours de l'arbre en profondeur
    * chaque noeud produit une section de code
    * grosse tâche simplifiable si bien découpée
    * attention à l'allocation des registres (si machine à registre). Une instruction produit un résultat qui va dans un registre

* Différence décendant/ascendant (exemple)



* Couture
    * do while
    * if else
    * explication d'une couture sur la pile
    * donner le byte code (pour la svm)

* regex
    * ça commence par _ et se termine par un nombre -> _[0-9]+
    * détecter un commentaire -> \'\'.+\'\' ou \".+\"
    * {0,1} pour qu'il se termine toujour avec 00 -> \d+00
    * mot commencant par ab -> ^ab.*
    * finissant par xyz -> .*xyz$

* Automate à état fini
    * par rapport à un tableau de transition
    * graphe pour reconnaître les mots commancant ou finissant par 011

* Machine à pile
    * pile + mémoire infinie
    * La JVM est une machine à pile
    * Conversion facile à partir de l'AST
        * Chaque noeud est traduit directement
        * Instructions écrite en parcourt post-order

* Machine à registre
    * registre + mémoire
    * IBM360/370
    * bonne efficacité
    * nb de registres limité

* Compilateur vs Interpréteur
    * Un intepréteur peut être facilement convertit en générateur
        * écriture dans un fichier au lieu de l'exécution
        * retranscription des conditions
        * Convient au langage de haut niveau
        * si le compilateur est bon -> performances raisonnables
    * Un interpreteur à besoin de données d'execution
    * Un interpreteur peut être itératif
        * proche de la structure processeur
        * boucle & aiguillage
        * nécessite couture de l'AST & pointeur sur noeud courant
        * facile à écrire
        * plus lent que compilé
    * Un interpreteur peut être récursif
        * le noeud appel ses enfants
        * erreur pouvant survenir à n'importe quel moment
        * solution lente et plus lente qu'itératif

* Transformation de code en code SVM
* AST pour assignation et if
* Code SVM
    * if/else
    * A=10
    * D = a*2 - 4*a
    * arbre

* Différence entre bibliothèque statique et dynamique

qqn sait ?
En c/c++ en gros quand tu compiles l'exécutable (linking) en mode dynamique il va mettre que les références à la bibliothèques qui seront partagées pour tous les programmes et c'est l'OS qui va le link au runtime tandis qu'en statique c'est intégré au .exe ou autre direct.