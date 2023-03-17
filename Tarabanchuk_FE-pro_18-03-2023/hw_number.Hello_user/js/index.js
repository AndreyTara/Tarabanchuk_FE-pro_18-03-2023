'use strict'
console.log("Hi very cool people...");
const inputName = prompt('Input your name ..');
console.log('Input prompt - ', inputName);
const textAlert = `Hello, ${inputName}! How are you?`;
console.log('Output alert - ', textAlert);
alert(textAlert);

var paragraph = document.getElementById("p");
var text = document.createTextNode(` inputName  -  ${inputName};  textAlert  -  ${textAlert}`);
paragraph.appendChild(text);