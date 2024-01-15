import React from 'react';
import Skill from './Skill';
import figma from '../assets/logo/figma.svg'
import github from '../assets/logo/github-mark.svg'
import postgresSQL from '../assets/logo/PostgreSQL.svg'
import react from '../assets/logo/React-icon.svg'
import ruby from '../assets/logo/ruby.svg'
import javascript from '../assets/logo/javascript.svg'
import jest from '../assets/logo/jest.svg'
import sass from '../assets/logo/Sass.svg'
import redux from '../assets/logo/redux.svg'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='skills__categories'>
        <h2>Front-End</h2>
        <Skill image={react} text="React" />
        <Skill image={javascript} text="Javascript" />
      </div>
      <div className='skills__categories'>
        <h2>Design</h2>
        <Skill image={figma} text="Figma"/>
      </div>
      <div className='skills__categories'>
        <h2>Back-End</h2>
        <Skill image={ruby} text="Ruby"/>
        <Skill image={postgresSQL} text="PostegreSQL"/>
      </div>  
      <div className='skills__categories'>
        <h2>Other</h2>
        <Skill image={github} text="Git & Github"/>
        <Skill image={jest} text="Jest"/>
        <Skill image={sass} text="Sass"/>
        <Skill image={redux} text="Redux"/>
      </div>  
    </div>
  );
};

export default Skills;