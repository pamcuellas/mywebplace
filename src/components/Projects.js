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
						<p>Over the last ten years, I have been performing roles related to the process to create databases from scratch. The database business goals define which will be its potential data sources. My most experiences are marketing purposes.</p>
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
					<div className="nomal-text">
						<p>In a nutshell, this kind of project starts by analyzing and documenting the data sources. As a result, the Entity-Relationship Model and the ETL process can be sketched out.</p>
					</div>
				</div>

		);

	}
}

export default Projects;

