
function setup() {
  // put setup code here
  	createCanvas(windowWidth, windowHeight);

  	background(0);
  	rectMode(CENTER);
}

function draw() {
	background(0);
	if(mouseX < width/2 || mouseY < height/2){
		banane(mouseX, mouseY);
	}else{
		drawSquare(mouseX, mouseY);
	}	
}

function banane(pX, pY){
	fill(255);
	noStroke();
	ellipse(pX, pY, 100, 100);
}

function drawSquare(pX, pY){
	noFill();
	stroke(255);
	rect(pX, pY, 100 , 100);
}










