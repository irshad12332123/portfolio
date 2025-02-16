import React from "react";
import CustomBlocks from "../../components/CustomBlocks/CustomBlocks";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: "#FEF2F2",
        flexDirection: "column",
      }}
    >
      <div className="footer-section">
        <div>
          <CustomBlocks name={"Contact Info"} />
          <CustomBlocks
            isSmallText={true}
            title={"Email"}
            contentsList={["alidanish5138@gmail.com"]}
          />
          <CustomBlocks
            isSmallText={true}
            title={"Phone Number"}
            contentsList={["+91 7630866433"]}
          />
          <CustomBlocks
            isSmallText={true}
            title={"Location"}
            contentsList={["Kharar, Punjab 140106"]}
          />
        </div>
        <div>
          <CustomBlocks
            title={"Let's Talk"}
            contentsList={[
              "I am always open to project improve your online presence",
            ]}
          />
          <CustomButton text={"Contact Me"} type={"primary"} />
        </div>
      </div>
      <div
        style={{
          border: "solid 1px #FEEEFED",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.2rem",
          width: "100%",
          height: "100%",
          // borderBottomColor: "#FEEEFED",
        }}
      >
        <i class="bi bi-c-circle"></i>
        <CustomBlocks
          isFullWidth={true}
          contentsList={["2025 Md Irshad. All Rights Reesrved"]}
        />
      </div>
    </div>
  );
};

export default Footer;
