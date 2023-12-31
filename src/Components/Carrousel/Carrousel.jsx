import React, {useState} from "react";
import {useParams} from "react-router-dom";
import data from "../../../public/data/logements.json";
import "./Carrousel.scss";

function Carrousel() {
    const {id} = useParams();
    const card = data.find((item) => item.id === id);
    const slides = card.pictures;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const showBoutonNavigation = slides.length > 1;

    return (
        <div className="carrousel">
            <div className="carrousel__container">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        className={`carrousel__container__image ${index === currentIndex ? "active" : ""}`}
                        src={slide}
                        alt={`Slide ${index}`}
                    />
                ))}
            </div>
            {showBoutonNavigation && (
                <button className="carrousel__button prev" onClick={prevSlide}>
                    &lt;
                </button>
            )}
            {showBoutonNavigation && (
                <button className="carrousel__button next" onClick={nextSlide}>
                    &gt;
                </button>
            )}
            <div className="carrousel__number">{`${currentIndex + 1}/${slides.length}`}</div>
        </div>
    );
}

export default Carrousel;
