/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import logo from "../Assets/icons/logo.png";
import { Link } from "react-router-dom";

const Nav = ({ artUrl, scienceUrl, feedbackUrl }) => {
  const [isOpen, setOpen] = useState(false);
  const [navVisible, setIsNavBarVisible] = useState(true);
  let scrollTimeout;
   
  useEffect(() => {
    const handleScroll = () => {
      setIsNavBarVisible(false); // Hide the nav bar on scroll
      clearTimeout(scrollTimeout);

      // Set a timeout to detect when the scrolling pauses
      scrollTimeout = setTimeout(() => {
        setIsNavBarVisible(true); // Show the nav bar on pause
      }, 800); // Adjust the time (in milliseconds) for the desired pause duration
    };

    // Add event listener for scroll when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear the timeout when unmounting to prevent potential memory leaks
      clearTimeout(scrollTimeout);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  // TODO: fix extra space in the nav bar and add dynamic active menu bar
  // console.log("scroll y", window.scrollY == 0);

  return (
    <>
      <nav
        className={` bg-background-color sticky top-0 z-50  ${
          navVisible
            ? "transform translate-y-0  "
            : "transform -translate-y-full"
        } transition-opacity duration-300 ease-in-out transition-transform duration-300 ease-in-out `}
        id=""
      >
        <div>
          <p className="text-white text-2xl bg-up-nav-color mx-auto text-center font-motoFont py-1">
            Motto : Excellence with Integrity
          </p>
        </div>

        <div className="max-w-screen-xl text-white flex flex-wrap items-center justify-between mx-auto p-4  ">
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
            id=""
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-background-color dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white focus:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500"
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
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#facilities"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Facilities
                    </a>
                  </li>
                </>
              )}
              <li>
                <a
                  href="#contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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
