const buttonTask4 = document.getElementById("task4");
buttonTask4.onclick = () => {
function func(text, args) {
	const textMas = text.split('');
	const result = textMas.filter((value) => {
		let temp = 1
		for (let i = 0; i < args.length; i++) {
			if (value === args[i]) temp = 0;
		}
		if (temp === 1) return value
	});
	return result.join('');
	// return text.split(strA).join('').split(strB).join('').trim(' ')
}
console.log(func(' hello world', ['l', 'd']))
}
