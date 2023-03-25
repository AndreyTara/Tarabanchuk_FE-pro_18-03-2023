
const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const firstNumber = +prompt('How many hours converts?');
	const calcSecond = firstNumber * 3600;
	alert(` ${firstNumber} hours convert in ${calcSecond} seconds`);
}