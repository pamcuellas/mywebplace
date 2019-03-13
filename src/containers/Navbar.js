import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component {
	render(){

		const {onChangePage, onHideMenu,menuControl} = this.props;

		return( 
				<div className="navbar">
					<div className="secondmenu">
						<span className="linkMenu visible" onClick={ ( ) => onChangePage('Home') }>Home</span>
						<span className="linkMenu visible" onClick={ ( ) => onChangePage('Profile') }>Profile</span>
						<span className="linkMenu visible" onClick={ ( ) => onChangePage('Projects') }>Projects</span>
						<span className="linkMenu visible" onClick={ ( ) => onChangePage('Gallery') }>Gallery</span>
						<span className="linkMenu visible" onClick={ ( ) => onChangePage('Resume') }>Resume</span>
						<span className="linkMenu visible" onClick={ ( ) => onChangePage('Contact') }>Contact</span>
					</div>
					<div className="firstmenu">
						<span className="linkMenu" onClick={ (e) => onHideMenu(e) }>{menuControl.image}</span>
					</div>
				</div>
		);
	}
}

export default Navbar;

