import React from "react";
import {useParams} from "react-router-dom";
import Collapse from "../../../Shared/Collapse/Collapse";
import data from "../../../../../public/data/logements.json";
import "./CollapsesAppart.scss";

function CollapsesAppart() {
    const {id} = useParams(); // Récupère l'ID à partir de l'URL

    const card = data.find((item) => item.id === id);
    const equipmentList = card.equipments.map((equipment, index) => (
        <React.Fragment key={index}>
            {equipment}
            <br />
        </React.Fragment>
    ));
    return (
        <div className="collapsesappart">
            <Collapse collapseName="Description">{card.description}</Collapse>
            <Collapse collapseName="Équipements">
                <p>{equipmentList}</p>
            </Collapse>
        </div>
    );
}

export default CollapsesAppart;
