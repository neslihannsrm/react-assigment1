import React, { useState } from 'react';
import '../index.css';

function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && age) {
      alert(`Welcome, ${name}! Your age is: ${age}`);
      setName('');
      setAge('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  const handleReset = () => {
    setName('');
    setAge('');
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
          />
        </div>
        <div className="input-container">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="button-container">
          <button type="submit" className="submit-button">Log In</button>
          <button type="button" onClick={handleReset} className="reset-button">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
