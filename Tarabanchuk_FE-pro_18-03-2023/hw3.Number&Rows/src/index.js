const buttonConsole = document.getElementById("add-info-console");
const buttonAlert = document.getElementById("add-info-alert");
const buttonDigit = document.getElementById("add-info-digit");
let emptyStr = ' empty string ';

buttonConsole.onclick = () => {
	const firstStr = (prompt('Input first string.') || emptyStr);
	const secondStr = (prompt('Input second string.') || emptyStr);
	const thirdStr = (prompt('Input third string.') || emptyStr);
	console.log('Data output using a template string:')
	console.log(`first  -> ${firstStr} < , second  - > ${secondStr} < ,  third- > ${thirdStr} <`,)
}

buttonAlert.onclick = () => {
	let rezult;
	const firstStr = (prompt('Input first string.') || emptyStr);
	const secondStr = (prompt('Input second string.') || emptyStr);
	const thirdStr = (prompt('Input third string.') || emptyStr);
	rezult = '/first - '.concat(firstStr, '/second - ', secondStr, '/third - ', thirdStr);
	alert(rezult);
}

buttonDigit.onclick = () => {
	const wrongMessage = 'Incorrect input - string is not a number';
	const first = prompt('Input five-digit number');
	const isFirstANumber = !isNaN(first) && !isNaN(parseFloat(first));
	let result = '';
	if (isFirstANumber === true) {
		if (+first > 9999 && +first < 100000) {
			result = first;
		} else {
			console.log('Input number out of range');
			return
		}
	} else{
		console.log(wrongMessage);
		return
	}
	console.log(result.split('').join(' '));
}

