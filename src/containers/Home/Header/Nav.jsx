import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { Link } from "react-scroll";

import {
  Navbar,
  Nav as BootstrapNav,
  Container,
  NavDropdown,
} from "react-bootstrap";
export const Nav = () => {
  const linksName = ["Home", "About", "Contact"];
  const downloadLinks = {
    resume: "http://localhost:5173/portfolio/MD_IRSHAD_RESUME.pdf",
  };
  const headerStyles = {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FEF2F2",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    position: "sticky",
    borderRadius: "0.25rem",
    top: 0,
    zIndex: 9999,
  };

  return (
    <Navbar expand="md" style={headerStyles} sticky="top">
      <Container>
        <Navbar.Brand href="#">Irshad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="me-auto">
            {linksName.map((link) => (
              <Link
                key={link}
                className="nav-link"
                to={link}
                smooth={true}
                duration={200}
              >
                <CustomButton text={link} isHover />
              </Link>
            ))}
          </BootstrapNav>
          <a
            href={downloadLinks.resume}
            download="MD_IRSHAD_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton text={"Download CV"} isHover />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
