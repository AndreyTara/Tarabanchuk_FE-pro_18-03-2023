const listCardsArr = [
	{
		'idEl': 0,
		"nameEl": "Холодильник SAMSUNG RB36T677FB1/UA",
		"fotoSrcEl": './src/img/samsung.webp',
		'priceEl': 8000,
		"characteristicsEl0": "Загальний об'єм холодильника: 303 л",
		"characteristicsEl1": "Система розморожування холодильної камери:	No Frost (суха)",
		'useClient': null
	},
	{
		'idEl': 1,
		"nameEl": "Холодильник Snaige RF57SM-S5DP2F ",
		"fotoSrcEl": './src/img/snaige.webp',
		'priceEl': 21840,
		"characteristicsEl0": "Загальний об'єм холодильника: 310 л",
		"characteristicsEl1": "Система розморожування холодильної камери:	No Frost (суха)",
		'useClient': null
	},
	{
		'idEl': 2,
		"nameEl": "Холодильник LIEBHERR CBNbe 6256",
		"fotoSrcEl": './src/img/liebherr.webp',
		'priceEl': 252348,
		"characteristicsEl0": "Загальний об'єм холодильника		585 л",
		"characteristicsEl1": "Система розморожування No Frost (Frost Free)",
		'useClient': null
	}
]

const htmlTextForm = `<div  style="display: block;   
       border: dotted 1px grey;
			 font-family:  monospace;
			 width:fit-content; 
				height: fit-content; margin: 10px;
				padding: 10px;">
				<h4>
					Форма для заказу:
				</h4>
				<label>ПІБ покупця</label>
				<Input type="text" id="fullNameUser" requered></Input>
				<br> <br>
				<label>Місто отримання товару</label>
				<select name="checkCity" id="city" requered>
					<option value="">Choose a city</option>
					<option value="Dnipro">Днепр</option>
					<option value="Kyiv">Київ</option>
					<option value="Lviv">Львів</option>
					<option value="Odesa">Одеса</option>
				</select>
				<br> <br>
				<label>Склад Нової пошти для надсилання</label>
				<Input type="number" id="numPost" value="1" min="1" max="60000" requered></Input>
				<br> <br>
				<label>Метод сплати за товар </label>
				<select name="pay" id="checkPay" requered>
					<option value="">Choose paymant</option>
					<option value="postpaid">Післяплатa</option>
					<option value="bankCard">Банківською карткою</option>
				</select>
				<br> <br>
				<label>Кількість продукції, що купується </label>
				<Input type="number" id="quantity" value="0"  min="1" max="1000" requered></Input>
				<br> <br>
				<label>Коментар до замовлення</label>
				<textarea id='commentInput' name='comment' cols="20" rows="2" value="не вказано"></textarea>
				<br> <br>
				<button  type="button" data-value='form'>Замовити</button>
</div>`

const htmlTextOrder = `<form id ='orderForm'style=' display: block; border:  1px dotted grey ; 
width:fit-content;	
height: fit-content; 
margin: 10px; 
padding: 10px; font-family:  monospace;'>
					<h3>
						Отриманий заказ:
					</h3>
				<b>Покупець: </b>                  <p class='fullNameUser'></p>
				<b>Отримує продукцію: </b>         <p class='nameEl'> </p>
				<b>Метод оплати: </b>              <p class='checkPay'> </p>
				<b>Доставка у місто:  </b>         <p class='city'>  </p>
				<b>У відділенні "Нової пошти":</b> <p class='numPost'>  </p>
				<b>У кількості:(одиниць)  </b>     <p class='quantity'> </p>
				<b>Вартість одиниці:(UAH)</b>      <p class='priceEl'>  </p>
				<b>Повна вартість заказу становить:(UAH) </b><p class='costElements'> </p>
				<b>Коментар:  </b>                 <p class='commentInput'></p>
				<br>
				<button type="button" data-value='addToMyOrder' style="background-color: aquamarine;">Додати у "Мої Замовленя"</button>	
				<button type="button" data-value='order'	style="background-color:aqua;">Повернутися до Товарів</button>	
				</form>`

function createCardsList(dataArr) {
	return dataArr.map((card) => {
		let asd = card.priceEl
		return `<article  style='width: 220px; border: 1px dotted grey; margin: 10px; padding: 10px; font-family:  monospace;' >
					<h2>${card.nameEl}</h2>
					<p >Ціна: ${String(asd).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}UAH</p>
					<p>Фото: </p>
					<img src="${card.fotoSrcEl}" style="height: 200px; width: auto;" alt='picture-${card.fotoSrcEl.split('/')[3].split('.')[0]}'>
					<p>Характеристики: </p>
					<ul>
					<li>${card.characteristicsEl0}</li>
					<li>${card.characteristicsEl1}</li>
					</ul>
					<button  type="button" data-value='cards' style='width: 60%; background: aqua;'  id='${card.idEl}' >Купити!</button> 
		</article>`
	}).join('');
}

const cardsElements = document.querySelector('#cards');  		//знайшов form елементов
const formOrderUser = document.querySelector('#form'); 	//знайшов form формиЗаказу
const resulsOfOrder = document.querySelector('#order') 						//знайшов div списку

const arrKeyOrder = ['fullNameUser', 'nameEl', 'checkPay', 'city',
	'numPost', 'quantity', 'priceEl', 'commentInput'];     //єлементи для єлементів Order
const pushChoiceFormUser = {};
const choiceCardUser = {};

cardsElements.innerHTML = createCardsList(listCardsArr); //малювіання Карток
formOrderUser.innerHTML = htmlTextForm; //малювіання форми
resulsOfOrder.innerHTML = htmlTextOrder;//малювіання Звіту


let orders = JSON.parse(localStorage.getItem('orders')) || []; //отримання из Localstorasge.
const myListOrders = document.querySelector('#listOrders');  // отримання доступу до зони listOrders

const list = document.querySelector('#wrapper') // додавання слухача на весь врапер 
list.addEventListener('click', function (evt) {
	if (evt.target.dataset.value) {
		let idCur = evt.target.dataset.value;
		let btnDatasetValue = evt.target.dataset.value;
		let findBtnHTML = document.querySelector(`#${btnDatasetValue}`);

		if (idCur === 'cards') { // Виконати якщо датасет дорівнює змінній 1 кнопци на Картках
			findBtnHTML.style.display = 'none';
			formOrderUser.style.display = 'block'
			const asd = listCardsArr[evt.target.id];
			for (let key in asd) {
				choiceCardUser[key] = asd[key];
			}
		}

		if (idCur === 'form') {// Виконати якщо датасет дорівнює змінній 1 кнопци на формі
			if (!choiceCardUser.commentInput || choiceCardUser.commentInput.trim('') === "") {
				choiceCardUser.commentInput = 'не вказано';
			}
			let isKeyOnButtonOrder = 1;
			arrKeyOrder.forEach((value) => { //перевірка на наявність елементів в об'єкті choiceFormUser
				let temp = (Object.keys(choiceCardUser)).find((element) => element === value);
				if (temp !== value) {
					alert(`Відсутній запис ${value} у формі заказу, додайте..`);
					isKeyOnButtonOrder = Math.min(value, 1);
				}
			})
			if (isKeyOnButtonOrder) {
				findBtnHTML.style.display = 'none';
				resulsOfOrder.style.display = 'block';
			}
			arrKeyOrder.forEach((value) => {
				for (let key in choiceCardUser) {
					if (value === key) {
						pushChoiceFormUser[key] = choiceCardUser[key];
					}
				}
			})
			pushChoiceFormUser.costElements = pushChoiceFormUser.priceEl * +pushChoiceFormUser.quantity
			let res = document.querySelector(`#orderForm`);
			for (let key in pushChoiceFormUser) {
				let tempEl = res.querySelector(`.${key} `);
				let tempValue = pushChoiceFormUser[key];
				if (typeof tempValue === 'number') {
					tempValue = String(tempValue).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
				}
				tempEl.innerText = '>>' + `${tempValue} `;
			}
		}

		if (idCur === 'order') {  // Виконати якщо датасет дорівнює змінній 1 кнопци на Звіті
			findBtnHTML.style.display = 'none';
			cardsElements.style.display = 'flex';
		}

		if (idCur === 'addToMyOrder') {// Виконати якщо датасет дорівнює змінній 2 кнопци на Звіті для додавання у localStorage
			// resulsOfOrder.style.display = 'none';
			const numOfOrder = Math.round(1 + Math.random() * 1000);
			const currentDate = new Date().toLocaleString();
			const objOrder = {};
			for (let key in pushChoiceFormUser) {
				objOrder[key] = pushChoiceFormUser[key];
			}
			objOrder.date = currentDate;
			objOrder.num = numOfOrder;
			myListOrders.innerHTML = addListOrder(orders);
			orders.push(objOrder);
			localStorage.setItem('orders', JSON.stringify(orders));
		}
	}
});

// add element if  - change
formOrderUser.addEventListener('change', (evt) => {
	if (evt.target.id) {
		choiceCardUser[evt.target.id] = evt.target.value;
	}
})

// // add Listener to button 'cleanOrder'
clearOrders.addEventListener('click', () => {
	localStorage.clear();
	orders = [];
	myListOrders.innerHTML = '';
})

showOrders.addEventListener('click', function () {
	myListOrders.innerHTML = addListOrder(orders);
	myListOrders.style.display = 'inline'
})

function addListOrder(orders) {
	let result = 0;
	return orders.map((order, index) => {
		result = result + order.costElements;
		return `<div> 
			<p> <article id='${index}'>
				Order # ${order.num}  Date: ${order.date} NameEl: ${order.nameEl} Quantity${order.quantity}</article></p>
			<div class='orderDetails${index}' style = 'display:none'>
				<span> >>>Your order: Product---${order.nameEl}; Price---${order.priceEl} СommentInput --${order.commentInput}</span>
				<span><button class="btnDelete" id= 'div'>Delete Order</button></span>
			</div>
		</div>`
	}).join('') + `<div><p> Сума заказів: ${String(result).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p></div>`;
}

let countArticle = 0
myListOrders.addEventListener('click', function (e) {
	const orderDetails = document.querySelector(`.orderDetails${e.target.id}`);
	if (e.target.nodeName === 'BUTTON') {
		orders.splice(e.target.id, 1);
		localStorage.setItem('orders', JSON.stringify(orders));
		myListOrders.innerHTML = addListOrder(orders);
	}
	if (e.target.nodeName === 'ARTICLE') {
		
		if (countArticle === 1) {
			orderDetails.style.display = 'inline';
			countArticle = 0;
		} else {
			orderDetails.style.display = 'none';
			countArticle = 1;
		}
	}
})



// function onButtonOrder(evt) {
// 	if (evt.target.nodeElenment === 'button') {
// 		// listFormOrder.style.display = 'none';
// 		// listOrder.style.display = 'block';
// 		console.log(choiceFormUser)
// 	}
// }
		// arrKeyOrder.forEach((value) => { //перевірка на наявність елементів в об'єкті choiceFormUser
		// 	let temp = (Object.keys(choiceFormUser)).find((element) => element === value);
		// 	if (temp !== value) {
		// 		alert(`Відсутній запис ${ value } у формі заказу, додайте..`);
		// 		isKeyOnButtonOrder = false;
		// 	}
		// })

		// if (isKeyOnButtonOrder) {
	// }
	// 	choiceFormUser.costElements = choiceFormUser.priceEl * choiceFormUser.unit;
	// 	if (choiceFormUser.commentInput === undefined) {
	// 		choiceFormUser.commentInput = 'не вказано';
	// 	}
	// 	if (!pushChoiceFormUser.find((value) => value === choiceFormUser)) {
	// 		pushChoiceFormUser.push(choiceFormUser);
	// 	}
	// 	console.log(pushChoiceFormUser);
	// 	// pushChoiceFormUser.forEach((value) => {
	// 	// 	for (let key in value) {
	// 	// 		if (document.querySelector(`.${ key } `)) {
	// 	// 			let tempEl = document.querySelector(`.${ key } `)
	// 	// 			tempEl.innerText = tempEl.innerText + `${ value[key] } `
	// 	// 		}
	// 	// 	}
	// 	// 	// 	let btnDel = document.createElement('button');
	// 	// 	// 	btnDel.style.id = 'btnDel'
	// 	// 	// 	tempEl.innerText = = tempEl.innerText + `${ btnDel } `
	// 	// 	// 	btnDel.addEventListener((evt) => {
	// 	// 	// 		console.log('Ура!')
	// 	// 	// 		// if (evt.target.id) {
	// 	// 	// 		// 	pushChoiceFormUser.splise(id, 1)
	// 	// 	// 		// }
	// 	// 	// 	})
	// 	// })
	// }
// }







// const form = document.querySelector('#listElements');
// const myListOrders = document.querySelector('#listOrders');
// const showOrders = document.querySelector('#showOrders');
// const clearOrder = document.querySelector('#clearOrders');

// // // // function textHtmlToForm() {
// // // // 	return `
// // // // 		<label for="cars">Choose a car:</label>
// // // // 	<select class="select" name="car" id="car" requered>
// // // // 		<option value=''>Add car</option>
// // // // 		<option value="volvo" data-id = 100>Volvo</option>
// // // // 		<option value="saab" data-id = 200>Saab</option>
// // // // 		<option value="mercedes" data-id = 300>Mercedes</option>
// // // // 		<option value="audi" data-id = 400>Audi</option>
// // // // 	</select>
// // // // 	<select class="select" name="color" id="color" requered>
// // // // 		<option value=''>Add color</option>
// // // // 		<option value="white">Білий</option>
// // // // 		<option value="black">Чорний</option>
// // // // 		<option value="blue">Синій</option>
// // // // 		<option value="aqumarine">Аквамарин</option>
// // // // 	</select>
// // // // 	<input type="number" name="quntity" id="quntity" value="1" min='1'>
// // // // 	<input type="submit"></input>
// // // // 	<br>
// // // // 	`
// // // // }

// // // // // add form to class='main'
// // // // form.innerHTML = textHtmlToForm();

// // // add Listener to button 'cleanOrder'
// let orders = JSON.parse(localStorage.getItem('orders')) || [];
// console.log(orders);

// // // // add Listener to button 'cleanOrder'
// clearOrder.addEventListener('click', () => {
// 	localStorage.clear();
// 	orders = [];
// })

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	const numOfOrder = Math.round(1 + Math.random() * 1000);
// 	const priceEl = Math.round(1 + Math.random() * 10000);
// 	const currentDate = new Date().toLocaleString();
// 	const formData = new FormData(form);
// 	const objOrder = {
// 		'car': formData.get('car'),
// 		'quantity': formData.get('quntity'),
// 		'color': formData.get('color'),
// 		'date': currentDate,
// 		'num': numOfOrder,
// 		'priceEl': priceEl
// 	}
// 	orders.push(objOrder);
// 	localStorage.setItem('orders', JSON.stringify(orders));
// })

// showOrders.addEventListener('click', function () {
// 	myListOrders.innerHTML = addListOrder(orders);
// })

// function addListOrder(orders) {

// 	return orders.map((order, index) => {
// 		return `<div >
// 			<p> <article id='${index}'>
// 				Order # ${order.num}  Date: ${order.date} PriceEl: ${order.priceEl}</article> </p>
// 			<div class='orderDetails${index}' style = 'display:none'>
// 				<span>Your order: Холодильник---${order.car}; Колір--- ${order.color}; Кількість---${order.quantity}</span>
// 				<span><button class="btnDelete" id= '${index}div'>Delete Order</button></span>
// 			</div>
// 		</div >`
// 	}).join('');
// }

// myListOrders.addEventListener('click', function (e) {
// 	const orderDetails = document.querySelector(`.orderDetails${e.target.id}`);
// 	if (e.target.nodeName === 'BUTTON') {
// 		orders.splice(e.target.id, 1);
// 		localStorage.setItem('orders', JSON.stringify(orders));
// 		myListOrders.innerHTML = orders.length = 0 ? addListOrder(orders) : ''
// 	}
// 	if (e.target.nodeName === 'ARTICLE') {
// 		orderDetails.style.display = 'inline';
// 	}
// })