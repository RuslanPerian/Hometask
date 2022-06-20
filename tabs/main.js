const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const tabs2 = document.getElementById('tabs2');
const content2 = document.querySelectorAll('.content2');

const changeClass = (el, htmlCollection) => {
    let checkElement = true; //тут мы будем проверять какой именно елемент передан в функцию tabs = true, tabs2 = false;

    for (let i = 0; i < htmlCollection.children.length; i++) {
        if (htmlCollection.children[i].classList.contains('active2')) {
            checkElement = false;
        }
        htmlCollection.children[i].classList.remove('active', 'active2');
    }
    if (checkElement) {
        el.classList.add('active');
    } else {
        el.classList.add('active2');
    }
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target, tabs);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})

tabs2.addEventListener('click', e => {
    const currTab = e.target.dataset.btn2;
    changeClass(e.target, tabs2);
    for (let i = 0; i < content2.length; i++) {
        content2[i].classList.remove('active2');
        if (content2[i].dataset.content2 === currTab) {
            content2[i].classList.add('active2');
        }
    }
})