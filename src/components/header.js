import React from 'react';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <div className="fixed top-0 z-50 flex justify-between w-full gap-10 p-3 px-10 mb-4 text-xl text-white bg-gray-900"> 
      <p className="text-3xl font-semibold hover:text-green-400">  &lt;/KM&gt; </p> 
      <ul className="flex gap-8 pt-2 text-2xl font-semibold"> 
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
