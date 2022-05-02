function handleSearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#floatingInput");
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(weatherUrl).then(displayWeather);
}

function displayWeather(response) {
  let cityDisplay = document.querySelector("#city-name");
  let cityName = response.data.name;
  cityDisplay.innerHTML = cityName;
  let degrees = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp-display");
  temp.innerHTML = degrees;
  let weatherDescription = response.data.weather[0].description;
  let conditions = document.querySelector("#conditions-input");
  conditions.innerHTML = weatherDescription;
  let humidity = response.data.main.humidity;
  let humidityDisplay = document.querySelector("#humidity-input");
  humidityDisplay.innerHTML = humidity;
  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind-input");
  wind.innerHTML = windSpeed;
}

function handleCurrentLocation(position) {
  let currentLongitude = position.coords.longitude;
  let currentLatitude = position.coords.latitude;
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;
  axios.get(weatherUrl).then(displayWeather);
}

function getPosition() {
  navigator.geolocation.getCurrentPosition(handleCurrentLocation);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);

//function handleCelsius(event) {
//event.preventDefault();
//let celsiusTemp = document.querySelector("#temp-display");
//celsiusTemp.innerHTML = 26;
//}

//function handleFahrenheit(event) {
//event.preventDefault();
//let fahrenheitTemp = document.querySelector("#temp-display");
//fahrenheitTemp.innerHTML = 78;
//}

let apiKey = "c6ab8f623c5d896f2d3754c0212a56ee";

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayDisplay = document.querySelector("#city-day");
dayDisplay.innerHTML = day;

let hourDisplay = document.querySelector("#city-hour");
hourDisplay.innerHTML = hour;

let minutesDisplay = document.querySelector("#city-minutes");
minutesDisplay.innerHTML = minutes;

let searchForm = document.querySelector("#search-field");
searchForm.addEventListener("submit", handleSearch);

//let celsiusTemp = document.querySelector("#celsius-link");
//celsiusTemp.addEventListener("click", handleCelsius);

//let fahrenheitTemp = document.querySelector("#fahrenheit-link");
//fahrenheitTemp.addEventListener("click", handleFahrenheit);
