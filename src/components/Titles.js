import React from 'react';

const Titles = ({title, id}) => {
  return (
    <div className='title' id={id}>
      <p>{title}</p>
    </div>
  );
};

export default Titles;