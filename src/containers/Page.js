/*jshint esversion: 6 */
import React from 'react';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Webinfo from '../components/Webinfo';
import About from '../components/About';
import Gallery from '../components/Gallery';


const Page = ({currPage}) => (

					<div  className="content">  
						{ (currPage === 'Projects') ? <Projects /> : 
							(currPage === 'About') ? <About /> : 
								(currPage === 'Webinfo') ? <Webinfo  /> : 
									(currPage === 'Contact') ? <Contact /> : 
										(currPage === 'Gallery') ?  <Gallery /> :  <Home/> }
					</div>

	);

export default Page;

