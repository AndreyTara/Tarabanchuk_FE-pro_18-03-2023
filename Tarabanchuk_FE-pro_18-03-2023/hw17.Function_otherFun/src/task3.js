const buttonTask3 = document.getElementById('task3');
buttonTask3.onclick = () => {
	function checkValue(value) {
		const isValue = !isNaN(value) && !isNaN(parseFloat(value));
		if (!isValue === true) return console.log(wrongMassage);
	}
	const wrongMassage = 'Incorrect enter info.'
	const enterMassageMain = 'Enter length main array.'
	const enterMassageInner = 'Enter length inner array (0 - next el main, 1..10 - add inner array)'
	const enterElement = 'Enter element '
	let lenMain = prompt(enterMassageMain);
	checkValue(lenMain)
	let elemMainArray;
	let elemInnerArray;
	let elemMainArrayTemp = [];
	for (let i = 0; i < lenMain; i++) {
		const lenInner = prompt(enterMassageInner);
		checkValue(lenInner);
		if (+lenInner === 0) {
			elemMainArray = prompt(enterElement + `${i} main array`);
			elemMainArrayTemp.push(elemMainArray);
		} else {
			let elemInnerArrayTemp = [];
			for (let i = 0; i < lenInner; i++) {
				elemInnerArray = prompt(enterElement + `${i} inner array`);
				elemInnerArrayTemp.push(elemInnerArray);
			}
			elemMainArrayTemp.push(elemInnerArrayTemp);
		}
	}
	console.log('All element main array', elemMainArrayTemp)
}
