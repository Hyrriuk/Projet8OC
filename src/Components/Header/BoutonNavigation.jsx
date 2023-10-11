import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss";

function BoutonNavigation({to, children, className}) {
    return (
        <Link to={to}>
            <button className={className} onClick={() => (window.location.href = to)}>
                {children}
            </button>
        </Link>
    );
}

export default BoutonNavigation;
