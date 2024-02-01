import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalModifierCompte from '../Modals/ModalModifierCompte';

const ContainerCompte = ({username, password, email, tel, adresse}) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container className="bg-light p-5" style={{marginLeft: '20%', marginRight: '20%', marginTop: '5%', marginBottom: '5%', width: '60%'}} fluid>
            <Row>
                <Col>
                <p className= " mb-5">Nom d'utilisateur : {username}</p>
                    <p className ='mb-5'>Mot de passe : {password}</p>
                    <p className ='mb-5'>email : {email}</p>
                    <p className ='mb-5'>Téléphone : {tel}</p>
                    <p className ='mb-5'>Adresse : {adresse}</p>
                    <div className= "d-flex justify-content-around">
                    <Button variant= "primary" onClick={() => setModalShow(true)}>Modifier</Button>
                    <Button variant= "danger">Supprimer</Button>
                    </div>
                </Col>
            </Row>
            <ModalModifierCompte
                show={modalShow}
                onHide={() => setModalShow(false)}
                username={username}
                password={password}
                email={email}
                tel={tel}
                adresse={adresse}
            />
        </Container>
    );
};

export default ContainerCompte;