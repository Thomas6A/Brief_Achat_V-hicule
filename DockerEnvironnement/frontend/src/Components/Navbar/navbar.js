import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaBasketShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
    const navigate = useNavigate();
    const handlePanier = () => {
        try {
          navigate('/panier');
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <div></div>
            <div className="ml-auto">
                <Button size='lg' variant="success" style={{ marginRight: '30px' }}>
                    Mes commandes
                </Button>
                <Button onClick={handlePanier} variant="light" style={{ marginRight: '30px' }}>
                <FaBasketShopping size={"40px"} />
                </Button>
                <Button size='lg' variant='secondary' style={{marginRight: '50px'}}>
                    Mon compte
                </Button>
            </div>
        </Navbar>
    );
};

export default NavbarComponent;
