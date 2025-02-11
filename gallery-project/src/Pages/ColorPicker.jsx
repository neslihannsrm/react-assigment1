import React, { useState } from 'react';
import '../index.css';

function ColorPicker() {

    const [color,serColor] = useState ("#FFFFFF");
   
    function handleColorChange(e){
        serColor(e.target.value)
    }
    return (
        <div className='color-picker-container'>
            <h1 className='color-picker-h1'>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Select a Color: {color}</p>
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/> 
        
        </div>
    );
  }
  
  export default ColorPicker;
  