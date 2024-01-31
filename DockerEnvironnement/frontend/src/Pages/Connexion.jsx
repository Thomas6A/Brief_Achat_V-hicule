import React from 'react';
import ConnexionForm from '../Components/Connexion/ConnexionForm';

const Connexion = () => {
  return (
    <div>
      <div className='bg-dark p-5 rounded' style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '20%', marginRight: '20%'}}>
        <ConnexionForm />
      </div>
    </div>
  );
};

export default Connexion;
