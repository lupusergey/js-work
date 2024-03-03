

//питаємо данні
let birthYear = prompt('рік народження');
let cityResidence = prompt('місто проживання');
let favoriteSport = prompt('улюблений спорт');

//дізнаємось скільки йому років
let currentYear = new Date().getFullYear();
let age = currentYear - parseInt(birthYear);

alert('вам-' + age + 'років.')

alert(`
${birthYear}
${cityResidence}
${favoriteSport}
${age}
`);


//дізнаємось де проживає
let city = prompt('місто в якому проживаєте');
if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
    let country;
    if (city === "Київ") {
        country = "Україна";
    } else if (city === "Вашингтон") {
        country = "США";
    } else if (city === "Лондон") {
        country = "Велика Британія";
    }
}
alert(city);


//задаємо три види спорту
let sport1 = prompt('футбол-чемпіон світу.', 'Мессі');
let sport2 = prompt('бокс-чемпіон світу.', 'Усік');
let sport3 = prompt('боротьба-чемпіон світу.', 'Беленюк');

let userChoice = prompt("виберіть вид спорта: " + sport1 + ", " + sport2 + " або " + sport3);

userChoice = userChoice.toLowerCase();

if (userChoice === 'футбол') {
    alert('круто хочеш стати чемпіоном!');
} else if (userChoice === 'бокс') {
    alert('круто хочеш стати чемпіоном!');
} else if (userChoice === 'боротьба') {
    alert('круто хочеш стати чемпіоном!');
}
alert(userChoice);

alert(`
${age}
${city}
${userChoice}
`);


