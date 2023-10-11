import React from "react";
import {useParams} from "react-router-dom";
import data from "../../../../../public/data/logements.json";
import "./infos.scss";

function Infos() {
    const {id} = useParams();
    const card = data.find((item) => item.id === id);
    return (
        <div className="appartment__infos">
            <div className="appartment__infos__text">
                <h2>{card.title}</h2>
                <p>{card.location}</p>
            </div>
        </div>
    );
}

export default Infos;
