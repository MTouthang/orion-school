import React from "react";

const Facilities = () => {
  return (
    <>
      <section className="w-full px-2 my-10 reveal--animate" id="facilities">
        <div className="flex flex-col w-full py-5 ">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Facilities
          </h1>
          <p className="text-base leading-relaxed ">
            The school itself is committed to providing students with a
            first-class learning environment that fosters academic excellence
            and creativity. Our school is equipped with state-of-the-art
            facilities, including high-standard classrooms, a library and a
            laboratory to ensure students have the best resources and
            opportunities for their educational journey.
          </p>
        </div>
        <div className="flex flex-col justify-between item md:flex-row lg:flex-row ">
          <div className="md:w-1/3 bg-gray-300 h-64 relative mb-5 bg-facilities-library bg-cover bg-[400px] mr-2">
            <div
              className="absolute bottom-0 w-full px-8 py-5 overflow-hidden text-center bg-gray-100 bg-opacity-50 "
            >
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                Library
              </h1>
            </div>
          </div>
          <div className="relative h-64 mb-5 mr-2 bg-gray-300 bg-cover md:w-1/3 bg-facilities-classroom ">
            <div className="absolute bottom-0 w-full px-8 py-5 overflow-hidden text-center bg-gray-100 bg-opacity-50 ">
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                Class Room
              </h1>
            </div>
          </div>
          <div className="relative h-64 mb-5 bg-gray-300 bg-cover md:w-1/3 bg-facilities-lab ">
            <div className="absolute bottom-0 w-full px-8 py-5 overflow-hidden text-center bg-gray-100 bg-opacity-50 ">
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
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
