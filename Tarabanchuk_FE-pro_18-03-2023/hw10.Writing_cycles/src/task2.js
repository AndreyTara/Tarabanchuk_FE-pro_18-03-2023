const buttonTask2 = document.getElementById("task2");
buttonTask2.onclick = () => {
	for (let i = 10; i <= 20; i += 1) {
		console.log(`${i ** 2}`)
	}
}
