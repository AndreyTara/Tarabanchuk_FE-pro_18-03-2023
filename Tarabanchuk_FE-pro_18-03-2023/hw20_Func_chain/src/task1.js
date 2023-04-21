
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {

	var ladder1 = {
		step: 0,
		up: function up() {
			this.step++;
			return this
		},
		down: function down() {
			this.step++;
			return this
		},
		showStep: function showStep() { // показывает текущую ступеньку
			console.log(this.step)
			return this
		}
	};
	console.log(ladder1.up().up().up().up().up().showStep().up().up().up().showStep())
}