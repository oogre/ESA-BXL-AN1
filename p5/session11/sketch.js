
var cities = [];
var totalCities = 15;
var population;
var fitness = [];
var recordDistance = Infinity;
var bestId = 0;
var bestEver = [];
function setup() {
  	createCanvas(windowWidth, windowHeight);
    cities = Array(totalCities).fill(0).map(()=>createVector(random(width), random(height/2)));
    population = new Population(new ADN(totalCities), 10);
}


function draw(){

  background(0);

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



  translate(0, height/2);
  
  strokeWeight(3);
  stroke(255);  
  
  
  for(var i = 0 ; i <population.populations.length ; i ++){
    push();
    scale(1/population.populations.length);
    translate(i * width, 0)
    beginShape();
    for(var j = 0 ; j <population.populations[i].length ; j ++){
      vertex(cities[population.populations[i][j]].x, cities[population.populations[i][j]].y);
    } 
    endShape();
    if(i == bestId){
      rect(width/2, height, 100, 100);
    }
    pop();
  } 
  
  
  
  

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

  
}
