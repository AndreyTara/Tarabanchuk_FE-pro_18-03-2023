
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	let arr = [null, 'null', undefined, 'undefined', 0, '0', '', 'asd', 'asd1231', '123asd', '123', 2, 8, 10, {}, []];
	console.log('arr', arr)
	function arithmeticalMean(array, item) {
		const arrayNumberMean = [];
		let sumArrayNumberMean = 0;
		array.forEach((element) => {
			let isElementNumber = !isNaN(element) && !isNaN(parseFloat(element));
			if (isElementNumber && (typeof element === 'number')) {
				arrayNumberMean.push(element);
				sumArrayNumberMean += +element;
			}
		});
		return sumArrayNumberMean / arrayNumberMean.length
	}
	console.log(arithmeticalMean(arr))
}