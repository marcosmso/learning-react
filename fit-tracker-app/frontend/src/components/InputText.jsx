import React, { useState } from "react";

function InputText(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" 
          className="form-control" 
          value={inputText}
          onChange={handleChange}
          />
    </div>
  );
    
}

export default InputText;
