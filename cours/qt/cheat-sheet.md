---
title: "Qt: CheatSheet"
date: 2019-06-24
author: "Steven"
sidebar: auto
project: false
---

## Fichier UI

### Héritage multiple

* Fichier forms : dictionary.ui

```cpp
#include "ui:dictionary.h"
class Dictionary : public qDialog, private Ui::Dictionary {

}
//On peut directement accèder au éléments
//Exemple QString name = leName->text();
```

## Fichiers , QFile et QDir

```cpp
//Get path of file + separator (/ or \) + name without extension
targetFile = QFileInfo(sourceFile).path() + QDir::separator() + QFileInfo(sourceFile).completeBaseName() + "." + targetFormatComboBox->currentText().toLower();
```
Obtenir le nom du fichier ouvert dialog
QFileDialog::getOpenFileName
Sauvegardé :
QFileDialog::getSaveFileName
QFile avec le nom du fichier à sauver dialog

### Ouverture, lecture, écriture de fichier texte
```cpp
QString fileName = QFileDialog::getOpenFileName(NULL,"Nom du fichier","./","Fichiers texte (*.txt *.cpp)");
QFile fileSource(fileName);
QFile fileDest(fileName + ".txt");
if(!fileSource.open(QIODevice::ReadOnly | QIODevice::Text)) {
    QMessageBox::critical(0,"Erreur", QString("Lecture"));
    return 1;
}
if(!fileDest.open(QIODevice::WriteOnly | QIODevice::Text)) {
    QMessageBox::critical(0,"Erreur", QString("Ecriture"));
    return 1;
}
QTextStream sin(&fileSource); //Pour la lecture
QTextStream sout(&fileDest); //Pour l'écriture
QString line;
sout << "//Fichier commenté " << endl;
while(!sin.atEnd()) {
    line = sin.readLine(0);
    sout << "// " << line << endl;
}
fileSource.close();
fileDest.close();
return 0;
```

### fichier binaire
#### Ecriture
```cpp
QDataStream out(&file);
out << QString("The answer is"); //Serialize string
out << (quint32)63; //Serialize integer
```
#### Lecture
```cpp
QDataStream in(&file);
QString str;
qint32 a;
in >> str >> a; //Extract a string and an integer
```

## Serialiazation 
```cpp
//.hpp
friend QDataStream &operator>>(QDataStream &, MaClasse &); //Lecture
friend QDataStream &operator<<(QDataStream &, const MaClasse &); //Ecriture

//.cpp
QDataStream &operator>>(QDataStream &in, MaClasse &o)
{
  in >> o.attr1 >> o.attr2 >> o.attr3;
  return in;
}

QDataStream &operator<<(QDataStream &out, const MaClasse &o)
{
  out << o.attr1 << o.attr2 << o.attr3;
  return out;
}
```

## Settings
exemple pour enregistrer paramètres:
```cpp
QSettings settings("./s13e2.ini",QSettings::IniFormat);
settings.clear();
settings.beginGroup("geometry");
settings.setValue("resize",size());
settings.setValue("move",pos());
settings.endGroup();
```

exemple pour charger paramètres:
```cpp
QSettings settings("./s13e2.ini",QSettings::IniFormat);
settings.beginGroup("geometry");
resize(settings.value("resize",QSize(800,400)).toSize());
move(settings.value("move",QPoint(200,200)).toPoint());
settings.endGroup();
```

```cpp
//Ecrire valeurs string
settings.setValue(QString().setNum(++num), fileName);
//Lire valeurs string
settings.value(QString().setNum(i),QString("")).toString();
```

Voir pour l'autres types de settings!

## QProcess
```cpp
ConvertDialog::ConvertDialog(QWidget *parent) : QDialog(parent) {
    setupUI(this);
    connect(&process, SIGNAL(finished(int, QProcess::ExitStatus)), this, SLOT(processFinished(int, QProcess::ExitStatus)));
    connect(&process, &QProcess::errorOccurred, this, &ConvertDialog::processError);
    connect(&process, &QProcess::readyReadStandardOutput, this, &ConvertDialog::updateOutputTextEdit);
    connect(&process, &QProcess::readyReadStandardError, this, &ConvertDialog::updateOutputTextEditError);
}

void ConvertDialog::on_convertButton_clicked() {
    
    QStringList args;
    if(enhanceCheckBox->isChecked()) {
        args << "-enhance";
    }
    args << sourceFile << targetFile;
    process.start("./ImageMagick/convert",args);
}

void ConvertDialog::on_versionButton_clicked() {
    QStringList args;
    args << "--version";
    process.start("./ImageMagick-6.6.8-6/convert", args);
}

void ConvertDialog::processFinished(int exitCode, QProcess::ExitStatus exitStatus) {
    //Processus terminé
    outputTextEdit->append(tr("processFinished"));
    if (exitStatus == QProcess::CrashExit) {
        outputTextEdit->append(tr("Conversion program crashed"));
    } else if (exitCode != 0) {
        outputTextEdit->append(tr("Conversion failed"));
    } else {
        if(targetFile != "") {
            outputTextEdit->append(tr("File %1 created").arg(targetFile));
        }
    }
}

void ConvertDialog::precessError(QProcess::ProcessError error) {
    //En cas d'erreur (exécutable pas trouvé)
    outputTextEdit->append(tr("processError"));
    if(error==QProcess::FailedToStart) {
        outputTextEdit->append(tr("Conversion program not found"));
        convertButton->setEnabled(true);
    }
}

void ConvertDialog::updateOutputTextEdit() {
    QByteArray newData = process.readAllStandardOutput();
    outputTextEdit->setPlainText(newData);
}

// Appelé lorsque le programme veut afficher un message d'erreur sur stderr
void ConvertDialog::updateOutputTextEditError() {
    QByteArray newData = process.readAllStandardError();
    outputTextEdit->setPlainText(newData);
}
```
## QNetwork
> QT += network dans le .pro

### Serveur
```cpp
ChatServer::ChatServer(QWidget* parent) : QWidget(parent) {
    tcpServer = new QTcpServer(this);
    if(!tcpServer->listen(QHostAddress::Any, 50885)) {
        lblStatus->setText(tr("Error") + tcpServer->errorString());
    } else {
        lblStatus->setText(tr("démarré sur ") + QString::number(tcpServer->serverPort()));
        connect(tcpServer, &QTcpServer::newConnection,this,&ChatServer::newConnection);
    }
}

void ChatServer::newConnection() {
    sendToAll(tr("Nouveau client connecté"));
    QTcpSocket *nouveauClient = tcpServer->nextPendingConnection();
    socketList << nouveauClient;
    connect(nouveauClient, &QTcpSocket::readyRead, this, &ChatServer::receiveData);
    connect(nouveauClient, &QTcpSocket::disconnected,this,&ChatServer::socketDisconnected);
}

void ChatServer::receiveData() {
    QTcpSocket *socket = qobject_cast<QTcpSocket *>(sender());
    if(socket==0) { 
        return; //Client pas trouvé
    }
    QDataStream in(socket);
    if(messageSize==0) {
        //Taille de message pas encore connu
        if(socket->bytesAvailable() < (int)sizeof(quint16)) {
            return; //On a pas reçu la taille -> arrêt et attente
        }
        in >> messageSize; //On a reçu la taille du message et on la stock
    }
    if(socket->bytesAvailable() < messageSize) {
        return ; //On a pas encore reçu tous le message, on quitte en attendant la suite
    }
    QString message;
    in >> message; //On a reçu le mesasge
    sendToAll(message); //On l'envoi a tous
    messageSize=0;
}

void ChatServer::socketDisconnected() {
    sendToAll(tr("Un client s'est déconnecté"));
    QTcpSocket *socket = qobject_cast<QTcpSocket *>(sender());
    if(socket==0) {
        return;//On ap as trouvé le client qui a déclenché le signal
    }
    socketList.removeOne(socket);
    socket->deleteLater();
}

void ChatServer::sendToAll(const QString &message) {
    QByteArray data;
    QDataStream byteArrayStream(&data, QIODevice::WriteOnly);
    byteArrayStream << (quint16) 0; //Réserve la place pour écrire la taille
    byteArrayStream << message; //On ajoute le message
    byteArrayStream.device()->seek(0); //On se place au début du paquet
    byteArrayStream << (quint16) (data.size() - sizeof(quint16)); //Remplace le 0 par la longueur du message
    foreach(QTcpSocket* socket, socketList) {
        socket->write(data); //Envoi du paquet à tous les clients connectés
    }
}
```

### Client
```cpp
ChatClient::ChatClient(QWidget *parent) : QWidget(parent) {
    setupUI(this);

    socket = new QTcpSocket(this);
    connect(socket, &QTcpSocket::readyRead, this, &ChatCLient::receiveData);
    connect(socket, &QTcpSocket::connected, this, &ChatClient::connected);
    connect(socket, &QTcpSocket::disconnected, this, &ChatClient::disconnected);
    connect(socket, SIGNAL(error(QAbstractSocket::SocketError)), this, SLOT(processSocketError(QAbstractSocket::SocketError)));
}

void ChatClient::on_btnConnect_clicked() {
    socket->abort(); //Désactive les connexions précédentes s'il y en a
    socket->connectToHost(fldIPAdress->text(), fldTCPPort->value()); //Connexion au serveur
}

void ChatClient::on_btnSend_clicked() {
    QByteArray data;
    QDataStream byteArrayStream(&data, QIODevice::WriteOnly);
    QString message = tr("<strong>) + fldNickname->text() + tr("</strong> : ") + fldMessage->text();
    byteArrayStream << (quint16) 0;
    byteArrayStream << message;
    byteArrayStream.device()->seek(0);
    byteArraystream << (quint16)(data.size() - sizeof(quint16));
    socket->write(data);//Envoi du paquet
}

void ChatClient::on_fldMessage_returnPressed() {
    on_btnSend_clicked(); //Appuyer sur enter déclenche l'action du bouton
}

void ChatClient::receiveData() {
    //Même principe que serveur
    QDataStream in(socket);
    if(messageSize==0) {
        if(socket->bytesAvailable() < (int)sizeof(quint16)) {
            return;
        }
        in >> messageSize;
    }
    if(socket->bytesAvailable() < messageSize) {
        return;
    }
    QString message;
    in >> message;
    fldListMessages->append(message);
    messageSize=0;
}

void ChatClient::connected() {
    fldListMessages->append(tr("<em>Connexion réussie</em>"));
}

void ChatClient::disconnected() {
    fldListMessage->append(tr("<em>Déconnecté</em>"));
}

void ChatClient::processSocketError(QAbstractSocket::SocketError error) {
    switch(error) {
        case QAbstractSocket::HostNotFoundError:
            fldListMessages->append(tr("<em>ERREUR : le serveur n'a pas pu être trouvé. Vérifiez l'IP et le port.</em>"));
            break;
        case QAbstractSocket::ConnectionRefusedError:
            fldListMessages->append(tr("<em>ERREUR : le serveur a refusé la connexion. Vérifiez si le programme \"serveur\" a bien été lancé. Vérifiez aussi l'IP et le port.</em>"));
            break;
        case QAbstractSocket::RemoteHostClosedError:
            fldListMessages->append(tr("<em>ERREUR : le serveur a coupé la connexion.</em>"));
            break;
        default:
            fldListMessages->append(tr("<em>ERREUR : ") + socket->errorString() + tr("</em>"));
    }
}
```
## XML
> QT+= xml dans le .pro

### DOM
```cpp
//.hpp : QDomDocument doc;QDomElement mesures;
//.cpp
EcritureDom::EcritureDom(QObject *parent) : QObject(parent) {
    mesures = doc.createElement("mesures"); //Balise racine mesures
    doc.appendChild(mesures);
    fichier.setFileName("mesures.xml");
}

void EcritureDom::ajouter(QString numero, QString tension, QString frequence) {
    //On ajoute une mesure
    QDomElement mesure = doc.createElement("mesure");
    mesure.setAttribute("numero",numero);
    mesures.appendChild(mesure); //Ajout de la mesure dans la balises mesures

    QDomElement tensionElem = doc.createElement("tension");
    QDomText tensionText = doc.createTextNode(tension);
    tensionElem.appendChild(tensionText);
    mesure.appendChild(tensionElem);

    //Fréquence comme tension
}

bool EcritureDom::sauvegarder() {
    QTextStream out;
    if(!fichier.open(QIODevice::WriteOnly)) {
        return false;
    }
    out.setDevice(&fichier);
    QDomNode noeud = doc.createProcessingInstruction("xml","version=\"1.0\"");
    doc.insertBefore(noeud, doc.firstChild()); //Ajout de la version xml avant le reste

    doc.save(out,2);//Ecriture avec indentation de 2 espaces
    fichier.close();
    return true;
}
```

### SAX
```cpp
//Widget
MyWidget::MyWidget(QWidget *parent) : QWidget(parent) {
    //...
    QTreeWidget *tree = new QTreeWidget(this);
    tree->setColumnCount(2);
    tree->setColumnWidth(0,150);
    //...
    DOMParser parser(&file, tree);
    if(!parser.parse()) {
        QMessageBox::critical(this, "Parsing DOM", tr("Fichier XML invalide!"));
        return;
    } else {
        tree->expandAll();
    }
}

//domparser
bool DOMParser::parse() {
    QDomDocument doc;
    if(!doc.setContent(file, true, &errorStr, &errorLine, &errorColumn)) {
        return false;
    }

    //Récup racine arbre
    QDomElement root = doc.documentElement();
    if(root.tagName() != "mesures") {
        return false;
    }

    QTreeWidgetItem *rootItem = new QTreeWidgetItem(tree);
    rootItem->setText(0,root.tagName());

    //Recup premier noeud puis parcours suivants
    QDomElement node = root.firstChildElement();
    while(!node.isNull()) {
        QTreeWidgetItem *currentItem = new QTreeWidgetItem(rootItem);
        currentItem->setText(0,node.tagName());
        parseMeasure(node, currentItem);
        node = node.nextSiblingElement();
    }
    return true;
}

void DOMParser::parseMeasure(const QDomElement &element, QTreeWidgetItem *parent) {
    QDomNodeList children = element.childNodes();
    for(int i=0; i<children.length();++i) {
        QTreeWidgetItem *measureItem = new QTreeWidgetItem(parent);
        measureItem->setText(0,children.item(i).nodeName());
        measureItem->setText(1,children.item(i).firstChild().nodeValue());
    }
}
```

### Arbre DOM
```cpp
//Widget
MyWidget::MyWidget(QWidget *parent) : QWidget(parent) {
    //...
    table = new QTableWidget(this);
    taable->setColumnCount(3);
    QStringList listLabels;
    listLabels << "Numéro" << "Tension" << "Courant" ;
    table->setHorizontalHeaderLabels(listLabels);
    QXmlSimpleReader reader;
    QXmlInputSource *source = new QXmlInputSource(&file);
    SaxHandler *saxHandler = new SaxHandler(table);
    reader.setCOntentHandler(saxHandler);
    reader.setErrorHandler(saxHandler);
    reader.parse(source);
}

//SaxHandler
//.hpp  class SaxHandler : public QXmlDefaultHandler {
bool SaxHandler::startElement(const QString &, const QString &, const QString &qName, const QXmlAttributes &) {
    if(qName.toLower() == "mesure") {
        table->insertRow(i++);
    }
    return true;
}

bool SaxHandler::endElement(const QString &, const QString &, const QString &qName) {
    QTableWidgetItem *item = new QTableWidgetItem(currentText);
    if(qName.toLower() == "numero") {
        table->setItem(i-1,0,item);
    } else if(qName.toLower() == "tension") {
        table->setItem(i-1, 1, item);
    } else if(qName.toLower() == "courant") {
        table->setItem(i-1, 2, item);
    }
    return true;
}

bool SaxHandler::characters(const QString &str) {
    currentText = str;
    return true;
}

bool SaxHandler::fatalError(const QXmlParseException &exception) {
    QMessageBox::warning(0, QObject::tr("Parsing SAX"),
        QObject::tr("Erreur de parsing à la ligne %1, colonne " "%2:\n%3.")
        .arg(exception.lineNumber())
        .arg(exception.columnNumber())
        .arg(exception.message()));
    return false;
}
```

## Bibliothèques
```bash
ldd executable ## Permet de lister les dépendances d'un executable
```

## Importer une bibliothèque
```
LIBS += -L"../maBib/release/" –lmaBib
```

#### Créer une bibliothèque avec QtCreator

1.  Nouveau Projet
2.  Autre projet / Bibliothèque C++
3.  Type : choisir Bibliothèque partagée ou Bibliothèque liée statiquement
4.  Choix des modules Qt utilisés dans le code de la bibliothèque
5.  Nom de la classe

## MainWindow
### Close event
```cpp
void MainWin::closeEvent(QCloseEvent *event) {
    writeSettings();
    event->accepts();
}
```

### QAction, QActionGroup, QDir separators
```cpp
MainWin::MainWin(QWidget *parent) : QMainWindow(parent) {
    actNew = new QAction(tr("&Nouveau"),this);
    actNew->setShortcut(tr("Ctrl+N"));
    connect(actNew,&QAction::triggered,sheet,&Sheet::fileNew);
    menuFile = menuBar()->addMenu(tr("&Fichier"));
    connect(menuFile, &QMenu::aboutToShow, this, &MainWin::updateFileMenu); //Variante pour actualiser le contenu avant de l'afficher, menu dynamique
}
//--- dans updateFileMenu ---
void MainWin::updateFileMenu() {
    menuFile->clear();
    menuFile->addAction(actNew);
    //...
    //Actiongroup, action commune
    delete groupFiles;
    groupFiles = new QActionGroup(this);
    QString fileName = QDir::toNativeSeparators(sheet->fileNames[num]);//QDir transforme / en \ sur windows
    QAction *action = new QAction(fileName, groupFiles);
    menuFile->addAction(action);
    connect(groupFiles, &QActionGroup::triggered, this, &MainWin::openLastFile);
    menuFile->addSeparator();//Ajout d'une petite barre
}
//--- dans openLastFile ---
void MainWin::openLastFile(QAction* action) {
    QList<QAction* > lesActions = groupFiles->actions();
    int num = 0;
    while(num<lesActions.size()) {
        if(lesActions[num]==action) {
            sheet->openFile(sheet->fileNames[num]);
        }
        ++num;
    }
}
```

### QMessageBox
```cpp
QMessageBox::information(this, tr("A Propos"), tr("Tableau Blanc\nDessin à main levée\nAvec sérialisation"));
```

## QGraphics
```cpp
MyWidget(QWidget *parent) : QGraphicsView(parent) {
    scene = new QGraphicsScene;
    setScene(scene);
    setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);

    QGraphicsEllipseItem *el = scene->addEllipse(10, 40, 200, 100, QPen(), QBrush(Qt::blue));
    el->setStartAngle(30*16);
    el->setSpanAngle(120*16);

    pixmap = new QPixmap("Smiley.jpg");
    QPixmap scaledPixmap =  pixmap->scaled(QSize(50, 50));
    QGraphicsItem *itemPixmap = scene->addPixmap(scaledPixmap);
    itemPixmap->setPos(10, 280);
    
    image = new QImage("Smiley.jpg");
    QPixmap p2 = QPixmap::fromImage(*image);
    QPixmap scaledPixmap2 = p2.scaled(QSize(50, 50));
    QGraphicsItem *itemPixmap2 = scene->addPixmap(scaledPixmap2);
    itemPixmap2->setPos(10, 350);

    QGraphicsSimpleTextItem *t2 = scene->addSimpleText("addEllipse");
    t2->setPos(300,70);

    foreach(QGraphicsItem *item, scene->items()) {
        item->setFlag(QGraphicsItem::ItemIsMovable);
        item->setFlag(QGraphicsItem::ItemIsSelectable);
    }
    
}
void MyWidget::resizeEvent(QResizeEvent*) {
    if(line) {
        line->setLine(0,0,width(),height());
    } else {
        line = scene->addLine(0, 0, width(), height());
        line->setZValue(-1);
        line->setFlag(QGraphicsItem::ItemIsMovable);
        line->setFlag(QGraphicsItem::ItemIsSelectable);
    }
}
```