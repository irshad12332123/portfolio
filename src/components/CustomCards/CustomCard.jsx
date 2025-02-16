import React from "react";
import "./CustomCard.css";
const CustomCard = ({ cardIconType }) => {
  const CustomLines = ({ text }) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <i
          style={{
            color: "teal",
            padding: "0.25rem",
          }}
          class="bi bi-arrow-return-right"
        ></i>
        <p
          style={{
            color: "rgb(111,111,111)",
            fontSize: "0.7rem",
            maxWidth: "80%",
          }}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <div className="custom-card">
      <div className="custom-card-title-block">
        <i
          class={`bi bi-${cardIconType}`}
          style={{
            fontSize: "2.5rem",
            color: "teal",
          }}
        ></i>
        <h4
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            maxWidth: "50%",
            lineHeight: "2rem",
            marginBottom: "1rem",
          }}
        >
          Website Development
        </h4>
      </div>

      <CustomLines text={"Seo optimized website"} />
      <CustomLines text={"Responsive websites"} />
      <CustomLines text={"Responsive websites"} />
    </div>
  );
};

export default CustomCard;
