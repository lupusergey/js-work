function generateKey(length, characters) {
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
/*а тут створили функцію з циклом  всередині  який генерує рядок заданоі довжини.
кожен символ вибирається випадково за набором characters
 
//  це як я зрозумів мабуть 
*/
/*
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);
//key значить що ми створили рядок з випадковими символами,  тіпа ключ
//characters що ми створили його з  16 випадкових чисел
*/