const buttonTask4 = document.getElementById("task4");
buttonTask4.onclick = () => {
function func(text, [strA, strB]) {
	return text.split(strA).join('').split(strB).join('').trim('')
}
console.log(func(' hello world', ['l', 'd']))
}
