import React from "react";
import { useInView } from 'react-intersection-observer';

const Skill = ({ image, text }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Déclencher une seule fois
  });

  return (
    <div ref={ref} className={`skill ${inView ? 'animate-in-view' : ''}`}>
      <img className="skill__logo" src={image} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Skill;
