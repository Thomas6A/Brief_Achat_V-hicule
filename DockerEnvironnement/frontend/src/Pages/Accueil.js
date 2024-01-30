import React from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehicule from '../Components/Cards/CardVehicule';
import Button from 'react-bootstrap/Button';

const Accueil = () => {

    return (
        <div>
            <NavbarComponent />
            <div className='d-flex justify-content-around'>
            <CardVehicule
                width= '30%'
                modele="Citroen"
                motorisation="Essence"
                prix="2600 euros"
                couleur="Rouge"
                description="Une voiture motorisée pour parcourir la route comme un moteur qui alimente tous les autres moteurs du monde des moteurs."
                bouton_personnaliser={<Button variant="success">Personnaliser</Button>}
                bouton_panier={<Button variant="primary">Ajouter au panier</Button>}
            />
            <CardVehicule
                width= '30%'
                modele="Renault"
                motorisation="Diesel"
                prix="13000 euros"
                couleur="Bleu"
                description="Une moto pour les pro."
                bouton_personnaliser={<Button variant="success">Personnaliser</Button>}
                bouton_panier={<Button variant="primary">Ajouter au panier</Button>}
            />
            <CardVehicule
                width= '30%'
                modele="Peugeot"
                motorisation="Hybride"
                prix="16000.99 euros"
                couleur="Orange"
                description="Une voiture peugeot"
                bouton_personnaliser={<Button variant="success">Personnaliser</Button>}
                bouton_panier={<Button variant="primary">Ajouter au panier</Button>}
            />
        </div>
        </div>
    );
};

export default Accueil;