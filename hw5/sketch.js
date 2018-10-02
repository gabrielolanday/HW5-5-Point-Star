var nstars;

function setup() {
	createCanvas(550, 800);	
	nstars = 12;

}

function draw() {

	
	fill(166,155,121);
	stroke(61,61,71);
	strokeWeight(40);
	rect(0,0,width,height);
	
	push();
	noStroke();
	translate(width*0.5,height*0.5);	
	

	for (var i = nstars; i >= 1; i--) {
		if (i == 12) {
			push();
			fill(196,87,102);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 11){
			push();
			fill(125,71,71);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 10){
			push();
			fill(134,134,135);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 9){
			push();
			fill(136,71,77);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 8){
			push();
			fill(0,97,147);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 7){
			push();
			fill(159,94,83);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 6){
			push();
			fill(21,63,92);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 5){
			push();
			fill(185,50,56);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 4){
			push();
			fill(121,102,69);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 3){
			push();
			fill(33,45,94);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 2){
			push();
			fill(169,52,51);
			scale(i*1.4);
			star();
			pop();
		}
		if (i == 1){
			push();
			fill(9,106,180);
			scale(i*1.4);
			star();
			pop();
		}
		
	}
	pop();

	noFill();
	rect(0,0,width,height);
}

function star() {
	beginShape();
	vertex(-14.7,-20);
	vertex(0,-65.2);
	vertex(14.7,-20);
	vertex(62.3,-20);
	vertex(23.8,8);
	vertex(38.5,53.3);
	vertex(0,25);
	vertex(-38.5,53.3);
	vertex(-23.8,8);
	vertex(-62.3,-20);
	vertex(-14.7,-20);
	endShape();
}

function drawGrid() {
	stroke(200);
	fill(120);
	for (var x=-width; x < width; x+=40) {
		line(x, -height, x, height);
		text(x, x+1, 12);
	}
	for (var y=-height; y < height; y+=40) {
		line(-width, y, width, y);
		text(y, 1, y+12);
	}
}
