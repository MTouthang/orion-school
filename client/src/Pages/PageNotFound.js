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
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap text-center m">
            <div className="px-4 mx-auto mb-5 sm:w-1/2 md:1/2">
              <div className="overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src={pageNotFound}
                  loading='lazy'
                />
              </div>
              <button className="flex px-5 py-2 mx-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
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
