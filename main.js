// Все ответы

let optionElements = document.querySelectorAll('.option');

let options = document.querySelector('.options');

//Все вопросы

const question = document.getElementById('question');
const numberOfQuestion = document.getElementById('number-of-question'),
    numberOfAllQuestions = document.getElementById('number-of-all-questions');

//Индекс текущего вопроса и индекс страницы

let indexOfQuestion,
    indexOfPage = 0;

//Трекер ответов 

const answerTracker = document.getElementById('answers-tracker');

//Кнопка далее

const btnNext = document.getElementById('btn-next');

//Общий результат

let score = 0;

//Количество правильных ответов и количество вопросов а также кнопка повторить викторину снова для модального окна вконце

const correctAnswer = document.getElementById('correct-answer'),
    numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
    btnTryAgain = document.getElementById('btn-try-again'),
    quizOverModal = document.querySelector('.quiz-over-modal');

//массив вопросов и ответов а также номера правильного ответа

const questions = [{
    question: 'Что этот код выведет на консоль? var bar = null; console.log(typeof bar === "object");',
    options: [
        'false',
        'true',
        'null',
        'будет выдана ошибка'
    ],
    rightAnswer: 1
}, {
    question: 'Что этот код выведет на консоль? (function(){ var a = b = 3; })(); console.log("a defined? " + (typeof a !== "undefined")); console.log("b defined? " + (typeof b !== "undefined"));',
    options: [
        'true, false',
        'false, true',
        'true, true',
        'false, false'
    ],
    rightAnswer: 1
}, {
    question: 'В React все является ____ .',
    options: [
        'модулем',
        'компонентом',
        'пакетом',
        'классом'
    ],
    rightAnswer: 1
}, {
    question: 'От чего отказались в последних версиях React?',
    options: [
        'componentWillMount',
        'JavaScript',
        'componentDidMount',
        'от приглашений на Facebook'
    ],
    rightAnswer: 0
}, {
    question: 'Что такое Babel?',
    options: [
        'транспайлер',
        'компилятор',
        'интерпретатор',
        'компилятор и транспайлер'
    ],
    rightAnswer: 3
}, {
    question: 'Что такое виртуальная DOM?',
    options: [
        'точная HTML-копия реальной DOM',
        'встроенный компонент браузера',
        'объект JavaScript, содержащий элементы и данные',
        'строка JSON, содержащая элементы и данные, возвращаемые из метода react.render'
    ],
    rightAnswer: 2
}, {
    question: 'Какое их следующих утверждений не относится к рендерингу виртуальной DOM?',
    options: [
        'Реализация виртуальной DOM всегда оказывается быстрее, чем манипуляции с DOM.',
        'Если что-то меняется, выполняется повторный рендер всего пользовательского интерфейса в виртуальной DOM.',
        'Перерисовка DOM — самая медленная часть рендера.',
        'После повторного рендера в реальную DOM вносятся только необходимые изменения.'
    ],
    rightAnswer: 0
}, {
    question: 'Верно или неверно утверждение ниже? useLayoutEffect запускается после рендера React-компонента и гарантирует, что обратный вызов эффекта не заблокирует отрисовку.',
    options: [
        'Верно',
        'Неверно'
    ],
    rightAnswer: 1
}, {
    question: 'Какое из перечисленных ниже слов не является зарезервированным словом в JavaScript?',
    options: [
        'default',
        'throw',
        'finally',
        'undefined'
    ],
    rightAnswer: 3
}, {
    question: 'Что вернут эти функции? function foo1() { return { bar: "hello" }; } function foo2() { return { bar: "hello" }; }',
    options: [
        'undefined, { bar: “hello” }',
        '{ bar: “hello” }, undefined',
        'undefined, undefined',
        '{ bar: “hello” }, { bar: “hello” }'
    ],
    rightAnswer: 1
}];

//Общее число вопросов

numberOfAllQuestions.innerHTML = questions.length;

const load = () => {
    deleteOptionElements();
    addOptionElements();
    deleteArrayElements();
    question.innerHTML = questions[indexOfQuestion].question;
    for (let i = 0; i < questions[indexOfQuestion].options.length; i++) {
        randomOption(i);
    }

    // номер текущей страницы

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
};

const deleteOptionElements = () => {
    while (options.firstChild) {
        options.removeChild(options.firstChild);
    }
};

//Генерация ответов

const addOptionElements = () => {
    for (let i = 0; i < questions[indexOfQuestion].options.length; i++) {
        const newOptionElement = document.createElement('div');
        const dataValue = '' + i;
        newOptionElement.dataset.id = dataValue;
        newOptionElement.classList.add('option');
        options.appendChild(newOptionElement);
        options.children[i].addEventListener('click', e => checkAnswer(e));
    };
    optionElements = document.querySelectorAll('.option');
};

const quizOver = () => {
    quizOverModal.classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

//Массив для уже использованных вопросов

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);

    //якорь для одинаковых вопросов

    let hitDuplicate = false;

    if (indexOfPage == questions.length) {
        quizOver();
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        } else {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

//Массив для уже использованных ответов

let completedOptions = [],
    indexOfOption = 0,
    isNumberOfCorrectAnswerChange = false;

//Зачищаем массив ответов перед каждым новым вопросом

const deleteArrayElements = () => {
    while (completedOptions.length > 0) {
        completedOptions.splice(0, 1);
    }
    indexOfOption = 0;
    isNumberOfCorrectAnswerChange = false;
}

//Случайная генерация последовательности ответов

const randomOption = (ind) => {
    let randomNumber = Math.floor(Math.random() * (questions[indexOfQuestion].options.length));

    //Якорь для одинаковых ответов

    let hitDuplicate = false;

    if (completedOptions.length > 0) {
        completedOptions.forEach(item => {
            if (item == randomNumber) {
                hitDuplicate = true;
            }
        });
        if (hitDuplicate) {
            randomOption(ind);
        } else {
            if ((randomNumber == questions[indexOfQuestion].rightAnswer) && (!isNumberOfCorrectAnswerChange)) {
                questions[indexOfQuestion].rightAnswer = indexOfOption;
                isNumberOfCorrectAnswerChange = true;
            }
            indexOfOption++;
            options.children[ind].innerHTML = questions[indexOfQuestion].options[randomNumber];
        }
    } else {
        if ((randomNumber == questions[indexOfQuestion].rightAnswer) && (!isNumberOfCorrectAnswerChange)) {
            questions[indexOfQuestion].rightAnswer = indexOfOption;
            isNumberOfCorrectAnswerChange = true;
        }
        indexOfOption++;
        options.children[ind].innerHTML = questions[indexOfQuestion].options[randomNumber];
    }
    completedOptions.push(randomNumber);
}

const checkAnswer = el => {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
};

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    });
};

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    });
};

const answerTrackerGenerator = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answerTracker.appendChild(div);
    });
};

const updateAnswerTracker = status => {
    answerTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
    if (!optionElements[0].classList.contains('disabled')) {
        alert('Вам нужно выбрать один из вариантов ответа!');
    } else {
        randomQuestion();
        enableOptions();
    }
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', () => {
    tryAgain();
});

btnNext.addEventListener('click', () => {
    validate();
});

window.addEventListener('load', () => {
    randomQuestion();
    answerTrackerGenerator();
});