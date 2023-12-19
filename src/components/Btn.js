import React from 'react';

const Btn = ({ text, customClass }) => {
  return (
    <div className='btn-container'>
      <div className={`btn ${customClass}`}>
        {text}
      </div>
    </div>
  );
};

export default Btn;
