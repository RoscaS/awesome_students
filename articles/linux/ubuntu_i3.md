---
title: i3 config for Ubuntu
date: 2019-06-14
author: Steven
sidebar: auto
project: false
hide: false
---



## Tilix
```
sudo apt install tilix
```

### Newer version
```
sudo add-apt-repository ppa:webupd8team/terminix
sudo apt-get update
sudo apt install tilix # Will upgrade tilix
```

### VTE problem
```
sudo ln -s /etc/profile.d/vte-2.91.sh /etc/profile.d/vte.sh
```

Add at end of .zshrc
```
if [ $TILIX_ID ] || [ $VTE_VERSION ]; then
        source /etc/profile.d/vte.sh
fi
```

## Ulauncher
```
sudo add-apt-repository ppa:agornostal/ulauncher
sudo apt update
sudo apt install ulauncher
```

## Git
```
sudo apt install git
```

### Save credentials
```
git config credential.helper store
```

## Curl
```
sudo apt install curl
```

## i3-gaps

```
sudo apt remove i3-wm
sudo apt install libxcb1-dev libxcb-keysyms1-dev libpango1.0-dev libxcb-util0-dev libxcb-icccm4-dev libyajl-dev libstartup-notification0-dev libxcb-randr0-dev libev-dev libxcb-cursor-dev libxcb-xinerama0-dev libxcb-xkb-dev libxkbcommon-dev libxkbcommon-x11-dev autoconf xutils-dev libtool automake
mkdir tmp
cd tmp
git clone https://github.com/Airblader/xcb-util-xrm
cd xcb-util-xrm
git submodule update --init
./autogen.sh --prefix=/usr
make
sudo make install
cd tmp
git clone https://www.github.com/Airblader/i3 i3-gaps
cd i3-gaps
git checkout gaps && git pull
autoreconf --force --install
rm -rf build
mkdir build
cd build
../configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
```

## Polybar
```
sudo apt-get install cmake cmake-data libcairo2-dev libxcb1-dev libxcb-ewmh-dev libxcb-icccm4-dev libxcb-image0-dev libxcb-randr0-dev libxcb-util0-dev libxcb-xkb-dev pkg-config python-xcbgen xcb-proto libxcb-xrm-dev libasound2-dev libmpdclient-dev libiw-dev libcurl4-openssl-dev libpulse-dev libxcb-composite0-dev xcb libxcb-ewmh2
git clone https://github.com/jaagr/polybar.git
cd polybar && ./build.sh
```

Add in i3 config
```
exec_always --no-startup-id "sh -c 'sleep 2; exec ~/.config/polybar/launch.sh &'"
```

Add in ~/.config/polybar/launch.sh
```
#!/usr/bin/env sh
killall -q polybar

# Wait until the processes have beenq shut down
while pgrep -u 1000 -x polybar > /dev/null; do sleep 1; done

count=$(xrandr --query | grep " connected" | cut -d" " -f1 | wc -l)
primary=$(xrandr --query | grep "primary" | cut -d" " -f1)
if type "xrandr" > /dev/null; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    tray=none
    if [ $m = $primary ]; then
      tray=right
    fi
    TRAY_POSITION=$tray MONITOR=$m polybar --reload mainbar-i3 -c ~/.config/polybar/config &
  done
else
polybar --reload mainbar-i3 -c ~/.config/polybar/config &
fi
```

## Chromium
```
sudo apt install chromium-browserD
```

## VS code
```
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install code # or code-insiders
```

## Python alias
Add this in .zshrc
```
alias python=python3
```

## Pip
```
sudo apt install python3-pip
```

## Virtual env
```
sudo pip3 install virtualenv virtualenvwrapper
```

## ZSH
```
sudo apt install zsh
chsh -s /bin/zsh <username>
```

## Oh my zsh
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## ZSH autosuggest
```
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/
```

Source it in .zshrc
```
source "$HOME/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh"
```

## ZSH highlight
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/
```

Source it in .zshrc
```
source "$HOME/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"
```

## Space ship
```
git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt/"
```

Source it in .zshrc
```
source "$HOME/.oh-my-zsh/custom/themes/spaceship.zsh-theme"
```

## Arandr
```
sudo apt install arandr
```

## Autorandr
```
sudo apt install autorandr
```

Add in i3 config
```
exec_always --no-startup-id autorandr --change # Load detected config
```

## Lxappearance
```
sudo apt install lxappearance
```

## Arc Theme
```
sudo apt install arc-theme
```

## Arc icon
```
sudo add-apt-repository ppa:noobslab/icons
sudo apt-get update
sudo apt-get install arc-icons
```

## Captain cursor
```
sudo add-apt-repository ppa:dyatlov-igor/la-capitaine
sudo apt update
sudo apt install la-capitaine-cursor-theme
```

## Cursor size
```
echo Xcursor.size: 16 >> ~/.Xresources
```

Add this to i3 config

```
exec_always --no-startup-id xrdb .Xressources
```

## Htop
```
sudo apt install htop
```

## S-tui
```
sudo pip3 install s-tui
```

## Policykit
```
sudo apt install policykit-desktop-privileges policykit-1-gnome
```

Add in i3 config

```
exec --no-startup-id /usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
```

## Pasystray
```
sudo apt install pasystray
```

Add in i3 config
```
exec --no-startup-id pasystray
```

## Modmap, replace caps in control, PgUp in left, PgDown in Right
~/.Xmodmap
```
clear lock
clear control
keycode 66 = Control_L
add control = Control_L Control_R

keycode 112 = Left
keycode 117 = Right
```

Add in i3 config
```
exec_always --no-startup-id "sh -c 'sleep 1; exec xmodmap ~/.Xmodmap'"
```

## Light
```
cd /tmp
wget https://github.com/haikarainen/light/tarball/master
tar xf haikarainen-light-v1.2-18-g215dbcd.tar.gz
cd haikarainen-light-v1.2-18-g215dbcd
./autogen.sh
./configure && make
sudo make install
```

Add in i3 config
```
bindsym XF86MonBrightnessUp exec light -A 5
bindsym XF86MonBrightnessDown exec light -U 5
```

## Playerctl
```
wget https://github.com/acrisci/playerctl/releases/download/v2.0.2/playerctl-2.0.2_amd64.deb
sudo dpkg -i playerctl-2.0.2.amd64.deb
rm playerctl-2.0.2.amd64.deb
```

Add in i3 config
```
bindsym XF86AudioPlay exec --no-startup-id playerctl play-pause
bindsym XF86AudioNext exec --no-startup-id playerctl next
bindsym XF86AudioPrev exec --no-startup-id playerctl previous
bindsym XF86AudioStop exec --no-startup-id playerctl pause
```

## Printscreen
```
sudo apt install maim xclip
```

Add in i3 config
```
bindsym Print exec  maim -s --format=png /dev/stdout | tee ~/Downloads/last_screen.png | xclip -selection clipboard -t image/png -i # Print screen selection
bindsym shift+Print exec  maim --format=png /dev/stdout | tee ~/Downloads/last_screen.png | xclip -selection clipboard -t image/png -i # Print screen all monitor
```

## Clipit
```
sudo apt install clipit
```

Add in i3 config
```
exec --no-startup-id clipit
```

## NodeJS and npm
```
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```

### Problem global and permission denied
[https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally](Source)

### Vuepress
* `npm install -g vuepress@0.14.4` after the global permission issue is solved

## Jetbrains
```
wget https://download.jetbrains.com/toolbox/jetbrains-toolbox-1.14.5179.tar.gz
tar xf jetbrains-toolbox-1.14.5179.tar.gz
cd jetbrains-toolbox-1.14.5179.tar.gz
./jetbrains-toolbox
```

### Fix focus problem
Create or add `suppress.focus.stealing=false` to *idea.properties* in the config folder, for PyCharm in : *~/.PyCharm2019.1/config*

### Inotify problem
Add `fs.inotify.max_user_watches = 524288` to */etc/sysctl.conf* then run `sudo sysctl -p --system`

## Feh
```
sudo apt install feh
```

Add in i3 config
```
exec_always --no-startup-id "sh -c 'sleep 2; feh --bg-fill ~/.wallpaper/background.jpg'"
```

## Postman
```
snap install postman
```

## VLC
```
sudo apt install vlc
```

## Caffeine
Block screen lock
```
sudo apt install caffeine
```

## Gimp
```
sudo apt install gimp
```

## Franz
Slack, WhatsApp, Discord, Messenger

```
wget https://github.com/meetfranz/franz/releases/download/v5.1.0/franz_5.1.0_amd64.deb
sudo dpkg -i franz_5.1.0_amd64.deb
sudo apt install -f
```

## Neofetch
```
sudo apt install neofetch
```

## Pinta
Paint like
```
sudo apt install pinta
```

## Peek
Record gif
```
sudo add-apt-repository ppa:peek-developers/stable
sudo apt update
sudo apt install peek
```

## Spotify
```
sudo snap install spotify
```

## Pandoc
```
wget https://github.com/jgm/pandoc/releases/download/2.7.3/pandoc-2.7.3-1-amd64.deb
sudo dpkg -i pandoc-2.7.3-1-amd64.deb
rm pandoc-2.7.3-1-amd64.deb
sudo apt install texlive texlive-lang-french texlive-latex-extra texlive-fonts-extra
mkdir ~/.pandoc
mkdir ~/.pandoc/templates
cd ~/.pandoc/templates
wget https://raw.githubusercontent.com/steven-jeanneret/dotFiles/master/pandoc/eisvogel.latex
```

## Reboot without sudo
```
sudo ln -s /sbin/reboot /bin/reboot
```

## Configure Killer AX1650 (Dell XPS 15)
[Source](https://support.killernetworking.com/knowledge-base/killer-ax1650-in-debian-ubuntu-16-04/)

```
sudo apt-get install git
sudo apt-get install build-essential
git clone https://git.kernel.org/pub/scm/linux/kernel/git/iwlwifi/backport-iwlwifi.git
cd backport-iwlwifi
make defconfig-iwlwifi-public
make -j4
sudo make install
```
