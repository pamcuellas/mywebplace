import React from 'react';
import Picture from './Picture';
import NoPicture from './NoPicture';

const ListPicture = props => {

	const results = props.data;
	let classArray = ["eight","fifteen","nine","twelve","two","three","four","five","six","seven","one","ten","eleven","thirteen","fourteen"];
	let count = 0;
	//console.log("props.data ", props.data);

	let pictures;
	if (results.length > 0) {
	 	pictures = results.filter( p => ( p.height/p.width <= 0.72 && p.height/p.width >= 0.60 ) )
	 					  .map( p => 
							 	<Picture 
										url			={p.urls.small}
										author		={p.user.name}
										description	={(p.description === null ? "Description not available" : p.description)}
										date		={p.created_at.split("T")[0]}
										classStyle  ={classArray[ (count > 14 ? 0 : count++) ]}
										key			={p.id}
										linkUser	={p.user.links.html}
										linkPhoto	={p.links.html}	
								/>
							);
	} else {
		pictures = <NoPicture query={props.query}/>;		
	}
						
		return pictures;
}

export default ListPicture; 