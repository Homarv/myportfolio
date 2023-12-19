// Pointer.js
import React, { useState, useEffect } from 'react';

const Pointer = () => {
  const [trails, setTrails] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const newTrail = { x: event.clientX, y: event.clientY };
    setPosition(newTrail);
    setTrails([...trails, newTrail]);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trails]);

  return (
    <div>
      <div className='pointer' style={{ left: position.x, top: position.y }}>
        <div className="box">
          <div className="circle"></div>
        </div>
      </div>
      {trails.map((trail, index) => (
        <div key={index} className='trail' style={{ left: trail.x, top: trail.y }}></div>
      ))}
    </div>
  );
};

export default Pointer;

