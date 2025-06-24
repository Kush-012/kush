import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const prevScrollY = useRef(0);

  // Mobile-optimized intersection observer
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
  });

  const [boxRef, boxInView] = useInView({
    triggerOnce: isMobile,
    threshold: isMobile ? 0.05 : 0.5, // Lower threshold for mobile
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip scroll logic on mobile

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (boxInView) {
        if (currentScrollY > prevScrollY.current) {
          setShouldAnimate(true);
        } else if (currentScrollY < prevScrollY.current - 100) {
          setShouldAnimate(false);
        }
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [boxInView, isMobile]);

  return (
    <div id="about" className="px-4 pt-4 sm:pt-10"> {/* Reduced pt-4 for mobile */}
      <motion.p
        ref={titleRef}
        className="mt-10 text-4xl font-bold text-center text-green-400 sm:mt-44" // Reduced mt-10 for mobile
        initial={{ y: isMobile ? 20 : 100, opacity: 0 }} // Reduced initial y for mobile
        animate={
          isMobile
            ? titleInView
              ? { y: 0, opacity: 1 }
              : { y: 20, opacity: 0 }
            : shouldAnimate && boxInView
            ? { y: 0, opacity: 1 }
            : { y: shouldAnimate ? 0 : 100, opacity: shouldAnimate ? 1 : 0 }
        }
        transition={{ duration: isMobile ? 0.6 : 0.5, ease: "easeOut" }}
      >
        About Me
      </motion.p>

      <motion.div
        ref={boxRef}
        className="p-4 py-6 m-4 mb-40 bg-gray-800 mx-auto max-w-5xl hover:shadow-[0_10px_20px_rgba(74,222,128,0.4)] transition-shadow duration-300"
        initial={{ scale: isMobile ? 1 : 0.8, y: isMobile ? 20 : 0, opacity: 0 }} // Reduced y for mobile
        animate={
          isMobile
            ? boxInView
              ? { y: 0, opacity: 1 }
              : { y: 20, opacity: 0 }
            : shouldAnimate && boxInView
            ? { scale: 1, opacity: 1 }
            : { scale: shouldAnimate ? 1 : 0.8, opacity: shouldAnimate ? 1 : 0 }
        }
        transition={{
          duration: isMobile ? 0.8 : 0.3,
          ease: "easeOut",
          delay: isMobile ? 0.2 : 0,
        }}
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

        <div className="flex flex-col justify-center gap-16 mt-20 sm:flex-row">
          <button className="bg-green-400 text-black font-semibold px-6 py-2 rounded-full shadow-[0_0_10px_#4ade80] hover:shadow-[0_0_20px_#4ade80] transition duration-300 hover:bg-white text-2xl">
            <a href="https://drive.google.com/file/d/1TQnuUGpQq851DvUSkM4_H0iKBCYNE7dx/view?usp=sharing">
              Download Resume
            </a>
          </button>

          <p className="text-center">
            <a href="https://www.linkedin.com/in/kushm1/">
              <i className="px-3 text-5xl text-white transition-transform duration-200 cursor-pointer fa-brands fa-linkedin hover:scale-110 hover:text-green-400"></i>
            </a>
            <a href="https://www.github.com/Kush-012">
              <i className="px-3 text-5xl text-white transition-transform duration-200 cursor-pointer fa-brands fa-github hover:scale-110 hover:text-green-400"></i>
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;