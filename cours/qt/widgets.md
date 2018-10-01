---
title: Widgets
date: 2018-09-25
author: Michael
sidebar: auto
---

## Widgets
#### Affichage
1. QLabel
   1. utilisé pour l'affichage d'un texte ou d'une image
   2. Aucune intéraction avec l'utilisateur n'est prévue
2. QLCDNumber
   3. Permet d'afficher des chiffres avec l'apparence d'un afficheur à cristaux liquides
#### Saisie de caractères
1. QLineEdit
    1. Fournit un éditeur sur une seule ligne
2. QTextEdit
    1. Permet de travailler avec une grande zone de texte
#### Boutons
1. QPushButton
```cpp
#include <QApplication>
#include <QPushButton>
int main(int argc, char *argv[])
{
    QApplication app(argc, argv);
    QPushButton bouton("Hello world!");
    bouton.resize(250,30);

    bouton.show();
    return app.exec();
}
```
2. QRadioButton
    1. Fournit un bouton radio avec un texte une icone
    2. mutuellement exclusif (lorsque l'utilisateur en sélectionne un, l'autre est déselectionné)
3. QCheckBox
    1. Fournit une case à cocher avec un texte
4. QButtonGroup
    1. Organise les boutons dans un groupe logique

#### Listes
1. QListWidget
    1. Permet à l'utilisateur de sélectionner une ou plusieurs entrées dans une liste d'éléments
   ```cpp
   QListWidget* listWidget = new QListWidget(this);
   new QListWidgetItem("un", listeWidget);
   new QListWidgetItem("deux", listeWidget);
   new QListWidgetItem("trois", listeWidget);
   QListWidgetItem *newItem = new QListWidgetItem;
   newItem->setText("nouveau");
   listeWidget->insertItem(2, newItem);
   ```
2. QSpinBox
    1. Fournit un champ de saisie incrémentale permettant de sélectionner une valeur numérique dans un ensemble prédéfini
3. QComboBox
    1. Liste déroulante

#### Widget personnalisé
```cpp
#ifndef HEXSPINBOX_H
#define HEXSPINBOX_H

#include <QSpinBox>

class HexSpinBox : public QSpinBox
{
    Q_OBJECT
public:
    HexSpinBox(QWidget *parent=0);
    int valueFromText(const QString &text) const;
    QString textFromValue(int value) const;
};

#endif