let a = [];
let n = 500;
let i = 0,
	j = 1;
let j1 = 0, j2 = 1;
let comparisons = 0;
var comEle = document.querySelector(".comVal");
var slider = document.querySelector(".slider");
backgroundC = 100;
var delay = slider.value;

function setup() {
	for (let i = n ; i > 0; i--) {
		a.push(i);
		// a.push(noise(i/((float)(n))));
	}
	a = shuffle(a);
	const canvas = createCanvas(innerWidth-20, 500);
	background(backgroundC);
	canvas.parent("canvas");
	

}
function sliderUpdate() { 
	console.log("slider", slider.value);
	delay = slider.value;

}
function scramble() { 
	if (isSorting) { 
		return;
	}
	a = shuffle(a);
}
async function draw() {
	comEle.textContent = comparisons.toString();
	displayMatrix(j1,j2);
	
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function displayMatrix(j1, j2) {
	background(backgroundC)
	// rect(width / 2, height / 2, 10, 10);
	let wid = width / a.length;
	let mn = min(a);
	let mx = max(a);
	strokeWeight(0.6);
	// beginShape();
	// noFill()
	fill(255)
	stroke(255)
	strokeWeight(1)
	for (let i = 0; i < a.length; i++) {
		let h = map(a[i], mn, mx, 10, height - 10);
		// h=a[i]
		
		rect(i * wid, height, wid, -h);
		// stroke(0);
		// vertex(i*wid, height-h);
		// line(i*wid,height,i*wid,height-h)
	}
	// endShape();
}
