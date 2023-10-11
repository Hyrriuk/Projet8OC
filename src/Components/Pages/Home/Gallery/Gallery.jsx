import React from "react";
import Card from "./Card";
import "./Gallery.scss";
import data from "../../../../../public/data/logements.json";

function Gallery() {
    return (
        <div className="gallery">
            {data.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    imageSrc={item.pictures[Math.floor(Math.random() * item.pictures.length)]}
                    id={item.id}
                />
            ))}
        </div>
    );
}

export default Gallery;
