var blobs = [];

function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 10; i++) {
    blobs[i] = new Blob(random(width), random(height));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < blobs.length; i++) {
    blobs[i].update();
    blobs[i].display();
    blobs[i].bounce();
    for (var j = 0; j < blobs.length; j++) {
      if (i != j && blobs[i].intersects(blobs[j])) {
        blobs[i].changeColor();
        blobs[j].changeColor();
      }
    }
  }

}
//object
function Blob(x, y) {
  this.x = x;
  this.y = y;
  this.r = 22;
  this.col = color(255);
  this.xspeed = 4;
  this.yspeed = -3;

  this.changeColor = function() {
    this.col = color(random(255), random(255), random(255))
  }
  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  this.bounce = function() {
    if (this.x > width || this.x <0) {
      this.xspeed = this.xspeed * -1;
    } else if (this.y > height || this.y <0) {
      this.yspeed = this.yspeed * -1;
    }
  }
}