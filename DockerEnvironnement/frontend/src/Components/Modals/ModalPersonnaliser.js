import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalPersonnaliser = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Personnaliser {props.modele}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className='mt-4 mb-5'>{props.option}</div>
              <div className='mb-4'>{props.supplement}</div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Fermer</Button>
                <Button variant="primary">
                    Appliquer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalPersonnaliser;
