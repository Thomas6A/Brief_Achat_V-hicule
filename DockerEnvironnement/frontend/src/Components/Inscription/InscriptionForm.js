import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputMask from 'react-input-mask';

const InscriptionForm = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        try {
          navigate('/');
        } catch (error) {
          console.log(error);
        }
      }
      
    return (<>
            <h1 className='text-white text-center mb-5'>Inscription</h1>
        <Form className='text-white' onSubmit={handleRegister}>

        {/* Nom d'utilisateur */}
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control className='mb-5' type="text" placeholder="Votre nom d'utilisateur" required />
      </Form.Group>

        {/* Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className='mb-5' type="email" placeholder="Votre adresse email" required />
      </Form.Group>

        {/* Mot de passe */}
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Votre mot de passe" required/>
      </Form.Group>

      {/* Adresse */}
      <Form.Group className="mb-3" controlId="formBasicAdresse">
        <Form.Label>Adresse</Form.Label>
        <Form.Control className='mb-5' type="text" placeholder="Votre adresse" required />
      </Form.Group>

      {/* Tel */}
      <Form.Group className="mb-3" controlId="formBasicTel">
      <Form.Label>Téléphone</Form.Label>
      <InputMask
        mask="99/99/99/99/99"
        maskChar=" "
        className="form-control"
        type="text"
        placeholder="Votre numéro de téléphone"
        required
      />
    </Form.Group>

        {/* Politique de confidentialité */}
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="J'accepte la politique de confidentialité" required />
      </Form.Group>
      
        {/* Bouton d'inscription */}
      <div className='text-center mt-5 mb3'>
      <Button className='mb-4' size="lg" variant="secondary" type="submit">
        S'inscrire
      </Button>
      <p>Vous avez déja un compte ? <a style={{textDecoration: 'none'}} className='text-info' href='/'><i>Connectez-vous</i></a></p>
      </div>
    </Form>
    </>
    );
};

export default InscriptionForm;