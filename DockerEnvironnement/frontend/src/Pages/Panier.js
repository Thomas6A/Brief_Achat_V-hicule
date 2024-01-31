import React from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehicule from '../Components/Cards/CardVehicule';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Panier = () => {
    const navigate = useNavigate();
    return (<>
        <NavbarComponent />
        <div className='d-flex justify-content-around'>
        <CardVehicule
                width= '30%'
                modele="Citroen"
                motorisation="Essence"
                prix="2600 euros"
                couleur="Rouge"
                description="Une voiture motorisée pour parcourir la route comme un moteur qui alimente tous les autres moteurs du monde des moteurs."
                payer= {<Button onClick={() => navigate('/commande')} variant='success'>
                Payer
            </Button>}
            />
            </div>
            </>
    );
};

export default Panier;