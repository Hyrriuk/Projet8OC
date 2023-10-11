import React from "react";
import Logo from "../Shared/Logo/Logo";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <Logo LogoName="footer__logo" Color="white" />
            <p className="footer__text">© 2020 Kasa. All Rights reserved</p>
        </footer>
    );
}

export default Footer;
