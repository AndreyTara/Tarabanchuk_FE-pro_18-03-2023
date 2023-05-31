const wrongCity = 'Wrong input city '
const cityArr = ['odesa', 'kiev', 'lviv', 'Kharkiv'];
const btmSubmit = document.querySelector('#btmSubmit')
const imgWind = document.querySelector('#imgWind')
btmSubmit.addEventListener('click', function () {
	return getForecast();
})

function getForecast() {
	const city = document.querySelector('#formCity').value.toLowerCase();
	const showWeather = document.querySelector('#showWeather');
	const isValidCity = cityArr.find((value) => value === city)
	if (isValidCity) {
		const fullUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
		$.ajax({
			url: fullUrl,
			type: 'get',
			success: function (data) {
				const widget = showResults(data);
				showWeather.innerHTML = widget;
				imgWind.style.display = 'inline';
			}
		})
	} else {
		alert(wrongCity);
	}
}

function showResults(data) {
	return '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for ' + data.name + ', ' + data.sys.country + '</h2>' +
		"<h3 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + " &deg;C</h3>" +
		"<h3 style='padding-left:40px;'><strong>Pressure</strong>: " + data.main.pressure + " hpa</h3>" +
		"<h3 style='padding-left:40px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
		"<h3 style='padding-left:40px;'><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
		"<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
		"<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>" +
		"<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>";
}