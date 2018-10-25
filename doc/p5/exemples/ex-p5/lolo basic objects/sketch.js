function setup() {
  createCanvas(600, 400);
}
function draw() {
 background(50);
 lolo(100, 100, 50);
 lolo(300, 200, 150);
}
function lolo(x, y, d) {
 fill(100);
 rect(x-10, y, 20, 150);
 fill(200);
 ellipse(x, y, d, d); 
}