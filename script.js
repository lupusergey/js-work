function createAccum() {
    let total = 0;//початкова сума
    return function accum(number) {
        total += number;//додаємо число
        return total;//повертаємо суму
    };
}
//створюємо заминання
const sum = createAccum();

//викликаємо функцію та виводимо результат
console.log(sum(3));//результат 3
console.log(sum(5));//результат 8
console.log(sum(20));//результат 28