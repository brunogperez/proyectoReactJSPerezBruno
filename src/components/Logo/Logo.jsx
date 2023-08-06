import React from "react";
import LogoByC from  '../Logo/LogoByC.svg'; 
import "./styles.css";

export const Logo = () => {
    return (
        <img className="logo"  src={LogoByC} alt="Logo"/>
    );
}

export default Logo;