import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
    setIsMenuOpen(false); // Close menu after clicking a link on mobile
  };

  return (
    <div className="fixed top-0 z-50 flex flex-col justify-between w-full gap-10 p-3 px-4 mb-4 text-xl text-white bg-gray-900 md:flex-row md:px-10"> 
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold hover:text-green-400">  &lt;/KM&gt; </p> 
        {/* Mobile menu button */}
        <button 
          className="text-2xl md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 md:gap-8 pt-2 text-xl md:text-2xl font-semibold bg-gray-900 md:bg-transparent p-4 md:p-0`}> 
        <li className="cursor-pointer hover:text-green-400">
          <button onClick={() => scrollToSection('home')}>Home</button>
        </li> 
        <li className="cursor-pointer hover:text-green-400">
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li className="cursor-pointer hover:text-green-400">
          <button onClick={() => scrollToSection('skills')}>Skills</button>
        </li> 
        <li className="cursor-pointer hover:text-green-400">
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        </li>
        <li className="cursor-pointer hover:text-green-400">
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </li> 
      </ul> 
    </div> 
  );
}

export default Header;