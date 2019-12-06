---
title: Chipotage du Kernel
date: 2019-11-06
author: Sol
sidebar: auto
project: false
hide: false
---

### Fresh install

* `uname -r`

```bash
sol@soln:~$ uname -r
3.16.0-10-amd64
```

![Image](https://i.imgur.com/3pgv4wK.png)

### Download new kernel

* `wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.3.8.tar.xz`

#### Signature

![Image](https://i.imgur.com/7nRnlkC.png)

* `wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.3.8.tar.sign`

#### Unpacking

* `unxz linux-5.3.8.tar.xz`

### Vérification
Afin d’être sûr que l’archive est officielle et qu’il n’y a pas eu d’erreur lors du téléchargement, une
vérification de signature est effectuée à l’aide de gpg2


![Image](https://i.imgur.com/mAOrm7H.png)

Cette dernière ne fonctionne pas comme prévu. En effet, il est nécessaire d’importer la clé public pour
pouvoir effectuer la vérification. Ceci se fait en utilisant le paramètre –recv-keys avec la clef d’identification
RSA reçu à la commande précédente ”6092693E”.


![Image](https://i.imgur.com/J3e83Ks.png)

Une fois la clé publique obtenue, la commande de vérification peut être relancé.

![Image](https://i.imgur.com/jCkvlcR.png)

Et c’est gagné, on peut constater que l’empreinte obtenu appartient à Greg Kroah-Hartman et correspond
bien à une des clés indiquées par le site officiel

### Manipulation

* `tar -xvf linux-5.3.8.tar`: decompression

**Après passage en admin**, Il est possible de récupérer la configuration du kernel présente sur la machine actuelle avec la commande
suivante

![Image](https://i.imgur.com/iOE13lx.png)


* `make menuconfig` après installation de xxx
![Image](https://i.imgur.com/juOlAYO.png)

* Changement du nom du kernel

![Image](https://i.imgur.com/vsP9typ.png)

* compilation en // sur 6 coeurs: `make -j6`
```shell
...
  OBJCOPY arch/x86/boot/vmlinux.bin
  AS      arch/x86/boot/header.o
  LD      arch/x86/boot/setup.elf
  OBJCOPY arch/x86/boot/setup.bin
  BUILD   arch/x86/boot/bzImage
Setup is 16620 bytes (padded to 16896 bytes).
System is 4186 kB
CRC 28691319
Kernel: arch/x86/boot/bzImage is ready  (#1)
```


* compilation des modules: `make modules`

```shell
root@sol:/home/sol/linux-5.3.8# make modules
  CALL    scripts/checksyscalls.sh
  CALL    scripts/atomic/check-atomics.sh
  DESCEND  objtool
  Building modules, stage 2.
  MODPOST 77 modules
```

* installation modules: `make modules_install`
* installation `make install`
* reboot

### Tests

#### Nom
```shell
sol@sol:~$ uname -r
5.3.8roscas
```

#### IPv6
```shell
sol@sol:~$ ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:46:f3:a1
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:6 errors:0 dropped:0 overruns:0 frame:0
          TX packets:26 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:715 (715.0 B)  TX bytes:10394 (10.1 KiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:28 errors:0 dropped:0 overruns:0 frame:0
          TX packets:28 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:2456 (2.3 KiB)  TX bytes:2456 (2.3 KiB)
```



