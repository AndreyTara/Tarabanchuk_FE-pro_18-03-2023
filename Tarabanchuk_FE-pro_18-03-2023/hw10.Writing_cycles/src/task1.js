const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	const arrayTask1 = [];
	let indexTask1 = 0;
	for (let b = 10; b <= 20; b += 1) {
		arrayTask1[indexTask1] = b;
		indexTask1++;
	}
	console.log(arrayTask1.join(','));
}
