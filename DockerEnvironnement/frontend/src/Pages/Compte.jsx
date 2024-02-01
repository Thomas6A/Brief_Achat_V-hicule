import React from 'react';
import ContainerCompte from '../Components/Container/ContainerCompte';
import NavbarComponent from '../Components/Navbar/navbar';

const Compte = () => {
    return (
        <>
        <NavbarComponent />
            <ContainerCompte username="user" adresse="adresse" email="email@email.com" tel="0657465748" password="password" />
        </>
    );
};

export default Compte;