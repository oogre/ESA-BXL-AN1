


function setup() {
  // put setup code here
	createCanvas(displayWidth, displayHeight);
	background(255);
	rectMode(CENTER);
  
}

function draw() {
  // put drawing code here
noFill();
stroke(255 * sin(millis()*0.001));
  ellipse(width / 2 , height / 2 , 1000 * sin(millis() * 0.0001) );

}

function d(){
	translate(mouseX, mouseY);
	rotate(millis() * 0.001);
	translate(100, 0);
	rect(sin(0.051*millis()), cos(0.21*millis()), 100, 100);
}


function c(){
	noFill();
	translate(width/2, height/2)
	for(let i = 255 ; i > 0 ; i -=2){
		stroke(i, 255 -i);
		rotate(mouseX/width);
		translate(mouseX/width * millis() * 0.01, 0);
		line(0, 0, i, i);
	}
}
function jose(){
	alert("o-------");	
	alert("-o------");	
	alert("--o-----");	
	alert("---o----");	
	alert("----o---");
	alert("-----o--");
	alert("------o-");
	alert("-------o");
	alert("------o-");
	alert("-----o--");	
	alert("----o---");	
	alert("---o----");	
	alert("--o-----");	
	alert("-o------");
}