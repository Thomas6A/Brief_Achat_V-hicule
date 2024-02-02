import React, { useEffect, useState } from "react";
import ContainerCommande from "../Components/Container/ContainerCommande";
import NavbarComponent from "../Components/Navbar/navbar";
import CommandeService from "../Services/CommandeService";

const Commande = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    fetchCommandes();
  }, []);

  const fetchCommandes = async () => {
    try {
      let response = await CommandeService.fetchCommandesUser(1);
      setCommandes(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NavbarComponent />
      {commandes.map((commande) => (
        <ContainerCommande
          key={commande.id_commande}
          prix={commande.facture}
          statut={commande.statut}
          date={commande.date}_livraison
        />
      ))}
    </>
  );
};

export default Commande;
