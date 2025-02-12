import React, { useState } from 'react';
import '../index.css';

function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && age) {
      alert(`Welcome, ${name}! Your age is: ${age}`);
      setName('');
      setAge(1);
    } else {
      alert('Please fill in all fields!');
    }
  };

  const handleReset = () => {
    setName('');
    setAge(1);
  };

  const incrementAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const decrementAge = () => {
    setAge((prevAge) => (prevAge > 1 ? prevAge - 1 : 1));
  };

  return (
    <div className="form-container">
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
        <div className="age-input-container">
          <label htmlFor="age">Age: </label>
          
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              min="1"
            />
            <button type="button" onClick={incrementAge} className="age-button">+</button>
            <button type="button" onClick={decrementAge} className="age-button">-</button>
          </div>
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