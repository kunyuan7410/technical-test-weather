import React, { useState } from "react";
import "./index.css";

const InputField = ({ labelName, inputClassName, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    if (props.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div
      className={`input-field-container ${isActive ? "active" : ""}`}
      style={props.style}
    >
      <label>{labelName}</label>
      <input onFocus={handleFocus} onBlur={handleBlur} {...props} />
    </div>
  );
};

export default InputField;
