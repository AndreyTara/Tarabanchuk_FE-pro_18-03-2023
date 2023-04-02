const buttonTask3 = document.getElementById("task3");
buttonTask3.onclick = () => {
	for (let i = 0; i <= 10; i += 1) {
		console.log(`${i} * 7 = ${i * 7}`);
	}
}
