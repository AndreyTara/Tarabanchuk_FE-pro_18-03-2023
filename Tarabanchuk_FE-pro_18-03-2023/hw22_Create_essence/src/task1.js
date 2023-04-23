
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}
		getPerson() {
			return this;
		}
		toConsolePerson() {
			return console.log(this);
		}
	}
	class Car extends Person {
		constructor(brand, model) {
			super()
			this.brand = brand;///Audi.BMW.Ford.Honda.Hyundai.Kia.Lada (ВАЗ)Mazda.
			this.model = model; //Suzuki Jimny 2018
			this.releaseHour = releaseHour; //2018
			this.license = license; //er1234we
		}
		addResidentCar(person) {
			if (this.age > 18) {
				this.resident = this.name;
				console.log(this.resident)
			} //Ivanov
		}

	}

}
