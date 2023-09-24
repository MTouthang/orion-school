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

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background-color">
        <div>
          <p className="py-1 mx-auto text-2xl text-center text-white bg-up-nav-color font-motoFont">
            Motto : Excellence with Integrity
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-2 mx-auto text-white ">
          <a href="/" className="flex items-center ">
            <img
              src={logo}
              className="h-24 mr-3"
              alt="Orion Academy of Arts and Science"
              loading='lazy'
            />
            <span className="self-center mb-5 font-semibold font-Academy md:text-2xl lg:text-3xl whitespace-nowrap dark:text-white">
              Orion Academy
            </span>
            <br />
            <span className="font-Academy text-sm lg:text-lg absolute text-white mt-3 lg:mt-9 ml-[100px] mb-0">
              of Arts and Science
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg font-poppins md:p-0 md:flex-row md:space-x-4 md:mt-0 md:border-0 dark:bg-background-color dark:border-gray-700">
              <li>
                <a
                  onClick={() => setActiveItem("home")}
                  href="/"
                  className={`${
                    activeItem === "home" ? "text-blue-700" : "text-white"
                  } block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 hover:text-blue-500 active`}
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
                      } block py-2 pl-3 pr-4  rounded   md:hover:bg-transparent md:border-0 md:p-0   md:dark:hover:bg-transparent hover:text-blue-500 active`}
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
