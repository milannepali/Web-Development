let celsius = prompt('Enter temperature in Celsius:');

let fahrenheit = (celsius * 9) / 5 + 32;
let kelvin = Number(celsius) + 273.15;

document.getElementById('result').innerHTML =
  celsius +
  ' °C = ' +
  fahrenheit +
  ' °F<br>' +
  celsius +
  ' °C = ' +
  kelvin +
  ' K';
