const parent = document.querySelector('#inputFetchId');
// parent.style.display = 'flex';
// parent.style.justifyContent = 'center';

const inputEl = document.createElement('input');
inputEl.id = 'inputId'
inputEl.type = 'number';
inputEl.min = '1';
inputEl.max = '100';
inputEl.style.width = '100px';
inputEl.style.margin = '20px';
inputEl.required = 'true';
inputEl.value = 'Submit';
const btnEl = document.createElement('button');
btnEl.id = 'get_post'
btnEl.type = 'submit'
btnEl.style.width = '130px';
btnEl.style.margin = '20px';
btnEl.innerText = 'Get Post'
const postEl = document.createElement('div');
postEl.id = 'postResponse'
const commentPostdEl = document.createElement('div');
commentPostdEl.id = 'commentPostResponse';
const labelEl = document.createElement('label');
labelEl.id = 'label';
parent.append(labelEl);
parent.append(inputEl);
parent.append(btnEl);
parent.append(postEl);
parent.append(commentPostdEl);
const inputIdsh = document.querySelector('#inputId');
const btnGetPost = document.querySelector('#get_post');
const postResponse = document.querySelector('#postResponse');
const commentPostResponse = document.querySelector('#commentPostResponse');
const labelUrl = document.querySelector('#label');
const asd = {};
const startUrl = 'https://jsonplaceholder.typicode.com/';

btnGetPost.addEventListener('click', () => {
	let fullUrl = startUrl + 'posts/' + `${inputIdsh.value}`;
	console.log(fullUrl)
	labelUrl.innerHTML = `${fullUrl}; Id -`
	fetch(`${fullUrl}`)
		.then((response) => response.json())
		.then((json) => {
			postResponse.innerHTML = createHtmlPost(json);
			fnComment();
		})
		.catch((error) => { return console.log(`${fullUrl} - is ${error}`) });

})

function createHtmlPost(obj) {
	return `
<div style=''>
<h3>
post >>${ucFirst(obj.title)}
</h3>
<p>${ucFirst(obj.body)}</p>
<span> userId -${obj.userId}; id - ${obj.id}</span>
<button class ='getComment' id ="${obj.id}"> getComment</button>
</div>`
}

function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function fnComment() {
	const buttonComment = document.querySelector('.getComment');
	console.log(buttonComment)
	const fullUrlComment = startUrl + 'comments/' + `${buttonComment.id}`;
	buttonComment.addEventListener('click', () => {
		console.log(fullUrlComment);
		fetch(fullUrlComment)
			.then((response) => response.json())
			.then((json) => {
				commentPostResponse.innerHTML = createHtmlComment(json);
			})
			.catch((error) => { return console.log(`${fullUrl} - is ${error}`) });
	})

	function createHtmlComment(obj) {
		return `
	<div style=''>
	<h4>
	name >>${ucFirst(obj.name)} ; email >>${ucFirst(obj.email)}
	</h4>
	<p>Coment >>${ucFirst(obj.body)}</p>
	<span> id - ${obj.id}</span>
	</div>`
	}
}
