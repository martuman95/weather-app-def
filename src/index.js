function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
  hours = "0" + hours;
} 
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
} 
let days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
return day +" " + hours + ":" + minutes;
}


function dispalyTemperature(response) {
console.log(response.data)
let temperatureElement = document.querySelector("#degrees");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#sky");
let maxTemp = document.querySelector("#max-temp");
let minTemp = document.querySelector("#min-temp");
let feelsLike = document.querySelector("#feels");
let humidityElement = document.querySelector("#humidity");
let windSpeed = document.querySelector("#wind");
let dateElement =document.querySelector("#date");

temperatureElement.innerHTML = Math.round(response.data.main.temp) + " °C";
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
maxTemp.innerHTML = Math.round(response.data.main.temp_max);
minTemp.innerHTML = Math.round(response.data.main.temp_min);
feelsLike.innerHTML = `${Math.round( response.data.main.feels_like )} °C`;;
humidityElement.innerHTML = response.data.main.humidity + " %" ;
windSpeed.innerHTML = Math.round(response.data.wind.speed) + " Km/h";
dateElement.innerHTML = formatDate(response.data.dt * 1000);

}

let apiKey = "f5ee6fe9739269adb6179e45323cceb3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(dispalyTemperature);
