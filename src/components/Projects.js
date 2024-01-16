import React from "react";
import FishEye from "../assets/images/FishEye.png";
import BankAPI from "../assets/images/BankAPI.png";
import AlgoJS from "../assets/images/AlgoJS.png";
import Sportsee from "../assets/images/Sportsee.png";
import { Link } from "react-router-dom";

import react from "../assets/logo/React-icon.svg";
import javascript from "../assets/logo/javascript.svg";
import sass from "../assets/logo/Sass.svg";
import redux from "../assets/logo/redux.svg";

const Projects = () => {
	return (
		<div className="projects">
			<Link to="/bankapi" className="project-card">
				<img className="project-card__image" src={BankAPI} alt="" />
				<div className="overlay">
					<p className="project-card__text">Compte utilisateur bancaire</p>
					<img src={react} alt="logo-react" className="project-card__logo" />
					<img src={redux} alt="logo-sass" className="project-card__logo" />
					<img src={sass} alt="logo-sass" className="project-card__logo" />
				</div>
			</Link>

			<Link to="/fisheye" className="project-card">
				<img className="project-card__image" src={FishEye} alt="" />
				<div className="overlay">
					<p className="project-card__text">Site pour photographe</p>
					<img
						src={javascript}
						alt="logo-javascript"
						className="project-card__logo"
					/>
					<img src={sass} alt="logo-sass" className="project-card__logo" />
				</div>
			</Link>

			<Link to="/sportsee" className="project-card">
				<img className="project-card__image" src={Sportsee} alt="" />

				<div className="overlay">
					<p className="project-card__text">Tableau de bord Analytics</p>
					<img src={react} alt="logo-react" className="project-card__logo" />
					<img src={sass} alt="logo-sass" className="project-card__logo" />
				</div>
			</Link>

			<Link to="/algojs" className="project-card">
				<img className="project-card__image" src={AlgoJS} alt="" />
				<div className="overlay">
					<p className="project-card__text">Moteur de recherche Javascript</p>
					<img
						src={javascript}
						alt="logo-javascript"
						className="project-card__logo"
					/>
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
