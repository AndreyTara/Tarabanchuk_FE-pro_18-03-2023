
const buttonTask2 = document.getElementById("task2");
buttonTask2.onclick = () => {
	const wrongMassageX = 'Incorrect input x'
	const wrongMassageY = 'Incorrect input y'
	const wrongMassageSign = 'Incorrect input sign'
	function fnAdd(x, y) {
		return x + y;
	}
	function fnDevi(x, y) {
		return x - y;
	}
	function fnMilti(x, y) {
		return x * y;
	}
	function fnDiv(x, y) {
		return x / y;
	}
	function fnMod(x, y) {
		return x % y;
	}
	function fnExp(x, y) {
		return x ** y;
	}
	const arraySign = ['+', '-', '*', '/', '%', '^'];

	const xStr = prompt('Enter first number.');
	const yStr = prompt('Enter second number.');
	const signStr = prompt('Enter math sign(+,-,*,/,%,^)');
	const isXNumber = !isNaN(xStr) && !isNaN(parseFloat(xStr));
	const isYNumber = !isNaN(yStr) && !isNaN(parseFloat(yStr));
	const isSignValid = arraySign.findIndex((value) => value === signStr) !== -1;
	if (!isXNumber === true) return console.log(wrongMassageX);
	if (!isYNumber === true) return console.log(wrongMassageY);
	if (!isSignValid) return console.log(wrongMassageSign);

	arraySign1 = [{ '+': fnAdd(+xStr, +yStr) },
	{ '-': fnDevi(+xStr, +yStr) },
	{ '*': fnMilti(+xStr, +yStr) },
	{ '/': fnDiv(+xStr, +yStr) },
	{ '%': fnMod(+xStr, +yStr) },
	{ '^': fnExp(+xStr, +yStr) },
	];

	function doMath(x, y, znak) {
		let result = null;
		arraySign1.forEach((value) => {
			for (let key in value) {
				if (key === signStr) {
					result = value[key];
					return result;
				}
			}
		})
		console.log(`${x} ${znak} ${y} = ${result}`);
	}
	const asd = doMath(xStr, yStr, signStr);
	console.log(asd);
}