import React from "react";
import BoutonNavigation from "../../Header/BoutonNavigation";
import "./Error.scss";

function Error() {
    return (
        <div className="error">
            <h1 className="error__numero">404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <BoutonNavigation className="error__buttonNav" to="/">
                Retourner sur la page d'accueil.
            </BoutonNavigation>
        </div>
    );
}

export default Error;
