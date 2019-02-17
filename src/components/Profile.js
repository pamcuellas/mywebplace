import React, { Component } from 'react';
// import animaWords from '../services/animaWords';
import photo from '../images/MyGrayFace.jpg'

//import img from '../images/cellphone-tyler-lastovich.jpg'; 
// <div className="content background-image" style={{backgroundImage: 'url(' + img +')'}}>

class Profile extends Component {

	componentDidMount(){
		// var words = document.querySelectorAll('.word');
		// animaWords(words);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render () {
		
		return(
				<div>
					<div className="title">
						<p>
							<span className="word">
								<span className="letter">P</span>
								<span className="letter">r</span>
								<span className="letter">o</span>
								<span className="letter">f</span>
								<span className="letter">i</span>
								<span className="letter">l</span>
								<span className="letter">e</span>
							</span>
							<span className="word">
								<span className="letter">P</span>
								<span className="letter">r</span>
								<span className="letter">o</span>
								<span className="letter">f</span>
								<span className="letter">i</span>
								<span className="letter">l</span>
								<span className="letter">e</span>
							</span>
							<span className="word">
								<span className="letter">P</span>
								<span className="letter">r</span>
								<span className="letter">o</span>
								<span className="letter">f</span>
								<span className="letter">i</span>
								<span className="letter">l</span>
								<span className="letter">e</span>
							</span>
				  		</p>
					</div>
					<hr></hr>
					<div className="content-content-area">
						<div className="profile">
							<div className="photo">
								<img src={photo} alt="Yeah! That is my photobomb" />
							</div>	
							<div className="personaldata">
								<span>Hi there! I'm Paulo Cuellas Database Developer. our web site is coming soon.</span>
							</div>
						</div>
						<ul>
							<li>The face of the moon was in shadow and this page is a Profile. this sentence does not make sense.</li>
						</ul>
					</div>
					<hr></hr>

				</div>
			);
	}
}

export default Profile;


