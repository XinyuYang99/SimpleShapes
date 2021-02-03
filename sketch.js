// Global Variables
var ellipseXPos = 0;

// Setup code goes here
function setup() {
	createCanvas(1400, 800);
	print("Starting up Simple Shapes");
	ellipseMode(CENTER);
}

function draw(){
	background(52, 219, 168);
	fill(220);
	circle(278,298,210);
	drawEars();
	drawEyes();
	drawNose();
	drawMouth();
	drawHands();

}


function mousePressed(){
	//mouseX = x coordinate of the mouse
	//mouseY = y coordinate of the mouse
	print("mouse pressed at x: " + mouseX + " y:" + mouseY);
}

function drawMouth(){
	fill(255,0,0);
	arc(245, 362, 17, 17, 100, PI+ 0.5*QUARTER_PI );
}

function drawNose(){
	fill(000000);
	ellipse(245, 347, 20, 10);
	let l1 = { x: 244, y: 352 };
	let l2 = { x: 243, y: 356 };
	let l3 = { x: 236, y: 358 };
	let l4 = { x: 230, y: 357 };
	let l5 = { x: 252, y: 357 };
	let l6 = { x: 257, y: 353 };

	fill(220);
	curve(l1.x, l1.y, l1.x, l1.y, l2.x, l2.y,l3.x, l3.y);
	curve(l1.x, l1.y, l2.x, l2.y, l3.x, l3.y, l4.x, l4.y);
	curve(l2.x, l2.y, l3.x, l3.y, l4.x, l4.y, l4.x, l4.y);

	curve(l1.x, l1.y, l1.x, l1.y, l2.x, l2.y, l5.x, l5.y);
	curve(l1.x, l1.y, l2.x, l2.y, l5.x, l5.y, l6.x, l6.y);
	curve(l2.x, l2.y, l5.x, l5.y, l6.x, l6.y, l6.x, l6.y);
}

function drawEyes(){
	fill(000000);
	ellipse(212,318,15,20);
	ellipse(280,318,15,20);
	fill(255,255,255);
	circle(212,324,5);
	circle(215,314,5);
	circle(278,320,4);
	circle(282,312,3);
}

function drawEars(){
	let p1 = { x: 211, y: 228 };
	let p2 = { x: 208, y: 180 };
	let p3 = { x: 200, y: 171 };
	let p4 = { x: 194, y: 180 };
	let p5 = { x: 340, y: 226 };
	let p6 = { x: 339, y: 195 };
	let p7 = { x: 348, y: 171 };
	let p8 = { x: 355, y: 168 };
	// Left ear
	fill(220);
	arc(200, 200, 50, 100, -350, PI + 5*QUARTER_PI, OPEN);
	curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
	curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
	curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
	// Right ear
	fill(220);
	arc(350, 200, 50, 100, -450, PI + 5.5*QUARTER_PI, OPEN);

	curve(p5.x, p5.y, p5.x, p5.y, p6.x, p6.y, p7.x, p7.y);
	curve(p5.x, p5.y, p6.x, p6.y, p7.x, p7.y, p8.x, p8.y);
	curve(p6.x, p6.y, p7.x, p7.y, p8.x, p8.y, p8.x, p8.y);
}