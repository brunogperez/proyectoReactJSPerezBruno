import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logoByC.svg";
import './styles.css'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={logo} alt="Logo empresa" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Empresa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Productos</a>
                        </li>

                        <li className="nav-item"> <CartWidget /> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;