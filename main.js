//task 1

const sityName = 'Kyiv',
    countryName = 'Ukraine',
    peopleCount = 2954564,
    stadium = true;

console.log('Название города');
console.log(sityName);
console.log('В какой стране находится этот город');
console.log(countryName);
console.log('Численность населения');
console.log(peopleCount);
console.log('Есть ли футбольный стадион');
console.log(stadium);

//task 2

const weight = 70,
    height = 40;
let square;
square = weight * height;
console.log('Ширина 70см');
console.log(weight);
console.log('Высота 40см');
console.log(height);
console.log('Площадь');
console.log(square);

//task 3

const time = 2,
    speedOfFirst = 95,
    speedOfSecond = 114;
let distance;
distance = (speedOfFirst + speedOfSecond) * time;
console.log('Расстояние на каком находятся города друг от друга');
console.log(distance);

//task 4

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
if (randomNumber < 20) {
    console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
    console.log('randomNumber больше 50');
} else {
    console.log('randomNumber больше 20, и меньше 50');
}

//task 5

//Вриант 1 case с выражениями

const randomNumber1 = Math.floor(Math.random() * 100);
console.log(randomNumber1);
switch (true) {
    case randomNumber1 < 20:
        console.log('randomNumber меньше 20');
        break;
    case randomNumber1 > 50:
        console.log('randomNumber больше 50');
        break;
    default:
        console.log('randomNumber больше 20, и меньше 50');
}

//Вриант 2 case (перечислить каждые значения)

const randomNumber2 = Math.floor(Math.random() * 100);
console.log(randomNumber2);
switch (true) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        console.log('randomNumber меньше 20');
        break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
        console.log('randomNumber больше 50');
        break;
    default:
        console.log('randomNumber больше 20, и меньше 50');
}
