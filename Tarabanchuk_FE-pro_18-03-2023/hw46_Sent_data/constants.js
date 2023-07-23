import { getRandomPhotos, getRandomComments } from './utils.js'
const arrayLengthPictures = 25;
const rangeOfCommentsMax100 = { min: 100, max: 100 }
const rangeOfLikes = { min: 15, max: 200 };
const rangeOfCommentsMax20 = { min: 1, max: 8 };
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
const urlFront = {
	photos: '/photos',
	comments: '/comments',
	uploads: '/uploads',
	gram: '/gram'
}
const HTTP_METHODS = {
	get: 'GET',
	post: 'POST'
}

const txtFile = {
	photos: 'photos.txt',
	comments: 'comments.txt',
	uploads: `uploads.txt`
}


const pictureConfigs = getRandomPhotos(arrayLengthPictures, rangeOfLikes, rangeOfCommentsMax20, avatars, messages, descriptions);
const commentsConfigs = getRandomComments(rangeOfCommentsMax100, avatars, messages);

export const defaults = {
	txtFile,
	HTTP_METHODS,
	urlFront,
	wrongRoute,
	port,
	hostName,
	pictureConfigs,
	commentsConfigs
}