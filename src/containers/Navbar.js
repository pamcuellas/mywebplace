/*jshint esversion: 6 */
import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component {
	render(){

		const {onChangePage, onHideMenu,menuControl} = this.props;

		return( 
				<div className="navbar">
					<div className="secondmenu">
						<span className="linkMenu visible" onClick={ (e) => onChangePage(e, 'Home') }>Home</span>
						<span className="linkMenu visible" onClick={ (e) => onChangePage(e, 'About') }>About</span>
						<span className="linkMenu visible" onClick={ (e) => onChangePage(e, 'Projects') }>Projects</span>
						<span className="linkMenu visible" onClick={ (e) => onChangePage(e, 'Gallery') }>Gallery</span>
						<span className="linkMenu visible" onClick={ (e) => onChangePage(e, 'Contact') }>Contact</span>
						<span className="linkMenu visible" onClick={ (e) => onChangePage(e, 'Webinfo') }>WebInfo</span>
					</div>
					<div className="firstmenu">
						<span className="linkMenu" onClick={ (e) => onHideMenu(e) }>{menuControl.image}</span>
					</div>
				</div>
		);
	}
}

export default Navbar;

