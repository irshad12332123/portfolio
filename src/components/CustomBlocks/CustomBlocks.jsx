import React from "react";
import "./CustomBlocks.css";
const CustomBlocks = ({
  name,
  title,
  contentsList = [],
  isTitle = true,
  isName = true,
  isSmallText = false,
  isFullWidth = false,
}) => {
  return (
    <div className="block-content">
      {isName ? (
        <p
          style={{
            fontSize: "1rem",
            color: "teal",
            fontWeight: "900",
          }}
        >
          {name}
        </p>
      ) : null}
      {isTitle ? (
        <h5
          className="block-content-title"
          style={{
            fontWeight: 700,
            fontSize: isSmallText ? "1rem" : "2rem",
          }}
        >
          {title}
        </h5>
      ) : null}
      {contentsList.map((text) => (
        <p
          className="block-content-para"
          style={{
            color: "rgb(111,111,111)",
            fontSize: "0.7rem",
            maxWidth: isFullWidth ? "100%" : "80%",
          }}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default CustomBlocks;
