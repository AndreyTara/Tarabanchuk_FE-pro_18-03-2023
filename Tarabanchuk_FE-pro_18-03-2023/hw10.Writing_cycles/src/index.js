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
const buttonTask11 = document.getElementById("task11");
const buttonTask12 = document.getElementById("task12");

buttonTask1.onclick = () => {
	const arrayTask1 = [];
	let indexTask1 = 0;
	for (let b = 10; b <= 20; b += 1) {
		arrayTask1[indexTask1] = b;
		indexTask1++;
	}
	console.log(arrayTask1.join(','));
}

buttonTask2.onclick = () => {
	for (let i = 10; i <= 20; i += 1) {
		console.log(`${i ** 2}`)
	}
}

buttonTask3.onclick = () => {
	for (let i = 0; i <= 10; i += 1) {
		console.log(`${i} * 7 = ${i * 7}`);
	}
}

buttonTask4.onclick = () => {
	let sumTask4 = 0;
	for (let i = 1; i <= 15; i++) {
		sumTask4 += i;
	}
	console.log(sumTask4)
}

buttonTask5.onclick = () => {
	let miltiTask = 1;
	for (let i = 15; i <= 35; i++) {
		miltiTask *= i;
	}
	console.log(miltiTask);
}

buttonTask6.onclick = () => {
	let middleValue = 0;
	for (let i = 1; i <= 500; i++) {
		middleValue += i;
	}
	console.log(` ${middleValue / 500}`);
}

buttonTask7.onclick = () => {
	let sumTask7 = 0;
	for (let i = 30; i <= 80; i += 2) {
		sumTask7 += i;
	}
	console.log(sumTask7);
}

buttonTask8.onclick = () => {
	for (let i = 100; i <= 200; i++) {
		if (i % 3 === 0) {
			console.log(i)
		}
	}
}

buttonTask9.onclick = () => {
	const inputNumber = 600;
	for (let i = 1; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			console.log(i)
		}
	}
}

buttonTask10.onclick = () => {
	const inputNumber = 600;
	for (let i = 1; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			if (i % 2 === 0) {
				console.log(i)
			}
		}
	}
}

buttonTask11.onclick = () => {
	const inputNumber = 600;
	let sum = 0;
	for (let i = 1; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			if (i % 2 === 0) {
				sum = sum + i;
			}
		}
	}
	console.log(sum)
}

buttonTask12.onclick = () => {
	const arrTask12 = [];
	for (let m = 1; m <= 10; m += 1) {
		for (let n = 1; n <= 10; n += 1) {
			console.log(`${m} * ${n} = ${m * n}`);
		}
	}
}