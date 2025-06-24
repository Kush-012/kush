import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import html from './html-5.svg';
import css from './css-3-svgrepo-com.svg';
import js from './js-svgrepo-com.svg';
import php from './php-svgrepo-com.svg';
import cpp from './cpp-svgrepo-com.svg';
import java from './java-svgrepo-com.svg';
import git from './github-white-icon.png';
import sqlIcon from './sql-server-icon-png-11368.png';

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'PHP', icon: php },
    { name: 'C++', icon: cpp },
    { name: 'Java', icon: java },
    { name: 'GitHub', icon: git },
    { name: 'SQL', icon: sqlIcon },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <div className="px-4 py-12 bg-gray-900 sm:px-6 lg:px-8" id="skills">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          className="mb-12 text-3xl font-bold text-center text-green-400 sm:text-4xl"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          Tech Stack
          <motion.div 
            className="w-20 h-1 mx-auto mt-3 bg-green-400 rounded-full sm:w-24 sm:mt-4"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </motion.h1>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3 md:grid-cols-4 sm:px-4 lg:px-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          role="list"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              variants={itemVariants}
              role="listitem"
            >
              <div className="relative flex items-center justify-center w-16 h-16 p-3 transition-all duration-300 bg-gray-800 rounded-2xl sm:w-20 sm:h-20 sm:p-4 group-hover:bg-gray-700 group-hover:shadow-lg group-hover:shadow-green-400/10">
                <img
                  src={skill.icon}
                  className="object-contain w-10 h-10 transition-transform duration-300 sm:w-12 sm:h-12 group-hover:scale-110"
                  alt={`${skill.name} icon`}
                />
              </div>
              <span className="mt-2 text-xs font-medium text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div> 
      </div>
    </div>
  );
}

export default Skills;