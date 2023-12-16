import React from 'react';
import monImage from '../assets/images/canada-trail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='presentation'>
        Hi 
        <FontAwesomeIcon icon={faPowerOff} />
        'm Marvin a Front-end developer 
        <Contact/>
      </div>
      <div className='presentation__container'>
          <img className="presentation__image" src={monImage} alt="" /> 
      </div>
    </div>
  );
};

export default Banner;