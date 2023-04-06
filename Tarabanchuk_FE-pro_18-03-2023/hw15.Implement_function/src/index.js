const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
	if (Array.isArray(array) === false) return console.log(`${array} is not array.`);
	const indexItem = array.findIndex((value) => value === item);
	if (indexItem === -1) {
		return console.log(`element ${item} is not in this array [${array}].`);
	}
	return array.splice(indexItem, 1), array
}

removeElement(array, 5);
console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]