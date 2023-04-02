const buttonTask9 = document.getElementById("task9");
buttonTask9.onclick = () => {
	const inputNumber = 600;
	for (let i = 1; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			console.log(i)
		}
	}
}
