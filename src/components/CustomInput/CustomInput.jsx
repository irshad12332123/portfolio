import React from "react";

const CustomInput = ({
  value,
  setValue,
  type,
  name,
  placeholder,
  isTextArea = false,
}) => {
  return (
    <div>
      {isTextArea ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          style={{
            outline: "none",
            border: "none",
            backgroundColor: "#FEF2F2",
            padding: "0.75rem 1rem",
            marginBottom: "1rem",
            fontSize: "0.85rem",
            width: "100%",
          }}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          style={{
            outline: "none",
            border: "none",
            backgroundColor: "#FEF2F2",
            padding: "0.75rem 1rem",
            marginBottom: "1rem",
            fontSize: "0.85rem",
          }}
        />
      )}
    </div>
  );
};

export default CustomInput;
