import React from 'react';

const Picture = props => 

				  <div className="bg-items" key={props.id}>
				    <div className="items" style={{ backgroundImage: `url(${props.url})` }}>
				      <div className={`${props.classStyle}`}></div>
				      <div className="details">
				        <h3><a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">Photo by {props.author} </a></h3>
				        <p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
				        <h6>{props.date}</h6>
				      </div>
				    </div>
				  </div> ;

export default Picture; 