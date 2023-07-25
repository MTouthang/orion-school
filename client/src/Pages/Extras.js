import React from "react";

const Extras = () => {
  return (
    <>
      <section className="my-12 w-full px-2 reveal--animate" id="extras">
        <div className="flex flex-col w-full py-5 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Recreational Events
          </h1>
          <p className="  leading-relaxed text-base">
            We are dedicated to providing a comprehensive and enriching
            educational experience for our students. In addition to academic
            excellence, we believe in fostering a well-rounded development that
            includes physical fitness, cultural appreciation, and a sense of
            community. As such, our school offers a variety of recreational
            activities to complement the academic curriculum and nurture the
            overall growth of our students.
          </p>
        </div>
        <div className="flex item justify-between flex-col md:flex-row lg:flex-row  ">
          <div className="md:w-1/3 bg-gray-300 h-64 relative mb-5 bg-recreational-sports bg-cover mr-2 ">
            <div className=" bg-gray-100 bg-opacity-50 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Sports
              </h1>
            </div>
          </div>
          <div className="md:w-1/3 bg-gray-300 h-64 relative mb-5 bg-recreational-festivals bg-cover mr-2">
            <div className=" bg-gray-100 bg-opacity-50 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Festivals
              </h1>
            </div>
          </div>
          <div className="md:w-1/3 bg-gray-300 h-64 relative mb-5 bg-recreational-tours  bg-cover bg-[400px]">
            <div className=" bg-gray-100 bg-opacity-50 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
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
