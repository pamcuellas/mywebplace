import React, { Component } from 'react';
import './popupCookie.css';

class PopupCookie extends Component {

	render() {

		const { showCookiePolice } = this.props;
		return (
			    <div className="modal">
			        <div className="modal-content">
			            <div className="modal-title">
				            <h1>We use cookies and similar technologies to run this website and help us understand how you use it.</h1>
				            <span className="close-button"><i className="far fa-times-circle"></i></span>
				        </div>    
			        	<a className="popup-cookie" href="#" target="_blank" rel="noopener noreferrer" onClick={ ( ) => showCookiePolice()} >Click here to see our cookie policy.</a>
			        </div>
			    </div>
			)
	}

}

export default PopupCookie;

//    <button className="trigger">Click here to trigger the modal!</button>
