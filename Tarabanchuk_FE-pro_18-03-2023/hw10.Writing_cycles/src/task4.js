const buttonTask4 = document.getElementById("task4");
buttonTask4.onclick = () => {
	let sumTask4 = 0;
	for (let i = 1; i <= 15; i++) {
		sumTask4 += i;
	}
	console.log(sumTask4)
}
