const buttonTask7 = document.getElementById("task7");
buttonTask7.onclick = () => {
	let sumTask7 = 0;
	for (let i = 30; i <= 80; i += 2) {
		sumTask7 += i;
	}
	console.log(sumTask7);
}
