const buttonTask5 = document.getElementById("task5");
buttonTask5.onclick = () => {
	let miltiTask = 1;
	for (let i = 15; i <= 35; i++) {
		miltiTask *= i;
	}
	console.log(miltiTask);
}
