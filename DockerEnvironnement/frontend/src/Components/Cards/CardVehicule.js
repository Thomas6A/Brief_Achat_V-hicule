import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardVehicule = (props) => {
    return (
        <>
            <Card style={{ width: props.width, margin: '5%', marginLeft: '3%'}}>
      <Card.Body>
        <Card.Title className='mb-5 text-center'>{props.modele}</Card.Title>
        <Card.Text className='mb-5'>
          {props.motorisation}
        </Card.Text>
        <Card.Text className='mb-5'>
          {props.prix}
        </Card.Text>
        <Card.Text className='mb-5'>
          {props.couleur}
        </Card.Text>
        <Card.Text className='mb-5'>
          {props.description}
        </Card.Text>
        {props.status && (
            <div className='mb-5'>{props.status}</div>
        )}
       
        <div className='d-flex justify-content-around'>
                        {props.bouton_personnaliser && (
                            <div className='text-center'>{props.bouton_personnaliser}</div>
                        )}
                        {props.bouton_panier && (
                            <div>{props.bouton_panier}</div>
                        )}
                        {props.payer && (
                            <div className='text-center'>{props.payer}</div>
                        )}
                    </div>
      </Card.Body>
    </Card>
        </>
    );
};

export default CardVehicule;