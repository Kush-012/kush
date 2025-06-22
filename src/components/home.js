import React, { useEffect, useRef } from "react";
import pic from "./pic.jpg";
function About() {
  const typingRef = useRef(null);
  useEffect(() => {
    if (window.Typed) {
      const typed = new window.Typed(typingRef.current, {
        strings: ["Web Developer", "Java Developer","Software Engineer"],
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
        <div className="flex justify-between pt-20 text-xl font-medium gap-72">
          <div className="pt-56 pl-64 left">
            <p className="mb-4 text-3xl font-bold md:text-5xl"> Hi, there 👋</p>
            <p className="mb-4 text-3xl font-bold md:text-5xl">I'm Kush </p>
            <p className="mb-4 text-3xl font-bold md:text-5xl">
              a <span className="text-green-400" ref={typingRef}></span>
            </p>
          </div>

          <div className="pr-64 pt-36 right">
            <img
              src={pic}
              alt="image"
              className="text-lg transition duration-500 transform border-green-400 rounded-full h-80 w-80 hover:scale-105 hover:border-4 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
