import React from "react";
import Collapse from "../../../Shared/Collapse/Collapse";

function CollapseAbout() {
    return (
        <>
            <Collapse collapseName="Fiabilité">
                Les annonces postéess sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux
                logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </Collapse>
            <Collapse collapseName="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Collapse>
            <Collapse collapseName="Service">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Collapse>
            <Collapse collapseName="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>
        </>
    );
}

export default CollapseAbout;
