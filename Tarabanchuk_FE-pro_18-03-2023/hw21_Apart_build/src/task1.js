
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
	class Apartament {//flat
		personAppart = null;
		addApartament(person) {
			this.personAppart.push(person);
			return this;
		}
	}
	class Building {//House
		constructor(maxApartInBuild) {
			this.maxApartInBuild = maxApartInBuild;
			this.personAppart = [];
			return this;
		}
		addApartToBuild(appart) {
			if ((this.currentAppart.length + 1) > this.maxApartInBuild) {
				return console.log('Перевищення кількості кваритир у будинку');
			}
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
	firstA.addApartament(firstP).addApartament(seconP);
	seconA.addApartament(thirdP).addApartament(fourtP);
	fifthA.addApartament(fifthP);
	console.log(firstA);
	const firstB = new Building();
	firstB.addApartMax(2);
	firstB.addApartToBuild(firstA).addApartToBuild(seconA).addApartToBuild(fifthA);
	console.log(firstB);
}
