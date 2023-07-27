/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import arts from "../Assets/arts.jpg";

import robert from "../Assets/profiles/robert.jpg";
import richard from "../Assets/profiles/richard.jpg";
import mimin from "../Assets/profiles/mimin.jpg";
import nehcha from "../Assets/profiles/nehcha.jpg";
import denish from "../Assets/profiles/denish.jpg";
import Nav from "./Nav";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Art = () => {
  // get current location and some item of nav bar
  const artUrl = useLocation();

  const deptArts = [
    {
      name: "Richard T Thangsing",
      subject: "English Literature",
      education: " M.A",
      avatar: richard,
    },
    {
      name: "Robert Lalboi",
      subject: "Sociology",
      education: "M.A",
      avatar: robert,
    },
    {
      name: "Mimin Baite",
      subject: "Geography",
      education: "M.A",
      avatar: mimin,
    },
    {
      name: "NehCha",
      subject: "Pol.Science",
      education: "M.Phil",
      avatar: nehcha,
    },
    {
      name: "Denish Hmar",
      subject: "History",
      education: "M.A",
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
        <title> Arts Stream </title>
        <meta name="description" content="Orion school of Arts" />
      </Helmet>
      <Nav artUrl={artUrl} />
      <section className="text-gray-600 body-font py-5">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Arts Stream
            </h1>
            <p className="mb-8 leading-relaxed">
              Embark on an enlightening journey through higher secondary
              education in the Arts stream, where the pursuit of knowledge meets
              the boundless world of creativity and expression. As you delve
              into this realm, you'll explore a diverse array of subjects, each
              offering unique insights into the human experience, cultures,
              societies, and the depths of the human mind.
            </p>

            <div className="mb-5">
              <span className="bg-slate-400 rounded-lg px-2 ">
                Dept of History
              </span>
              <span className="bg-slate-400 rounded-lg px-2 m-2 ">
                Dept of Geography
              </span>
              <span className="bg-slate-400 rounded-lg px-2 m-2 ">
                Dept of Political Science
              </span>
              <br />
              <span className="bg-slate-400 rounded-lg px-2  ">
                Dept of Education
              </span>
              <span className="bg-slate-400 rounded-lg px-2 m-2 ">
                Dept of English
              </span>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-background-color border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                <Link to="/admission">Admission</Link>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded w-[620px] h-[450px]"
              alt="art"
              src={arts}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 reveal--animate">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR ARTS FACULTY
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our Art Faculty is a vibrant and creative community of educators
              and artists dedicated to fostering artistic expression, nurturing
              talent, and inspiring a deep appreciation for the arts. With a
              passion for creativity and a commitment to artistic excellence,
              our faculty members form the heart of our artistic community.
            </p>
          </div>

          <section className="profiles__bio reveal--animate">
            <h3 className="text-xl font-medium title-font text-center text-gray-900 tracking-widest">
              DEPARTMENT OF BIOLOGY
            </h3>
            <hr className="mb-5" />
            <div className="flex flex-wrap ">
              {deptArts.map((item) => (
                <div className="p-4 lg:w-1/2 mx-auto border-2 rounded-md m-1">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border"
                      src={item.avatar}
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {item.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3"> {item.subject}</h3>
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

export default Art;
