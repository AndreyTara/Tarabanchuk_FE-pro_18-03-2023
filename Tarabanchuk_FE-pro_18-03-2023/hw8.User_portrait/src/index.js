const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const yearNumber = prompt('What year were you born?');
	let ageText;
	if (yearNumber || isNaN(yearNumber)) {
		const todayData = new Date();
		let age = todayData.getFullYear() - yearNumber;
		if (age < 4 || age > 150) {
			ageText = `Your input year is mistake.`;
		} else {
			ageText = `Your age ${age} year(s)`;
		}
	} else {
		alert("It's a pity that you didn't want to enter your date.");
		ageText = `You did not enter a year.`
	}

	let cityStr = prompt('What city do you live in?');
	let cityText;
	let cityInfo = `in the city ${cityStr}`;
	if (cityStr) {
		const cityMap = {
			kiev: 'Ukraine',
			london: 'United Kingdom',
			washington: 'USA'
		}
		if (cityStr.toLowerCase() in cityMap) {
			cityInfo = `in the capital of ${cityMap[cityStr.toLowerCase()]}`;
		}
		cityText = `You live ${cityInfo}.`;
	} else {
		alert("It's a pity that you didn't want to enter your city.");
		cityText = "You did not enter a city.";
	}

	let sportStr = prompt('What is your favourite sport?(Football, Box, Athletics ets.)');
	let sportText;
	let sportInfo = `You like the sport of ${sportStr}`
	if (sportStr) {
		const sportMap = {
			football: 'soccer player as Cristiano Ronaldo',
			box: 'boxer as Oleksandr Usyk',
			athletics: 'runner as Usein Bolt'
		}
		if (sportStr.toLowerCase() in sportMap) {
			sportInfo = `Cool! Want to become famous ${sportMap[sportStr.toLowerCase()]}`;
		}
		sportText = `${sportInfo}.`;
	} else {
		alert("It's a pity that you didn't want to enter your favorite sport.");
		sportText = "You did not enter your favorite sport.";
	}

	let result = [`${ageText} \n${cityText} \n${sportText}`];
	alert(result);
}