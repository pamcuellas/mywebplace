import React, { Component } from 'react';  
import animaWords 			from '../services/animaWords';
import { loadReCaptcha, ReCaptcha } 	from 'react-recaptcha-google';
import axios from 'axios';
import './contact.css';


class Contact extends Component { 

	constructor(props, context) {
		super(props, context);
		this.state = {
			human: false,
			token:'',
			firstname: '',
			lastname: '',
			email: '',
			message: '' 
		}
		this.onSubmit = this.onSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.createContact = this.createContact.bind(this);
	    this.verifyCallback = this.verifyCallback.bind(this);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	    this.setRecaptchaExpired = this.setRecaptchaExpired.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value  });
	}

	onSubmit(e) {
		e.preventDefault();

		const msg = document.querySelector(".msg-returned");				

		// Verify reCaptcha.
		if (!this.state.human) {
			msg.textContent = "Please hit the reCaptcha check box above before send your message."; 
		} else {
			this.createContact(msg);
		}
	}


	createContact(msg) { 

		const REST_URL = process.env.REACT_APP_PAMZCAPI_CONTACT;
		axios(REST_URL,{
			method: 'POST',
	        headers: {
	        	Accept: 'application/json',
	        	"Content-Type": 'application/json'
	        },
	        data: {
	            firstname: this.state.firstname,
	            lastname: this.state.lastname,
	            email: this.state.email,
	            message: this.state.message,
	            ip: 'testing'
	        } 
		})
		.then( data => {
			msg.textContent = "Thank you! Your message has been successfully created. We will contact you as soon as possible." ;
			console.log("data.data.created_at", data.data.created_at);
			console.log("data.status", data.status);
			console.log("data.statusText", data.statusText);
			console.log("FULL DATA OBJECT ", data);
			console.log("_id created", data.data._id);
		})
		.catch( error => {
			console.log("FULL ERROR  ==>", error);
			console.log("Sorry, something was wrong ==>", error.message);
			msg.textContent = "Sorry, something was wrong ==> " + error.message ;
		});

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
	}

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
					<form className="contact-form" onSubmit={this.onSubmit}>

						<div className="form-element">
							<input type="text"  name="firstname" onChange={ (e) => this.handleChange(e)} placeholder="First Name *" autoComplete='off'required /> 
						</div>
						<div className="form-element">
							<input type="text"  name="lastname"  onChange={ (e) => this.handleChange(e)} placeholder="Last Name *" autoComplete='off'required />
						</div>
						<div className="form-element">
							<input type="email" name="email" onChange={ (e) => this.handleChange(e)} placeholder="Email *" autoComplete='off'required />
						</div>
						<div className="form-element">
							<textarea rows="3" type="text" onChange={ (e) => this.handleChange(e)}  placeholder="Drop your message here *" 
								required name="message">
							</textarea>
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
						<h1 className="msg-returned"></h1>
					</form>
				</div>
				 
			</div>
		);
	}	

}
export default Contact;


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


