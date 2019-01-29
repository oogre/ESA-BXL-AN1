var birdNum = 100;
var population;
let birds = [];
let food;
function setup() {
  	createCanvas(windowWidth, windowHeight);
    population = new Population(Bird, 100);
    background(0);
    food = createVector(random(width), random(height)).sub(createVector(width, height).mult(0.5));
}

class Bird extends ADN{
  constructor(){
    super(4);
    this.reset();
  }
  reset(){
    this.direction = createVector(1,0).rotate(this.genes[0]*TWO_PI);
    this.speed = this.genes[2]*PI;
    this.routeDriftingSpeed = this.genes[2];
    this.routeDriftingacc = this.genes[3]*TWO_PI;
    this.position = createVector(0,0);
    this.bestDistance = Infinity;
  }
  update(){
    this.routeDriftingacc += this.routeDriftingSpeed;
    let r = (noise(this.routeDriftingacc)*2 - 1)*0.1;
    
    this.direction.rotate(r);
    this.position.add(p5.Vector.mult(this.direction, this.speed));
    this.bestDistance = min(this.bestDistance, p5.Vector.dist(this.position, food));
  }
  show(){
    push();
    stroke(255);
    noFill();
    translate(this.position.x, this.position.y);
    rotate(atan2(this.direction.y, this.direction.x));
    beginShape();
    for(let a = 0 ; a < TWO_PI-1 ; a += TWO_PI*0.333){
      vertex(5 * cos(a), 5 * sin(a))
    }
    endShape();
    pop();
  }
}

function draw(){

  background(0);
  
  translate(width/2, height/2);
  population.update();
  population.show();
  if(frameCount % 200 ==0){
    
    let fitness = population.populations.map(d=>1 / (d.bestDistance + 1));
    let sum = fitness.reduce((acc, v)=>acc+=v, 0);
    fitness = fitness.map(f=>f/sum);
    population.nextGeneration(fitness);
    population.reset();
  }

  ellipse(food.x, food.y, 15, 15);
/*
  noFill();
  stroke(255);
  for(var i = 0 ; i <cities.length ; i ++){
    ellipse(cities[i].x, cities[i].y, 10, 10);
  } 
  
  strokeWeight(5);
  stroke(255, 0, 255);  
  beginShape();
  for(var i = 0 ; i <bestEver.length ; i ++){
    vertex(cities[bestEver[i]].x, cities[bestEver[i]].y);
  } 
  endShape();

  

  let scores = population.populations.map(i=> i.reduce((acc, v, id)=>{
      if(id == i.length-1)return acc;
      acc += p5.Vector.dist(cities[v], cities[i[id+1]]);
      return acc;
    }, 0)
  );

  let oldRecord = recordDistance;
  recordDistance = min(recordDistance, min(scores));
  if(oldRecord != recordDistance){
    console.log("NEW RECORD");
    bestId = scores.indexOf(recordDistance);
    bestEver = population.populations[bestId];
  }


  let fitness = scores.map(d=>1 / (d + 1));
  let sum = fitness.reduce((acc, v)=>acc+=v, 0);
  fitness = fitness.map(f=>f/sum);
  

  population.nextGeneration(fitness);

  */
}
