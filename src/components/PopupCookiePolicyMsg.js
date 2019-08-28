/*jshint esversion: 6 */
import React, { Component } from 'react';
import '../css/popupCookiePolicyMsg.css';

class PopupCookie extends Component {

	render() {

	return ( 
	    <div className="modal">
	        <div className="modal-content">
	            <div className="modal-title">
					<h1>Forgive me! I have to.</h1>
					<h1> It is privacy legislation for websites.</h1>
		            <h1>I use cookies and similar technologies to run this website and help me understand how you use it.</h1>
		        </div>    
	        	<a className="popup-cookie" href="https://termsfeed.com/cookies-policy/3b5607a3c360a5a1b8ac4b372c240605" target="_blank" rel="noopener noreferrer">Click here to see our cookie policy.</a>
	        	<div className="close-button">
		        	<i className="fas fa-check-circle"></i> 
		        	<span>Got it!</span>
		        </div>		
	        </div>
	    </div>
		)
	}
}

export default PopupCookie;
