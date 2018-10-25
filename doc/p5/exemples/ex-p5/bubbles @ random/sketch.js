var bubbles = [];
function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 300; i++) {
   bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }
}
function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked
  }
}
function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color (255, 100);
  this.display = function() {
    stroke(0);
    fill(this.col);
    ellipse(this.x, this.y, 24, 24);
  }
  this.clicked = function() {
    this.col = color(200, 100, 100);
  }
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}
//
/*
function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}
function keyPressed() {
  bubbles.splice(0, 1);
}
for (var i = 0; i < 200; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
random(0, width)
random(0, height)
for (var i = 0; i < 300; i++) {
   bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }
*/