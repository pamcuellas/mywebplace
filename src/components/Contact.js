import React, { Component } from 'react';  
import animaWords 			from '../services/animaWords';
import { loadReCaptcha } 	from 'react-recaptcha-google';
import { ReCaptcha } 		from 'react-recaptcha-google';
import axios 				from 'axios';



class Contact extends Component { 

	constructor(props, context) {
		super(props, context);
		this.state = {
			captchaExpired: true,
			captchaToken:''
		}
	    this.verifyCallback = this.verifyCallback.bind(this);
	    this.handlingErrors = this.handlingErrors.bind(this);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	    this.recaptchaExpired = this.recaptchaExpired.bind(this);
	}


	componentDidMount(){
		 loadReCaptcha();
		if (this.Captcha) {
	        console.log("started, just a second...")
	        this.Captcha.reset();
	        //this.Captcha.execute();
	    }
		var words = document.querySelectorAll('.word');
		animaWords(words);
	}

	onLoadRecaptcha() {
		console.log("onLoadRecaptcha");
	  if (this.Captcha) {
	      this.Captcha.reset();
	      //this.Captcha.execute();
	  }
	}

	verifyCallback(recaptchaToken) {
		if (recaptchaToken.length > 0) {
			// Lets verify token
			const googleURL = process.env.REACT_APP_GOOGLE_API_URL;
			// const KEY = process.env.REACT_APP_TST_SECRET_SITE_KEY;
			const KEY = process.env.REACT_APP_HRK_SECRET_SITE_KEY;
			console.log("PARAMS " + googleURL + " " + KEY );

			axios({
				method: 'POST',
	            url: `${googleURL}`,
	            withCredentials: true,
	            params: {
	                secret: `${KEY}`,
	                response: recaptchaToken
	            },
	            headers: {
	            	"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
	            }
			})
			.then( data => {
					console.log("======================================================================== ", data);
			})
			.catch( this.handlingErrors );

		} 




/*
			axios
			.get(`https://api.unsplash.com/search/photos/?page=${page}&per_page=30&query=${query}&client_id=${KEY}`)	
			.then(data => {
				this.setState({ pictures: data.data.results, query: query });
			})
			.catch(err => {
				console.log('Unfortunately we got something wrong! ', err);
			});		
*/
/*
			axios.post(
				`${googleURL}`,
				{
					data: {
						secret: `${KEY}`,   // Where postId is the  field name, much better than use https://jsonplaceholder.typicode.com/comments?postId=2 on the URL.
						response: recaptchaToken
					},
					
					headers: {	
								contentType: 'application/json', //application/x-www-form-urlencoded',
								'Access-Control-Allow-Origin': '*',
								'Access-Control-Allow-Methods': 'POST'
							}
				} 
			)
			.then( data => {
					console.log("======================================================================== ", data);
			})
			.catch( this.handlingErrors );
		}
*/

/*
 $.ajax({
        type: "POST",
        url: 'https://www.google.com/recaptcha/api/siteverify',
        data: {"secret" : "(your-secret-key)", "response" : response, "remoteip":"localhost"},
        contentType: 'application/x-www-form-urlencoded',
        success: function(data) { console.log(data); }
    });
*/
	// Here you will get the final recaptchaToken!!!  
	console.log("<= your recaptcha token", recaptchaToken );

	}

		/* Axios can distinguish errors */ 
		handlingErrors = (error) => {
			if ( error.response ) {
				console.log("Something was wrong with RESPONSE ==>", error.response.status);
			} else if ( error.request ) {
				console.log("Something was wrong with REQUEST ==>", error.request);
			} else { 
				console.log("Something was wrong ==>", error.message);
			}
		} 



	recaptchaExpired(){
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
				<hr></hr>
				<h3 className="title">ReCaptcha Here</h3>	
				<div>
					<ReCaptcha
					ref={(el) => {this.Captcha = el;}}
					size="compact"
					render="explicit"
					theme="dark"
					sitekey={`${KEY}`}
					onloadCallback={this.onLoadRecaptcha}
					verifyCallback={this.verifyCallback}
					expiredCallback={this.recaptchaExpired}
					/>
					<code>
					1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
					2. Check <strong>console</strong> to see the token.
					</code>
				</div>
				<hr />
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