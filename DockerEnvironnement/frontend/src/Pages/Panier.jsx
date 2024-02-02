import React, {useEffect, useState} from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehiculePanier from '../Components/Cards/CardVehiculePanier';
import PanierService from '../Services/PanierService';

const Panier = () => {
    const [paniers, setPanier] = useState([]);

    useEffect(() => {
        fetchPanier();
      }, []);

      const fetchPanier = async () => {
        try {
          let response = await PanierService.fetchPanier(1);
          setPanier(response.data);
        } catch (e) {
          console.log(e);
        }
      };
    
    return (<>
        <NavbarComponent />
        <div className='d-flex justify-content-around'>

        <div className='row flex-wrap justify-content-around '>

            {paniers.map(panier => (
                <div key={panier.id} className='col-md-4'>
                 <CardVehiculePanier 
                modele={panier.nom_modele}
                motorisation={panier.motorisation}
                prix={panier.prix}
                couleur={panier.couleur}
                description={panier.description}/>
                </div>
            ))}
               
                </div>
                </div>
            </>
    );
};

export default Panier;