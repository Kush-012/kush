import React from 'react';
import About from './components/about.js';
import Header from './components/header.js';
import Home from './components/home.js';
import Skill from './components/skills.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
      <Header/> 
      
    
      <section id="home">
        <Home/>
      </section>
      
      <section id="about">
        <About/>
      </section>
      
      <section id="skills">
        <Skill/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>
      
      <section id="contact">
        <Contact/>
      </section>
    </div> 
  );
} 

export default App;
