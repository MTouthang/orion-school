import React from "react";

const Facilities = () => {
  return (
    <>
      <section
        className="my-10 border-2 w-full px-2 reveal--animate"
        id="facilities"
      >
        <div className="flex flex-col w-full py-5 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Facilities
          </h1>
          <p className=" leading-relaxed text-base">
            The school itself is committed to providing students with a
            first-class learning environment that fosters academic excellence
            and creativity. Our school is equipped with state-of-the-art
            facilities, including high-standard classrooms, a library and a
            laboratory to ensure students have the best resources and
            opportunities for their educational journey.
          </p>
        </div>
        <div className="flex item justify-between flex-col md:flex-row lg:flex-row ">
          <div className="md:w-1/3 bg-gray-300 h-64 relative mb-5 bg-facilities-library bg-cover bg-[400px] mr-2">
            <div
              className=" bg-gray-100 bg-opacity-50 
            px-8 py-5 overflow-hidden w-full text-center absolute bottom-0"
            >
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Library
              </h1>
            </div>
          </div>
          <div className="md:w-1/3  bg-gray-300 h-64 relative  mb-5 bg-facilities-classroom  bg-cover bg-[300px] mr-2 ">
            <div className=" bg-gray-100 bg-opacity-50 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Class Room
              </h1>
            </div>
          </div>
          <div className="md:w-1/3 bg-gray-300 h-64 relative  mb-5 bg-facilities-lab  bg-cover bg-[400px]">
            <div className=" bg-gray-100 bg-opacity-50 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Laboratory
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
