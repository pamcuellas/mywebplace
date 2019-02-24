import React, { Component } from 'react';
//import Logo from '../images/warbler-logo.png';
// import linkedin from "../images/iconfinder_linkedin_circle_color_32px32px.png";   <img src={linkedin} alt="lala"/>


class Footer extends Component {
	render(){

		return(
				<footer> 
					<p className="courtesy visible">Images courtesy of 
					<a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>
					 and 
					<a href="https://www.pexels.com/photo-license/" target="_blank" rel="noopener noreferrer"> Pexels</a> 
					</p>
					<p className="courtesy visible">Icons courtesy of <a href="https://fontawesome.com/?from=io" target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
					<p className="rights">© 2019 Paulo Cuellas. All rights reserved.</p>
					<ul>
						<li><a className="social visible" href="https://www.linkedin.com/in/paulocuellas/"  target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
						<li><a className="social visible" href="https://www.facebook.com/paulo.cuellas" 	target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a></li>
						<li><a className="social visible" href="https://twitter.com/pamcuellas/" 			target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a></li>
						<li><a className="social visible" href="https://www.instagram.com/paulo.cuellas/" 	target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a></li>
					</ul>
				</footer>
			);
	}
}

export default Footer;


