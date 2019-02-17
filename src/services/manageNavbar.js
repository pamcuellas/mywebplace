let manageNavbar = () => {

	let scrollPosition 	= 0;
	let lastPosition 	= 0
	let ticking 		= false;
	let menuControl		= document.querySelector(".firstmenu i");
	let linkMenu 		= document.querySelectorAll(".secondmenu .linkMenu");
	let navbar 			= document.querySelector(".navbar");

	// Show/Hide Navbar/menus according to scroll position
	let setNavbarVisual = (scroll_pos) => {
	  if (scroll_pos > lastPosition && lastPosition > 5 ) {
	  	// Going down
	  	changeNavbarVisual ('visible', 'invisible', 'fa-minus', 'fa-bars', 'transparent');
	  } else if ( (scroll_pos < lastPosition) && (lastPosition < 5 || scroll_pos === 0) ) {
	  	// Going up
	  	changeNavbarVisual ('invisible', 'visible','fa-bars','fa-minus', '#f00a36');
	  }
	  lastPosition = scroll_pos;
	}

	// Scrool event listener 
	window.addEventListener('scroll', function(e) {
	  scrollPosition = window.scrollY;
	  if (!ticking) {
	    window.requestAnimationFrame(function() {
	      setNavbarVisual(scrollPosition);
	      ticking = false;
	    });
	    ticking = true;
	  }
	});

	// Show/Hide Navbar/Menus
	let changeNavbarVisual = (classToRemove, classToAdd, iconToRemove, iconToAdd, color ) => {
		menuControl.classList.replace(iconToRemove, iconToAdd);
	  	navbar.style.background = color;
		linkMenu.forEach(
		    (e, index, array) => {
				e.classList.replace(classToRemove, classToAdd);
		    }
		);
	}	

};

export default manageNavbar;