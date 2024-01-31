import React from 'react';
import ContainerCommande from '../Components/Container/ContainerCommande';
import NavbarComponent from '../Components/Navbar/navbar';

const Commande = () => {
    return (
        <>
        <NavbarComponent />
        
            <ContainerCommande
            modele="Citroen"
            motorisation="Essence"
            prix="2600 euros"
            couleur="Rouge"
            description="Une voiture motorisée pour parcourir la route comme un moteur qui alimente tous les autres moteurs du monde des moteurs."
            status= "En cours de livraison"
            />
            <ContainerCommande
                modele="Peugeot"
                motorisation="Hybride"
                prix="16000.99 euros"
                couleur="Orange"
                description="Une voiture peugeot"
                status= "Commande refusé, tu seras pas livré et tu seras pas rembourser ! Allez CHEH"
            />
            <ContainerCommande
                modele="Renault"
                motorisation="Diesel"
                prix="13000 euros"
                couleur="Bleu"
                description="Une moto pour les pro."
                status="En cours de traitement"
            />
        </>
    );
};

export default Commande;