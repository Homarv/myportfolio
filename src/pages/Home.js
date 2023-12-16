import React from 'react';
import Banner from '../components/Banner.js'
import Contact from '../components/Contact.js';
import Skills from '../components/Skills.js';
import Titles from '../components/Titles.js';
import Projects from '../components/Projects.js';
import Pointer from '../components/Pointer.js';



const Home = () => {
  return (
    <div>
      <Pointer/>
      <Banner/>
      <Titles title="Skills"/>
      <Skills/>
      <Titles title="Projects"/>
      <Projects/>
      <Titles title="Contact"/>
      <Contact/>
    </div>
  );
};

export default Home;