const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	let numOrStr = prompt('Input number or string');
	console.log(numOrStr);
	switch (true) {
		case numOrStr === null:
			console.log('ви скасували')
			break;
		case numOrStr.trim() === '':
			console.log('Empty String');
			break;
		case isNaN(+numOrStr):
			console.log(' number is Ba_NaN');
			break;
		default:
			console.log('OK!')
	}
}