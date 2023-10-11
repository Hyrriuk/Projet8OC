import React from "react";
import "./Banner.scss";

function Banner({imagePath, bannerText}) {
    return (
        <div className="banner">
            <img src={imagePath} alt="Bannière" className="banner__image" />
            <div className="banner__text">
                <p>{bannerText}</p>
            </div>
        </div>
    );
}

export default Banner;
