import {Routes, Route} from "react-router-dom";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Error from "./Components/Pages/Error/Error";
import Appartment from "./Components/Pages/Appartment/Appartment";
import "font-awesome/css/font-awesome.min.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A-propos" element={<About />} />
            <Route path="/card/:id" element={<Appartment />} />
            <Route path="/Erreur" element={<Error />} />
        </Routes>
    );
}

export default App;
