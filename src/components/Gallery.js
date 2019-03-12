import React, { Component } from 'react';  
import ListPicture 			from './ListPicture';
import animaWords 			from '../services/animaWords';
import Search 				from './Search';
import { apiCall } 			from "../services/api";
import './gallery.css';

class Gallery extends Component {

	constructor (props) {
		super(props);
		this.state = { pictures: ['starting'],
						query: 'canada'
	    };
		this.onSearch		= this.onSearch.bind(this);
		this.getNewPictures = this.getNewPictures.bind(this);
	}

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		this.getNewPictures( this.state.query );
	}

	onSearch(value) {
		this.getNewPictures(value);
	}

	componentWillUnmount() {
		clearTimeout();
	}

	getNewPictures = (query = 'moon') => {
		const KEY = process.env.REACT_APP_KEY;
		let page = Math.floor(Math.random() * 4);
		page = (page === 0) ? 1 : page; 	
		const url = `https://api.unsplash.com/search/photos/?page=${page}&per_page=30&query=${query}&client_id=${KEY}`;
		apiCall("get", url)
			.then(( data ) => { 
			 	this.setState({ pictures: data.results, query: query });
			} ) 	
			.catch( err => { 
			 	console.log('Unfortunately we got something wrong! ', err);
		} );
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
					{this.state.pictures[0] !== 'starting' ? /* To solve the problem of render ListPicture twice */ 
						( <ListPicture data={this.state.pictures} query={this.state.query}/> )
						: 
						( <div></div> )
					}
				</div>
			</div>
		);
	}
}
export default Gallery;	