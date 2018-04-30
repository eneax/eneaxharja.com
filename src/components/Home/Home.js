import React from "react";
import "./Home.css";

const home = () => {
	return (
		<main>
			<div className="tc pv4 pv5-ns">
			  <h1 className="f4 f3-ns fw6 dark-gray courier">Hi, I"m Enea!</h1>
			  <h2 className="f6 mid-gray fw2 ttu tracked georgia">Self-taught Web Developer</h2>
			  
			  <a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href="https://github.com/eneax" target="_blank" rel="noopener noreferrer" >
			  	<i className="fab fa-github fa-2x"></i>
			  </a>
			  <a className="f6 grow dib v-mid ph3 pv2 mb3 dark-gray" href="mailto:eneaxharja@gmail.com" target="_blank" rel="noopener noreferrer" >
			  	<i className="fas fa-envelope fa-2x"></i>
			  </a>
			</div>
		</main>
	)
}

export default home;
