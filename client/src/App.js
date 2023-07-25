import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Science from "./Pages/Science";
import Art from "./Pages/Art";
import Admission from "./Pages/Admission";

const App = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal--animate");
    const revealHandler = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("reveal");
        } else {
          element.classList.remove("reveal");
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
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/science" element={<Science />} />
        <Route path="/arts" element={<Art />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </>
  );
};

export default App;
