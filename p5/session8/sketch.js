var monText = "Religious text"
var displayedText = "";
var _cursor = 0 ;
var doisJeCouper = false;
var ecriture_curseur = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
  	background(0);
}

function draw() {
	fill(255);
	noStroke();
	background(0);
	
	var charToAdd = monText.charAt(_cursor);
	displayedText = displayedText + charToAdd;
	ecriture_curseur = ecriture_curseur + 1;


	_cursor = _cursor + 1; 
	if(_cursor > monText.length){
		_cursor = 0;
	}
	
	doisJeCouper = ecriture_curseur > 50;

	if(doisJeCouper && charToAdd == " "){
		displayedText = displayedText + "\n";
		
		ecriture_curseur = 0 ;
	}

	text(displayedText, 10, 10);
}









