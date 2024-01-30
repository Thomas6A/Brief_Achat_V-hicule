import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardVehicule = (props) => {
    return (
        <>
            <Card style={{ width: '20%', margin: '7%' }}>
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
       
        <div className='d-flex justify-content-around'>
                        {props.bouton1 && (
                            <div className='text-center'>{props.bouton1}</div>
                        )}
                        {props.bouton2 && (
                            <div>{props.bouton2}</div>
                        )}
                    </div>
      </Card.Body>
    </Card>
        </>
    );
};

export default CardVehicule;