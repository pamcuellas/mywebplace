import React, { Component } from 'react';
import Navbar from './Navbar';
import Page from '../containers/Page';
import Footer from '../containers/Footer';
// import manageNavbar from '../services/manageNavbar'; 

class App extends Component {

	constructor(props) {
		super(props);
		const initialState = 'Home' ;
		this.state = {
			currPage: initialState,
			scrollPosition: 0,
			menuControl: {
				image: <i className="fas fa-minus" ></i>
			}
		};
		this.onHideMenu = this.onHideMenu.bind(this);
		this.onChangePage = this.onChangePage.bind(this);
		this.handleMenu = this.handleMenu.bind(this);
	}

	componentWillMount(){
	 	document.querySelector('body').style.background = 'black';
	}

	componentDidMount(){
	 	this.handleMenu("visible", "invisible");
	 		 	//manageNavbar ();
	}

	handleMenu = (classToRemove, classToAdd, page = this.state.currPage) => {

 		let linkMenu 			= document.querySelectorAll(".secondmenu .linkMenu");
 		let navbarBackground 	= 'transparent';
 		let footerBackground 	= 'transparent';

 		// Show/hide navbar
		linkMenu.forEach((e, i, a) => {
			e.classList.remove(classToRemove);
			e.classList.add( classToAdd);
			//e.classList.replace(classToRemove, classToAdd);
		});

		// Hide/Show footer
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
			console.log("TRUE/FALSE page ", page);
			if (page !== 'Home') {
		 		navbarBackground	=  '#454549'; /*'#191919'; /* '#f00a36';*/ 
		 		footerBackground 	=  '#454549'; /*#191919'; /*'#363636'; /* #204056'; */
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
			console.log("TRUE page ", page);
		} else if (page !== 'Home') {
			console.log("FALSE page ", page);
			this.handleMenu('invisible', 'visible', page);
			document.querySelector('body').style.background = 'white';
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
							<Page currPage={this.state.currPage}/>
						</div>
					</div>
					<Footer />
				</div>
			
			);
	}

}

export default App;



