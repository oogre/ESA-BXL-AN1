/*----------------------------------------*\
  ESA-BXL-AN1 - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-07 09:18:06
  @Last Modified time: 2018-12-21 11:56:58
\*----------------------------------------*/


var curvyLines = [];
var nbLine = 10;
var motorPerLine = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);

  var angle = TWO_PI / nbLine;

  for(var i = 0 ; i < nbLine ; i++){
    var moteurs = [];
    var a = i * angle;
    for(var d = 0 ; d < motorPerLine ; d++){
      var x = width /2 + d * cos(a) * 50;
      var y = height/2 + d * sin(a) * 50;
      moteurs.push(new Motor(x, y, 5));  
    }

    curvyLines[i] = new CurvyLine(moteurs);
  }
}

function draw(){
  background(0);
  for(var l of curvyLines){
    l.update();
    l.show();
  }
}

class CurvyLine{
  constructor(moteurs){
    this.moteurs = moteurs;
  }
  update(){
    for(var moteur of this.moteurs){
      moteur.update();
    }
  }
  show(){
    noFill();
    stroke(255);
    beginShape();
    for(var moteur of this.moteurs){
      //moteur.show();
      curveVertex(moteur.end.x, moteur.end.y);
    }
    endShape();
  }
}

class Motor{
  constructor(x, y, length){
    this.position = createVector(x, y);
    this.axe = createVector(length, 0);
    this.rSpeed = random(0.1) ; 
    //this.end = p5.Vector.add(this.position, this.axe);
  }
  update(){
    this.axe.rotate(this.rSpeed);
    this.end = p5.Vector.add(this.position, this.axe);
  }
  show(){
    stroke(255);
    line(
      this.position.x, 
      this.position.y,
      this.end.x,
      this.end.y
    );
  }
}









