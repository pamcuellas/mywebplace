/*jshint esversion: 6 */
import React, { Component } from 'react';
import animaWords from '../services/animaWords';
import { TweenMax } from "gsap/TweenMax";
import { Back } from 'gsap';
import img01 from '../images/MyGrayFace.jpg'; 
import img02 from '../images/MyPhoto_bomb.jpg'; 

import '../css/about.css';

const options = {
  imgSrc1:img01,
  imgSrc2:img02,
  containerName : "placeholder",
  columns:14,
  margin:1.2
}

class About extends Component {
	constructor(props){
		super(props);
		this.VenetianBlinds = this.VenetianBlinds.bind(this);
	}

	componentDidMount(){
		this.VenetianBlinds(options);
		var words = document.querySelectorAll('.word');
		animaWords(words);
	}

	componentWillUnmount() {
		clearTimeout();
	}


	VenetianBlinds = (defaults) =>
	{  
		var cols = defaults.columns;
		var margin = defaults.margin;
		var img1 = defaults.imgSrc1;
		var img2 = defaults.imgSrc2;
		var placeholder = document.getElementsByClassName(defaults.containerName)[0];
		var directionX; //, directionY;

		var column, blind, blindImg;
		var bgImg; //, rot;
		var colL;
		var colW = (placeholder.offsetWidth / cols) - margin;
		for (var i=0; i < cols; i++) {
			colL = ((colW + margin) * i);
			column = document.createElement('div');
			column.className = "column";
			column.style.width = colW + "px";
			column.style.left = colL + "px";
			placeholder.appendChild(column); 

			for (var j=0; j<4; j++)
			{  
				blind = document.createElement('div');
				blind.className = "blind";
				blind.style.width = colW + "px";
				blindImg = document.createElement('div');
				blindImg.className = "blindImg";

				switch (j){
					case 0:
						TweenMax.set(blind, {rotationY: "0"});
						bgImg = img1;
						break;
					case 1:
						TweenMax.set(blind, {rotationY: "90"});
						bgImg = img2;
						break;
					case 2: 
						TweenMax.set(blind, {rotationY: "180"});
						bgImg = img1;
						break;              
					case 3:
						TweenMax.set(blind, {rotationY: "270"});
						bgImg = img2;
						break;
					default:
						break;
				}
				blindImg.style.width = placeholder.offsetWidth + "px";
				blindImg.style.backgroundImage = "url("+bgImg+")";
				blindImg.style.left = -colL + "px";

				column.appendChild(blind);
				blind.appendChild(blindImg);

				TweenMax.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
			}

			TweenMax.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});
			// eslint-disable-next-line
			column.addEventListener("mouseenter", function(event){
				var elem = event.currentTarget;
				var rotY = elem._gsTransform.rotationY;

				if(directionX > 0){
					TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
				}else{
					TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
				}
			});
		}
		document.addEventListener('mousemove', function (event) {
		directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		// directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
});
	}

	render () {
		
		return(
				<div className="content">
					<div className="title">
						<p>
							<span className="word">
								<span className="letter">A</span>
								<span className="letter">b</span>
								<span className="letter">o</span>
								<span className="letter">u</span>
								<span className="letter">t</span>
								<span className="letter" style={{color: '#FFFFFF'}}>-</span>
								<span className="letter">M</span>
								<span className="letter">e</span>
							</span>
							<span className="word">
								<span className="letter">A</span>
								<span className="letter">b</span>
								<span className="letter">o</span>
								<span className="letter">u</span>
								<span className="letter">t</span>
								<span className="letter" style={{color: '#FFFFFF'}}>-</span>
								<span className="letter">M</span>
								<span className="letter">e</span>
							</span>
							<span className="word">
								<span className="letter">A</span>
								<span className="letter">b</span>
								<span className="letter">o</span>
								<span className="letter">u</span>
								<span className="letter">t</span>
								<span className="letter" style={{color: '#FFFFFF'}}>-</span>
								<span className="letter">M</span>
								<span className="letter">e</span>
							</span>
				  		</p>
					</div>
					<div className="about-area ">
						<div className="photo-container">
							<div className="photo">
								<div className="placeholder"></div>
							</div>	
							<div className="introduction">
								<span>Hi there! I'm Paulo Cuellas an IT professional living in Toronto.</span>
							</div>

						</div>	
						<div className="personaldata">
							<h4>I am a Database Developer</h4>
							<p><span id="data">Data</span> is one of the most valuable assets for companies and due to this reason, technologies which surround it have been improving more and more.  
This scenario demands IT professionals be passionate about technology and be concerned to remain updated acquiring new bits of knowledge constantly. 
That is the way I describe myself. The problem: too many things to learn; The motivation: so exciting.</p>
							<p className="Obama-speech"><q>There is no matter how much you have done or how successful you have been. There is always more to do, always more to learn and always more to achieve.</q><br />
							<a className="Obama-signature" href="https://www.youtube.com/watch?v=Qbel5MhtDq4" target="_blank" rel="noopener noreferrer">- Barack Obama commencement speech at ASU 2009</a></p>
							<p>By the way, I'm currently attending the<a href="https://bootcamp.learn.utoronto.ca/data/" target="_blank" rel="noopener noreferrer"> Data Analytics Bootcamp at UofT.</a></p>
						</div>
					</div>


					<div className="skills-container"> 
						<h4>Database Developer Skills</h4>
						<div className="table">
							<div className="thead">
								<div className="tr tr-title">
									<div className="th">Skill</div>
									<div className="th">Beginner</div>
									<div className="th">Elementary</div>
									<div className="th">Intermediate</div>
									<div className="th">Advanced</div>
									<div className="th">Expert</div>
								</div>
							</div>
							<div className="tbody">
								<div className="tr">
									<div className="td">PostgreSQL</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">Oracle</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">MSQL Server</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">MySQL</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">MongoDB</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="skills-container paragraph-bottom-space"> 
						<h4>Full Stack Developer Skills</h4>
						<div className="table">
							<div className="thead">
								<div className="tr tr-title">
									<div className="th">Skill</div>
									<div className="th">Beginner</div>
									<div className="th">Elementary</div>
									<div className="th">Intermediate</div>
									<div className="th">Advanced</div>
									<div className="th">Expert</div>
								</div>
							</div>
							<div className="tbody">
								<div className="tr">
									<div className="td">NodeJS</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">React</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">HTML5</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">CSS3</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">Vanilla JS</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">Python</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">Laravel-PHP</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">Spring MVC-Java</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">C#</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<div className="tr">
									<div className="td">C++</div>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
	}
}

export default About;


