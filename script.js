
// 1. завдання
for (var i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// 2. завдання
let exchange = 27;

for (let dolar = 10; dolar <= 100; dolar += 10) {
    let ua = dolar * exchange;
    console.log(dolar + " доларів = " + ua + " гривень");
}

// 3. завдання
let N = 100;

for (let i = 1; i * i <= N; i++) {
    console.log(i * i);
}

// 4. завдання
let number = 15;

let simple = true;

if (number <= 1) {
    simple = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            simple = false;
            break;
        }
    }
}

if (simple) {
    console.log(number + " є простим");
} else {
    console.log(number + " не є простим");
}

// 5. завдання
let targetNumber = 81;

let isPower = false;

if (targetNumber > 0) {
    let power = Math.log(targetNumber) / Math.log(3);
    isPower = Math.round(power) === power;
}

if (isPower) {
    console.log(targetNumber + " можна отримати.");
} else {
    console.log(targetNumber + " не можна отримати.");
}

