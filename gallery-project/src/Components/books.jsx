import book1 from "../assets/the-midnight-library-cover.jpg";
import book2 from "../assets/little-prince-cover.jpg";
import book3 from "../assets/brave-new-world-cover.jpg";
import book4 from "../assets/fahrenheit-451-cover.jpg";
import book5 from "../assets/normal-people-cover.jpg";
import book6 from "../assets/little-women-cover.jpg";
import "../index.css";

function Books(props) {
    return (
        <div className="books">
            <img src={props.image} alt={props.title} className="img"></img>
            {props.title &&  <h2 className="title">{props.title}</h2>}
            {props.title &&  <p className="price">{props.price}</p>}
        </div>
    );
}

export default Books;
