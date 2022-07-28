
import { Navbar, Container,Nav, NavDropdown } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link to='/'>
                    <Navbar.Brand href="Inicio">Stell Casa de moda</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link to='/categoria/Hombres' href="Hombres">Hombres</Nav.Link>
                    <Nav.Link to='/categoria/Mujeres' href="Mujeres">Mujeres</Nav.Link>
                    <NavDropdown title="Sobre nosotros" id="basic-nav-dropdown">
                        <NavDropdown.Item href="SobreNosotros/DondeEstamos">Donde estamos</NavDropdown.Item>
                        <NavDropdown.Item href="SobreNosotros/Contactanos">Contactanos</NavDropdown.Item>
                        <NavDropdown.Item href="SobreNosotros/Quienes Somos">Quienes Somos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
