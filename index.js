const request = require('request');
const argv = require('yargs').argv;

let apiKey = '99573fd9413d526211288883df2a9b5a';
let city = argv.c || 'bucharest';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `
    Location: ${weather.name}
    Temperature: ${weather.main.temp}°C
    Cloudliness: ${weather.clouds.all} %
    Humidity: ${weather.main.humidity} %
    Wind: ${weather.wind.speed} m/s
    Pressure: ${weather.main.pressure*0.75} mmHg
    `;
    console.log(message);
  }
});