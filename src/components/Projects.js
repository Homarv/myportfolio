import React from "react";
import FishEye from '../assets/images/FishEye.png';
import BankAPI from '../assets/images/BankAPI.png';
import AlgoJS from '../assets/images/AlgoJS.png';
import Sportsee from '../assets/images/Sportsee.png';

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <Link to="/fisheye" className="project-card">
        <img className="project-card__image" src={FishEye} alt="" />
        <div className="overlay">
          <p className="project-card__text">Site de location de bien</p>
        </div>
      </Link>
      
      <Link to="/sportsee" className="project-card">
      <img className="project-card__image" src={Sportsee} alt="" />

        <div className="overlay">
          <p className="project-card__text">Site de location de bien</p>
        </div>
      </Link>

      <Link to="/algojs" className="project-card">
        <img className="project-card__image" src={AlgoJS} alt="" />
        <div className="overlay">
          <p className="project-card__text">Site de location de bien</p>
        </div>
      </Link>

      <Link to="/bankapi" className="project-card">
        <img className="project-card__image" src={BankAPI} alt="" />
        <div className="overlay">
          <p className="project-card__text">Site de location de bien</p>
        </div>
      </Link>

      <Link to="/perso-project" className="project-card">
        <img className="project-card__image" src={BankAPI} alt="" />
        <div className="overlay">
          <p className="project-card__text">Site de location de bien</p>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
