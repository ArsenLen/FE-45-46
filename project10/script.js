/*
    Как в js понять, что мы кликнули на кнопку?
    Нужно повесить слушатель события на элемент.

    htmlElem.addEventListener() - метод, который позволяет повесить слушатель события на элемент
    elem.addEventListener() - принимает несколько параметров(аргументов):
        1. eventType - тип события - строка, содержащая название события 'click', 'submit', 'input'
        2. eventHandler - функция-обработчик события. callback - функция обратного вызова.
            функция обратного вызова - функция, вызов которой мы передаем в другую функцию/метод
            Данная функция получает параметром event object - объект события.
                В объекте события содержится вся информация о событии
            Для того, чтобы узнать информацию о событии, мы должны получить этот параметр в cb
            В объекте события есть свойство target - это элемент, который вызвал событие
            Функцию eventHandler можно объявить внутри метода addEventListener(), либо
                объявить вне метода и передать, написав название. Круглые скобки при это не ставятся.
            Первый вариант применим тогда, когда функция используется только как обработчик события
                и нигде больше. Второй вариант - тогда, когда функция используется в других местах.

        ФУНКЦИИ:
    1. Когда сами запускаем функцию - immediately invoke function - вызов происходит сразу
        fnName() - сразу вызвалась
    2. Когда мы передаем вызов другой функции/методу - вызов происходит не сразу
        .addEventListener('click', function() {})

    3. Когда у функции нет имени ее называют "анонимной функция"
        Используем внутри методов, когда передаем ее в качестве параметра
        Ей не нужно название, потому что она в других местах использовать не будет

    1. Находим элемент, на который хотим повесить слушатель события

    События:
    1. click
    2. input
    3. submit - событие отправки
    4. scroll

    elem.getAttribute('src')
    elem.setAttrubure('href', 'https://google.com')

    function fnName() {
        // тело функции - действия, которые должна выполнять функция
    }
    fnName()
*/

/*
const greenBtn = document.querySelector('.green-btn')
greenBtn.addEventListener('click', function(event) {
    console.log('клик')
    console.log(event.target.className)
})

// Задача. При нажатии на кнопку red, отобразить в консоли ее id
const redBtn = document.querySelector('#red-btn')
redBtn.addEventListener('click', function(event) {
    console.log(event.target.id)
})
*/
// Задача. При нажатии на кнопку red, менять текст внутри кнопки на "Красный"

/*
const redBtn = document.querySelector('#red-btn')

function changeText(event) {
    event.target.innerText = 'Красный'
}
// changeText() // вызвали сразу
redBtn.addEventListener('click', changeText)
*/

// Задача. Изменить цвет шрифта кнопок на красный при нажатии на них.
// Изменить код так, чтобы коллбэк функция была объявлена вне метода addEventListener 

/* 
    Изменив только функцию changeColor, сделать так, чтобы при нажатии
        на зеленую кнопку, цвет менялся на green, а при нажатии на красную - на red
        1. Читаем, получаем текст из кнопки, на которую нажали
        2. Присваиваем прочитанный текст в event.target.style.color

        при нажатии на кнопку, в консоли отобразить ее название, т.е текст кнопки
*/
const greenBtn = document.querySelector('.green-btn')
const redBtn = document.querySelector('#red-btn')
// Green 
function changeColor(event) {
    // event.target - кнопка на которую кликнули
    // event.target.innerText // Red, Green
    // if(event.target.className === "green-btn") {
    //     // меняем на green
    // } 
    event.target.style.color = event.target.innerText
}
// event.target.id === "./img1.jpg", "./img2.jpg"
// img.setAttribute('src', event.target.id)
greenBtn.addEventListener('click', changeColor)
redBtn.addEventListener('click', changeColor)

/*
    css({
        color: "white"
    })
*/

// elem.addEventListener('type', function cb)
/*
    redBtn.addEventListener('click', function(event) {
        event.target.innerText = 'Красный'
    })
    redBtn.addEventListener('click', function(event) {
        event.target.innerText = 'Пурпур'
    })
*/
// console.log(event) объект события существует только внутри cb, который явл-ся обработчик события
/*
    obj = {
        name: "Arsen"
    }
    obj.name = "ne Arsen"

    obj = {
        name: "ne Arsen"
    }
    
    className - свойство, которое отображает название класса элемента в виде строки
    event = {
        x: 125,
        y: 632,
        target: {
            id: "red-btn"
            className: "green-btn"
            style: {
                font-size: "16px",
                color: ""
            },
            innerText: "Green", 
        }
    }
*/
