import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Importing the CSS file

function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) {
      setError('Please fill in all fields!');
    } else {
      setError('');
      alert(`Welcome, ${name}! Your age is: ${age}`);
    }
  };


  const handleReset = () => {
    setName('');
    setAge('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Login to Book Store</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input-field"
          />
        </div>

        
        {error && <p className="error-message">{error}</p>}

        <div className="button-container">
          <button type="submit" className="submit-button">Log In</button>
          <button type="button" onClick={handleReset} className="reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
