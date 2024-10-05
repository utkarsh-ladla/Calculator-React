import React from 'react';
import './Button.jsx'

// Reusable Button component
const Button = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)} >
      {label}
    </button>
  );
};



export default Button;
