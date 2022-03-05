

async function selectionSortHandler() { 
	if (isSorting) { 
		console.log("sorting is still going on");
		return;
    }
    comparisons = 0;
	console.log("bubble sort");
	isSorting = true;
    await selectionSOrt();
    isSorting = false;
	console.log('sorted');
}

async function selectionSOrt() { 
	
	await sleep(delay);
	for (let i = 0; i < a.length-1; i++) { 
		for (let j = i+1; j < a.length; j++) {
			await sleep(delay);
			

			if (a[i] > a[j]) {
				// swap
				let t = a[j];
				a[j] = a[i];
				a[i] = t;
			
				comparisons++;
			
			} 
			

		}
		
	}
}





