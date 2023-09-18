import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import logo from "./logoByC.svg"
import './NavBar.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


export const NavBar = () => {
    return (
        <Navbar expand="lg" className="navBar">
            <Container>
                <Navbar.Brand as={Link} to='/' className="col-lg-3">
                    <img className="logo" src={logo} alt="Logo empresa" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link as={Link} to='categoria/Maquinaria Pesada' className="navNav">Maquinaria Pesada</Nav.Link>
                        <Nav.Link as={Link} to='categoria/Herramienta de construcción' className="navNav">Herramienta de construcción</Nav.Link>
                        <Nav.Link as={Link} to='categoria/Equipo de soldadura' className="navNav">Equipo de soldadura</Nav.Link>
                        <Nav.Link as={Link} to='categoria/Equipo de energía' className="navNav">Equipo de energía</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;


