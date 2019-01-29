/*----------------------------------------*\
  ESA-BXL-AN1 - genetics.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-02 22:23:10
  @Last Modified time: 2018-12-03 00:05:57
\*----------------------------------------*/

class ADN{
	constructor(genCount=1){
		this.genCount = genCount;
	}
	generateRandom(){
		return Array(this.genCount).fill(0).map((v, i)=>i).shuffle();
	}
}

class Population{
	constructor(adnModel, count){
		this.model = adnModel;
		this.populations = Array(count).fill(0).map(()=>this.model.generateRandom());
		console.log(this.populations);
	}
	nextGeneration(fitness=Array(0)){
		let available = fitness.reduce((acc, v, idx)=>{
			for(let i = 0 ; i < v * 1000 ; i ++){
				acc.push(idx)
			}
			return acc;
		}, []);
		this.populations = this.populations.map(()=>this.populations[available.random()])//SELECTION
		this.populations = this.populations.map(i=>i.slice().swap());//MUTATION
		//console.log(this.populations);
	}
}

Array.prototype.shuffle = function(){
	for (let i = this.length - 1; i > 0; i--) {
		let i = Math.floor(Math.random()*this.length);
		let j = Math.floor(Math.random()*this.length);
		this.swap(i, j);
	}
	return this;
}

Array.prototype.swap = function(i=this.randomId(), j=this.randomId()){
	var temp = this[i];
	this[i] = this[j];
	this[j] = temp;
	return this;
}

Array.prototype.randomId = function(){
	return Math.floor(Math.random()*this.length);
}

Array.prototype.random = function(){
	return this[this.randomId()];
}
