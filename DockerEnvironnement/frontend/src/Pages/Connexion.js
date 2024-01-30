import React from 'react';
import ConnexionForm from '../Components/Forms/ConnexionForm';

const Connexion = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className='bg-dark p-5 w-100' style={{marginLeft: '20%', marginRight: '20%'}}>
        <ConnexionForm />
      </div>
    </div>
  );
};

export default Connexion;
