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
    let message = `It's ${weather.main.temp}°C in ${weather.name}!`;
    console.log(message);
  }
});