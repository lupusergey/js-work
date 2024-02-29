
let birthYear = prompt('рік народження');
let city = prompt('місто проживання');
let favoriteSport = prompt('улюблений спорт');

function getAge() {
    let age = prompt('Введіть ваш вік:');

    if (!isNaN(age) && age > 0) {
        alert('Ваш вік: ' + age);
    } else {
        alert('введіть коректний вік.');
    }
}
function checkCity(city) {
    let capitals = {
        "Київ": "Україна",
        "Вашингтон": "США",
        "Лондон": "Велика Британія"
    };
    if (capitals.hasOwnProperty(city)) {
        alert('Ти живеш у столиці ' + capitals[city]);
    } else {
        alert('Ти живеш у місті ' + city);
    }
}
getAge();

let userCity = prompt('Введіть назву вашого міста:');

checkCity(userCity);
