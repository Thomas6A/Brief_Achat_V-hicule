import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalPersonnaliser from '../Modals/ModalPersonnaliser';
import { useNavigate } from 'react-router-dom';

const CardVehicule = ({modele, motorisation, prix, couleur, description}) => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [voitureSelectionnee, setVoitureSelectionnee] = useState(null);

    const handlePersonnaliserClick = (voiture) => {
        setVoitureSelectionnee(voiture);
        setModalShow(true);
    };

    return (
        <>
            <Card style={{margin: '5%', marginLeft: '3%' }}>
                <Card.Body>
                        <Card.Title style={{ marginLeft: '38%' }}>{modele}</Card.Title>

                    <Card.Text className='mb-5 mt-5'>
                        {motorisation}
                    </Card.Text>
                    <Card.Text className='mb-5'>
                        {prix}
                    </Card.Text>
                    <Card.Text className='mb-5'>
                        {couleur}
                    </Card.Text>
                    <Card.Text className='mb-5'>
                        {description}
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                        <Button variant="success" onClick={() => handlePersonnaliserClick({
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
                        })}>Personnaliser</Button>
                        <Button onClick={() => navigate('/panier')} variant="primary">Ajouter au panier</Button>
                    </div>
                </Card.Body>
            </Card>
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
        </>
    );
};

export default CardVehicule;
