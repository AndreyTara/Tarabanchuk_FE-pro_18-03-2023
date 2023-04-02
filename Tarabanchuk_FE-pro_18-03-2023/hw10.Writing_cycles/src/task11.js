const buttonTask11 = document.getElementById("task11");
buttonTask11.onclick = () => {
	const inputNumber = 600;
	let sum = 0;
	for (let i = 1; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			if (i % 2 === 0) {
				sum = sum + i;
			}
		}
	}
	console.log(sum)
}