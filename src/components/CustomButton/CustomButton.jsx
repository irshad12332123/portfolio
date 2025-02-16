import React from "react";
import "./CustomButton.css";
const CustomButton = ({ text, type, isHover = false }) => {
  return (
    <>
      <button
        className={`common-btn ${type}_btn ${isHover ? "hover-btn" : ""}`}
      >
        {text}
      </button>
    </>
  );
};

export default CustomButton;
