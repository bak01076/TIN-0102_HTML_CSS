import React from "react";

const Input = ({ value, caption, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-container">
      <lable>
        <h3>{caption}</h3>
      </lable>
      <input id="input" type="number" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
