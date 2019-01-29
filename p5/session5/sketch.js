
var mesBars = [];
var mesBarsR = [];
var nombreDeBar = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	console.log(mesBars);
 	for( var i = 0 ; i <nombreDeBar ; i = i + 1){
 		mesBars.push( random(50, 150) );
 		mesBarsR.push( random(-1, 1) );
 	}
 	console.log(mesBars);
 	rectMode(CENTER)
 	noLoop();
}

function draw() {
	background(255);
	translate(width/2, height/2);
	fill(0);
	noStroke();
	for( var i = 0 ; i < nombreDeBar ; i = i + 1){
		if(i % 2 == 0){
			fill(255);
		}else{
			fill(0);
		}
		var temps = millis() / 10000;
		var anim = sin(temps + i);
		rotate(millis() / 10000 + i);
		rect(
			anim * 200, 0, 
			(1-abs(anim)) * 100, (1-abs(anim)) * 100
		);
		rotate(-millis() / 10000 + i);
		rotate(2 * PI / nombreDeBar)
	}
}







