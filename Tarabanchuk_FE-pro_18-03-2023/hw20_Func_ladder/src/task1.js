
// const buttonTask1 = document.getElementById("task1");
// buttonTask1.onclick = () => {
var name1 = null;
function init(name) {
	name1 = name1 + name;  // name is a local variable created by init
	function displayName() { // displayName() is the inner function, a closure
		console.log(name1); // displayName() uses variable declared in the parent function    
	}
	displayName();
}
init(11);
init(11);
init(131);
init(141);
// }