var canvas;
var h1;
var x = 100;
var y = 100;
var bgcolor;
var button;
var slider;
var input;

function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(0);
  canvas.position(520,280);
  createP("Click!");
  h1 = createElement('h1', 'Click the Button . . . Waiting');
  h1.position(500,200);
  button = createButton("go..go..go");
  button.mousePressed(changeColor);
  slider = createSlider(10, 100, 47);
  input = createInput('Random');
}
function changeColor() {
  bgcolor = color(random(0, 100));
  h1.html("Now I Will Show Random Numbers")
  n1 = createP("Click again for New Random Number " + random(0, 100));
}

function draw() {
  background(bgcolor);
  fill(255, 0, 0);
  rect(x, y, slider.value(), slider.value());
  h1.position(x, y);
  x += random(-3, 3);
  text(input.value(), 10, 20)
}
