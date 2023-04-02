const buttonTask12 = document.getElementById("task12");
buttonTask12.onclick = () => {
	const arrTask12 = [];
	for (let m = 1; m <= 10; m += 1) {
		for (let n = 1; n <= 10; n += 1) {
			console.log(`${m} * ${n} = ${m * n}`);
		}
	}
}