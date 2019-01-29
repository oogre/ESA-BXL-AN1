/*----------------------------------------*\
  ESA-BXL-AN1 - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-07 09:18:06
  @Last Modified time: 2018-12-14 11:29:49
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
  createBulles();
}

function createBulles(){
//  monEntrepotABulle = [];
  var moveUpSpeed = random(10);
  for(var c = 0 ; c < 300 ; c++){
    monEntrepotABulle.push(new Bulle(moveUpSpeed));
  }
}

class Bulle{
  constructor(moveUpSpeed){
    this.gravity = createVector(0, 0.1);
    this.speed = p5.Vector.random2D();
    this.speed.mult(random(10));
    this.altitudeMax = mouseY;
    this.position = createVector(mouseX, height, 0);
    this.h = (millis()/100)%255;
    this.s = 255;
    this.b = random(255);
    this.size = 12;
    this.hasToExplode = false;
    this.moveUpSpeed = moveUpSpeed;
  }
  isMouseHover(){
    return mouseX > this.position.x 
    && mouseX < this.position.x + this.size
    && mouseY > this.position.y 
    && mouseY < this.position.y + this.size;
  }

  show(){
    fill(this.h, this.s, this.b);  
    rect(this.position.x, this.position.y, this.size, this.size);
  }
  move(){
    if(this.hasToExplode){
      this.moveExplode();
    }else{
      this.moveUp();
      if(this.position.y < this.altitudeMax ){
        this.hasToExplode = true;
      }
    }
  }
  moveUp(){
    this.position.y = this.position.y - this.moveUpSpeed;
  }
  moveExplode(){
    this.speed.add(this.gravity);
    this.position.add(this.speed);
  }
}















