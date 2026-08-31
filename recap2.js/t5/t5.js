function sortArray(numbers, order) {
  let newArray = [...numbers];

  if (order === 'asc') {
    newArray.sort(function (a, b) {
      return a - b;
    });
  }

  if (order === 'desc') {
    newArray.sort(function (a, b) {
      return b - a;
    });
  }

  return newArray;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
