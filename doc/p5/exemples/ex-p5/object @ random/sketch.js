var spot = {
  x: 100,
  y: 50
};

var col = {
  r:255,
  g:200,
  b:100
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  col.r = random(200, 255);
  col.g = random(180, 220);
  col.b = random(80, 120);
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b, 200);
  stroke(255);
  ellipse(spot.x, spot.y, 24, 24);
}