let animaWords = ( words ) => {

	let colors =   
	[ 	
		'#8e44ad',   
		'#2980b9',     
		'#c0392b',    
		'#16a085',    		
    '#2c3e50',     
		'#ff1493', // PINK        
		'#cb3365', // RED        
		'#0b1bff'  // BLUE       
	];

	var currentWord   = 0;
	var wordArray     = [];

  words.forEach( (e) => { 
  	e.style.color = colors[Math.floor( Math.random() * (colors.length - 1) )];
  	wordArray.push(e.childNodes) ;
  });  


  function changeWord() {

    // Grab the CURRENT word. WORD it is a array of SPAN with a letter inside each span.
    var cw = wordArray[currentWord];
    // Grab the NEXT word. WORD it is a array of SPAN with a letter inside each span.
    var nw = undefined;

    if (currentWord === wordArray.length-1) {
      nw = wordArray[0]
    } else {
      nw = wordArray[currentWord+1];
    }

    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for ( i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    
    currentWord = (currentWord === wordArray.length-1) ? 0 : currentWord+1;
}

  function animateLetterOut(cw, i) {
    setTimeout( () => {
      cw[i].className = 'letter out '  ; // Change the class to fade out
    }, i*80);
  }

  function animateLetterIn(nw, i) {
    setTimeout( () => {
      nw[i].className = 'letter in '  ; // Change the class to fade in 

    }, 340+(i*80));
  }

  changeWord();
  setInterval(changeWord, 4000);

}

export default animaWords;