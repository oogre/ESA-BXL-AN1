/*----------------------------------------*\
  ESA-BXL-AN1 - genetics.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-12-02 22:23:10
  @Last Modified time: 2018-12-03 08:14:20
\*----------------------------------------*/

class ADN{
	constructor(genCount=1){
		this.genCount = genCount;
		this.genes = Array(this.genCount).fill(0).map((v, i)=>random(-1, 1)).shuffle();
	}
}

class Population{
	constructor(Model, count){
		this.Model = Model;
		this.populations = Array(count).fill(0).map(()=>new Model());
		console.log(this.populations);
	}
	nextGeneration(fitness=Array(0)){
		let pool = fitness.reduce((acc, v, idx)=>{
			for(let i = 0 ; i < v * 100 ; i ++){
				acc.push(idx)
			}
			return acc;
		}, []);
		
		this.parents = this.populations.map(()=>{
			return [this.populations[pool.random()].genes.slice(), this.populations[pool.random()].genes.slice()]//SELECTION
		});
		console.log(this.parents);

		this.populations = this.parents.map((couple, id)=>{
			let s = couple[0].genes.randomId();
			this.populations[id].genes = couple[0].slice().splice(0, s).concat(couple[1].slice().splice(s));//REPRODUCTION
			return this.populations[id];
		});
		//console.log(this.populations);
		//this.populations = this.populations.map(i=>i.genes.slice().swap());//MUTATION
		//console.log(this.populations);
	}
	update(){
		this.populations.map((i)=>i.update())
	}
	show(){
		this.populations.map((i)=>i.show())
	}
	reset(){
		this.populations = Array(this.populations.length).fill(0).map(()=>new (this.Model)());
		this.populations.map((i)=>i.reset())
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
