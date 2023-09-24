import React from "react";
import { Link } from "react-router-dom";
import comingSoon from "../Assets/comingsoon.svg";
import { Helmet } from "react-helmet";

const Admission = () => {
  return (
    <>
      <Helmet>
        <title> Admission </title>
        <meta
          name="description"
          content="Orion school of Arts and Science Admission section"
        />
      </Helmet>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap text-center m">
            <div className="px-4 mx-auto mb-10 sm:w-1/2 md:1/2">
              <div className="overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src={comingSoon}
                  loading='lazy'
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">
                Not Available
              </h2>
              <p className="text-base leading-relaxed">
                No admission available as of now,
              </p>
              <button className="flex px-5 py-2 mx-auto mt-6 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                <Link to={"/"}> Return Home</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;
