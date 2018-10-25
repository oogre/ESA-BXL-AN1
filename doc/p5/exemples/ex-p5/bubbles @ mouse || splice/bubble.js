function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.life = 255;
  

  this.display = function() {
    stroke(255);
    fill(255, this.life);
    ellipse(this.x, this.y, 48, 48);
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.life = this.life -1;

  }
  
  this.isFinished = function() {
    if (this.life < 0) {
      return true;
    } else {
      return false;
    }
  }
}

/*
this.col = random(0, 255);
this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 24) {
      this.col = random(100);
    }
  }
*/