import React from "react";
import monImage from '../assets/images/canada-trail.jpg';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <Link to="/first-project" className="project-card">
        <img className="project-card__image" src={monImage} alt="" />
        <div className="overlay">
          <p className="project-card__text">texte </p>
        </div>
      </Link>
      
      <div className="project-card">
        {/* Ajoutez d'autres éléments ici */}
      </div>
    </div>
  );
};

export default Projects;
