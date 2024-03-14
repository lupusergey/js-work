
// перший пункт 
function power(num, deg) {

    if (deg === 0) {
        return 1;
    }
    return num * power(num, deg - 1);
}

const num = prompt('число');
const deg = prompt('ступінь');

console.log(`${num} ступінь, ${deg} дорівнює, ${power(num, deg)}`);


// другий пункт
function power(number, degree) {

    if (degree === 0) {
        return 1;
    }

    const temp = power(number, Math.floor(degree / 2));
    if (degree % 2 === 0) {
        return temp * temp;
    } else {
        return number * temp * temp;
    }
}

const number = prompt('число');
const degree = prompt('ступинь');

console.log(`${number} степінь, ${degree} дорівнює, ${power(number, degree)}`);