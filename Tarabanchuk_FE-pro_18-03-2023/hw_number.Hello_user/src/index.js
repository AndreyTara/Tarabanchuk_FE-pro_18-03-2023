const button = document.getElementById("alert");
let userName;

button.onclick = () => {
	userName = prompt('What is your name?');
	if (userName) {
		alert(`Hello, ${userName}! How are you?`);
	}
}
