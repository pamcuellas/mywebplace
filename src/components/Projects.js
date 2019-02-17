import React, { Component } from 'react';  
import animaWords from '../services/animaWords';

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

				<div>
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
					<div className="content-content-area">
						<h2>We need write here our excelent projects.</h2>
					</div>
				</div>

		);

	}
}

export default Projects;

