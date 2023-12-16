import React from "react";

const Skill = ({ image, text }) => {
	return (
		<div className="skill">
			<img className="skill__logo" src={image} alt={text} />
			<p>{text}</p>
		</div>
	);
};

export default Skill;
