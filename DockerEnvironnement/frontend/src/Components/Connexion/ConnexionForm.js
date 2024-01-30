import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const ConnexionForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      navigate('/accueil');
    } catch (error) {
      console.log(error);
    }
  }
    return (<>
    <h1 className='text-white text-center mb-5'>Connexion</h1>
        <Form className='text-white' onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className='mb-5' type="email" placeholder="Votre adresse email" onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Votre mot de passe" onChange={(e) => setPassword(e.target.value)} required/>
      </Form.Group>
      <div className='text-center mt-5 mb3'>
      <Button className='mb-4' size="lg" variant="secondary" type="submit">
        Se connecter
      </Button>
      <p>Vous n'avez pas de compte ? <a style={{textDecoration: 'none'}} className='text-info' href='/inscription'><i>Inscrivez-vous</i></a></p>
      </div>
    </Form>
    </>
    );
};

export default ConnexionForm;