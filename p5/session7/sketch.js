let imgs = [];
var snapshots = [];
var video;
var sX = 100;
var sY = 80;
function setup() {
	createCanvas(windowWidth, windowHeight);
	//for(let i = 1 ; i <= 213 ; i ++){
	//	imgs.push(loadImage("../img/jaffe/jaffe"+i+".jpg"));
	//}
	video = createCapture(VIDEO);
  	video.size(sX, sY);
	colorMode(HSB, 255);
}

function draw() {
	background(0);

	var pg= createGraphics(100, 80);
	//pg.tint(frameCount%255, 255, 255);
 	pg.image(video.get(), 0, 0, sX*2, sY*2);
	snapshots.push(pg.get());
	//image(imgs[frameCount % imgs.length], width/2 - height/2, 0, height, height);
	let x = 0 ;
	let y = 0;
	for(let i = 0 ; i < snapshots.length ; i ++){
		image(snapshots[i], x, y, sX, sY);	
		x += sX;
		if(x + sX > width){
			x = 0;
			y += sY;
		}
		if(y + sY > height){
			snapshots.shift();
		}
	}
	
}







