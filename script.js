// 1пункт-----Знайти суму та кількість позитивних елементів.
const array1 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfPositives = 0;
let countOfPositives = 0;

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0) {
        sumOfPositives += array1[i];
        countOfPositives++;
    }
}

console.log('сума позитивних елементів', sumOfPositives);
console.log('кількість позитивні елементи', countOfPositives);

// 2пункт-----Знайти мінімальний елемент масиву та його порядковий номер.
const array2 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let minElement = array2[0];
let minIndex = 0;

for (let i = 1; i < array2.length; i++) {
    if (array2[i] < minElement) {
        minElement = array2[i];
        minIndex = i;
    }
}

console.log('мінімальний елемент', minElement);
console.log('порядковий номер мінімального елементу', minIndex);

// 3пункт-----Знайти максимальний елемент масиву та його порядковий номер.
const array3 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let maxElement = array3[0];
let maxIndex = 0;

for (let i = 1; i < array3.length; i++) {
    if (array3[i] > maxElement) {
        maxElement = array3[i];
        maxIndex = i;
    }
}

console.log('максимальний елемент', maxElement);
console.log('порядковий номер максимального елементу', maxIndex);

// 4пункт-----Визначити кількість негативних елементів.
const array4 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let countOfNegatives = 0;

for (let i = 0; i < array4.length; i++) {
    if (array4[i] < 0) {
        countOfNegatives++;
    }
}

console.log('кількість негативних елементів', countOfNegatives);

// 5пункт-----Знайти кількість непарних позитивних елементів.
const array5 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let countOfOddPositive = 0;

for (let i = 0; i < array5.length; i++) {
    if (array5[i] > 0 && array5[i] % 2 !== 0) {
        countOfOddPositive++;
    }
}

console.log('кількість непарних позитивних елементів', countOfOddPositive);

// 6пункт-----Знайти кількість парних позитивних елементів.
const array6 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let countOfEvenPositive = 0;

for (let i = 0; i < array6.length; i++) {
    if (array6[i] > 0 && array6[i] % 2 === 0) {
        countOfEvenPositive++;
    }
}

console.log('кількість парних позитивних елементів', countOfEvenPositive);

// 7пункт-----Знайти суму парних позитивних елементів.
const array7 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfEvenPositive = 0;

for (let i = 0; i < array7.length; i++) {
    if (array7[i] > 0 && array7[i] % 2 === 0) {
        sumOfEvenPositive += array7[i];
    }
}

console.log('сума парних позитивних елементів', sumOfEvenPositive);

// 8пункт-----знайти суму непарних позитивних елементів
const array8 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sumOfOddPositive = 0;

for (let i = 0; i < array8.length; i++) {
    if (array8[i] > 0 && array8[i] % 2 !== 0) {
        sumOfOddPositive += array8[i];
    }
}

console.log('сума непарних позитивних елементів', sumOfOddPositive);

// 9пункт-----знайти добуток позитивних елементів
const array9 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let productOfPositive = 1;

for (let i = 0; i < array9.length; i++) {
    if (array9[i] > 0) {
        productOfPositive *= array9[i];
    }
}

console.log('добуток позитивних елементів', productOfPositive);

// 10пункт-----Знайти найбільший серед елементів масиву, а решту обнулити.
const array10 = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let maxElements = array10[0];

for (let i = 1; i < array10.length; i++) {
    if (array10[i] > maxElements) {
        maxElements = array10[i];
    }
}
for (let i = 0; i < array10.length; i++) {
    if (array10[i] !== maxElements) {
        array10[i] = 0;
    }
}

console.log('масив з обнуленими елементами', array10);