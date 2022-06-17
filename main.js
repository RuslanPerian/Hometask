//task 1

//Первый способ без if

for (i = 10; i <= 50; i += 2) {
    console.log(i);
}

//Второй способ с if

for (i = 10; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//task 2

const myself = {
    first_name: 'Ruslan',
    last_name: 'Perian',
    age: 22,
    Am_I_have_pets: false
}

console.log(myself);

//task 3

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

//Вориант 1 (без оптимизации)

let result = '"' + array[3] + ' ' + array[7] + ' ' + array[0] + ' ' + array[8] + ' ' + array[11] + ' ' + array[5] + ' ' + array[9] + ' ' + array[6] + ' ' + array[4] + ' ' + array[1] + ' ' + array[12] + ' ' + array[2] + ' ' + array[10] + '"';
console.log(result);

//Вориант 2 (с оптимизацией)

for (i = 0; i < array.length; i++) {
    array[i] += ' ';
}
result = '';
result = '"' + array[3] + array[7] + array[0] + array[8] + array[11] + array[5] + array[9] + array[6] + array[4] + array[1] + array[12] + array[2] + array[10] + '"';
console.log(result);

//task 4

//Вариант 1 с объектом 

const Me = {
    first_name: 'Ruslan',
    last_name: 'Perian'
}

//Стрелочная функция

const fullName = (Info) => {
    let fullName = Info.first_name + ' ' + Info.last_name;
    console.log(fullName);
};

fullName(Me);

//Старое объявление функции

function fullNameOld(Info) {
    let fullName = Info.first_name + ' ' + Info.last_name;
    console.log(fullName);
}

fullNameOld(Me);

//Вариант 2 переменные

const first_name = 'Ruslan',
    last_name = 'Perian';

//Стрелочная функция

const fullName1 = (name, lastname) => {
    let fullName = name + ' ' + lastname;
    console.log(fullName);
};

fullName1(first_name, last_name);

//Старое объявление функции

function fullName1Old(name, lastname) {
    let fullName = name + ' ' + lastname;
    console.log(fullName);
};

fullName1Old(first_name, last_name);

//Вариант 3 fullName как свойство объекта I

const I = {
    first_name: 'Ruslan',
    last_name: 'Perian',
    fullName: function(first_name, last_name) {
        let result = first_name + ' ' + last_name;
        return result;
    }
}

//Вариант 4 функция задает свойство объекта fullName

//Стрелочная функция

const concatenation = (firstName, lastName) => {
    let fullName = firstName + ' ' + lastName;
    return fullName;
};

const AboutMe = {
    first_name: 'Ruslan',
    last_name: 'Perian',
    fullName: concatenation(first_name, last_name)
}

console.log(AboutMe.fullName);

//Старое объявление функции

function concatenationOld(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
};

const About = {
    first_name: 'Ruslan',
    last_name: 'Perian',
    fullName: concatenationOld(first_name, last_name)
}

console.log(About.fullName);

//task 5

//Первый способ без if

let iteration = 21;
while (iteration <= 67) {
    console.log(iteration);
    iteration += 2;
}

//Второй способ с if

iteration = 21;
while (iteration <= 67) {
    if (iteration % 2 == 1) {
        console.log(iteration);
    }
    iteration++;
}