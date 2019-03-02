import React, { Component } from 'react';  
import ListPicture 			from './ListPicture';
import animaWords 			from '../services/animaWords';
import Search 				from './Search';
import axios 				from 'axios';
import './gallery.css';

class Gallery extends Component {

	constructor (props) {
		super(props);
		this.state = { pictures: ['starting'],
						query: 'canada'
	    };
		this.getNewPictures = this.getNewPictures.bind(this);
		this.onSearch		= this.onSearch.bind(this);
	}

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);

		this.getNewPictures( this.state.query );
		console.log("**** Gallery componentDidMount");
	}

	onSearch(value) {
		console.log("**** Gallery onSearch");
		this.getNewPictures(value);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	getNewPictures = (query = 'moon') => {

		const KEY = process.env.REACT_APP_KEY;

		let page = Math.floor(Math.random() * 4);
		page = (page === 0) ? 1 : page; 	
		axios
		.get(`https://api.unsplash.com/search/photos/?page=${page}&per_page=30&query=${query}&client_id=${KEY}`)	
		.then(data => {
			this.setState({ pictures: data.data.results, query: query });
		})
		.catch(err => {
			console.log('Unfortunately we got something wrong! ', err);
		});		
	}

	render() { 
		

		console.log("**** Gallery render()");
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
				{this.state.pictures[0] !== 'starting' ? 
					( <ListPicture data={this.state.pictures} /> )
					: 
					( <div></div> )
				}
				</div>
			</div>
		);
	}

}
export default Gallery;	