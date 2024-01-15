import React from 'react';
import Circles from './Circles'

const Footer = () => {
  return (
    <div className='footer'>
      <Circles/>
      <p className='footer__text'>Designed and built by Marvin P.</p>
      <p className='footer__text'>©Copyright 2023 - Marvin P.</p>
    </div>
  );
};

export default Footer;