import {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <>
                <Header />
                <Banner imagePath="./public/images/banneraccueil.svg" />
                <Gallery />
                <Footer />
            </>
        </Router>
    );
}

export default App;
