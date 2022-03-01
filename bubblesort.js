
async function bubbleSortHandler() { 
	if (isSorting) { 
		console.log("sorting is still going on");
		return;
    }
    comparisons = 0;
	console.log("bubble sort");
	isSorting = true;
    await bubbleSort();
	isSorting = false;
	console.log('sorted');
}
async function bubbleSort() { 
	await sleep(delay);
	for (let i = 0; i < a.length; i++) { 
		for (let j = 0; j < a.length-1; j++) {
			await sleep(delay);
			

			if (a[j] > a[j+1]) {
				// swap
				let t = a[j];
				a[j] = a[j+1];
				a[j+1] = t;
			
				comparisons++;
			
			} 
			

		}
		
	}
}