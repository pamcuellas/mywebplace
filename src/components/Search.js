import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.onSearchChange	= this.onSearchChange.bind(this);	
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onSearchChange = e => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		console.log("onClick ", e.target);

		console.log(" sdfsdfssd", document.querySelector('.search-input'));
		e.target.reset();
	};

	render() {
		return (
			
			<form className="search" onSubmit={this.handleSubmit}>
				<input className="search-input"
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					autoComplete="off"
					placeholder="Type your search here ..."
				/>
				<button type="submit" className="search-icon-btn">
					<i className="fas fa-search"></i>
				</button>
			</form>
		);
	}
}

export default Search;
/*
				<button type="submit" id="submit" className="search-btn">
					<i className="fas fa-search"></i>
				</button>
*/

/*
			<div className="search">
				<input className="search-input"
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Type your search here ..."
				/>
				<a className="search-icon" href="#"  target="_blank" rel="noopener noreferrer" onClick={this.onClick}>
					<i className="fas fa-search"></i>
				</a>
			</div>			*/