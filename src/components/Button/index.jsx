import React from "react";
import "./index.css";

const Button = ({ text, icon, iconClassName, textClassName, ...props }) => {
  return (
    <div>
      <button {...props}>
        <span className={iconClassName ?? "button-icon"}>{icon}</span>
        <span className={textClassName ?? "button-text"}>{text}</span>
      </button>
    </div>
  );
};

export default Button;
