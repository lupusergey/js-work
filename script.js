let str1 = 'my name';
let str2 = 'is sergey';
let str3 = 'i am 34 years old';


console.log(str1);
console.log(str2);
console.log(str3);

let concat = str1 + str2 + str3;
console.log(concat);

const number = 12345;

const digits = Array.from(String(number), Number);

const result = digits.join(' ');

console.log(result);