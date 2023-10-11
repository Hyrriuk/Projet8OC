import React from "react";
import {useParams} from "react-router-dom";
import data from "../../../../../public/data/logements.json";
import "./Author.scss";

function Author() {
    const {id} = useParams();
    const card = data.find((item) => item.id === id);
    const fullNameArray = card.host.name.split(" ");
    const firstName = fullNameArray[0];
    const lastName = fullNameArray.slice(1).join(" ");
    return (
        <div className="appartment__author__infos">
            <p>
                {firstName}
                <br />
                {lastName}
            </p>

            <img src={card.host.picture} alt="Photo de l'hôte"></img>
        </div>
    );
}

export default Author;
