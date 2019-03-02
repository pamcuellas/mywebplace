import React from 'react';
const Picture = props => {
	if (props.classStyle === "fifteen") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="t"></div>
					<div className="r"></div>
					<div className="b"></div>
					<div className="l"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>
		)
	} else if (props.classStyle === "five") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="tl5"></div>
					<div className="br5"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>
		)
	} else if (props.classStyle === "six") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="tl6"></div>
					<div className="tr6"></div>
					<div className="bl6"></div>
					<div className="br6"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>
		)
	} else if (props.classStyle === "ten") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="ten i"></div>
					<div className="ten ii"></div>
					<div className="ten iii"></div>
					<div className="ten iv"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>		
		)
	} else if (props.classStyle === "eleven") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
				<div className="eleven i"></div>
				<div className="eleven ii"></div>
				<div className="eleven iii"></div>
				<div className="eleven iv"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>		
		)
	} else if (props.classStyle === "twelve") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="twelve i"></div>
					<div className="twelve ii"></div>
					<div className="twelve iii"></div>
					<div className="twelve iv"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>		
		)
	} else if (props.classStyle === "thirteen") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="thirteen-l"></div>
					<div className="thirteen-r"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>		
		)
	} else if (props.classStyle === "fourteen") {
		return ( 
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
					<div className="fourteen-l"></div>
					<div className="fourteen-r"></div>
					<div className="details">
						<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
						<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
						<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
						<h6>{props.date}</h6>
					</div>
				</div>
			</div>		
		)
	} else {
		return 	(
			<div className="bg-items" key={props.id}>
				<div className="items" style={{ backgroundImage: `url(${props.url})` }}>
				<div className={`${props.classStyle}`}></div>
				<div className="details">
					<h3>Photo by <a href={`${props.linkUser}`} target="_blank" rel="noopener noreferrer">{props.author}.</a></h3>
					<p><a href={`${props.linkPhoto}`} target="_blank" rel="noopener noreferrer">{props.description}.</a></p>
					<p>Click the links to see on  <a href="http://unsplash.com/" target="_blank" rel="noopener noreferrer"> Unsplash </a>.</p>
					<h6>{props.date}</h6>
				</div>
				</div>
			</div> 
		)
	}
}

export default Picture; 


