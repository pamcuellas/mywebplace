import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import { ReCaptcha } from 'react-recaptcha-google';



class Contact extends Component { 

	constructor(props, context) {
		super(props, context);
	    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
	    this.verifyCallback = this.verifyCallback.bind(this);
	}


	componentDidMount(){

		if (this.myCaptcha) {
	        console.log("started, just a second...")
	        this.myCaptcha.reset();
	        //this.myCaptcha.execute();
	    }
		var words = document.querySelectorAll('.word');
		animaWords(words);
	}

  onLoadRecaptcha() {
      if (this.myCaptcha) {
          this.myCaptcha.reset();
          //this.myCaptcha.execute();
      }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }

	componentWillUnmount() {
		clearTimeout();
	}

	render() {  

		const KEY = process.env.REACT_APP_KEY;	

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
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.myCaptcha = el;}}
            size="normal"
            render="explicit"
            sitekey={KEY}
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component. <br/>
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>



<hr />
<form action="?" method="POST">
	<div className="g-recaptcha" data-sitekey={KEY}></div>
	<input type="email" placeholder="Email" />
	<a href="#" className="btn">Subscribe</a>
	<input type="submit" value="Submit" />
</form>
				</div>
			</div>

		);
	}	

}
export default Contact;


/*
					<form>
						<input type="email" placeholder="Email" />
						<a href="#" className="btn">Subscribe</a>
					</form>
*/