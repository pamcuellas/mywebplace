import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import '../css/projects.css';
class Projects extends Component { 

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
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
						<div className="projects-container">
							<div className="source">
								
								<span className="wall"></span>
								<div className="move-wall cs">
									<span className="behind-wall" >Customer Service<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall sm">
									<span className="behind-wall">Social Media<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall pay">
									<span className="behind-wall">Payments<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall b2c">
										<span className="behind-wall">B2C<div className="newarrow"></div></span>
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
										<span className="behind-wall">Campaign<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall lala">
										<span className="behind-wall">Lala<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall lele">
										<span className="behind-wall">Lele<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall lili">
										<span className="behind-wall">Lili<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall lolo">
										<span className="behind-wall">Lolo<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall lulu">
										<span className="behind-wall">Lulu<div className="newarrow"></div></span>
								</div>    
								<div className="move-wall papa">
										<span className="behind-wall">Papa<div className="newarrow"></div></span>
								</div>    
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

