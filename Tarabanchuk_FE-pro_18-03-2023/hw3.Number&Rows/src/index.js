const buttonConsole = document.getElementById("add-info-console");
const buttonAlert = document.getElementById("add-info-alert");
const buttonDigit = document.getElementById("add-info-digit");
let emptyStr = ' empty string ';
let emptyNumber = 22445;

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
	rezult = '/first - '.concat(firstStr, '/second - ', secondStr, '****  /third - ', thirdStr);
	alert(rezult);
}

buttonDigit.onclick = () => {
	let rezult;
	const firstStr = (prompt('Input five-digit number.') || emptyNumber);
	rezult = firstNumber.split('').join(' ')
	console.log(rezult);
}

