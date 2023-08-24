import { React, useEffect } from "react";
import Nav from "../Pages/Nav";
import Hero from "../Pages/Hero";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Facilities from "../Pages/Facilities";
import Extras from "../Pages/Extras";
import Footer from "../Pages/Footer";

const Layout = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal--animate");
    const revealHandler = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("reveal");
          element.classList.add("active");
        } else {
          element.classList.remove("reveal");
          element.classList.remove("active");
        }
      });
    };

    // adding the event listener
    window.addEventListener("scroll", revealHandler);

    // removing the event listener
    return () => {
      window.removeEventListener("scroll", revealHandler);
    };
  }, []);

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
