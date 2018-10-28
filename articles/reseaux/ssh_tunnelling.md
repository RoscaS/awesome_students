---
title: SSH tunnelling & port forwarding
date: 2018-10-28
author: Sol
sidebar: auto
---

## Liens

* [ssh port tunnelling](https://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html) ssh port forwarding
* [tcpdump](https://www.tecmint.com/12-tcpdump-commands-a-network-sniffer-tool/) cli packet sniffer tutorial


## Ksp on Shadow, script on local, trough jrosk

* `ssh -R 50000:127.0.0.1:50000 -R 50001:127.0.0.1:50001 jrosk@104.248.29.118`: <st c="r">localhost ne fonctionne pas!</st>
* Ne pas oublier d'allow 50000 et 50001 dans ufw: `sudo ufw allow xxx`