import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./logoByC.svg"
import './styles.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img className="logo" src={logo} alt="Logo empresa" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='categoria/Maquinaria Pesada'>Maquinaria Pesada</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='categoria/Herramienta de construcción'>Herramienta de construcción</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='categoria/Equipo de soldadura'>Equipo de soldadura</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='categoria/Equipo de energía'>Equipo de energía</NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;



/* <div className="App">
    <NavBar />
    {cargando ? (<p>CARGANDO PRODUCTOS...</p>) : <ItemListContainer texto='producto para alquilar' />}
    </div> */