
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	const wrongMassage = 'Invalid value entered'
	const numStr = prompt('Enter number.');
	const degreeStr = prompt('Enter degree.');
	const isNumStr = !isNaN(numStr) && !isNaN(parseFloat(numStr));
	const isDegreeStr = !isNaN(degreeStr) && !isNaN(parseFloat(degreeStr));
	if (!isNumStr || !isDegreeStr) { return console.log(wrongMassage) };
	function numDegree(num, degree) {
		if (degree === 1) {
			return num;
		} else {
			num = num * numDegree(num, degree - 1);
			return num;
		}
	}
	console.log(numDegree(+numStr, +degreeStr));
}