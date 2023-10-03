import React from "react";
import "./Sass/Components/Banner.scss";

function Banner({imagePath}) {
    return (
        <div className="banner">
            <img src={imagePath} alt="Bannière" className="banner__image" />
            <div className="banner__text">
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>
    );
}

export default Banner;
