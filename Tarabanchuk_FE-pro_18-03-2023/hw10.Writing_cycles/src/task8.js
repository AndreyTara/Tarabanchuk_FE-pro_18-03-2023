const buttonTask8 = document.getElementById("task8");
buttonTask8.onclick = () => {
	for (let i = 100; i <= 200; i++) {
		if (i % 3 === 0) {
			console.log(i)
		}
	}
}