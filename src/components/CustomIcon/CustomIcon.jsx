import React from "react";
import "./CustomIcon.css";
const CustomIcon = ({ socialMediaType }) => {
  return (
    <>
      <i className={`bi bi-${socialMediaType} bi-hover`}></i>
    </>
  );
};

export default CustomIcon;
