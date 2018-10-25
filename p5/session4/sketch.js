var x;
var y;


function setup() {
  // put setup code here
  	createCanvas(windowWidth, windowHeight);
  	background(0);
  	x = width/2;
  	y = height/2;
  	rectMode(CENTER);
}

function draw() {
	background(0);
	fill(255);
	rect(x, y, 100, 100);
}

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "fr-BE";
recognition.onresult = function(event){
	var commande = event.results[event.results.length-1][0].transcript ;
	if(commande.includes("monte")){
		y -= 20;
	}else if(commande.includes("descends")){
		y += 20;
	}else if(commande.includes("droite")){
		x += 20;
	}else if(commande.includes("gauche")){
		x -= 20;
	}
}
recognition.start();
recognition.onend = function(event){
	recognition.start();
};








