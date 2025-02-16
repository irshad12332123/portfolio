import React, { forwardRef } from "react";
import CustomIcon from "../../../components/CustomIcon/CustomIcon";
import "./homeStyles/HomeBody.css";
import { Link } from "react-scroll";

const SideProfileLogo = forwardRef((props, ref) => {
  const socialMediaNames = [
    {
      icon: "instagram",
      link: "https://www.instagram.com/ir_sh_ad?igsh=b3MxcGk5YXR4dDA2",
    },
    { icon: "linkedin", link: "https://www.linkedin.com/in/mdirshadprofile/" },
  ];

  return (
    <div className="side-profile-styles" ref={ref}>
      {socialMediaNames.map((mediaObj) => (
        <a
          href={mediaObj.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            padding: "0.75rem",
          }}
        >
          <CustomIcon socialMediaType={mediaObj.icon} />
        </a>
      ))}
    </div>
  );
});

export default SideProfileLogo;
