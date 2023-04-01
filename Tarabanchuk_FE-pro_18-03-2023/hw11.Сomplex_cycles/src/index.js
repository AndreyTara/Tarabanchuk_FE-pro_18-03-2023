var buttonConsole = document.getElementById("add-info-console");

buttonConsole.onclick = () => {
	// task 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
	const minNumberTask1 = 20;
	const maxNumberTask1 = 30;
	const stepTask1 = 0.5;
	const rangeNumber = (maxNumberTask1 - minNumberTask1 + stepTask1) / stepTask1;
	const arrTask1 = [];
	let indexTask1 = 0;
	for (let b = minNumberTask1; b <= maxNumberTask1; b += stepTask1) {
		arrTask1[indexTask1] = b;
		indexTask1++;
	}
	console.log(`task 1. Output a line of text from number >${minNumberTask1}< to number >${maxNumberTask1}< with a step of >${stepTask1}<  -- \n   `, arrTask1.join('  '))


	// task 2
	const dollarCoast = 27;
	const dollarStep = 10;
	const maxDollar = 100;
	// const arrBancnote = new Array(maxDollar / dollarStep);
	const ObjBancnoteCoast = {};
	for (let d = dollarStep; d <= maxDollar; d += dollarStep) {
		ObjBancnoteCoast[d + '$'] = d * dollarCoast + 'hrn';
	}
	const arrBancnote = Object.entries(ObjBancnoteCoast);
	console.log(`task 2. Output a line with dollar conversion from >${dollarStep}< USD to >${maxDollar}< USD in increments of >${dollarStep}< USD exchange rate >${dollarCoast}< UAH
   `, arrBancnote.join(' | '));


	// task 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
	const maxNumberTask3 = 89;
	const limitValueTask3 = (maxNumberTask3) ** (1 / 2) - (maxNumberTask3) ** (1 / 2) % 1;
	const arrNaturalNumber = [];
	for (let f = 1; f <= limitValueTask3; f += 1) {
		arrNaturalNumber[f] = f;
	}
	console.log(`task 3. Output a string of numbers from 1 to 100 whose square does not exceed >${maxNumberTask3}< -- \n  `, arrNaturalNumber.join(' '));


	//task 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
	const primeNumberTask4 = 79;
	let isPrimeNumberTask4;
	for (let i = 2; i <= primeNumberTask4; i++) {
		for (let j = 2; j <= i; j++) {
			if ((i % j == 0) && (j != i)) {
				isPrimeNumberTask4 = 'false'
				break;
			} else {
				isPrimeNumberTask4 = 'true'
				break;
			}
		}
	}
	console.log(`Task4 Input string >${primeNumberTask4}< prime number  is:  \n   >${isPrimeNumberTask4}< .`)


	//tast 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).*/
	const numberTask5 = 5 ** 6;
	const exponentiationBase = 5;
	const ExponentiationTask5 = (Math.log(numberTask5) / Math.log(exponentiationBase));
	const isFixedTask5 = ExponentiationTask5.toFixed(4);
	const isExponentiationTask5 = (isFixedTask5 % 1 === 0)
	console.log(`Task5. Еhe entered number  >${numberTask5.toFixed(1)}< has an integer power in base  >${exponentiationBase}< is: \n  >${isExponentiationTask5} <`);
}