//створили масив
let numbers = [2, 5, 3, 6, 4, 7];
console.log(numbers);

//сортуємо його за зростанням
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

//видаляємо елементи
numbers.splice(2, 3);
console.log(numbers);

