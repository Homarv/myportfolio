import React, { useState } from "react";
import FishEye from '../assets/images/FishEye.png';
import BankAPI from '../assets/images/BankAPI.png';
import AlgoJS from '../assets/images/AlgoJS.png';
import Sportsee from '../assets/images/Sportsee.png';
import { Link } from "react-router-dom";

import react from '../assets/logo/React-icon.svg'
import javascript from '../assets/logo/javascript.svg'
import sass from '../assets/logo/Sass.svg'
import redux from '../assets/logo/redux.svg'

const Projects = () => {

  const [touchedProject, setTouchedProject] = useState(null);

  const handleTouchStart = (projectName) => {
    setTouchedProject(projectName);
  };

  const handleTouchEnd = () => {
    setTouchedProject(null);
  };

  const isProjectTouched = (projectName) => {
    return touchedProject === projectName;
  };

  return (
    <div className="projects">
      
      <Link to="/fisheye" className={`project-card ${isProjectTouched("fisheye") ? "touched" : ""}`}
        onTouchStart={() => handleTouchStart("fisheye")}
        onTouchEnd={handleTouchEnd}>
        <img className="project-card__image" src={FishEye} alt="" />
        <div className="overlay">
          <p className="project-card__text">Photographer's website</p>
          <img src={javascript} alt="logo-javascript" className="project-card__logo"/>
          <img src={sass} alt="logo-sass" className="project-card__logo"/>
        </div>
      </Link>

      <Link to="/bankapi" className={`project-card ${isProjectTouched("bankapi") ? "touched" : ""}`}
        onTouchStart={() => handleTouchStart("bankapi")}
        onTouchEnd={handleTouchEnd}>
        <img className="project-card__image" src={BankAPI} alt="" />
        <div className="overlay">
          <p className="project-card__text">Bank user account</p>
          <img src={react} alt="logo-react" className="project-card__logo"/>
          <img src={redux} alt="logo-sass" className="project-card__logo"/>
          <img src={sass} alt="logo-sass" className="project-card__logo"/>
        </div>
      </Link>
      
      <Link to="/sportsee" className={`project-card ${isProjectTouched("sportsee") ? "touched" : ""}`}
        onTouchStart={() => handleTouchStart("sportsee")}
        onTouchEnd={handleTouchEnd}>
      <img className="project-card__image" src={Sportsee} alt="" />

        <div className="overlay">
          <p className="project-card__text">Analytics dashboard</p>
          <img src={react} alt="logo-react" className="project-card__logo"/>
          <img src={sass} alt="logo-sass" className="project-card__logo"/>
        </div>
      </Link>

      <Link to="/algojs" className={`project-card ${isProjectTouched("algojs") ? "touched" : ""}`}
        onTouchStart={() => handleTouchStart("algojs")}
        onTouchEnd={handleTouchEnd}>
        <img className="project-card__image" src={AlgoJS} alt="" />
        <div className="overlay">
          <p className="project-card__text">Javascript search engine</p>
          <img src={javascript} alt="logo-javascript" className="project-card__logo"/>
        </div>
      </Link>

    

      <Link to="/perso-project" className={`project-card ${isProjectTouched("perso-project") ? "touched" : ""}`}
        onTouchStart={() => handleTouchStart("perso-project")}
        onTouchEnd={handleTouchEnd}>
        <img className="project-card__image" src={BankAPI} alt="" />
        <div className="overlay">
          <p className="project-card__text">E-commerce website</p>
          <img src={react} alt="logo-react" className="project-card__logo"/>
          <img src={sass} alt="logo-sass" className="project-card__logo"/>
          <img src={redux} alt="logo-sass" className="project-card__logo"/>

        </div>
      </Link>
    </div>
  );
};

export default Projects;
