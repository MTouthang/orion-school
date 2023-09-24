import React from "react";

const Extras = () => {
  return (
    <>
      <section className="w-full px-2 my-12 reveal--animate" id="extras">
        <div className="flex flex-col w-full py-5 ">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Recreational Events
          </h1>
          <p className="text-base leading-relaxed ">
            We are dedicated to providing a comprehensive and enriching
            educational experience for our students. In addition to academic
            excellence, we believe in fostering a well-rounded development that
            includes physical fitness, cultural appreciation, and a sense of
            community. As such, our school offers a variety of recreational
            activities to complement the academic curriculum and nurture the
            overall growth of our students.
          </p>
        </div>
        <div className="flex flex-col justify-between item md:flex-row lg:flex-row ">
          <div className="relative h-64 mb-5 mr-2 bg-gray-300 bg-no-repeat bg-cover md:w-1/3 bg-recreational-sports">
            <div className="absolute bottom-0 w-full px-8 py-5 overflow-hidden text-center bg-gray-100 bg-opacity-50 ">
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                Sports
              </h1>
            </div>
          </div>
          <div className="relative h-64 mb-5 mr-2 bg-gray-300 bg-cover md:w-1/3 bg-recreational-festivals">
            <div className="absolute bottom-0 w-full px-8 py-5 overflow-hidden text-center bg-gray-100 bg-opacity-50 ">
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                Festivals
              </h1>
            </div>
          </div>
          <div className="relative h-64 mb-5 bg-gray-300 bg-cover md:w-1/3 bg-recreational-tours ">
            <div className="absolute bottom-0 w-full px-8 py-5 overflow-hidden text-center bg-gray-100 bg-opacity-50 ">
              <h1 className="mb-3 text-xl font-medium text-gray-900 title-font sm:text-2xl">
                Tour
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extras;
