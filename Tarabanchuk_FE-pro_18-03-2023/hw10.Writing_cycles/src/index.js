const buttonConsole = document.getElementById("add-info-console");

buttonConsole.onclick = () => {
	// Написати цикли, які зможуть:

	//1  Вивести на сторінку в один рядок через кому числа від 10 до 20.
	//2  Вивести квадрати чисел від 10 до 20.
	//3  Вивести таблицю множення на 7.
	//4  Знайти суму всіх цілих чисел від 1 до 15.
	//5  Знайти добуток усіх цілих чисел від 15 до 35.
	//6  Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
	//7  Вивести суму лише парних чисел в діапазоні від 30 до 80.
	//8  Вивести всі числа в діапазоні від 100 до 200 кратні 3.
	//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
	//10 Визначити кількість його парних дільників.
	//11 Знайти суму його парних дільників.
	//12 Надрукувати повну таблицю множення від 1 до 10.

	// task1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
	const firstN = 10;
	const secondN = 20;
	const step = 1;
	const arrayTask1 = [];
	let indexTask1 = 0;
	for (let b = firstN; b <= secondN; b += step) {
		arrayTask1[indexTask1] = b;
		indexTask1++;
	}
	console.log('arrayTask1 --', arrayTask1.join(',  '));

	// task2 Вивести квадрати чисел від 10 до 20.
	const arrayTask2 = [];
	let indexTask2 = 0;
	for (let d = 10; d <= 20; d += 1) {
		arrayTask2[indexTask2] = d ** 2;
		indexTask2++;
	}
	console.log('arrayTask2 --', arrayTask2.join(', '));

	// // task3 Вивести таблицю множення на 7.
	const miltiNumber = 7;
	const arrayTask3 = [];
	for (let f = 0; f <= 10; f += 1) {
		arrayTask3[f] = `${f} * 7 = ${f * 7}`;
	}
	arrayTask3.shift();
	console.log('arrayTask3 --', arrayTask3.join(' | '));


	// task4 Знайти суму всіх цілих чисел від 1 до 15.
	const minAddInteger = 1;
	const maxAddInteger = 15;
	let sumAddIntegetTast4 = 0;
	for (let g = minAddInteger; g <= maxAddInteger; g++) {
		sumAddIntegetTast4 += g;
	}
	console.log(`sumAddIntegetTast4 from   >${minAddInteger}<  to  >${maxAddInteger}<   = ${sumAddIntegetTast4}`)



	// task5  Знайти добуток усіх цілих чисел від 15 до 35.
	const minMiltiInteger = 15;
	const maxMiltiInteger = 35;
	let miltiIntegetTast5 = 1;
	for (let g = minMiltiInteger; g <= maxMiltiInteger; g++) {
		miltiIntegetTast5 *= g;
	}
	console.log(`miltiIntegetTast5 from  >${minMiltiInteger}<  to  >${maxMiltiInteger}<   = ${miltiIntegetTast5}`);

	//task6  Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
	const minMiddleInteger = 1;
	const maxMiddleInteger = 500;
	let MiddleIntegerTask6 = 0;
	for (let g = minMiddleInteger; g <= maxMiddleInteger; g++) {
		MiddleIntegerTask6 += g;
	}
	console.log(`miltiIntegetTast6 from  >${minMiddleInteger}<  to  >${maxMiddleInteger}<   = ${MiddleIntegerTask6 / maxMiddleInteger}`);

	//Task7  Вивести суму лише парних чисел в діапазоні від 30 до 80.
	const mixDobleInteger = 30;
	const maxDobleInteger = 80;
	let sumDobleIntegerTask7 = 0;
	for (let g = mixDobleInteger; g <= maxDobleInteger; g += 2) {
		sumDobleIntegerTask7 += g;
	}
	console.log(`sumDobleIntegerTask7 from  >${mixDobleInteger}<  to  >${maxDobleInteger}<   = ${sumDobleIntegerTask7}`);

	//task8  Вивести всі числа в діапазоні від 100 до 200 кратні 3.
	const minTripleInteger = 100;
	const maxTripleInteger = 200;
	let indexTripleTask8 = 0;
	let arrTask8 = [];
	let stepTask8 = 1
	for (let g = minTripleInteger; g <= maxTripleInteger; g += stepTask8) {
		if (g % 3 === 0) {
			arrTask8[indexTripleTask8] = g;
			indexTripleTask8++;
			stepTask8 = 3;
		}
	}
	console.log(`arrTask8 from              >${minTripleInteger}< to >${maxTripleInteger}< --  `, arrTask8.join(' , '));


	//Task9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
	const maxTask9Number = 500;
	let tempMaxTask9Number = maxTask9Number;
	let tempMinTask9Number = 1;
	let arrTask9 = [];
	let stepTask9 = 0;
	for (let g = 1; g <= tempMaxTask9Number; g++) {
		if (maxTask9Number % g === 0) {
			arrTask9[stepTask9] = g;
			stepTask9++;
		}
	}
	console.log(`arrTask9 from   >${maxTask9Number}<  to consists of multipliers  -- `, arrTask9.join(', '))

	//task 10 Визначити кількість його парних дільників.
	const arrTask10 = [...arrTask9];
	const arrDubleTask10 = [];
	let stepTask10 = 0
	for (let k = 0; k < (arrTask10.length); k++) {
		if (arrTask10[k] % 2 === 0) {
			arrDubleTask10[stepTask10] = arrTask10[k];
			stepTask10++;
		}
	}
	console.log(`task 10 even factors  arrDubleTask10 -- ${arrDubleTask10.join(', ')}`);

	//task11 Знайти суму його парних дільників.
	const arrTask11 = [...arrDubleTask10];
	let sumTask11 = 0;
	for (let k = 0; k < (arrTask11.length); k++) {
		sumTask11 += arrTask11[k];
	}
	console.log(`task 11 summa even factors  sumDubleTask11 -- ${sumTask11}`);

	//task12 Надрукувати повну таблицю множення від 1 до 10.
	const minNumberTask12 = 1;
	const maxNumberTask12 = 10;
	const arrTask12 = [];
	for (let m = 1; m <= 10; m += 1) {
		arrTask12.push('\n');
		for (let n = 1; n <= 10; n += 1) {
			arrTask12.push(`${m} * ${n} = ${m * n}`);
		}
	}
	console.log(`Multiplication table  from   >${minNumberTask12}< to >${maxNumberTask12}< --  `, arrTask12.join(' | '));
}