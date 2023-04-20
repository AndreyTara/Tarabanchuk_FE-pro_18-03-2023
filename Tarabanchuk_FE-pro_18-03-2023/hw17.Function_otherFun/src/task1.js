
// const buttonTask1 = document.getElementById("task1");
// buttonTask1.onclick = () => {
function f(newN) { console.log('${newN}') };
var sayings = new Map();
sayings.set("dog", "woof").set("cat", "meow").set("elephant", "toot");
let arr = [null, 'null', undefined, 'undefined', 0, '0', '', 'asd', 'asd1231', '123asd', '123', 2, -8, 100, { asd: 'sila' }, [1.5, 16.66, 32], NaN, f('new'), sayings];
console.log('arr', arr)
function arithmeticalMean(array) {
	const arrayNumberMean = [];
	let sumArrayNumberMean = 0;
	array.forEach((element) => {
		let isElementNumber = !isNaN(element);
		if (isElementNumber && (typeof element === 'number')) {
			if (element < 0) { return }
			console.log(element);
			arrayNumberMean.push(element);
			sumArrayNumberMean += element;
		}
	});
	return sumArrayNumberMean / arrayNumberMean.length;
}
console.log('arithmeticalMean(arr)', arithmeticalMean(arr));
// }
