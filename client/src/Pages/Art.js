/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import arts from "../Assets/arts.jpg";

import robert from "../Assets/profiles/robert.jpg";
import richard from "../Assets/profiles/richard.jpg";
import mimin from "../Assets/profiles/mimin.jpg";
import nehcha from "../Assets/profiles/nehcha.jpg";
import denish from "../Assets/profiles/denish.jpg";
import robertKhongsai from "../Assets/profiles/robertKhongsai.jpg";
import haothang from "../Assets/profiles/haothangLupheng.jpg";
import seiminthangBaite from "../Assets/profiles/seiminthangBaite.jpg";
import letkhoseiMate from "../Assets/profiles/letkhoseiMate.jpg";
import ginjakaiHaokip from "../Assets/profiles/ginjakaiHaokip.jpg";

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
      name: "K.Robertson Khongsai",
      subject: "Education",
      education: "M.A",
      avatar: robertKhongsai,
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
    {
      name: "S. Haothang Lupheng",
      subject: "History",
      education: "M.A",
      avatar: haothang,
    },
    {
      name: "Seiminthang Baite",
      subject: "Geography",
      education: "M.A",
      avatar: seiminthangBaite,
    },
    {
      name: "LetKhosei Baite",
      subject: "Geography",
      education: "B.A",
      avatar: letkhoseiMate,
    },
    {
      name: "Ginjakai Haokip",
      subject: "Economatric",
      education: "M.A",
      avatar: ginjakaiHaokip,
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
      <section className="py-5 text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
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
              <span className="px-2 rounded-lg bg-slate-400 ">
                Dept of History
              </span>
              <span className="px-2 m-2 rounded-lg bg-slate-400 ">
                Dept of Geography
              </span>
              <span className="px-2 m-2 rounded-lg bg-slate-400 ">
                Dept of Political Science
              </span>
              <br />
              <span className="px-2 rounded-lg bg-slate-400 ">
                Dept of Education
              </span>
              <span className="px-2 m-2 rounded-lg bg-slate-400 ">
                Dept of English
              </span>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-background-color focus:outline-none hover:bg-blue-700">
                <Link to="/admission">Admission</Link>
              </button>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded w-[620px] h-[450px]"
              alt="art"
              src={arts}
              loading='lazy'
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center reveal--animate">
            <h1 className="mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font">
              OUR ARTS FACULTY
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Our Art Faculty is a vibrant and creative community of educators
              and artists dedicated to fostering artistic expression, nurturing
              talent, and inspiring a deep appreciation for the arts. With a
              passion for creativity and a commitment to artistic excellence,
              our faculty members form the heart of our artistic community.
            </p>
          </div>

          <section className="profiles__bio reveal--animate">
            <h3 className="text-xl font-medium tracking-widest text-center text-gray-900 title-font">
              DEPARTMENT OF BIOLOGY
            </h3>
            <hr className="mb-5" />
            <div className="flex flex-wrap ">
              {deptArts.map((item) => (
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

export default Art;
