
// const buttonTask1 = document.getElementById("task1");
// buttonTask1.onclick = () => {

// const ladder = function (step) {
// 	return new ladder._f(step);
// };
// ladder._f = function (x) {
// 	this.x = x;
// };
// ladder._f.prototype.up = function () { //up
// 	this.x++;
// 	return this;
// };
// ladder._f.prototype.down = function () { // doun
// 	this.x--;
// 	return this;
// };
// ladder._f.prototype.showStep = function () { //showStep
// 	return this.x;
// };
// console.log(
// 	ladder().up().up().up().up().up().up().down().showStep()
// );


// var ladder = {
// 	step: 0,
// 	up: function up() {

// 		return (this.step++);
// 	},
// 	down: function down() {
// 		return (this.step--);
// 	},
// 	showStep: function showStep() { // показывает текущую ступеньку
// 		return (this.step);
// 	}
// };
// console.log(ladder.up().up())
// console.log(ladder.up())
// console.log(ladder.up())
// console.log(ladder.showStep())
// 	// ladder.up();
	// ladder.down();
	// ladder.showStep(); // 1


	const ladder1 = {
		step: 0,
		up: function up() {
			this.step++;
			return this;
		},
		down: function down() {
			this.step++;
			return this;
		},
		showStep: function showStep() { // показывает текущую ступеньку
			console.log(this.step)
			return this;
		}
	};
	console.log(ladder1.up().up().up().up().up().showStep().up().up().up().showStep());
// }