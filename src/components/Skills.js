import React from 'react';
import img from '../images/laptop-with-function-Luca-Bravo.jpg'; 

const Skills = () => (

	<section className="destinations">
		<h3 className="title">Some of our destinations</h3>
		<p>Princess Eugenie, ninth in line to the British throne, and tequila executive Jack Brooksbank married at Windsor Castle on a windy Friday.</p>
		<hr></hr>
		<ul className="grid">
			<li className="small" style={{backgroundImage: 'url(' + img +')'}}>Put image back later</li>
			<li className="large" style={{backgroundImage: 'url(' + img +')'}}>Put image back later</li>
			<li className="large" style={{backgroundImage: 'url(' + img +')'}}>Put image back later</li>
			<li className="small" style={{backgroundImage: 'url(' + img +')'}}>Put image back later</li>
		</ul>
	</section>

);

export default Skills;

// style="background-image: url(assets/img/lakelorraine.jpg);