import React, { forwardRef } from "react";
import CustomIcon from "../../../components/CustomIcon/CustomIcon";
import "./homeStyles/HomeBody.css";

const SideProfileLogo = forwardRef((props, ref) => {
  const socialMediaNames = ["instagram", "linkedin", "youtube", "facebook"];

  return (
    <div className="side-profile-styles" ref={ref}>
      {socialMediaNames.map((mediaName) => (
        <CustomIcon socialMediaType={mediaName} />
      ))}
    </div>
  );
});

export default SideProfileLogo;
