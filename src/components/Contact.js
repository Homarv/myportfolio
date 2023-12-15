import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contact'>
      <FontAwesomeIcon icon={faEnvelope} className='contact__icon' />
      <FontAwesomeIcon icon={faLinkedin} className='contact__icon'/>
      <FontAwesomeIcon icon={faGithub} className='contact__icon'/>
    </div>
  );
};

export default Contact;