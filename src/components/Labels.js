import React from "react";
import '../styles/Labels.css';

const Label = ({text, id, tipo, onClick}) => {
const className = `label ${tipo || ''}`;

    return (
        <label  onClick={onClick} className={className} id={id}>
        {text}
      </label>
    );
};

export default Label