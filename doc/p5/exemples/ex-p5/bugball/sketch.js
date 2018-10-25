function setup() {
  createCanvas(600, 400);
  b1 = new Ball(height/2, width/2);
}
function draw() {
  background(0);
  b1.update();
  b1.bounce();
  b1.display();
}
function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.r = 22;
  this.xspeed = 4;
  this.yspeed = -3;
  this.display = function() {
    stroke(255);
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
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