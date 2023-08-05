/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const feedbackUrl = useLocation();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleForm = () => {
  //   if (!name) {
  //     alert("Name should be greater 5 but less than 10 characters");
  //   }
  //   if (!email) {
  //     alert("Email should be provided! ");
  //   }
  //   if (!message) {
  //     alert(
  //       "Message should be and provide and must be greater than 100 characters and less than 200 characters"
  //     );
  //   }
  //   return;
  // };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Nav feedbackUrl={feedbackUrl} />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Feedback Form
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please feel free to share your thoughts, opinions, or any ideas
              that can help us improve.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2 " name="contact" method="post">
              {/* netlify bot */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    minLength="2"
                    maxLength="15"
                    required
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    minLength="10"
                    maxLength="30"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    minLength="50"
                    required
                    maxLength="250"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  // onClick={handleForm}
                  className="flex mx-auto text-white bg-background-color border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Feedback;
