// Made with some great guidance from Brett Cooper, 
// you'll find him in my following.
// need to clean this up lol 


let stor = [];	//Stores the random positions
let seq;				//Color randomizer
let col = ["PEACHPUFF",	//bg colors
				"SALMON",
				"HOTPINK",
				"TOMATO",
				"YELLOW",
				"MOCCASIN",
				"KHAKI",
				"THISTLE",
				"VIOLET",
				"MEDIUMPURPLE",
				"BLUEVIOLET",
				"MEDIUMSLATEBLUE",
				"LAWNGREEN",
				"MEDIUMSPRINGGREEN",
				"MEDIUMAQUAMARINE",
				"AQUAMARINE",
				"DEEPSKYBLUE",
				"DODGERBLUE",
				"WHEAT",
				"CHOCOLATE",
				"LIGHTGRAY",
				"MISTYROSE"];
	// var wipe = 0;
	

function setup() {
	
createCanvas(windowWidth, windowHeight);
seq = int(random(0,20));	//randomizes the color for the first run
	
for ( var i = 0; i < width*height; i++){	// Makes random positions for the segments stores it
stor[i] = random();
}


}

function draw() {

// INPUT YOUR VALUES HERE

var step = 40;		// size of a point
var pad = 20;			// padding between 
var speed = 20 ;	// speed of the wave


var unit = step - pad; 
	
var count, 
		wavex, 
		wavey;
	
count = sin(frameCount/(speed*PI));
wavex = map(count, -1,1, -width, width);
wavey = map(count, -1,1, -height, height);


	
if(count >-0.01 && count <0.01){
seq = int(random(0,21));
// randomizinator();
}
	background(col[seq]);

translate(-step,-step);	
	
	
// Grid maker 
for (var x = 0; x < width+100; x = x + step) {
	for (var y = 0; y < height+100  ; y = y + step) {
		strokeWeight((unit*x/wavex) % 400);
		strokeWeight(((-1*unit)*(y/wavey)) % 400);
		if(stor[x*y]>0.5){
		line(x+step, y+step, x, y );
		}	else {
			line(x+step, y,x, y+step);
			}

	}
}
	
// if( wipe > 4){
// 	setup;
//  }
// 	print(wipe);

}



// function randomizinator(){
// for ( var i = 0; i < width*height; i++){	// Makes random positions for the segments stores it
// stor[i] = random();
// }
// }