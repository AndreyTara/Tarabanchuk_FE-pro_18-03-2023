
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	minOnerAge = 18;//@мінімальний вік власника
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		toConsolePerson() {
			return console.log(this);
		}
	}
	class Car {
		constructor(brand, model, releaseYear, stateNum) {
			this.brand = brand;                   //Audi.BMW.Ford.Honda.Hyundai.Kia.Lada (ВАЗ)Mazda.
			this.model = model;                   //Suzuki Jimny 2018
			this.releaseYear = releaseYear;       //2018
			this.stateNum = stateNum;             //er1234we
			this.resident = null;
		}
		addResidentCar(person) {  // SEt
			if (person.age >= minOnerAge) {
				this.resident.push(person.name);//this.resident.=person.name;
				return this;
			}
			console.log('Людині менше 18 років')
			return this;
		}
		toConsoleResCar() {
			if (this.resident) {
				return console.log(this);
			} else {
				console.log('У авто відсутній власник')
			}
		}
	}
	const person1 = new Person('Ivanov', 19)
	const person2 = new Person('Petrov', 17)
	const person3 = new Person('Washington', 29)
	const person4 = new Person('Kaxin', 16)
	const person5 = new Person('Vermeer', 49)
	person1.toConsolePerson()
	person2.toConsolePerson()
	person3.toConsolePerson()
	person4.toConsolePerson()
	person5.toConsolePerson()
	const car1 = new Car('Toyota', 'Camry', 2023, 'as1234ds');
	const car2 = new Car('Jeep', 'Grand', 2010, 'as4123ds');
	const car3 = new Car('Ford', 'F150', 2020, 'we1254se');
	const car4 = new Car('Susuki', 'Alto', 1988, 'qr2234df');
	const car5 = new Car('Lada', 'Calina', 2010, 'sa1421ox');
	car1.addResidentCar(person1)
	car2.addResidentCar(person2)
	car3.addResidentCar(person3)
	car4.addResidentCar(person4)
	car5.addResidentCar(person5)
	car1.toConsoleResCar()
	car2.toConsoleResCar()
	car3.toConsoleResCar()
	car4.toConsoleResCar()
	car5.toConsoleResCar()
}
