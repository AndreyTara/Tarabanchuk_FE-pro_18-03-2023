const textHtmlFormReg = `
<div id="formUser" style="display: block; 
				border: solid 1px black; 
				width:fit-content; 
				height: fit-content; margin: 10px;
				padding: 10px;">
				<h4>
					Форма для заказу:
				</h4>
				<label>ПІБ покупця:</label>
				<Input type="text" id="fullNameUser" name='fullNameUser'></Input>
				<br> <br>
				<label>Дата народження:</label>
				<input type="date" id="birsdayUser" name="birsdayUser" 
        placeholder="dd-mm-yyyy" value=""
        min="1930-01-01" max="2016-12-31">
				<br> <br>
				<label>Вкажіть пол</label>
				<Input type="radio" id="male" name ='selectGender' value="Чоловіча">Чоловіча</Input>
				<Input type="radio" id="fimale" name ='selectGender' value="Жоноча">Жоноча</Input>
				<Input type="radio" id="no select" name ='selectGender' value="Не обрано"> Не обрано</Input>
				<br> <br>
				<label>Вкажіть місто</label>
				<select  name ='city' id="city">
					<option id="city01" value="" name ='city'></option>
					<option id="city02"value="Днепр" name ='city'>Днепр</option>
					<option id="city03"value="Київ" name ='city'>Київ</option>
					<option id="city04"value="Львів" name ='city'>Львів</option>
					<option id="city05"value="Одеса" name ='city'>Одеса</option>
					<option id="city06"value="Не вказано" name ='city'>Не вказано</option>
				</select>
				<br> <br>
				<label>Вкажіть адресу</label>
				<textarea id="address" cols="20" rows="1" name ='address'></textarea>
				<br> <br>
				<label>Вкажіть якими мовами володієте: </label>
				<Input type="checkbox" id = '0' name='lang' value='Українська'>Українська</Input>
				<Input type="checkbox" id = '1' name='lang' value ='Болгарска'>Болгарска</Input>
				<Input type="checkbox" id = '2' name='lang' value ='English'>English</Input>
				<Input type="checkbox" id = '3' name='lang' value ='Español'>Español</Input>
				<Input type="checkbox" id = '4' name='lang' value ='Français'>Français</Input>
				<Input type="checkbox" id = '5' name='lang' value ='Français'>Français</Input>
				<Input type="checkbox" id = '6' name='lang' value ='Italiano'>Italiano</Input>
				<Input type="checkbox" id = '7' name='lang' value ='عرب<'عرب</Input>
				<Input type="checkbox" id = '8' name='lang' value ='普通話'>普通話</Input>
				<Input type="checkbox" id = '9' name='lang' value ='日本'>日本</Input>
				<br> <br>
				<button id='saveBtn'>Зберегти</button>
</div>
`

const formReg = document.querySelector('#listFormReg');
const tableReg = document.querySelector('#listTableReg')
const arrKey = ['fullNameUser', 'birsdayUser', 'selectGender', 'city',
	'address', 'lang'];
const arrKeyText = ["Iм'я користувача:", 'День народження:', 'Стать:', 'Місто: ',
	'Адреса:', 'Мова:'];
formReg.innerHTML = textHtmlFormReg;

const choiceFormReg = {};
const choiceFormRegArr = [];
const choiceLang = [];
formReg.addEventListener('change', (evt) => {
	if (evt.target.id) {
		choiceFormReg[evt.target.name] = evt.target.value;
		if ((evt.target.type === 'checkbox')) {
			choiceLang.push(evt.target.value);
			choiceFormReg[evt.target.name] = `${choiceLang.join(', ')}`;
		}
	}
})

const buttonTask1 = document.querySelector("#saveBtn");
buttonTask1.onclick = () => {
	arrKey.forEach((value, index) => {
		if (choiceFormReg[value]) {
			choiceFormRegArr.push(arrKeyText[index]);
			choiceFormRegArr.push(choiceFormReg[value]);
		} else {
			return console.log('Данні не заповнені ' + `${value}`);
		}
	})
	formReg.style.display = 'none';
	tableReg.style.display = 'block';
	createTable(tableReg, 2, 6, choiceFormRegArr);
	function createTable(parent, cols, rows, arr) {
		const table = document.createElement('table');
		table.style.border = "2px solid black";
		table.style.width = "100%";
		const tbody = document.createElement('tbody');
		let countValue = 1;
		for (let i = 0; i < rows; i++) {
			let tr = document.createElement('tr');
			for (let j = 0; j < cols; j++) {
				let td = document.createElement('td');
				td.style.textAlign = "center";
				td.style.border = "1px solid black";
				td.textContent = arr[countValue - 1];
				if ((j - 1) / 2 !== 0) {
					arr[i]
				}
				countValue++;
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		parent.appendChild(table);
	}
}
