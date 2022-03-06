
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
	for (let i = 0; i < a.length; i++) { 
		for (let j = 0; j < a.length-1; j++) {
			

			if (a[j] > a[j + 1]) {
				j1 = j;
				j2 = j + 1;
				// swap
				let t = a[j];
				a[j] = a[j+1];
				a[j+1] = t;
			
				comparisons++;
				await sleep(delay);

			
			} 
			

		}
		
	}
}