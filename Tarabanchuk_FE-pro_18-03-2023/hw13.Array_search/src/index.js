const sortFunction = (firstValue, nextValue) => {
	if (firstValue < nextValue) { return -1 }
	if (firstValue > nextValue) { return 1 }
	return 0;
}

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const buttonTask1 = document.getElementById("task1");
const buttonTask2 = document.getElementById("task2");
const buttonTask3 = document.getElementById("task3");
const buttonTask4 = document.getElementById("task4");
const buttonTask5 = document.getElementById("task5");
const buttonTask6 = document.getElementById("task6");
const buttonTask7 = document.getElementById("task7");
const buttonTask8 = document.getElementById("task8");
const buttonTask9 = document.getElementById("task9");
const buttonTask10 = document.getElementById("task10");

buttonTask1.onclick = () => {
	const aFiltPlus = array.filter((value) => value > 0)
	const sumFiltPlus = aFiltPlus.reduce((total, amoung) => (total + amoung))
	const numFiltPlus = aFiltPlus.length;
	console.log('array', array);
	console.log('Сума позитивних елементів', sumFiltPlus);
	console.log('Кількість позитивних елементів ', numFiltPlus);
}

buttonTask2.onclick = () => {
	const sortArray = [...array].sort(sortFunction);
	const minElement = sortArray[0];
	const minElementIndex = array.findIndex((x) => x === sortArray[0]);
	console.log('array', array);
	console.log('Мінімальний елемент ', minElement);
	console.log('Порядковий номер мінімального елемента', minElementIndex);
}

buttonTask3.onclick = () => {
	const sortArray = [...array].sort(sortFunction);
	const maxElement = sortArray[array.length - 1];
	const maxElementIndex = array.findIndex((x) => x === sortArray[array.length - 1]);
	console.log('array', array);
	console.log('Максимальний елемент ', maxElement);
	console.log('Порядковий номер максимального елемента', maxElementIndex);
}

buttonTask4.onclick = () => {
	const aFiltMinus = array.filter((value) => value < 0);
	console.log('array', array);
	console.log('Кількість негативних елементів', aFiltMinus.length);
}

buttonTask5.onclick = () => {
	const aFiltMinus = array.filter((value) => value < 0);
	const aFiltNoDudlMinus = aFiltMinus.filter((value) => value % 2 !== 0)
	console.log('array', array);
	console.log('Кількість непарних негативних елементів', aFiltNoDudlMinus.length);
}

buttonTask6.onclick = () => {
	const aFiltMinus = array.filter((value) => value < 0);
	const aFiltDudlMinus = aFiltMinus.filter((value) => value % 2 === 0)
	console.log('array', array);
	console.log('Кількість непарних негативних елементів', aFiltDudlMinus.length);
}

buttonTask7.onclick = () => {
	const arrayFilterPlus = array.filter((value) => value > 0)
	const arrayFilterDoblePlus = arrayFilterPlus.filter((value) => value % 2 === 0)
	const sumArrayFilterDoblePlus = arrayFilterDoblePlus.reduce((total, amoung) => (total + amoung))
	console.log('array', array);
	console.log('Сума парних позитивних елементів', sumArrayFilterDoblePlus);
}

buttonTask8.onclick = () => {
	const arrayFilterPlus = array.filter((value) => value > 0)
	const arrayFilterNoDoblePlus = arrayFilterPlus.filter((value) => value % 2 !== 0)
	const sumArrayFilterNoDoblePlus = arrayFilterNoDoblePlus.reduce((total, amoung) => (total + amoung))
	console.log('array', array);
	console.log('Сума непарних позитивних елементів', sumArrayFilterNoDoblePlus);
}

buttonTask9.onclick = () => {
	const arrayFilterPlus = array.filter((value) => value > 0)
	const miltiArrayFilterDoblePlus = arrayFilterPlus.reduce((total, amoung) => (total * amoung))
	console.log('array', array);
	console.log('Добуток позитивних елементів', miltiArrayFilterDoblePlus);
}

buttonTask10.onclick = () => {
	const sortArray = [...array].sort(sortFunction);
	const maxElement = sortArray[array.length - 1];
	const maxElementIndex = array.findIndex((x) => x === sortArray[array.length - 1]);
	const newArray = new Array(array.length).fill(0)w
	newArray[maxElementIndex] = maxElement;
	console.log('array', array);
	console.log('newAarray', newArray);
}

