const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(lenString, characters) {
	let randomString = '';
	for (let i = 0; i < lenString; i++) {
		let rendomIndex = Math.floor(Math.random() * characters.length);
		randomString += characters.substring(rendomIndex, rendomIndex + 1);
	}
	return randomString;
}
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i







// asd = characters.split('')
	// // console.log(asd)
	// asd.forEach((value, index, array) => {
	// 	rendomIndexElement = Math.floor(Math.random() * characters.length);
	// 	console.log(rendomIndexElement);
	// 	if (randomString.length < lenString) {
	// 		randomString += characters.substring(rendomIndexElement, rendomIndexElement + 1);
	// 	}
	// 	// randomString.push(characters.filter((value) => value > rendomIndexElement))
	// })
	// randomString.push(characters.filter((value) => value > ))
	// const sumFiltPlus = aFiltPlus.reduce((total, amoung) => (total + amoung))