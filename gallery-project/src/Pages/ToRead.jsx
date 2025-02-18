import React, { useState } from "react";
import "../index.css";

function ToRead() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);


  const addBook = () => {
    if (book.trim() !== "") {
      setBooks([...books, book]);
      setBook("");
    }
  };


  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="container-toread">
      <h1 className="title-toread">To-Read List</h1>
      
     
      <input className="input-toread "
        type="text"
        placeholder="Type a book..."
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />
      <button className="addbookbtn-toread" onClick={addBook}>Add a Book</button>

     
      <ul className="ul-toread">
        {books.map((b, index) => (
          <li className="il-toread" key={index}>
            {b}
            <button className="removebtn-toread" onClick={() => removeBook(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToRead;
