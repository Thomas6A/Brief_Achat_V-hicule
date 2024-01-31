CREATE DATABASE IF NOT EXISTS achatvehicule;

use achatvehicule;

CREATE TABLE IF NOT EXISTS utilisateur(
id_utilisateur int primary key auto_increment,
username varchar(30) NOT NULL,
password varchar(30) NOT NULL,
email varchar(80) NOT NULL UNIQUE,
adresse varchar(255),
tel varchar(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS voiture (
id_voiture int primary key AUTO_INCREMENT,
prix float NOT NULL,
nom_modele varchar(30) NOT NULL UNIQUE,
couleur varchar(30) NOT NULL,
motorisation varchar(30) NOT NULL,
description varchar(255) NOT NULL,
quantite int NOT NULL
);

CREATE TABLE IF NOT EXISTS moto (
id_moto int primary key AUTO_INCREMENT,
prix float NOT NULL,
nom_modele varchar(30) NOT NULL UNIQUE,
couleur varchar(30) NOT NULL,
motorisation varchar(30) NOT NULL,
description varchar(255) NOT NULL,
quantite int NOT NULL
);


CREATE TABLE IF NOT EXISTS panier(
id_panier int  PRIMARY KEY AUTO_INCREMENT,
validation_panier boolean NOT NULL,
id_utilisateur int NOT NULL,
FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE IF NOT EXISTS possedeVoiture (
id_panier int NOT NULL,
id_voiture int NOT NULL,
PRIMARY KEY(id_panier, id_voiture),
FOREIGN KEY (id_panier) REFERENCES panier(id_panier),
FOREIGN KEY (id_voiture) REFERENCES voiture(id_voiture)
);

CREATE TABLE IF NOT EXISTS commande(
id_commande int PRIMARY KEY AUTO_INCREMENT ,
date_livraison date NOT NULL,
adresse varchar(255) NOT NULL,
facture varchar(100) NOT NULL,
statut varchar(100) NOT NULL,
id_utilisateur int NOT NULL,
FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE IF NOT EXISTS contientVoiture(
id_commande int NOT NULL,
id_voiture int NOT NULL,
PRIMARY KEY(id_commande, id_voiture),
FOREIGN KEY (id_commande) REFERENCES commande(id_commande),
FOREIGN KEY (id_voiture) REFERENCES voiture(id_voiture)
);

CREATE TABLE IF NOT EXISTS possedeMoto(
id_panier int NOT NULL,
id_moto int NOT NULL,
PRIMARY KEY(id_panier, id_moto),
FOREIGN KEY (id_panier) REFERENCES panier(id_panier),
FOREIGN KEY (id_moto) REFERENCES moto(id_moto)
);

CREATE TABLE IF NOT EXISTS contientMoto(
id_commande int NOT NULL,
id_moto int NOT NULL,
PRIMARY KEY(id_commande, id_moto),
FOREIGN KEY (id_commande) REFERENCES commande(id_commande),
FOREIGN KEY (id_moto) REFERENCES moto(id_moto)
);

CREATE TABLE IF NOT EXISTS sms(
id_sms int PRIMARY KEY AUTO_INCREMENT,
message varchar(255) NOT NULL,
id_commande int NOT NULL,
FOREIGN KEY (id_commande) REFERENCES commande(id_commande),
id_utilisateur int NOT NULL,
FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

CREATE TABLE IF NOT EXISTS email(
id_email int PRIMARY KEY AUTO_INCREMENT,
message varchar(255) NOT NULL,
id_commande int NOT NULL,
FOREIGN KEY (id_commande) REFERENCES commande(id_commande),
id_utilisateur int NOT NULL,
FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);