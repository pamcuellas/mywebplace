/*jshint esversion: 6 */
import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import '../css/projects.css';
import wordsCircle from '../services/wordsCircle';
class Projects extends Component { 

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		wordsCircle("Cleansing-Standardize-Deduplication-", 10, 0);  
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
						<p>I still remember when I had to design a relationship among product, order, and invoice entities for the first time. 
							It was my first test for my first job and the strange thing: the position was for a software developer. 
							Over the last ten years, I have been performing roles related to the process to create databases from scratch. 
							And that first test remains so alive. For relational databases, the entities can change, but the concept is still the same. </p>
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
					<hr></hr>
					<div className="nomal-text paragraph-bottom-space">
						<p>What lead a database existence is a business reason. It is a purpose that will help your company thrives. Maybe you want to control 
							information about something or, more than that, you need to find answers to your business questions.
							My most experiences are marketing purposes, and I am describing here very briefly, what I lived and learned.</p>
						
						<p>This type of project starts by choosing the right data sources, that means, they must always be up-to-date and aligned with the marketing goals.
							Second step, we have to analyze and document the data sources. Customers can provide data dictionaries and data models,
							but sometimes a reverse engineer is necessary due to the lack of documents. With this information in our hands, we can sketch out 
							the Entity-Relationship Model (ERM) and design the Extract, Transform, and Load process (ETL). Some keys tasks to be mindful at this 
							stage are normalization, data cleansing, data standardization, and maybe we need to architect some match keys for deduplication. 
							All these activities are important to ensure consistency and quality of our new database.
							</p>
						<p>Considering we already have a development environment, now we are able to create the IT infrastructure to support the Relational Database 
							Management System (RDBMS) and implement the ETL applications, activities that should be done concurrently. 
							After, it is time to create our physical database. The ERM design tool like ERWIN or Toad Data Modeler 
							(there are many others tools) will generate the script (or DDL) for us.</p>
						<p>Next step, we configure and test our ETL applications. Most of them are scheduled to execute at night to avoid concurrence with users during working hour. 
						At this point, we have a relevant detail. Usually, the first import is a ton of data and demands a good plan of how to perform it. It is 
						an activity that will take time and must be tested very well previously to avoid any bad surprise. Revert this process after started, 
						most of the times bring us many extra work hours.</p>
						<p>Since our database is populated and the ETL routines are working well, we are in the production situation, and it is time to have fun.
						That is the moment when our customers get themselves more inspired and start to have many ideas and insights about the new data source. So do I. 
						In my opinion, the best stage of this job. 
						
						We start by classifying customers based on some different demographics and behaviour factors.
						Also, we can use statistical models, such as logistic regression, to predict future behaviour and generate customer lists for campaigns.
						These new requirements mean we need to build new database structures, tables procedures, functions, views, etc. A new layer starts to be 
						constructed. I like to classify it as a high-level layer because more intelligence is applied here. We also could say now we begin to build 
						more information than only gather data.  
						</p>
						<p>That was a concise explanation of my experience in projects like this. Obviously, there are a lot of more details to talk about. 
						I am proud to say I have been building a successful career, bringing positive energy, enthusiasm, commitment and more than everything, 
						passion for what I do. I also like playing as a full stack developer. You might consider see 
						my <a href="http://pamcuellas.github.io" target="blank">Portfolio</a> or my <a href="https://github.com/pamcuellas?tab=repositories" target="blank">GitHub</a>.
						</p>
					</div>
				</div>
		);

	}
}

export default Projects;

