import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import '../css/projects.css';
import wordsCircle from '../services/wordsCircle';
class Projects extends Component { 

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		wordsCircle(" Cleansing Standardizing Deduplication ", 10, 0);  
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render () {

		return (

				<div className="content">
					<div className="title">
						<p>
							<span className="word">
								<span className="letter">P</span>
								<span className="letter">r</span>
								<span className="letter">o</span>
								<span className="letter">j</span>
								<span className="letter">e</span>
								<span className="letter">c</span>
								<span className="letter">t</span>
								<span className="letter">s</span>
							</span>
							<span className="word">
								<span className="letter">P</span>
								<span className="letter">r</span>
								<span className="letter">o</span>
								<span className="letter">j</span>
								<span className="letter">e</span>
								<span className="letter">c</span>
								<span className="letter">t</span>
								<span className="letter">s</span>
							</span>
							<span className="word">
								<span className="letter">P</span>
								<span className="letter">r</span>
								<span className="letter">o</span>
								<span className="letter">j</span>
								<span className="letter">e</span>
								<span className="letter">c</span>
								<span className="letter">t</span>
								<span className="letter">s</span>
							</span>
						</p>
					</div>
					<hr></hr>
					<div className="nomal-text">
						<p>Over the last ten years, I have been performing database activities like designing, creating, updating, and maintenance. But, as someone that likes keep the hands durty, I am always coding a bunch of rows to test new languages features or just testing new ideas.</p>
					</div>
					<div className="projects-container">
						<div className="source">

							<div className="new-circle"></div>
							<div className="data-text">
								<h4>Data Sources</h4>
								<ul>
									<li>Databases</li>
									<li>Web services</li>
									<li>Flat files, JSON</li>
									<li>XML, HTML, etc</li>
								</ul>
							</div>

							<span className="wall"></span>
							<div className="move-wall cs">
								<span className="behind-wall" >Customer Service<div className="newarrow"></div></span>
							</div>    
							<div className="move-wall sm">
								<span className="behind-wall">Social Media<div className="newarrow"></div></span>
							</div>    
							<div className="move-wall crm">
									<span className="behind-wall">CRM<div className="newarrow"></div></span>
							</div>    
							<div className="move-wall ec">
									<span className="behind-wall">E-Commerce<div className="newarrow"></div></span>
							</div>    
							<div className="move-wall leads">
									<span className="behind-wall">Leads<div className="newarrow"></div></span>
							</div>    
							<div className="move-wall ads">
									<span className="behind-wall any-data">Any data source</span><div className="newarrow"></div>
							</div>    
							<div className="move-wall camp">
									<span className="behind-wall">Campaigns<div className="newarrow"></div></span>
							</div>    
						</div>

						<div className="circlecontainer">
							<div className="wordscircle"></div>
							<span className="extraload">E T L</span>
						</div>

						<div className="database">
							<div className="circle-top  common position-zero"></div>
							<div className="circle-base common position-one"></div>
							<div className="circle-base common position-two"></div>
							<div className="circle-base common position-three"></div>
						</div>
					</div>
				</div>

		);

	}
}

export default Projects;

