const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	let numOrStr = prompt('Input number or string');
	console.log(numOrStr);
	if (numOrStr === null) {
		console.log('ви скасували--')
	} else if (numOrStr.trim() === '') {
		console.log('Empty String--');
	} else if (isNaN(+numOrStr)) {
		console.log(' number is Ba_NaN--')
	} else {
		console.log('OK!--')
	}


	switch (numOrStr) {
		case null:
			console.log('ви скасували')
			break;
		default:
			switch (numOrStr.trim()) {
				case '':
					console.log('Empty String');
					break;
				default:
					switch (isNaN(+numOrStr)) {
						case true:
							console.log(' number is Ba_NaN');
							break;
						default:
							console.log('OK!')
					}
			}
	}
}