/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import principal from "../Assets/Principal.jpg";
import science from "../Assets/carouselImage/laboratory.jpg";
import sennu from "../Assets/profiles/sennu.jpg";
import mamang from "../Assets/profiles/mamang.jpg";
import paoboi from "../Assets/profiles/paoboi.jpg";
import muan from "../Assets/profiles/muan.jpg";
import achung from "../Assets/profiles/achung.jpg";
import lenpu from "../Assets/profiles/lenpu.jpg";
import muanguite from "../Assets/profiles/muanguite.jpg";
import boilen from "../Assets/profiles/boilen.jpg";
import minlen from "../Assets/profiles/minlen.jpg";
import denish from "../Assets/profiles/denishJohn.jpg";
import Nav from "./Nav";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Science = () => {
  // get current location
  const scienceUrl = useLocation();

  const deptBiology = [
    {
      name: "Jangminthang Lhungdim",
      education: "MSC Life Science",
      subject: "Zoology",
      avatar: principal,
    },
    {
      name: "Dr Sennu Haokip",
      education: "Ph.D Life Science",
      subject: "Botany",
      avatar: sennu,
    },
  ];

  const deptPhysic = [
    {
      name: "Thanglenmang Haokip",
      education: "M.Tech Physics",
      subject: "Geology",
      avatar: mamang,
    },
    {
      name: "Paoboi Kipgen",
      education: "M.Sc Physics",
      subject: "physics",
      avatar: paoboi,
    },
    {
      name: "Kailalmuan Vaiphei",
      education: "M.Sc Physics",
      subject: "physics",
      avatar: muan,
    },
  ];

  const deptChemistry = [
    {
      name: "L. Achung kom",
      education: "M.Sc Chemistry",
      subject: "Inorganic",
      avatar: achung,
    },
    {
      name: "Lenpu Haokip",
      education: "M.Sc Chemistry",
      subject: "Organic",
      avatar: lenpu,
    },
    {
      name: "Kailalmuan Vaiphei",
      education: "M.Sc Chemistry",
      subject: "Physical",
      avatar: muanguite,
    },
  ];

  const deptMath = [
    {
      name: "Seiminlen Haokip",
      education: "B.Tech",
      subject: "Civil Engineering",
      avatar: boilen,
    },
    {
      name: "Minlen Baite",
      education: "M.Sc Mathematics",
      subject: "Mathematics",
      avatar: minlen,
    },
    {
      name: "L.Denish John",
      education: "B.sc",
      subject: "Mathematics",
      avatar: denish,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

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
      <Helmet>
        <title> Science Stream </title>
        <meta name="description" content="Orion school of science" />
      </Helmet>
      <Nav scienceUrl={scienceUrl} />
      <section className="py-5 text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Science Stream
            </h1>
            <p className="mb-8 leading-relaxed">
              Embark on a fascinating journey through higher secondary education
              in the Science stream, where the wonders of the natural world and
              the pursuit of knowledge come together. In this captivating realm,
              you'll delve into the depths of scientific inquiry, exploring the
              intricacies of the universe and the fundamental principles that
              govern it.
            </p>

            <div className="mb-5">
              <span className="px-2 rounded-lg bg-slate-400 ">
                Dept of Physics
              </span>
              <span className="px-2 m-2 rounded-lg bg-slate-400 ">
                Dept of Chemistry
              </span>
              <span className="px-2 m-2 rounded-lg bg-slate-400 ">
                Dept of Biology
              </span>
              <br />
              <span className="px-2 rounded-lg bg-slate-400 ">
                Dept of Mathematics
              </span>
              <span className="px-2 m-2 rounded-lg bg-slate-400 ">
                Dept of Home Science
              </span>
            </div>

            <div className="flex justify-center">
              {/* <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                Admission
              </button> */}
              <button class=" inline-flex text-white bg-background-color border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                <Link to="/admission"> Admission </Link>
              </button>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded w-[620px] h-[450px]"
              alt="hero"
              src={science}
              loading='lazy'
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center reveal--animate">
            <h1 className="mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font">
              OUR SCIENCE FACULTY
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Our Science Faculty is a dynamic and diverse team of educators
              dedicated to igniting the passion for science and nurturing the
              next generation of scientific minds. With a shared commitment to
              academic excellence, innovation, and research, our faculty members
              bring a wealth of knowledge and expertise in various scientific
              disciplines.
            </p>
          </div>

          <section className="profiles__bio reveal--animate">
            <h3 className="text-xl font-medium tracking-widest text-center text-gray-900 title-font">
              DEPARTMENT OF BIOLOGY
            </h3>
            <hr className="mb-5" />
            <div className="flex flex-wrap reveal--animate">
              {deptBiology.map((item) => (
                <div className="p-4 m-1 mx-auto border-2 rounded-md lg:w-1/2">
                  <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 border rounded-lg sm:mb-0"
                      src={item.avatar}
                      loading='lazy'
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="text-lg font-medium text-gray-900 title-font">
                        {item.name}
                      </h2>
                      <h3 className="mb-3 text-gray-500"> {item.subject}</h3>
                      <p className="mb-4">{item.education}</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 profiles__physics reveal--animate">
            <h3 className="text-xl font-medium tracking-widest text-center text-gray-900 title-font">
              DEPARTMENT OF PHYSICS
            </h3>
            <hr className="mb-5" />
            <div className="flex flex-wrap ">
              {deptPhysic.map((item) => (
                <div className="p-4 m-1 mx-auto border-2 rounded-md lg:w-1/2">
                  <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 border rounded-lg sm:mb-0"
                      src={item.avatar}
                      loading='lazy'
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="text-lg font-medium text-gray-900 title-font">
                        {item.name}
                      </h2>
                      <h3 className="mb-3 text-gray-500"> {item.subject}</h3>
                      <p className="mb-4">{item.education}</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 profiles__chemistry reveal--animate">
            <h3 className="text-xl font-medium tracking-widest text-center text-gray-900 title-font">
              DEPARTMENT OF CHEMISTRY
            </h3>
            <hr className="mb-5" />
            <div className="flex flex-wrap ">
              {deptChemistry.map((item) => (
                <div className="p-4 m-1 mx-auto border-2 rounded-md lg:w-1/2">
                  <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 border rounded-lg sm:mb-0"
                      src={item.avatar}
                      loading='lazy'
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="text-lg font-medium text-gray-900 title-font">
                        {item.name}
                      </h2>
                      <h3 className="mb-3 text-gray-500"> {item.subject}</h3>
                      <p className="mb-4">{item.education}</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 profiles__maths reveal--animate">
            <h3 className="text-xl font-medium tracking-widest text-center text-gray-900 title-font">
              DEPARTMENT OF MATHEMATICS
            </h3>
            <hr className="mb-5" />
            <div className="flex flex-wrap ">
              {deptMath.map((item) => (
                <div className="p-4 m-1 mx-auto border-2 rounded-md lg:w-1/2">
                  <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 border rounded-lg sm:mb-0"
                      src={item.avatar}
                      loading='lazy'
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="text-lg font-medium text-gray-900 title-font">
                        {item.name}
                      </h2>
                      <h3 className="mb-3 text-gray-500"> {item.subject}</h3>
                      <p className="mb-4">{item.education}</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Science;
