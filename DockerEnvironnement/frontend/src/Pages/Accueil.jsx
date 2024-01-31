import React from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehicule from '../Components/Cards/CardVehicule';

const Accueil = () => {

    return (
        <div>
            {/* Navbar */}
            <NavbarComponent />
            <div className='d-flex justify-content-around'>

                {/* Premiere voiture */}
            <CardVehicule
                modele="Citroen"
                motorisation="Essence"
                prix="2600 euros"
                couleur="Rouge"
                description="Une voiture motorisée pour parcourir la route comme un moteur qui alimente tous les autres moteurs du monde des moteurs."
            />
            {/* Deuxieme voiture */}
            <CardVehicule
                modele="Renault"
                motorisation="Diesel"
                prix="13000 euros"
                couleur="Bleu"
                description="Une moto pour les pro."
            />
            {/* Troisieme voiture */}
            <CardVehicule
                modele="Peugeot"
                motorisation="Hybride"
                prix="16000.99 euros"
                couleur="Orange"
                description="Une voiture peugeot"
            />
        </div>
        
        </div>
    );
};

export default Accueil;