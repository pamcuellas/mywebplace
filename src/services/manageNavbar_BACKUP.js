let manageNavbar = () => {

	let scrollPosition 	= 0;
	let lastPosition 	= 0
	let ticking 		= false;
	let linkMenu 		= document.querySelectorAll(".linkMenu");
	let navbar 			= document.getElementsByClassName("navbar")[0];

	// Show/Hide Navbar/menus according to scroll position
	let setNavbarVisual = (scroll_pos) => {
		console.log("setNavbarVisual scroll_pos = " + scroll_pos + " lastPosition = " + lastPosition);
	  if (scroll_pos > lastPosition && lastPosition > 30 ) {
	  	// Going down
	  	changeNavbarVisual (0, 'transparent');
	  } else if (scroll_pos < lastPosition && lastPosition < 30 ) {
	  	// Going up
	  	changeNavbarVisual (1, '#000000');
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

	// Click event listener for Navbar/Menus
	navbar.addEventListener('click', function(e) {
		if (e.target.tagName !== 'I') {
			changeNavbarVisual(1, '#000000');
			lastPosition = 0;
			console.log("navbar.addEventListener(click ", e.target.tagName);
		}	
	});

	// Mouserover event listener for Navbar/Menus
	navbar.addEventListener('mouseover', function(e) {
		if (lastPosition > 30) {
			changeNavbarVisual(1, '#000000');
		} 
	});

	// Mouserout event listener for Navbar/Menus
	navbar.addEventListener('mouseout', function(e) {
		if (lastPosition > 30) {
			changeNavbarVisual(0, 'transparent');
		} 
	});

	// Show/Hide Navbar/Menus
	let changeNavbarVisual = (opacity, color) => {
	  	navbar.style.background = color;
		linkMenu.forEach(
		    (element, index, array) => {
				element.style.opacity = opacity;
		    }
		);
	}	

};

export default manageNavbar;