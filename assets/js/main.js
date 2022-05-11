// Level 1.1


// let age = document.getElementById('age');

// let volljährig = document.getElementById('altersFreigabe');

// function ageCheck() {
//     if (age.value >= 18) {
//         console.log(true);
//         volljährig.innerHTML = "Volljährig";
//     } else if (age.value < 18) {
//         console.log(false);
//         volljährig.innerHTML = "Minderjährig"
//     }
// }

// level 1.2

// let weather = document.getElementById('weather');

// let weatherStatus = document.getElementById('weatherStatus');

// function checkWeather() {
//     console.log()
//     if (weather.value >= 8 && weather.value <= 12) {
//         weatherStatus.innerHTML = "super";
//     } else if (weather.value >= 6 && weather.value <= 7) {
//         weatherStatus.innerHTML = "gut";
//     } else if (weather.value >=3 && weather.value <= 5) {
//         weatherStatus.innerHTML = "okay";
//     } else if (weather.value >= 0 && weather.value <= 2) {
//         weatherStatus.innerHTML = "schlecht";
//     }
// }

// level 1.3

// warum geht das nicht ?

// let input = document.getElementById('input').value >= 18;

// let ageCheck = document.getElementById('ageCheck');

// function greaterThan() {
//     if (input.value == true) {
//         console.log("ja du darsft");
//         ageCheck.innerHTML = "Ja. Du kannst Shisha rauchen";
//     }
// }

let input = document.getElementById('input');

let ageCheck = document.getElementById('ageCheck');

function greaterThan() {
    if (input.value >=18) {
        console.log("ja du darsft");
        ageCheck.innerHTML = "Ja. Du kannst Shisha rauchen";
    } else if (input.value <= 18) {
        ageCheck.innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
}