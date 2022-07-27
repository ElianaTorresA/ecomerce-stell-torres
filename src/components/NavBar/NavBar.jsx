
import { Navbar, Container,Nav, NavDropdown } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Link to='/'>
                <Navbar.Brand >Stell casa de moda</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink to='/categoria/Hombres' className={({isActive})=> isActive ? 'Sombra' : 'SinSombra' } >Hombres</NavLink>
                <NavLink to='/categoria/Mujeres'>Mujeres</NavLink>               
                </Nav>
                <Nav>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
