function id(id) {
	return document.getElementById(id);
}
var array = [5, 4, 6, -3, 4, -1];
var maxsumcontainer = [];
let curr_sum = 0; let max_sum = 0;
const kadanes = async (array, arrayLength) => {
	console.log("inside");
	for (let i = 0; i < arrayLength; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		)
		curr_sum = curr_sum + array[i];
		id("currentsum").innerText = `Current Sum : ${curr_sum}`
		maxsumcontainer[i] = i;
		id(i).style.color = "cyan";
		// id(i).style.textAlign="center"
		id(i).style.border = "2px solid cyan"
		if (curr_sum > max_sum) {
			max_sum = curr_sum;
			id("answer").innerText = `Maximum Sum : ${max_sum}`;
		}
		if (curr_sum < 0) {
			curr_sum = 0
		}
	}
	// id("container").style.textShadow="0 0 10px cyan
	//,0 0 40px cyan, 0 0 80px cyan;"
	id("container").style.color = "red";
	id("container").innerText = "Ended"
	id("answer").innerText = `Maximum Sum : ${max_sum}`;
}
window.onload = () => {
	id("start").addEventListener('click', () => {
		id("start").style.display = "none";
		// id("input").style.display="none"
		console.log(array);
		let idcount = 0;
		for (let i = 0; i < array.length; i++) {
			let tile = document.createElement('span');
			tile.id = idcount;
			tile.classList.add("tile");
			tile.innerText = array[i];
			// tile.style.margin="2px";
			// tile.style.padding="1vmin"
			id("container").appendChild(tile);
			idcount++;
		}
		kadanes(array, array.length);
	})

}
