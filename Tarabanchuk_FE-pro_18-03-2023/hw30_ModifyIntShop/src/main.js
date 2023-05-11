const listCardsArr = [
	{
		'idEl': 0,
		"nameEl": "Refrigerator SAMSUNG RB36T677FB1/UA",
		"fotoSrcEl": 'https://content2.rozetka.com.ua/goods/images/big/34884436.jpg',
		'priceEl': 8000,
		"characteristicsEl": [
			"Загальний об'єм холодильника: 306 л",
			"Система розморожування холодильної камери:	No Frost (суха)"
		]
	},
	{
		'idEl': 1,
		"nameEl": "Refrigerator SAMSUNG RB36T977FB1/UA",
		"fotoSrcEl": 'https://content2.rozetka.com.ua/goods/images/big/34884436.jpg',
		'priceEl': 16000,
		"characteristicsEl": [
			"Загальний об'єм холодильника: 606 л",
			"Система розморожування холодильної камери:	No Frost (суха)"
		]
	},
	{
		'id': 2,
		"nameEl": "Refrigerator SAMSUNG RB36T1677FB1/UA",
		"fotoSrcEl": 'https://content2.rozetka.com.ua/goods/images/big/34884436.jpg',
		'priceEl': 24000,
		"characteristicsEl": [
			"Загальний об'єм холодильника: 906 л",
			"Система розморожування холодильної камери:	No Frost (суха)"
		]
	}
]

const htmlTextFormOder = `
<div id="formOder" style="display: block; 
				border: solid 1px black; 
				width:fit-content; 
				height: fit-content; margin: 10px;
				padding: 10px;">
				<h4>
					Форма для заказу:
				</h4>
				<label>ПІБ покупця</label>
				<Input type="text" id="fullNameUser"></Input>
				<br> <br>
				<label>Місто отримання товару</label>
				<select name="checkCity" id="city">
					<option value="">Choose a city</option>
					<option value="Dnipro">Днепр</option>
					<option value="Kyiv">Київ</option>
					<option value="Lviv">Львів</option>
					<option value="Odesa">Одеса</option>
				</select>
				<br> <br>
				<label>Склад Нової пошти для надсилання</label>
				<Input type="number" id="numPost" value="" required min="1" max="60000"></Input>
				<br> <br>
				<label>Метод сплати за товар </label>
				<select name="pay" id="checkPay">
					<option value="">Choose paymant</option>
					<option value="postpaid">Післяплатa</option>
					<option value="bankCard">Банківською карткою</option>
				</select>
				<br> <br>
				<label>Кількість продукції, що купується </label>
				<Input id="unit" type="number" value="1" required min="1" max="1000"></Input>
				<br> <br>
				<label>Коментар до замовлення</label>
				<textarea id="commentInput" name="comment" cols="20" rows="2"></textarea>
				<br> <br>
				<button id='createOrder'>Замовити</button>
</div>
`
const htmlTextOder = `
<div id='okOrder' style='display: block;
				border: solid 1px black;
				width:fit-content;
				height: fit-content; margin: 10px;
				padding: 10px;'>
					<h4>
						Отриманий заказ:
					</h4>
					<p class='fullNameUser'>Покупець: </p>
					<p class='nameEl'>Отримає продукцію:  </p>
					<p class='checkPay'>Метод оплати: </p>
					<p class='city'>Доставка у місто:   </p>
					<p class='numPost'>У відділення Нової пошти:  </p>
					<p class='unit'>У кількості:  </p>
					<p class='priceEl'>Вартість одиниці: </p>
					<p class='costElements'>Вартість заказу становить: </p>
					<p class='commentInput'>Коментарий: </p>
				</div>
`
const listElements = document.querySelector('#listElements');
const listFormOrder = document.querySelector('#listFormOrder');
const listOrder = document.querySelector('#listOrder')
// const okOrder = document.querySelector('#okOrder');
const arrKey = ['fullNameUser', 'nameEl', 'checkPay', 'city',
	'numPost', 'unit', 'priceEl'];

listElements.innerHTML = createCardsList(listCardsArr);
listFormOrder.innerHTML = htmlTextFormOder;
listOrder.innerHTML = htmlTextOder;
listElements.addEventListener('click', onButtonBuy);
listFormOrder.addEventListener('click', onButtonOrder);

const choiceFormUser = {};
listFormOrder.addEventListener('change', (evt) => {
	if (evt.target.id) {
		choiceFormUser[evt.target.id] = evt.target.value
	}
})

function onButtonBuy(evt) {
	if (evt.target.closest('button')) {
		listElements.style.display = 'none';
		listFormOrder.style.display = 'block';
		const asd = listCardsArr[evt.target.id];
		for (let key in asd) {
			choiceFormUser[key] = asd[key];
		}
	}
}
let isCheckKey = true;
function onButtonOrder(evt) {
	if (evt.target.closest('button')) {
		arrKey.forEach((value) => {
			let temp = (Object.keys(choiceFormUser)).find((element) => element === value);
			if (temp !== value) {
				alert(`ВІдсутній запис ${value} у формі заказу, додайте`);
				isCheckKey = false;
			}
		})
		if (isCheckKey) {
			listFormOrder.style.display = 'none';
			listOrder.style.display = 'block';
			choiceFormUser.costElements = choiceFormUser.priceEl * choiceFormUser.unit;
			if (choiceFormUser.commentInput === undefined) {
				choiceFormUser.commentInput = 'не вказано';
			}
			for (let key in choiceFormUser) {
				if (document.querySelector(`.${key}`)) {
					let tempEl = document.querySelector(`.${key}`)
					tempEl.innerText = tempEl.innerText + `${choiceFormUser[key]}`
				}
			}
		}

	}
}

function createCardsList(dataArr) {
	return dataArr.map((card) =>
		`
	<article style='width: 220px; border: 1px dotted grey; margin: 10px; padding: 10px;'>
	<h2>${card.nameEl}</h2>
	<p>Ціна: ${card.priceEl}UAH</p>
	<p>Фото: </p>
	<img src="${card.fotoSrcEl}" style="height: 200px; width: auto;">
	<p>Характеристики: </p>
	<ul>
	<li>${card.characteristicsEl[0]}</li>
	<li>${card.characteristicsEl[1]}</li>
	</ul>
	<button class = 'button' style='width: 60%; background: aqua;' id= ${card.idEl} value= ${card.idEl}>Купити!</button>
	</article>
	`
	).join('');
}
