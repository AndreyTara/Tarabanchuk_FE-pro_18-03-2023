const buttonTask1 = document.getElementById("task1");
buttonTask1.onclick = () => {
	const elem = document.getElementById('elem');
	elem.appendChild(createTable(elem, 10, 10));
	document.body.appendChild(elem);
	function createTable(parent, cols, rows) {
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
				td.textContent = countValue;
				countValue++;
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		parent.appendChild(table);
		console.log(parent);
	}
}


// const buttonTask2 = document.getElementById("task2");
// buttonTask2.onclick = () => {
// 	let arr = Array.from({ length: 100 }, (_, i) => i + 1);
// 	console.log(arr);
// 	const base = document.querySelector('#elem');
// 	const table = document.createElement('table');
// 	table.style.border = "2px solid black";
// 	table.style.width = "100%";
// 	const tbody = document.createElement('tbody');
// 	let elem = arr.forEach((element) => {

// 		// for (let i = 0; i < rows; i++) {
// 		if (a.length % 10 < 10) {
// 			let tr = document.createElement('tr');
// 		}
// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
// 			td.style.textAlign = "center";
// 			// td.style.margin = "10px";
// 			td.style.border = "1px solid black";
// 			td.textContent = element;
// 			tr.appendChild(td);
// 		}
// 		tbody.appendChild(tr);
// 	}
// 		table.appendChild(tbody);
// })
// base.appendChild(table);
// }

// const buttonTask2 = document.getElementById("task2");
// buttonTask2.onclick = () => {
// 	const base = document.querySelector('#elem');
// 	base.style.border = "2px solid black";
// 	// let sad = addRows();
// 	// base.after(sad);
// 	// }
// 	// base.style.justifyContent = "spaceB";

// 	// addTable(elem, 10, 20)
// 	// document.body.appendChild(elem);
// 	// add 10 column X 10 row
// 	// function addRows() {
// 	// for (let i = 1; i <= 2; i++) { //add columns
// 	// const pInner = document.createElement("div");
// 	for (let i = 1; i <= 10; i++) { //add columns
// 		const p = document.createElement("article");
// 		p.style.textAlign = "center";
// 		p.style.width = "10%";
// 		p.textContent = ' ' + ` ${i} `+ ' ';
// 		p.textContent = ' ' + p.textContent;
// 		// if (i >=10) { p.textContent = `&nbsp&nbsp10&nbsp` };
// 		// if (i >= 100) { p.textContent = `&nbsp100&nbsp` };
// 		p.classList.add(`text${i}`);
// 		p.style.border = "1px solid black";
// 		base.append(p);
// 		console.log(p);
// 	}
// 	// base.after(pInner);
// 	// }
// 	// return pInner;
// }


// 	const buttonTask1 = document.getElementById("task1");
// 	buttonTask1.onclick = () => {
// 		function generateTable(row, column) {
// 			// creates a <table> element and a <tbody> element
// 			const tbl = document.createElement("table");
// 			const tblBody = document.createElement("tbody");
// 			tbl.style.width = "100%";
// 			tbl.style.textAlign = "center";
// 			// creating all cells
// 			let tempValue = 0;
// 			for (let i = 0; i < row; i++) {
// 				// creates a table row
// 				const row = document.createElement("tr");
// 				for (let j = 0; j < column; j++) {
// 					// Create a <td> element and a text node, make the text
// 					// node the contents of the <td>, and put the <td> at
// 					// the end of the table row
// 					const cell = document.createElement("td");

// 					// const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
// 					tempValue++;
// 					const cellText = document.createTextNode(`${tempValue}`);
// 					cell.appendChild(cellText);
// 					row.appendChild(cell);
// 				}

// 				// add the row to the end of the table body
// 				tblBody.appendChild(row);
// 			}

// 			// put the <tbody> in the <table>
// 			tbl.appendChild(tblBody);
// 			// sets the border attribute of tbl to '2'
// 			tbl.style.border = "lene 1px black";
// 			// appends <table> into <body>
// 			document.body.appendChild(tbl);
// 		}
// 		generateTable(10, 10)
// 	}
// }
