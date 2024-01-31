import React from 'react';
import InscriptionForm from '../Components/Inscription/InscriptionForm';

const Inscription = () => {
    return (
        <div>
      <div className= 'bg-dark p-5 rounded' style={{ marginTop: '5%', marginBottom: '5%', marginLeft: '20%', marginRight: '20%'}}>
        <InscriptionForm />
      </div>
    </div>
    );
};

export default Inscription;