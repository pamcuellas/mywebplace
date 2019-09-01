/*jshint esversion: 6 */
import React, { Component } from 'react';
import { createReq } 		from "../services/api";
import { ReCaptcha } from 'react-recaptcha-google';

class Resume extends Component {
	constructor(props) {
		super(props);
		// this.state = { value: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.onSearchChange	= this.onSearchChange.bind(this);	
	    this.verifyCallback = this.verifyCallback.bind(this);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	}

	// onSearchChange = e => {
	// 	this.setState({ value: e.target.value });
	// };

	handleSubmit = e => {
		e.preventDefault();
		// this.props.onSearch(this.query.value);
		// e.target.reset();
		createReq('Download Resume');
	};

	componentDidMount(){
		// loadReCaptcha();
		if (this.Captcha) {
	        // console.log("started, just a second...")
	        this.Captcha.reset();
	        this.Captcha.execute();
	    }
	}    

	onLoadRecaptcha() {
		if (this.Captcha) {
			this.Captcha.reset();
			this.Captcha.execute();
		}
	}

	verifyCallback(recaptchaToken) {

	}

	render() {

		// const KEY = process.env.REACT_APP_TST_SITE_KEY;	
		const KEY = process.env.REACT_APP_HRK_SITE_KEYI;	
		return (
				<div className="personaldata"> 
					<p className="status">I am currently attending the 
						<a href="https://bootcamp.learn.utoronto.ca/data/" target="_blank" rel="noopener noreferrer"> Data Analytics Bootcamp at University of Toronto </a>
						and available for new opportunities.
					</p>
					<div className="recaptcha">
						<ReCaptcha
						ref={(el) => {this.Captcha = el;}}
						size="invisible"
						render="explicit"
						theme="dark"
						sitekey={`${KEY}`}
						onloadCallback={this.onLoadRecaptcha}
						verifyCallback={this.verifyCallback}
						/>
					</div>
				</div>
		);
	}
}

export default Resume;
