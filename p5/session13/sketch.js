/*----------------------------------------*\
  ESA-BXL-AN1 - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-07 09:18:06
  @Last Modified time: 2018-12-07 11:05:18
\*----------------------------------------*/
//var maPremiereBulle;
var monEntrepotABulle = [];
function setup(){
  createCanvas(600, 300);
  //maPremiereBulle = new Bulle();
  colorMode(HSB);
}

function draw(){
  if(mouseIsPressed){
    monEntrepotABulle.push(new Bulle());
  }
  background(0);
  for(var i = 0 ; i < monEntrepotABulle.length; i++){
    monEntrepotABulle[i].show();
    monEntrepotABulle[i].move();
  }
}


class Bulle{
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.h = (millis()/100)%255;
    this.s = 255;
    this.b = random(100, 255);
    this.size = 30;
  }
  show(){
    fill(this.h, this.s, this.b);
    ellipse(this.x, this.y, this.size, this.size);
  }
  move(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}















