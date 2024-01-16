import React from 'react';
import Banner from '../components/Banner.js'
import Contact from '../components/Contact.js';
import Skills from '../components/Skills.js';
import Titles from '../components/Titles.js';
import Projects from '../components/Projects.js';


const Home = () => {
  return (
    <div>
      <Banner/>
      {/* <Titles title="SKILLS" id="skills" />
      <Skills/>
      <Titles title="PROJECTS" id="project"/>
      <Projects/>
      <Titles title="CONTACT" id="contact"/>
      <Contact /> */}
    </div>
  );
};

export default Home;