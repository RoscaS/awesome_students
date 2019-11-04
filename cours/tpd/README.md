# TPD

## Servers Cuda

(Cuda1 : 157.26.103.175)

(Cuda2 : 157.26.103.80)

Cuda3 : `157.26.103.173`


## Users

Sol Rosca : `arc33`

password hint: Couleur11

Nathan Latino : `arc29`


## Connect to server Cuda3

 * Connect on ssh to the server Cuda3

`ssh arcX@157.26.103.173`
(default port ssh 22)

Sol : `ssh arc33@157.26.103.173`

Nat : `ssh arc29@157.26.103.173`

 * start cuda environment

in terminal `desktop`

``` bash
arc29@cuda3:~$ desktop

Desktop 'TurboVNC: cuda3:13 (arc29)' started on display cuda3:13

Starting applications specified in /home/arc29/.vnc/xstartup.turbovnc
Log file is /home/arc29/.vnc/cuda3:13.log

```

in `Cuda3:13`, 13 is the number of the desktop.

 * connect in scp (TurboVNC)

`157.26.103.173:13` (13 is the desktop's number)

 * stop the desktop

leave with the red cross in the window.
reconnect to ssh and use the command :

`desktop -killall`

## git dream team

git : `git clone ssh://lambda2019b@157.26.83.27/home/javab/git/WCoursJava.git`

user - password :
`lambda2019b` - `booking2019`

<Posts/>
