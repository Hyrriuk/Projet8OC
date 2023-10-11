import React from "react";
import {Link} from "react-router-dom";
import "./Cards.scss";

function Card({title, imageSrc, id}) {
    return (
        <Link to={`/card/${id}`}>
            <div className="cards">
                <img src={imageSrc} alt={title} />
                <h3 className="cards__description">{title}</h3>
            </div>
        </Link>
    );
}

export default Card;
