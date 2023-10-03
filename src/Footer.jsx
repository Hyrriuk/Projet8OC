import React from "react";
import Logo from "./Logo";
import "./Sass/Layout/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <Logo LogoName="footer__logo" Color="white" />
        </footer>
    );
}

export default Footer;
