var buttonConsole = document.getElementById(id = "add-info-alert");
const sortFunction = (firstValue, nextValue) => {
	if (firstValue < nextValue) { return -1 }
	if (firstValue > nextValue) { return 1 }
	return 0;
}
const wrongMassage = 'Incorrect input'

buttonConsole.onclick = () => {
	const arrayLength = prompt('Enter the number of array length');
	const isInputElArray = !isNaN(arrayLength) && !isNaN(parseFloat(arrayLength));
	if (!isInputElArray === true) return console.log(wrongMassage);
	console.log(`In your array ${arrayLength} elements`);
	const array = [];
	let isInputElement;
	for (let i = 0; i < arrayLength; i++) {
		let inputElement = prompt(`Enter ${i} element of array`);
		isInputElement = !isNaN(inputElement) && !isNaN(parseFloat(inputElement));
		if (!isInputElement === true) return console.log(wrongMassage);
		array[i] = +inputElement;
	}
	console.log(array)
	const arraySort = array.sort(sortFunction);
	console.log('array after sort', arraySort);
	arraySort.splice(1, 3);
	console.log('array minus 2 el', arraySort);
}
