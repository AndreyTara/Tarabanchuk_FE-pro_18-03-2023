const users = [
	{
		"index": 0,
		"isActive": true,
		"balance": "$2,226.60",
		"name": "Eugenia Sawyer",
		"gender": "female",
		"phone": "+1 (840) 583-3207",
		"address": "949 John Street, Rose, Puerto Rico, 1857"
	},
	{
		"index": 1,
		"isActive": true,
		"balance": "$2,613.77",
		"name": "Pauline Gallegos",
		"gender": "female",
		"phone": "+1 (985) 593-3328",
		"address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
	},
	{
		"index": 2,
		"isActive": false,
		"balance": "$3,976.41",
		"name": "Middleton Chaney",
		"gender": "male",
		"phone": "+1 (995) 591-2478",
		"address": "807 Fleet Walk, Brutus, Arkansas, 9783"
	},
	{
		"index": 3,
		"isActive": true,
		"balance": "$1,934.58",
		"name": "Burns Poole",
		"gender": "male",
		"phone": "+1 (885) 559-3422",
		"address": "730 Seba Avenue, Osage, Alabama, 6290"
	},
	{
		"index": 4,
		"isActive": true,
		"balance": "$3,261.65",
		"name": "Mcfadden Horne",
		"gender": "male",
		"phone": "+1 (942) 565-3988",
		"address": "120 Scholes Street, Kirk, Michigan, 1018"
	},
	{
		"index": 5,
		"isActive": false,
		"balance": "$1,790.56",
		"name": "Suzette Lewis",
		"gender": "female",
		"phone": "+1 (837) 586-3283",
		"address": "314 Dunne Place, Bawcomville, Guam, 9053"
	}
]
// Дан масив об'єктів. 
// 1 Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. 
// 2 І знайти суму всіх балансів користувачів
const arrayBalance = [];
for (let i = 0; i < users.length; i++){
	arrayBalance[i] =  users[i]['balance'] ;
}
const arrayBalance11=[...arrayBalance];
let sum = 0;
let arrayIndex1=[]; 
let arrayIndex3=[]; 
let intArrayBalanse=[];
for (let i = 0; i <arrayBalance11.length; i++){
	let arrayIndex1[i] = arrayBalance11[i].slice(1,2);
	let arrayIndex3[i] = arrayBalance11[i].slice(3,10);
	console.log(arrayIndex1[i]);
	console.log(arrayIndex3[i]);
	intArrayBalanse[i] = [...arrayIndex1[i], ...arrayIndex3[i]] ;
	console.log(intArrayBalanse[i]);
}
// console.log(arrayBalance11);

	// let arrayIndex4[i] 
	// let arrayIndex[i]
// 	arrayBalance11[i]= +[...[...[...arrayBalance11[i]].fill('',0,1)].fill('',2,3)].join('');
// console.log(arrayBalance11[i]);
// 	if ((arrayBalance11[i])>2000) {
// 	}
// 	sum +=arrayBalance11[i];
// console.log(sum);

	// const arrayBalanceUsers = users.reduce((total, amoung, index, array) => {
	// 	// array[index].phone 
	// 	// arrayBalance[index] = array[index].phone 
	// 	console.log(array[index].index);
	// }
	// )
// console.log(' users', users)
// console.log('arrayBalance', arrayBalance)
// console.log(users[0].index)