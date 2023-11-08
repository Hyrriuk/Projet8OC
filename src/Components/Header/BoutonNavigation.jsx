import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import "./Header.scss";

function BoutonNavigation({to, children, className}) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname === to);

    useEffect(() => {
        setIsActive(location.pathname === to);
    }, [location.pathname, to]);

    function toggleActive() {
        if (!isActive) {
            setIsActive(true);
        }
    }

    return (
        <Link to={to}>
            <button to={to} className={`${className} ${isActive ? "active" : ""}`} onClick={toggleActive}>
                {children}
            </button>
        </Link>
    );
}

export default BoutonNavigation;
