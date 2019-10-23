---
title: Cheatsheet
date: 2019-10-22
author: Sol
sidebar: auto
project: false
hide: false
---

##  Old
* [https://roscas.github.io/linux/Linux-CheatSeet.html](old blog)

## Some stuff
> Mettre à jour votre système et ajouter les paquets suivants à votre distribution:
> * `sysvbanner`
> * `figlet`
> * `hello`

```bash
sudo apt update
sudo apt upgrade
sudo apt install sysvbanner figlet hello
```

> Trouver le nom et l'emplacement des commandes contenues dans les paquets `sysvbanner` et `figlet` et faire les modifications nécessaires pour que seul root puisse exécuter ces deux commandes.

```bash
dpkg -L sysvbanner figlet | grep /usr/bin/
sudo chmod o-x $(dpkg -L sysvbanner figlet | grep /usr/bin/)
sudo chmod g-x $(dpkg -L sysvbanner figlet | grep /usr/bin/)
```

> Utiliser la commande du paquet `sysvbanner` couplée à la commande `date` pour afficher l'heure courante sous la forme **HH:MM:SS**:

```bash
# Attention à l'espace
banner $(date +%T)
```

> Utiliser la commande du paquet `figlet` couplée à la commande `date` pour afficher l'heure courante sous la forme `HH:MM:SS`

```bash
# Attention à l'espace
figlet-figlet $(date +%T)
```

> * Créer un groupe nommé `g1` avec un **gid** valant `1456`
> * Créer un groupe nomné `g2` avec un **gid** valant `4577`
> Créer trois utilisateurs avec les caractéristiques suivantes:

| Username | password | Uid  | Gid | Home dir            |
| -------- | -------- | ---- | --- | ------------------- |
| usera    | 1234     | 1000 | g1  | `/home/users/usera` |
| userb    | 1234     | 2000 | g2  | `/home/users/userb` |
| userc    | 1234     | 3000 | g3  | `/home/users/userc` |

```bash
sudo groupadd -g 1456 g1
sudo groupadd -g 4577 g2
sudo useradd -p 1234 -u 2000 -g g1 usera -md /home/users/usera
sudo useradd -p 1234 -u 3000 -g g1 userb -md /home/users/userb
sudo useradd -p 1234 -u 4000 -g g2 userc -md /home/users/userc
```

> Ddans l'arborescence `~/userx/test` créer les répertoires suivants:
> * data_x
> * temperature_x
> * pression_x
> * humidite_x
> * log_x
>
> Avec $x \in \{a, b, c\}$

```bash
for i in {a,b,c}; do
    for j in data temperature pression humidite log; do
            mkdir -p /home/users/user$i/test/"${j}_${i}"
        done
done
```

```bash
for i in {a,b,c}; do for j in data temperature pression humidite log; \
do mkdir -p /home/users/user$i/test/"${j}_${i}"; done; done
```

> Changer les protections des répertoires pour que les répertoires `data_a`, `data_b`, `data_c` soient en accès total (RWX) pour tout le monde:

```bash
# pas sudo !
chmod a+rwx /home/users/user?/test/data_?
```

> Changer les protections des répertoires `log_a`, `log_b`, `log_c` pour que le propriétaire soit root:

```bash
 sudo chown root /home/users/user?/test/log_?
```

> Changer les protections des autres répertoires pour qu'ils soient totalement interdits d'accès sauf pour leur propriétaire:

```bash
for i in humidite pression temperature; do chmod 700 xhome/users/user?/test/"${i}"_?; done
```

**Compilation**
> * Compiler le code avec gcc pour obtenir la commande `permis-linux`
> * Exécuter le programme `permis-linux`
> * Le résultat est incorrecte, modifier le code pour que l'affichage soit bon.
> * Compiler le code avec gcc pour obtenir `permis-linux-2`
> * Exécuter le programme et vérifier que cette fois il est correct

```bash
nano permis.c
    # ajout du code
gcc permis.c -o permis-linux
./permis-linux
sed -i -- "s/%c/%d/g" permis.c
gcc permis.c -o permis-linux
./permis-linux-2
```

> * Compiler ce code pour obtenir la cmd `permis-linux-3` de telle façon à pouvoir l'exec avec `gdb`
> * Charger le prg dans `gdb`
> * Afficher le code source dans `gdb`
> * Executer ligne par ligne jusqu'à (sans exec) `c=a+b`
> * Modifier le contenu de la variable `a` pour qu'elle contienne la valeur `10`
> * Continuer le prg en ligne/ligne et check que `c` contient la bonne val à la fin

```bash
gcc permis.c -o permis-linux-3 -g
gdb permis-linux-3
list
start
n       (next)
set var a = 10
n
n
...
```

**Oneliners**
> Recherche sur toute l'arbo les fichiers dont le nom contient deux consonnes à la suite.
> * Afficher le resultat à l'écran et dans un fichier
> * Supprimer l'affichage des messages d'erreur

```bash
find . -name "[qwrtpsdfghjklzxcvbnm][qwrtpsdfghjklzxcvbnm]*" 2> /dev/null | tee output.txt
```

> Recherche sur toute l'arbo les fichiers < 10M, owner: root, executables
> * Mémoriser résultat dans /Result.dat

```bash
find . -size -10M -user root -executable > /Result.dat
```

> Génerer un fichier nummé alea.dat contenant 10k n aléatoires
> * Afficher les 3 plus grandes valeurs
> * Afficher les 3 plus grandes valeurs uniques
```bash
for i in $(seq 10000); do echo $RANDOM >> alea.dat; done
sort -rn alea.dat | head -3
sort -rnu alea.dat | head -3
```

> À l'aide de for, seq et factor générer un fichier nommé `prime.dat` contenant la liste des nombres premiers entre 2 et 10000

```bash
 for i in $(seq 100); do factor $i | sed "s/^[^:]*://" | sed "s/ /\n/g" >> temp.dat; done
 sort -gu temp.dat > prime.dat
```