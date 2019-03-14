import React, { Component } from 'react';  
import animaWords 			from '../services/animaWords';
import { apiCall } 			from "../services/api";
// import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';
import { ReCaptcha } from 'react-recaptcha-google';
import '../css/contact.css';

class Contact extends Component { 

	constructor(props, context) {
		super(props, context);
		this.state = {
			human: false,
			recaptchatoken:'',
			firstname: '',
			lastname: '',
			email: '',
			message: ''
		}
		this.onSubmit = this.onSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
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
			apiCall("post", process.env.REACT_APP_PAMZCAPI_CONTACT, 
					this.state
					)
					.then(( data ) => { 
						if (data._id !== undefined) {
							msg.textContent = "Thank you! Your message has been successfully created. We will contact you as soon as possible." ;
						} else if (data.message !== undefined) {
							msg.textContent = "Sorry, something goes wrong [ " +  data.message + "]."; 
						} else {	
							msg.textContent = "Sorry, something goes wrong.";
						}
					}) 	
					.catch( err => { 
						msg.textContent = "Sorry, something was wrong ==> " + err.message;
			});
			e.target.reset();
		}
	}

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		if (this.Captcha) {
	        this.Captcha.reset();
	    }
	}

	onLoadRecaptcha() {
	  if (this.Captcha) {
	      this.Captcha.reset();
	  }
	}

	verifyCallback(recaptchaToken) {
		if ( recaptchaToken.length > 0 ) { 
			this.setState({ human: true, recaptchatoken: recaptchaToken });
		}	else {
			// Message
			this.setState({ human: false, recaptchatoken: '' });
		}
	}

	setRecaptchaExpired(){
		this.setState({ human: false, recaptchatoken: '' });
	}

	componentWillUnmount() {
		clearTimeout();
	}

	render() {  
		const KEY = process.env.REACT_APP_TST_SITE_KEY;	
		// const KEY = process.env.REACT_APP_HRK_SITE_KEY;	
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
						<span className="msg-returned"></span>
					</form>
				</div>
				 
			</div>
		);
	}	

}
export default Contact;
