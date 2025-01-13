import Books from "../Components/books.jsx";
import book1 from "../assets/the-midnight-library-cover.jpg";
import book2 from "../assets/little-prince-cover.jpg";
import book3 from "../assets/brave-new-world-cover.jpg";
import book4 from "../assets/fahrenheit-451-cover.jpg";
import book5 from "../assets/normal-people-cover.jpg";
import book6 from "../assets/little-women-cover.jpg";

function About() {
    return (
        <div>
            <div className="book-container">
                <Books title="The Midnight Library" price="$14" image={book1} />
                <Books title="Little Prince" price="$9" image={book2} />
                <Books title="Brave New World" price="$10" image={book3} />
                <Books title="Fahrenheit 451" price="$12" image={book4} />
                <Books title="Normal People" price="$15" image={book5} />
                <Books title="Little Women" price="$17" image={book6} />
            </div>
        </div>
    );
}
export default About;
