const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	let photoObj = [
		'src/img/1.jpg',
		'src/img/2.jpg',
		'src/img/3.jpg',
		'src/img/4.jpg',
		'src/img/5.jpg',
		'src/img/6.jpg',
		'src/img/7.jpg',
		'src/img/8.jpg',
		'src/img/9.jpg',
		'src/img/10.jpg',
	];

	let popPhotos = document.querySelector('#popup');
	let newPhotos = photoObj.map(photo => {
		const random = Math.floor(Math.random() * 9 + 1);
		return `<img src=" img/${random}.jpg" /> `;
	}).join('')
	popPhotos.innerHTML = newPhotos;
}
