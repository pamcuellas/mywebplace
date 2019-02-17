import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
// import img from '../images/laptop-with-function-Luca-Bravo.jpg'; 

class Resume extends Component {

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
							<span className="letter">R</span>
							<span className="letter">e</span>
							<span className="letter">s</span>
							<span className="letter">u</span>
							<span className="letter">m</span>
							<span className="letter">e</span>
						</span>
						<span className="word">
							<span className="letter">R</span>
							<span className="letter">e</span>
							<span className="letter">s</span>
							<span className="letter">u</span>
							<span className="letter">m</span>
							<span className="letter">e</span>
						</span>
						<span className="word">
							<span className="letter">R</span>
							<span className="letter">e</span>
							<span className="letter">s</span>
							<span className="letter">u</span>
							<span className="letter">m</span>
							<span className="letter">e</span>
						</span>
						<span className="word">
							<span className="letter">R</span>
							<span className="letter">e</span>
							<span className="letter">s</span>
							<span className="letter">u</span>
							<span className="letter">m</span>
							<span className="letter">e</span>
						</span>
			  		</p>
				</div>
				<hr></hr>
				<div className="content-content-area">
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
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
						<li> Lets write some text here to full this page.</li>
					</ul>
				</div>
			</div>
		);
	}

}
export default Resume;	