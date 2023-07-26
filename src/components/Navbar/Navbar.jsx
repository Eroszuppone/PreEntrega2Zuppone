import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <>
        <Navbar bg="info" variant="info" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <h3 className=''>Tienda del Animal</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-expand-lg" />
            <Navbar.Collapse id="navbar-expand-lg">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/gatos">Gatos</Nav.Link>
                <Nav.Link as={Link} to="/perros">Perros</Nav.Link>
              </Nav>
              <CartWidget />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }

export default NavBar;