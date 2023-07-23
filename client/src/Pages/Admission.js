import React from "react";
import { Link } from "react-router-dom";
import comingSoon from "../Assets/comingsoon.svg";

const Admission = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap m text-center">
            <div className="sm:w-1/2 md:1/2 mb-10 px-4 mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={comingSoon}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Not Available
              </h2>
              <p className="leading-relaxed text-base">
                No admission available as of now,
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
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
