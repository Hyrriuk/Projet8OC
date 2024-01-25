import React from 'react';
import Banner from '../../Banner/Banner';
import Gallery from './Gallery/Gallery';

function Home() {
    return (
        <>
            <Banner imagePath="/images/banneraccueil.svg" bannerText="Chez vous, partout et ailleurs" />
            <Gallery />
        </>
    );
}

export default Home;
