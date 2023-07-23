import React from "react";

const Extras = () => {
  return (
    <>
      <section className=" mx-24 py-10" id="extras">
        <div className="flex flex-col w-full py-5 ">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Facilities
          </h1>
          <p className="lg:w-4/5  leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            repellendus eius adipisci quod unde? Reprehenderit, doloribus
            voluptatem illum non amet, rem quia adipisci qui fugit repellendus
            possimus praesentium soluta porro.
          </p>
        </div>
        <div className="flex item justify-between flex-col md:flex-row lg:flex-row  ">
          <div className="lg:w-1/4 bg-gray-300 h-64 relative mb-5  ">
            <div className=" bg-gray-100 bg-opacity-25 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Sports
              </h1>
            </div>
          </div>
          <div className="lg:w-1/4 bg-gray-300 h-64 relative mb-5 ">
            <div className=" bg-gray-100 bg-opacity-25 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Festivals
              </h1>
            </div>
          </div>
          <div className="lg:w-1/4 bg-gray-300 h-64 relative mb-5 ">
            <div className=" bg-gray-100 bg-opacity-25 px-8 py-5 overflow-hidden w-full text-center absolute bottom-0">
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
