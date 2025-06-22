import React from 'react';
import { Link } from 'react-router-dom';

function P1() {
  return (
    <div className="min-h-screen px-4 pt-24 text-gray-100 bg-gray-900 md:px-20 lg:px-60">
      <Link 
        to="/"
        className="inline-block mb-6 text-green-400 transition-colors duration-200 hover:text-green-300"
      >
        ← Back to Projects
      </Link>
      
      <h1 className="mb-8 text-4xl font-bold text-center text-green-400">
        Packpal - Smart Packing Assistant
      </h1>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-[0_0px_5px_rgba(74,222,128,0.4)]">
        <h2 className="mb-4 text-2xl font-semibold text-green-400">Project Overview</h2>
        <p className="mb-6 text-lg text-gray-300">
          Packpal is an innovative packing assistant designed to simplify travel preparation. 
          It helps users create customized packing lists based on their destination, trip duration, 
          and personal preferences. The application uses intelligent algorithms to suggest essential 
          items and provides reminders for important travel documents.
        </p>
        
        <h2 className="mb-4 text-2xl font-semibold text-green-400">Features</h2>
        <ul className="mb-6 text-lg text-gray-300 list-disc list-inside">
          <li>Customized packing lists based on trip type and destination</li>
          <li>Weather-based clothing suggestions</li>
          <li>Checklist for travel documents and essentials</li>
          <li>User-friendly interface with intuitive navigation</li>
          <li>Option to save and share packing lists</li>
        </ul>
        
        <h2 className="mb-4 text-2xl font-semibold text-green-400">Screenshots</h2>
        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
          <div className="p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center w-full h-64 bg-gray-600 rounded">
              <p className="text-gray-400">[Placeholder: Packpal Main Interface]</p>
            </div>
            <p className="mt-2 text-center text-gray-300">Main Interface</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center w-full h-64 bg-gray-600 rounded">
              <p className="text-gray-400">[Placeholder: Packing List View]</p>
            </div>
            <p className="mt-2 text-center text-gray-300">Packing List View</p>
          </div>
        </div>
        
        <h2 className="mb-4 text-2xl font-semibold text-green-400">Technologies Used</h2>
        <p className="mb-6 text-lg text-gray-300">
          React, Tailwind CSS, Node.js, Express, MongoDB
        </p>
        
        <a 
          href="https://github.com/Kush-012/Chatbot-packing-assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 font-semibold text-gray-900 transition-colors duration-200 bg-green-400 rounded-lg hover:bg-green-300"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default P1;