import React from 'react';
import monImage from '../assets/images/canada-trail.jpg'
import Btn from './Btn';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='presentation'>
        <p><strong> Hi, I'm Marvin</strong> a <strong>Front-end </strong>developer </p> 
        <a href="#contact">
          <Btn text="Contact" customClass="btn__banner"/>
        </a>
      </div>
      <div className='presentation__container'>
          <img className="presentation__image" src={monImage} alt="" /> 
      </div>
    </div>
  );
};

export default Banner;