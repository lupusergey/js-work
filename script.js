
// 1. завдання
const array = [1, 2, 'two', 3, 6, '8', 'four', 5];

function calculation(arr) {
    const numericElements = arr.filter(element => typeof element === 'number');

    if (numericElements.length === 0) {
        return " ";
    }
    const sum = numericElements.reduce((acc, num) => acc + num, 0);

    const mean = sum / numericElements.length;

    return mean;
}


const result = calculation(array);
console.log(result);//відповідь 3.4

// 2. завдання
function doMath(x, znak, y) {
    switch (znak) {    //вибираємо який знак хочемо
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return Math.pow(x, y);//повертає основу заведену в степінь
    }
}

const x = prompt('введіть число');
const znak = prompt('введіть знак');
const y = prompt('введіть число');

const res = doMath(x, znak, y);// повертає результат операції
console.log(res);


// 3. завдання
function fillArray() {
    const rows = prompt('рядки');
    const columns = prompt('колонки');
    const array = [];

    for (let i = 0; i < rows; i++); {
        const row = [];

        for (let j = 0; j < columns; j++); {
            const element = prompt(' значення елемента [${i}][${j}] : ');
            row.push(element);
        }
        array.push(row);
    }
    return array;
}

const userArray = fillArray();

console.log('отримуємо масив');
console.log(userArray);


// 4. завдання
function removeChars(inputString, charsToRemove) {
    const charsSet = new Set(charsToRemove);//переробляємо в об'єкт Set для пошуку

    //робимо рядок, просускаючи символи, які потріьно видалитии 
    const result = inputString.split('').filter(char => !charsSet.has(char)).join('');

    return result;
}

//считуємо введеня користувача
const inputString = prompt('рядок');
const charsToRemove = prompt('введіть символ для видаленя');

const results = removeChars(inputString, charsToRemove);
console.log(results);