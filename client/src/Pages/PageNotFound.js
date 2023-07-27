import React from "react";
import { Helmet } from "react-helmet";
import pageNotFound from "../Assets/404.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
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
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap m text-center">
            <div className="sm:w-1/2 md:1/2 mb-5 px-4 mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={pageNotFound}
                />
              </div>
              <button className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                <Link to={"/"}> Return Home</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
