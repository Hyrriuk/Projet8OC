import React from "react";

function Error() {
    return (
        <div classname="error">
            <h1 className="error__numero">404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <BoutonNavigation className="error__buttonNav" to="/Error">
                Retourner sur la page d'accueil.
            </BoutonNavigation>
        </div>
    );
}

export default Error;
