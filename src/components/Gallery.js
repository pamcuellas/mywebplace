import React, { Component } from 'react';  
import animaWords from '../services/animaWords';
import ListPicture from './ListPicture';
import axios from 'axios';

import './gallery.css';



// import img from '../images/laptop-with-function-Luca-Bravo.jpg'; 

class Gallery extends Component {

	constructor (props) {
		super(props);
		this.state = {
			pictures: []
		};
	}

	componentDidMount(){
		var words = document.querySelectorAll('.word');
		animaWords(words);
		this.getNewPictures();
	}

	componentWillUnmount() {
		clearTimeout();
	}

	getNewPictures = ( query = 'canada') => {
			axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${query}&client_id=5eba06c3d669accb3214df13457098d84b3b0882e770c8c0648aa280c8593e56`
			)	
			.then(data => {
				this.setState({ pictures: data.data.results });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
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
				<hr></hr>
				<div className="gallery">
					<ListPicture data={this.state.pictures} />
				</div>
			</div>
		);
	}

}
export default Gallery;	