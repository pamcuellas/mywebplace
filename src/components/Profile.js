import React, { Component } from 'react';
import animaWords from '../services/animaWords';
import { TweenMax } from "gsap/TweenMax";
import { Back } from 'gsap';
import img01 from '../images/MyGrayFace.jpg'; 
import img02 from '../images/MyFace-min.jpg'; 

//import img from '../images/cellphone-tyler-lastovich.jpg'
// <div className="content background-image" style={{backgroundImage: 'url(' + img +')'}}>

const options = {
  imgSrc1:img01,
  imgSrc2:img02,
  containerName : "placeholder",
  columns:16,
  margin:1.5
}


class Profile extends Component {

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
	  var directionX, directionY;
	  
	  var column, blind, blindImg;
	  var bgImg, rot;
	  var colL;
	  var colW = (placeholder.offsetWidth / cols) - margin;
	  for (var i=0; i < cols; i++)
	    {
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
	          }
	          blindImg.style.width = placeholder.offsetWidth + "px";
	          blindImg.style.backgroundImage = "url("+bgImg+")";
	          blindImg.style.left = -colL + "px";

	          column.appendChild(blind);
	          blind.appendChild(blindImg);
	          
	          TweenMax.set(blind, { transformOrigin:"50% 50% " + -colW/2, transformStyle: "preserve-3d"});
	        }
	      
	      TweenMax.set(column, {transformStyle:"preserve-3d", transformPerspective:1000, rotationY:0});
	      
	       column.addEventListener("mouseenter", function(event){
	            var elem = event.currentTarget;
	            var rotY = elem._gsTransform.rotationY;
	         
	            if(directionX > 0){
	              TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90+90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
	            }else{
	              TweenMax.to(elem, 1, {rotationY:Math.floor(rotY/90)*90-90, transformOrigin:"50% 50% -" + colW/2, ease:Back.easeOut});
	            }
	      })
	    }
	      document.addEventListener('mousemove', function (event) {
	      directionX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	      directionY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	    });
	}

	render () {
		
		return(
				<div className="content">
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
					<hr /> 
					<div className="content-area">
						<div className="photo-container">
							<div className="photo">
								<div className="placeholder"></div>
							</div>	
						</div>	

						<div className="profile">
							<div className="personaldata">
								<span>Hi there! I'm Paulo Cuellas Database Developer with passion for coding.</span>
							</div>
						</div>
					</div>
					<hr /> 
				</div>
			);
	}
}

export default Profile;


