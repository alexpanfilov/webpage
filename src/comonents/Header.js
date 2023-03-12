import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo.svg";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top" className="navbarStyle">
        <Container>
          <Navbar.Brand href="#">
            <Image src={Logo} height="40px" width="250px" alt="Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="headerImage">
        <div className="intro_vgl_layer layer">
          <h1 className="">Kostenlose Girokonten im Vergleich 2023</h1>
        </div>
      </Container>
    </>
  );
};

export default Header;
