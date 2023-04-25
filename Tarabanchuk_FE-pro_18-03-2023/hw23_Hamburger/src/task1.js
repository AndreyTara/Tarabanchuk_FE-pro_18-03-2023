
const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {

	class Hamburger {

		// /**
		//  * @constructor
		//  * @param {String} size - Размер
		//  * @param {String} stuffing - Начинка
		//  */
		constructor(size, stuffing) {
			this._size = size;
			this._stuffing = stuffing;
			this._toppings = [];
		}

		// /**
		//  * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
		//  * @param {String} topping - Тип добавки
		//  */
		addTopping(topping) {
			if (this._toppings.findIndex((value) => value === topping) === -1) {
				return this._toppings.push(topping);
			}
		}

		// /**
		//  * Убрать topping, при условии, что она ранее была добавлена
		//  * @param {String} topping - Тип добавки
		//  */
		removeTopping(topping) {
			let index = this._toppings.findIndex((value) => (value === topping))
			if (index !== -1) {
				this._toppings.splice(index, 1);
			};
			return this;
		}


		/**
		 * Получить список toppings
		 * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
		 *
		 * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
		 */
		getToppings() {
			return this._toppings
		}

		/**
		 * Узнать размер гамбургера
		 * @returns {String} - размер гамбургера
		 *
		 * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
		 */
		getSize() {
			return this._size;
		}

		/**
		 * Узнать начинку гамбургера
		 * @returns {String} - начинка гамбургера
		 * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
		 */
		getStuffing() {
			return this._stuffing;
		}

		/**
		 * Узнать цену гамбургера
		 * @returns {Number} - Цена в деньгах
		 *
		 * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
		 */
		calculatePrice() {
			let sum_size = 0;
			for (let i = 0; i < (this._size).length; i++) {
				sum_size += Hamburger.SIZES[this._size[i]].price;
			}
			let sum_stuffing = 0;
			for (let i = 0; i < this._stuffing.length; i++) {
				sum_stuffing += Hamburger.STUFFINGS[this._stuffing[i]].price;
			}
			let sum_toppings = 0;
			for (let i = 0; i < this._toppings.length; i++) {
				sum_toppings += Hamburger.TOPPINGS[this._toppings[i]].price;
			}
			return sum_size + sum_stuffing + sum_toppings;
		}

		/**
		 * Узнать калорийность
		 * @returns {Number} - Калорийность в калориях
		 *
		 * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
		 */
		calculateCalories() {
			let sum_size = 0; //this._size.filter((value) => Hamburger.SIZES[value].calories);
			for (let i = 0; i < (this._size).length; i++) {
				sum_size += Hamburger.SIZES[this._size[i]].calories;
			}
			let sum_stuffing = 0;
			for (let i = 0; i < this._stuffing.length; i++) {
				sum_stuffing += Hamburger.STUFFINGS[this._stuffing[i]].calories;
			}
			let sum_toppings = 0;
			for (let i = 0; i < this._toppings.length; i++) {
				sum_toppings += Hamburger.TOPPINGS[this._toppings[i]].calories;
			}
			return sum_size + sum_stuffing + sum_toppings
		}
	}

	/*
		Размеры, виды добавок и начинок объявите как статические поля класса.
		Добавьте отсутсвующие поля по аналогии с примером.
	*/
	Hamburger.SIZE_SMALL = ['SIZE_SMALL'];
	Hamburger.SIZE_LARGE = ['SIZE_LARGE'];

	Hamburger.SIZES = {
		['SIZE_SMALL']: { //[Hamburger.SIZE_SMALL]
			price: 50,
			calories: 20,
			name: 'SIZE_SMALL'
		},
		['SIZE_LARGE']: { //	[Hamburger.SIZE_LARGE]
			price: 100,
			calories: 40,
			name: 'SIZE_LARGE'
		},
	};

	Hamburger.STUFFING_CHEESE = ['STUFFING_CHEESE'];
	Hamburger.STUFFING_SALAD = ['STUFFING_SALAD'];
	Hamburger.STUFFING_POTATO = ['STUFFING_POTATO'];

	Hamburger.STUFFINGS = {
		['STUFFING_CHEESE']: { //[Hamburger.STUFFING_CHEESE]
			price: 10,
			calories: 20,
			name: 'STUFFING_CHEESE'
		},
		['STUFFING_SALAD']: { //[Hamburger.STUFFING_SALAD]
			price: 20,
			calories: 5,
			name: 'STUFFING_SALAD'
		},
		['STUFFING_POTATO']: { //[Hamburger.STUFFING_POTATO]
			price: 15,
			calories: 10,
			name: 'STUFFING_POTATO'
		},
	};

	Hamburger.TOPPING_SPICE = ['TOPPING_SPICE'];
	Hamburger.TOPPING_SAUCE = ['TOPPING_SAUCE'];
	Hamburger.TOPPING_MAYO = ['TOPPING_MAYO'];

	Hamburger.TOPPINGS = {
		['TOPPING_SPICE']: {//[Hamburger.TOPPING_SPICE]
			price: 15,
			calories: 0,
			name: 'TOPPING_SPICE'
		},
		['TOPPING_SAUCE']: {//[Hamburger.TOPPING_SAUCE]
			price: 20,
			calories: 5,
			name: 'TOPPING_SAUCE'
		},
		['TOPPING_MAYO']: {//[Hamburger.TOPPING_MAYO]
			price: 20,
			calories: 5,
			name: 'TOPPING_MAYO'
		},
	};

	/* Вот как может выглядеть использование этого класса */

	// Маленький гамбургер с начинкой из сыра
	const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);

	// Добавка из приправы
	hamburger.addTopping(Hamburger.TOPPING_MAYO);

	// Спросим сколько там калорий
	console.log("Calories: ", hamburger.calculateCalories());// -> 40

	// Сколько стоит?
	console.log("Price: ", hamburger.calculatePrice());// -> 75

	// Я тут передумал и решил добавить еще соус
	hamburger.addTopping(Hamburger.TOPPING_SAUCE);
	hamburger.addTopping(Hamburger.TOPPING_SPICE);
	//А сколько теперь стоит?
	console.log("Price with sauce: ", hamburger.calculatePrice());// -> 95

	// // Проверить, большой ли гамбургер?
	console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

	// Убрать добавку
	hamburger.removeTopping(Hamburger.TOPPING_SPICE);

	// Смотрим сколько добавок
	console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
}


// class CompositionElement {
// 	constructor(price, calories) {
// 		this.price = price;
// 		this.calories = calories;
// 	}
// }
// class Hamburger {
//   static #SIZE_SMALL = new CompositionElement(50, 20);
//   static #SIZE_HUGE = new CompositionElement(100, 40);
//   static #STUFFING_CHEESE = new CompositionElement(10, 20);
//   static #STUFFING_SALAD = new CompositionElement(20, 5);
//   static #STUFFING_POTATOE = new CompositionElement(15, 10);
//   static #TOPPING_SAUCE = new CompositionElement(15, 0);
//   static #TOPPING_MAYO = new CompositionElement(20, 5);

//   static get SIZE_SMALL () { return Hamburger.#SIZE_SMALL};
//   static get SIZE_HUGE () { return Hamburger.#SIZE_HUGE};
//   static get STUFFING_CHEESE () { return Hamburger.#STUFFING_CHEESE};
//   static get STUFFING_SALAD () { return Hamburger.#STUFFING_SALAD};
//   static get STUFFING_POTATOE () { return Hamburger.#STUFFING_POTATOE};
//   static get TOPPING_SAUCE () { return Hamburger.#TOPPING_SAUCE};
//   static get TOPPING_MAYO () { return Hamburger.#TOPPING_MAYO};

//   #size = null;
//   #stuff = null;
//   #ingredients = [];

//   constructor(...args) {
//     args.forEach(this.#changeComposition.bind(this));
//   }

//   #changeComposition(element) {
//     switch (element) {
//       case Hamburger.#SIZE_SMALL:
//       case Hamburger.#SIZE_HUGE:
//         this.#changeSize(element);
//         break;
//       case Hamburger.#STUFFING_CHEESE:
//       case Hamburger.#STUFFING_SALAD:
//       case Hamburger.#STUFFING_POTATOE:
//         this.#changeStuff(element);
//         break;
//       default:
//         this.addTopping(element);
//     }
//   }

//   #changeSize(size) {
//     this.#size = size;
//   }

//   #changeStuff(stuff) {
//     this.#stuff = stuff;
//   }

//   addTopping(topping) {
//     this.#ingredients.push(topping);
//   }

//   calculate() {
//     return this.#size.calories +
//       this.#stuff.calories +
//       this.#ingredients.reduce((totalCalories, ingredient) => totalCalories + ingredient.calories, 0);
//   }

//   calculatePrice() {
//     return this.#size.price +
//       this.#stuff.price +
//       this.#ingredients.reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0);
//   }

// }
// // маленький гамбургер с начинкой з сыру //
// let hamburger = new Hamburger(Hamburger.SIZE_HUGE, Hamburger.STUFFING_CHEESE);
// // добавка майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спрашиваем сколько калорий
// console.log('Calories: ' + hamburger.calculate ());
// // тут я передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);
// // Сколько теперь стоит?
// console.log('Price with sauce:' + hamburger.calculatePrice());