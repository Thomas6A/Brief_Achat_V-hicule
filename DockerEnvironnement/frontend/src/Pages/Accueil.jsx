import React, { useEffect, useState } from 'react';
import VehiculeService from "../Services/VehiculeService";
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehicule from '../Components/Cards/CardVehicule';

const Accueil = () => {
    const [vehicules, setVehicules] = useState([]);

    useEffect(() => {
        fetchVehicules();
      }, []);

      const fetchVehicules = async () => {
        try {
          let response = await VehiculeService.fetchVehicules();
          setVehicules(response.data);
        } catch (e) {
          console.log(e);
        }
      };

    return (
        <div>
            {/* Navbar */}
            <NavbarComponent />
            <div className='d-flex justify-content-around'>

            {vehicules.map(vehicule => (
                    <CardVehicule
                        key={vehicule.id} // Assuming each vehicule has a unique ID
                        modele={vehicule.modele}
                        motorisation={vehicule.motorisation}
                        prix={vehicule.prix}
                        couleur={vehicule.couleur}
                        description={vehicule.description}
                    />
                ))}
        </div>
        
        </div>
    );
};

export default Accueil;