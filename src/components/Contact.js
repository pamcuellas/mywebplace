import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import { loadReCaptcha } from 'react-recaptcha-google';
import { ReCaptcha } from 'react-recaptcha-google';



class Contact extends Component { 

	constructor(props, context) {
		super(props, context);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	    this.verifyCallback = this.verifyCallback.bind(this);
	}


	componentDidMount(){
		 loadReCaptcha();
		if (this.myCaptcha) {
	        console.log("started, just a second...")
	        this.myCaptcha.reset();
	        //this.myCaptcha.execute();
	    }
		var words = document.querySelectorAll('.word');
		animaWords(words);
	}

  onLoadRecaptcha() {
  	console.log("onLoadRecaptcha");
      if (this.myCaptcha) {
          this.myCaptcha.reset();
          //this.myCaptcha.execute();
      }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log("<= your recaptcha token", recaptchaToken )
  }

	componentWillUnmount() {
		clearTimeout();
	}

	render() {  

		//const KEY = process.env.REACT_APP_TST_SITE_KEY;	
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
				<div className="content-content-area">
					<h3 className="title">ReCaptcha Here</h3>	
      <div>
        <ReCaptcha
            ref={(el) => {this.myCaptcha = el;}}
            size="normal"
            render="explicit"
            theme="dark"
            sitekey={`${KEY}`}
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>



<hr />

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