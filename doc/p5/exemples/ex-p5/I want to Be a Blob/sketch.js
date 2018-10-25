function setup() {
  createCanvas(400, 400);
  b1 = new Ball(height/2, width/2);
}
function draw() {
  background(0);
//  b1.update();
//  b1.bounce();
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
/*
    push();
    translate(this.pos, this.pos.y);
    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.1) {
      var x = this.r * cos(a);
      var y = this.r * sin(a);
      vertex(x,y);
    }
    endShape();
    pop();
*/
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