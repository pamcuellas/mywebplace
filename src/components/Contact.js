import React, { Component } from 'react';  
import animaWords 			from '../services/animaWords';
import { loadReCaptcha, ReCaptcha } 	from 'react-recaptcha-google';
import './contact.css';


class Contact extends Component { 

	constructor(props, context) {
		super(props, context);
		this.state = {
			human: false,
			token:''
		}
	    this.verifyCallback = this.verifyCallback.bind(this);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	    this.setRecaptchaExpired = this.setRecaptchaExpired.bind(this);
	}

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		loadReCaptcha();
		if (this.Captcha) {
	        console.log("started, just a second...")
	        this.Captcha.reset();
	    }
	}

	onLoadRecaptcha() {
		console.log("onLoadRecaptcha");
	  if (this.Captcha) {
	      this.Captcha.reset();
	  }
	}

	verifyCallback(recaptchaToken) {

		// Here you will get the final recaptchaToken!!!  
		console.log("<= your recaptcha token", recaptchaToken );

		if ( recaptchaToken.length > 0 ) { 
			this.setState({ human: true, token: recaptchaToken });
		}	else {
			// Message
			this.setState({ human: false, token: '' });
		}



		/* I TRYED TO VALIDATE THE TOKEN BUT I FACED THE CORS ISSUE AND NOBOY KNOWS HOW TO SOLVE THIS PROBLEM.
		   MAYBE ON FUTURE. SO I DECIDED TO KEEP IT SIMPLE.
		if (recaptchaToken.length > 0) {
			// Lets verify token
			const googleURL = process.env.REACT_APP_GOOGLE_API_URL;
			const KEY = process.env.REACT_APP_TST_SECRET_SITE_KEY;
			// const KEY = process.env.REACT_APP_HRK_SECRET_SITE_KEY;
			console.log("PARAMS " + googleURL + " " + KEY );

			axios(`${googleURL}`,{
				method: 'POST',
	            mode: 'no-cors',
	            headers: {
	            	Accept: 'application/json',
	            	"Content-Type": 'application/json'
	            },
	            withCredentials: true,
	            credentials: 'same-origin',
	            params: {
	                secret: `${KEY}`,
	                response: recaptchaToken,
	                "remoteip":"localhost"
	            } 
			})
			.then( data => {
					console.log("======================================================================== ", data);
			})
			.catch( this.handlingErrors );
		} 		*/
	}

	/* Axios can distinguish errors 
	handlingErrors = (error) => {
		if ( error.response ) {
			console.log("Something was wrong with RESPONSE ==>", error.response.status);
		} else if ( error.request ) {
			console.log("Something was wrong with REQUEST ==>", error.request);
		} else { 
			console.log("Something was wrong ==>", error.message);
		}
	} */ 


	setRecaptchaExpired(){
		this.setState({ human: false, token: '' });
		console.log("ReCaptcha Expired!");
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render() {  

		// const KEY = process.env.REACT_APP_TST_SITE_KEY;	
		const KEY = process.env.REACT_APP_HRK_SITE_KEY;	

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

				<div className="form-container">
					<form action="#" className="contact-form">

						<div className="form-element">
							<input type="text" name="first" placeholder="First Name" /> 
						</div>
						<div className="form-element">
							<input type="text" name="last"  placeholder="Last Name" />
						</div>
						<div className="form-element">
							<input type="text" className="form-control" placeholder="Email" />
						</div>
						<div className="form-element">
							<textarea rows="3" type="text" className="form-control"  placeholder="Drop your message here"></textarea>
						</div>

						<div className="recaptcha">
							<div className="recaptcha-inner">
									<ReCaptcha
									ref={(el) => {this.Captcha = el;}}
									size="normal"
									render="explicit"
									theme="dark"
									sitekey={`${KEY}`}
									onloadCallback={this.onLoadRecaptcha}
									verifyCallback={this.verifyCallback}
									expiredCallback={this.setRecaptchaExpired}
									/>
							</div>
						</div>
						<div className="form-element">
							<button className="form-btn">Send</button>
						</div>

					</form>
				</div>
				 
			</div>
		);
	}	

}
export default Contact;


/*

<form action="?" method="POST">
	<div className="g-recaptcha" data-sitekey={KEY}></div>
	<input type="email" placeholder="Email" />
	<a href="#" className="btn">Subscribe</a>
	<input type="submit" value="Submit" />
</form>


					<form>
						<input type="email" placeholder="Email" />
						<a href="#" className="btn">Subscribe</a>
					</form>
*/