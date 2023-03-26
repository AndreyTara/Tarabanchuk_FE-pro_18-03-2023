const buttonAlert = document.getElementById("add-info-alert");

buttonAlert.onclick = () => {
	const yearNumber = +prompt('What year were you born?');
	let ageText;
	console.log()
	if (!!yearNumber || !isNaN(yearNumber)) {
		const todayData = new Date();
		let age = todayData.getFullYear() - yearNumber;
		if (age < -1 || age > 150) {
			ageText = `Your input year is mistake.`;
		} else {
		ageText = `Your age ${age} year(s)`;
		}
	} else {
		alert("It's a pity that you didn't want to enter your date.");
		ageText = `Your no input the year.`
	}

	let cityStr = prompt('What city do you live in?');
	let cityText;
	if (!!cityStr) {
		switch (cityStr) {
			case 'Kiev':
				cityText = 'You live in capital of Ukraine.';
				break;
			case 'London':
				cityText = 'You live in capital of United Kingdom.';
				break;
			case 'Washington':
				cityText = 'You live in capital of USA.';
				break;
			default:
				cityText = "You live in the city " + cityStr + '.';
		}
	} else {
		alert("It's a pity that you didn't want to enter your city.");
		cityText = "You no input the city.";
	}

	let sportStr = prompt('What is your favourite sport?(Football, Box, Athletics)');
	let sportText;
	if (!!sportStr) {
		switch (sportStr) {
			case 'Football':
				sportText = 'Cool! Want to become famous soccer player as Cristiano Ronaldo?';
				break;
			case 'Box':
				sportText = 'Cool! Want to become famous boxer as Oleksandr Usyk?';
				break;
			case 'Athletics':
				sportText = 'Cool! Want to become famous runner as Usein Bolt?';
				break;
			default:
				sportText = "You like sports is " + sportStr;
		}
	} else {
		alert("It's a pity that you didn't want to enter your favorite sport.");
		sportText = "You no input favorite sport.";
	}

	let result = [`${ageText}`, `\n${cityText}`, `\n${sportText}`];
	alert(result.join(' '));
}