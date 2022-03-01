var isSorting = false;
async function mergeSortHandler() { 
	if (isSorting) { 
		console.log("sorting is still going on");
		return;
    }
    comparisons = 0;
	console.log("merge sort");
	isSorting = true;
    await mergeSort(0, a.length - 1);
	isSorting = false;
    
	console.log('sorted');
}

async function merge(start, mid, end) {
	let i = start, j = mid + 1;
	let b = [];
	while (i <= mid && j <= end) {
        comparisons++;
        if (a[i] < a[j]) {
			b.push(a[i++]);
		} else { 
			b.push(a[j++]);
		}
	}
	while (i <= mid) {
        comparisons++;

		b.push(a[i]);
		i++;
	}

    while (j <= end) {
        comparisons++;
        
		b.push(a[j]);
		j++;
	 }
	let c = 0;
	for (let i = start; i <= end; i++) { 
		a[i] = b[c++];
		await sleep(delay)
		
	}
	

}
async function mergeSort(i, j) { 
	// console.log("i : ", i, " j : ", j);
	
	if (i < j) {
		let mid = (int)((i + j) / 2);
		await sleep(delay);
		await mergeSort(i, mid);
		await sleep(delay);
		await mergeSort(mid + 1, j)
		await sleep(delay);
		await merge(i, mid, j)
		await sleep(delay);

	}
	// if (i==a.length-1&&j==a.length-1) { 
	// 	console.log('completed');
	// 	noLoop();
	// }
	// console.log('completed');
}
