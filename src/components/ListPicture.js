import React from 'react';
import Picture from './Picture';
import NoPicture from './NoPicture';

const ListPicture = props => {

	const results = props.data;
	let pictures;
		 if (results.length > 0) {

		 	pictures = results.map( (pic, index) => {
							let average = pic.height/pic.width;
							if ( average <= 0.72 && average >= 0.60 ) { 
								return 	<Picture 
											url			={pic.urls.small}
											author		={pic.user.name}
											description	={(pic.description === null ? "Description not available" : pic.description)}
											date		={pic.created_at.split("T")[0]}
											classStyle  ="eight"
											key			={pic.id}
											linkUser	={pic.user.links.html}
											linkPhoto	={pic.links.html}	
										/>
							}
						});
		} else {
			pictures = <NoPicture />;		
		}

						
		return pictures;
}

export default ListPicture; 