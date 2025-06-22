import React from 'react';

export default function Contact() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center bg-gray-900">
      <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl">
        Let's Connect & Collaborate!!!
      </h1>
      
      <div className="mb-8">
        <a 
          href="mailto:kashishmukheja7@gmail.com" 
          className="text-xl text-blue-600 transition-colors md:text-2xl hover:text-blue-800"
        >
          Email: kushmehta124@gmail.com
        </a> 
      </div>
      
      <p className="mb-12 text-2xl text-white md:text-3xl">
        Let's build something great together !?
      </p>
      
      <button 
        onClick={handleBackToTop}
        className="px-6 py-3 text-2xl font-semibold transition-colors bg-green-400 rounded-lg text-gray-950 hover:bg-white"
      >
        Back to Top
      </button>
    </div>
  );
}