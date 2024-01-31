import React from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehiculePanier from '../Components/Cards/CardVehiculePanier';

const Panier = () => {
    return (<>
        <NavbarComponent />
        <div className='d-flex justify-content-around'>
                <CardVehiculePanier 
                modele="Citroen"
                motorisation="Essence"
                prix="2600 euros"
                couleur="Rouge"
                description="Une voiture motorisée pour parcourir la route comme un moteur qui alimente tous les autres moteurs du monde des moteurs."/>
                </div>
            </>
    );
};

export default Panier;