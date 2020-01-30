---
title: "Android: examen oral"
date: 2020-01-30
author: Sol
sidebar: auto
project: false
hide: false
---

* [résumé](https://hackmd.io/C6sqAUv7QIO89qwQUqdCcA)


##  Questions

* VF pétés et des trucs sur des intents, broadcasreceiver, et whatnot
* Difference entre Application et Activity
* Code avec une exception concurrente
* Qu’est-ce que la fragmentation Android
* Des questions V/F cramées
* Qu’est ce qu’un Intent ne peut pas appeller
* Que met-on dans le manifest
* Donner 4 composant d'une application
* Question sur les AsyncTask, les thread, les Handler
* Quelle est la différence entre un broadcastReceiver statique ou dynamique
* Le lancement d'une activité c'est quoi comme type d'intent ?  (explicite)
* on doit mettre dans le manifest pour utiliser l'accéléromètre (pas forcément) ?
* ça sert à quoi les fragments, quel code dans les fragments quel code dans l'activité (activité = plutôt métier, fragment = plutôt display)
* on fait quoi dans le onResume()  (récup les données sauvées dans le Bundle après le onStop) ?
* un fragment va sur la backstack (non)?
  * Backstack: (pile des activités pour chaque app quand on switch c'est empilé / dépilé quand on re)
* si on lance une activité d'une autre app elle va sur notre backstack (oui)?
* VF:
    * On peut utiliser des ".jar" en Android ?
    * JSP ?
    * 10'000 questions sur les intents
    * Toutes les activités sont définies dans le AndroidManifest.XML
    * Est ce que RelativeLayout est un composant Android ?
    * Est-ce la classe View qui partage les données entre les composants (Kappa)
* QCM:
    * Ce qu'il faut faire dans le onPause()
    * Les états possibles d'une activité
    * C'est quoi Dalvik (VM android)
    * De quelle classe doit-on hériter pour faire une view personnalisée (android.view.View)
    * Quelle classe permet le transfert de données entre composants ?
    * Dans un fichier .xml dire le nombre de Views, ViewGroup et Layout (View c'est les boutons et tout et aussi les layout)
    * Quelle trucs sont PAS dédié aux intents
        * Activity
        * BroadcastReceiver
        * ContentProvider → Seule réponse juste
        * Service
* Code:
    * Faire du code pour passer une information d'une activité à une autre
    * Avec un thread qui modifie un textview
        * Faut dire que c'est pas possible de modifier lUI depuis les thread, il faut utiliser une asynctask
    * Schéma de messages échangés entre une activité, un intent, l'OS et un service lors de la création d'un service
        * Expliquer ce qui se passe et décrire à quoi correspond START_STICKY


----

## 01 - Introduction

Les différences principales entre un smartphone et un PC sont les interactions, l'ergonomie, l'énergie (ressouces) et l'architecture. L'architecture d'un smartphone est la suivante:

* Processeur ARM basse consommation
* Mémoire flash
* Mémoire vive
* Capteurs, cartes réseaux (wifi, Bluetooth, etc)

Ces différences d'architectures deviennent donc des contraintes:

* Gestion de la mémoire
* Consomation d'énergie (optimisation du GPS, de la caméra, de la mémoire)
* CPU
* Notions de priorité d'événements (l'os peut tuer une application en arrière-plan)

Mais elles soulèvent aussi des enjeux concernant l'ergonomie, la fiabilité, la protection des données (communication interapplication) et priorités des événements survenant sur l'appareil.

De plus, le paradigme de programmation change du tout au tout, car il n'y a pas de souris et ainsi les interactions utilisateurs se font d'une tout autre manière.

Aussi, un problème apparaissant souvent sur ces systèmes est la fragmentation. Ils ralentissent les performances des systèmes.

On développe ici en Java, XML et C++.

Les points forts d'Android sont:

* Système Linux + Java
* Système fonctionnel, intuitif et évolutif
* Projet Opensource Java / C++
* SDK complet fourni
* Accès internet partout
* Social networking
* Des millions d’utilisateurs
* Les standards ouverts émergent

### Ordinateur miniature = "système embarqué"
* Conséquence sur les ressources
  * Centré sur l'interface utilisateur
  * Smartphone ou tablette
* La taille de l'écran
* Pour le reste tout est presque identique

Autres enjeux
* Ergonomie
  * Facilité d’usage
  * Respecter le modèle de réactivité (look and feel)
    * certain charte graphique (look and feel)
* Fiabilité
  * Plantage et problèmes de mémoire
* Sécurité
  * Attention à la protection des données personnelles
* Rapidité
  * Penser aux aspects algorithmiques

### Binder
Utilisé pour communiquer entre services dans Android.
* Passage de paramètres par le **context**
* AIDL: Android Interface Definition Language
Description des features de la fonction appelante afin de définir la communication entre services
Dans ce mode, le service est démarré depuis le binder et non depuis le "StartService()"
![](https://i.imgur.com/GzN9dK4.png)

### Compilation
#### Avant Lolipop
* Dalvik Virtual Machine
* Basée sur l'architecture à registre
* Recompile à chaque fois

#### A partir de Lolipop

ART: Android Runtime

* Application compilée dès son installation

### Application et cadriciel

* Application framework
    * API interface
    * Activity manager
        * Gère le cycle de vie d'une application
    * Windows manager
    * Content provider
    * View System
    * Package manager
    * telephony manager
    * resource manager
    * location manager
    * notification manager
* Application utilisateur
    * Home
    * Contacts
    * Phone
    * Browser
    * ...

### Composants
Tous doivent être connus du système
* AndoidManifest.xml

Example

```xml=
<?xml version="1.0" encoding="utf-8"?>
<manifeste xmlns:android="http://schemas.android.com/apk/res/android"
package="he_arc.myapplication" >
    <application android:allowBackup="true" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:theme="@style/AppTheme" >
        <activity android:name=".MainActivity" android:label="@string/app_name" >
            <intent-filter>
                <action  ndroid:name="android.intent.action.MAIN" />
                <category  android:name="Android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifeste>
```
### Outil de développement
* Android Studio
    * Basé sur IntelliJ IDEA
    * Gestionnaire de dépendances: Gradle
    * Analyseur de code: Lint
    * Simulateurs: Android virtual device manager

### Structure du projet
* Manifests
    * Fixe les permissions de l'app
    * Déclare les éléments principaux de l'application (activités, filtres)
* Java
    * Un package contenant le code de l'app
    * Un package test
* res
    * Layout: vues
    * Menu: descriptions des menus
    * Values: Valeurs statistiques
    * Drawable: images/musiques/nécessaires à l'app

### Quelques définitions

#### Activity

Interface utilisateur typiquement correspondante à un écran

* Chaque écran est implémenté par une activité
* Afficher un autre écran = lancer une nouvelle activité
* Une activité peut renvoyer un résultat à une autre
* Réagit aux inputs/events

#### Service

Processus qui tourne en arrière-plan sans UI

* Activité sans GUI, mais avec une durée longue ou indéfinie
* Exemples:
    * Music player
    * network DL
* Hérite de la classe service
* Possible de faire un bind sur un service et de le démarrer
* On peut communiquer avec un service ailleurs, à travers un AIDL

#### Broadcast receiver

Composant "event handler" permets de réagir aux événements extérieurs à l'application

* La plupart des broadcasts viennent du système. Par exemple, le niveau de la batterie et le changement d'heure par rapport à la zone
* Un intent peut être broadcast
* broadcast extends BroadcastReceiver

#### Content provider

Composant permettant aux applications de partager leurs données

* Seul moyen de partager les données entres app Android
* un content est représenté par une URI et un type MIME
* les app passent d'abord par un ContentResolver

Exemple:
![](https://i.imgur.com/zAFPLIL.png)

### Cycle de vie
* l'app s'exécute dans son propre processus
* le system gère ce processus

Schéma global:
![](https://i.imgur.com/d09T3Mc.png)

Ordre du cycle:
![](https://i.imgur.com/GYvT5ZQ.png)
![](https://i.imgur.com/1TXlyt2.png)

Importance des processus:
![](https://i.imgur.com/2xjZY0k.png)

## 02 - User Interface

### Activité & Intent

Cycle de vie d'une activité:

* Created: `onCreate()`, instanciation et binding des evts
* Start: `onStart()`, `onRestart()`, initialisation, chargement des données, démarrage des capteurs
* Resumed: `onResume()`, seul moment où l'application est visible
* Paused: `onPause()`, persistance des données
* Stopped: `onStop()`, libération des ressources (RAM)
* Destroyed: `onDestroy()`, destruction de la GUI et libération des ressources temporaires

Pour la gestion de la persistance, on utilise les fonctions `onSaveInstanceSate()` & `onRestoreInstanceState()`.

Une activité est donc un écran pour l'utilisateur. Elle représente la partie "Controller" du MVC. Une application est donc composée d'un ensemble d'activité et une activité peut en lancer une autre.

Donc, pour la navigation d'une activité à une autre, on déclenche ce qu'on appelle une **Intent**. Elles permettent de gérer la communication interapplication. Son but est réellement de déléguer une action à une autre composant. Les messages transmis sont asynchrones. Ils sont soit informatifs, soit pour lancer une activité.

Une Intent contient principalement:

* Le nom (facultatif)
* l'action à réaliser (string)
* Les données (MIME type + URI ou clé/valeur)
* Une catégorie indiquant le type de l'activité recherchée
* des flags

Pour lancer une activité:

```java
Intent intent = new Intent(this, /*classe de l'activité à lancer*/);
intent.putExtra("Cle", "valeur");
startActivity(intent);

// dans l'activité lancer, pour récupérer la valeur
Intent intent = getIntent();
String valeur = intent.getStringExtra("Cle", "default");
```

Il est aussi possible d'utiliser la fonction `startActivityForResult(intent, defaultValue)`. Dans la nouvelle activité, il faudra utiliser la fonction `setResult(value)` pour transmettre la valeur à retourner.

Pour quitter l'activité et retourner à l'activité précédente, on utilise simplement `finish()`.

Les activités, lorsqu'une appelle une autre sont empilées sur ce qu'on appelle la **BackStack**. L'activité au sommet de la backstack est l'écran actif. Lorsque l'utilisateur revient en arrière, l'activité est dépilée et détruite.

### View

Une view est un composant graphique. Ce peut être un layout, un bouton, une image, ... Bref, c'est un widget. Il se définit en XML et le thread UI est le seul pouvant modifier directement son affichage.

Pour créer une nouvelle vue, il faut étendre la classe **View** ou **ViewGroup**(conteneur) si elle contient d'autres vues. Comme quasi toute la programmation graphique, l'interface est construite comme un arbre. View est donc une feuille et ViewGroupe est une noeud.

Les layouts ou conteneurs de bases:

* LinearLayout
* RelativeLayout
* FrameLayout
* TableLayout
* WebView
* ListView
* GridView
* ScrollView

Dans ces layouts, pour aligner différents éléments, on utilise l'attribut **android:gravity** qui définit s'il sera plutôt à droite, gauche, etc.

Les tailles des éléments peuvent être fixes, mais on préfère utiliser les attributs:

* match_parent
* wrap_content

### Ressources

Aussi, on utilise de manière abusive les ressources en Android, car elles sont compilées avec l'application et donc plus légères et faciles à gérer.

La classe fournissant les ressources s'appelle **R**.

`R.layout.activity_main` récupère le layout de l'activity main.

On peut aussi accèder à des valeurs, des images, des identifiants, etc.

### Liste

Comment déclarer une liste ?

1. Déclarer une **listView** dans l'activité
2. L'activité doit étendre la classe **ListActivity**
3. Utiliser un **Adapter**

Un Adapter est une classe permettant d'associer une vue à une donnée statique. Pour la liaison avec une liste de BDD, on utilise les **CursorAdapter**.

Il est possible d'utiliser une view XML grâce à `getView(intposition, ViewconvertView, viewparentView)`.

## 03 - Fragments

Un fragment est un élément modulaire d'une **FragmentActivity**. Il permet de construire une vue compatible smartphone/tablette et donc de définir des sections, parties, fragments d'une interface. Leur ajout ou retrait sont dynamiques(flexibles & adaptatifs) et permettent de changer l'apparence de l'application **sans passer par la Backstack**. Cela a pour effet qu'une FragmentActivity possède son propre cycle de vie.

* onAttach()
* onCreate()
* onCreateView(): le fragment dessine son contenu
* onActivityCreated(): quand le fragment doit se dessiner
* onStart(): passage au premier plan a
* onResume(): interaction possible

_Fragment is Active_

* onPause()
* onStop()
* onDestroyView(): destruction de la vue
* onDestroy()
* onDetach(): le fragment est détaché de l'activité

Aussi, les fragments permettent d'améliorer l'expérience utilisateur, quelle que soit la taille du terminal.

### Ajouter ou remplacer

On définit donc l'interface utilisateur via XML

Ajout:

```java
getSupportFragmentManager()
    .beginTransaction();
    .add(R.id.container, new MyFragment());
    .commit();
```

Remplacer:

```java
getSupportFragmentManager()
    .beginTransaction();
    .Replace(R.id.container, new MyFragment());
    .commit();
```

## 04 - MultiThreading

### Android et les tâches lentes

Le but ici est de pouvoir lancer une tâche sans que l'interface (le thread UI) ne soit bloquée et reste interactive. Pour se faire:

* **BackgroundThread**: opérations lourdes dans un thread
* **BackgroundService**: opérations lourdes dans un service, mais avec notifications pour l'utilisateur

Dans cette section, on traitera les thread. Pour les services, je vous laisse consulter le chapitre suivant.

_Pour un rappel sur les thread, lire le slide 5._

Particularité: les threads de Dalvik(la VM Android) se synchronisent en utilisant des objets partagés et les moniteurs associés. Ces ressources sont nommées **Common Memory Ressources**.

Android ne permet pas aux threads d'interagir avec l'interface graphique. Seul le processus principal peut le faire. L'unique moyen d'interagir avec l'interface est d'utiliser les variables globales de classes qui sont mises à jour dans les threads.

Cela se résume en deux règles:

1. **DO NOT BLOCK UI THREAD**
2. **DO NOT ACCESS THE ANDROID UI TOOLKIT FROM OUTSIDE THE UI THREAD**

### Solutions offertes par Android

#### 1. Envoie de séquences d'affichage

```java
runOnUiThread(new Runnable{
    @override
    public void run() {
        txt.setText("Ola");
    }
});
```

Cette fonction est héritée de la classe Activity. La classe runnable appelée est placée dans la file de l'UIThread. Si l'appelant est l'UIThread (dans la réaction à un clique par exemple), le code est exécuté directement!

On peut cependant aussi utiliser l'objet `Android.os.Handler` qui permet de poster un thread dans la file de l'UIThread.

```java
Handler handler = new Handler();

handler.post(new Runnable{
    @override
    public void run() {
        txt.setText("Ola");
    }
});
```

Contrairement à la section de code proposé, il n'y aura pas de priorisation du thread dans la file.

#### 2. Envoie de messages & Looper

Ici aussi, on utilisera la classe `Android.os.Handler`, mais cette fois pour **notifier** l'utilisateur de la **progression** d'une tâche. On envoie donc un message dans la file du Looper. Le Looper est donc une MessageQueue gérée par le UIThread.

Dans l'application principale:

```java
Handler handler = new Handler() {
    // A chaque message reçu
    @Override
    public void handleMessage(Message msg){
    // On incrémente la valeur de la view progressBar
    progressBar.incrementProgressBy(10);
    }
};
```

Dans le thread se chargeant de l'exécution de la tâche, on doit donc envoyer des message au handler déclaré dans l'activité.

```java
// Dans l'activité, on déclare le thread pour la tâche
Thread thread = new Thread(new Runnable(){
    @Override
    public void run() {
    // exécution de la tâche

    // suivant la progression de la tâche
    // on envoie un message au handler
    Message msg = handler.obtainMessage();
    handler.sendMessage(msg);
    // on continue la tâche, on envoie un msg, etc.
    }
});
```

#### 3. AsyncTask (utilisant 1 & 2)

Ici, on va donc étendre la classe `AsyncTask<Params, Progress, Result>`. Elle créer elle-même un thread pour la tâche de fond et un handler pour la mise à jour graphique.

Cette manière de faire permet donc d'encapsuler toute la tâche dans la même classe et donc de ne pas polluer le code de l'activité responsable de cette tâche.

Les fonctions à redéfinir sont présentées en slide 15. Il y a:

* `protected void onPreExecute()`
* `protected void doInBackground(final String args)`
* `protected void onProgressUpdate(Long value)`
* `protected void onPostExecute(final void unused)`

Le slide 16 montre un diagramme de séquence avec quand sont appelée les différentes fonctions.

Pour utiliser la classe, il suffit de créer une instance de la classe et de lancer la fonction `execute()`.

_Le cours présente un exemple assez complet et clair. Je vous laisse le consulter si vous souhaitez plus de code._

### Récapitulatif

* Laisser l'UIThread gérer les événements utilisateur
* Si interaction avec l'écran, utilisation d'un handler pour la progress bar
* AsyncTask = Meilleure encapsulation: permet d'utiliser un thread et un handler dans la même classe

## 05 - Services

Lorsqu'une application doit réaliser une tâche longue, on utilise en général un thread. Cependant, Android supprime les thread qui ne répondent plus au bout de 5sec. Dans le cas d'un téléchargement par exemple, en prenant en compte l'aspect réseau, le temps est bien supérieur. Pour ce faire, on utilise les service ! Ils permettent notamment d'envoyer des notifications ainsi que de lancer des activités. Ils sont utilisés pour les mails, la musique, les téléchargements, tout ce qui prend beaucoup de temps.

Le cycle de vie est simplifié et le service peut être contrôlé par une activité ou un widget. Cependant, le service doit être déclaré dans le manifeste.

Il faut par contre ne pas confondre service avec processus ou thread. Il se réalise donc quand même dans l'UIThread.

On observe deux types de services:

* Borné: instance unique et en continu
* Non borné: Service d'une durée déterminé et déclenché à un moment donné

Il est cependant possible de faire les deux.

Lorsqu'on créer un service, il faut donc étendre la classe **Service**. Elle possède aussi un cycle de vie propre. Ce qui change de l'activité est notamment la fonction `public int onStartCommand(Intent, int, int)`.

### Service non borné

Les services non bornés sont démarrés et stoppés à l'aide d'Intent. On peut ainsi leur passer différentes données nécessaires à leur fonctionnement.
tst
```java
startService(Intent service);
stopService(Intent service);
```

Il est important de savoir que dès que le service reçoit une demande pour s'arrêter, il est stoppé. La communication avec le service ne va que dans un seul sens.

Lors de la redéfinition des fonctions de la classe **Service**, il faut redéfinir la fonction `onStartCommand(...)`. Elle indique au système ce qu'il faut au moment de la réinstanciation du service. Cette fonction doit renvoyer un des flags suivants:

* **START_STICKY**: si le service est tué, il est redémarré avec une intent vide
* **START_NOT_STICKY**: le service n'est pas redémarré
* **START_REDELIVER_INTENT**: si le service est tué, il est redémarré avec la même intent donné initialement.

#### Code

Dans le manifeste:

```xml
<service android:enabled="true" android:name="MonJoliService"/>
```

Lancement d'un service dans une activité:

```java
// Démarrage
startService(new Intent(this, MonJoliService.class));

// Arrêt
stopService(new Intent(this, MonJoliService.class));
```

_Je vous invite à consulter le slide 12 pour voir un morceau de code de service non borné._

### Service borné

Un service borné est donc une tâche qui possède une durée déterminée et qui est commencée à un moment donné. Son cycle de vie est aussi similaire à une activité, mais possède les particularités suivantes:

* onBind(): retourne un **Binder** (notion client/serveur)
* onUnbind():

La classe **Binder** est une classe qui fournit le système d'abonnement à un service. Pour ce faire, l'instance doit être local à la classe et static.

On demande ensuite au service de réaliser différentes actions. C'est donc la classe du service qui fournit les fonctions et non le binder comme l'exemple le sous-entend.

## 06 - ActionBar

Une **ActionBar** est donc un bandeau en haut de l'application. On peut la voir dans quasiment toutes les applications mobiles. Elle permet de présenter à l'utilisateur des informations contextuelles comme le logo de l'application et des actions à l'aide d'icônes.

Pour créer une activité avec une ActionBar, il faut étendre la classe **ActionBarActivity**.

### Implémentation

Le style de l'action page se définit dans le fichier xml `res/menu/menu_main`. On définit dans ce fichier des item:

```xml
<item
    android:id="@+id/action_settings"
    android:icon="@android:drawable/ic_menu_manage"
    android:orderInCategory="1"
    android:showAsAction="ifRoom"
    android:title="@string/action_settings" />
```

Les différentes propriétés sont assez explicites:

* `orderInCategory` définit la priorité des items (le plus bas = le plus prioritaire)
* `showAsAction` permet de définir s'il doit être visible ou pas
  * `always`: toujours
  * `never`: être positionné, mais invisible
  * `ifroom`: s'il y a de la place

Il est conseillé de ne jamais forcer un item à être dans l'actionBar.

Dans l'**ActionBarActivity**, on peut redéfinir les fonctions suivantes:

* `public boolean onCreateOptionsMenu(Menu menu)`: récupère la ressource XML de l'action bar
* `public onOptionsItemSelected(MenuItem menu)`: Suivant l'id de l'item, on peut réaliser telle ou telle action comme souhaité

_Pas sûre que ce soit dans l'activity. C'est peut-être dans l'implémentation d'une ActionBar donc vérifier._

Pour cacher l'ActionBar, il suffit de:

```java
getActionBar().show();
getActionBar().hide();
```

Cependant, si vous utilisez, il faut lire la documentation si vous utilisez une version d'Android inférieur à 3.0. Il y a eu des modifications.

### Navigation Drawer

C'est le petit volet de menu qui sort de la gauche de l'écran. Il se révèle en glissant du bord gauche au centre ou par clique sur le logo de l'application dans l'actionbar. Il permet de grouper des options ou informations.

Au niveau code, il faut utiliser créer un fichier xml et définissant un objet **DrawerLayout**. Lors de la création de l'activité, il faut lui assigner un **ArrayAdapter** avec le contenu de la liste de fonctionnalités qu'il doit présenter.

_Je vous laisse consulter les slides 8 à 11._

### Récapitulatif

L'**ActionBar** permet de personnaliser la barre principale de l'application. On peut y intégrer des fragments sous forme de **Drawer**. Cet élément est important, car très utilisé dans les applications mobiles.

## 07 - Persistance

2 types:

1) Intermédiaire : tant que l'activité est en vie
2) Durable : même quand l'app est fermée

Sauvegarde pour l'utilisateur : nom, mot de passe, préférences en tout genre
stocker en cache aussi par exemple
enregistrer la langue utilisée

Attention, en cas de rotation de l'écran, l'activité perd des données, sauvegarder!! ou forcer l'orientation dans le manifeste.

methode pour sauver: avec un Bundle

```java
@Override
protected void onSaveInstanceState(Bundle savedInstanceState) {
    super.onSaveInstanceState(outState);
    savedInstanceState.putInt("MyScore", 42);
}

protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    int value = 0;
    if(savedInstanceState != null)
        value = savedInstanceState.getInt("MyScore", 0);
}
```

dans un Bundle:

* types de bases
* implémentent Parcelable

#### Longue durée

* interne
* externe(SD)
* cloud
* BDD SQlite3

equ. base de registres windows.
table associative : key -> value
private ou public : MODE_PRIVATE, MODE_MULTI_PROCESS

##### La classe SharedPreferences

```java
private SharedPreferences settings = getSharedPreference("Mes preferences", 0);

SharedPreferences.Editor editor = settings.edit();
editor.putString(NOM, PrefValeur);
editor.commit();
```

système de fichier: toujours accessible, mais privé!
avec FileOutputStream et write
Attention déclarer dans Manifest `READ_EXTERNAL_STORAGE`

SQLlite3 -> classes query et Cursor
faire une app "Content Provider" pour partager avec d'autres applications

## 08 - Connectivité

framework "Volley" -> RPC
Mais pas que, il est également possible de faire des requêtes ayant pour retour du Json ou de simples pages html.

manifest: `INTERNET`, `ACCESS_NETWORK_STATE`

ConnectivityManager pour verifier l'état du réseau
HttpUrlConnection pour requêtes web

## 09 - Broadcast Receiver

Composant applicatif indépendant

utilise les Intents

```java
sendBroadcast(Intent intent);
```

trace les actions du système sous forme d'événements (pas d'UI)

Informer utilisateur (notif) ou lancer activité!

* `ACTION_BOOT_COMPLETED`: diffusée lorsque le système a fini son boot
* `ACTION_SHUTDOWN`: diffusée lorsque le système est en cours d'extinction
* `ACTION_SCREEN_ON` / `ACTION_SCREEN_OFF`: allumage / extinction de l'écran
* `ACTION_POWER_CONNECTED` / `DISCONNECTED`: connexion / perte de l'alimentation
* `ACTION_TIME_TICK`: une notification envoyée toutes les minutes
* `ACTION_USER_PRESENT`: notification reçue lorsque l'utilisateur déverrouille son téléphone

## 10 - Capteurs

### Description

Un capteur fournit des informations brutes et surtout dépendant du smartphone. Les principaux sont:

* Mouvement
  * Accéléromètre
  * Capteur de gravité
  * Gyroscope
  * Capteurs de rotations
* Environnement
  * Température
  * Baromètre
  * Luminosité
* Physiologique
  * Activité cardiaque

### Manipulation

On utilise les objets Android suivants:

* SensorManager: il permet de récupérer les différents capteurs présents sur l'appareil, notamment avec `getSensorList(Sensor.TYPE_ALL)`
* Sensor: instance du capteur
* SensorEvent: événement lancé par le capteur, contiennent donc les nouvelles informations
* SensorEventListener: permets de recevoir les événements des capteurs

Pour utiliser un capteur, il faut donc:

* Récupérer le capteur `getDefaultSensor(Sensor.TYPE)`
* Enregistrer son listener auprès du SensorManager

```java
sensorManager.registerListener(mySensorListener, mySensor, SensorManager.SENSOR_DELAY_NORMAL);
```

Ici, on transmet le listener, le sensor ainsi que le délai de consultation du sensor. Le listener a été redéfini dans notre cas. Il doit implémenter les fonctions suivantes:

```java
@Override
public void onAccuracyChanged(Sensor sensor, int accuracy){
    // doit être implémentée, mais personne ne sait à quoi elle sert
}

@Overrid
public void onSensorChanged(SensorEvent event){
    if(event.sensor.getType() == Sensor.TYPE){
    // do your stuff
    }
}
```

On vérifie toujours que l'événement du sensor soit bien celui de notre capteur, car on pourrait utiliser le même listener pour gérer plusieurs capteurs.

**ATTENTION**, dans l'activité qui demande le capteur, on n’oublie pas de s'abonner et se désabonner au capteur dans les fonctions onPause() et onResume().

Aussi, dans le manifeste, il faut indiquer quel capteur on souhaite consulter. Il est possible de dire si le capteur est indispensable au fonctionnement de l'application ou non.

_Si je ne me trompe pas, le manifeste est utilisé par le PlayStore pour répertorier l'application. De ce fait, il est possible qu'elle n'apparaisse pas pour un téléphone ne possédant pas tel ou tel capteur._

Dernière informations, on fait attention à la consommation de la batterie, mais aussi à la potentielle erreur de ce que peuvent nous fournir les capteurs. L'information est brute et potentiellement bruitée.



