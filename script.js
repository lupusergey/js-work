let str1 = 'my name';
let str2 = 'is sergey';
let str3 = 'i am 34 years old';


console.log(str1);
console.log(str2);
console.log(str3);

let concat = str1 + str2 + str3;
console.log(concat);

let number = prompt(12345);

if (number.length === 5 && !NaN(number)) {
    let dig = number.split('');
    let res = dig.join(' ');

    console.log(+ res);
}

