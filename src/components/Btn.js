import React, { useState } from 'react';

const Btn = ({ text, customClass }) => {
  const [isBtnTouched, setIsBtnTouched] = useState(false);

  const handleTouchStart = () => {
    setIsBtnTouched(true);
  };

  const handleTouchEnd = () => {
    setIsBtnTouched(false);
  };

  return (
    <div className='btn-container'>
      <div
        className={`btn ${customClass} ${isBtnTouched ? 'touched' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {text}
      </div>
    </div>
  );
};

export default Btn;
