/*jshint esversion: 6 */
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
					<div className="nomal-text paragraph-bottom-space">
						<p>In a nutshell, this kind of project starts by analyzing and documenting the data sources. 
						Customers can provide data dictionaries and data models, but sometimes a reverse engineer is necessary due to the lack of documents.
							With this information in our hands, we can sketch out the Entity-Relationship Model and design the ETL (Extract, Transform, and Load) process for the new RDBMS. 
							Some keys tasks to be mindful at this stage are normalization, data cleansing, data standardization, and maybe we need to architect some match 
							keys for deduplication.</p>
						<p>Considering we already have a development environment, now we are able to create the IT infrastructure to support the database and implement 
							the ETL applications, activities that should be done concurrently. 
							After, it is time to create our physical database. The ERM design tool like ERWIN or Toad Data Modeler 
							(there are many others) will generate the script (or DDL) for us.</p>
						<p>Next step, we configure and test our ETL applications. Most of them are executed at night to avoid concurrence with users. 
						At this point, we have a relevant detail. Usually, the first import is a ton of data and demands a good plan of how to perform it. It is 
						an activity that will take time and must be tested very well previously to avoid any bad surprise. Revert this process after started, 
						most of the times bring us many extra work hours.</p>
						<p>Since our database is populated and the ETL routines are working well, we are in the production situation, and it is time to have fun.
						That is the moment when our customers start to ask for information and to have many ideas and insights over the new data source. 
						In my opinion, the best part of this job. New structures must be created; data must be grouped and summarised; performance is a 
						big issue, etc. Many new requirements show up.  
						</p>

					</div>
				</div>

		);

	}
}

export default Projects;

