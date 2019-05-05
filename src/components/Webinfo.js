import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import '../css/webinfo.css';
import node  from '../images/Nodejs64.png';
import react from '../images/React64.png'; 
import json from '../images/json64.png'; 
import mongo from '../images/Mongodb64.png'; 
import html from '../images/html64.png'; 
import css from '../images/css64.png'; 
import vanjs from '../images/js64.png'; 

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
				{/* <hr></hr> */}
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
							<p>Yeah, I am proud! It is an <strong style={{color:"green"}}>+A</strong> classification website at SSL Labs, check it 
								<a href="https://www.ssllabs.com/ssltest/analyze.html?d=pamzc.com" target="_blank" rel="noopener noreferrer"> here</a>.	
							</p>
						</div>
						<div className="text-3">
							<p>The main resources used to develop this website were:</p>
							<div className="images">
								<img className="node" src={node} alt="Node.js"></img>
								<img className="react" src={react} alt="React"></img>
								<img className="mongo" src={mongo} alt="MongoDB"></img>
								<img className="json" src={json} alt="JSON"></img>
								<img className="html" src={html} alt="HTML"></img>
								<img className="css" src={css} alt="CSS"></img>
								<img className="vanjs" src={vanjs} alt="Vanilla JS"></img>
							</div>
						</div>
						<div className="text-4">
							<p>Especial thanks to Unsplash that makes possible appreciate a bunch of beautiful and attractive photos at Gallery menu above.</p>
							<p>Also thanks to:</p>
							<ul>
								<li><a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a></li>
								<li><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">MDN</a></li>
								<li><a href="https://cloud.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a></li>
								<li><a href="https://brandcolors.net/" target="_blank" rel="noopener noreferrer">BrandColors</a></li>
								<li><a href="https://www.colorhexa.com" target="_blank" rel="noopener noreferrer">ColorHexa</a></li>
								<li><a href="https://www.google.com/recaptcha/" target="_blank" rel="noopener noreferrer">Google reCaptcha</a></li>
								<li><a href="https://www.shareicon.net/" target="_blank" rel="noopener noreferrer">SHAREICON.net</a></li>
							</ul>	
						</div>
					</div>
{/* 

					<ul className="grid">
						<li>
							<i className="fa fa-compass fa-4x"></i>
							<h4>Guide Trips</h4>
							<p>Image released of suspect after fire deliberately set at North York hotel: police.</p>
						</li>
						<li>
							<i className="fa fa-camera-retro fa-4x"></i>
							<h4>Photo Trips</h4>
							<p>Man, 26, pronounced dead after daylight shooting in Downsview 2.</p>
						</li>
						<li>
							<i className="fa fa-bicycle fa-4x"></i>
							<h4>Biking Trips</h4>
							<p>Heading abroad? Here's what you need to know in the legal cannabis era 1.</p>
						</li>
						<li>
							<i className="fa fa-flag-checkered fa-4x"></i>
							<h4>Racing Trips</h4>
							<p>Facebook says hackers accessed data from 29 million accounts as part of the security breach disclosed two weeks ago, fewer than the 50 million it initially believed were affected.</p>
						</li>
					</ul>
					<ul>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> This is the last line in this page .</li>
					</ul> */}
				</div>
			</div>
		);
	}

}
export default Webinfo;	