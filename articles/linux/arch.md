---
title: Arch Linux
date: 2019-02-18
author: Sol
sidebar: auto
project: false
hide: false
---

## Softwares

* **Files browser**:
  * cli: Ranger
  * ui: Dolphin
* **Process manager**:
  * cli: Htop
* **Burn iso**:
  * Etcher
* **Paint like**:
  * KolourPaint
* **Color picker**:
  * Gpick
* **Gif/mp4 capture**:
  * Peek
* **Screen share**:
  * TeamViewer
* **Documentation**:
  * Zeal
* **Clavier**:
  * xdotool

## Print screen

* `sudo pacman -S xclip maim `
* add `bindsym Print exec  maim -s --format=png /dev/stdout | tee ~/Downloads/last_screen.png | xclip -selection clipboard -t image/png -i` in conf file


## Install other Linux distro beside Arch

1. Mount the partition with the new system.
  * List the partitions of your system:
    * `lsblk`
  * Mount it:
  * `sudo mound /dev/sdXx /mnt`
2. Install OS prober:
  * `sudo pacman -S os-prober`
3. Update GRUB:
  * `sudo grub-mkconfig -o /boot/grub/grub.cfg`

* [Average Linux User: install](https://www.youtube.com/watch?v=lOg_u5R0si4)
* [Average Linux User: Grub](https://www.youtube.com/watch?v=KU6QC8UDyoI)

## ArcoLinux

* `super` `escape`: kill the application now
* `ctrl` `alt` `backspace`: kill xserver – back to login screen
* `ctrl` `shift` `escape`: taskmanager

