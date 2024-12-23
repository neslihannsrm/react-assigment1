import Books from "./Components/books.jsx";
import book1 from "./assets/the-midnight-library-cover.jpg";
import book2 from "./assets/little-prince-cover.jpg";
import book3 from "./assets/brave-new-world-cover.jpg";
import book4 from "./assets/fahrenheit-451-cover.jpg";
import book5 from "./assets/normal-people-cover.jpg";
import book6 from "./assets/little-women-cover.jpg";

function App() {
    return (
        <>
            <Books title="The Midnight Library" price="200" image={book1}></Books>
            <Books title="Little Prince" price="150" image={book2}></Books>
            <Books title="Brave New World" price="180" image={book3}></Books>
            <Books title="Fahrenheit 451" price="220" image={book4}></Books>
            <Books title="Normal People" price="160" image={book5}></Books>
            <Books title="Little Women" price="190" image={book6}></Books>
        </>
    );
}

export default App;
