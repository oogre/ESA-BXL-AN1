function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  }
}
