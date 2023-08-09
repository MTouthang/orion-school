/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../Assets/icons/logo.png";
import { Link } from "react-router-dom";

const Nav = ({ artUrl, scienceUrl, feedbackUrl }) => {
  // Hamburger
  const [isOpen, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  // active nav bar change status
  // const updateNav = () => {
  //   feedbackUrl?.pathname ? setActiveItem("feedback") : "home";
  // };

  //
  // scroll to specific section yet to be implement
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const homeSection = document.getElementById("home");
  //     const aboutSection = document.getElementById("about");
  //     const contactSection = document.getElementById("contact");
  //     const feedbackSection = document.getElementById("feedback");

  //     const scrollPosition = window.scrollY;
  //     console.log("scrollPosition", scrollPosition);
  //     console.log("home section offsetTop:", homeSection.offsetTop);

  //     if (
  //       scrollPosition >= homeSection.offsetTop &&
  //       scrollPosition < aboutSection.offsetTop
  //     ) {
  //       setActiveItem("home");
  //     } else if (
  //       scrollPosition >= aboutSection.offsetTop &&
  //       scrollPosition < contactSection.offsetTop
  //     ) {
  //       setActiveItem("about");
  //     } else if (
  //       scrollPosition >= contactSection.offsetTop &&
  //       scrollPosition < feedbackSection.offsetTop
  //     ) {
  //       setActiveItem("contact");
  //     } else if (scrollPosition >= feedbackSection.offsetTop) {
  //       setActiveItem("feedback");
  //     }
  //   };

  //   setActiveItem("home");
  //   updateNav();
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // TODO: fix extra space in the nav bar and add dynamic active menu bar
  // console.log("scroll y", window.scrollY == 0);

  return (
    <>
      <nav className="bg-background-color sticky top-0 z-50">
        <div>
          <p className="text-white text-2xl bg-up-nav-color mx-auto text-center font-motoFont py-1">
            Motto : Excellence with Integrity
          </p>
        </div>

        <div className="max-w-screen-xl text-white flex flex-wrap items-center justify-between mx-auto px-2  ">
          <a href="/" className="flex items-center ">
            <img
              src={logo}
              className="h-24 mr-3"
              alt="Orion Academy of Arts and Science"
            />
            <span className="font-Academy  self-center text-3xl font-semibold whitespace-nowrap dark:text-white mb-5">
              Orion Academy
            </span>
            <br />
            <span className="font-Academy text-lg absolute text-white mt-9 ml-[100px] mb-0">
              of Arts and Science
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={` ${
              isOpen ? "" : "hidden"
            }  w-full md:block md:w-auto font-Academy`}
          >
            <ul className="font-poppins font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-background-color dark:border-gray-700">
              <li>
                <a
                  onClick={() => setActiveItem("home")}
                  href="/"
                  className={`${
                    activeItem === "home" ? "text-blue-700" : "text-white"
                  } block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 hover:text-blue-500 `}
                >
                  Home
                </a>
              </li>
              {artUrl?.pathname ||
              scienceUrl?.pathname ||
              feedbackUrl?.pathname ? (
                " "
              ) : (
                <>
                  <li>
                    <a
                      href="#about"
                      onClick={() => setActiveItem("about")}
                      className={`${
                        activeItem === "about"
                          ? "text-blue-700"
                          : "dark:text-white"
                      } block py-2 pl-3 pr-4  rounded   md:hover:bg-transparent md:border-0 md:p-0   md:dark:hover:bg-transparent hover:text-blue-500`}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses"
                      onClick={() => setActiveItem("courses")}
                      className={` ${
                        activeItem === "courses"
                          ? "text-blue-700"
                          : "dark:text-white"
                      } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0  dark:hover:bg-gray-700  md:dark:hover:bg-transparent hover:text-blue-500`}
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setActiveItem("facilities")}
                      href="#facilities"
                      className={`${
                        activeItem === "facilities"
                          ? "text-blue-700"
                          : "text-white"
                      } block py-2 pl-3 pr-4 rounded  md:border-0 dark:text-whit md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent hover:text-blue-500`}
                    >
                      Facilities
                    </a>
                  </li>
                </>
              )}
              <li>
                <a
                  onClick={() => setActiveItem("contact")}
                  href="#contact"
                  className={`${
                    activeItem === "contact" ? "text-blue-700" : "text-white"
                  } block py-2 pl-3 pr-4 rounded  md:border-0 dark:text-whit md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent hover:text-blue-500`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  onClick={() => setActiveItem("feedback")}
                  className={`${
                    activeItem === "feedback" ? "text-blue-700" : "text-white"
                  } block py-2 pl-3 pr-4 rounded  md:border-0 dark:text-whit md:p-0 dark:hover:bg-gray-700  md:dark:hover:bg-transparent hover:text-blue-500`}
                >
                  <Link to={"/feedback"}>Feedback </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
