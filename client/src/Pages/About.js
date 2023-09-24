import React from 'react'
import principal from '../Assets/Principal.jpg'

const About = () => {
    return (
        <>
            <section
                className=" font-Academic body-font reveal--animate mx-auto my-14  w-full py-10 text-gray-600"
                id="about"
            >
                <h2 className="title-font  mb-4 text-center text-3xl font-medium text-gray-900 sm:text-4xl">
                    About
                </h2>
                <div className="container mx-auto flex flex-col items-center px-5 md:flex-row">
                    <div className="mb-6 p-4 sm:mb-0 md:w-1/3">
                        <div className="h-48 w-48 overflow-hidden shadow-2xl">
                            <img
                                alt="content"
                                className="border-2 object-cover object-center "
                                src={principal}
                            />
                        </div>
                        <h2 className="title-font mt-5 text-xl font-medium text-gray-900 ">
                            Principal
                        </h2>
                        <p className="text-base leading-relaxed">
                            Jangminthang Lhungdim
                        </p>
                    </div>
                    <div className="text-justify md:pl-10 ">
                        <p className="mb-8 leading-relaxed">
                            The Orion Academy is an institution with true aim of
                            creating future success in the society. Value based
                            knowledge is the true aim of education that we
                            impart to our students. As a parent, you definitely
                            want the best for your child and we are happy to be
                            working with you to make sure that they are the true
                            knowledge to face the challenges in their career. An
                            important role ORION plays at this end is to link
                            this depth and breadth of energy and experience to
                            the enthusiasm and intelligence of this generation
                            of Achievers.
                        </p>
                        <p className="mb-8">
                            The talent and the energy which our students possess
                            needs to be nurtured, shaped and channeled in the
                            right direction. Our combined efforts would bring
                            out only the best in their careers, but the best in
                            their lives. In this way we hope to support not only
                            individuals but also the entire society from which
                            we all benefits.
                        </p>

                        <p className="">
                            We wish you a very rewarding experience at ORION !
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
