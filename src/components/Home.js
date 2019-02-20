import React, { Component } from 'react';

//import img from '../images/cellphone-tyler-lastovich.jpg'; 
// <div className="content background-image" style={{backgroundImage: 'url(' + img +')'}}>

class Home extends Component {

	componentDidMount(){
		// var words = document.querySelectorAll('.word');
		// animaWords(words);
	}

	componentWillUnmount() {
		// clearTimeout();
	}

	render () {
		return(
				<div className="slide">
				    <ul id="slideshow">
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				      <li></li>
				    </ul>
					<header className="slide-header">
						<h1>Hi there!</h1>
						<h1>This is Paulo Cuellas' web place.</h1>
						<h1>It's nice to see you here.</h1>
					</header>
				</div>
			);
	}
}

export default Home;


