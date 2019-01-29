
// var student1 = "Victor";
// var student2 = "Andréa";
// var student3 = "José";
// var student4 = "Lorraine";

var students = [
	"Victor",
	"Andréa",
	"José",
	"Lorraine",
	"Mina"
];

var genres = [
	1,
	0,
	1, 
	0, 
	0
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  	
}

function draw() {
	background(255);
	fill(255);
	// text(student1, 100, 200);
	// text(student2, 100, 230);
	// text(student3, 100, 260);
	// text(student4, 100, 290);

	// text(students[0], 100, 200);
	// text(students[1], 100, 230);
	// text(students[2], 100, 260);
	// text(students[3], 100, 290);
  	/*
		var c = 0 ;
		text(students[compteur], 100, 200 + compteur * 30);
		compteur = compteur + 1;
		text(students[compteur], 100, 200 + compteur * 30);
		compteur = compteur + 1;
		text(students[compteur], 100, 200 + compteur * 30);
		compteur = compteur + 1;
		text(students[compteur], 100, 200 + compteur * 30);
	*/
	translate(width/2, height/2);
	rotate(2 * PI * (mouseX/width))
	for( var c = 0 ; c < 100 ; c = c + 1){
		textSize(20);
		fill( 0);
		rotate(0.1 * millis() * 0.0001)
		textAlign(CENTER, CENTER);
		text(students[c%students.length ], c, c);
	}
	//text(students.length, 100, 100);
	// for(/* setup */; /* question */; /* après chaque tour */){
	//
	// }
}







