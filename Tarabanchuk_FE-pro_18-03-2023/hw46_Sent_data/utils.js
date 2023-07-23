import fs from 'fs';

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

export function getRandomComments(rangeOfComments, avatars, messages) {///rangeOfComments: { min, max } = { min: 1, max: 2 }
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

export function getRandomPhotos(arrayLengthPictures, rangeOfLikes, rangeOfComments, avatars, messages, descriptions) {
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

export function writeToFileArray(fileTxt, arr) {
	fs.writeFileSync(fileTxt, JSON.stringify(arr));
}

export function createDB(txtFile, picturesData, commentsData, uploadsData) {
	writeToFileArray(txtFile.photos, picturesData);
	writeToFileArray(txtFile.comments, commentsData);
	writeToFileArray(txtFile.uploads, uploadsData);
}