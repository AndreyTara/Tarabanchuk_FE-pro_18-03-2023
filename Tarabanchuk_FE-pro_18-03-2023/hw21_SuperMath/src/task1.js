
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	const obj = {
		X: 12,
		Y: 3,
		znak: '/'
	}
	class SuperMath {
		check(obj) {
			this.x = obj.X;
			this.y = obj.Y;
			this.znak = obj.znak;
			const askBool = confirm('Make a default calculation?')
			if (askBool) {
				console.log(`p.check({X:${this.x}, Y:${this.y}, znak:'${this.znak}'})`, this.doMath());
			} else {
				let asd = this.input()
				console.log(`p.check({X:${this.x}, Y:${this.y}, znak:'${this.znak}'})`, asd);
			}
		}
		doMath() {
			if (this.znak === '+') {
				return this.x + this.y
			} else if (this.znak === '-') {
				return this.x - this.y
			} else if (this.znak === '*') {
				return this.x * this.y
			} else if (this.znak === '/') {
				if (this.y === 0) return console.log('На нуль ділити не можна.');
				return this.x / this.y;
			} else if (this.znak === '%') {
				if (this.y === 0) return console.log('На нуль ділити не можна.');
				return this.x % this.y
			} else {
				console.log('математична операція не обрана')
			}
		}
		input() {
			const wrongInput = 'Wrong input x, y, znak';
			const xStr = prompt('Enter x.');
			const yStr = prompt('Enter y.');
			const znakStr = prompt('Enter znak.');
			const isValidStr = (!isNaN(xStr) || !isNaN(yStr));
			const isValidNumber = (typeof xStr === 'number' && typeof yStr === 'number');
			if (isValidStr || isValidNumber) {
				this.x = xStr;
				this.y = yStr;
				this.znak = znakStr;
				return console.log(wrongInput);
			} else {
				this.x = +xStr;
				this.y = +yStr;
				this.znak = znakStr;
				return this.doMath();
			}
		}
	}
	const p = new SuperMath();
	p.check(obj); // --> no p.input() -> 3 prompt -> рахує
}
