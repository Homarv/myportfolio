import React from 'react';
import monImage from '../assets/images/canada-trail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import Contact from './Contact';
import Btn from './Btn';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='presentation'>
        <p><strong> Hi, I'm Marvin</strong> a <strong>Front-end </strong>developer </p> 
        <Btn text="Contact" customClass="btn__banner"/>
      </div>
      <div className='presentation__container'>
          <img className="presentation__image" src={monImage} alt="" /> 
      </div>
    </div>
  );
};

export default Banner;