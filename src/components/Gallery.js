import React, { Component } from 'react';  
import ListPicture 			from './ListPicture';
import animaWords 			from '../services/animaWords';
import Search 				from './Search';
import axios 				from 'axios';

import './gallery.css';


class Gallery extends Component {

	constructor (props) {
		super(props);
		this.state = { pictures: [],
						query: 'canada'
	    };
		this.getNewPictures = this.getNewPictures.bind(this);
		this.onSearch		= this.onSearch.bind(this);
	}

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		const query = this.state.query;
		this.getNewPictures( query );
	}

	onSearch(value) {
		this.getNewPictures(value);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	getNewPictures = (query) => {
		let page = Math.floor(Math.random() * 4);
		page = (page === 0) ? 1 : page=page; 	
		console.log("PAGE = " + page);
		axios
		.get(`https://api.unsplash.com/search/photos/?page=${page}&per_page=30&query=${query}&client_id=5eba06c3d669accb3214df13457098d84b3b0882e770c8c0648aa280c8593e56`)	
		.then(data => {
			this.setState({ pictures: data.data.results, query: query });
		})
		.catch(err => {
			console.log('Unfortunately we got something wrong! ', err);
		});		
	}

	render() { 
		 return(

			<div className="content">
				<div className="title">
					<p>
						<span className="word">
							<span className="letter">G</span>
							<span className="letter">a</span>
							<span className="letter">l</span>
							<span className="letter">l</span>
							<span className="letter">e</span>
							<span className="letter">r</span>
							<span className="letter">y</span>
						</span>
						<span className="word">
							<span className="letter">G</span>
							<span className="letter">a</span>
							<span className="letter">l</span>
							<span className="letter">l</span>
							<span className="letter">e</span>
							<span className="letter">r</span>
							<span className="letter">y</span>
						</span>
						<span className="word">
							<span className="letter">G</span>
							<span className="letter">a</span>
							<span className="letter">l</span>
							<span className="letter">l</span>
							<span className="letter">e</span>
							<span className="letter">r</span>
							<span className="letter">y</span>
						</span>
			  		</p>
				</div>
				<Search onSearch={this.onSearch}/>
				<div className="gallery">
					<ListPicture data={this.state.pictures} query={this.state.query}/>
				</div>
			</div>
		);
	}

}
export default Gallery;	