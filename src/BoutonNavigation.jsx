import React from "react";
import {Link} from "react-router-dom";
import "./Sass/Layout/Header.scss";

function BoutonNavigation({to, children, className}) {
    return (
        <Link to={to}>
            <button className={className}>{children}</button>
        </Link>
    );
}

export default BoutonNavigation;
