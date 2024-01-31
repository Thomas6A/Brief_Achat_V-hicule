import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const CardVehiculePanier = ({modele, motorisation, prix, couleur, description}) => {
    const navigate = useNavigate();
    return (
        <>
            <Card style={{ width: '30%', margin: '5%', marginLeft: '3%'}}>
                <Card.Body>
                  <div className="d-flex justify-content-between ">
                    <Card.Title style= {{marginLeft: '38%'}}>{modele}</Card.Title>
                    <Button 
                            variant="outline-danger" 
                            className="close-button" >
                            &times;
                        </Button>
                    
                    </div>
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
                    <Button onClick={() => navigate('/commande')} variant="success" >Payer</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default CardVehiculePanier;