import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModalModifierCompte = ({ show, onHide, username, password, email, tel, adresse }) => {
    const [updatedUsername, setUpdatedUsername] = useState(username);
    const [updatedPassword, setUpdatedPassword] = useState(password);
    const [updatedEmail, setUpdatedEmail] = useState(email);
    const [updatedTel, setUpdatedTel] = useState(tel);
    const [updatedAdresse, setUpdatedAdresse] = useState(adresse);

    const handleSaveChanges = () => {
        console.log('Changements sauvegardés');
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Modifier le compte</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Nom d'utilisateur</Form.Label>
                        <Form.Control
                            type="text"
                            value={updatedUsername}
                            onChange={(e) => setUpdatedUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            value={updatedPassword}
                            onChange={(e) => setUpdatedPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={updatedEmail}
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTel">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control
                            type="tel"
                            value={updatedTel}
                            onChange={(e) => setUpdatedTel(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formAdresse">
                        <Form.Label>Adresse</Form.Label>
                        <Form.Control
                            type="text"
                            value={updatedAdresse}
                            onChange={(e) => setUpdatedAdresse(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Annuler
                </Button>
                <Button variant="success" onClick={handleSaveChanges}>
                    Enregistrer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalModifierCompte;