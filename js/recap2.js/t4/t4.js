function sortArray(numbers) {
  return [...numbers].sort(function (a, b) {
    return a - b;
  });
}

let numbers = [10, 5, 8, 2, 7];

console.log('Original array:', numbers);
console.log('Sorted array:', sortArray(numbers));
