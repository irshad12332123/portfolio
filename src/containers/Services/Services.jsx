import React from "react";
import "./Services.css";
import CustomCard from "../../components/CustomCards/CustomCard";
import CustomBlocks from "../../components/CustomBlocks/CustomBlocks";
const Services = () => {
  return (
    <div className="services-body">
      <div className="services-outer-frame">
        <div className="services-card">
          <CustomCard cardIconType="rocket-takeoff" />
        </div>
        <CustomBlocks
          name={"WHAT WE OFFER"}
          title={"Web Development"}
          contentsList={[
            "Profficient in creating engaging websites for user retention.",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
