import React from 'react';
import '../styles/Buttons.css'

const Button = ({ text, type, onClick }) => {
  return (
    <button type={type} className="buttons" onClick={onClick} >
      {text}
    </button>
    
  );
};

export default Button;