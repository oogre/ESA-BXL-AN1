function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;
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