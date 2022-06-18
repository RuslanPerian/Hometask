//task 1

//Первый способ без if

let i;

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
    firstName: 'Ruslan',
    lastName: 'Perian',
    age: 22,
    amIHavePets: false
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

const me = {
    firstName: 'Ruslan',
    lastName: 'Perian'
}

//Стрелочная функция

const fullName = (Info) => {
    let fullName = Info.firstName + ' ' + Info.lastName;
    console.log(fullName);
};

fullName(me);

//Старое объявление функции

function fullNameOld(Info) {
    let fullName = Info.firstName + ' ' + Info.lastName;
    console.log(fullName);
}

fullNameOld(me);

//Вариант 2 переменные

const firstName = 'Ruslan',
    lastName = 'Perian';

//Стрелочная функция

const fullName1 = (name, lastName) => {
    let fullName = name + ' ' + lastName;
    console.log(fullName);
};

fullName1(firstName, lastName);

//Старое объявление функции

function fullName1Old(name, lastName) {
    let fullName = name + ' ' + lastName;
    console.log(fullName);
};

fullName1Old(firstName, lastName);

//Вариант 3 fullName как свойство объекта I

const I = {
    firstName: 'Ruslan',
    lastName: 'Perian',
    fullName: function(firstName, lastName) {
        let result = firstName + ' ' + lastName;
        return result;
    }
}

//Вариант 4 функция задает свойство объекта fullName

//Стрелочная функция

const concatenation = (firstName, lastName) => {
    let fullName = firstName + ' ' + lastName;
    return fullName;
};

const aboutMe = {
    firstName: 'Ruslan',
    lastName: 'Perian',
    fullName: concatenation(firstName, lastName)
}

console.log(aboutMe.fullName);

//Старое объявление функции

function concatenationOld(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
};

const about = {
    firstName: 'Ruslan',
    lastName: 'Perian',
    fullName: concatenationOld(firstName, lastName)
}

console.log(about.fullName);

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
