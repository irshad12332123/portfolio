import React from "react";
import "./CustomIcon.css";
const CustomIcon = ({ socialMediaType }) => {
  const socialIconsStyles = {
    padding: "0.75rem",
  };
  return (
    <>
      <i
        className={`bi bi-${socialMediaType} bi-hover`}
        style={socialIconsStyles}
      ></i>
    </>
  );
};

export default CustomIcon;
