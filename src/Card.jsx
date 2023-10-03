import React from "react";
import Cards from "./Sass/Components/Cards.scss";

function Card({title, imageSrc}) {
    return (
        <div className="card">
            <img className="card__image" src={imageSrc} alt={title} />
            <h3 className="card__description">{title}</h3>
        </div>
    );
}

export default Card;
