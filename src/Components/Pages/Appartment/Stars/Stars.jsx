import React from "react";
import {useParams} from "react-router-dom";
import data from "../../../../../public/data/logements.json";
import "./Stars.scss";

function Stars(props) {
    const {id} = useParams();
    const card = data.find((item) => item.id === id);
    const maxStars = 5;
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
        if (i < props.note) {
            stars.push(<i key={i} className="fa fa-star star-filled"></i>);
        } else {
            stars.push(<i key={i} className="fa fa-star star-empty"></i>);
        }
    }

    return stars;
}

export default Stars;
