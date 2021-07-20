function dispalyTemperature(response) {
    console.log(response.data.main.temp);
}

let apiKey = "1d1742d71e2e4296840a997a3c66e304";
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric';

console.log(apiUrl)
axios.get(apiUrl).then(dispalyTemperature);