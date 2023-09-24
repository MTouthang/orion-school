/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import student from "../Assets/carouselImage/students.jpg";
import chemistryLab from "../Assets/carouselImage/chemistryLab.jpg";
import chemistryLab1 from "../Assets/carouselImage/chemistryLab1.jpg";
import laboratory from "../Assets/carouselImage/laboratory.jpg";

const Hero = () => {
  const imageList = [
    {
      url: student,
      text: "School Students",
    },
    {
      url: chemistryLab,
      text: "Chemistry Lab",
    },
    {
      url: laboratory,
      text: "Laboratory",
    },
    {
      url: chemistryLab1,
      text: "chemistry lab 2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (currentIndex === 0) {
      setCurrentIndex(imageList.length - 1);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [imageList]);

  // TODO: background effect
  return (
    <div
      className="relative flex flex-col mx-auto border-2 sm:overflow-hidden"
      id="hero"
    >
      {/* listing the images */}
      <div className=" flex   h-[570px] mx-auto   w-full  overflow-hidden">
        {/* // TODO: fix the responsive design */}
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt="carousel"
            loading="lazy"
            className={`  absolute  transition-opacity duration-1000 ease-in-out object-cover w-full h-[570px]   ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* next and prev button */}
      <div className="absolute flex items-center justify-between w-full px-5 top-1/2">
        <button className="px-5 " onClick={handlePrev}>
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>

        <button className="px-5" onClick={handleNext}>
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>

      {/* /* dot buttons */}
      <div className="absolute bottom-0 z-30 flex items-center justify-center w-full gap-3 py-3">
        {imageList.map((image, index) => {
          return (
            // TODO: onclick index to slide image
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-900" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
