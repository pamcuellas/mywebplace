import React from 'react';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Profile from '../components/Profile';
import Gallery from '../components/Gallery';


const Page = ({currPage, onTitle}) => (

					<div  className="content">  
						{ (currPage === 'Projects') ? <Projects /> : 
							(currPage === 'Profile') ? <Profile /> : 
								(currPage === 'Resume') ? <Resume  /> : 
									(currPage === 'Contact') ? <Contact /> : 
										(currPage === 'Gallery') ? <Gallery /> : <Home/> }
					</div>

	);

export default Page;

