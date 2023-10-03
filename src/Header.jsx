import React from "react";
import BoutonNavigation from "./BoutonNavigation";
import Logo from "./Logo";

function Header() {
    return (
        <header className="header">
            <Logo LogoName="header__logo" Color="#FF6060" />
            <nav className="header__nav">
                <BoutonNavigation className="header__nav__buttonNav" to="/">
                    Accueil
                </BoutonNavigation>
                <BoutonNavigation className="header__nav__buttonNav" to="/a-propos">
                    À Propos
                </BoutonNavigation>
            </nav>
        </header>
    );
}

export default Header;
