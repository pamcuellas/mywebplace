import React, { Component } from 'react';

class Navbar extends Component {
	render(){

		const {onChangePage, onHideMenu,menuControl} = this.props;

		return( 
				<div className="navbar">
					<div className="secondmenu">
						<a className="linkMenu visible" href="#" onClick={ ( ) => onChangePage('Home') }>Home</a>
						<a className="linkMenu visible" href="#" onClick={ ( ) => onChangePage('Profile') }>Profile</a>
						<a className="linkMenu visible" href="#" onClick={ ( ) => onChangePage('Projects') }>Projects</a>
						<a className="linkMenu visible" href="#" onClick={ ( ) => onChangePage('Gallery') }>Gallery</a>
						<a className="linkMenu visible" href="#" onClick={ ( ) => onChangePage('Resume') }>Resume</a>
						<a className="linkMenu visible" href="#" onClick={ ( ) => onChangePage('Contact') }>Contact</a>
					</div>
					<div className="firstmenu">
						<a className="linkMenu" href="#" onClick={ (e) => onHideMenu(e) }>{menuControl.image}</a>
					</div>
				</div>
		);
	}
}

export default Navbar;

