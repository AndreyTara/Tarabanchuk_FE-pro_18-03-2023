const arrayLengthPictures = 25;
const rangeOfCommentsMax100 = { min: 100, max: 100 }
const rangeOfLikes = { min: 15, max: 200 };
const rangeOfCommentsMax20 = { min: 1, max: 20 };
const descriptions = [
	'Володарь', 'Верхи на драконі', 'Зникнув', 'Підтримка', 'Darth Vader', 'NLAW & чоловік', 'Зірковий корабель', 'Косміний Скафандр', 'Darth Maul', 'Кораблекрушение',
	"Підтримка", 'Плащ', 'Авто', 'Великий двигун', 'Протигаз', 'NLAW & жінка', 'Військо', 'Потяг', 'Робот', 'Уламки заводу',
	'Мікроавтобус', 'Променевий меч', 'В лабораторії', 'Велика голова', 'Космодром', 'Космодром'
];

const messages = [
	'Все відмінно!',
	'Загалом все непогано. Але не всі.',
	'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
	'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
	'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
	'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?'
];
const avatars = [
	'Арагорн', 'Родогаст', 'Родомир', 'Фродо', 'Елронд', 'Гендальф'
]

const hostName = 'localhost';
const port = '4001';
const wrongRoute = 'wrong route';
const urlPhotos = '/photos';
const urlComments = '/comments';
const textGetMethod = 'GET'
const http = require('node:http');
const fs = require('fs');

function getRandomNumber(rangeMin, rangeMax) {
	return Math.floor((Math.random() * (rangeMax - rangeMin) + rangeMin));
}

function getMessage(messages) {
	const messageId = getRandomNumber(0, messages.length - 1)
	return messages[messageId];
}

function getCounter() {
	let counter = 0;
	return function () {
		return counter++;
	}
}
let getUniqueId = getCounter();

function getRandomComments(rangeOfComments, avatars, messages) {///rangeOfComments: { min, max } = { min: 1, max: 2 }
	const commentsRandomCount = getRandomNumber(rangeOfComments.min, rangeOfComments.max);
	const randomComments = [];
	for (let i = 1; i < commentsRandomCount + 1; i++) {
		const avatarId = getRandomNumber(1, avatars.length);
		const randomComment = {
			id: getUniqueId(),
			avatar: `./img/avatar-${avatarId}.svg`,
			name: avatars[avatarId],
			message: getMessage(messages)
		}
		randomComments.push(randomComment);
	}
	return randomComments;
}

function getRandomPhotos(arrayLengthPictures, rangeOfLikes, rangeOfComments, avatars, messages, descriptions) {
	const photoConfigs = [];
	for (let i = 0; i < arrayLengthPictures; i++) {
		const photoConfig = {
			id: (i + 1),
			url: `./photos/${i + 1}.jpg`,
			descriptions: descriptions[i],
			likes: getRandomNumber(rangeOfLikes.min, rangeOfLikes.max),
			comments: getRandomComments(rangeOfComments, avatars, messages)
		}
		photoConfigs.push(photoConfig);
	}
	return photoConfigs
}

function addTextToFile(fileTxt, arr) {
	fs.writeFileSync(fileTxt, JSON.stringify(arr));
}

function createServerFn(hostName, port, wrongRoute, textGetMethod, urlPhotos, urlComments) {
	http.createServer( //create Server
		function (req, res) {
			res.setHeader('Access-Control-Allow-Origin', '*');// GET TO USE SERVER 4001
			res.writeHead(200, { 'Content-Type': 'application/json' }); // if response = '200'
			const urlServer = req.url; // add access to url
			const methodServer = req.method;// add access to method
			if (methodServer === textGetMethod) {
				if (urlServer === urlPhotos) {
					const dataReadFale = fs.readFileSync("photos.txt", 'utf-8');
					res.write(dataReadFale);
					res.end();
				} else if (urlServer === urlComments) {
					const dataReadFale = fs.readFileSync("comments.txt", 'utf-8');
					res.write(dataReadFale);
					res.end();
				} else {
					res.write(wrongRoute); //add fault
					res.end();
				}

			}
		}
	)
		.listen(port, hostName, () => {
			console.log(`Server runing on http://${hostName}:${port}`);
		});

}

const pictureConfigs = getRandomPhotos(arrayLengthPictures, rangeOfLikes, rangeOfCommentsMax20, avatars, messages, descriptions);
const commentsConfigs = getRandomComments(rangeOfCommentsMax100, avatars, messages);

addTextToFile('photos.txt', pictureConfigs);
addTextToFile('comments.txt', commentsConfigs);

createServerFn(hostName, port, wrongRoute, textGetMethod, urlPhotos, urlComments);
