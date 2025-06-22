import React, { useEffect, useRef } from "react";
import pic from "./pic.jpg";

function About() {
  const typingRef = useRef(null);

  useEffect(() => {
    if (window.Typed) {
      const typed = new window.Typed(typingRef.current, {
        strings: ["Web Developer", "Java Developer", "Software Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <>
      <div className="mb-16 text-xl text-white bg-gray-900">
        <div
          className="flex flex-col items-center justify-center gap-4 pt-10 text-xl font-medium  sm:flex-row sm:justify-between sm:pt-20 sm:gap-72 sm:items-start"
        >
          <div
            className="pt-10 pl-4 text-center  sm:pt-56 sm:pl-64 sm:text-left"
          >
            <p
              className="mb-4 text-2xl font-bold  sm:text-3xl md:text-5xl"
            >
              Hi, there 👋
            </p>
            <p
              className="mb-4 text-2xl font-bold  sm:text-3xl md:text-5xl"
            >
              I'm Kush
            </p>
            <p
              className="mb-4 text-2xl font-bold  sm:text-3xl md:text-5xl"
            >
              a <span className="text-green-400" ref={typingRef}></span>
            </p>
          </div>

          <div
            className="pt-6 pr-4  sm:pr-64 sm:pt-36"
          >
            <img
              src={pic}
              alt="image"
              className="w-48 h-48 text-lg transition duration-500 transform border-green-400 rounded-full  sm:h-80 sm:w-80 hover:scale-105 hover:border-4 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;