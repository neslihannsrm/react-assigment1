
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/home.jsx";
import Shop from "./Pages/Shop.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";



function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            <Footer />
        </BrowserRouter>
        
        </>
    );
    
}

export default App;

