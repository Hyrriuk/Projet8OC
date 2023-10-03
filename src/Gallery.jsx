import React from "react";
import Card from "./Card";
import "./Sass/Components/Gallery.scss";
import data from "../public/data/logements.json";

function Gallery() {
    return (
        <div className="gallery">
            {data.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    imageSrc={item.pictures[Math.floor(Math.random() * item.pictures.length)]}
                />
            ))}
        </div>
    );
}

export default Gallery;
