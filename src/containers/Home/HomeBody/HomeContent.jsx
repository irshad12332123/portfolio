import React, { forwardRef } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./homeStyles/HomeContent.css";
import ProfileIllustration from "../../../assets/images/profile-illustration.jpg";
const HomeContent = forwardRef((props, ref) => {
  return (
    <div className="home-main-container" ref={ref}>
      <div className="home-content-container">
        <div className="content-info">
          <h5
            style={{
              fontSize: "2.8rem",
              maxWidth: "20rem",
              fontWeight: 700,
            }}
          >
            Hello, I'm Md Irshad An Web Developer
          </h5>
          <p
            style={{
              color: "gray",
            }}
          >
            Passionate for learning and improving self
          </p>
          <CustomButton text={"Contact"} type={"primary"} />
        </div>
      </div>

      <div className="profile-illustration-outer-frame">
        <span className="span-profile-illutration-pic">
          <img
            className="profile-illutration-pic"
            src={ProfileIllustration}
            alt="profile"
          />
        </span>
      </div>
    </div>
  );
});

export default HomeContent;
