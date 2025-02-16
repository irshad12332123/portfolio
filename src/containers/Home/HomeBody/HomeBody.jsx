import { React, useState, useRef, useEffect } from "react";
import SideProfileLogo from "./SideProfileLogo";
import HomeContent from "./HomeContent";
import { gsap } from "gsap";
import "./homeStyles/HomeBody.css";
const HomeBody = () => {
  const sideProfileLogoRef = useRef(null);
  const homeContextRef = useRef(null);
  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      sideProfileLogoRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, y: -20, ease: "power3.out" }
    );
    gsap.fromTo(
      homeContextRef.current,
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power3.out", delay: 1 }
    );
  }, []);
  return (
    <div className="home-container ">
      <SideProfileLogo ref={sideProfileLogoRef} />
      <HomeContent ref={homeContextRef} />
    </div>
  );
};

export default HomeBody;
