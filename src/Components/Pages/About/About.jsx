import React from "react";
import Banner from "../../Banner/Banner";
import CollapseAbout from "./CollapseAbout/CollapseAbout";

function About() {
    return (
        <>
            <Banner imagePath="./public/images/bannerabout.svg" />
            <CollapseAbout />
        </>
    );
}

export default About;
