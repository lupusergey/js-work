// 1. завдання
let num = '';

for (let i = 10; i <= 20; i++) {
    num = num + i + ',';
}

console.log('1. ', num);

// 2. завдання
let squared = '';

for (let i = 10; i <= 20; i++) {
    squared = squared + i * i + ',';
}

console.log('2. ', squared);

// 3. завдання
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 4. завдання
let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum = sum + i;
}

console.log('4. ', sum);

// 5. завдання
let sumn = 1;

for (let i = 15; i <= 35; i++) {
    sumn = sumn * i;
}

console.log('5. ', sumn);

// 6. завдання
let sumns = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
    sumns = sumns + i;
    count++;
}
let average = sumns / count;

console.log('6. ', average);

// 7. завдання
let su = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        su = su + i;
    }
}

console.log('7. ', su);

// 8. завдання
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 9. завдання
let numberDivisors = 12;

for (let i = 1; i <= numberDivisors; i++) {
    if (numberDivisors % i === 0) {
        console.log(numberDivisors);
    }
}

// 10. завдання
let number1 = 12;

let divisorsCount = 0;

for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0 && i % 2 === 0) {
        divisorsCount++;
    }
}
console.log('10. ', number1 + " : " + divisorsCount);

// 11. завдання
let number2 = 12;

let sumDivisors = 0;

for (let i = 1; i <= number2; i++) {
    if (number2 % i === 0 && i % 2 === 0) {
        sumDivisors += i;
    }
}
console.log('11. ', number2 + " : " + sumDivisors);

//12.завдання
for (let i = 1; i <= 10; i++) {
    console.log(i);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}