//кнопки слайдера

const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    dotsWrapper = document.querySelector('.dots-wrapper'),
    sliderWrapper = document.querySelector('.slider-wrapper'),
    numberOfSlides = 34; //указываем количество слайдов и добавляем их в формате .jpg с названием img_(номер фото - 1 (так как нумерация начинается в .js с нуля)).jpg

//индекс фото

let index = 0,
    dots,
    slides;

//для автопереключения слайдов

let time = null;

//функция генерации слайдов

const addSlides = () => {
    for (let i = 0; i < numberOfSlides; i++) {
        let imageName;
        imageName = './img/img_' + i + '.jpg';
        imageAlt = 'Слайд' + ' ' + i;
        const newSlideDiv = document.createElement('div');
        const newSlideImg = document.createElement('img');
        newSlideImg.src = imageName;
        newSlideImg.alt = imageAlt;
        newSlideDiv.appendChild(newSlideImg);
        newSlideDiv.classList.add('slide');
        sliderWrapper.appendChild(newSlideDiv);
    }
    sliderWrapper.children[2].classList.add('active');
    slides = document.querySelectorAll('.slide');
}

//функция генерации точек слайдера

const addDots = () => {
    slides.forEach(() => {
        const newDot = document.createElement('span');
        newDot.classList.add('dot');
        dotsWrapper.appendChild(newDot);
    })
    dotsWrapper.children[0].classList.add('active');
    dots = document.querySelectorAll('.dot');
}

//генератор слайдов и точек

const SlidesDotsGenerator = () => {
    addSlides();
    addDots();
}

//запускаем генерацию точек и слайдов после загрузки страницы

window.addEventListener('load', SlidesDotsGenerator());

//активный слайд

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

//активная точка

const activeDot = n => {
    for (dot of dotsWrapper.children) {
        dot.classList.remove('active');
    }
    dotsWrapper.children[n].classList.add('active');
}

//активация точки и соответствующего слайда

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

//функция для кнопки далее

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    prepareCurrentSlide(index);
    autoplaySlides();
}

//функция для кнопки назад

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    prepareCurrentSlide(index);
    autoplaySlides();
}

//обработчик события нажатия на точку

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        autoplaySlides();
    })
})

//обработчики событий клика на кнопки назад и далее

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//Функция автопролистивания слайдов слайдера

const autoplaySlides = () => {
    clearInterval(time) //Очистим интервал, это позволит прервать его работу и отменить перелистывание в случае если пользователь только нажал на кнопку вперёд или назад
    time = setInterval(nextSlide, 2000);
}

//Запускаем автопролистывание слайдов слайдера после загрузки страницы

window.addEventListener('load', autoplaySlides());