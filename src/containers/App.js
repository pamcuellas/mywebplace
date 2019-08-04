/*jshint esversion: 6 */
import React, { Component } from 'react';
import Navbar 				from './Navbar';
import Page 				from './Page';
import Footer 				from './Footer';
import PopupCookiePolicyMsg from '../components/PopupCookiePolicyMsg';
import { createReq } 		from "../services/api";
import { loadReCaptcha } 	from 'react-recaptcha-google';

class App extends Component {

	constructor(props) {
		super(props);
		const initialState = 'Home' ;
		this.state = {
			currPage: initialState,
			scrollPosition: 0,
			showCookieMessage: true,
			timeoutSetted: false,
			selMenuColor: '#e08181',
			unselMenuColor: '#FFFFFF',
			menuControl: {
				image: <i className="fas fa-minus" ></i>
			}
		};
		this.onHideMenu = this.onHideMenu.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.windowOnClick= this.windowOnClick.bind(this);
		this.showCookiePoliceMsg = this.showCookiePoliceMsg.bind(this);
	}

	componentWillMount(){
		document.querySelector('body').style.background = '#000';
	}

	componentDidMount(){
		loadReCaptcha();
	 	this.handleMenu("visible", "invisible");
		createReq( this.state.currPage ); 	 	
		document.querySelector(".linkMenu").style.color = this.state.selMenuColor;
	}

    toggleModal = () => {
    	// console.log("toggleModal")	
        // Hide Cookie Police message
    	var modal = document.querySelector(".modal");
        modal.classList.remove("show-modal");
		// Stop window listener. Maybe this is not the right place to do this due to this function
		// was called inside the window listenner.
		window.removeEventListener("click", this.windowOnClick);
		this.setState({ showCookieMessage: false});
    }

    windowOnClick = (event) => {
    	var modal = document.querySelector(".modal");
        if (event.target === modal) {
            this.toggleModal();
        }
    }

	showCookiePoliceMsg = () => { 
		var modal = document.querySelector(".modal");
	    var closeButton = document.querySelector(".close-button");
	    // Events to close Cookie Policy Message
		closeButton.addEventListener("click", this.toggleModal);
		// Let make this popu really modal. We do not need the line below.
	    // window.addEventListener("click", this.windowOnClick);	
	    // Show Cookie Policy Message
	    modal.classList.toggle("show-modal");
	}

	handleMenu = (classToRemove, classToAdd, page = this.state.currPage) => {
 		let navbarBackground 	= 'transparent';
 		let footerBackground 	= 'transparent';
 		// Show/hide navbar
 		const linkMenu = document.querySelectorAll(".secondmenu .linkMenu");
		linkMenu.forEach((e, i, a) => {
			e.classList.remove(classToRemove);
			e.classList.add( classToAdd);
			if (this.state.currPage !== page) e.style.color = this.state.unselMenuColor;
		});

		// Show/hide/ footer
 		const social = document.querySelectorAll(".social");
		social.forEach((e, i, a) => {
			e.classList.remove(classToRemove);
			e.classList.add( classToAdd);
		});
		const courtesy = document.querySelectorAll(".courtesy");
		courtesy.forEach((e, i, a) => {
			e.classList.remove(classToRemove);
			e.classList.add( classToAdd);
		});

		// Change menuControl image, body, navbar and footer backgrounds based on visible/invisible options and page.
		if (classToAdd === "visible") {
			this.setState( state => ({ menuControl:  {image: <i className="fas fa-minus" ></i>} }));
			if (page !== 'Home') {
		 		navbarBackground	=  '#454549';  
				footerBackground 	=  '#454549';  
			}
		} else {
			this.setState( state => ({ menuControl:  {image: <i className="fas fa-bars color" ></i>} }));
		}
		document.querySelector('.navbar').setAttribute("style", "background:" + navbarBackground);
		document.querySelector('footer').setAttribute("style", "background:" + footerBackground);
	}

	onHideMenu(e) {
		// Hide/Show Navbar.
		if (e.target.className.includes('fa-minus')) {
			// Hide
 			this.handleMenu("visible", "invisible");
 		} else {
 			// Show up
 			this.handleMenu("invisible", "visible");
 		}
	}

	onChangePage (e, page) {

		if (page === 'Home' && this.state.currPage !== page) {
			this.handleMenu('visible', 'invisible', page);
			document.querySelector('body').style.background = '#000';
		} else if (page !== 'Home') {
			this.handleMenu('invisible', 'visible', page);
			document.querySelector('body').style.background = '#FFF';
			// Show Cookie Police Message if did not yet.
			if (!this.state.timeoutSetted) {
				//Pop up the Cookie Message after sometime. 
				setTimeout(this.showCookiePoliceMsg, 3000); 
				this.setState({timeoutSetted: true});
			}
	
			if (page === 'Contact') {
				document.querySelector('body').style.background = '#262626';
			}
		}		
		this.setState({currPage: page});
		e.target.style.color = this.state.selMenuColor;
		createReq( page ); 
	};
	render() {
		return(
				<div className="app">
						<div className="main">	
							<Navbar onChangePage={this.onChangePage} 
									onHideMenu={this.onHideMenu} 
									menuControl={this.state.menuControl}/>
							{ this.state.showCookieMessage && <PopupCookiePolicyMsg /> }
							<Page currPage={this.state.currPage}/>
						</div>
					<Footer />
				</div>
			);
	}
}

export default App;



