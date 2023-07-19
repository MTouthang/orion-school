/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Courses = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Offer Courses
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repellendus eius adipisci quod unde? Reprehenderit, doloribus
              voluptatem illum non amet, rem quia adipisci qui fugit repellendus
              possimus praesentium soluta porro.
            </p>
          </div>
          <div className="flex item justify-around mb-10 flex-col md:flex-row lg:flex-row ">
            <div className="lg:w-1/3 mb-2 bg-gray-300 h-96 relative">
              <div className=" bg-gray-100 bg-opacity-25 px-8 py-5 overflow-hidden text-left absolute bottom-0">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Art
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, facilis?
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 mt-2  bg-gray-300 h-96 relative">
              <div className=" bg-gray-100 bg-opacity-25 px-8 py-5 overflow-hidden text-left absolute bottom-0">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Science
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, facilis?
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
