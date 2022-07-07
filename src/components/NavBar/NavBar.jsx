
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"

import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Stell Casa de modas</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
            <Nav.Link href="#home">Sobre nosotros</Nav.Link>
            <Nav.Link href="#link">Donde estamos</Nav.Link>
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hombres</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mujeres</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">A tu medida</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget />
        </Container>
    </Navbar>
  )
}

export default NavBar