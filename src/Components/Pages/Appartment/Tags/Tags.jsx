import React from "react";
import {useParams} from "react-router-dom";
import data from "../../../../../public/data/logements.json";
import "./Tags.scss";

function Tags() {
    const {id} = useParams();
    const card = data.find((item) => item.id === id);
    return (
        <div className="appartment__tags">
            {card.tags.map((tag, index) => (
                <div key={index} className="appartment__tags__tag">
                    {tag}
                </div>
            ))}
        </div>
    );
}

export default Tags;
