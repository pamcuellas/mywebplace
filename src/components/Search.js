import React, { Component } from 'react';
import { createReq } 		from "../services/api";
import { ReCaptcha } from 'react-recaptcha-google';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onSearchChange	= this.onSearchChange.bind(this);	
	    this.verifyCallback = this.verifyCallback.bind(this);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	}

	onSearchChange = e => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.target.reset();
		createReq('Gallery-' + this.state.value);
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
			<form className="search" onSubmit={this.handleSubmit}>
				<input className="search-input"
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					autoComplete="off"
					placeholder="Search some photos here ..."
				/>
				<button type="submit" className="search-icon-btn">
					<i className="fas fa-search"></i>
				</button>
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
			</form>
		);
	}
}

export default Search;
