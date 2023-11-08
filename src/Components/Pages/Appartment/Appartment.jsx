import React from "react";
import {Routes, Route, useParams} from "react-router-dom";
import Banner from "../../Banner/Banner";
import data from "../../../../public/data/logements.json";
import Stars from "./Stars/Stars";
import Infos from "./Infos/Infos";
import Author from "./Author/Author";
import Tags from "./Tags/Tags";
import CollapsesAppart from "./CollapsesAppart/CollapsesAppart";
import Error from "../Error/Error";
import Carrousel from "../../Carrousel/Carrousel";
import "./Appartment.scss";

function Appartment() {
    const {id} = useParams(); // Récupère l'ID à partir de l'URL

    const card = data.find((item) => item.id === id);

    if (!card) {
        return <Error />;
    }

    return (
        <>
            <Carrousel />
            <div className="appartment__intels">
                <div className="appartments__intels__placement">
                    <Infos />
                    <Tags />
                </div>
                <div className="appartment__author">
                    <div className="appartment__author__note">
                        <Stars note={card.rating} />
                    </div>
                    <Author />
                </div>
            </div>
            <CollapsesAppart />
        </>
    );
}

export default Appartment;
