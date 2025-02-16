import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./containers/Home/Home";
import "./App.css";
import Services from "./containers/Services/Services";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";
const App = () => {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
