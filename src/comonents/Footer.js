import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container fluid className="footerStyle">
        <Navbar expand="lg">
          <Container>
            <Row>
              <Col>
                <a href="#">Datenschutz</a> <a href="#">Impressum</a> © 2023
                Insidemarketing. Alle Rechte vorbehalten.
              </Col>
            </Row>{" "}
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Footer;
