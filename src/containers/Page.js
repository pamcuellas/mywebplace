import React from 'react';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import About from '../components/About';
import Gallery from '../components/Gallery';


const Page = ({currPage}) => (

					<div  className="content">  
						{ (currPage === 'Projects') ? <Projects /> : 
							(currPage === 'About') ? <About /> : 
								(currPage === 'Resume') ? <Resume  /> : 
									(currPage === 'Contact') ? <Contact /> : 
										(currPage === 'Gallery') ?  <Gallery /> :  <Home/> }
					</div>

	);

export default Page;

