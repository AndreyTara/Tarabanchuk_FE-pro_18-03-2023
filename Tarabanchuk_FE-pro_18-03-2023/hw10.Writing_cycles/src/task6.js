const buttonTask6 = document.getElementById("task6");
buttonTask6.onclick = () => {
	let middleValue = 0;
	for (let i = 1; i <= 500; i++) {
		middleValue += i;
	}
	console.log(` ${middleValue / 500}`);
}
