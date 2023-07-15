import { React, useState } from "react";

const Hero = () => {
  const imageList = [
    {
      url: "https://images.freeimages.com/images/large-previews/415/brotherhood-at-sunset-1-1244631.jpg",
      text: "image1",
    },
    {
      url: "https://media.istockphoto.com/id/631181466/photo/silhouette.jpg?s=1024x1024&w=is&k=20&c=BTQ0q8ZH5i3EysKoRS_f44IVTDOj2cHplBF-uZ8Ny2k=",
      text: "image2",
    },
    {
      url: "https://media.istockphoto.com/id/497992227/photo/silhouette-of-two-children-running.jpg?s=1024x1024&w=is&k=20&c=Q0coHo9FzDrdfKjRfTv1Gu0mrsHVom26jYQkCJkjl_Q=",
      text: "image3",
    },
    {
      url: "https://media.istockphoto.com/id/497992227/photo/silhouette-of-two-children-running.jpg?s=1024x1024&w=is&k=20&c=Q0coHo9FzDrdfKjRfTv1Gu0mrsHVom26jYQkCJkjl_Q=",
      text: "image3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  //TODO: auto slides
  const handleNext = () => {
    if (currentIndex < imageList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === imageList.length - 1) {
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

  return (
    <div className=" m-auto relative border-2">
      {/* listing the images */} 
      <div className="flex items-center justify-center relative ">
        {imageList.length > 0 &&
          imageList.map((image, index) => {
            return (
              <div
                key={index}
                className={` relative ${
                  currentIndex === index ? "block" : "hidden"
                } h-[450px] w-[1200px] `}
              >
                {/* TODO: scroll smooth or slides smooth */}
                <img
                  src={image.url}
                  alt={index}
                  className="w-full h-full object-cover "
                />

                <p className="absolute bottom-12 z-10 text-white w-full text-center">
                  {image.text} 
                </p>
              </div>
            );
          })}
      </div>
      {/* next and prev button */}
      <div className="absolute top-1/2 w-full flex items-center justify-between px-5">
        <button className=" px-5 " onClick={handlePrev}>
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>

        <button className="px-5" onClick={handleNext}>
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </div>
      {/* /* dot buttons */}
      <div className="w-full flex items-center justify-center gap-3 py-3">
        {imageList.map((image, index) => {
          return (
            // TODO: onclick index to slide image
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-700" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
