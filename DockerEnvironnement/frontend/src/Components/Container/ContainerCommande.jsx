import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContainerCommande = ({modele, motorisation, prix, couleur, description, status}) => {
    return (
        <Container className="bg-light p-5" style={{margin: '10%', marginTop: '5%', marginBottom: '5%', width: '80%'}} fluid>
            <Row className="justify-content-center">
                <Col>
                <h3 className= "text-center mb-5">{modele}</h3>
                    <p className ='mb-5'>{motorisation}</p>
                    <p className ='mb-5'>{prix}</p>
                    <p className ='mb-5'>{couleur}</p>
                    <p className ='mb-5'>{description}</p>
                    <p className ='mb-5'>{status}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ContainerCommande;
