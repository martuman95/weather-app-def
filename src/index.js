
function dispalyTemperature(response) {
    console.log(response.data.main.temp);
}

let apiKey = "f5ee6fe9739269adb6179e45323cceb3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metric`;

console.log(apiUrl)
axios.get(apiUrl).then(dispalyTemperature);