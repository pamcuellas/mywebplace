import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
// import img from '../images/laptop-with-function-Luca-Bravo.jpg'; 

class Contact extends Component { 

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render() {  
		return (

			<div className="content">

				<div className="title">
					<p>
						<span className="word">
							<span className="letter">C</span>
							<span className="letter">o</span>
							<span className="letter">n</span>
							<span className="letter">t</span>
							<span className="letter">a</span>
							<span className="letter">c</span>
							<span className="letter">t</span>
						</span>
						<span className="word">
							<span className="letter">C</span>
							<span className="letter">o</span>
							<span className="letter">n</span>
							<span className="letter">t</span>
							<span className="letter">a</span>
							<span className="letter">c</span>
							<span className="letter">t</span>
						</span>
						<span className="word">
							<span className="letter">C</span>
							<span className="letter">o</span>
							<span className="letter">n</span>
							<span className="letter">t</span>
							<span className="letter">a</span>
							<span className="letter">c</span>
							<span className="letter">t</span>
						</span>
					</p>
				</div>
				<hr></hr>
				<div className="content-content-area">
					<h3 className="title">Learn More</h3>	
					<p>SOFIA, Bulgaria -- Hundreds of relatives, friends and colleagues of slain Bulgarian journalist Viktoria Marinova said their goodbyes at a funeral Friday in her hometown, just after German police announced that a suspect has acknowledged attacking her.</p>
					<form>
						<input type="email" placeholder="Email" />
						<a href="#" className="btn">Subscribe</a>
					</form>
				</div>
			</div>

		);
	}	

}
export default Contact;

