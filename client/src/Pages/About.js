import React from "react";
import principal from "../Assets/Principal.jpg";

const About = () => {
  return (
    <>
      <section
        className="text-gray-600 body-font w-5/6 mx-auto py-10"
        id="about"
      >
        <h2 className="title-font  text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          About
        </h2>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="h-48 w-48 overflow-hidden shadow-2xl">
              <img
                alt="content"
                className="object-cover object-center border-1 "
                src={principal}
                // src="https://dummyimage.com/320x320"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Principal
            </h2>
            <p className="text-base leading-relaxed">Jangminthang Lhungdim</p>
          </div>
          <div className="pl-10 text-justify py-5">
            <p className="mb-8 leading-relaxed">
              The Orion Academy is an institution with true aim of creating
              future success in the society. Value based knowledge is the true
              aim of education that we impart to our students. As a parent, you
              definitely want the best for your child and we are happy to be
              working with you to make sure that they are the true knowledge to
              face the challenges in their career. An important role ORION plays
              at this end is to link this depth and breadth of energy and
              experience to the enthusiasm and intelligence of this generation
              of Achievers.
            </p>
            <p className="mb-8">
              The talent and the energy which our students possess needs to be
              nurtured, shaped and channeled in the right direction. Our
              combined efforts would bring out only the best in their careers,
              but the best in their lives. In this way we hope to support not
              only individuals but also the entire society from which we all
              benefits.
            </p>

            <p className="">
              We wish you a very rewarding experience at ORION !
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
