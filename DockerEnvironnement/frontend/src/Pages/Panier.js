import React from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehicule from '../Components/Cards/CardVehicule';
import Button from 'react-bootstrap/Button';

const Panier = () => {
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
                payer= {<Button size='lg' variant='success' style={{marginRight: '50px'}}>
                Payer
            </Button>}
            />
            </div>
            </>
    );
};

export default Panier;