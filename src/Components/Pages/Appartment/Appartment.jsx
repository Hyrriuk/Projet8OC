import React from "react";
import {useParams} from "react-router-dom";
import Banner from "../../Banner/Banner";
import data from "../../../../public/data/logements.json";
import Stars from "./Stars/Stars";
import Infos from "./Infos/Infos";
import Author from "./Author/Author";
import Tags from "./Tags/Tags";
import CollapsesAppart from "./CollapsesAppart/CollapsesAppart";
import "./Appartment.scss";

function Appartment() {
    const {id} = useParams(); // Récupère l'ID à partir de l'URL

    const card = data.find((item) => item.id === id);

    if (!card) {
        return <div>Card non trouvée</div>;
    }

    return (
        // carrousel à faire ce week-end si on est pas un gros nullos
        <>
            <Banner imagePath={card.cover} />
            <Infos />
            <Tags />
            <div className="appartment__author">
                <div className="appartment__author__note">
                    <Stars note={card.rating} />
                </div>
                <Author />
            </div>
            <CollapsesAppart />
        </>
    );
}

export default Appartment;
