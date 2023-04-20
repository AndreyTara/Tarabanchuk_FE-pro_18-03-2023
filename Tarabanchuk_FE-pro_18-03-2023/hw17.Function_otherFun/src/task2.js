
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
const xStr = prompt('Enter first number.');
const yStr = prompt('Enter second number.');
const signStr = prompt('Enter math sign(+ , - , * , / , % , ^ )');
const wrongMassageX = 'Incorrect input x';
const wrongMassageY = 'Incorrect input y';
const wrongMassageSign = 'Incorrect input sign';
const wrongMassage = 'Invalin input';

if (isNaN(xStr)) { return alert(wrongMassageX) };
if (isNaN(yStr)) { return alert(wrongMassageY) };
const x = +xStr;
const y = +yStr;
const znak = signStr;
if ((signStr === '/') && (y === 0)) { return alert('На нуль ділити не можна') };
if ((signStr === '%') && (y === 0)) { return alert('На нуль ділити не можна') };

function doMath(x, y, znak) {
	arraySign = [{ sign: '+', funct: x + y },
	{ sign: '-', funct: x - y },
	{ sign: '*', funct: x * y },
	{ sign: '/', funct: x / y },
	{ sign: '%', funct: x % y },
	{ sign: '^', funct: x ** y },
	];
	const isSignValid = arraySign.findIndex((value) => value.sign === znak) !== -1;
	if (!isSignValid) return alert(wrongMassageSign);
	let temp = arraySign.filter((value) => value.sign === znak);
	const result = temp[0].funct
	if (isNaN(result)) return alert(wrongMassage);
	alert(`${x} ${znak} ${y} = ${result}`);
	return result;
}

const asd = doMath(x, y, znak);
if (asd) { return alert(asd) };
 }

// function doMathSecond(x, y, znak) {
// 			if (znak === '+') {
// 		return x + y
// 	} else if (znak === '-') {
// 		return x - y
// 	} else if (znak === '*') {
// 		return x * y
// 	} else if (znak === '/') {
// 		if (y === 0) return alert('На нуль ділити не можна.');
// 		return x / y
// 	} else if (znak === '%') {
// 		if (y === 0) return alert('На нуль ділити не можна.');
// 		return x % y
// 	} else if (znak === '^') {
// 		if ((x ** y === NaN)) return alert('Invalid value');
// 		return x ** y;
// 	} else {
// 		alert('математична операція не обрана')
// 	}

// }