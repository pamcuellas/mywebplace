
document.addEventListener('DOMContentLoaded', function() {

	let last_known_scroll_position = 0;
	let ticking = false;
	let lastPosition = 0;
	let navbar = document.getElementsByClassName("navbar")[0];
	let linkMenu = document.querySelectorAll(".linkMenu"); //document.getElementsByClassName("linkMenu");

	function doSomething(scroll_pos) {

	  if (scroll_pos > lastPosition && lastPosition > 30 ) {
	  	// Going down
	  	navbar.style.background = 'transparent';
	  	//navbar.style.position = 'relative';

		linkMenu.forEach(
		    (element, index, array) => {
				element.style.opacity = 0;
		    }
		);

	  	console.log("Going Down - Curr Position = " + scroll_pos + " Last Position = " + lastPosition);
	  } else if (scroll_pos < lastPosition && lastPosition < 30 ) {
	  	// Going up
	  	//navbar.style.position = 'fixed';
	  	navbar.style.background = 'currentColor';
		linkMenu.forEach(
		    (element, index, array) => {
				element.style.opacity = 1;
		    }
		);

	  	console.log("Going Up - Curr Position = " + scroll_pos + " Last Position = " + lastPosition);
	  }
	  	
	  lastPosition = scroll_pos;
	}

	window.addEventListener('scroll', function(e) {
	  last_known_scroll_position = window.scrollY;

	  if (!ticking) {
	    window.requestAnimationFrame(function() {
	      doSomething(last_known_scroll_position);
	      ticking = false;
	    });

	    ticking = true;
	  }
	});

	navbar.addEventListener('mouseover', function(e) {
		console.log("event", e)
		if (lastPosition > 30) {
			navbar.style.background = 'currentColor';
			linkMenu.forEach(
			    (element, index, array) => {
					element.style.opacity = 1;
			    }
			);

		} 
	});

	navbar.addEventListener('mouseout', function(e) {
		if (lastPosition > 30) {
			linkMenu.forEach(
			    (element, index, array) => {
					element.style.opacity = 0;
			    }
			);
			navbar.style.background = 'transparent';
		} 
	});

});

/*  

	var words = document.getElementsByClassName('title');
	var wordArray = [];
	var currentWord = 0;


	alert('starting page [' + words[currentWord].textContent + ']');


	words[currentWord].style.opacity = 1;
	for (var i = 0; i < words.length; i++) {
	  splitLetters(words[i]);
	}

	function changeWord() {
	  var cw = wordArray[currentWord];
	  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
	  for (var i = 0; i < cw.length; i++) {
	    animateLetterOut(cw, i);
	  }
	  
	  for (var i = 0; i < nw.length; i++) {
	    nw[i].className = 'letter behind';
	    nw[0].parentElement.style.opacity = 1;
	    animateLetterIn(nw, i);
	  }
	  
	  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
	}

	function animateLetterOut(cw, i) {
	  setTimeout(function() {
			cw[i].className = 'letter out';
	  }, i*80);
	}

	function animateLetterIn(nw, i) {
	  setTimeout(function() {
			nw[i].className = 'letter in';
	  }, 340+(i*80));
	}

	function splitLetters(word) {
	  var content = word.innerHTML;
	  word.innerHTML = '';
	  var letters = [];
	  for (var i = 0; i < content.length; i++) {
	    var letter = document.createElement('span');
	    letter.className = 'letter';
	    letter.innerHTML = content.charAt(i);
	    word.appendChild(letter);
	    letters.push(letter);
	  }
	  
	  wordArray.push(letters);
	}

	changeWord();
	setInterval(changeWord, 4000);

})



//$(document).ready( function(){ 	// Wait until DOM be ready to start.




/*
	//****** COLORS ******
	let colors =   
	[	'#8e44ad', // Histeria
   		'#2980b9', // Belize  
		'#c0392b', // pomegranate 
		'#16a085', // green 
		'#2c3e50' // midnight 
	]

	$(".container").on("click", function(event){
		// $(this).css("background", "yellow");
		const color = colors[Math.floor(Math.random() * colors.length)];
		this.style.background = color;
		$('body').css("background", color);
		// var styles = {
		// 	backgroundColor: pink;
		// 	fonteWeight: "bold"
		// }
		// $("someElement").css(styles);


	})


*/
	









//});
