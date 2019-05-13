import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import '../css/webinfo.css';
import node  from '../images/Nodejs64.png';
import react from '../images/React64.png'; 
import json from '../images/json.png'; 
import mongo from '../images/Mongodb64.png'; 
import html from '../images/html5hexa.png'; 
import css from '../images/css3hexa.png'; 
import vanjs from '../images/javascript.png'; 

class Webinfo extends Component {

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render() { 
		 return(

			<div className="content">
				<div className="title">
					<p>
						<span className="word">
							<span className="letter">W</span>
							<span className="letter">e</span>
							<span className="letter">b</span>
							<span className="letter" style={{color: '#FFFFFF'}}>-</span>
							<span className="letter">I</span>
							<span className="letter">n</span>
							<span className="letter">f</span>
							<span className="letter">o</span>
						</span>
						<span className="word">
							<span className="letter">W</span>
							<span className="letter">e</span>
							<span className="letter">b</span>
							<span className="letter" style={{color: '#FFFFFF'}}>-</span>
							<span className="letter">I</span>
							<span className="letter">n</span>
							<span className="letter">f</span>
							<span className="letter">o</span>
						</span>
						<span className="word">
							<span className="letter">W</span>
							<span className="letter">e</span>
							<span className="letter">b</span>
							<span className="letter" style={{color: '#FFFFFF'}}>-</span>
							<span className="letter">I</span>
							<span className="letter">n</span>
							<span className="letter">f</span>
							<span className="letter">o</span>
						</span>
			  		</p>
				</div>
				<div className="website">
					<div className="website-text">
						<div className="text-1">
						<p>This website is hosted at 
								<a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer"> DigitalOcean </a> 
								using Ubuntu, Nginx, PM2, and SSL Certificate from 
								<a href="https://letsencrypt.org/" target="_blank" rel="noopener noreferrer"> Let's Encrypt Authority X3 </a>.
							</p>
						</div>
						<div className="text-2">
							<p>Yeah, I am proud! It is classified as an <strong className="a-plus">A+</strong> website at SSL Labs, check it 
								<a href="https://www.ssllabs.com/ssltest/analyze.html?d=pamzc.com" target="_blank" rel="noopener noreferrer"> here</a>.	
							</p>
						</div>
						<div className="text-3">
							<p>The main resources used to develop this website were:</p>
							<div className="images">
								<img className="node" src={node} alt="Node.js"></img>
								<img className="react" src={react} alt="React"></img>
								<img className="html" src={html} alt="HTML"></img>
								<img className="css" src={css} alt="CSS"></img>
								<img className="json" src={json} alt="JSON"></img>
								<img className="vanjs" src={vanjs} alt="Vanilla JS"></img>
								<img className="mongo" src={mongo} alt="MongoDB"></img>
							</div>
						</div>
						<div className="text-4">
							<p>Especial thanks to 
								<a href="https://www.unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>
								that makes possible appreciate a bunch of beautiful and attractive photos at Gallery menu above.</p>
							<p>Thanks also to:</p>
							<ul>
								<li><a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a></li>
								<li><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN</a></li>
								<li><a href="https://cloud.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a></li>
								<li><a href="https://brandcolors.net/" target="_blank" rel="noopener noreferrer">BrandColors</a></li>
								<li><a href="https://www.colorhexa.com" target="_blank" rel="noopener noreferrer">ColorHexa</a></li>
								<li><a href="https://www.google.com/recaptcha/" target="_blank" rel="noopener noreferrer">Google reCaptcha</a></li>
								<li><a href="https://www.shareicon.net/" target="_blank" rel="noopener noreferrer">SHAREICON.net</a></li>
								<li><a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a></li>
							</ul>	
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default Webinfo;	