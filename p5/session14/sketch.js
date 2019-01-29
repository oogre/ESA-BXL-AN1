/*----------------------------------------*\
  ESA-BXL-AN1 - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-07 09:18:06
  @Last Modified time: 2018-12-14 10:11:53
\*----------------------------------------*/
var monEntrepotABulle = [];
function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

}

function draw(){
  background(0);
  for(var i = 0 ; i < monEntrepotABulle.length; i++){
    monEntrepotABulle[i].show();
    monEntrepotABulle[i].move();
  }
}


function mousePressed(){
  monEntrepotABulle = [];
  for(var c = 0 ; c < 300 ; c++){
    monEntrepotABulle.push(new Bulle());
  }
}

class Bulle{
  constructor(){
    this.gravity = createVector(0, 0.1);
    this.speed = p5.Vector.random2D();
    this.speed.mult(random(10));
    this.position = createVector(mouseX, mouseY, 0);
    this.h = (millis()/100)%255;
    this.s = 255;
    this.b = random(255);
    this.size = 6;
  }
  show(){
    fill(this.h, this.s, this.b);
    push();
    translate(this.position.x, this.position.y,this.position.z);
    ellipse(0, 0, this.size, this.size);
    pop();
  }
  move(){
    this.speed.add(this.gravity);
    this.position.add(this.speed);
  }
}















