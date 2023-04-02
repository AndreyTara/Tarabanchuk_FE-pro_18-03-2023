const buttonTask10 = document.getElementById("task10");
buttonTask10.onclick = () => {
	const inputNumber = 600;
	for (let i = 1; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			if (i % 2 === 0) {
				console.log(i)
			}
		}
	}
}
