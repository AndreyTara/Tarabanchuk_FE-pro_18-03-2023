
const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const wrongMessage = 'Incorrect input - string is not a number';
	const first = prompt('How many hours converts?');
	const isFirstANumber = !isNaN(first) && !isNaN(parseFloat(first));
	let calcSecond = 0;
	if (isFirstANumber === true) {
		calcSecond = first * 3600;
	} else {
		alert(wrongMessage);
		return
	}
	alert(` ${first} hours convert in ${calcSecond} seconds`);
}