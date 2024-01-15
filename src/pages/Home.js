import React from 'react';
import Banner from '../components/Banner.js'
import Contact from '../components/Contact.js';
import Skills from '../components/Skills.js';
import Titles from '../components/Titles.js';
import Projects from '../components/Projects.js';
import Circles from '../components/Circles.js';



const Home = () => {
  return (
    <div>
      <Banner/>
      <Titles title="SKILLS"/>
      <Skills/>
      <Titles title="PROJECT"/>
      <Projects/>
      <Titles title="CONTACT"/>
      <Contact />
      <Circles/>
    </div>
  );
};

export default Home;