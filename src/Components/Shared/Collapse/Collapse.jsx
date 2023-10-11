import React, {useState} from "react";
import Arrow from "../Arrow/Arrow";
import "./Collapse.scss";

function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(true); // Etat actuel du collapse à true = fermé

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    } // Fonction pour passer le state en false ou true en modifiant le set en inversant sa valeur

    return (
        <div className="collapses">
            <div className={`collapses__collapse ${isCollapsed ? "collapses__collapsed" : ""}`}>
                <button onClick={toggleCollapse}>
                    {props.collapseName} <Arrow />
                </button>
                {!isCollapsed && <div className="collapses__collapse__content">{props.children}</div>}
            </div>
        </div>
    );
}

export default Collapse;
