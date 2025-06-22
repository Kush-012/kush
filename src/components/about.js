import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const prevScrollY = useRef(0);
  const [boxRef, boxInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (boxInView) {
        if (currentScrollY > prevScrollY.current) {
          setShouldAnimate(true);
        }
        else if (currentScrollY < prevScrollY.current - 100) {
          setShouldAnimate(false);
        }
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [boxInView]);

  return (
    
    <div id="about" className="pt-10"> 
      <motion.p
        className="text-4xl font-bold text-center text-green-400 mt-44" // Reduced mt-64 to mt-44
        initial={{ y: 100, opacity: 0 }}
        animate={
          shouldAnimate && boxInView
            ? { y: 0, opacity: 1 }
            : { y: shouldAnimate ? 0 : 100, opacity: shouldAnimate ? 1 : 0 }
        }
        transition={{ duration: 0.5 }} 
      > 
        About Me
      </motion.p>

      <motion.div
        ref={boxRef}
        className="p-4 py-6 m-4 mb-40 bg-gray-800 mx-auto max-w-5xl hover:shadow-[0_10px_20px_rgba(74,222,128,0.4)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          shouldAnimate && boxInView
            ? { scale: 1, opacity: 1 }
            : { scale: shouldAnimate ? 1 : 0.8, opacity: shouldAnimate ? 1 : 0 }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
      > 
        <p className="p-2 text-2xl font-thin text-white">
          I'm a Full Stack Web Developer with a passion for building
          user-friendly digital experiences. I enjoy working through the
          development process—from planning to deployment—and collaborating with
          others to solve problems and build great web apps. I'm skilled in
          coding with C++ and Java, and have a strong foundation in Data
          Structures and Algorithms (DSA), helping me write efficient, clean
          code. I'm currently exploring various web frameworks and focused on
          improving website performance, including optimizing load times and
          enhancing user experience. I'm eager to apply my skills and grow
          through an internship opportunity where I can keep learning and
          contribute to impactful projects.
        </p> 
        <div className="flex justify-center gap-16 mt-20">
          <button className="bg-green-400 text-black font-semibold px-6 py-2 rounded-full shadow-[0_0_10px_#4ade80] hover:shadow-[0_0_20px_#4ade80] transition duration-300 hover:bg-white text-2xl">
            <a href="https://drive.google.com/file/d/1TQnuUGpQq851DvUSkM4_H0iKBCYNE7dx/view?usp=sharing"> Download Resume </a>  
          </button>

          <p className="text-center">
            <a href="https://www.linkedin.com/in/kushm1/"> 
              <i className="px-3 text-5xl text-white cursor-pointer fa-brands fa-linkedin hover:scale-110 hover:text-green-400"></i> 
            </a> 
            <a href="https://www.github.com/Kush-012"> 
              <i className="px-3 text-5xl text-white cursor-pointer fa-brands fa-github hover:scale-110 hover:text-green-400"></i>
            </a> 
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
