let imgs = [];
var snapshots = [];
var video;
var sX = 100;
var sY = 80;
var mic;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for(let i = 1 ; i <= 150 ; i ++){
		imgs.push(loadImage("../img/jaffe/jaffe"+i+".jpg"));
	}
	 mic = new p5.AudioIn()
  mic.start();
  background(0);
}

function draw() {
	tint(255, 50);
	let micLevel = mic.getLevel();
	let t = floor(lerp(micLevel, 1, imgs.length-1));
	image(imgs[t], 0, 0, height, height);
}