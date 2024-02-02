INSERT INTO utilisateur(username, password, email, adresse, tel) VALUES("user", "password", "user@gmail.com", "adresse", 0463748392); 
INSERT INTO utilisateur(username, password, email, adresse, tel) VALUES("Parzival", "password", "parzi@gmail.com", "adresse", 0453648203);
INSERT INTO utilisateur(username, password, email, adresse, tel) VALUES("Thomas", "password", "thomas@gmail.com", "adresse", 0372938293);  

INSERT INTO voiture(prix, nom_modele, couleur, motorisation, description, quantite) VALUES(1000, "Peugeot", "bleu", "Hybride", "Tous les cris les SOS", 45);
INSERT INTO voiture(prix, nom_modele, couleur, motorisation, description, quantite) VALUES(5000, "Renault", "Cyan", "Electrique", "Partent dans les airs", 1300);
INSERT INTO voiture(prix, nom_modele, couleur, motorisation, description, quantite) VALUES(8000, "Citroen", "Orange", "Diesel", "Une citroen très rapide", 1100);
INSERT INTO voiture(prix, nom_modele, couleur, motorisation, description, quantite) VALUES(8000, "Peugeot 206", "Rouge", "Essence", "Voiture de luxe", 1900);

INSERT INTO commande (date_livraison, adresse, facture, statut, id_utilisateur) VALUES ('2024-06-21', '8 rue de Daniel Balavoine', 'Votre facture s''élève à 2345.99 €', 'En cours', 1);
INSERT INTO commande (date_livraison, adresse, facture, statut, id_utilisateur) VALUES ('2024-08-03', 'Une rue quelconque', 'Votre facture s''élève à 1112.99 €', 'Livré', 2);
INSERT INTO commande (date_livraison, adresse, facture, statut, id_utilisateur) VALUES ('2024-12-03', 'Une rue de livraison', 'Votre facture s''élève à 1299.99 €', 'En cours', 3);

INSERT INTO email (message, id_commande, id_utilisateur) VALUES("Votre commande est en cours de livraison", 1, 1);
INSERT INTO email (message, id_commande, id_utilisateur) VALUES("Votre commande est en cours de livraison", 2, 2);
INSERT INTO email (message, id_commande, id_utilisateur) VALUES("Votre commande a été livré", 3, 3);

INSERT INTO moto(prix, nom_modele, couleur, motorisation, description, quantite) VALUES (2000, "Citroen", "Rouge", "Essence", "Une moto qui donne envie de moto_riser la route", 16);
INSERT INTO moto(prix, nom_modele, couleur, motorisation, description, quantite) VALUES (172349.99, "Peugeot", "Violet", "Diesel", "Les moto c'est la vie", 180);
INSERT INTO moto(prix, nom_modele, couleur, motorisation, description, quantite) VALUES (23899.99, "Renault", "Gris", "Essence", "Acheter cette moto MAINTENANT", 165);
INSERT INTO moto(prix, nom_modele, couleur, motorisation, description, quantite) VALUES (6000, "Citroen C3", "Noir", "Essence", "Une moto qui donne envie de moto_risationner la route", 16);
INSERT INTO moto(prix, nom_modele, couleur, motorisation, description, quantite) VALUES (9000, "Peugeot C3", "Blanc", "Essence", "Une moto qui donne envie de moto_risationnisationner la route", 16);

INSERT INTO panier(validation_panier, id_utilisateur) VALUES(1, 1);
INSERT INTO panier(validation_panier, id_utilisateur) VALUES(0, 2);
INSERT INTO panier(validation_panier, id_utilisateur) VALUES(1, 3);

INSERT INTO contientmoto(id_commande, id_moto) VALUES (1, 1);
INSERT INTO contientmoto(id_commande, id_moto) VALUES (2, 3);

INSERT INTO contientvoiture(id_commande, id_voiture) VALUES(3,2);

INSERT INTO possedemoto(id_panier, id_moto) VALUES(2, 4);
INSERT INTO possedemoto(id_panier, id_moto) VALUES(3, 5);

INSERT INTO possedevoiture(id_panier, id_voiture) VALUES(2, 4);
INSERT INTO possedevoiture(id_panier, id_voiture) VALUES(1, 2);

INSERT INTO sms (message, id_commande, id_utilisateur) VALUES ("Votre voiture à été livré", 3, 2);