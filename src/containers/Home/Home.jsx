import React from "react";
import { Nav } from "./Header/Nav";
import HomeBody from "./HomeBody/HomeBody";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        padding: "0.5rem 1.5rem",
        backgroundColor: "#FEF2F2",
      }}
    >
      <Nav />
      <HomeBody />
    </div>
  );
}

export default Home;
