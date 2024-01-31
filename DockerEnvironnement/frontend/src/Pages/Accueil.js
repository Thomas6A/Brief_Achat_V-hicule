import React, {useState} from 'react';
import NavbarComponent from '../Components/Navbar/navbar';
import CardVehicule from '../Components/Cards/CardVehicule';
import Button from 'react-bootstrap/Button';
import ModalPersonnaliser from '../Components/Modals/ModalPersonnaliser';
import Form from 'react-bootstrap/Form';

const Accueil = () => {
    const [modalShow, setModalShow] = useState(false);
    const [voitureSelectionnee, setVoitureSelectionnee] = useState(null);

    const handlePersonnaliserClick = (voiture) => {
        setVoitureSelectionnee(voiture);
        setModalShow(true);
    };

    return (
        <div>
            {/* Navbar */}
            <NavbarComponent />
            <div className='d-flex justify-content-around'>

                {/* Premiere voiture */}
            <CardVehicule
                width= '100%'
                modele="Citroen"
                motorisation="Essence"
                prix="2600 euros"
                couleur="Rouge"
                description="Une voiture motorisée pour parcourir la route comme un moteur qui alimente tous les autres moteurs du monde des moteurs."
                bouton_personnaliser={<Button variant="success" onClick={() => handlePersonnaliserClick({
                        modele: "Citroen",
                        option: <Form.Select aria-label="Ajouter une option">
                        <option>Ajouter une option</option>
                        <option value="1">Un</option>
                        <option value="2">Deux</option>
                        <option value="3">Troix</option>
                      </Form.Select>,
                      supplement: <Form.Select aria-label="Ajouter une option">
                      <option>Ajouter une option</option>
                      <option value="1">Un</option>
                      <option value="2">Deux</option>
                      <option value="3">Troix</option>
                    </Form.Select>
                    })}>Personnaliser</Button>}
                
                bouton_panier={<Button variant="primary">Ajouter au panier</Button>}
            />
            {/* Deuxieme voiture */}
            <CardVehicule
                width= '100%'
                modele="Renault"
                motorisation="Diesel"
                prix="13000 euros"
                couleur="Bleu"
                description="Une moto pour les pro."
                bouton_personnaliser={<Button variant="success" onClick={() => handlePersonnaliserClick({
                    modele: "Citroen",
                    option: 
                    <Form.Select aria-label="Ajouter une option">
                    <option>Ajouter une option</option>
                    <option value="1">Un</option>
                    <option value="2">Deux</option>
                    <option value="3">Troix</option>
                  </Form.Select>,
                  supplement: 
                  <Form.Select aria-label="Ajouter une option">
                  <option>Ajouter une option</option>
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                  <option value="3">Troix</option>
                </Form.Select>
                })}>Personnaliser</Button>}
                bouton_panier={<Button variant="primary">Ajouter au panier</Button>}
            />
            {/* Troisieme voiture */}
            <CardVehicule
                width= '100%'
                modele="Peugeot"
                motorisation="Hybride"
                prix="16000.99 euros"
                couleur="Orange"
                description="Une voiture peugeot"
                bouton_personnaliser={<Button variant="success" onClick={() => handlePersonnaliserClick({
                    modele: "Citroen",
                    option: 
                    <Form.Select aria-label="Ajouter une option">
                    <option>Ajouter une option</option>
                    <option value="1">Un</option>
                    <option value="2">Deux</option>
                    <option value="3">Troix</option>
                  </Form.Select>,
                  supplement: 
                  <Form.Select aria-label="Ajouter une option">
                  <option>Ajouter une option</option>
                  <option value="1">Un</option>
                  <option value="2">Deux</option>
                  <option value="3">Troix</option>
                </Form.Select>
                })}>Personnaliser</Button>}
                bouton_panier={<Button variant="primary">Ajouter au panier</Button>}
            />
        </div>
        {voitureSelectionnee && (
                <ModalPersonnaliser
                    show={modalShow}
                    onHide={() => {
                        setModalShow(false);
                        setVoitureSelectionnee(null);
                    }}
                    {...voitureSelectionnee}
                />
            )}
        </div>
    );
};

export default Accueil;