
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	class Person {
		constructor(name, gender) {
			this.name = name;
			this.gender = gender;
		}
		getPerson() {
			return this;
		}
	}
	class Apartament {
		constructor(numApart) {
			this.numApart = numApart;
			this.personAppart = [];
		}
		addApartament(person) {
			this.personAppart.push(person);
			return this;
		}
	}
	class Building {
		addApartMax(maxApartInBuild) {
			this.maxApartInBuild = maxApartInBuild;
			this.currentAppart = [];
			return this;
		}
		addApartToBuild(appart) {
			if ((this.currentAppart.length + 1) > this.maxApartInBuild) {
				return console.log('Перевищення кількості кваритир у будинку');
			};
			this.currentAppart.push(appart);
			return this;
		}
	}
	const firstP = new Person('Ivanov', 'male');
	const seconP = new Person('Petrov', 'male');
	const thirdP = new Person('Kacman', 'female');
	const fourtP = new Person('Trumen', 'male');
	const fifthP = new Person('Garison', 'female');
	console.log(firstP, seconP, thirdP, fourtP, fifthP);
	const firstA = new Apartament('кв1');
	const seconA = new Apartament('кв2');
	const thirdA = new Apartament('кв3');
	const fourtA = new Apartament('кв4');
	const fifthA = new Apartament('кв5');
	console.log(firstA, seconA, thirdA, fourtA, fifthA);
	firstA.addApartament(firstP);
	firstA.addApartament(seconP);
	seconA.addApartament(thirdP);
	seconA.addApartament(fourtP);
	fifthA.addApartament(fifthP);
	console.log(firstA);
	const firstB = new Building();
	firstB.addApartMax(2);
	firstB.addApartToBuild(firstA);
	firstB.addApartToBuild(seconA);
	firstB.addApartToBuild(fifthA);
	console.log(firstB);
}
