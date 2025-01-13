import Books from "./Components/books.jsx";
import book1 from "./assets/the-midnight-library-cover.jpg";
import book2 from "./assets/little-prince-cover.jpg";
import book3 from "./assets/brave-new-world-cover.jpg";
import book4 from "./assets/fahrenheit-451-cover.jpg";
import book5 from "./assets/normal-people-cover.jpg";
import book6 from "./assets/little-women-cover.jpg";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/home.jsx";
import About from "./Pages/About.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";



function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
    
}

export default App;

