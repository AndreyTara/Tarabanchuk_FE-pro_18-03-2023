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