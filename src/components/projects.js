import React from 'react'

function Projects() {
  return (
    <div id="projects" className="pt-20"> 
      <h1 className="px-10 mt-20 text-3xl font-bold text-center text-green-400">
        My Projects
      </h1>
      
      <div className="grid grid-cols-1 gap-8 p-4 px-4 my-10 md:grid-cols-2 lg:grid-cols-3 md:px-20 lg:px-60">
        
        <a 
          href="https://github.com/Kush-012/Chatbot-packing-assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        > 
          <div className="p-6 bg-gray-800 h-52 shadow-[0_0px_5px_rgba(74,222,128,0.4)] hover:shadow-[0_10px_20px_rgba(74,222,128,0.4)] flex flex-col items-center justify-center transition-shadow duration-300 rounded-lg">
            <h3 className="p-2 text-3xl font-semibold text-center text-green-400">
              Packpal
            </h3> 
            <p className="p-2 text-lg font-normal text-center text-gray-300">
              Smart packing assistant that helps travellers in creating their packing list.
            </p> 
          </div> 
        </a> 
        
        <a href="https://github.com/Kush-012/LeetLeap"> 
        <div className="p-6 bg-gray-800 h-52 shadow-[0_0px_5px_rgba(74,222,128,0.4)] hover:shadow-[0_10px_20px_rgba(74,222,128,0.4)] flex flex-col items-center justify-center transition-shadow duration-300 rounded-lg">
          <h3 className="p-2 text-3xl font-semibold text-center text-green-400">
            LeetLeap
          </h3> 
          <p className="p-2 text-lg font-normal text-center text-gray-300">
            It helps sharpen analytical skills through challenges.
          </p> 
        </div>
        </a>
        
        <a href="https://github.com/Kush-012/Ima_Market"> 
        <div className="p-6 bg-gray-800 h-52 shadow-[0_0px_5px_rgba(74,222,128,0.4)] hover:shadow-[0_10px_20px_rgba(74,222,128,0.4)] flex flex-col items-center justify-center transition-shadow duration-300 rounded-lg"> 
          <h3 className="p-2 text-3xl font-semibold text-center text-green-400">
            IMA Market
          </h3> 
          <p className="p-2 text-lg font-normal text-center text-gray-300">
            Shopping platform for different categories
          </p> 
        </div> 
        </a>
        
      </div>
    </div>
  )
} 

export default Projects 
