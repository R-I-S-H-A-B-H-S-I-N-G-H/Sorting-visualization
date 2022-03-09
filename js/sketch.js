let a = [];
let size = 350;
// let i = 0,
// 	j = 1;
let j1 = undefined, j2 = undefined;
let comparisons = 0;
var comEle = document.querySelector(".comVal");
var arraySizeval = document.querySelector('.arraySize');
var slider = document.querySelector(".Timeslider");
var arraySizeslider = document.querySelector(".ArraySizeslider");
var delay;

// canavs
var canavs = null;


function bg() {
	// background(255)
	background(173, 216, 230);
}
function fg() {
	// stroke(173, 216, 230);
	stroke(0, 0, 50, 200);
	fill(0, 0, 50, 200);
}


function setup() {
	canvas = createCanvas(innerWidth - 20, innerHeight - innerHeight * .4);
	createArray(size);
	bg();
	canvas.parent("canvas");
	sliderUpdate();
	arraySizeval.textContent = size;


}

function draw() {
	comEle.textContent = comparisons.toString();
	displayMatrix();

}
function windowResized() {
	canvas.resize(innerWidth - 20, innerHeight - innerHeight * .4);
	bg();
}



function createArray(n) {
	arraySizeslider.value = size;
	size = n;
	divisor = n;
	a = [];
	for (let i = n; i > 0; i--) {

		// var ele = random(height);
		var ele = i;

		a.push(ele);
	}
	scramble();
}
function sliderUpdate() {
	delay = slider.value;
	delay = slider.max - slider.value + 1;
	console.log(delay);
}
function updateArraySize() {
	if (isSorting) {
		arraySizeslider.value = size;
		return;
	}

	size = arraySizeslider.value;
	arraySizeval.textContent = size.toString();
	createArray(size);
}
function scramble() {
	if (isSorting) {
		return;
	}
	a = shuffle(a);
	j1 = undefined;
	j2 = undefined;
}


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}



function displayMatrix() {
	bg();
	let wid = width / a.length;
	let mn = min(a);
	let mx = max(a);



	strokeWeight(1)
	for (let i = 0; i < a.length; i++) {
		fg();
		let h = map(a[i], mn, mx, 10, height - 10);
		if (j1 != undefined && j1 == i) {
			// console.log('j1');
			fill(0, 255, 0);
			stroke(0, 255, 0);

		}
		if (j2 != undefined && j2 == i) {
			// console.log('j2');
			fill(255, 0, 0);
			stroke(255, 0, 0);

		}

		rect(i * wid, 0, wid, h);
		// stroke(0);
		// vertex(i*wid, height-h);
		// line(i*wid,height,i*wid,height-h)
	}

	// endShape();
}
