import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContainerCommande = ({
  prix,
  statut,
  date_livraison,
}) => {
  return (
    <Container
      className="bg-light p-5"
      style={{
        margin: "10%",
        marginTop: "5%",
        marginBottom: "5%",
        width: "80%",
      }}
      fluid
    >
      <Row className="justify-content-center">
        <Col>
          <p className="mb-5">{prix}</p>
          <p className="mb-5">{statut}</p>
          <p className="mb-5">{date_livraison}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerCommande;
