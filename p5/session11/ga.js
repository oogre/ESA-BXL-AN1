/*----------------------------------------*\
  ESA-BXL-AN1 - ga.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-01 12:37:54
  @Last Modified time: 2018-12-01 12:58:54
\*----------------------------------------*/


function calcDistance(points, order){
  var sum = 0
  for(let i = 0 ; i < order.length-1 ; i++){
    let idA = order[i];
    let cA = points[idA];
    let idB = order[i+1];
    let cB = points[idB];
    sum += p5.Vector.dist(cA, cB);
  }
  return sum;
}


function calculateFitness(){
	for(var i = 0 ; i < population.length ; i ++){
      var d = calcDistance(cities, population[i]);
      if(d<recordDistance){
      	recordDistance = d;
      	bestEver = population[i];
      }
      fitness[i] = 1 / (d + 1);
    }

}

function normalizeFitness(){
	let sum = fitness.reduce((acc, v)=>acc+=v, 0);
	fitness = fitness.map(f=>f/sum);
}

function nextGeneration(){
	let newPopulation = [];
	for(var i = 0 ; i < population.length ; i ++){
		var order = pickOne(population, fitness);
		mutate(order);
		newPopulation[i] = order;
	}
	population = newPopulation;
	console.log(population);
}

function pickOne(list, prob){
	var index = 0;
	var r= random(1);
	while(r>0){
		r = r - prob[index];
		index++;
	}
	index--;
	return list[index].slice();
}

function mutate(order, mutationRate){
	indexA = floor(random(order.length));
	indexB = floor(random(order.length));
	swap(order, indexA, indexB);
}