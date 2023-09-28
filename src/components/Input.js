import React from 'react';
import '../styles/Inputs.css'

const Input = ({ type, id, onClick, readOnly }) => {
  return (
    <input
      type={type}
      autoComplete="off"
      className="inputs"
      onClick={onClick}
      id={id}
      readOnly={readOnly} // Adicione o atributo readOnly com base na propriedade readOnly
    />
  );
};

export default Input;
