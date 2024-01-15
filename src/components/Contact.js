import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <a href="mailto:pierratmarvin3@gmail.com" className='contact__link'>
        <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
      </a>
      <a href="https://www.linkedin.com/in/pierrat-marvin-387937118/" className='contact__link'>
        <FontAwesomeIcon icon={faLinkedin} className='contact__icon' />
      </a>
      <a href="https://github.com/Homarv?tab=overview&from=2023-12-01&to=2023-12-16" className='contact__link'>
        <FontAwesomeIcon icon={faGithub} className='contact__icon' />
      </a>
    </div>
  );
};

export default Contact;
