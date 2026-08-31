let a = Number(prompt('Enter first side:'));
let b = Number(prompt('Enter second side:'));
let c = Number(prompt('Enter third side:'));

let result;

if (a === b && b === c) {
  result = 'Equilateral';
} else if (a === b || a === c || b === c) {
  result = 'Isosceles';
} else if (!(a === b || a === c || b === c)) {
  result = 'Scalene';
}

document.getElementById('result').innerHTML = result;
