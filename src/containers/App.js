import React, { Component } from 'react';
import Navbar from './Navbar';
import Page from './Page';
import Footer from './Footer';
import PopupCookiePolicyMsg from '../components/PopupCookiePolicyMsg';
import { loadReCaptcha } from 'react-recaptcha-google';

class App extends Component {

	constructor(props) {
		super(props);
		const initialState = 'Home' ;
		this.state = {
			currPage: initialState,
			scrollPosition: 0,
			showCookieMessage: true,
			menuControl: {
				image: <i className="fas fa-minus" ></i>
			}
		};
		this.onHideMenu = this.onHideMenu.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.windowOnClick= this.windowOnClick.bind(this);
		this.setBodyVisible = this.setBodyVisible.bind(this);
		this.showCookiePoliceMsg = this.showCookiePoliceMsg.bind(this);
	}

	componentWillMount(){
	 	document.querySelector('body').style.visibility = 'hidden';
		document.querySelector('body').style.background = '#000';
	}

	componentDidMount(){
		loadReCaptcha();
	 	this.handleMenu("visible", "invisible");
	 	setTimeout(this.setBodyVisible, 130); 
	}

    toggleModal = () => {
        // Hide Cookie Police message
    	var modal = document.querySelector(".modal");
        modal.classList.remove("show-modal");
        // Set state to stop show Cookie Police message and do not render it anymore.
        this.setState({showCookieMessage: false});
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
	    window.addEventListener("click", this.windowOnClick);	

	    // Show Cookie Policy Message
	    modal.classList.toggle("show-modal");
	}

	setBodyVisible = () => {
		document.querySelector('body').style.visibility = 'visible';
	}

	handleMenu = (classToRemove, classToAdd, page = this.state.currPage) => {
 		let linkMenu 			= document.querySelectorAll(".secondmenu .linkMenu");
 		let navbarBackground 	= 'transparent';
 		let footerBackground 	= 'transparent';

 		// Show/hide navbar
		linkMenu.forEach((e, i, a) => {
			e.classList.remove(classToRemove);
			e.classList.add( classToAdd);
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
		// Hide/Show Navbar and Footer.
		if (e.target.className.includes('fa-minus')) {
			// Hide
 			this.handleMenu("visible", "invisible");
 		} else {
 			// Show up
 			this.handleMenu("invisible", "visible");
 		}
	}

	onChangePage (page) {
		if (page === 'Home' && this.state.currPage !== page) {
			this.handleMenu('visible', 'invisible', page);
			document.querySelector('body').style.background = 'black';
		} else if (page !== 'Home') {
			this.handleMenu('invisible', 'visible', page);
			document.querySelector('body').style.background = 'white';
			// If did not yet, pop up the Cookie Message. 
			if (this.state.showCookieMessage) {
	 			setTimeout(this.showCookiePoliceMsg, 3000); 
			}

		}		
		this.setState({currPage: page});
	};


	render() {
		return(
			
				<div className="app">
					<div className="container">	
						<div className="main">	
							<Navbar onChangePage={this.onChangePage} 
									onHideMenu={this.onHideMenu} 
									menuControl={this.state.menuControl}/>
							{ this.state.showCookieMessage && <PopupCookiePolicyMsg /> }
							<Page currPage={this.state.currPage}/>
						</div>
					</div>
					<Footer />
				</div>
			
			);
	}

}

export default App;



