---
title: "Serie 5: Convertisseur & Chrono"
date: 2018-10-20
author:  Sol
sidebar: auto
---

##  Convertisseur

Ecrire une application Qt permettant la conversion de températures : Le type de conversion sera choisi par l'intermédiaire de boutons radio La température sera saisie au clavier et un bouton Calculer provoque la mise à jour d'un afficheur LCD.

1. Définir la classe Convert permettant d'afficher ces différents éléments dans un nouveau widget (ici, un QDialog). La disposition pourra se faire en coordonnées absolues ou en utilisant un QGridLayout.
2. Ecrire la fonction main() permettant d'afficher ce widget dans une fenêtre de dimensions 320x150 pixels, et portant le même titre que sur la copie d'écran.
3. Faire le nécessaire pour que l'affichage reste cohérent lorsque l'un des boutons radio est actionné. 
4. Faire le nécessaire pour convertir la température saisie lorsque l'utilisateur clique le bouton Calculer ou appuie sur Alt+A. On pourra utiliser la formule : $T_c=\frac{5(T_f -32)}{9}$
5. Faire le nécessaire pour que les boutons Ré-initialiser et Quitter aient le comportement attendu.
6. Que se passe-t-il lorsque la valeur saisie n'est pas convertible en une valeur réelle. Remédier au problème
en utilisant un validateur (QDoubleValidator)

<Spoiler>

#### main.cpp

```cpp
#include <QApplication>
#include "chrono.h"

int main(int argc, char *argv[]) {
    QApplication a(argc, argv);
    Chrono c;
    c.show();

    return a.exec();
}
```

<br>
<br>

#### chrono.h
```cpp
#pragma once

#include <QWidget>
#include <QVBoxLayout>
#include <QPushButton>
#include <QLCDNumber>
#include <QLabel>


class Chrono : public QWidget {
Q_OBJECT

private:
    QPushButton *startBtn, *lapsBtn, *exitBtn;
    QLCDNumber  *timeDisplay;
    QTime       *timeDelta, *time;
    bool        isRunning, isLap;

    void initView();
    void initConnections();

    void initTime();
    void tweakWidgets();

    void resetQtime();
    void display();

    void timerEvent(QTimerEvent *) override;
    void updateTime();

public:
    Chrono(QWidget *parent = nullptr);

private slots:
    void start();
    void laps();

private:
};
```

<br>
<br>

#### chrono.cpp
```cpp
#include <QtWidgets>
#include "chrono.h"

Chrono::Chrono(QWidget *parent) : QWidget(parent) {
    startBtn    = new QPushButton(tr("&Démarrer"), this);
    lapsBtn     = new QPushButton(tr("&Intermédiaire"), this);
    exitBtn     = new QPushButton(tr("&Quitter"), this);
    timeDisplay = new QLCDNumber(12, this);

    initView();
    tweakWidgets();
    initConnections();
    initTime();
    display();
    startTimer(5);
}

void Chrono::initView() {
    auto *btnsLayout = new QHBoxLayout;
    auto *mainLayout = new QVBoxLayout(this);

    btnsLayout->addWidget(startBtn);
    btnsLayout->addStretch(1);
    btnsLayout->addWidget(lapsBtn);
    btnsLayout->addWidget(exitBtn);

    mainLayout->addWidget(timeDisplay);
    mainLayout->addLayout(btnsLayout);
    isRunning = isLap = false;
}

void Chrono::initTime() {
    timeDelta = new QTime();
    time = new QTime(0, 0, 0, 0);
}

void Chrono::tweakWidgets() {
    setWindowTitle("Chrono");
    exitBtn->setStyleSheet("background-color: #F92672; color: white;");
    lapsBtn->setCheckable(true);
    lapsBtn->setEnabled(false);
    timeDisplay->setSegmentStyle(QLCDNumber::Filled);
    setFixedSize(400, 150);
}

void Chrono::initConnections() {
    connect(startBtn, &QPushButton::clicked, this, &Chrono::start);
    connect(lapsBtn, &QPushButton::clicked, this, &Chrono::laps);
    connect(exitBtn, &QPushButton::clicked, this, &QApplication::quit);
}

void Chrono::display() {
    timeDisplay->display(time->toString(tr("hh:mm:ss.zzz")));
}

void Chrono::updateTime() {
    *time = time->addMSecs(timeDelta->elapsed());
    timeDelta->restart();
    if (!isLap) display();
}

void Chrono::timerEvent(QTimerEvent *) {
    if (isRunning) updateTime();
}

void Chrono::start() {
    isRunning = !isRunning;
    lapsBtn->setChecked(false);
    lapsBtn->setEnabled(isRunning);

    isRunning ? resetQtime() : startBtn->setText(tr("&Démarrer"));
}

void Chrono::resetQtime() {
    isLap = false;
    time->setHMS(0, 0, 0, 0);
    timeDelta->start();
    startBtn->setText(tr("&Arrêter"));
}

void Chrono::laps() {
    isLap = !isLap;
}
```




</Spoiler>


