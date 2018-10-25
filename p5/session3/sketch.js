var mesBars = "";
var mesUs = "u";

function setup() {
  // put setup code here
  	createCanvas(windowWidth, windowHeight);
  	background(0);
}

function draw() {
	background(0);
	fill(255);

	var monText = "Votre curseur est à";
	monText = "bonjour";
	text(monText, 10, 20);

	var monChiffre = 13;
	monChiffre = monChiffre + 1;
	text(monChiffre, 10, 40);

	mesBars = mesBars + "I";
	if(frameCount % 100 == 0){
		mesBars = mesBars + "\n";
	}


	text(mesBars, 10, 60);

	text(frameCount, 10, 80);

	mesUs = mesUs + "u";
	if(frameCount % 100 == 0){
		mesUs = mesUs + "\n";
	}
	text("F"+mesUs+"ck", 10, 100);
}









