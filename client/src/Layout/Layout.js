import React from "react";
import Nav from "../Pages/Nav";
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Facilities from "../Pages/Facilities";
import Extras from "../Pages/Extras";
import Footer from "../Pages/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Courses />
      <Facilities />
      <Extras />
      <Footer />
    </>
  );
};

export default Layout;
