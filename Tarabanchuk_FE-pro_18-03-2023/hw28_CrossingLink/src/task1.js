
const inputAdd = document.querySelector('#input');
const buttonAdd = document.querySelector('#button');


buttonAdd.addEventListener('click', onClickHand);
inputAdd.addEventListener('change', onChangeHand);

function onChangeHand(evt) {
	buttonAdd.textContent = 'Go to url ' + evt.target.value;

}

function onClickHand() {
	let linkTemp;
	const value = inputAdd.value;
	if (value.indexOf('http' === -1) || value.indexOf('https' === -1)) {
		linkTemp = 'https://' + value;
	}
console.log(linkTemp)
	return window.location.href = linkTemp;
}
